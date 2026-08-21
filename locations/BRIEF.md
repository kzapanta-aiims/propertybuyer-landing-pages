# Location inner pages, brief

Nothing built. This file is the input the first build needs, and the reasons
it has not started.

Two differences from the paid pages under `New Builds/` drive almost
everything below.

**They are organic search pages, not ad pages.** The paid pages are
deliberately `noindex`. These are worthless unless indexed.

**They ship in HubSpot, not on Vercel.** What this repository produces is the
reference implementation, handed to the client developer to port into a
HubSpot template. Plain HTML, CSS and JavaScript. No framework, no React, no
build step. That has always been true of this repository and is now a handoff
requirement rather than a preference: nothing here may grow a compile step or
a runtime dependency, because the receiving developer works in HubSpot.

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
- **Delivered as HubSpot, built as static files.** 21 Aug 2026. The Vercel
  deploy is a preview for review and handoff, not the host. Write these the
  way the rest of the repository is written and the port stays mechanical.
- **No generator in `tools/`.** HubSpot repeats a template across rows itself,
  so the multiplication belongs at the destination. What gets handed over is
  one reference page per distinct layout, plus `locations.css` and the copy
  decks. How many distinct layouts there are is still open: one template for
  every location is the assumption, and a capital city page differing from a
  suburb page makes it two. The client developer needs that answer before the
  build, not after.
- **Own layout.** 21 Aug 2026, from the design lead. These pages are composed
  differently to the four paid pages. What they share is the design language,
  not the page structure: the same tokens, the same two faces, the same base
  components, the same voice and banned language, the same claim tiers, the
  same proof discipline. Do not start from the buyer page and edit it down,
  the way a segment page is started. That is the one instruction from the
  segment build that does not carry over.
- **Own design layer.** `assets/css/locations.css`, loaded after
  `tokens.css` and `base.css`, never alongside `landing.css`. It is expected
  to be a substantial layer, because the layout is its own.
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

## Two things that travel badly into HubSpot

Worth designing around rather than discovering at handoff.

- **Asset paths.** Every reference here is `../../` relative and becomes a
  HubSpot file manager URL on the other side. Keep them in one place rather
  than scattered inline, so the port is a find and replace rather than a hunt.
- **The two faces.** Proyale and Geist are self hosted from `assets/fonts` and
  need uploading to the HubSpot file manager with the same immutable cache
  header they get in `vercel.json`. Proyale sets the H1, which is the largest
  contentful paint, so getting this wrong is a measurable regression rather
  than a cosmetic one.

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
