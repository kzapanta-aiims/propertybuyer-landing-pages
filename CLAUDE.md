# CLAUDE.md

Segment landing pages for Propertybuyer, for Google Ads and Performance Max
traffic. Static HTML and CSS. No build step, no framework, no CDN.

**Read these before changing anything, in this order.** They are not optional
context; they record decisions that look arbitrary from the code alone.

1. `DESIGN.md` — the rules layer. Tokens, voice, banned language, claim tiers.
2. `HANDOVER.md` — the state of the buyer build, and what is flagged.
3. `shared/segments.json` — the segment list, and `openDecisions`, which is
   the running decision log. **Anything decided in a build gets recorded
   here**, with a status, a consequence and the date.
4. The page's own `New Builds/<segment>/BRIEF.md`.

## Where things are

```
New Builds/buyer/index.html        the home segment, and the template
New Builds/commercial/index.html   built 20 Aug 2026 from that template
New Builds/investor/index.html     built 21 Aug 2026 from that template
New Builds/developer/BRIEF.md      not built, content blocked

assets/css/tokens.css    tokens and both faces. Shared, never edited by a build
assets/css/base.css      reset, base type, buttons, pills. Shared
assets/css/landing.css   design layer, the four paid segment pages
assets/css/locations.css design layer, the location pages. Empty so far
assets/js/page.js        ONE script, every page
shared/segments.json     segment list plus the decision log
paper/proof-register.md  every Tier 1 proof point, with its source
paper/buyer-copy.md      copy deck, home
paper/commercial-copy.md copy deck, commercial
paper/investor-copy.md   copy deck, investor
tools/check.mjs          the acceptance checklist, automated
tools/import-paper-images.mjs  Paper artwork in, with the crop geometry
```

**All pages share one `assets/img`, and the unprefixed photograph names
belong to the buyer page.** `truth-card-1.webp`, `auction-1.webp`,
`step-research.webp` and the rest are referenced by both pages, so writing new
artwork over them changes the other page as a side effect. The commercial page
holds its own photographs under a `commercial-` prefix for that reason. Any
future page does the same.

Pages sit two levels down, so every asset reference is `../../` relative.

## Current state, 21 August 2026

| Segment | Status | Blocked on |
|---|---|---|
| `home` | built, client-reviewed | nothing |
| `commercial` | built, client-reviewed, merged | budget bands unconfirmed |
| `investor` | **built, not yet reviewed** | three story photographs, budget bands unconfirmed |
| `developer` | not started | three Tier 1 proof points, and a call on cutting a mid-page section |
| `prestige`, `expat` | no page, deliberately | chip only, see segments.json |

**Next step: three story photographs for the investor page**, and proof
records for developer in the same shape as the homebuyer, commercial and
investor decks already supplied. Developer cannot be honestly built without
them, because empty proof slots are the one thing this build refuses to fill
with plausible copy.

**Also open, and it reaches a live page.** The investor deck retells all three
of the buyer page Tier 1 records as investment purchases, with identical
figures and an incompatible story. See `investorDeckOverlap` in
`shared/segments.json`. Nothing on the investor page depends on it, but the
buyer page may be mis-labelled.

**Build the pages one at a time, not in parallel.** Each page teaches you what
is genuinely template and what was quietly buyer-specific; fold that back
before starting the next.

This used to be enforced by the stylesheet: one file served every page, so
parallel branches collided where a bad merge costs most. That was split into
four layers on 21 Aug 2026, so the collision risk is now confined to whichever
design layer you are in. Within a family the advice still stands, because the
four paid pages all share `landing.css`.

**Three stylesheets per page, in this order:** `tokens.css`, `base.css`, then
exactly one design layer. `tokens.css` and `base.css` are shared by every page,
so a change to either lands on pages someone else may be building on another
branch. Treat it the way you would treat a change to Figma Variables. The two
design layers are never loaded together. `npm run check` fails a page that gets
the order wrong, loads zero or two design layers, holds a raw hex in any layer,
or declares a `:root` block outside `tokens.css`.

**The location pages are a second family, and they take their own layout.**
`locations/`, organic search, shipped in HubSpot rather than on Vercel. They
share the design language and the context, not the page structure, so
`landing.css` is not their starting point. Do not derive one from the buyer
page the way a segment page is derived. See `locations/BRIEF.md` and
`shared/locations.json`.

## The rules that get broken most

1. **Never invent a value.** Not a token, not a claim, not a statistic, not a
   proof point. If it is not in Figma Variables or the claims register in
   `DESIGN.md`, stop and ask. A guess here reaches the client.
2. **Unfilled values ship in `[square brackets]`**, visibly unfilled, rather
   than as plausible copy. The checker used to fail on any bracket in visible
   copy; that stop was retired 18 Aug 2026, the safeguard was not.
3. **Do not touch the six segment strings.** `home`, `investor`, `commercial`,
   `developer`, `prestige`, `expat`. HubSpot routing depends on them. Same for
   `budget` option values once a page is live.
4. **All six chips stay in every router**, on every page, including the two
   with no page of their own. `tools/check.mjs` fails a page that drops one.
5. **No em dashes and no exclamation marks**, anywhere, including comments and
   data tables. Australian English. Sentence case. See `DESIGN.md` for the
   full banned list.
6. **Figures on cards are exact, never rounded.** If a price does not
   abbreviate exactly, put it in the body text and keep it out of the stat row.
7. `DESIGN.md` says four segments, `shared/segments.json` says six.
   **segments.json wins**, and the checker enforces it. DESIGN.md is behind.

## Adding a segment page

1. Read that segment's `BRIEF.md` and supply what it lists as missing.
2. Write the copy deck first, at `paper/<segment>-copy.md`, with character
   counts against the budgets. Review it before it becomes HTML.
3. Derive the page from `New Builds/buyer/index.html`. Change copy and the
   `data-segment` on both forms. Leave router, chips, classes and tokens alone.
4. Flip `status` to `built` in `shared/segments.json`, and record any decision
   you took in `openDecisions` there.
5. Add a rewrite in `vercel.json` so the client preview can reach it.
6. Record it in `README.md` and in the state table above.

## Running it

```sh
npm run serve
npm run check <segment>
```

`npm run check` with no argument checks every built page, at 390, 768, 1100
and 1440. It needs `npx playwright install chromium` once.

**Known failure, on every page, deliberate:** three POC demo items
(`data-poc`, `data-experts-count`, `.poc-toggle`) fail the shippability check.
They are the client-demo availability switch and must be deleted before
launch. A page that fails only these is otherwise passing.

## Git

Branch per page or per change, merge to `main` by PR. Commit messages here are
sentences describing intent, not conventional-commit prefixes. Match them.
