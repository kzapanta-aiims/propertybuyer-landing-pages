# propertybuyer-landing-pages

Segment landing pages for Propertybuyer, built for Google Ads and Performance
Max traffic.

Static HTML and CSS. No build step, no framework, no CDN dependency.

## Scope

Four pages. `home` is built first and is the template the other three copy.
It builds into the `buyer` folder, so that one segment's key and folder name
differ; every other segment's folder is named after its key.

`commercial` was built from that template on 20 August 2026 and `investor` on
21 August 2026. Build `developer` on its own rather than alongside anything
else: one stylesheet serves every page, so parallel branches collide in the
file where a bad merge costs most, and each page teaches you what is genuinely
template before the next one starts.

| Segment | Status | Page |
|---|---|---|
| `home` | **built** | `New Builds/buyer/index.html` |
| `investor` | **built** | `New Builds/investor/index.html` |
| `commercial` | **built** | `New Builds/commercial/index.html` |
| `developer` | planned | `New Builds/developer/BRIEF.md` |
| `prestige` | deferred | chip only, no page |
| `expat` | deferred | chip only, no page |

The first home buyers page was rejected by the client on 17 August 2026 and
rebuilt the same day from the Paper.Design artboard "BUYER 1440" (file
`01KZW0Y27PGW3NV0QJRPXAJ9DZ`). The old build is recoverable from git at
`d5251d3`. The Paper file, not Figma, is the visual source for this design;
the token deltas that implies are recorded in `HANDOVER.md`.

All six segments stay in every chip row and router. The two deferred segments
capture a labelled lead into the same form; they just have no page of their
own. See `shared/segments.json`.

## Layout

The repository root is the client folder. Everything shared sits at the root,
and each page gets a folder of its own under `New Builds/`.

```
New Builds/buyer/index.html        the page being rebuilt, and the template
New Builds/commercial/index.html   built 20 Aug 2026 from that template
New Builds/investor/index.html     built 21 Aug 2026 from that template
New Builds/developer/BRIEF.md

shared/segments.json     the segment list, single source of truth
assets/css/styles.css    one stylesheet, every page. Tokens and font faces
                         only; the design layer goes in below the marker
assets/fonts/            both faces are in, see the README there
assets/img/              both logo colourways

CLAUDE.md                read order, current state and next step, for agents
DESIGN.md                the rules layer, corrected against Figma Variables
HANDOVER.md              read this before touching anything
tools/check.mjs          the acceptance checklist, automated
tools/extract-deck-images.mjs  story photographs out of the client decks
paper/buyer-copy.md      copy deck, home
paper/commercial-copy.md copy deck, commercial
paper/investor-copy.md   copy deck, investor
paper/proof-register.md  every Tier 1 proof point, with its source
paper/TRANSFER.md        token transfer into Paper.Design, runs locally only
paper/theme-tokens.css   the Mapped collection as CSS, for that transfer
```

`paper/` is prepared work, not part of the build. Paper's MCP server listens
on localhost and only while Paper Desktop has the file open, so the transfer
cannot run from a remote session. `paper/TRANSFER.md` carries the setup and
the task prompt so that run is mechanical when someone does it locally.

`Brand Assets/` and `CRO/` also sit in this folder. They are client working
files rather than build source, and `.gitignore` keeps them out of the
repository.

Pages sit two levels down, so every asset reference inside a page is `../../`
relative. The checker fails a page that gets this wrong.

## Run it

```sh
npm run serve
```

Then open `/New%20Builds/buyer/`. Or open `New Builds/buyer/index.html`
directly.

## Check it

```sh
npm install
npx playwright install chromium
npm run check
```

Runs every item from Design Rules section 10 that a machine can check by
looking, at 390, 768, 1100 and 1440, across every built page. Exits non zero
on any failure, and lists the items that still need a human pass.

One segment at a time:

```sh
npm run check home
```

## Adding a segment page

1. Read that segment's `BRIEF.md`, and supply everything it lists as missing.
2. Copy `New Builds/buyer/index.html` into the segment folder.
3. Change the copy, and the `data-segment` on both `<form>` elements.
4. Leave the router, the chip rows, the classes and the tokens alone.
5. Flip `status` to `built` in `shared/segments.json`.
6. `npm run check <segment>`, using the segment key, so `npm run check home`
   checks the buyer page.

## Before you change anything

Read `DESIGN.md` for the rules and `HANDOVER.md` for the state of this build.
Between them they record which tokens are missing or broken upstream, which
claims are gated and why, the decisions the design lead has made, and what is
still needed before any of this can go live.

`DESIGN.md` was corrected against Figma Variables on 13 August 2026. Every
value in its frontmatter was read out of the Mapped collection rather than
interpolated, so it can be trusted as a snapshot, but Figma still wins on any
future disagreement.

Two standing rules from the design system apply to every edit here:

1. Never invent a value. If it is not in Figma Variables, stop and ask. A
   plausible hex is worse than a blocked task, because nobody catches it.
2. Never soften a constraint because a brief seems to want it softened. Name
   the conflict in your handover.

Every colour, space, radius and size in `styles.css` is an alias of a token in
Figma `2. Mapped`, declared once in the `:root` block at the top of the file
with its Figma token name in a comment. Nothing below that block holds a raw
value, and `npm run check` fails if one appears.

## Deploying the preview

Hosted on Vercel, linked to this repository, so every push to `main`
redeploys. Config lives in `vercel.json`; it has no comments because Vercel
validates the file against a strict schema and rejects unknown keys, so the
reasoning is here instead.

