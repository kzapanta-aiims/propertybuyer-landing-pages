# Commercial landing page, review

Reviewer pass on `commercial-page-build` at `1ea3a98`, PR #7, 21 August 2026.
Checked against `DESIGN.md`, `New Builds/commercial/BRIEF.md`,
`paper/commercial-copy.md`, `paper/proof-register.md` and
`shared/segments.json`.

`tools/check.mjs commercial` passes everything except the three known POC
demo items, at 390, 768, 1100 and 1440. This review covers what the checker
cannot see.

Findings are split by who owns them. **Introduced** items were written by this
build. **Inherited** items came from `New Builds/buyer/index.html` and are
present on both pages, byte-identical, so they are fixed once and on both
pages at the same time, the way the POC deletion is scheduled.

## Blocking, resolve before merge

### 1. Form field names contradict the integration contract. Inherited.

`DESIGN.md` section Backend Handover names the integration surface as
`segment`, `budget_band` and `location`, and calls those names stable. Both
pages ship `segment`, `budget` and `suburb`.

`BRIEF.md` records `segment`, `budget`, `suburb` under "Inherited from home,
do not re-decide", without noting that it contradicts `DESIGN.md`. Nothing in
`openDecisions` covers it. Unlike the segment-list conflict, which
`CLAUDE.md` rule 7 resolves in favour of `segments.json`, there is no rule
saying which of these two wins.

Consequence: whoever wires HubSpot reads the Backend Handover table, builds
against `budget_band` and `location`, and receives neither. This is the exact
area `DESIGN.md` says "fails quietly and nobody notices for a quarter".

Fix: pick one and record it. Either rename the two inputs, or correct the
`DESIGN.md` table and add an `openDecisions` entry naming the decision. Do
not leave the two documents disagreeing.

### 2. Capture forms carry `method` and `action`, which the contract forbids. Inherited.

`DESIGN.md`: "Every capture point is a plain `<form>` with no `action` and no
`method`." Both pages ship `method="post" action="#"` on `#lead-form`
(`New Builds/commercial/index.html:115`).

With `action="#"`, any submit that escapes the script handler posts to the
current URL. On static Vercel hosting that is a 405 and a lead lost without a
message. The contract exists so the developer wires the endpoint
deliberately.

### 3. A Tier 3 claim renders as visible text. Inherited, already scheduled for deletion.

The fixed mobile bar renders "6 experts available right now", from
`data-experts-count` on `<body>`. `assets/js/page.js:82` states plainly that
the count "is NOT a verified claim". `?experts=N` in the query string
overrides it, so any number can be put on screen without a code change.

`DESIGN.md` tiering: Tier 3 "Does not render." The acceptance checklist:
"No Tier 3 claim renders as visible text."

This is already on the list as one of the three POC items to delete. Worth
restating as a tier violation rather than a demo convenience, because that is
the reason it cannot take paid traffic, and because the URL override means the
claim is not even fixed at 6.

## Introduced by this build

### 4. One proof card states a fact the deck does not support.

The card reads "Stella was buying from overseas and never saw the building."
`paper/proof-register.md:122` says "bought from overseas". Buying from
overseas does not establish that she never saw the building. The figures on
this card are exact and sourced; this sentence is not, and it is a specific
factual claim about a named client.

Softer instance: "Geoff wanted premises of his own rather than another lease"
against a register entry that says only "owner occupier". The inference is
reasonable and the buy-versus-lease framing is on register, but it is still an
addition.

"Jamie and Tamara wanted an industrial asset with a tenant already in place"
is supported, by the three year lease in the same row.

### 5. Triadic lists are the default rhythm.

`DESIGN.md` bans triadic lists as a default and asks for two items or four.
Newly written copy carries four:

- "vendors, developers or agents", twice
- "the building, the lease and the contract"
- "the building, the tenancy and the condition"
- "what the lease costs you, what the premises would cost to own, and how long you plan to stay"

Two of the new lists already use four items and read well, so the pattern is
available.

### 6. The hero names the two psychographics and then averages them.

`DESIGN.md`: "Fork the page near the top rather than averaging the copy." The
hero body names both buyers and then says "We run the same due diligence for
both". Naming the fork and declining it in the same paragraph is the averaging
the rule warns about.

