# Handover, home buyers landing page

Segment `home`. Built for Google Ads and Performance Max traffic.
Static HTML and CSS, no build step, no framework, no CDN dependency.

Sources read, in the order Design Rules requires: Figma Context, the rules
layer, Figma Variables, then Colours, Type & Tone, then Assets.

> **State, 17 August 2026.** The first home buyers page was rejected by the
> client and deleted (recoverable at git `d5251d3`), then rebuilt the same
> day from the Paper.Design artboard "BUYER 1440", file
> `01KZW0Y27PGW3NV0QJRPXAJ9DZ`, at the client's direction. **For this page
> the Paper file is the visual source of truth**; Figma Variables remain the
> token registry but are now behind Paper. See "The Paper rebuild" below for
> every delta, substitution and known failure that implies.

```
New Builds/buyer/index.html   the page, rebuilt 17 Aug 2026 from Paper
assets/css/tokens.css         Figma token block, Paper token addendum, faces
assets/css/base.css           reset, base type, buttons, pills
assets/css/landing.css        design layer, the paid segment pages
assets/img/                   photography, badges and shader stills from Paper
assets/fonts/                 both faces are in, see the README there
tools/check.mjs               the acceptance checklist, updated for the rebuild
DESIGN.md                     the rules layer, corrected against Figma 13 Aug
```

The `home` segment builds into the `buyer` folder. The key is the routing
label and does not change; the folder is only a path. See `README.md` for the
full layout.

Run it: open `New Builds/buyer/index.html`, or `npm run serve`.
Check it: `npm install && npm run check home`.

## The Paper rebuild, 17 August 2026

Checker state as of 18 August 2026: **one named failure, the demo
scaffolding.** Two earlier failures are resolved rather than outstanding.

1. **Demo scaffolding present**, and the only remaining gate: `data-poc`,
   `data-experts-count` and the `.poc-toggle` markup. Remove all three
   before launch; details further down this file.
2. ~~Seven bracketed placeholders in visible copy~~. Down to three, none of
   them proof. The four Tier 1 brackets (`[Suburb]` and three
   `[Month Year]`) were filled on 18 Aug 2026 from the client's commercial
   purchase deck; see `paper/proof-register.md`. The three that remain are
   legal links in the footer, `[Privacy policy]`, `[Terms]` and
   `[Licence numbers]`, and still need real URLs before launch. The retired
   check rule stays retired.
3. ~~Card heading over budget~~. Fixed 18 Aug: "Bought off market in
   Paddington", 31 characters against the 32 limit.

Token deltas, Paper versus the 13 Aug Figma snapshot. Declared in the
addendum `:root` block of `tokens.css`, and Figma should be updated to match:

- `space/section-y` is now 120 desktop (was 80). 48 at 390 unchanged.
- `type/h3` on cards is 24 desktop (was 20). Mobile derived at 20, no
  authored mobile value exists yet.
- New spacing tokens: gap-xsm 4, gap-xl 64. New radii: avatar 4, avatar
  inner 2. Weight 500 appears on step titles and pills.
- The hero H1 uses `type/stat` (52/40) and section H2s use `type/display`
  (44/34). `check.mjs` expectations were updated accordingly, with a dated
  comment at the edit.

Substitutions and judgment calls:

- **Geist replaces Gotham everywhere.** Confirmed by the client 17 Aug;
  no Gotham licence is needed.
