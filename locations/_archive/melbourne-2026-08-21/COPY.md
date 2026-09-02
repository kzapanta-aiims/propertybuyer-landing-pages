# Melbourne location page, copy deck

**One draft, 21 August 2026, for the SEO team to replace or refine.** Not
tuned further on purpose. What is worth keeping when it is rewritten is the
structure in `../STRATEGY.md`, the character budgets below, and the rule that
an unfilled value ships in `[square brackets]` rather than as plausible copy.

Counts are `used/budget`. The budgets are the ones `tools/check.mjs` enforces,
so a replacement draft has to hold them too: hero subhead 42 at 390, headings
60, card headings 32, button labels 34, field labels 20. The subhead is the
tightest constraint on the page.

Written to the design system in `../../DESIGN.md`, not to the voice of the
live Brisbane page. That is the reversible choice: loosening later is easier
than explaining a banned word that shipped. The conflict is recorded in
`../../shared/locations.json` under
`openDecisions.referencePageIsNotACopyModel`.

## SEO fields

| Field | Draft | Count |
|---|---|---|
| Slug | `melbourne` | |
| URL | `/location/melbourne` | |
| Canonical | self referencing | |
| Title | Buyers' Agents in Melbourne \| Propertybuyer | 43 |
| Meta description | Independent buyers' agents in Melbourne. We act for buyers only, never for sellers. See what we have bought in Victoria, and talk to a local agent. | 147 |
| H1 | Buyers' agents in Melbourne | 27/60 |

Title alternative if the SEO team wants a modifier in the middle slot, matching
the Brisbane pattern: `Buyers' Agents in Melbourne | Buy Well in VIC |
Propertybuyer`, 61 characters, which will truncate in most result pages.

## Zone A, screens one and two

Everything in this zone earns its place by converting. The H1 is the only
element doing SEO work here.

### 1. Hero

| Element | Draft | Count |
|---|---|---|
| H1 | Buyers' agents in Melbourne | 27/60 |
| Subhead | We buy in Melbourne so you do not have to. | 42/42 |
| Micro, above H1 | Melbourne office | 16/20 |
| Primary action | Talk to a Melbourne agent | 25/34 |
| Co-primary action | Call `[tracked Melbourne number]` | |

Subhead alternatives, all inside budget, if that one reads too blunt:

| Alternative | Count |
|---|---|
| One agent, buying in Melbourne, for you. | 40/42 |
| We buy in Melbourne, on your side only. | 39/42 |
| For buyers only. Never for sellers. | 35/42 |

The subhead leads with handover of risk rather than with independence. That is
deliberate: `../../paper/context-segments.md` records that independence
"earns trust" but "on its own it does not differentiate, so it never carries a
page alone". The buyers only line is available as an alternative, not as the
default.

The phone number is a co-primary action, not a fallback. 55% of adults prefer
a call for a high value decision, TransUnion 2024, n=1,556, and the
testimonials describe the first call with a named agent as the moment trust
formed. It needs to be a tracked CallRail number, not the head office number.

### 2. Segment chips, step one of the form, in the hero

The highest value change against the reference page. Location is already
answered by the page, so the form is three steps rather than four, and the
first step asks the label the HubSpot flows never receive.

| Element | Draft | Count |
|---|---|---|
| Field label | What are you buying? | 20/20 |
| Chips | Home buyer, Investor, Commercial, Developer, Prestige, Expat | fixed |
| Step two label | Your budget | 11/20 |
| Location field label | Buying in | 9/20 |
| Location field value | Melbourne, prefilled and editable | |

**Do not edit the six chip labels or their values.** They are the HubSpot
routing strings, fixed in `../../shared/segments.json`, and all six appear on
every page including the two with no page of their own.

`location` is prefilled from the page and left editable. Somebody on the
Melbourne page may be buying in Geelong, and a locked field turns that into a
mislabelled lead, which is worse than an unasked question.

### 3. Local proof, three records

Attention is still high here, so this is where the promise gets paid off.
Every figure below is copied from `../../paper/proof-register.md`, which
copies it from a client deck. Nothing is derived and nothing is rounded.

