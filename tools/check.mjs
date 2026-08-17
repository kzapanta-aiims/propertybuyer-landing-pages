/**
 * Propertybuyer acceptance checklist, automated.
 *
 * Runs the items from Design Rules section 10 that a machine can check by
 * looking. The ones it cannot check (accent on actions only, one primary
 * action per viewport, gold inside prestige components, tier mixing) still
 * need a human pass.
 *
 *   npm install
 *   npm run check              every built page
 *   npm run check home         one segment
 *
 * Exits non zero if any hard rule fails.
 *
 * Run from the repository root, which is the client folder. Paths below are
 * root relative. The pages themselves live under "New Builds/".
 */

import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

/* ------------------------------------------------------------- segments --- */
/* shared/segments.json is the single source of truth. DESIGN.md fixes the six
   strings and HubSpot routing depends on them, so a page that disagrees with
   this file is a failure, not a variation. */

const registry = JSON.parse(readFileSync('shared/segments.json', 'utf8'));
const ALLOWED = registry.segments.map((s) => s.key);

const only = process.argv[2];
const pages = registry.segments
  .filter((s) => s.page && existsSync(s.page))
  .filter((s) => !only || s.key === only)
  .map((s) => ({ key: s.key, file: s.page }));

if (only && pages.length === 0) {
  console.log(`No built page for "${only}". Known segments: ${ALLOWED.join(', ')}`);
  process.exit(1);
}
if (pages.length === 0) {
  console.log('No built pages found. Nothing to check.');
  process.exit(1);
}

const css = readFileSync('assets/css/styles.css', 'utf8');

let failures = 0;
const pass = (m) => console.log(`  ok    ${m}`);
const fail = (m) => { failures++; console.log(`  FAIL  ${m}`); };
const note = (m) => console.log(`  note  ${m}`);
const head = (m) => console.log(`\n${m}`);
const banner = (m) => console.log(`\n${'='.repeat(70)}\n${m}\n${'='.repeat(70)}`);

/* ----------------------------------------------------- browser, portable --- */
/* The sandbox this was first written in shipped chromium at a fixed path.
   Fall back to whatever Playwright installed locally so the checklist runs on
   a developer machine too. */

const PINNED = '/opt/pw-browsers/chromium';
const executablePath = process.env.CHROMIUM_PATH
  || (existsSync(PINNED) ? PINNED : undefined);
const browser = await chromium.launch(executablePath ? { executablePath } : {});

/* ============================================================ per page === */

