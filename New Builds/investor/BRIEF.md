# Investor landing page, brief

Segment `investor`. Not built. This file is the input the build needs.

Template: `../buyer/index.html`, the built `home` page. Copy it, then change
only what this file names. Structure, tokens, component classes and the
acceptance rules do not change between segments. Read `../../DESIGN.md` and
`../../HANDOVER.md` first.

## Register, from DESIGN.md

Evidence-forward. Lead with independence and no developer commissions.

The voice does not change between segments; the fear you answer first does.

## Minimum contents, every page

- one capture point inside the first screen
- one proof block inside the first two screens
- one segment router
- one closing capture point

A page missing any of these is not finished.

## Supply before build

- [ ] **H1.** Under 60 characters. Renders in capitals, see the Proyale note in
      `../../HANDOVER.md`.
- [ ] **Hero subhead.** Hard limit 42 characters at 390. This is the tightest
      constraint on the page and the checker enforces it.
- [ ] **Three Tier 1 proof points.** Attributable and dated: a named suburb, a
      purchase price, a saving against guide, or a client first name plus
      segment. The number sets in `type/stat`. Nothing is invented; empty slots
      ship commented rather than filled with plausible copy.
- [ ] **Body copy** for the three mid-page sections.
- [ ] **FAQ entries.**

## Inherited from home, do not re-decide

- `data-segment="investor"` on both capture points.
- Field names `segment`, `budget_band`, `location`. Three inputs maximum in the
  first screen. Name, email and phone come after, never before.
- Chip row is native radio inputs, selected state is border and weight with no
  fill.
- Asset paths are two levels up: `../../assets/css/styles.css`.

## Open, blocks nothing but affects this page

Segment ranking is undecided, so the router here will give all six equal
weight exactly as home does. See `../../shared/segments.json`.
