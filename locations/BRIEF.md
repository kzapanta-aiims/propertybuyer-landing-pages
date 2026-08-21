# Location inner pages, brief

Nothing built. This file is the input the first build needs, and the reasons
it has not started.

**Scope, set 21 August 2026: one template, three pages.** Melbourne, Adelaide
and Perth. The template is derived from the live Brisbane page, supplied as
the reference because it performs. Its anatomy, its SEO gaps and its three
conflicts with `../DESIGN.md` are recorded in `REFERENCE.md`, which you should
read before this file's blockers make sense.

**Build order is Melbourne, then Adelaide, then Perth if it survives the
question below.** That is not a preference. It is the order of what each page
can honestly carry, recorded per location in `../shared/locations.json`.

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

## Perth cannot support the template, and this is the first thing to settle

Raised 21 August 2026. Not a copy problem.

The client has **no Perth office and no Perth proof records**. The office list
they supplied is Sydney, Melbourne, Brisbane and Adelaide, recorded
independently in `../paper/commercial-copy.md` and `../paper/investor-copy.md`.
The proof register holds zero Perth records out of more than 75, and
`../paper/commercial-copy.md` states outright that no record is in Perth,
Adelaide or Canberra.

Three sections of the Brisbane template assume a local presence:

- "Our purchases in `<City>`"
- "Your local `<City>` buyers' agents", 14 named people on the Brisbane page
- "Contact our nearest office"

On a Perth page all three are empty, and filling them claims an office and
purchases that do not exist. That is rule one, and it is the reason this is
listed above the SEO work rather than below it.

Three ways out, in `../shared/locations.json` under
`openDecisions.perthHasNoLocalPresence`. The cheapest is to ask whether a
Perth presence exists and was simply never supplied. The honest fallback is a
Perth variant with those three sections removed rather than emptied, saying
what is true: served from the nearest office, inspected in person, which is
the claim the copy decks already make.

**Do not** fill those slots with records from other cities, and do not name
agents who are not in Perth. Do not soften this because the brief asks for
three pages.

## Blocked, and blocking more than one page

- [ ] **The voice call on this family.** The page supplied as evidence is
      written in the voice the current design system was created to replace.
      Its meta description opens with "Discover the expertise of", and
      `discover` is on the banned CTA list. Its H1 second line is typed in
      capitals, which is exactly what the Proyale capitals decision ruled out.
      Its authority claim carries no count. Either this family gets an explicit
      voice exception, or the new pages apply the new voice and diverge from
      the page used as evidence. Both are defensible. See `REFERENCE.md` and
      `openDecisions.referencePageIsNotACopyModel`.
- [ ] **Tier 1 proof, three per page.** Melbourne is covered: the register
      already holds Melbourne records, and the register notes Melbourne is the
      largest unslotted group in the home buyer deck, so more are available
      without asking the client for anything. **Adelaide is an extraction job,
      not a client request**: the investor deck holds 75 records across Sydney,
      Melbourne, Brisbane and Adelaide, and the Adelaide ones have simply never
      been pulled into `../paper/proof-register.md`. Perth has none, see above.
- [ ] **The capture form question.** On a segment page the segment is fixed and
      the visitor types the location. A location page inverts that. Whether
      `location` is prefilled and locked, prefilled and editable, or only
      defaulted, changes what arrives in HubSpot and will not be caught by
      visual review. See `openDecisions.locationPageSegmentField`.
- [ ] **Whether the three URLs already exist.** `/location/adelaide`,
      `/location/perth` and `/location/melbourne`. If they do, this is a
      replacement with existing rankings to protect, which is a different job
      to publishing a new page. Checking this from here tripped the site's bot
      protection, so it is unverified and one look answers it.
- [ ] **Six surrounding regions per page.** The Brisbane page carries Brisbane,
      Redlands, Ipswich, Logan, Moreton Bay and Toowoomba. Each new page needs
      its own six, and that is local knowledge rather than anything derivable
      here.

## Mostly settled

- **The SEO call is narrower than it looked.** These pages slot into the
  client's existing `/location/<slug>` pattern, beside a Brisbane page that
  already ranks and carries a self referencing canonical. They are siblings of
  a working page rather than new competitors for the homepage, so the
  `DESIGN.md` constraint about the untouchable homepage H1 does not bite the
  way it first appeared to. A city page targeting "buyers agent `<city>`" is
  not competing for the generic term. What remains is the replacement question
  above.
- **One template, no generator.** Three hand written pages sit below the
  threshold where a generator earns its cost, and HubSpot repeats a template
  across rows itself, so the multiplication belongs at the destination.

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