`BRIEF.md` item 5 and `openDecisions.commercialBudgetBands` already record
that the fork is soft, and `DESIGN.md` calls this the page most likely to
underperform. The hero body is the specific line where it happens, which is
worth recording alongside the existing decision.

The proof reinforces it: the three cards are one owner occupier and two
investment, so the segment the page opens with is the one with least evidence
behind it.

### 7. Budget bands run wider than the range they were derived from.

`openDecisions.commercialBudgetBands` derives five bands from the "$600k to
$20m" range in `DESIGN.md`. As shipped the scale runs "Under $1m" to "$20m
and above", so it covers everything below $600k and everything above $20m.
Defensible for a dropdown, but it should be part of the confirmation
conversation rather than discovered later.

Useful input for a decision `DESIGN.md` flags as unmade: the buyer and
commercial scales are properly disjoint, and the union across the two built
pages is nine distinct values with no overlap.

### 8. Net or gross yield is still unanswered.

`BRIEF.md` item 3. The cards read "Yield 6.0%" and "Yield 4.9%", matching the
deck's own wording. Nothing was invented, and the question is still open.

## Inherited from the buyer template

### 9. An award claim leads the hero.

`DESIGN.md` claim hierarchy, item 4: "Scale and awards. One line. **Never in a
hero.**" The pill "Best Buyers Agency of the Year 2025" is the first element
inside `.hero`, above the H1, so the page opens on item 4 of a four-item
hierarchy.

Two further problems with the pill's wording:

- `DESIGN.md` says which two awards are the marquee wins "is not recorded
  anywhere, so name the count alone until they are". The pill names one.
- The pill says "Best Buyers Agency of the Year 2025". The awards list
  fourteen lines below says "REB Awards 2025 winner, Buyers Agency of the
  Year". The pill adds "Best" and drops the awarding body, which makes it the
  stronger claim of the two and the less attributable.

The awards marquee itself is a recorded client direction, per `HANDOVER.md`
line 166, so it is not a defect. Its tension with "No award badge grid, ever"
is not recorded anywhere, and belongs in `openDecisions` so the next page does
not re-litigate it.

### 10. The stories section mixes tiers in one block.

`.testimonials-head` carries three Tier 2 city ratings, Sydney 4.9, Melbourne
5.0 and Brisbane 4.9, directly above the three Tier 1 proof cards, inside the
same section.

`DESIGN.md`: "Never mix tiers in one block: a Tier 1 case study beside a Tier
2 badge drags the case study down to badge level, and the badge does not come
up." The three commercial proof records are the most expensive content on the
page and this is the one rule written to protect them.

The three per-city ratings are also not in the claims register. Per
`DESIGN.md`, "Where a claim is not in this register, add a row rather than
making a judgement call in the markup."

### 11. The Tier 2 budget is exceeded roughly sixfold.

`DESIGN.md` allows Tier 2 "One inline line per page. No badge, no icon, no
card." The stats band ships three stat callouts, 5,000+, 50+ and 4.9 star, plus
three bullets restating them: "Over 5,000 properties purchased.", "50+ industry
awards." and "Over 300 total genuine Google reviews".

That is six Tier 2 statements where the budget is one, with two of the three
figures stated twice within one screen. `DESIGN.md` names this failure mode in
the first line of the tiering section: "reassurance by accumulation".

Also flagged for publish day, per the claims register: verify the review
count. The page says "Over 300" and the register notes 315+ was true at
writing and moves.

### 12. Two claims in the form footer are not in the register.

"Your privacy is our priority." is unfalsifiable, which `DESIGN.md` bans by
category alongside "we pride ourselves on".

"All data provided remains encrypted." does not appear anywhere in
`DESIGN.md`. It is a security claim, it is the sort of claim a client is held
to, and with no endpoint wired it currently describes infrastructure that does
not exist.

### 13. The review stars are filled with a token marked do-not-use.

`assets/css/styles.css:23` carries "FLAG, do not use until resolved" above
`--bg-prestige`, because `DESIGN.md` Stop and Flag records that
`bg/prestige` is inconsistent with its own documentation and says "Do not pick
one." Both pages then use `var(--bg-prestige)` as the fill for fifteen review
star glyphs.

Two things at once: a flagged token in production use, and a prestige
namespace token on a page from which the prestige band was deliberately
removed.

### 14. Title Case against "sentence case everywhere".