- **No build step.** `installCommand` and `buildCommand` are empty and
  `outputDirectory` is `.`, so Vercel serves the repository as it stands. The
  dependencies in `package.json` are the checker and the two asset tools, and
  none of them run on a server; without this, every deploy would download
  Playwright and sharp for nothing.
- **The page is served at the root.** `New Builds/buyer/` is an awkward URL
  to send a client, so a rewrite maps `/` and `/buyer` to it. This works
  because every asset path in the page is `../../assets/...` and browsers
  clamp `..` at the root, so they still resolve to `/assets/...`.
- **`X-Robots-Tag: noindex, nofollow` on everything, and it must come off
  before launch.** While this is a proof of concept the page carries
  bracketed footer links such as `[Terms]`, an unverified availability
  count, and award and review figures nobody has checked. None of that
  should be indexed against the client's brand. Vercel noindexes its preview
  URLs on its own, but this header also covers the production URL, which is
  the one that would otherwise get crawled.

## Remove before launch

Two things on the buyer page exist for the 18 August 2026 client demo and
must not reach live traffic. Both hang off attributes on `<body>` in
`New Builds/buyer/index.html`, so removing them is a one line change.

| Attribute | What it does | Before launch |
|---|---|---|
| `data-poc="true"` | Renders the demo toggle in the fixed mobile CTA, which flips the bar between available and nobody available | **Delete the attribute**, then delete the two blocks marked `POC ONLY` in `index.html`, `styles.css` and `page.js` |
| `data-experts-count="6"` | Seeds the expert count in that bar. Demo data, not a measured number | Replace with a real presence feed via `readAvailability()` in `page.js`, or delete the attribute so the bar shows the unquantified line |

The toggle is the urgent one. It lets any visitor rewrite an availability
claim, and `?experts=N` in the URL does the same, so neither should survive
into a page that carries ad spend. See `HANDOVER.md`.

`npm run check` now fails while any of this is present, listing each item by
name, so the reminder is a gate rather than a note. It fails today, which is
correct: this build is a proof of concept, not a shippable page.

## This build is a proof of concept

Confirmed 18 August 2026. Both capture forms are deliberately unwired: the
submit handler calls `preventDefault()` and there is no endpoint, so a lead
entered on this page goes nowhere and the visitor sees no acknowledgement.
That is accepted for now. Before this takes real traffic it needs an endpoint
and a confirmation state, or the buttons need disabling, because a form that
silently discards a lead is worse than no form. Tracked in `HANDOVER.md`.

## Open, and blocking more than one page

- **Tier 1 proof: nine done, three still needed.** Twelve proof points are
  needed in total, three per page, each with a number, a location, a year and a
  client name. Home, commercial and investor are all filled from client decks
  and every figure traces to a row in `paper/proof-register.md`. Only the three
  for `developer` are outstanding.

  The investor three came from "Legacy All Investor.pdf" on 21 August 2026 and
  give three states, which the commercial three could not. Their photographs
  are the hero shots from the same deck pages, at the same 685x419 the buyer
  page's story images already ship at, extracted by
  `tools/extract-deck-images.mjs`.

  Two things about that deck are worth knowing. It retells all three of the
  buyer page records as investment purchases, with identical figures and an
  incompatible story; see `investorDeckOverlap` in `shared/segments.json`. And
  its page 20 copy calls the property an apartment twice while its own
  photographs of that property show a freestanding cottage, so that card names
  no dwelling type at all.

  The three are home buyer records, from the client's legacy home buyer deck:
  a first home in Brisbane, a family home in Sydney bought after three auction
  losses, and an eastern suburbs downsize. They ladder by life stage and by
  price, so a visitor finds themselves in one of them. Melbourne is the
  largest group in the deck and is not among the three; the register names the
  two Melbourne records that could take a slot if the client would rather show
  three states than three life stages.

  `npm run check` used to fail on any bracket in visible copy. That rule was
  retired 18 August 2026 at the client's direction. The three brackets left on
  the buyer page are footer legal links, not proof.
- **Deferred chip behaviour is assumed, not confirmed.** `prestige` and
  `expat` keep their chips in every router and post to the same capture form,
  so the lead still arrives labelled in HubSpot. The alternative is linking
  those two chips out to the equivalent propertybuyer.com.au pages, which
  costs the labelled lead. Raised 13 August 2026, still unconfirmed.
- See `HANDOVER.md` for the token-level problems: `bg/prestige`,
  `border/focus` on dark surfaces, and three tokens missing from Mapped.

## Settled, do not reopen

Recorded in full, with reasoning, under `openDecisions` in
`shared/segments.json`. Summarised here so they are not raised again.

- **Proyale renders H1 and H2 in capitals.** Resolved 13 August 2026, ships as
  is. A property of the face, not a breach of the sentence case rule: that
  rule governs how copy is written, not how a chosen display face renders it.
  No `text-transform` anywhere, and headings stay written in sentence case so
  the Georgia fallback renders correctly before Proyale loads. See
  `assets/fonts/README.md`.
- **All six segments rank equally, deliberately.** Resolved 13 August 2026.
  The client database was never set up to qualify leads, so there is no
  evidence base to rank against and ranking now would encode a guess as a
  design decision. These pages generate that evidence: every capture point
  labels a lead by segment, budget band and location, and the distribution
  that comes back is the ranking input. The router is a measurement instrument
  before it is a conversion device. Revisit on observed demand.
- **Both faces are supplied.** Proyale and Geist are self hosted, no CDN.
  Geist arrived 13 August 2026 as one variable file covering the whole 100 to
  900 axis, chosen over four static cuts on measured size.
