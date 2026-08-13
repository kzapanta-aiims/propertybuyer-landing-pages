# Handover, home buyers landing page

Segment `home`. Built for Google Ads and Performance Max traffic.
Static HTML and CSS, no build step, no framework, no CDN dependency.

Sources read, in the order Design Rules requires: Figma Context, the rules
layer, Figma Variables, then Colours, Type & Tone, then Assets.

```
index.html               the page
assets/css/styles.css    tokens, then components
assets/fonts/            Proyale is in, Geist is not, see the README there
tools/check.mjs          the acceptance checklist, automated
DESIGN.md                the rules layer, corrected against Figma
```

Run it: open `index.html`, or `npm run serve`.
Check it: `npm install && npm run check`.

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

**Proyale is a capitals-only face, and the case rule says sentence case with
no exceptions.** Verified against the supplied font file: the lowercase glyphs
have outlines and bounds identical to their uppercase counterparts, no
x-height, no descenders. Every H1 and H2 renders in capitals whatever case is
typed, while the Tone page says the only uppercase on a page is micro labels.
No `text-transform` is applied anywhere in the CSS; this is the face itself.

It has gone unnoticed because the Figma Type page states plainly that Proyale
is not installed and that the H1 and H2 specimens are Geist standing in for
it. The direction "Proyale 400 for H1 and H2" was therefore settled against a
stand-in. The page ships as it renders, in capitals, which sits well beside the
logo wordmark, but the rule and the face cannot both stand and that is a design
lead call, not an agent's.

One consequence to watch: the mobile character budgets were set against a
sentence-case H1 and capitals are wider. The H1 on this page moves from two
lines to three at 390 with Proyale loaded. It still fits with no orphan.

A second consequence: the fallback, Georgia, is mixed case. A heading renders
in sentence case until Proyale loads and in capitals afterwards.

**The `-2 percent` display tracking is now checked.** This was a flagged open
item. At 44 with Proyale actually installed it holds, so the token stays. Note
it was judged on a capitals setting, which is not what the rule assumed. If
the case question resolves toward a mixed-case face, check it again.

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

**Segment card ranking is not decided, so the router does not rank.** All six
items in `who-we-help` carry equal weight. The rules say equal treatment is
itself wrong, because if everything ranks equally nothing ranks, but the
ranking is a client decision and an agent must not make it. Flagged in the
markup at the section.

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

**Geist is not.** It is open licensed and self hosted with no CDN, but the
files were not supplied, so body and UI fall back to Helvetica, Arial. The
`@font-face` rules are in place and pick the files up as soon as they land in
`assets/fonts/` under the names in the README there.

## The logo is not in the build, and I could not fetch it

The Assets page holds two colourways and three lockups. For a landing page the
right one is `PropBuy_Logo_Stacked_Standard`, and because the header sits on
`bg/brand`, the correct colourway there is **White**, not Standard: the
Standard colourway is a teal wordmark with a teal and terracotta brandmark and
it is invisible on teal.

I could not download either file. Figma serves its assets from
`www.figma.com`, and this environment's egress policy denies that host, so the
asset URLs the Figma tools return cannot be retrieved here. Redrawing a logo
by hand is not an option, so the header currently carries a text wordmark set
in Proyale as a stand-in. Because Proyale is capitals-only it reads as
PROPERTYBUYER, which is close to the real wordmark but has no brandmark.

To finish it, attach the two SVGs the same way the font was attached:

- `PropBuy_Logo_Stacked_Standard`, White colourway, node `6068:17`, for the
  header on teal.
- `PropBuy_Logo_Stacked_Standard`, Standard colourway, node `6047:126`, for
  any light surface.

Drop them at `assets/img/propertybuyer-logo-white.svg` and
`assets/img/propertybuyer-logo.svg` and the header swap is one edit.

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