| Slot | Card heading | Count | Body |
|---|---|---|---|
| 1 | Bought $263,800 under appraisal | 31/32 | Geoff, Melbourne. A 952 sqm office bought as an owner occupier in May 2025 for $3,908,748, against a $4,172,548 appraisal. That is $4,106 per square metre. Commercial deck p.7 |
| 2 | Portfolio added in Melbourne | 28/32 | Wendy, Melbourne. Bought 2024 for $1,175,000 on a 5.0% initial yield. Valued at $1,400,000 in 2026, $225,000 of equity created, renting at $1,200 a week. Investor deck p37 |
| 3 | `[Melbourne home buyer record]` | | `[Unfilled, and blocked on the client. Both Melbourne candidates in the register are re-narrated in the investor deck as investments, Stephen and Melanie with identical figures. A contested claim is Tier 3 and does not render. Three per page is the Tier 1 rule.]` |

Three notes for whoever fills slot 3.

**It is blocked on the client, not on extraction.** This deck originally
recorded the opposite, on the basis that the records existed in material the
client had already supplied. They do exist. Checked against the investor deck
on 21 August 2026, both are also narrated there as investments: Stephen and
Melanie with identical figures, $2,500,000 in 2013 to $4,200,000, and Suzy
probably. Either would publish a contested claim, which DESIGN.md puts at
Tier 3. The full evidence is in `../../paper/proof-register.md`.

**A home buyer record is still the one this page most needs**, because the
other two are commercial and investor, and the dominant organic intent on
"buyers agent Melbourne" is residential.

**The two filled records were audited and are clean.** Geoff does not appear
in the investor deck at all, and Wendy's figures on the page match that deck
exactly. Both also appear on other pages, Geoff on the commercial page and
Wendy on the investor page; reusing a real purchase across a segment page and
a city page is defensible, since it is the same purchase, but it is worth a
look before it ships.

### 4. The local team, named

| Element | Draft | Count |
|---|---|---|
| H2 | Your Melbourne buyers' agents | 29/60 |
| Body | `[Named Melbourne agents, with photographs. The Brisbane page carries 14. This is the section the testimonials point at: trust forms on the first call with a named person, so an unnamed team here wastes the section.]` | |

## Zone B, the SEO body

Headings only, at draft quality. This is where the word count lives and where
the SEO team's work will mostly land. Each H2 is phrased at a query variant
rather than as a brand line.

| # | H2 | Count | Job |
|---|---|---|---|
| 5 | Why use a buyers' agent in Melbourne | 36/60 | the argument, once. Replaces the reference page's three variations |
| 6 | The Melbourne market, as it actually behaves | 44/60 | the heaviest SEO section. Lifestyle and landmark content folds in here rather than running three times |
| 7 | How it works, and what it costs | 31/60 | a transparent process and fee is a named lever over a one to twelve month cycle |
| 8 | Off market access in Melbourne | 30/60 | access, never a bargain. REBAA warns off market stock often carries a premium |
| 9 | Buying in Melbourne | 19/60 | the segment fork, four anchored H3 blocks below |
| 10 | Areas we cover around Melbourne | 31/60 | internal links |
| 11 | Melbourne clients, in their words | 33/60 | testimonials, local where they exist |
| 12 | Questions we are asked in Melbourne | 35/60 | FAQ, once. `FAQPage` schema |
| 13 | Talk to a Melbourne buyers' agent | 33/60 | closing capture, the full form |
| 14 | Other cities we service | 23/60 | internal links to sibling location pages |

**Do not use the word "advocate" in any heading or call to action.**
`tools/check.mjs` fails a page that does, and the Brisbane page's "Why use a
Brisbane buyers' Advocate?" is one of the things that does not carry over.

### Section 9, the segment fork

Four H3 blocks, each anchored so the query variants get their own headings.
Register per block from the segment cards in
`../../paper/context-segments.md`.

| H3 | Count | Lead with |
|---|---|---|
| As a home buyer | 15/32 | handover of risk, the relief of not doing this alone. Data authority is largely wasted here |
| As an investor | 14/32 | independence and cycle tested judgement, stated early |
| As a commercial buyer | 21/32 | buy versus lease certainty and due diligence |
| As a developer | 14/32 | numbers and deal flow. Shortest of the four by some distance |

### Section 10, the regions

