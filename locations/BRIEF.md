# Location inner pages, brief

Nothing built. This file is the input the first build needs, and the reasons
it has not started.

These are organic search pages, not ad pages. That single difference drives
almost everything below, because the paid pages under `New Builds/` are
deliberately `noindex` and these are worthless unless indexed.

Read `../DESIGN.md` and `../HANDOVER.md` first. They govern these pages the
same way they govern the segment pages: same tokens, same voice, same banned
language, same claim tiers, same rule that an unfilled value ships in
`[square brackets]` rather than as plausible copy.

## Blocked, and blocking the whole family

- [ ] **The SEO call.** `DESIGN.md` records that the propertybuyer.com.au
      homepage H1 is untouchable, because it holds position one for the core
      commercial terms, and that this constrains what a landing page H1 may
      compete with. Location pages target local commercial terms by
      definition. Where these sit relative to the client's existing site is a
      client decision and it has not been raised. See
      `../shared/locations.json`, `openDecisions.seoCannibalisation`.
- [ ] **The list.** Which locations, and how many. Nothing goes into
      `../shared/locations.json` until the client picks it, because a slug
      added speculatively becomes a URL somebody links to.
- [ ] **Tier 1 proof, three per page.** Attributable and dated, and for these
      pages the named suburb has to be the page's own suburb or the proof does
      not do its job. This is the same blocker holding the investor and
      developer pages, and it is harder here: it scales with the number of
      pages rather than being three per family. Source rows go in
      `../paper/proof-register.md`.
- [ ] **The capture form question.** On a segment page the segment is fixed and
      the visitor types the location. A location page inverts that. Whether
      `location` is prefilled and locked, prefilled and editable, or only
      defaulted, changes what arrives in HubSpot and will not be caught by
      visual review. See `openDecisions.locationPageSegmentField`.

## Decided, do not re-decide

- **Same repository, not a fork.** 21 Aug 2026. The tokens, the two self
  hosted faces, the base components, the decision log and `tools/check.mjs`
  are shared. A second repository forks all five, and the drift is silent.
- **Own design layer.** `assets/css/locations.css`, loaded after
  `tokens.css` and `base.css`, never alongside `landing.css`.
- **Own registry.** `../shared/locations.json`. The six segment strings in
  `segments.json` are HubSpot routing labels and are not touched by anything
  here.

## Inherited from the segment pages

- Tokens only. Never invent a value. If it is not in Figma Variables, stop and
  ask.
- No em dashes, no exclamation marks, anywhere, including comments. Australian
  English. Sentence case.
- Figures on cards are exact, never rounded.
- Asset paths are two levels up from a page: `../../assets/css/tokens.css`.
- All six segment chips stay in any router that appears on the page.

## Minimum contents, once it is unblocked

Carried over from the segment pages, and to be reviewed against what an
organic visitor actually needs rather than assumed:

- one capture point inside the first screen
- one proof block inside the first two screens, local to this page's location
- one closing capture point

The segment router is the open question. On a paid page it is a measurement
instrument, recorded as such in `../shared/segments.json`. Whether an organic
visitor arriving on a suburb page should meet the same six chips has not been
decided.
