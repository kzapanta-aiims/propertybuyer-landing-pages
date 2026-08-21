/**
 * Bakes the seven fluted-glass caption strips to stills.
 *
 * WHY THIS EXISTS
 * Each truth card and auction photo carries a glass strip across its foot.
 * At runtime assets/js/shaders.mjs mounts a WebGL canvas over an exported
 * still and fades the still out once the first frame is up; the still is what
 * a visitor sees if WebGL, ES modules or any asset fails. The still is
 * therefore a render of a specific photograph, not a generic texture, so it
 * goes stale the moment that photograph is replaced. Replacing a photo
 * without re-baking leaves the previous photograph refracting in the
 * fallback path.
 *
 * The stills originally came out of Paper by hand. This runs the same
 * vendored shader, with the uniforms copied verbatim from shaders.mjs, in
 * headless Chromium at speed 0 and frame 0, so the result is deterministic
 * and reproducible from the repository alone.
 *
 *   node tools/bake-fluted-glass.mjs
 *
 * Run it after tools/import-paper-images.mjs, which writes the glass-src
 * crops this reads. Re-run it whenever any of those crops changes.
 *
 * ONE DELIBERATE CHANGE FROM THE PAPER EXPORTS
 * The auction stills were exported at 623x137 while the live canvas is the
 * card's own width, 573. .auction-photo__glass sets only a height and takes
 * its width from the file, so the still was laid out 50px wider than the
 * canvas that replaces it, centred. Nothing showed for it, because
 * .auction-photo clips, so this is not a visual fix: the extra 50px was
 * always cropped away and only cost bytes. Baking at 573x137 makes the file
 * the size it is actually drawn at. The truth strips were already correct at
 * 361x101, and CSS forces their width in any case.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { existsSync, readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';

const IMG = 'assets/img';

/* CSS size of each shader host, from assets/css/styles.css:
   .truth-card__media .shader-host  height 101, full card width 361
   .auction-photo .shader-host      height 137, full card width 573 */
const STRIPS = [
  { out: 'truth-glass-1.webp', src: 'glass-src-truth-1.webp', w: 361, h: 101 },
  { out: 'truth-glass-2.webp', src: 'glass-src-truth-2.webp', w: 361, h: 101 },
  { out: 'truth-glass-3.webp', src: 'glass-src-truth-3.webp', w: 361, h: 101 },
  { out: 'truth-glass-4.webp', src: 'glass-src-truth-4.webp', w: 361, h: 101 },
  { out: 'auction-glass-1.webp', src: 'glass-src-auction-1.webp', w: 573, h: 137 },
  { out: 'auction-glass-2.webp', src: 'glass-src-auction-2.webp', w: 573, h: 137 },
  { out: 'auction-glass-3.webp', src: 'glass-src-auction-3.webp', w: 573, h: 137 },
];

for (const s of STRIPS) {
  if (!existsSync(join(IMG, s.src))) {
    console.error(`missing ${IMG}/${s.src}. Run tools/import-paper-images.mjs first.`);
    process.exit(1);
  }
}

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png' };
const server = createServer((req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  if (path === '') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!doctype html><meta charset="utf-8"><title>bake</title><body style="margin:0">');
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

/* Headless Chromium has no GPU here, so WebGL comes from SwiftShader. The
   shader is deterministic at frame 0, so a software rasteriser gives the
   same pixels a GPU would, just slower. */
const browser = await chromium.launch({
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});
const page = await browser.newPage({ deviceScaleFactor: 1 });
await page.goto(`${origin}/`);

const gl = await page.evaluate(() => {
  const c = document.createElement('canvas');
  return !!(c.getContext('webgl2') || c.getContext('webgl'));
});
if (!gl) {
  await browser.close();
  server.close();
  console.error('no WebGL in this Chromium; cannot bake');
  process.exit(1);
}

let written = 0;

for (const strip of STRIPS) {
  const dataUrl = await page.evaluate(async ({ origin, src, w, h }) => {
    const V = `${origin}/assets/vendor/paper-shaders`;
    const { ShaderMount } = await import(`${V}/shader-mount.js`);
    const { getShaderColorFromString } = await import(`${V}/get-shader-color-from-string.js`);
    const { ShaderFitOptions } = await import(`${V}/shader-sizing.js`);
    const { flutedGlassFragmentShader, GlassGridShapes, GlassDistortionShapes } =
      await import(`${V}/shaders/fluted-glass.js`);

    const img = await new Promise((resolve, reject) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.onerror = reject;
      i.src = `${origin}/assets/img/${src}`;
    });

    document.body.innerHTML = '';
    const host = document.createElement('div');
    host.style.cssText = `width:${w}px;height:${h}px`;
    document.body.appendChild(host);

    /* Uniforms verbatim from flutedStrip() in assets/js/shaders.mjs, over
       the sizing() defaults from the same file. */
    const mount = new ShaderMount(host, flutedGlassFragmentShader, {
      u_fit: ShaderFitOptions.contain,
      u_scale: 1,
      u_rotation: 0,
      u_offsetX: 0,
      u_offsetY: 0,
      u_originX: 0.5,
      u_originY: 0.5,
      u_worldWidth: 0,
      u_worldHeight: 0,
      u_image: img,
      u_colorBack: getShaderColorFromString('#00000000'),
      u_colorHighlight: getShaderColorFromString('#FFFFFF'),
      u_colorShadow: getShaderColorFromString('#000000'),
      u_highlights: 0.15,
      u_shadows: 0.29,
      u_size: 0.73,
      u_shape: GlassGridShapes.lines,
      u_angle: 92,
      u_distortionShape: GlassDistortionShapes.prism,
      u_distortion: 1,
      u_shift: 0,
      u_stretch: 1,
      u_blur: 1,
      u_edges: 0.25,
      u_marginLeft: 0,
      u_marginRight: 0,
      u_marginTop: 0,
      u_marginBottom: 0,
      u_grainMixer: 0,
      u_grainOverlay: 0,
      /* preserveDrawingBuffer, or toDataURL reads a cleared buffer and every
         still comes out fully transparent. shaders.mjs passes undefined here
         because nothing ever reads its canvas back. */
    }, { preserveDrawingBuffer: true }, 0, 0);

    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    /* Draw once more immediately before reading, so the buffer we read is
       the one this frame produced rather than whatever survived the swap. */
    mount.setFrame(0);

    const canvas = host.querySelector('canvas');
    if (!canvas) throw new Error('ShaderMount produced no canvas');
    const url = canvas.toDataURL('image/png');
    const backing = [canvas.width, canvas.height];
    if (typeof mount.dispose === 'function') mount.dispose();
    return { url, backing };
  }, { origin, src: strip.src, w: strip.w, h: strip.h });

  const raw = Buffer.from(dataUrl.url.split(',')[1], 'base64');

  /* Alpha is load bearing: u_colorBack is transparent, so the strip composites
     over the photograph. The existing stills are RGBA and not opaque. */
  const info = await sharp(raw)
    .resize({ width: strip.w, height: strip.h, fit: 'fill' })
    .webp({ quality: 88, effort: 5, alphaQuality: 100 })
    .toFile(join(IMG, strip.out));

  const stats = await sharp(join(IMG, strip.out)).stats();
  console.log(
    `${strip.out.padEnd(22)} ${info.width}x${info.height}` +
    `  from canvas ${dataUrl.backing.join('x')}` +
    `  ${(info.size / 1024).toFixed(0)}KB  alpha=${!stats.isOpaque}`
  );
  written += 1;
}

await browser.close();
server.close();

console.log(`\n${written} still(s) baked.`);
