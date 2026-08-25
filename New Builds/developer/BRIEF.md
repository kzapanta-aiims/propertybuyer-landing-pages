# Developer landing page, brief

Segment `developer`. **BUILT 21 August 2026**, not yet client reviewed. This
file was the input; what it asked for and what was actually supplied are
reconciled below. The copy deck is `../../paper/developer-copy.md` and every
decision taken in the build is in `../../shared/segments.json` under the keys
beginning `developer`.

Template: `../buyer/index.html`, the built `home` page. Copy it, then change
only what this file names. Structure, tokens, component classes and the
acceptance rules do not change between segments. Read `../../DESIGN.md` and
`../../HANDOVER.md` first.

## Register, from DESIGN.md

Numerical. Lead with site access and resale numbers. **Shortest copy of any
segment.**

The voice does not change between segments; the fear you answer first does.

## Minimum contents, every page

- one capture point inside the first screen
- one proof block inside the first two screens
- one segment router
- one closing capture point

A page missing any of these is not finished.

## Supply before build

- [x] **H1.** "Sites that stack up before they reach the market", 48/60.
      Carries site access and the numbers in one line, and uses the client own
      published word: they write about sites that "don't stack up". The
      alternative, "Buy the site before it reaches the market" at 41, is
      recorded in the copy deck if the idiom is unwanted.
- [x] **Hero subhead.** "We never act for a vendor or an agent", 38/42.
      Four under the cap, the most headroom of the four pages, and it passes
      the checker at 390.
- [~] **Three Tier 1 proof points.** FILLED 21 Aug 2026 from the home buyer
      deck at the client direction, for client review, and **the framing is
      unresolved**: all three records are residential home purchases rather
      than development sites. Figures are exact and copied from the register.
      Slot 1 sits below the page own $2.5m budget floor and slot 3 is also
      live on the buyer page and also retold in the investor deck. Photographs
      are still absent on all three. See `developerProofSlots`. The original
      position, which still describes what the page actually wants, follows.

- [ ] **Development proof records.** STILL OUTSTANDING, and the only thing on
      this page that is. All three slots ship bracketed. No developer deck
      exists, and the twenty site purchases the client publishes carry a
      street, a suburb and a price but **no date**, which is the one Tier 1
      attribute DESIGN.md requires and they lack. The ask is therefore a
      purchase month and year plus a client first name for three sites the
      client already publishes, not a new deck. Candidates are named in each
      bracket on the page. The story panels ship with no photograph rather
      than a borrowed residential one, because that would be a false claim.
- [x] **Body copy.** Shortest of the four, by compression rather than by
      removal. **No mid-page section was cut**, at the client direction: the
      page ships nine sections and drops only the prestige band, matching
      commercial and investor. All four step bodies, both changed real-access
      bodies and three of four truth card bodies are shorter than their
      buyer-page equivalents. Nothing automated measures this, so a later
      edit could pad the page without failing a check. See
      `developerSectionCount`.
- [x] **FAQ entries.** Five, and the order changed: feasibility leads,
      because it is the question this segment asks before any other. It was
      unanswerable until the client own site was read, and was gated at
      Tier 3 in the first draft of the deck. Auction bidding is answered here
      rather than in the services band. See `developerFeasibilityClaim`.

## Specific to this segment

"Shortest copy of any segment" is a real structural difference, not a tone
note. The buyer page's three mid-page sections are the template's default, not
a floor. Cutting one here is following the rules, not deviating from the
template.

Budget bands do differ from residential, and they were **derived from the
client own published deals rather than assumed**, which makes them a stronger
basis than the commercial or investor bands. Five bands, every one evidenced
by a named purchase the client publishes: `under-2.5m`, `2.5m-5m`, `5m-10m`,
`10m-20m`, `20m-plus`.

**This contradicts DESIGN.md at both ends and DESIGN.md was NOT corrected.**
It states "$2.5m upward"; the published deals run from $1.35m, below that
floor, to $57m at Kurraba Point. Either the site is stale or DESIGN.md is,
and that is a client question. Changing these option values after launch
breaks HubSpot routing the same way the segment strings do. See
`developerBudgetBands`.

## Inherited from home, do not re-decide

- `data-segment="developer"` on both capture points.
- Field names `segment`, `budget_band`, `location`. Three inputs maximum in the
  first screen. Name, email and phone come after, never before.
- Chip row is native radio inputs, selected state is border and weight with no
  fill.
- Asset paths are two levels up. Three stylesheets, in order:
  `../../assets/css/tokens.css`, `../../assets/css/base.css`, then
  `../../assets/css/landing.css`. Never `locations.css` as well.
