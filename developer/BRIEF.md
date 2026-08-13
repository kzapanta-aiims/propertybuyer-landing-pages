# Developer landing page, brief

Segment `developer`. Not built. This file is the input the build needs.

Template: `home/index.html`. Copy it, then change only what this file names.
Structure, tokens, component classes and the acceptance rules do not change
between segments. Read `../DESIGN.md` and `../HANDOVER.md` first.

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

- [ ] **H1.** Under 60 characters. Renders in capitals, see the Proyale note in
      `../HANDOVER.md`.
- [ ] **Hero subhead.** Hard limit 42 characters at 390. This is the tightest
      constraint on the page and the checker enforces it.
- [ ] **Three Tier 1 proof points.** For this segment specifically: site
      access and resale numbers. Attributable and dated. The number sets in
      `type/stat`. Nothing is invented; empty slots ship commented rather than
      filled with plausible copy.
- [ ] **Body copy.** Deliberately shorter than the other three pages. The
      rules call for the shortest copy of any segment, so expect to drop or
      compress one of the mid-page sections rather than pad it to match home.
- [ ] **FAQ entries.**

## Specific to this segment

"Shortest copy of any segment" is a real structural difference, not a tone
note. Home's three mid-page sections are the template's default, not a floor.
Cutting one here is following the rules, not deviating from the template.

Budget bands almost certainly differ from residential. Confirm the ranges
before build; changing option values affects HubSpot routing the same way the
segment strings do.

## Inherited from home, do not re-decide

- `data-segment="developer"` on both capture points.
- Field names `segment`, `budget_band`, `location`. Three inputs maximum in the
  first screen. Name, email and phone come after, never before.
- Chip row is native radio inputs, selected state is border and weight with no
  fill.
- Asset paths are one level up: `../assets/css/styles.css`.
