/**
 * Imports the commercial photography from the Paper file into assets/img.
 *
 * WHY THIS EXISTS
 * The commercial page shipped with the buyer page's residential photography.
 * The COMMERCIAL -- v1 artboard in the Paper file carries commercial artwork
 * for eleven of those slots. Paper crops an image by oversizing the rectangle
 * inside a smaller frame and offsetting it, so the visible window is a
 * function of the rectangle's size and its x/y against the parent. Reading
 * that geometry by eye off a screenshot would not be reproducible, so the
 * numbers are recorded here, per slot, exactly as get_node_info reported them
 * on 21 August 2026.
 *
 * Three of the eleven overflow their frame and therefore carry a real crop.
 * The other eight fill their frame exactly, so a centred cover is faithful.
 *
 * GLASS COMPANIONS
 * The four truth cards and the three auction photos each drive two further
 * files, because a fluted-glass strip sits over the foot of the photo:
 *
 *   <photo>.webp            the photograph
 *   glass-src-<slot>.webp   the bottom band, fed to the live WebGL shader
 *   <slot>-glass.webp       the exported still, shown until the canvas is up
 *
 * The band is regenerated here from the new photograph. Replacing a photo
 * without it would leave the previous photograph refracting under the new
 * one. The stills are baked separately, by tools/bake-fluted-glass.mjs.
 *
 *   node tools/import-paper-images.mjs
 *
 * Sources live in .paper-src/, downloaded from the Paper asset URLs that
 * get_fill_image reports. The directory is scratch and is not committed.
 */
import sharp from 'sharp';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

const SRC = '.paper-src';
const OUT = 'assets/img';
const QUALITY = 82;

const PAPER_FILE = '01KZW0Y27PGW3NV0QJRPXAJ9DZ';
const PAPER_ASSETS = `https://app.paper.design/file-assets/${PAPER_FILE}`;

/* Paper geometry, verbatim. `frame` is the visible window, `rect` is the
   image rectangle, `at` is the rectangle's offset against the frame. Where
   rect equals frame the crop is null and a centred cover is used instead.

   `out` is 2x the CSS render size where the source has the pixels for it,
   and the native crop size where it does not. Nothing is ever enlarged. */
const SLOTS = [
  /* --- Truth cards. 361x359 in CSS, glass strip 101px. ------------------ */
  { src: 'truth-card-1.png', out: 'truth-card-1.webp', size: [722, 718], band: 202, node: 'BCH-0', asset: '01M0GT8VRTS1Q3RH86ESFZKG6R.png' },
  { src: 'truth-card-2.png', out: 'truth-card-2.webp', size: [722, 718], band: 202, node: 'BCI-0', asset: '01M0GT97EA11NT900N1WWRZ42P.png' },
  { src: 'truth-card-3.png', out: 'truth-card-3.webp', size: [722, 718], band: 202, node: 'BCJ-0', asset: '01M0GT9JB1S9RECVXC0GHKEBCT.png' },
  { src: 'truth-card-4.png', out: 'truth-card-4.webp', size: [722, 718], band: 202, node: 'BCK-0', asset: '01M0GT9PHGD8JG46Q014NW96FH.png' },

  /* --- Step photos. 227x212 in CSS, no glass strip. --------------------- */
  { src: 'step-research.png',   out: 'step-research.webp',   size: [454, 424], node: 'BCL-0', asset: '01M0GTA52PTC4SCVXWJJJ801AR.png' },
  { src: 'step-negotiate.png',  out: 'step-negotiate.webp',  size: [454, 424], node: 'BCM-0', asset: '01M0GTAJYNQA3706BX5WKESV3N.png' },
  { src: 'step-settlement.png', out: 'step-settlement.webp', size: [454, 424], node: 'BCN-0', asset: '01M0GTB6X60Z5K43CG0TAS2AB9.png' },

  /* --- Service card. 373x400 in CSS, no glass strip.
     Rect 1005x400 at x=-452.328 y=-0.344 inside a 373x400 frame. The source
     is 1714x682, so the rect scale is 1714/1005 = 1.70547. The crop is the
     373-wide window that offset selects. 636x681 is short of 2x (746x800),
     so it ships at native size rather than upscaled. */
  { src: 'service-appraise.png', out: 'service-appraise.webp', size: [636, 681],
    crop: { left: 771, top: 1, width: 636, height: 681 }, node: 'BD2-0',
    asset: '5SYHNHXVB8ZY1D2B23PR2W0DYT.png' },

  /* --- Auction strip. 573x680 in CSS, glass strip 137px. ---------------- */

  /* Rect fills the frame. Source 944x1120 is short of 2x (1146x1360). */
  { src: 'auction-1.png', out: 'auction-1.webp', size: [944, 1120], band: 226, node: 'BCW-0',
    asset: '01M0GTKEW4WZAS17Z0P87S8DJ7.png' },

  /* Rect 1078x719 at x=-374.5 y=-39.297 inside 573x680. Source 1264x848,
     scale 1264/1078 = 1.17254 across and 848/719 = 1.17942 down. The crop is
     672x802, well short of 2x, so it ships native. Lowest resolution of the
     eleven; noted in the handover. */
  { src: 'auction-2.png', out: 'auction-2.webp', size: [672, 797], band: 161,
    crop: { left: 439, top: 46, width: 672, height: 802 }, node: 'BCX-0',
    asset: '01M0GTTHX9B60SM2YAW3MCRVC2.png' },

  /* Rect 619x930 at x=-45.5 y=-46.297 inside 573x680. Source 1365x2048,
     scale 2.20517 across and 2.20215 down. The crop is 1264x1497, which does
     reach 2x, so this one ships at the full 1146x1360. */
  { src: 'auction-3.jpg', out: 'auction-3.webp', size: [1146, 1360], band: 274,
    crop: { left: 100, top: 102, width: 1264, height: 1497 }, node: 'BCZ-0',
    asset: '01M0GTZDHN6RQWA5GPXDE5DWF2.jpg' },
];