for (const { key, file } of pages) {
  banner(`${key}  ${file}`);

  const html = readFileSync(file, 'utf8');

  /* Visible copy only: comments, scripts and markup stripped. Gated claims
     live in comments on purpose and must not be linted as if they rendered. */
  const stripped = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '');
  const unescape = (s) => s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&copy;/g, '(c)')
    .replace(/&#9733;/g, '*');
  const text = (frag) => unescape(frag.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
  const visible = text(stripped);

  const between = (tag) =>
    [...stripped.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag.split(' ')[0]}>`, 'g'))]
      .map((m) => text(m[1]));

  /* -------------------------------------------------------------- copy --- */
  head('Copy');

  for (const [label, ch] of [['em dash', '—'], ['exclamation mark', '!']]) {
    const n = visible.split(ch).length - 1;
    n === 0 ? pass(`no ${label} in visible copy`) : fail(`${n} ${label}(s) in visible copy`);
  }

  const banned = [
    'lowest price', 'unlock', 'elevate', 'seamless', 'journey', 'empower',
    "in today's market", 'now more than ever', 'passionate about',
    'pride ourselves', 'solutions', 'click here', 'find out more',
  ];
  const hits = banned.filter((w) => visible.toLowerCase().includes(w));
  hits.length === 0 ? pass('no banned language') : fail(`banned language: ${hits.join(', ')}`);

  const buttons = between('button');
  const headings = ['h1', 'h2', 'h3'].flatMap(between);
  const bannedCta = ['discover', 'explore', 'learn more', 'submit', 'get started', 'click here'];
  const ctaHits = buttons.filter((b) => bannedCta.some((w) => b.toLowerCase().includes(w)));
  ctaHits.length === 0 ? pass('no banned button labels') : fail(`banned CTA: ${ctaHits.join(', ')}`);

  const advocate = [...headings, ...buttons].filter((t) => t.toLowerCase().includes('advocate'));
  advocate.length === 0 ? pass('no "advocate" in a heading or CTA') : fail(`"advocate" in: ${advocate.join(', ')}`);

  /* Bracketed placeholder copy was a hard failure until 18 Aug 2026, when it
     was retired at the client's direction: the Tier 1 proof points arrive
     after the proof of concept, and failing every run until then was noise
     rather than signal. The brackets are still tracked as an open item in
     README.md and HANDOVER.md, and they remain self-evident in the rendered
     page, so nothing silently passes as real. */

  /* Demo scaffolding. The expert count and its toggle assert live
     availability: a visitor can read "6 experts available right now" as
     fact, and the toggle lets anyone rewrite it from the URL. Unlike the
     bracketed copy above, that reads as true rather than as unfinished,
     which is why this one stays a gate. Added 18 Aug 2026. Remove the
     attributes to pass. */
  const poc = [];
  if (/<body[^>]*\sdata-poc=/.test(html)) poc.push('data-poc on <body>, renders the demo availability toggle');
  if (/<body[^>]*\sdata-experts-count=/.test(html)) poc.push('data-experts-count on <body>, seeds an unverified availability claim');
  if (/class="[^"]*\bpoc-toggle\b/.test(html)) poc.push('.poc-toggle markup is still present');
  poc.length === 0
    ? pass('no proof-of-concept scaffolding left in the page')
    : fail(`${poc.length} demo item(s) present, NOT SHIPPABLE: ${poc.join('; ')}`);

  /* ------------------------------------------------- character budgets --- */
  head('Mobile character budgets, checked at 390');

  const subhead = text((stripped.match(/class="hero__subhead">([\s\S]*?)<\/p>/) || [])[1] || '');
  subhead.length <= 42
    ? pass(`hero subhead ${subhead.length}/42`)
    : fail(`hero subhead ${subhead.length}/42: "${subhead}"`);

  const over = (list, max, what) => {
    const bad = list.filter((t) => t.length > max);
    bad.length === 0
      ? pass(`${what} within ${max}`)
      : fail(`${what} over ${max}: ${bad.map((t) => `${t.length} "${t}"`).join(' | ')}`);
  };

  over(['h1', 'h2'].flatMap(between), 60, 'H1 and H2');
  over(between('h3'), 32, 'card headings');
  over(buttons, 34, 'button labels');
  over(between('label class="micro"').concat(between('legend class="micro"')), 20, 'field labels');

  /* ----------------------------------------------------------- capture --- */
  head('Segment capture');

  const used = [...new Set([...html.matchAll(/data-segment="([^"]+)"/g)].map((m) => m[1]))];
  const bad = used.filter((v) => !ALLOWED.includes(v));
  bad.length === 0
    ? pass(`data-segment values all valid (${used.length} distinct)`)
    : fail(`invalid data-segment: ${bad}`);

  /* Every page carries the whole router, so every page must offer all six
     chips. A page that quietly drops a segment breaks the router contract. */
  const missing = ALLOWED.filter((v) => !used.includes(v));
  missing.length === 0
    ? pass('all six segments present in the router and chip rows')
    : fail(`segments missing from this page: ${missing.join(', ')}`);

  const forms = html.match(/<form[^>]*>/g) || [];
  const tagged = forms.filter((f) => f.includes('data-segment'));
  tagged.length === forms.length && forms.length >= 2
    ? pass(`${forms.length} capture points, all carry data-segment`)
    : fail(`${tagged.length} of ${forms.length} capture points carry data-segment, and a page needs at least 2`);

  /* Both capture points must default to the page's own segment, otherwise a
     lead that never touches the chip row arrives labelled as another page. */
  const defaults = [...html.matchAll(/<form[^>]*data-segment="([^"]+)"/g)].map((m) => m[1]);
  defaults.every((d) => d === key)
    ? pass(`both capture points default to "${key}"`)
    : fail(`capture points default to ${defaults.join(', ')}, expected "${key}"`);

  /* ------------------------------------------------------------ markup --- */
  head('Token discipline, markup');

  const inline = (stripped.match(/style="/g) || []).length;
  inline === 0 ? pass('no inline style attributes') : fail(`${inline} inline style attribute(s)`);

  /* Pages live two levels down, under "New Builds/", so every asset reference
     is ../../ relative. Anything shallower resolves to nothing and the page
     loads unstyled, which is easy to miss on a machine that caches. */
  const badRefs = [...html.matchAll(/(?:href|src)="((?:\.\.\/)?assets\/[^"]*)"/g)].map((m) => m[1]);
  badRefs.length === 0
    ? pass('asset paths are relative to the page folder')
    : fail(`asset paths need ../../ : ${badRefs.join(', ')}`);

  /* ---------------------------------------------------------- rendered --- */
  head('Rendered checks');

  /* pathToFileURL, not string concatenation: the page path now contains a
     space, and on Windows a backslash drive path, both of which need encoding
     before Chromium will open them. */
  const url = pathToFileURL(file).href;

  for (const [w, h] of [[390, 844], [768, 1024], [1100, 900], [1440, 900]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(url, { waitUntil: 'networkidle' });

    const r = await page.evaluate(() => {
      const de = document.documentElement;
      const small = [];
      document.querySelectorAll('a, button, select, summary, .chip__label, input:not([type=radio])').forEach((el) => {
        const b = el.getBoundingClientRect();
        if (b.width === 0 && b.height === 0) return;
        if (getComputedStyle(el).position === 'absolute' && b.left < 0) return; // skip link, off screen until focused
        if (b.height < 44) small.push(`${el.tagName}.${el.className} h=${Math.round(b.height)}`);
      });
      const clipped = [];
      document.querySelectorAll('h1, h2, h3, p, label, legend, button').forEach((el) => {
        if (el.scrollHeight > el.clientHeight + 1 && getComputedStyle(el).overflow === 'hidden') {
          clipped.push(el.tagName);
        }
      });
      const cs = getComputedStyle(document.body);
      return {
        hScroll: de.scrollWidth > de.clientWidth,
        small: [...new Set(small)],
        clipped: [...new Set(clipped)],
        h1: getComputedStyle(document.querySelector('h1')).fontSize,
        h2: getComputedStyle(document.querySelector('h2')).fontSize,
        sectionY: getComputedStyle(document.querySelector('.section')).paddingTop,
        bodySize: cs.fontSize,
        bodyWeight: cs.fontWeight,
      };
    });

    const at = `${w}:`;
    r.hScroll ? fail(`${at} horizontal scroll`) : pass(`${at} no horizontal scroll`);
    r.clipped.length === 0 ? pass(`${at} no clipped text`) : fail(`${at} clipped: ${r.clipped}`);
    r.small.length === 0 ? pass(`${at} every tap target 44 or larger`) : fail(`${at} under 44: ${r.small.join(' | ')}`);

    /* UPDATED 17 Aug 2026 for the Paper rebuild. The design promotes the
       hero H1 to type/stat (52/40) and section H2 to type/display (44/34),
       and moves section rhythm to 120 desktop. Figma Variables still hold
       the old values; HANDOVER.md records the delta until Figma is updated. */
    const expect = w >= 768 ? { h1: '52px', h2: '44px', y: '120px' } : { h1: '40px', h2: '34px', y: '48px' };
    r.h1 === expect.h1 && r.h2 === expect.h2
      ? pass(`${at} H1 ${r.h1} and H2 ${r.h2} match the type tokens`)
      : fail(`${at} H1 ${r.h1} H2 ${r.h2}, expected ${expect.h1} and ${expect.h2}`);
    r.sectionY === expect.y
      ? pass(`${at} section rhythm ${r.sectionY}`)
      : fail(`${at} section rhythm ${r.sectionY}, expected ${expect.y}`);
    if (r.bodySize !== '16px' || r.bodyWeight !== '300') {
      fail(`${at} body is ${r.bodySize}/${r.bodyWeight}, expected 16px/300`);
    }

    await page.close();
  }
}

await browser.close();

/* ======================================================= once, not per page */
/* One stylesheet serves every page, so this is a repository check. */

banner('Shared stylesheet');
head('Token discipline, CSS');

/* Everything except the :root token declarations. A hex anywhere else means a
   value was chosen by hand rather than bound to a token in 2. Mapped. */
const outside = (css.match(/:root\s*\{[\s\S]*?\n\}/g) || [])
  .reduce((acc, block) => acc.replace(block, ''), css)
  .replace(/\/\*[\s\S]*?\*\//g, '');
const rawHex = [...outside.matchAll(/:\s*(#[0-9a-fA-F]{3,8})/g)].map((m) => m[1]);
rawHex.length === 0 ? pass('no raw hex outside the token block') : fail(`raw hex in rules: ${rawHex.join(', ')}`);

/* --------------------------------------------------------------- human --- */

head('Not checkable by machine, needs a human pass');
note('Accent appears on actions only.');
note('One primary action visible per viewport height.');
note('Gold appears only inside prestige components.');
note('No Tier 3 claim renders as visible text, and no block mixes tiers.');
note('No orphaned single word on a heading at 390.');
note('Register matches the segment, see each page BRIEF.md.');

const built = pages.map((p) => p.key).join(', ');
const waiting = registry.segments
  .filter((s) => s.status === 'planned' && !existsSync(s.page || ''))
  .map((s) => s.key);

console.log(`\nChecked: ${built}`);
if (waiting.length) console.log(`Not built yet: ${waiting.join(', ')}`);
console.log(`\n${failures === 0 ? 'All hard rules pass.' : `${failures} failure(s).`}`);
process.exit(failures === 0 ? 0 : 1);
