/**
 * Adds loading and decoding hints to the buyer page's <img> tags.
 *
 * The page carries 66 images and only the three hero portraits sit above the
 * fold, but every one of them was fetched eagerly at load: 3.6 MB of images
 * competing with the fonts and the stylesheet before the visitor saw
 * anything. Measured 18 Aug 2026.
 *
 * Idempotent: tags that already carry a hint are left alone, so this can be
 * re-run after editing the markup.
 *
 *   node tools/add-image-hints.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'New Builds/buyer/index.html';

/* The only images above the fold on any viewport. They stay eager and get
   fetchpriority so they win the bandwidth race against the fonts. */
const EAGER = ['hero-buyer-1.webp', 'hero-buyer-2.webp', 'hero-agent-grey.webp'];

let html = readFileSync(FILE, 'utf8');
let lazy = 0;
let eager = 0;
let skipped = 0;

html = html.replace(/<img\s([^>]*)>/g, (tag, attrs) => {
  if (/\b(loading|fetchpriority|decoding)=/.test(attrs)) {
    skipped += 1;
    return tag;
  }
  const trimmed = attrs.trim();
  if (EAGER.some((name) => attrs.includes(name))) {
    eager += 1;
    return `<img ${trimmed} fetchpriority="high" decoding="async">`;
  }
  lazy += 1;
  return `<img ${trimmed} loading="lazy" decoding="async">`;
});

writeFileSync(FILE, html);
console.log(`eager + fetchpriority high : ${eager}`);
console.log(`lazy + async decoding      : ${lazy}`);
console.log(`already hinted, untouched  : ${skipped}`);
