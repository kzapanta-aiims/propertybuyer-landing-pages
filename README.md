# propertybuyer-landing-pages

Segment landing pages for Propertybuyer, built for Google Ads and Performance
Max traffic.

Static HTML and CSS. No build step, no framework, no CDN dependency.

## Scope

Four pages. `home` was built first and is the template the other three copy.
It builds into the `buyer` folder, so that one segment's key and folder name
differ; every other segment's folder is named after its key.

| Segment | Status | Page |
|---|---|---|
| `home` | **built** | `New Builds/buyer/index.html` |
| `investor` | planned | `New Builds/investor/BRIEF.md` |
| `commercial` | planned | `New Builds/commercial/BRIEF.md` |
| `developer` | planned | `New Builds/developer/BRIEF.md` |
| `prestige` | deferred | chip only, no page |
| `expat` | deferred | chip only, no page |

All six segments stay in every chip row and router. The two deferred segments
capture a labelled lead into the same form; they just have no page of their
own. See `shared/segments.json`.

## Layout

The repository root is the client folder. Everything shared sits at the root,
and each page gets a folder of its own under `New Builds/`.

```
New Builds/buyer/index.html        the built page, and the template
New Builds/investor/BRIEF.md       what the build needs before it starts
New Builds/commercial/BRIEF.md
New Builds/developer/BRIEF.md

shared/segments.json     the segment list, single source of truth
assets/css/styles.css    one stylesheet, every page
assets/fonts/            both faces are in, see the README there
assets/img/              both logo colourways

DESIGN.md                the rules layer, corrected against Figma Variables
HANDOVER.md              read this before touching anything
tools/check.mjs          the acceptance checklist, automated
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

## Open, and blocking more than one page

- **No Tier 1 proof supplied.** This is the blocker. Twelve proof points are
  needed, three per page, each with a number, a named suburb, a month and year
  and a client first name. The buyer page ships bracketed placeholders and
  `npm run check` fails hard on any bracket in visible copy, so no page can
  pass its own checklist until the numbers are real. That is deliberate: it
  makes shipping a fabricated claim impossible by accident rather than merely
  discouraged.
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
