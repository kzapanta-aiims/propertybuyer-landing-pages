/**
 * Imports photography from the Paper file into assets/img, for every page
 * that takes its artwork from a Paper artboard.
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

  /* Replaced 28 Aug 2026, from COMMERCIAL v2. The v1 artwork stood the pair
     on a residential balcony with a poinciana in flower behind them, which is
     a house cue on a page about offices and warehouses; v2 keeps the same two
     people and moves them to a CBD tower balcony. The rectangle fills its
     frame at 573x680, x=0 y=0, so unlike the v1 artwork there is no crop.
     Source 944x1120 is short of 2x (1146x1360), so it ships native and this
     slot gives up resolution against v1. Nothing is ever enlarged. */
  { out: 'commercial-auction-3.webp', src: 'auction-3-v2.png', size: [944, 1120],
    node: 'LOX-1', asset: '01M131FVTNVGPQWNWRY818XSQ9.png' },
  /* --- Buyer page, auction strip. 573x680 in CSS, so 2x is 1146x1360.
     Replaced 21 Aug 2026 from BUYER v3, where the section reads "Off Market
     and auction ready". These are the unprefixed names, which belong to the
     buyer page; the commercial equivalents sit above. ------------------- */

  /* Rect 680x680 at 0,0 inside a 573x680 frame, so it overflows to the right
     and fits exactly down. Source 2048x2048, scale 3.01176. The crop is
     1726x2048, past 2x, so it ships at the full 1146x1360. */
  { out: 'auction-1.webp', src: 'buyer-auction-1.jpg', size: [1146, 1360],
    crop: { left: 0, top: 0, width: 1726, height: 2048 }, node: 'D2P-0',
    asset: '01M0H7Z6XHC671HBSQMZNH55KD.jpg' },

  /* Rect 1024x681 at x=-225 y=-0.297 inside 573x680. Source 5568x3712, scale
     5.4375 across and 5.45081 down. The crop is 3116x3707, well past 2x, so
     it ships at the full 1146x1360. */
  { out: 'auction-2.webp', src: 'buyer-auction-2.jpg', size: [1146, 1360],
    crop: { left: 1223, top: 2, width: 3116, height: 3707 }, node: 'D2M-0',
    asset: '01M0H7A6YTMTDA10Z2MMZFFA9N.jpg' },

  /* Rect 1295x863 at x=-722 y=-183.297 inside 573x680. Source 2048x1365,
     scale 1.58147 across and 1.58169 down. Rounding put the crop one pixel
     past the bottom edge, so the height is clamped to 1075. At 906x1075 it is
     short of 2x, so it ships native, the lowest resolution of the three. */
  { out: 'auction-3.webp', src: 'buyer-auction-3.jpg', size: [906, 1075],
    crop: { left: 1142, top: 290, width: 906, height: 1075 }, node: 'D2U-0',
    asset: '01M0H7ZWSVSQF7JDWWRKMY51VJ.jpg' },

  /* --- Investor page, from INVESTOR 1440 -- v2, added 28 Aug 2026. -------
     The page was derived from the buyer template and then pointed at the
     commercial photography for these six slots, which put offices and CBD
     towers on a page about residential investment. The client replaced all
     six in Paper and marked them with comment threads on the artboard.

     Every one of the six is a fresh rectangle that fills its frame exactly,
     so none of them carries a crop and a centred cover is faithful. Unlike
     the eleven commercial slots above, these assets are already exported at
     the size the page needs, so the numbers below are measured rather than
     derived: five land exactly on 2x and the sixth is short of it and ships
     native, the same way the buyer page's third auction photo does.

     The prefix is not optional. These names have to differ from the
     commercial ones or importing here would redecorate the commercial page,
     which is the mistake recorded at the top of this file. ------------- */

  /* Truth cards 1 and 3. 361x359 in CSS, so 2x is 722x718, which both
     sources hit exactly. Cards 2 and 4 still take buyer artwork. */
  { out: 'investor-truth-1.webp', src: 'investor-truth-1.jpg', size: [722, 718], node: 'LOO-1',
    asset: '71CJ1WDF8GNWS3J75VKVAMG9WA.jpg' },
  { out: 'investor-truth-3.webp', src: 'investor-truth-3.jpg', size: [722, 718], node: 'LOP-1',
    asset: '0H9AKP039P2CP5JCMFN3TZWYRM.jpg' },

  /* Step 2 of four, the only step photo the client changed. 227x212 in CSS,
     so 2x is 454x424, which the source hits exactly. */
  { out: 'investor-step-research.webp', src: 'investor-step-research.webp', size: [454, 424], node: 'LOR-1',
    asset: '1H9HSPCQD8NYSAKH1BBTTW0HVA.webp' },

  /* Auction strip, all three. 573x680 in CSS, so 2x is 1146x1360. The first
     two hit it exactly. The third source is 906x1075, short of 2x, so it
     ships native and is the lowest resolution of the three. */
  { out: 'investor-auction-1.webp', src: 'investor-auction-1.webp', size: [1146, 1360], node: 'LOS-1',
    asset: '3W44V5PE0X09BK8Y8EEF83BPNF.webp' },
  { out: 'investor-auction-2.webp', src: 'investor-auction-2.webp', size: [1146, 1360], node: 'LOU-1',
    asset: '0K5TMJ9BRAEN06QHG1BGKW5V9R.webp' },
  { out: 'investor-auction-3.webp', src: 'investor-auction-3.webp', size: [906, 1075], node: 'LOT-1',
    asset: '4JDY02TVPBXHMTMSYR4P347S31.webp' },

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
