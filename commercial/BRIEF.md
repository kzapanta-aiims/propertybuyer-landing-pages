# Commercial landing page, brief

Segment `commercial`. Not built. This file is the input the build needs.

Template: `home/index.html`. Copy it, then change only what this file names.
Structure, tokens, component classes and the acceptance rules do not change
between segments. Read `../DESIGN.md` and `../HANDOVER.md` first.

## Register, from DESIGN.md

Competent, transactional. Lead with due diligence and buy-versus-lease
certainty.

The voice does not change between segments; the fear you answer first does.

## Minimum contents, every page

- one capture point inside the first screen
- one proof block inside the first two screens
- one segment router
- one closing capture point

A page missing any of these is not finished.

## Supply before build

- [ ] **H1.** Under 60 characters. Renders in capitals, see the Proyale note in
      `../HANDOVER.md`.
- [ ] **Hero subhead.** Hard limit 42 characters at 390. This is the tightest
      constraint on the page and the checker enforces it.
- [ ] **Three Tier 1 proof points.** Attributable and dated: a named suburb, a
      purchase price, a saving against guide, or a client first name plus
      segment. The number sets in `type/stat`. Nothing is invented; empty slots
      ship commented rather than filled with plausible copy.
- [ ] **Body copy** for the three mid-page sections.
- [ ] **FAQ entries.**

## Specific to this segment

The budget band select on the home page is set for residential price brackets.
Commercial almost certainly needs different bands. Confirm the ranges before
build, and note that changing the option values affects HubSpot routing the
same way the segment strings do.

## Inherited from home, do not re-decide

- `data-segment="commercial"` on both capture points.
- Field names `segment`, `budget_band`, `location`. Three inputs maximum in the
  first screen. Name, email and phone come after, never before.
- Chip row is native radio inputs, selected state is border and weight with no
  fill.
- Asset paths are one level up: `../assets/css/styles.css`.
