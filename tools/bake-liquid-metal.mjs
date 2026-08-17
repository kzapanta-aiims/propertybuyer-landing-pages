/**
 * Bakes the liquid metal mask once, at build time, instead of in every
 * visitor's browser.
 *
 * WHY THIS EXISTS
 * The liquid metal shader needs a pre-processed mask, not the raw artwork:
 * red channel carries an edge-distance gradient, green carries opacity.
 * @paper-design/shaders computes that with toProcessedLiquidMetal(), which
 * solves a Poisson equation over the image. Handed an SVG it rasterises at a
 * hardcoded svgMaxSize of 4096px first, so the buyer page was spending about
 * 3 seconds of main-thread time and producing a 1.3 MB blob on every page
 * load, for a decorative mark below the fold. Measured 18 Aug 2026.
 *
 * The mask only depends on the artwork, so it is the same for every visitor.
 * This script runs the same function in headless Chromium, downscales the
 * result to RASTER_WIDTH and writes it next to the source. Runtime cost then
 * drops to one cached image request and no processing at all.
 *
 *   npm run bake
 *
 * Re-run it whenever assets/img/prestige-mark.svg changes.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';

const SRC = 'assets/img/prestige-mark.svg';
const OUT = 'assets/img/prestige-mark-mask.webp';

/* The mark renders at 148% of a 546px container, so ~810 CSS px, and 1600
   covers that at 2x device pixel ratio. The mask is a smooth two-channel
   gradient, so it loses nothing that matters at this size. */
const RASTER_WIDTH = 1600;

if (!existsSync(SRC)) {
  console.error(`missing ${SRC}`);
  process.exit(1);
}

/* toProcessedLiquidMetal fetches the source, so it needs an http origin
   rather than file://. A tiny static server for the duration of the bake. */
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
const server = createServer((req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  /* A blank document at the root, so the browser has a same-origin page to
     run the import from without needing a fixture file on disk. */
  if (path === '') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!doctype html><meta charset="utf-8"><title>bake</title>');
    return;
  }
  try {
    res.writeHead(200, { 'Content-Type': MIME[extname(path)] || 'application/octet-stream' });
    res.end(readFileSync(join(process.cwd(), path)));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${origin}/`);

const dataUrl = await page.evaluate(async ({ origin, src }) => {
  const mod = await import(`${origin}/assets/vendor/paper-shaders/shaders/liquid-metal.js`);
  const t0 = performance.now();
  const { pngBlob } = await mod.toProcessedLiquidMetal(`${origin}/${src}`);
  const ms = Math.round(performance.now() - t0);
  const reader = new FileReader();
  const url = await new Promise((resolve) => {
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(pngBlob);
  });
  return { url, ms, bytes: pngBlob.size };
}, { origin, src: SRC });

await browser.close();
server.close();

const raw = Buffer.from(dataUrl.url.split(',')[1], 'base64');
const meta = await sharp(raw).metadata();

/* The fragment shader samples this texture twice and only twice: img.r for
   the edge gradient (liquid-metal.js line 133) and img.g for opacity (line
   220). Blue is never read, and alpha is fully opaque across the whole
   image, so both are discarded here purely to help the encoder. R and G are
   kept bit-exact by encoding lossless; a lossy codec would show up as noise
   along the mask edges. */
await sharp(raw)
  .resize({ width: Math.min(RASTER_WIDTH, meta.width), withoutEnlargement: true })
  .removeAlpha()
  .linear([1, 1, 0], [0, 0, 0])
  .webp({ lossless: true, effort: 6 })
  .toFile(OUT);

const outMeta = await sharp(readFileSync(OUT)).metadata();
console.log(`processed in browser : ${meta.width}x${meta.height}, ${(dataUrl.bytes / 1024).toFixed(0)} KB, ${dataUrl.ms}ms`);
console.log(`baked to ${OUT} : ${outMeta.width}x${outMeta.height}, ${(readFileSync(OUT).length / 1024).toFixed(0)} KB`);
console.log(`\nruntime saving: ~${dataUrl.ms}ms of main-thread work and ${((dataUrl.bytes - readFileSync(OUT).length) / 1024).toFixed(0)} KB per visit`);