/* glass-src file naming does not follow the photo name, so it is mapped. */
const GLASS_SRC = {
  'truth-card-1.webp': 'glass-src-truth-1.webp',
  'truth-card-2.webp': 'glass-src-truth-2.webp',
  'truth-card-3.webp': 'glass-src-truth-3.webp',
  'truth-card-4.webp': 'glass-src-truth-4.webp',
  'auction-1.webp': 'glass-src-auction-1.webp',
  'auction-2.webp': 'glass-src-auction-2.webp',
  'auction-3.webp': 'glass-src-auction-3.webp',
};

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
if (!existsSync(SRC)) mkdirSync(SRC, { recursive: true });

/* Fetch anything missing from Paper's asset host. These are the URLs
   get_fill_image reported for each rectangle on 21 August 2026; they are
   content addressed, so a changed artwork gets a new id and this list is the
   record of which artwork the crops above were measured against. */
for (const slot of SLOTS) {
  const path = `${SRC}/${slot.src}`;
  if (existsSync(path)) continue;
  const url = `${PAPER_ASSETS}/${slot.asset}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`${slot.src}: ${res.status} from ${url}`);
    console.error('The asset may have been replaced in Paper. Re-read the');
    console.error('rectangle with get_fill_image and update this file.');
    process.exit(1);
  }
  writeFileSync(path, Buffer.from(await res.arrayBuffer()));
  console.log(`fetched ${slot.src}`);
}

let written = 0;

for (const slot of SLOTS) {
  const [w, h] = slot.size;
  let img = sharp(`${SRC}/${slot.src}`);
  if (slot.crop) img = img.extract(slot.crop);

  const info = await img
    .resize({ width: w, height: h, fit: 'cover', position: 'centre', withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(`${OUT}/${slot.out}`);

  console.log(
    `${slot.node.padEnd(7)} ${slot.out.padEnd(24)} ${info.width}x${info.height}` +
    `  ${(info.size / 1024).toFixed(0)}KB${slot.crop ? '  cropped' : ''}`
  );
  written += 1;

  /* The glass strip reads the foot of the finished photograph, at the same
     scale, so the band is taken from the output rather than the source. */
  const band = GLASS_SRC[slot.out];
  if (!band) continue;

  const outMeta = await sharp(`${OUT}/${slot.out}`).metadata();
  const bandInfo = await sharp(`${OUT}/${slot.out}`)
    .extract({ left: 0, top: outMeta.height - slot.band, width: outMeta.width, height: slot.band })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(`${OUT}/${band}`);

  console.log(
    `        ${band.padEnd(24)} ${bandInfo.width}x${bandInfo.height}` +
    `  ${(bandInfo.size / 1024).toFixed(0)}KB  band`
  );
  written += 1;
}

console.log(`\n${written} file(s) written. Now run: node tools/bake-fluted-glass.mjs`);
