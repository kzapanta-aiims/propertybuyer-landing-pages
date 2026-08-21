---
version: "alpha"
name: "Propertybuyer"
description: >
  Design system for Propertybuyer landing pages and section-level conversion
  work on an existing HubSpot site. Independent Australian buyers agency,
  established 2001. Audience 40 to 65, professional, risk-handover buyers.
  Four segment landing pages: home, investor, commercial, developer.
  This file is a rules layer for agents. Values below were read directly from
  the Figma Mapped collection on 13 August 2026, not interpolated. On any
  conflict, Figma Variables win.
  Scope: design and creative only. Backend, HubSpot field mapping and ad
  account configuration sit with other people. See the Backend Handover
  section for what a developer needs from the markup, and nothing beyond it.
colors:
  # Backgrounds
  bg/page: "#FFFFFF"           # base/white
  bg/surface: "#FBFAF7"        # sand/50, cards and panels on white
  bg/surface-alt: "#F5F1E9"    # sand/100, the cream band
  bg/brand: "#00404B"          # teal/700, hero and CEO band
  bg/brand-deep: "#02313A"     # teal/800, footer
  bg/prestige: "#001114"       # CONFLICTED, see Stop and Flag. Variable
                               # resolves to teal/950. Its own description and
                               # the Colours page both say night/950 #1B1C25.
  bg/info-subtle: "#E8EEF0"    # teal/100
  bg/success-subtle: "#EFF6F1" # success/50
  bg/warning-subtle: "#FFF8E8" # warning/50
  bg/error-subtle: "#FBF0EF"   # destructive/50
  # Text
  text/heading: "#00404B"      # teal/700, headings on light backgrounds
  text/body: "#1C2B2F"         # grey/900, the ink. Not black, never black
  text/muted: "#5C6B6F"        # grey/500, intros and captions
  text/on-brand: "#FFFFFF"     # base/white, text on teal sections
  text/on-brand-muted: "#B6C8CB" # teal/300, footer links
  text/link: "#00404B"         # teal/700, inline links on light backgrounds
  text/prestige: "#C9A26B"     # gold/400, prestige components only
  text/highlight: "#FF7F22"    # orange/500, H1 accent word and review stars
  text/info: "#00404B"         # teal/700
  text/success: "#2F5F42"      # success/700. The ramp is invented, see flags
  text/warning: "#A87C0E"      # warning/700
  text/error: "#B0392E"        # destructive/600
  # Actions
  action/primary: "#A26246"       # terracotta/500, the accent. Actions only
  action/primary-hover: "#89533B" # terracotta/600. White text 6.24
  action/prestige: "#C9A26B"      # gold/400, prestige CTAs only
  action/prestige-hover: "#B18A50" # gold/500
  # Borders
  border/default: "#E4E0D8"    # sand/200, hairline on warm surfaces
  border/muted: "#D2D9DA"      # grey/200, hairline on cool or white surfaces
  border/brand: "#00404B"      # teal/700, emphasised border
  border/focus: "#00404B"      # teal/700, keyboard focus ring
  border/info: "#526F75"       # teal/500
  border/success: "#A3CDB1"    # success/300
  border/warning: "#E6C96A"    # warning/300
  border/error: "#B0392E"      # destructive/600
typography:
  # Every size carries a desktop and a 390 value. The mobile column is what
  # the build ships at 390 and it is part of the token, not a suggestion.
  display:                     # type/display, the hero H1
    fontFamily: "Proyale, Georgia, serif"
    fontSize: "44px"           # ceiling, not a starting size. Mobile 34
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-2%"
  stat:                        # type/stat, Tier 1 proof numbers only
    fontFamily: "Geist, Helvetica, Arial, sans-serif"
    fontSize: "52px"           # mobile 40
    fontWeight: 700
    letterSpacing: "-2%"
  h2:                          # type/h2, section headings
    fontFamily: "Proyale, Georgia, serif"
    fontSize: "34px"           # mobile 28
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-2%"
  h3:                          # type/h3, card headings and H3 to H6
    fontFamily: "Geist, Helvetica, Arial, sans-serif"
    fontSize: "20px"           # mobile 18
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-1.5%"
  body:                        # type/body
    fontFamily: "Geist, Helvetica, Arial, sans-serif"
    fontSize: "16px"           # 16 at every viewport
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "-1%"
  small:                       # type/small
    fontFamily: "Geist, Helvetica, Arial, sans-serif"
    fontSize: "14px"           # 14 at every viewport
    fontWeight: 300
    lineHeight: 1.6
  micro:                       # type/micro, field labels uppercase Bold
    fontFamily: "Geist, Helvetica, Arial, sans-serif"
    fontSize: "13px"           # 13 at every viewport
    fontWeight: 700
    letterSpacing: "+4%"       # uppercase only. The one positive tracking
  button:                      # type/button, sentence case always
    fontFamily: "Geist, Helvetica, Arial, sans-serif"
    fontSize: "16px"           # 16 at every viewport
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.5%"
rounded:
  card: "8px"                  # radius/card. Every card, panel, media, chip, input
  pill: "999px"                # only for shapes round by definition