- **Paper's shaders run live, with the stills as fallback.** Round two
  (client brief, 17 Aug) vendored `@paper-design/shaders` v0.0.80 (MIT)
  into `assets/vendor/paper-shaders/`, self hosted, no CDN. The grain
  gradient and the liquid metal mark mount as WebGL canvases over their
  exported stills; each still fades only after its canvas is up, and
  remains if WebGL, modules (file:// pages), or any asset fails.
  Parameters are verbatim from the Paper file. The seven fluted glass
  strips were removed on 21 Aug, when the client deleted that layer from
  the Paper image frames.
- **The design shows four segment chips; the router contract needs six.**
  Prestige and Expat chips were added to the hero form in the unselected
  style. The six `data-segment` keys are intact.
- **The design has one form; the contract needs two capture points.** The
  auction CTA panel is the second `<form data-segment="home">` and routes
  into the hero form.
- **The lead form now has two steps.** Step two (name, phone, email) was
  not designed in Paper; it follows the step-one field pattern and is
  revealed by the Next button, with a back control. Without script the
  whole form renders in one pass. Still no endpoint: submits are stubbed.
  The final button says "Send my details" because DESIGN.md bans "Submit"
  as a button label; change there first if it should read differently.
- **The prestige tel number is not supplied**, so "Call the prestige team"
  routes to the form for now. The mobile header call icon (18 Aug) has the
  same problem and the same answer: it routes to the form until a number
  exists, then its href becomes tel:.
- **Both forms silently discard leads, and that is accepted for now.**
  Confirmed 18 Aug 2026: this whole build is a proof of concept and needs no
  endpoint yet. Verified behaviour is zero network requests, no navigation
  and no acknowledgement, so a visitor who fills the form believes they have
  made contact and has not. Before real traffic: wire an endpoint and add a
  confirmation state, or disable the buttons. `npm run check` does not and
  cannot detect this, so it is the one launch risk with no automated gate.
- **The award list in the hero is transcribed, not supplied.** The eight
  entries in the visually hidden `ul.sr-only` were read off the badge
  artwork in `assets/img/badge-*.png` on 18 Aug 2026, because the badge
  images carried no text alternative at all and were invisible to both
  screen readers and search. Worth one confirmation pass against the
  client's own award records, since the wording came from my reading of the
  images rather than from a list.
- **The mobile CTA carries a POC-only demo toggle. REMOVE BEFORE LAUNCH.**
  Added 18 Aug 2026 for the client presentation: a small switch on the
  right of the bar that flips it between available and nobody available,
  so both states can be shown without editing the URL. It renders only
  under `body[data-poc="true"]`, and the click handler is only bound when
  that attribute is present, so deleting the attribute disables it
  everywhere. The markup, the CSS and the JS are each fenced in comment
  banners reading `POC ONLY`; delete all three before launch. This is not
  a product control. It rewrites an availability claim, which no visitor
  may be able to do, and the same objection applies to `?experts=N`.
  Also listed in README.md under "Remove before launch".
- **The mobile CTA expert count is a PROOF OF CONCEPT, not a claim.**
  Raised 18 Aug as unprovable, then requested anyway for a client demo, so
  it ships as demo data and is labelled as such in three places: the
  comment above `<body>`, the comment in `page.js`, and here.
  `data-experts-count="6"` on `<body>` is the seed; `?experts=N` in the
  URL overrides it so both states can be shown live in a meeting.
  `readAvailability()` in `page.js` is the integration seam: point it at
  the CRM or HR presence endpoint, resolve to a non-negative integer or
  null, and nothing else changes. Zero available switches the button to
  "Request a call back" and stills the status dot. **This must not go to
  paid traffic while the number is invented**: it is a live-availability
  promise, so a wrong count is worse than the Tier 1 placeholders, which
  at least fail the checker loudly.
- **The mobile CTA radius is 16px, client-directed 18 Aug 2026.** The
  radius scale holds two tokens, card 8 and pill 999. 16 is neither, so
  it needs a `radius/sheet` token in Figma before this ships.
- **`--bg-brand-hover` is derived, not a token.** The closer band was
  asked for "the brand hover colour". Mapped holds no `bg/brand-hover`:
  its only hover values are `action/primary-hover` and
  `action/prestige-hover`, both accent colours. The band therefore uses
  `color-mix(in oklab, var(--bg-brand), black 8%)`, which is the
  Interactive States rule from DESIGN.md section 6 applied to the brand
  surface, and the same pattern as the pressed fallbacks already in
  `:root`. It resolves a step darker than `bg/brand` and lighter than the
  footer's `bg/brand-deep`, so the two bands separate. Author a real token
  if this band is keeping that colour.
- **Stats are visible unproven claims**: 5,000+ purchases, 50+ awards, 4.9
  stars, 300 reviews, "most awarded", "Best Buyers Agency of the Year
  2025". They came from the design, not from the proof register. Verify
  before launch and record sources in `paper/proof-register.md`. This does
  **not** cover the three story cards: those were sourced 18 Aug 2026 and
  every figure on them traces to a row in the register.
- **The story cards carry real home buyer records**, filled 18 Aug 2026 from
  "Legacy All Homebuyer (1).pdf": Shane in Brisbane, Stephen and Veronica in
  Sydney, Roderick and Denise in Sydney. Named, dated, and every figure copied
  from the deck rather than derived. The abbreviated figures on the cards are
  exact, not rounded. See `paper/proof-register.md` for the full records and
  what each was chosen against.
- ~~The story cards are commercial purchases on the home buyers page~~.
  Resolved the same day. The slots briefly carried commercial records; they
  now carry home buyer records, and the commercial three moved to Reserves in
  the register as the starting content for the commercial page.
- **The privacy badge on the story photos is hidden, not deleted**, at the
  client's request of 18 Aug 2026. One declaration in `landing.css` restores
  it. Note a street number is legible on two of the three photographs, though
  the deck is the client's own published material.
- **Images are compressed**: 33.5 MB of exports became 2.3 MB of WebP via
  `npm run compress` (tools/compress-images.mjs, caps at 2x rendered
  size). Re-run it after replacing any export.

Motion, per the client briefs of 17 Aug: award badges run a continuous
edge-faded marquee that fades out of both edges with shadows unclipped;
truth cards stack sticky on scroll; the auction photos enter from the
right, blur settling to sharp like panes of glass, staggered; other
sections get a quiet fade-up on first view; hovers are subtle throughout.
All motion sits behind `prefers-reduced-motion`, and reveal states only
exist once script has run, so the page is fully visible without it.

## What was corrected in DESIGN.md

`DESIGN.md` is now in this repository and every value in its frontmatter was
read directly out of the Figma Mapped collection on 13 August 2026 rather than
carried over from the earlier snapshot. Six values disagreed and Figma won each
time. The build follows the corrected file.

| Token | Old snapshot | Figma holds | Now shipping |
|---|---|---|---|
| `action/primary-hover` | `#955A40`, white 5.51 | `#89533B`, white 6.24 | `#89533B` |
| `action/prestige-hover` | `#B99562` | `#B18A50` (gold/500) | `#B18A50` |
| `type/h2` | 28 flat | 34 desktop, 28 at 390 | 34 / 28 |
| `type/stat` mobile | 34 | 40 | 52 / 40 |
| `type/h3` mobile | not listed | 18 | 20 / 18 |
| `bg/prestige` | `#1B1C25` | `#001114` | not used, see below |

The tokens the old file said could not be verified and must not be
interpolated are now filled in from Figma: `text/link`, `border/brand`,
`border/focus`, `border/error`, and the info, success and warning text
colours. The four `-hover` and `-pressed` values that were derived proposals
are retired; two of them existed in Figma all along.

Also added to `DESIGN.md`: both columns of the type scale, the full computed
contrast table, the Assets page lockups and colourway rule, the selected chip
decision, and the dark-surface focus problem.

## Stop and flag

**Proyale is a capitals-only face. RESOLVED 13 August 2026, ships as is.**
Verified against the supplied font file: the lowercase glyphs have outlines
and bounds identical to their uppercase counterparts, no x-height, no
descenders. Every H1 and H2 renders in capitals whatever case is typed, while
the Tone page says the only uppercase on a page is micro labels. No
`text-transform` is applied anywhere in the CSS; this is the face itself.

It went unnoticed because the Figma Type page states plainly that Proyale is
not installed and that the H1 and H2 specimens are Geist standing in for it.
The direction "Proyale 400 for H1 and H2" was therefore settled against a
stand-in.

The decision: this is a property of the face, not a contradiction. The
sentence case rule governs how copy is **written**, not how a chosen display
face renders it. So the page ships as it renders, in capitals, which sits well
beside the logo wordmark. Headings stay written in sentence case, which
matters for the reason in the next paragraph.

One consequence to watch: the mobile character budgets were set against a
sentence-case H1 and capitals are wider. The H1 on this page moves from two
lines to three at 390 with Proyale loaded. It still fits with no orphan.

A second consequence: the fallback, Georgia, is mixed case. A heading renders
in sentence case until Proyale loads and in capitals afterwards.

**The `-2 percent` display tracking is now checked.** This was a flagged open
item. At 44 with Proyale actually installed it holds, so the token stays. It
was judged on a capitals setting, which is what now ships, so the check
stands. It would only need repeating if the display face were ever changed to
a mixed-case one.

**`bg/prestige` is inconsistent with itself in Figma.** The variable resolves
to `#001114`, which is teal/950. Its own description in Mapped, and the Colours
page, both say night/950 `#1B1C25`, "not a teal", client direction 3 August
2026. There is no `night` ramp in Base Values at all. The published ratio
`text/prestige on bg/prestige = 7.15` only computes against `#1B1C25`; against
`#001114` it is 8.13. The documentation is self-consistent, so the alias is
most likely the bug. The token is carried in the CSS with a FLAG comment and
is unused on this page.

**Three tokens the system depends on do not exist in Mapped.**

- `text/on-prestige-action`, the teal/950 ink that reaches 8.13 on gold. This
  matters: teal/700 on `action/prestige-hover` computes to **3.61 and fails
  AA**, while teal/950 holds 6.07. If a gold action ever ships, the token has
  to exist first.
- `action/primary-pressed` and `action/prestige-pressed`. Only `-hover`
  exists. Pressed is derived in CSS with the `color-mix` fallback `DESIGN.md`
  specifies, which is where that file says a fallback belongs. No new token
  was invented.

**Mapped has no focus token for dark surfaces.** `border/focus` is teal/700,
invisible on `bg/brand` and `bg/brand-deep`. Two consequences in the build: the
hero capture panel sits on a light surface inside the teal band so every field
keeps a visible ring, and dark bands carry an on-brand outline via a `.on-dark`
rule. Derived, not invented as a token, and worth a decision.

**Segment card ranking. RESOLVED 13 August 2026: do not rank.** All six items
in `who-we-help` carry equal weight, deliberately. The rules say equal
treatment is itself wrong, because if everything ranks equally nothing ranks,
but that rule assumes you know the order. Here not knowing is the finding: the
client database was never set up to qualify leads or segment the market, so
there is no evidence base to rank against, and ranking now would encode a
guess as a design decision.

These pages exist partly to generate that evidence. Every capture point labels
a lead by segment, budget band and location, and the distribution that comes
back is the ranking input. The router is a measurement instrument before it is
a conversion device. Revisit once there is real volume, and rank on observed
demand rather than assumption.

**Performance Max with Final URL Expansion** can override this destination
entirely. Confirm with Kynan before assuming the page receives the traffic it
was designed for.

## Claims

Rendered, Tier 2, one aggregate line as the rule allows:

> 315+ Google reviews. Buyers only since 2001, and more than 5,000 properties
> purchased.

Verify the review count on the day it ships. It was true at time of writing,
it moves, and the client is targeting 500.

Gated, present in the markup as comments with the reason, rendering nowhere:
the 96 percent purchase rate, the award count, and any specific off market
percentage.

**The three Tier 1 slots are empty on purpose.** Tier 1 needs something
attributable and dated: a named suburb, a purchase price, a saving against
guide, or a client first name plus segment, with the number set in
`type/stat`. No such data was supplied. Inventing a case study would put a
fabricated claim in front of the client's own customers, so the markup pattern
and the `.stat` class are ready and the slots are commented. Supply three and
they drop in above the FAQ.

**One judgement call, named rather than hidden.** Tier 2 is budgeted at one
aggregate line per page. The build uses that budget on the review and scale
line, and separately uses "30 to 60 days from engagement to purchase" as
process copy in `navigate-band`. My reading is that the aggregate line budget
governs stacked scale claims, while 30 to 60 days is claim 3 in the hierarchy,
process, which the Tone page calls one of the strongest lines available and
currently underused. If you read the budget more strictly, drop it from the
process intro and the section still works.

## Decisions taken from the design lead, 13 August 2026

- **Selected segment chip: border and weight, no fill.** `border/brand` at 2px
  plus Geist SemiBold 600; unselected is `border/muted` at 1px, Regular 400.
  This keeps the accent free, so six chips in one viewport do not break "one
  primary action per viewport height", and a selection control does not wear
  an action colour. Native radio inputs, so the row is keyboard operable and
  works with no script. This resolves the item the old `DESIGN.md` called the
  single most important undefined interactive element in the system. It is
  written into the corrected `DESIGN.md` and should go into Figma Variables
  too rather than living only here.
- **Forms are stubbed.** Nothing posts. The three inputs, their names, and
  `data-segment` on both capture points are the deliverable.
- **The website logo is the Standard lockup**, `PropBuy_Logo_Stacked_Standard`.

## Fonts

**Proyale is in**, converted from the supplied TTF to WOFF2, 139 KB down to
39 KB, no other change. It covers every character used on this page.

**Geist is in**, supplied 13 August 2026. Open licensed and self hosted with
no CDN. The bundle carried both a variable font and eighteen static cuts, and
the variable file was chosen on measured size: 67.2 KB in one request against
131.5 KB in four for the cuts this page actually asks for (300, 400, 600,
700). Half the bytes on a page whose load time feeds Ads Quality Score. Body
and UI no longer fall back to Helvetica. Licence in `GEIST-OFL.txt`, italics
not shipped. See `assets/fonts/README.md`.

## Logo

Both SVGs are in the build, at `assets/img/propertybuyer-logo.svg` (Standard
colourway) and `assets/img/propertybuyer-logo-white.svg` (White colourway).
The Figma CDN that would have served them is on the environment's egress
denylist, so they could not be fetched from Figma directly; the client
supplied the exported files instead.

The header and the footer both sit on a dark band (`bg/brand`,
`bg/brand-deep`), so both use the **White** colourway. The text wordmark
stand-in is gone. There is no logo-height token in the system, since none is
warranted for a single fixed lockup, so the rendered height (36px header,
40px footer) is a plain editorial value, commented as such in `landing.css`.

**Two things in the supplied files worth naming, neither of them a build bug
and neither changed here, because a brand asset is not a design decision.**

- The brandmark accent in both colourways is `#B9795D`. That is the exact
  pre-accessibility-fix terracotta: `DESIGN.md` documents `action/primary` as
  "darkened 13 Aug 2026 from the live site's `#B9795D` so white button text
  clears AA at 4.80". The logo file still carries the retired value. Buttons
  on this page correctly use the darker `#A26246`, so the accent now differs
  visibly between a button and the brandmark a few hundred pixels above it.
- The Standard wordmark fill is `#00313A`, not `#00404B` (teal/700, the
  system's ink for headings) and not quite `#02313A` either (teal/800,
  `bg/brand-deep`). It sits a shade off both. Likely predates the token set.

Neither is a reason to hold up this page: colour rules govern layout
decisions, not the pixels inside a supplied asset. But if the client is ever
told the accent moved for accessibility, the same conversation should cover
the logo file, or the two will visibly disagree the next time both are on
screen together.

## Deliberate divergences from the live site

Carried in from the rules layer, and Rich has not been told about any of them.
Do not let the client discover them:

- the accent is darkened to `#A26246` for accessibility, so buttons here are
  visibly darker than propertybuyer.com.au until the live site follows,
- the body face is Geist rather than Gotham Pro,
- the H1 is Proyale 400 capped at 44, with no 52 step.

## For the developer

Backend and integration, none of it stubbed in a way that hides work:

- Both capture points are plain `<form>` elements with no `action` and no
  `method`. Field names are `segment`, `budget_band` and `location`, and each
  form carries `data-segment`, kept in step with the chip the user picks by
  the small script at the bottom of `index.html`. Wire to HubSpot and keep the
  six segment strings exactly as they are, because routing depends on them.
- Name, email and phone belong on the next step, never in the first screen.
- The CallRail number. The header deliberately carries none rather than a
  placeholder, since a fake number would render a false claim as visible text.
- Privacy policy and terms URLs, and the licence numbers, for the footer.
- No canonical and no robots directive are set. This page targets terms the
  homepage holds position one on and the homepage H1 is untouchable, so
  someone should decide whether it is indexable before it goes live.

## Acceptance checklist

`npm run check` runs every item from Design Rules section 10 that a machine
can check by looking, at 390, 768, 1100 and 1440. All hard rules pass as at
the last commit: no em dash, no exclamation mark, no banned language or CTA
labels, hero subhead at 42 of 42, headings under 60, card headings under 32,
button labels under 34, field labels under 20, both capture points carrying a
valid `data-segment`, no raw hex outside the token block, no inline styles, no
horizontal scroll, no clipped text, every tap target 44 or larger, and the
type and rhythm tokens resolving to the right values at each breakpoint.

Five items still need a human pass, and the script lists them at the end:
accent on actions only, one primary action per viewport height, gold inside
prestige components only, no Tier 3 claim rendering and no block mixing tiers,
and no orphaned single word on a heading at 390.
