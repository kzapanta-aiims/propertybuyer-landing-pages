/**
 * Imports the commercial photography from the Paper file into assets/img.
 *
 * WHY THIS EXISTS
 * The commercial page was derived from the buyer template and inherited its
 * residential photography: houses on a page about offices and warehouses.
 * The COMMERCIAL -- v1 artboard carries commercial artwork for eleven of
 * those slots.
 *
 * WHY THE OUTPUT IS PREFIXED
 * The two pages share one assets/img, and the buyer page references
 * truth-card-1.webp, auction-1.webp and the rest by those names. Writing the
 * commercial artwork over them changed the buyer page as a side effect, which
 * is how the first attempt at this went wrong. Every file this writes is
 * prefixed `commercial-`, so the two pages can hold different photographs in
 * the same folder and neither can quietly redecorate the other.
 *
 * WHY THE GEOMETRY IS RECORDED
 * Paper crops by oversizing a rectangle inside a smaller frame and offsetting
 * it, so the visible window is a function of the rectangle's size and its x/y
 * against the parent. Reading that off a screenshot would not be
 * reproducible, so the numbers sit below exactly as get_node_info reported
 * them on 21 August 2026. Three of the eleven overflow their frame and carry
 * a real crop; the other eight fill it exactly, so a centred cover is
 * faithful.
 *
 *   npm run import-images
 *
 * Sources are fetched to .paper-src/, which is scratch and gitignored.
 */
import sharp from 'sharp';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

const SRC = '.paper-src';
const OUT = 'assets/img';
const QUALITY = 82;

const PAPER_FILE = '01KZW0Y27PGW3NV0QJRPXAJ9DZ';
const PAPER_ASSETS = `https://app.paper.design/file-assets/${PAPER_FILE}`;

/* `frame` is the visible window in Paper, `rect` the image rectangle, `at`
   its offset against the frame. `size` is 2x the CSS render size where the
   source has the pixels for it and the native crop size where it does not.
   Nothing is ever enlarged. */
const SLOTS = [
  /* --- Truth cards, "We buy property". 361x359 in CSS. ------------------ */
  { out: 'commercial-truth-1.webp', src: 'truth-1.png', size: [722, 718], node: 'BCH-0', asset: '01M0GT8VRTS1Q3RH86ESFZKG6R.png' },
  { out: 'commercial-truth-2.webp', src: 'truth-2.png', size: [722, 718], node: 'BCI-0', asset: '01M0GT97EA11NT900N1WWRZ42P.png' },
  { out: 'commercial-truth-3.webp', src: 'truth-3.png', size: [722, 718], node: 'BCJ-0', asset: '01M0GT9JB1S9RECVXC0GHKEBCT.png' },
  { out: 'commercial-truth-4.webp', src: 'truth-4.png', size: [722, 718], node: 'BCK-0', asset: '01M0GT9PHGD8JG46Q014NW96FH.png' },

  /* --- Step photos, steps 2 to 4. 227x212 in CSS. ----------------------- */
  { out: 'commercial-step-research.webp',   src: 'step-research.png',   size: [454, 424], node: 'BCL-0', asset: '01M0GTA52PTC4SCVXWJJJ801AR.png' },
  { out: 'commercial-step-negotiate.webp',  src: 'step-negotiate.png',  size: [454, 424], node: 'BCM-0', asset: '01M0GTAJYNQA3706BX5WKESV3N.png' },
  { out: 'commercial-step-settlement.webp', src: 'step-settlement.png', size: [454, 424], node: 'BCN-0', asset: '01M0GTB6X60Z5K43CG0TAS2AB9.png' },

  /* --- Service card, the middle of three. 373x400 in CSS.
     Rect 1005x400 at x=-452.328 y=-0.344 inside a 373x400 frame. Source
     1714x682, so the rect scale is 1714/1005 = 1.70547. 636x681 is short of
     2x (746x800), so it ships native rather than upscaled. */
  { out: 'commercial-service-appraise.webp', src: 'service-appraise.png', size: [636, 681],
    crop: { left: 771, top: 1, width: 636, height: 681 }, node: 'BD2-0',
    asset: '5SYHNHXVB8ZY1D2B23PR2W0DYT.png' },

  /* --- Auction strip, "Off-market and auction ready". 573x680 in CSS. --- */

  /* Rect fills the frame. Source 944x1120, short of 2x (1146x1360). */
  { out: 'commercial-auction-1.webp', src: 'auction-1.png', size: [944, 1120], node: 'BCW-0',
    asset: '01M0GTKEW4WZAS17Z0P87S8DJ7.png' },

  /* Rect 1078x719 at x=-374.5 y=-39.297 inside 573x680. Source 1264x848,
     scale 1.17254 across and 1.17942 down. The crop is 672x802, well short
     of 2x, so it ships native. Lowest resolution of the eleven. */
  { out: 'commercial-auction-2.webp', src: 'auction-2.png', size: [672, 797],
    crop: { left: 439, top: 46, width: 672, height: 802 }, node: 'BCX-0',
    asset: '01M0GTTHX9B60SM2YAW3MCRVC2.png' },

  /* Rect 619x930 at x=-45.5 y=-46.297 inside 573x680. Source 1365x2048,
     scale 2.20517 across and 2.20215 down. The crop is 1264x1497, which does
     reach 2x, so this one ships at the full 1146x1360. */
  { out: 'commercial-auction-3.webp', src: 'auction-3.jpg', size: [1146, 1360],
    crop: { left: 100, top: 102, width: 1264, height: 1497 }, node: 'BCZ-0',
    asset: '01M0GTZDHN6RQWA5GPXDE5DWF2.jpg' },
];

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
if (!existsSync(SRC)) mkdirSync(SRC, { recursive: true });

/* Fetch anything missing. These URLs are content addressed, so a changed
   artwork gets a new id and this list records which artwork the crop numbers
   above were measured against. */
for (const slot of SLOTS) {
  const path = `${SRC}/${slot.src}`;
  if (existsSync(path)) continue;
  const url = `${PAPER_ASSETS}/${slot.asset}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`${slot.src}: ${res.status} from ${url}`);
    console.error('The artwork may have been replaced in Paper. Re-read the');
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
    `${slot.node.padEnd(7)} ${slot.out.padEnd(34)} ${info.width}x${info.height}` +
    `  ${(info.size / 1024).toFixed(0)}KB${slot.crop ? '  cropped' : ''}`
  );
  written += 1;
}

console.log(`\n${written} file(s) written.`);