"See Our Reviews" is a button label and has no defence. "The Truth" and "Real
Access" are section labels. "Full Search", "Appraise & Negotiate" and "Auction
Bidding" are plausibly deliberate service names, and `DESIGN.md` writes the
same services in lower case when it lists the fee schedule, so a decision
either way should be recorded once and applied consistently.

### 15. "Genuine words from our valued clients."

Descriptive and unfalsifiable, against "Specific, not descriptive" and the
banned category. It sits directly above three specific, attributed, dated
records that do the job properly.

### 16. Two primary actions share a viewport on mobile.

`assets/js/page.js:74` raises the fixed `.mobile-cta` whenever `#lead-form`
leaves the viewport. Every other primary action sits below `#lead-form`, at
lines 384, 516, 601, 696 and 759. So at each of those five, the bar is up and
a second primary action is on screen.

`DESIGN.md` checklist: "One primary action visible per viewport height."

The comment at `page.js:72` shows the auction CTA was considered and
deliberately left unwatched. The four "Book a free consultation" buttons and
the closing "Talk to our commercial team" appear not to have been.

Confirmed from source rather than on screen. The Browser pane was not
displayed during this session, so the page would not composite frames or
accept scroll, and neither a screenshot nor a live scroll measurement was
possible. Worth one look on a phone before merge.

## Passed, recorded so it is not re-checked

**Every proof figure traces to the register exactly.** All nine values on the
three cards match `paper/proof-register.md` rows 120 to 122, which are
themselves sourced to "Latest Recent Purchases - Commercial.pdf". Geoff: 952
sqm, $4,172,548 appraisal, $3,908,748 purchase, $263,800 under appraisal, and
the subtraction is correct. Jamie and Tamara: 650 sqm, $335,310, 6.0 percent,
$5.55M. Stella: 431 sqm, 4.9 percent, $4.475M. Nothing rounded and nothing
invented.

**`CLAUDE.md` rule 6 is handled correctly and deliberately.** $3,908,748 does
not abbreviate exactly, so it is written in full in the card body and kept out
of the stat row, which is precisely what the rule asks for. The stat row shows
the saving instead.

**Mechanics are clean.** No em dashes. No exclamation marks. No banned
vocabulary in visible copy. No American spellings. Brand rendered
"Propertybuyer" throughout, never "Property Buyer". "Since 2001" rather than a
duration. Gated claims absent: no 96 percent purchase rate, no off-market
percentage.

**Sentence discipline passes.** 11.7 words average across 65 sentences against
a limit of 20. Seven sentences run over 20 words, the longest at 24, none
carrying more than two ideas.

**The prestige removal is clean.** Zero prestige component markup on the page
and no gold token consumed anywhere, so "Gold appears only inside prestige
components" passes by construction. Recorded in
`openDecisions.prestigeBandOnCommercial` and still open to overrule.

**Budget bands match their decision record exactly**, and the buyer and
commercial scales are disjoint as `DESIGN.md` requires.

**Segment plumbing is correct.** Six chips, `commercial` checked, both capture
points carrying `data-segment="commercial"`, three inputs in step one and name,
email and phone in step two.

**No orphaned single word on a heading.** Eight headings carry hardcoded
`<br>` breaks, and several put one word on the first line, "Search" and
"Questions" among them. None leaves a single word on the last line, which is
what the rule guards. The breaks are tuned per heading and the checker finds no
clipping or horizontal scroll at any of the four widths.

**The award count is settled, 21 August 2026.** At the time of this review the
buyer page read "Over 50+ industry awards" beside a stat callout that
disagreed with it. The client chose 50+, so both now read 50+ on all three
pages and `DESIGN.md` section Claims was corrected to match. See
`awardsCountOnStatRow` in `shared/segments.json`. The buyer bullet still
doubles the qualifier as "Over 50+", which is a wording nit rather than a
claim conflict.

## Nits

- Both pages open with a UTF-8 BOM before the doctype. Harmless in current
  browsers, inherited, worth removing on a quiet day.
- "seamless" appears twice in HTML comments describing the marquee loop. The
  banned list governs copy, and `CLAUDE.md` extends only the em dash and
  exclamation rules to comments, so this is style rather than a breach.
- Jamie and Tamara's card gives the annual rent, Stella's does not, though the
  register holds $220,000 for her. Not an error, just asymmetric.
