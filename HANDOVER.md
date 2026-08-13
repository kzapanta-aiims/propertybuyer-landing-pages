# Handover, home buyers landing page

Segment `home`. Built for Google Ads and Performance Max traffic.
Static HTML and CSS, no build step, no framework, no CDN dependency.

Sources read, in the order Design Rules requires: Figma Context, this
repository's `DESIGN.md` rules layer, Figma Variables, then Colours, Type &
Tone. Values were pulled from Figma Variables on 13 August 2026 rather than
from the DESIGN.md snapshot, and where the two disagreed, Figma won.

```
index.html               the page
assets/css/styles.css    tokens, then components
assets/fonts/            empty, see Fonts below
tools/check.mjs          the acceptance checklist, automated
```

Run it: open `index.html`, or `npm run serve`.
Check it: `npm install && npm run check`.

## Where DESIGN.md is wrong

`DESIGN.md` says Figma Variables are canonical and that a disagreement means
the file has a bug. Six disagreements turned up. The build follows Figma in
every case. `DESIGN.md` needs correcting.

| Token | DESIGN.md says | Figma holds | Built with |
|---|---|---|---|
| `action/primary-hover` | `#955A40`, white 5.51 | `#89533B`, white 6.24 | `#89533B` |
| `action/prestige-hover` | `#B99562` | `#B18A50` (gold/500) | `#B18A50` |
| `type/h2` | 28 flat | 34 desktop, 28 at 390 | 34 / 28 |
| `type/stat` mobile | 34 | 40 | 52 / 40 |
| `type/h3` mobile | not listed | 18 | 20 / 18 |
| `bg/prestige` | `#1B1C25` | `#001114` | not used, see below |

The four `-hover` and `-pressed` values in the DESIGN.md frontmatter are
described there as derived proposals pending the design lead. Two of them
have since been settled in Figma and the frontmatter did not follow. The
proposal to demote Figma's hover to `pressed` was never applied either.

## Stop and flag

**`bg/prestige` is broken in Figma and I did not guess at it.** The variable
resolves to `#001114`, which is teal/950. Its own description in Mapped, and
the Colours page, both say night/950 `#1B1C25`, "not a teal", client direction
3 August 2026. There is no `night` ramp in `1. Base Values` at all. The
documented ratio `text/prestige on bg/prestige = 7.15` only computes against
`#1B1C25`; against `#001114` it is 8.13. So the documentation is internally
consistent and the alias is wrong, most likely because night/950 was never
created. Either the ramp needs adding or the direction needs reversing. The
token is carried in the CSS with a FLAG comment and is unused on this page.

**Two tokens DESIGN.md depends on do not exist in Mapped.**

- `text/on-prestige-action`, the teal/950 ink that reaches 8.13 on gold. This
  matters: teal/700 on `action/prestige-hover` computes to **3.61 and fails
  AA**, while teal/950 holds 6.07. If a gold action ever ships, the token has
  to exist first.
- `action/primary-pressed` and `action/prestige-pressed`. Only `-hover`
  exists. Pressed is derived in CSS with the `color-mix` fallback DESIGN.md
  specifies, which is where DESIGN.md says a fallback belongs. No new token
  was invented.

**Mapped has no focus token for dark surfaces.** `border/focus` is teal/700,
which is invisible on `bg/brand` and `bg/brand-deep`. Two consequences in the
build: the hero capture panel sits on a light surface inside the teal band so
every field keeps a visible ring, and dark bands carry an on-brand outline
via a `.on-dark` rule. Derived, not invented as a token, and worth a decision.

**Segment card ranking is not decided, so the router does not rank.** All six
items in `who-we-help` carry equal weight. The rules say equal treatment is
itself wrong, because if everything ranks equally nothing ranks, but the
ranking is a client decision and an agent must not make it. Flagged in the
markup at the section.

**Performance Max with Final URL Expansion** can override this destination
entirely. Confirm with Kynan before assuming the page receives the traffic it
was designed for.

**Indexing is not set.** No canonical and no robots directive. This page
targets terms the homepage holds position one on, and the homepage H1 is
untouchable, so someone should decide whether this is indexable before it goes
live.

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
  works with no script. This resolves the item DESIGN.md calls the single most
  important undefined interactive element in the system, and it should go into
  Figma Variables and the rules layer rather than living only here.
- **Forms are stubbed.** Nothing posts. The three inputs, their names, and
  `data-segment` on both capture points are the deliverable. Wire to HubSpot
  at integration.
- **Fonts are supplied later.** See below.

## Fonts

Neither font file is in the repository, so both stacks currently fall back.
`@font-face` rules are in place and pick the files up as soon as they land in
`assets/fonts/`:

- `proyale-regular.woff2`, one weight, 400. Served on the live site from
  `propertybuyer.com.au/hubfs/fonts`. H1 and H2 render in Georgia until it
  arrives. Never ask a browser for Proyale Bold.
- `geist-light.woff2`, `geist-regular.woff2`, `geist-semibold.woff2`,
  `geist-bold.woff2`. Open licensed and self hosted, no CDN.

Two build notes follow the fonts, not the code. The `-2 percent` display
tracking was measured on a Gotham set H1 and has never been checked optically
on Proyale at 44. Look at it once Proyale is installed and move the token if
it reads loose or tight.

## Deliberate divergences from the live site

Carried in from the rules layer, and Rich has not been told about any of them.
Do not let the client discover them:

- the accent is darkened to `#A26246` for accessibility, so buttons here are
  visibly darker than propertybuyer.com.au until the live site follows,
- the body face is Geist rather than Gotham Pro,
- the H1 is Proyale 400 capped at 44, with no 52 step.

## Still missing before this can go live

- The logo asset. A text wordmark stands in. It is on Brand > Assets in Figma.
- A phone number. The CallRail tracking number was not supplied and inventing
  one would render a false claim as visible text, so the header carries none.
- Privacy policy and terms URLs, and the licence numbers for the footer.
- The HubSpot form endpoint.
- Three Tier 1 proof points.

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