spacing:
  section-y: "80px"            # space/section-y. Mobile 48. One rhythm, no second
  gutter: "20px"               # space/gutter
  gap-lg: "40px"               # sparse density
  gap: "24px"                  # standard density, the default
  gap-sm: "12px"               # dense density
  tap-min: "44px"              # space/tap-min, a constraint, every viewport
  container: "1200px"
  content-max: "1160px"
  measure-intro: "760px"
components:
  button-primary:
    backgroundColor: "{colors.action/primary}"
    textColor: "#FFFFFF"       # 4.80:1, passes AA
    typography: "{typography.button}"
    rounded: "{rounded.card}"
    height: "{spacing.tap-min}"
  button-prestige:
    backgroundColor: "{colors.action/prestige}"
    textColor: "#001114"       # teal/950, 8.13:1. NOT bg/brand, and NOT yet a
                               # token in Mapped. See Stop and Flag
    typography: "{typography.button}"
    rounded: "{rounded.card}"
    height: "{spacing.tap-min}"
  segment-chip:
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "{spacing.tap-min}"
  input:
    rounded: "{rounded.card}"
    height: "{spacing.tap-min}"
---

# DESIGN.md, Propertybuyer

This file and the Figma file are a pair. Read both. This file carries the rules
and a verified token snapshot so an agent can build without guessing. The Figma
file carries the living values, the rendered reference and the reasoning.

**Read order, every time:**