`[Six surrounding regions, unfilled.]` The Brisbane page carries Brisbane,
Redlands, Ipswich, Logan, Moreton Bay and Toowoomba. Melbourne needs its own
six and they are local knowledge rather than anything derivable in this
repository. Guessing them would put invented service areas into internal
anchor text, which is the worst place for a guess to live.

## Schema

Three additions beyond the site wide `Corporation` and `WebSite` the reference
page already carries. All additive, none touching layout.

| Type | Placement | Note |
|---|---|---|
| `LocalBusiness` | page level | Melbourne has an office, so the physical claim is true. Needs the real address, opening hours and phone. Perth gets `Service` with `areaServed` instead, see `../STRATEGY.md` |
| `FAQPage` | section 12 | mirrors the rendered questions exactly, no extra questions in the markup |
| `BreadcrumbList` | page level | Home, then Locations, then Melbourne |

## Photography

Added 21 August 2026, because the first build shipped with one photograph and
read as a text document. Fourteen image slots now exist, ratio locked so
filling one cannot reflow the page. Two of them hold real images.

**Filled, from the client's own decks.** Both 685 x 419, which is what
`tools/extract-deck-images.mjs` writes and what every other story image in
this repository already ships at.

| Slot | File | Source |
|---|---|---|
| Proof 1, Geoff's office | `story-melbourne-office.webp` | commercial deck p.7. Shared with the commercial page, so read only: writing over an unprefixed name changes that page too |
| Proof 2, Wendy's home | `investor-story-2.webp` | investor deck p.37, the same page her figures come from |

**Needed, and worth asking for in one request rather than six.** Twelve slots.
The ratio matters more than the exact pixel count: anything larger at the same
ratio downscales cleanly, anything smaller upscales and looks soft. At 1440 the
record photographs render 340 wide and the establishing shot 548, so the sizes
below all leave headroom.

| Count | Slot | Ratio | Deliver at | Brief |
|---|---|---|---|---|
| 1 | Proof 3, the property | 685:419 | 1370 x 838 | The home the third record is about, once that record is unblocked |
| 3 | Agent portraits | 1:1 | 800 x 800 | Three named Melbourne agents. Square crop, consistent framing across the three, because they sit in a row |
| 1 | Melbourne establishing shot | 685:419 | 1370 x 838 | The city or a recognisable inner suburb streetscape. **Not a stock skyline**: this is the one image that has to say Melbourne rather than Australia |
| 6 | Region cards | 4:3 | 800 x 600 | One per surrounding region, and they arrive with the region names. An image under the wrong region label is worse than an empty slot, because these become internal links |
| 1 | Testimonial | 685:419 | 1370 x 838 | The person quoted, or the home they bought. A face outperforms a house here, with permission |

Until they arrive the slots render as dashed containers carrying their own
brief and dimensions. That is deliberate: a client reviewing this page should
see where photography goes and how much is needed, and a placeholder that
looks like a design slot reads better than one that looks like a broken image.

**The hero stays flat teal, deliberately.** It is the treatment the paid pages
use, so it needs no photograph and no slot was added there. An image behind
the H1 would compete with the one thing on the page that has to be read first.

**Naming.** Everything new takes a `melbourne-` prefix, per `CLAUDE.md`.
Unprefixed names in `assets/img/` belong to the buyer page, and writing over
them changes it as a side effect.

## Flags

- **The third proof slot is empty, and blocked on the client.** Both Melbourne
  candidates are contested. This is the one flag on this list that cannot be
  cleared inside this repository.
- **The Melbourne team is unnamed.** Section 4 does not work without names.
- **The six regions are unfilled**, and must not be guessed.
- **The tracked phone number is a placeholder.** A head office number here
  removes the local signal the page is built on, and breaks the CallRail
  attribution that makes a booked call measurable.
- **Photography needs a `melbourne-` prefix.** Unprefixed names in
  `assets/img/` belong to the buyer page, and `CLAUDE.md` records that writing
  over them changes the other page as a side effect. Follow the pattern
  `tools/import-paper-images.mjs` set for the commercial page.
- **Twelve image slots are empty**, listed with ratios under Photography
  above. Two are filled from the client's own decks.
- **Not character counted below Zone A.** Zone B is heading level draft only.