1. [Figma: Context](https://www.figma.com/design/0cUUO8Qye1DBPPPGhmPWmr/Property-Buyer---Source?node-id=4196-42) . Why the work exists, the client, the segments, what is off limits.
2. This file. How a page is put together.
3. Figma Variables. Every value. Two collections: `1. Base Values` (primitives, hidden from pickers) and `2. Mapped` (semantics). **Bind to Mapped, never to Base.**
4. [Figma: Design Rules](https://www.figma.com/design/0cUUO8Qye1DBPPPGhmPWmr/Property-Buyer---Source?node-id=6002-45), [Figma: Colours, Type & Tone](https://www.figma.com/design/0cUUO8Qye1DBPPPGhmPWmr/Property-Buyer---Source?node-id=2015-2) and [Figma: Assets](https://www.figma.com/design/0cUUO8Qye1DBPPPGhmPWmr/Property-Buyer---Source?node-id=6004-47) if you need to see anything rendered. Those pages are mirrors, not sources.

**Precedence.** Figma Variables hold the canonical values. Every value in this
file's frontmatter was **read out of the Figma Mapped collection on 13 August
2026**, not derived and not interpolated. If this file and Figma Variables
disagree, Figma wins and this file has a bug.

Two consequences of that read, both of which reversed earlier guesses in this
file:

- The four `-hover` and `-pressed` values previously carried here were derived
  proposals, not Figma values. Figma holds `action/primary-hover` at `#89533B`
  and `action/prestige-hover` at `#B18A50`. Those are now in the frontmatter
  and the proposals are retired.
- There is no `action/primary-pressed`, no `action/prestige-pressed`, and no
  `text/on-prestige-action` in Mapped. Pressed is derived in code by the rule
  in Interactive States. The prestige ink is written as a literal above with a
  flag, because the value is required for AA and the token does not yet exist.

**Three standing rules.**

1. Never invent a value. If it is not in Figma Variables, stop and ask. A plausible hex is worse than a blocked task, because nobody catches it.
2. Never soften a constraint because the brief seems to want it softened. Name the conflict in your handover.
3. If a brief contradicts this file, this file wins, and you say so rather than quietly complying.

## Overview

Propertybuyer is an independent Australian buyers agency. The voice of the
brand is a senior adviser explaining something to a peer, not a brand
addressing a market. The founder is an economist who has chaired the industry
bodies, the audience is 40 to 65 and professional, and the core claim that
everything else hangs off is: **we act for buyers only and never sell
property, so there is no conflict and no kickback.**

The look that expresses this is warm, restrained and specific. White and cream
carry roughly seventy percent of every page. Dark teal holds about a quarter.
The terracotta accent covers under two percent of rendered pixels because it
appears only on actions, and that scarcity is exactly what makes it read as
the instruction. The failure mode this system exists to prevent is reassurance
by accumulation: badge walls, competing radii, five section rhythms and
everything shouting at the same volume. One value per job, and restraint as
the premium signal.

The engagement is section-level conversion work and new landing pages on an
existing HubSpot site. It is not a brand refresh, not a full design system and
not a component library for its own sake. The primary job of every page is to
make each lead arrive labelled with segment, budget band and location.
Conversion is the secondary job.

**Four landing pages**, one per segment: `home`, `investor`, `commercial`,
`developer`. `home` is built first and is the template the other three copy.

**What this engagement covers.** Design and creative. The markup, the copy,
the tokens, the capture structure and the documentation a backend developer
needs to wire it up. It does not cover HubSpot configuration, ad account
settings or anything else on the client's side of the line. Where an upstream
problem constrains a design decision it is recorded here as a constraint to
design around, not as a task for someone else. We work with what we have.

## Colors

Six colours carry the brand. Everything else in Base Values supports these or
handles a state.

| Role | Token | Value | Rule |
|---|---|---|---|
| Primary | `bg/brand` (teal/700) | `#00404B` | Hero, headings, dark sections. Position one on every core search term is attached to this colour, so it does not move. |
| Accent | `action/primary` (terracotta/500) | `#A26246` | Actions only. Darkened 13 Aug 2026 from the live site's `#B9795D` so white button text clears AA at 4.80. |
| Prestige | `text/prestige` (gold/400) | `#C9A26B` | Prestige components only. The one colour allowed to signal a segment. |
| Warm surface | `bg/surface-alt` (sand/100) | `#F5F1E9` | The cream band. Stops the page reading corporate. |
| Ink | `text/body` (grey/900) | `#1C2B2F` | Body copy. Not black, never black. |
| Page | `bg/page` | `#FFFFFF` | Default background. |

**Application rules. These are the ones that get broken.**

- **Accent is actions only.** Terracotta appears on `action/primary` and nowhere else. A terracotta heading, rule, icon, border or background is a bug, not a variation. The one exception is the supplied logo, which contains terracotta in the brandmark. A brand asset is not a design decision, so it is out of scope for this rule.
- **Gold is prestige only.** `text/prestige`, `action/prestige`, `bg/prestige`. Gold on a general section misroutes the reader.
- **Highlight has exactly two jobs.** `text/highlight` (orange) is the H1 accent word and the review stars. That is the complete list.
- **One primary action per viewport height.** Two terracotta buttons on screen at once means one is secondary and wearing the wrong token.
- **Dark is a section, not a theme.** `bg/brand` for hero and CEO band, `bg/brand-deep` for the footer, `bg/prestige` for prestige. There is no dark mode; Mapped has one mode on purpose.
- **Dominance, measured from the shipped build:** white 49, cream 19, teal 24, everything else 5, weighted by rendered section height across the shipped sections on 12 August 2026. Read that as a family, not a quota. A page that reads heavily teal, or heavily white and empty, has left the brand even if every value came from a token. If a section pushes teal past a third of its own height, ask whether it is earning the weight.
- **Never** set gold body text on `bg/brand`. It passes contrast at 4.83 and still reads muddy. Gold belongs on `bg/prestige`.
- **Never** reach for a Base Values primitive directly. If no semantic fits, the answer is a new semantic token, not a raw hex.

## Interactive States

**The rule, one sentence: a state moves the surface away from the background
behind it, and pressed moves further than hover.**

On light surfaces that means darker. On `bg/prestige` and `bg/brand-deep` it
means lighter, because a dark scrim on a near-black section is invisible
feedback rather than subtle feedback. The steps are 8 percent toward the
direction for hover and 15 percent for pressed.

**Never lighten an action on a light surface.** White text on
`action/primary` rests at 4.80, which is 0.3 above the AA floor. Lightening it
fails. The accent was darkened on 13 August 2026 specifically to clear AA; a
lighten-on-hover rule undoes that decision on every hover.

**Hover comes from Figma. Pressed does not exist yet.** Mapped holds
`action/primary-hover` and `action/prestige-hover` and nothing else. Until
pressed tokens are authored, derive them in code, which is the correct place
for a fallback and needs no new token:

```css
/* fallback for any interactive surface with no state token */
--state-hover:   color-mix(in oklab, var(--surface), black 8%);
--state-pressed: color-mix(in oklab, var(--surface), black 15%);
/* on bg/prestige and bg/brand-deep, substitute white for black */
```

Do not implement states as an opacity overlay in Figma. An overlay needs a
scrim layer in every variant of every component, it does nothing on ghost or
text buttons, it is invisible on `bg/prestige`, and it produces composited
colours that never appear in the contrast table. The accessibility discipline
in this system is a table of named, computed pairs, and a scrim quietly
creates unnamed pairs nobody checks.

**The ink on gold actions is teal/950 `#001114`, not `bg/brand`.** This is the
trap in the prestige button. teal/700 on gold is 4.83 at rest and drops to
**3.61 on `action/prestige-hover`**, which fails AA. teal/950 holds 6.07 in the
same state. The token does not exist yet, so it is written as a literal in the
`button-prestige` component above and flagged.

**Scope.** Hover does not exist on touch and pressed is mostly hidden under a
finger, so neither state earns design time at 390. What does earn it there:
focus (`border/focus`, always rendered, never removed) and the selected state
on segment chips.

## Contrast, computed 13 August 2026

Computed from token values, not asserted. Every pair passes.

| Pair | Ratio | Level |
|---|---|---|
| `text/body` on `bg/page` | 14.62 | AAA |
| `text/body` on `bg/surface-alt` | 12.98 | AAA |
| `text/heading` on `bg/page` | 11.44 | AAA |
| `text/on-brand` on `bg/brand` | 11.44 | AAA |
| teal/950 ink on `action/prestige` | 8.13 | AAA |
| `text/prestige` on `bg/prestige` | 7.15 | AAA, but see the note below |
| `text/on-brand-muted` on `bg/brand` | 6.60 | AA |
| teal/950 ink on `action/prestige-hover` | 6.07 | AA |
| white on `action/primary-hover` | 6.24 | AA |
| `text/error` on `bg/page` | 6.05 | AA |
| `text/muted` on `bg/page` | 5.54 | AA |
| `text/muted` on `bg/surface-alt` | 4.92 | AA |
| `text/prestige` on `bg/brand` | 4.83 | AA, but muddy. Do not use |
| white on `action/primary` | 4.80 | AA |
| `text/highlight` on `bg/brand` | 4.53 | AA |
| teal/700 on `action/prestige-hover` | 3.61 | **fails.** Never use teal/700 as the ink on a gold action |

The `text/prestige on bg/prestige` row computes to 7.15 only against
`#1B1C25`. Against the `#001114` the variable currently resolves to it is
8.13. The row and the variable cannot both be right. See Stop and Flag.

## Typography

Two faces, four sanctioned Geist weights, eight sizes. A landing page that
needs a ninth size has a structure problem, not a typography problem.

- **Proyale 400** is for H1 and H2 only. One weight ships. Never bold it: a browser asked for Proyale Bold synthesises one, badly. Never use it on H3 or below, body or UI. H1 is capped at 44 desktop, 34 mobile. H2 is 34 desktop, 28 mobile.
- **Proyale is a capitals-only face.** Its lowercase glyphs are identical in outline and in bounds to their uppercase counterparts: no x-height, no descenders. Whatever case you type, H1 and H2 render as capitals. This was verified against the font file on 13 August 2026 and it conflicts with the case rule below. See Stop and Flag before writing an H1.
- **Geist** does everything else: Light 300 for body, SemiBold 600 for buttons and H3 through H6, Bold 700 for labels, strong text and stats. Regular 400 is available for UI where 300 is too thin. Never set a heading in Light; against a Light body a functional heading needs 600 to separate.
- **Body** is 16px Geist Light 300, line height 1.6, tracking -1 percent, at every viewport. The leading is the single biggest reason the page reads calm rather than dense; do not save vertical space there. Never pair Light with a size below 16.
- **Buttons** are 16px Geist SemiBold 600 at every viewport, sentence case, tracking -0.5 percent, line height 1.25 stated explicitly (a button inherits neither family nor line height). The old 13px uppercase treatment is retired. Do not combine SemiBold with uppercase and do not shrink a button to fit a layout. 16px SemiBold sits below the large-text threshold, which is why the accent moved rather than the type.
- **Field labels** are 13px Geist Bold, uppercase, tracking +4 percent, colour `text/heading`, always visible. A placeholder is not a label.
- **Tracking floor:** nothing tighter than -2 percent anywhere. +4 percent minimum on uppercase micro text. Tight is premium; touching is illegible.
- **Case:** sentence case for every heading and every button label. No title case anywhere. The only uppercase *set deliberately* is micro labels. H1 and H2 render as capitals regardless, because of the face, which is a conflict rather than an intention.

**The size scale, both columns.** The mobile value is part of the token.

| Token | Desktop | 390 |
|---|---|---|
| `type/stat` | 52 | 40 |
| `type/display` | 44 | 34 |
| `type/h2` | 34 | 28 |
| `type/h3` | 20 | 18 |
| `type/body` | 16 | 16 |
| `type/small` | 14 | 14 |
| `type/micro` | 13 | 13 |
| `type/button` | 16 | 16 |

**Mobile character budgets, checked at 390. Non-breaking checks, not guidance.**

- Hero subhead: 42 characters hard maximum.
- All other headings: 60 characters preferred maximum.
- Buttons at 16px: 20 characters beside another element, 34 full width. "Tell us what you are looking for" is 32 and survives 390 only as a full-width button. Write a short sibling for every long CTA at the same time, rather than truncating later.
- Card headings: 32 characters. Field labels: 20.

Write to the budget first, then expand for desktop. Never the other way round.
Note that the budgets were set against a sentence-case H1. Capitals are wider,
so re-check any heading that was near the limit.

**Font serving.** Geist is open licensed and self-hosted. Proyale is supplied
by the design lead and is also served from `propertybuyer.com.au/hubfs/fonts`.
Fallbacks: Georgia, serif for Proyale; Helvetica, Arial, sans-serif for Geist.
The Georgia fallback is a mixed-case face, so a page renders in sentence case
until Proyale loads and in capitals afterwards. Budget for both.

## Layout & Spacing

- **Container:** max 1200, side gutter 20, content column tops out at 1160.
- **Section rhythm:** one number. 80 desktop, 48 mobile (`space/section-y`). There is no second rhythm. Two allowed exceptions: the hero, and a band whose padding is content inset inside a fixed min-height image.
- **Breakpoints:** three. 390 base, 768, 1100. Build mobile first with min-width queries. Invest design time at 1440, run a hard non-breaking check at 390. Nothing in between is bespoke.
- **Measure:** section intro copy capped at 760px. Long-form body capped at 68 characters. A full 1160px line is about 150 characters and nobody reads it.
- **Density is a signal, not a style.** Three densities, each a gap token, chosen before the content is laid out:
  - *Sparse*, `gap-lg` 40: prestige, hero, anything whose value is implied by restraint. Maximum three items in a row.
  - *Standard*, `gap` 24: the default. Cards, grids, proof, testimonials.
  - *Dense*, `gap-sm` 12: forms, lists, footer, legal. Things the user processes rather than reads.
- **Density is monotonic below the primary CTA.** Once the user passes the first CTA, no section is sparser than the one above it. Loosening back up reads as a second beginning and costs the scroll.
- **Sparse is a budget.** One sparse section per page. Two, and neither feels special, which was the entire mechanism.

## Elevation & Depth

There is no shadow system and no elevation scale. Hierarchy comes from three
things: background bands (`bg/page`, `bg/surface-alt`, `bg/brand`,
`bg/prestige`), hairline borders (`border/default` on warm surfaces,
`border/muted` on cool or white), and density. If a layout seems to need a
drop shadow to separate, the section structure is wrong. Stop and flag rather
than introducing one.

## Shapes

One radius. 8px (`radius/card`) on every card, panel, media container, chip
and input. The only exception is a shape that is round by definition, a pill
or a circle. Seven competing radii existed before this rule and they sat next
to each other; that is what it prevents.

## Assets

The Assets page holds the supplied logo. Two colourways, three lockups each,
and nothing generated:

| Lockup | Use |
|---|---|
| `PropBuy_Logo_Stacked_Standard` | The website lockup. Brandmark above the wordmark. |
| `PropBuy_Logo_Icon-Only_Standard` | Brandmark alone, where the wordmark is already present. |
| `PropBuy_Logo_Stacked_Long` | Adds the "live beautifully" tagline. Not for landing pages. |

Colourway follows the background, not preference. The **Standard** colourway
is teal wordmark with a teal and terracotta brandmark, for light surfaces. The
**White** colourway is for `bg/brand`, `bg/brand-deep` and `bg/prestige`. A
Standard logo on a teal header is invisible, so a teal header takes the White
one.

The wordmark is set in capitals, which is consistent with Proyale being a
capitals-only face.

## Components

Twenty-two sections shipped in the CRO build. Use these names in Figma, in
handovers and in code, so one thing has one name across three surfaces:

`hero` · `stats-band` · `services` · `researcher-band` · `why-choose` ·
`ceo-band` · `team` · `award-wall` · `shield` · `navigate-band` ·
`success-stories` · `where-we-service` · `two-block` · `who-we-help` ·
`testimonials` · `prestige` · `property-worth` · `faq` · `resources` ·
`discover-banner` · `subscribe-band` · `footer`

The Components page in Figma does not exist yet. Until it does, the build is
the library and the reference implementation is the prototype:
`propertybuyer-cro-improvements.vercel.app`. A component enters the system
after it ships, named exactly as it shipped. Speculative components do not
belong in the file.

**Minimum contents of every page:** one capture point inside the first screen,
one proof block inside the first two screens, one segment router, one closing
capture point. A page missing any of these is not finished.

**Forms and capture.**

- Every capture point carries `data-segment` with one of exactly **four** lowercase values: `home` · `investor` · `commercial` · `developer`. Downstream HubSpot routing depends on these strings; the list changes only by decision of the design lead. **Changed 13 August 2026 from six.** See Segments below.
- Three inputs maximum in the first screen: segment, budget band, location. Name, email and phone come after, never before.
- Segment is a tap chip row, not a dropdown. A visible chip row shows a commercial buyer that commercial is a category here before they commit anything.
- **The selected chip is a border and weight change with no fill.** `border/brand` at 2px plus Geist SemiBold 600; unselected is `border/muted` at 1px, Regular 400. Settled by the design lead 13 August 2026. The accent stays free, so a chip row in one viewport does not break one primary action per viewport height, and a selection control does not wear an action colour. Build it on native radio inputs so the row works with no script.

## Segments

**Four. Changed from six on 13 August 2026 by the design lead.** Four chips,
four pages, four `data-segment` values.

| Segment | Who | Budget | Lead with |
|---|---|---|---|
| `home` | Upgraders, downsizers, relocators, time-poor professionals | $800k to $6m | Handover of risk, and that a person inspects everything. Do not lead with data. |
| `investor` | First timers through to portfolio builders and SMSF buyers, heavily interstate | $650k to $2m | Independence and no developer commissions. An honest on-the-ground assessment, not more data. |
| `commercial` | Owner-occupiers facing lease expiry, and investors chasing yield | $600k to $20m | Due diligence and buy-versus-lease certainty. |
| `developer` | Duplex and small subdivision through to institutional | $2.5m upward | Site access and resale numbers. Shortest copy of any segment. |

**Why four and not six.**

- **`prestige` is not a chip.** It is a treatment and, downstream, a derived
  flag. A prestige buyer selects `home` and a budget band at the top of the
  scale; the flag is derived from the band, not self-declared. Behaviour is a
  more reliable signal than self-labelling here, and it keeps the hero clean
  for the volume segments. Gold, discretion language and the sparse density
  still belong to prestige components wherever they appear. Note the standing
  constraint: `prestigepropertybuyer.com.au` is a non-functional shell, so
  there is no separate destination to route a prestige lead to. It is served
  by one restrained band low on the `home` page.
- **`expat` is retired from the capture list.** It described a circumstance,
  not a buying motive: an expat is a home buyer or an investor who cannot
  attend an inspection. Remote process and foreign buyer rules are content
  that belongs inside the `home` and `investor` pages, not a segment of their
  own.

**`commercial` carries two psychographics.** Owner-occupiers and investors
want opposite things, and one blended message serves neither. Fork the page
near the top rather than averaging the copy. This is the page most likely to
underperform and it should be designed with that named rather than discovered.

**Do not re-expand the list to six.** If a fifth page is ever proposed, it
changes the `data-segment` contract, which is why the list moves only by the
design lead's decision.
- Tap targets 44 minimum at every viewport. Visible label on every field. Focus ring (`border/focus`) always rendered, never removed.
- `border/focus` is teal/700 and is invisible on `bg/brand` and `bg/brand-deep`. Either put the control on a light surface inside the dark band, or render the ring in `text/on-brand`. Mapped has no dark-surface focus token, so this is derived. Flagged.

## Voice & Copy

The voice in one line: **a senior adviser explaining something to a peer.**
Specific, not descriptive. Plain, not folksy. Unhurried, not passive. No
urgency devices, no countdowns; a twelve-month sales cycle does not respond to
pressure.

**The claim hierarchy. Order matters more than wording, on every page:**

1. Buyers only, never sellers. No conflict, no kickback.
2. Proof, Tier 1 first: specific, attributed, recent.
3. Process: what happens next and how long. 30 to 60 days is a real number.
4. Scale and awards. One line. Never in a hero.

**The universal argument, usable in every segment:** going direct reveals your
budget, your enthusiasm, your deadline and your finance position to the person
paid to act against you. That is privacy as a negotiating shield and it is
allowed everywhere. Do not confuse it with discretion: discretion, anonymity
and NDA language is a prestige-only vocabulary.

**Register by segment.** The voice does not change; the fear you answer first
does.

- `home`: reassuring, process-forward. Lead with handover of risk and the fact that a person inspects everything. Do not lead with data.
- `investor`: evidence-forward and unsentimental. They arrive semi-informed via a broker or accountant and want validation, not education from scratch. Lead with independence and no developer commissions.
- `commercial`: competent, transactional. Lead with due diligence and buy-versus-lease certainty. Fork owner-occupier from investor rather than blending them.
- `developer`: numerical. Lead with site access and resale numbers. Shortest copy of any segment.

**The prestige register still exists, as a component treatment rather than a
page.** Restrained, fewer words, more space, no exclamation of any kind. It is
the only place discretion, anonymity and off-market privacy language is
permitted, and it leads with access to stock that never reaches the market.
Applied to the prestige band on `home`, not to a page of its own.

What never changes, in any segment: buyer-side only, specificity over
adjectives, Australian English, no em dashes.

**Banned language, testable:**

- "lowest price" anywhere. Substitute "right price".
- "advocate" in headings and CTAs (fine in body).
- discretion / anonymity / NDA outside prestige components.
- unlock, elevate, seamless, journey, empower.
- "in today's market", "now more than ever", any opener that delays the verb.
- "we are passionate about", "we pride ourselves on", anything unfalsifiable.
- "solutions" as a noun standing in for a service.
- Discover / Explore / Learn more / Submit / Click here / Find out more / Get started with no object, as button labels.
- Em dashes, everywhere, including data tables. Full stop or comma; a genuine range takes an en dash with spaces.
- Exclamation marks. None, in any segment.
- Triadic lists as a default rhythm ("faster, smarter, simpler"). Use two items, or four.

**Mechanics:** Australian English (-ise, colour, enquiry, adviser, licence/
license, practice/practise, storey). One idea per sentence, average under
twenty words. Numerals for anything countable. "Since 2001", never "25 years";
hardcoded durations expire, and so does the review count. Sentence case
everywhere. The brand is **Propertybuyer**, one word, lowercase b; the
sub-brand is **Prestige Propertybuyer**. Never "Property Buyer".

**CTA labels that pass** (a label must survive being read with no surrounding
page): Tell us what you are looking for · Book a call with a buyer's agent ·
Get a property brief · Talk to our commercial team · Request an off-market
brief · Start your search · See what we bought last month.

## Proof Tiering & Claims

The tier of a claim decides its treatment, never the other way round. The
site's existing failure mode is reassurance by accumulation.

| Tier | What | Treatment | Budget |
|---|---|---|---|
| 1 · Specific | Attributable and dated. A named suburb, a price, a saving against guide, a client first name plus segment. | Its own block, the number in `type/stat`, one per row. | Three per page. |
| 2 · Generic | True and verifiable but any competitor could say it. 5,000+ purchases, since 2001, review count. | One inline line. No badge, no icon, no card. | One aggregate line per page. |
| 3 · Unverified | Ambiguous, contested or unconfirmed. | **Does not render.** Sits in the markup as a comment with the reason it is gated. | Zero. There is no careful phrasing that promotes a Tier 3 claim. |

Never mix tiers in one block: a Tier 1 case study beside a Tier 2 badge drags
the case study down to badge level, and the badge does not come up. No award
badge grid, ever: one line naming the count plus the two most significant wins.

**Claims register.**

**Clear, use freely:** buyers only, never sell · 5,000+ properties purchased ·
since 2001 · 30 to 60 days from engagement to purchase · database of 10,000+
agents · Rich Harvey's credentials (Masters in Economics, REBAA President four
years, Chairman REINSW Buyers Agent Chapter) · the fee schedule, 1.5 to 2
percent full search and 1 percent appraise and negotiate.

**50+ awards.** Resolved twice, and 50+ is the number that stands. The landing
page build brief of 6 August 2026 cleared 53 and said it replaced "50+"
everywhere, sourced to the client's own onboarding USP document. The client
reversed that on 21 August 2026 and asked for 50+ on the stat row, so **use
50+**, and no page carries 53 any more. Recorded under `awardsCountOnStatRow`
in `shared/segments.json`. Two things worth knowing about the reversal: 50+
understates a count the client can evidence, so the exposure runs the safe
way, and it agrees with what propertybuyer.com.au itself says, which the proof
register had flagged as a discrepancy against this file. Note that the Figma
Stop and Flag list still carries this as gated and is behind; Figma should be
corrected rather than this file reverted. Treatment is unchanged: one aggregate
line naming the count plus the two most significant wins, never a badge grid.
Which two are the marquee wins is not recorded anywhere, so name the count
alone until they are.

**Gated, does not render:** the 96 percent purchase rate, because the
denominator is ambiguous as written and a claim nobody can define is a claim
nobody can defend. Any specific off-market percentage, because competitors
quote 69 and 70 and ours needs a source. Frame off-market as access, not as a
bargain: REBAA itself warns off-market can carry a premium.

**Banned:** "lowest possible price", substitute "right price".

**Check at publish:** the review count. 315+ was true at time of writing and it
moves. Verify on the day it ships.

Where a claim is not in this register, add a row rather than making a judgement
call in the markup.

## Backend Handover

For the developer wiring HubSpot. This section is documentation, not a task
list for us. Nothing here is built on the design side; the markup is the
contract and this describes it.

**What the markup guarantees.** Every capture point is a plain `<form>` with
no `action` and no `method`, carrying `data-segment` with one of the four
values. Field names are stable and are the integration surface:

| Name | Type | Notes |
|---|---|---|
| `segment` | radio group | One of `home` `investor` `commercial` `developer`. Lowercase, exact. Routing depends on the string. |
| `budget_band` | select | Bands differ per segment, see below. |
| `location` | text | Free text. Suburb or postcode. |

`data-segment` on the form element is kept in step with the chip the user picks
by a small script. It is the value to trust, because a visitor can arrive on
one page and select another segment before submitting.

**Two steps, and the split matters.** Step one is segment, budget band and
location. Step two is name, email and phone. Never more than three inputs on
one screen. **A lead must be creatable from step one alone** so a visitor who
abandons at step two still arrives labelled. That is the entire point of the
page; a form that captures a name and no segment has done the easy half of the
job and skipped the valuable half.

**Budget bands differ by segment.** A commercial owner-occupier and a first
home buyer do not share a scale. The bands follow the ranges in Segments above.
If the HubSpot property is a fixed dropdown it needs to hold the union of every
band across all four pages, or four separate properties. That is a decision for
whoever owns the HubSpot schema, and it needs making before the first page
posts anything.

**Derived, not captured:** `prestige_flag`, set true where `budget_band` is at
the top of the scale regardless of segment. This is how a prestige lead is
identified without a prestige chip in the hero.

**Discrete properties, not a notes blob.** The segment field is what the
nurture flows have been missing. It has to arrive as its own property or the
exercise fails quietly and nobody notices for a quarter.

**Not specified here, and deliberately so:** which HubSpot properties exist,
what the analytics event names are, how CallRail numbers are provisioned, and
anything about the ad account. Those sit with the people who own them. The
design side commits to stable field names and a segment on every submission.

**Still needed from someone, to finish the markup:** the privacy policy and
terms URLs, the licence numbers for the footer, and the CallRail number. The
header deliberately carries no phone number rather than a placeholder, because
a fake number renders a false claim as visible text.

## Do's and Don'ts

The acceptance checklist. Run before handover; every item is checkable by
looking.

- [ ] Every colour, spacing, radius and size resolves to a token in `2. Mapped`. No raw values.
- [ ] Accent appears on actions only.
- [ ] One primary action visible per viewport height.
- [ ] Gold appears only inside prestige components.
- [ ] No Tier 3 claim renders as visible text.
- [ ] Every capture point carries `data-segment` with one of the four values.
- [ ] A lead is creatable from step one alone, with segment, budget band and location.
- [ ] No em dash anywhere in the copy.
- [ ] Hero subhead under 42 characters; other headings under 60.
- [ ] 390 check: no horizontal scroll, no clipped text, no orphaned single word on a heading.
- [ ] Every tap target 44 or larger.
- [ ] Focus visible on every interactive element, including inside dark bands.
- [ ] Every interactive surface has a hover state from Mapped and a pressed state derived by the Interactive States rule, and both still pass AA against their own text.
- [ ] Gold actions use teal/950 ink, never `bg/brand`.
- [ ] Section rhythm is a single value throughout, with only the two allowed exceptions.

## Stop and Flag, Do Not Invent

Hit one of these and surface it rather than choosing a plausible answer. A
guess here becomes a client-facing error, and the person who catches it will
be the client.

- **`bg/prestige` is inconsistent with itself.** The variable resolves to `#001114` (teal/950). Its own description in Mapped, and the Colours page, both say night/950 `#1B1C25`, "not a teal", client direction 3 August 2026. There is no `night` ramp in Base Values at all. The published ratio `text/prestige on bg/prestige = 7.15` only computes against `#1B1C25`; against `#001114` it is 8.13. The documentation is self-consistent, so the alias is most likely the bug, probably because night/950 was never created. Do not pick one.
- **Three tokens the system depends on are missing from Mapped:** `text/on-prestige-action` (teal/950, the only ink that holds AA on gold through hover), `action/primary-pressed` and `action/prestige-pressed`. Author them rather than continuing to derive them.
- **No focus token for dark surfaces.** `border/focus` is teal/700 and disappears on `bg/brand` and `bg/brand-deep`.
- **Homepage H1.** Untouchable. It holds position one for the core commercial terms; SEO risk outweighs any conversion gain. This constrains what a landing page H1 may compete with, which is why it is here rather than on someone else's list.
- **Deliberate divergences from the live site** that the client has not yet been told about: the accent darkened to `#A26246` for accessibility, body face moved to Geist, H1 in Proyale capped at 44. Defensible, but flag them in handovers; do not let the client discover them.
- **The success colour ramp is invented.** The build has no success state, so it has no source. The first form that ships with it makes it brand by accident; get it looked at first.
- **Prestige sub-brand:** `prestigepropertybuyer.com.au` is a non-functional shell. Prestige buyers land on the core site; there is no separate destination to route to. Design the prestige band on `home` as a terminus, not as a signpost to somewhere else.
- **Which two awards are the marquee wins.** The count is cleared at 50+ but the two named wins the treatment calls for are not recorded in any document we hold. Name the count alone until they are.

**Resolved, kept for the record.**

- 13 Aug 2026: the `action/primary` contrast failure. The accent moved to `#A26246` and every measured pair now passes.
- 13 Aug 2026: the H1 face and size. Proyale 400 at 44, no 52 step.
- 13 Aug 2026: the selected segment chip. Border and weight, no fill.
- 13 Aug 2026: the mobile H1. The token says 34 and the first landing page ships 34. The older CRO build shipped 36 and is behind.
- 13 Aug 2026: the state values. Read out of Figma rather than derived, and this file corrected.
- 13 Aug 2026: **the segment list. Six to four.** `home`, `investor`, `commercial`, `developer`. Prestige becomes a treatment and a derived flag; expat is retired as a circumstance rather than a motive. See Segments.
- 13 Aug 2026: **Proyale renders in capitals, and that is accepted.** A capitals-only face is a property of the face. The sentence case rule governs how copy is written, not how a chosen display face renders it. Keep writing H1 and H2 in sentence case: the fallback, Georgia, is mixed case and renders them that way until Proyale loads. The `-2 percent` display tracking was checked optically on Proyale at 44 on a capitals setting and holds.
- 13 Aug 2026: **segment ranking. Deliberately equal, do not rank.** There is no lead qualification data to rank against, so a ranking would encode a guess as a design decision. The router measures demand before it converts it. Rank later, on observed distribution.
- 13 Aug 2026, revised 21 Aug 2026: **the award count. 50+.** Cleared at 53 per the build brief, then reduced to 50+ at the client's direction. The earlier figure is kept here so the change has a record; 50+ is what to use. Figma's Stop and Flag list is behind on both steps.

**Where Figma is now behind this file.** These are not conflicts to reason
about, they are edits queued against the Figma source. Until they land, Figma
and this file disagree and this file is the newer of the two:

| Figma location | Says | Should say |
|---|---|---|
| Context § 6 | "The six segments", all six listed with ranges | Four. `prestige` becomes a treatment plus derived flag, `expat` retired |
| Design Rules § 5 | "The six values" | The four values |
| Design Rules § 10 | "data-segment with one of the six values" | four |
| Context § 8 | Segment ranking open, award count open | Both resolved 13 Aug 2026 |
| Design Rules § 11 | Award count gated, PMax and Final URL Expansion | 50+ cleared; the PMax item is not a design constraint and belongs elsewhere |

The standing precedence rule still holds for **values**: Figma Variables win on
any token. It does not extend to segment scope or claims status, which are
decisions rather than values, and those are recorded here first.

**Documentation inconsistencies worth a tidy, none of them blocking.** The
Colours page says Mapped holds seven type-size tokens; there are eight, since
buttons moved to their own token. Design Rules says twenty-two shipped
sections in one paragraph and twenty-three in the next. The Design Rules
header cites a different prototype URL from the Context page.

Owner: Kenn Zapanta, Head of Design, AIIMS Group. Every token value in the
frontmatter read directly from Figma Variables 13 August 2026. Proyale
verified against the supplied font file the same day. Segment scope reduced to
four the same day. Update this file when a variable changes, a new section
ships, or an item in Stop and Flag is resolved.
