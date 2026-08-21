# Copy deck, developer landing page

Drafted 21 August 2026, against the buyer page as it stands on `main` after
the stylesheet split merged. Every string carries its character count against
its budget: hero subhead 42 HARD, H1 and H2 60, H3 and card headings 32,
buttons 34 full width and 20 beside another element, micro labels 20. Measured
at 390, where Proyale renders H1 and H2 in capitals.

Strings marked KEPT are verbatim from `New Builds/buyer/index.html` and are
deliberately unchanged, because they are brand-level claims that DESIGN.md
puts on every page rather than segment copy. Strings marked NEW are written
for this segment. Brackets mark values the client must supply.

Banned-language scan run on this deck 21 Aug 2026: no em dashes, no
exclamation marks, no advocate in headings or buttons, no
unlock/elevate/seamless/journey/empower, no "in today's market", no
"solutions" as a noun, no discretion vocabulary, no lowest price, no banned
button labels, no triadic default rhythm. Australian English throughout.

## Version 2, and what the client's own site changed

Draft 1 was written from `DESIGN.md` and the BRIEF alone. On 21 Aug 2026 two
pages of the client's live site were supplied as context and read:

- `propertybuyer.com.au/services/development-site-acquisitions`
- `propertybuyer.com.au/who-we-help/property-developers`

**They are the client's own published claims, which makes them a usable source
on the same footing as the site was treated under `awardsCountOnStatRow`, where
the live site overruled DESIGN.md.** They are not verified proof records, and
they are marketing pages that may be out of date, so everything taken from them
is marked SOURCED below and needs a currency check before paid traffic.

Five things changed as a result. In order of how much they matter:

1. **The gated feasibility question is answerable, and it is now the lead
   FAQ.** Draft 1 gated it as Tier 3 and called it the most important gap on
   the page. The client publishes the answer.
2. **The budget bands in draft 1 were wrong at both ends.** DESIGN.md says
   "$2.5m upward"; the client publishes purchases at $1.35m and at $57m.
3. **The three Tier 1 slots stay bracketed, but the client ask has collapsed
   from a whole deck to a date.** The client already publishes twenty named
   site purchases with prices. They are undated, which is the one Tier 1
   attribute they lack.
4. **A segment-specific Tier 2 claim exists**, over $250 million in
   development sites, which is stronger on this page than the generic
   5,000+ properties line.
5. **The services band can name real developer services** rather than
   re-skinning the three residential ones.

## The register, and what it changes

DESIGN.md section Segments and section Voice both say the same thing about
this segment: **numerical, lead with site access and resale numbers, shortest
copy of any segment.** Who: "duplex and small subdivision through to
institutional". Budget: "$2.5m upward", now contradicted, see below.

The client's own framing of the same idea, SOURCED: "Our role in the
development process is primarily locating a suitable development site and
estimating sale values." That is site access and resale numbers in the
client's words, and it is the sentence this page is built around.

## Section count, and how "shortest" is achieved

`New Builds/developer/BRIEF.md` reads "expect to drop or compress one of the
mid-page sections rather than pad it to match home", and treats cutting one as
following the rules rather than deviating.

**Decided 21 Aug 2026: no mid-page section is cut.** The page ships nine
sections, dropping only the prestige band, which matches commercial and
investor exactly. The shortest-copy rule is met inside the sections instead,
by compression rather than by removal. Recorded as `developerSectionCount` in
`shared/segments.json`.

| Page | Sections | Body copy |
|---|---|---|
| `home` | 10 | baseline |
| `commercial` | 9 | slightly under home |
| `investor` | 9 | slightly under home |
| `developer` | 9 | **shortest of the four, by compression** |

**Open, and it wants a decision: joint ventures.** The client runs a joint
venture offering that has no equivalent on any other segment page, and it is
the one genuinely new idea the two URLs surfaced. It is not in this deck,
because adding a tenth section to the page whose rule is "shortest copy of any
segment" needs a call rather than an assumption. See the joint ventures note
near the end.

## head

| String | Count / budget |
|---|---|
| Title: Buy development sites off market / Propertybuyer, NEW | title tag |
| Meta description: Independent buyers agency for property developers, established 2001. We find the site and estimate the sale values, and we never act for a vendor. NEW, two clauses rather than three to stay off the triadic rhythm | meta |

## site-header

| String | Count / budget |
|---|---|
| On your side, since 2001. KEPT | 24, display line |
| Speak to an expert. KEPT button | 18/20 beside logo |

## hero

| String | Count / budget |
|---|---|
| H1: Sites that stack up before they reach the market. NEW, "stack up" in highlight. Ships as three lines, `Sites that stack up<br>before they reach<br>the market`, with no comma and no full stop, matching the other three H1s | 48/60 |
| Subhead: We never act for a vendor or an agent. NEW | 38/42 HARD |
| Body: Duplex and small subdivision through to institutional. We find the site off market, inspect it, run our own feasibility, and estimate the sale values before we put it in front of you. Nobody on the other side pays us. NEW | body, no cap |
| Award pill: Best Buyers Agency of the Year 2025. KEPT | pill |
| Capture title: Tell us about the site. NEW | 23/30 |
| Legend: What are you buying. KEPT micro | 19/20 |
| Chips: all six, unchanged, `developer` carries `checked`. Its label is already "Development site". KEPT | see segments.json |
| Budget label: Your budget. KEPT micro | 11/20 |
| Budget options. NEW, see below. REVISED IN V2 | select options |
| Location label: Suburb or postcode. KEPT micro | 18/20 |
| Placeholder: Where do you want to buy? KEPT | placeholder |
| Next: Contact details. KEPT | 21 |
| Send my details. KEPT | 15 |

### The H1 changed in v2, and this one is a voice call

Draft 1 read "Buy the site before it reaches the market" (41/60 unpunctuated), which
answers site access and leaves the numbers to the body. The register asks for
both.

**"Sites that stack up before they reach the market"** carries both in one
line: "stack up" is the numbers, "before they reach the market" is the access.
It also uses the client's own developer vocabulary, SOURCED: they write about
helping clients "avoid development sites that simply don't stack up".

**The judgement to make.** "Stack up" is industry idiom rather than plain
English, and DESIGN.md asks for "plain, not folksy". The argument for it is
that it is the standard term among the people this page is written for, and
that it is the client's own published word rather than ours. The argument
against is that it is the only heading on any of the four pages that assumes
vocabulary.

Draft 1's H1 is kept as the fallback and needs no other change if preferred.

### Hero body

The body now names the feasibility and the sale values, because those are the
two things this segment came for and both are published claims. It runs four
verbs rather than three: DESIGN.md bans triadic lists as a default rhythm and
asks for two items or four, and every cleared body on the live pages obeys it.

## Budget bands, REVISED IN V2, and DESIGN.md is now behind

**Draft 1 was wrong at both ends, and it is worth recording why.** It derived
five bands from the only number available, the "$2.5m upward" in DESIGN.md
section Segments, and flagged the top band as the weakest of the five.

The client publishes twenty named site purchases. The spread is **$1.35m to
$57m**. So:

- The $2.5m floor in DESIGN.md is contradicted by the client's own published
  deals below it.
- Draft 1's top band, $25m and above, sat below the largest published
  purchase, $57m at Kurraba Point.

The client also states, SOURCED, that they serve "all budgets, from small
boutique developers to medium-scale builders to large publicly listed
developments and companies/fund managers".

| Option label | value attribute | Evidenced by |
|---|---|---|
| Under $2.5m | `under-2.5m` | published purchases $1.35m to $2m |
| $2.5m to $5m | `2.5m-5m` | published purchases around $4m |
| $5m to $10m | `5m-10m` | Heath Rd $7m, Byron Bay $7m, Garden St $6m |
| $10m to $20m | `10m-20m` | Boronia Rd $12.5m, Birrell St $14m, Merlin St $15m, Hampden Rd $16m |
| $20m and above | `20m-plus` | Kurraba Rd $57m |

**Every band is now evidenced by a published purchase**, which is a stronger
basis than commercial or investor had. Both of those derived their bands from a
stated range and shipped as ASSUMED, NOT CONFIRMED.

`20m-plus` is byte-identical to the commercial page's top band, which slightly
reduces the fourteen-distinct-values sprawl recorded under
`investorBudgetBands` as the input the HubSpot schema decision is waiting on.

**Still needs a client answer, and record it as a contradiction rather than a
correction.** DESIGN.md section Segments says $2.5m upward. Either the site is
out of date or DESIGN.md is. The precedent is `awardsCountOnStatRow`, where the
live site disagreed with DESIGN.md, the client was asked, and DESIGN.md was
recorded as behind. Do not silently overwrite the DESIGN.md figure.

**Changing these values after launch breaks HubSpot routing the same way the
segment strings do.**

## testimonials, the three Tier 1 slots, STILL BRACKETED

There is still no developer deck, and the named purchases the client publishes
**cannot fill these slots as they stand.**

DESIGN.md Tier 1 requires a claim to be "attributable and dated". The published
purchases carry a street, a suburb, a price and a site type. Checked
specifically: **they are completely undated.** No month, no year, no timeframe
on any of the twenty. There is no client first name either.

So they are a Tier 1 grade fact set missing a required Tier 1 attribute. They
are too specific to be Tier 2, which DESIGN.md defines as what "any competitor
could say", and a $57m landmark site at Kurraba Point is not that. They are
also not Tier 3, which is for the ambiguous or contested. They are simply
incomplete.

Per CLAUDE.md rule 2 the slots ship in `[square brackets]`, visibly unfilled.

| String | Count / budget |
|---|---|
| H2: published client stories. KEPT | 24/60 |
| Sub: Genuine words from our valued clients. KEPT | muted |
| Rating rows Sydney 4.9, Melbourne 5.0, Brisbane 4.9. KEPT | Tier 2 |

### The client ask has collapsed, and this is the headline of v2

Draft 1 asked for three Tier 1 proof records in the shape of a deck that does
not exist. **The ask is now a date.**

For any three of the sites the client already publishes, supply:

- **The month and year of purchase.** This is the only thing standing between
  the published list and three filled Tier 1 cards.
- **The client's first name**, as on all three other pages.
- **The sale value estimate or end value achieved**, if it exists. This is the
  stat that makes it a developer proof point rather than a generic one, and
  the client's own published role statement says they estimate sale values, so
  the number should exist internally.
- Optionally the saving against appraisal, which is what the commercial page
  leads its cards with.

Recommended three, laddering by scale so a visitor finds themselves in one of
them, which mirrors the life-stage ladder on home and the portfolio-stage
ladder on investor:

| Slot | Candidate | Why |
|---|---|---|
| 1 | Heath Rd, Leppington, $7,000,000, land subdivision | the small subdivision end of the stated span |
| 2 | Merlin St, Neutral Bay, $15,000,000, unit site | the middle, and the most common type in the list |
| 3 | Kurraba Rd, Kurraba Point, $57,000,000, landmark unit site | the institutional end, and the largest they publish |

Each slot then takes: pill `[Site type]`, H3 `[Site type] in [suburb]` under 32
characters, body of two sentences, and three stats. **Figures on cards are
exact, never rounded**, so a price that does not abbreviate exactly goes in the
body and stays out of the stat row, which is what the commercial page did with
$3,908,748.

Images are `developer-story-1.webp` through `-3.webp`, prefixed. See
photography below.

## truth band

| String | Count / budget |
|---|---|
| Pill: The Truth. KEPT | 9/20 |
| H2: We buy property. We have never sold one. KEPT | 40/60 |
| Lede: No vendor or agent pays us, so neither can influence what we put in front of you. NEW | lede |
| CTA: Book a free consultation. KEPT | 24/34 |
| Note: No obligation. No upfront fees. Just a conversation. KEPT | note |

### Four cards

| Heading | Count | Body |
|---|---|---|
| No incentives to sell to you, ever. KEPT | 34/60 | NEW: We take no commission from vendors, agents or project marketers. You are the only person paying us, so you are the only person we answer to. |
| We run the feasibility first. NEW in v2, was "Local Buyers Agent" | 28/60 | NEW, SOURCED: We run our own feasibility on a site before we present it to you, so the ones that do not stack up never reach your desk. |
| We tell you what it is worth. KEPT | 28/60 | NEW: You get an independent read on value against recent comparable site sales, and an estimate of the sale values. Then we hold the line in the negotiation. |
| Access before it is listed. KEPT | 26/60 | NEW: Agents bring us sites before they reach the portals, because we buy often enough to be worth calling. |

**Card 1's body is the one change on this page that is not optional.** The
buyer and investor pages read "no commission from sellers, developers or
agents". On a page whose reader is the developer, naming developers as a party
we refuse money from reads as an insult at best and as confusion at worst. It
becomes "vendors, agents or project marketers", the same claim with the same
scope.

**Card 2 changed in v2.** Draft 1 read "We inspect the site ourselves" and
deliberately stopped at inspection, because no feasibility claim was available.
One is: "We typically run our own internal feasibility before presenting the
site to a client." The card now carries it, and it is a far stronger second
card for a numerical register than an inspection line.

Note the softening of "typically" in the source. The card says what they do
rather than what they typically do, which is the normal reading of that word in
marketing copy, but it is worth a client confirmation that feasibility is run
on every site rather than most.

## stats band, Tier 2

| String | Note |
|---|---|
| 5,000+ properties purchased. KEPT | cleared claim |
| 50+ industry awards. KEPT | cleared claim, and the number that stands per `awardsCountOnStatRow` |
| 4.9 star google reviews. KEPT | verify on the day it ships |
| H2: Reviewed by buyers only, since 2001. KEPT | 36/60 |
| **Over $250 million in development sites. NEW in v2, SOURCED** | replaces one bullet, see below |
| 50+ industry awards. KEPT | matches commercial and investor phrasing, not the buyer page's doubled "Over 50+" |
| Over 300 total genuine Google reviews. KEPT | DESIGN.md says 315+ was true at time of writing and moves. Verify on the day. |

### The $250 million line, and the two things wrong with the source

SOURCED: "We have assisted our clients purchase over $250 million in
development sites in past 8 years."

This is the first segment-specific Tier 2 claim available on any of the four
pages, and on this page it is stronger than the generic 5,000+ properties line,
so it **replaces** one bullet rather than being added to them. DESIGN.md allows
one aggregate line per page.

Two problems, both handled rather than ignored:

1. **"In past 8 years" cannot ship.** DESIGN.md is explicit: "Since 2001,
   never '25 years'; hardcoded durations expire". The line renders as "Over
   $250 million in development sites" with the duration dropped. If the client
   supplies the start year it can read "since 2018" or whatever the year is,
   which is the form DESIGN.md prefers.
2. **The figure is unattributed and undated on the source page.** No source, no
   verification date, no methodology. It is the client's own claim about
   themselves, which is how the review count and the 5,000+ figure are treated
   too, so it is consistent to use it. It goes on the proof register with the
   URL and the date read, and it wants a currency check.

## steps band

| String | Count / budget |
|---|---|
| H2: What happens after you call us. KEPT | 30/60 |
| Sub: Most clients go from engagement to purchase in 30 to 60 days. KEPT | cleared claim, and independently confirmed on the client's developer page |
| Order line: Here is the order it happens in: KEPT | |
| Step 1 H3: Define the site brief. NEW | 21/32 |
| Step 1 body: We start with the numbers: the end product, the budget you will hold to, and the council areas in play. NEW | |
| Step 2 H3: Feasibility and due diligence. NEW in v2 | 29/32 |
| Step 2 body: We read the market against recent site sales, run our own feasibility, and check the site and the contract before you commit. NEW | |
| Step 3 H3: Negotiate and secure. KEPT | 20/32 |
| Step 3 body: We handle the agent and the campaign. You are never the one revealing your position across the table. NEW, same as commercial | |
| Step 4 H3: Settlement and ongoing support. KEPT | 30/32 |
| Step 4 body: We stay with you through settlement, from the final inspection to the day the site is yours. NEW | |

Step 2's heading was "Search and due diligence" in draft 1, matching the
commercial page. It becomes "Feasibility and due diligence" because feasibility
is now a claimable step and it is the one this segment cares about. At 30/32 it
is on the capitals watchlist.

The client's published process is thinner than this: share details, an agent
gets in touch, purchase inside 30 to 60 days, negotiation and due diligence,
settlement. Nothing in the four steps above contradicts it.

## services band, REVISED IN V2

Draft 1 kept the three residential service names and rewrote only their
bodies. That was the best available option before the client's service list was
visible. It is no longer.

The client names these services, SOURCED: Full Search, Appraisal and
Negotiation, Auction Bidding, **Development Sourcing**, **Subdivisions**,
Positive Cashflow Property, Property Management.

Two of those are development-specific and were invisible from inside the
repository. The band takes three:

| Heading | Count | Body |
|---|---|---|
| Development Sourcing. NEW in v2, SOURCED name | 20/32 | NEW: We find the site off market, run the feasibility, and estimate the sale values before we bring it to you. |
| Subdivisions. NEW in v2, SOURCED name | 12/32 | NEW: Land subdivision sites, from a two lot split through to a large staged release. |
| Appraise and Negotiate. KEPT | 22/32 | NEW: Found the site yourself? We inspect it, tell you what it is worth, and negotiate so you do not overpay. |

**Auction Bidding comes off this band and stays in the FAQ**, where it is
answered as a capability. Sites transact by expression of interest and off
market far more often than under the hammer, and the band only holds three.

**Do not invent a service.** All three names above are the client's own. The
bodies describe what the names already say, and the Development Sourcing body
is assembled from the two published role sentences rather than written fresh.

## real access band

**This band is the segment's lead, so it is the one place the page is not
compressed.**

| String | Count / budget |
|---|---|
| Pill: Real Access. KEPT | 11/20 |
| H2: Off-market and auction ready. KEPT | 28/60 |
| Sub 1: Much of what we buy never reaches a listing. KEPT | |
| Sub 2: Here is how we get there first. KEPT | |
| Move 1 H3: We ask before it is listed. KEPT | 26/32 |
| Move 1 body: Your brief goes out to a database of 10,000+ agents. We hear about a site while the owner is still deciding whether to sell. NEW | |
| Move 2 H3: Fewer buyers in the room. KEPT | 24/32 |
| Move 2 body. KEPT verbatim | |
| Move 3 H3: Your position stays yours. KEPT | 25/32 |
| Move 3 body: Going direct tells the agent your budget and your programme. We sit between you and the person who is paid to act against you. NEW | |
| Move 4 H3: Auction ready when it counts. KEPT | 28/32 |
| Move 4 body. KEPT verbatim | |
| CTA lines and button. KEPT | |

"Your programme" is move 3's segment change: a developer's pressure point is
the delivery programme, where the home buyer's is the deadline and the
commercial owner-occupier's is the lease expiry.

The client's own phrasing supports move 1 directly, SOURCED: "off-market
opportunities sourced through our extensive agent and developer network or
direct opportunities with vendors". Note **developer network** as well as agent
network, which is a wider claim than the buyer page's agent database and is not
used here, because the 10,000+ agents figure is the one in the cleared register.

**Off-market stays framed as access, never as a bargain.** DESIGN.md gates any
specific off-market percentage and notes REBAA warns off-market can carry a
premium. No percentage appears on this page.

## prestige band, REMOVED

Third page in a row to drop it, and the same reasoning as
`prestigeBandOnCommercial` and `prestigeBandOnInvestor`. DESIGN.md puts
prestige on the home page only, in both section Segments and section Voice,
and "For homes valued from $2m and above" is residential owner-occupier copy
with no development equivalent in the claims register.

The prestige chip stays in the router, so a prestige lead still arrives
labelled. Only the band is gone.

Note that the client does publish "prestige waterfront development sites" as a
site type. That is a site category, not the prestige service the band
describes, so it does not rescue the band.

## faq

H2: Questions we get from developers. NEW, 32/60.

**The order changed in v2.** Feasibility leads, because it is the question a
developer asks before any other, and draft 1 could not answer it.

| Question | Count | Answer |
|---|---|---|
| Do you run the feasibility? NEW in v2 | 27 | NEW, SOURCED: We run our own feasibility on a site before we present it to you, and our role is finding the site and estimating the sale values. From there we refer you to the town planners, quantity surveyors, engineers and project managers who take it forward. |
| Can you find sites that are not listed? NEW | 39 | NEW: Much of what we buy never reaches a listing. Your brief goes out to a database of 10,000+ agents, so we hear about a site while the owner is still deciding whether to sell. |
| What does a buyer's agent do? KEPT | 29 | NEW: We find the site, inspect it, tell you what it is worth, and negotiate or bid for you. You keep the decision. We do the work and carry the risk of getting it wrong. |
| How long does it usually take? KEPT | 30 | NEW: Most clients go from engagement to purchase in 30 to 60 days. A tight brief in a liquid market can be faster; a rare site takes as long as it takes to find the right one. |
| Does the vendor pay you anything? NEW | 33 | NEW: No. We take no commission from vendors, agents or project marketers. You are the only person paying us, so you are the only person we answer to. |

### FAQ 1 is the whole reason v2 exists

Draft 1 gated this question as Tier 3, put it in the markup as a comment, and
called it "the single most important thing for the client to answer on this
page". The client already answers it in public, SOURCED, twice:

- "We typically run our own internal feasibility before presenting the site to
  a client."
- "Our role in the development process is primarily locating a suitable
  development site and estimating sale values."
- "We can also provide referrals to other key service providers including
  builders, engineering consultants, quantity surveyors, town planners, land
  economic consultants and project managers."

**The answer is deliberately bounded.** It says we run feasibility and estimate
sale values, and it hands planning to a referral. It does not claim DA support,
town planning, zoning analysis, yield modelling or highest-and-best-use work,
because the source explicitly frames those as other people's jobs. Checked
directly against the source: no DA, zoning or yield service is offered
anywhere on either page.

The referral list runs four professions rather than the source's six, cut to
avoid a triadic rhythm and to keep the answer short. Any four of the six are
defensible; these are the four a developer recognises first.

## closer

| String | Count / budget |
|---|---|
| H2: Your side of the table is waiting. KEPT | 33/60 |
| Body. KEPT verbatim | |
| Button: Request an off-market brief. NEW, on the DESIGN.md cleared CTA list | 27/34 full width |
| Note: Buyers only, since 2001. Your details stay private. KEPT | |

## Joint ventures, NOT IN THIS DECK, needs a decision

The client runs a joint venture offering with no equivalent anywhere else in
this build, SOURCED. It connects land owners with developers, and the published
benefits are: getting a structure in place to minimise tax, removing "the
common risks of DA approval", linking to "professional and well funded
developers", realising a site's full potential, and zero agent fees with no
sales commission.

**Three reasons it is not in the deck, and one reason it should probably be in
the page.**

Against:

1. **The published benefits are written for the land owner, not the
   developer.** "Link up with professional and well funded developers" is
   addressed to the person who owns the site. Lifting that list onto a
   developer page points it at the wrong reader.
2. **It would be a tenth section** on the page whose one structural rule is
   shortest copy of any segment.
3. **"Remove the common risks of DA approval" is a DA claim**, and the rest of
   this page is careful to make none. It would need its own claims register row
   and probably a client conversation, because it is the strongest claim on
   either URL.

For: a developer reading this page wants sites, and a joint venture pipeline is
site access by another route. It is the one thing the client offers this
segment that no competitor page in the set mentions.

**Recommendation: raise it, do not build it.** If it goes in, the honest
version is a developer-facing band about access to land owner sites, written
from a claim the client confirms, not a translation of the land owner benefit
list.

## Richard Anderson, a named specialist, NOT USED YET

SOURCED: Richard Anderson is a Propertybuyer team member, "Senior Acquisitions
Manager - Development & Investment", with a propertybuyer.com.au address, and
the page credits him with "$700M+ in gross development value and 800+
dwellings delivered".

This is the only segment in the set with a named specialist whose job is that
segment. It is a real asset and it is **not used on the page**, for two
reasons:

1. **He is not in the DESIGN.md claims register.** The register clears "Rich
   Harvey's credentials" by name and nobody else's, and DESIGN.md says "where a
   claim is not in this register, add a row rather than making a judgement call
   in the markup". Adding the row is the correct process and it needs the
   design lead, not a build.
2. **The source phrasing cannot ship as written.** It reads "more than 25 years
   of experience", and DESIGN.md bans exactly that construction: "Since 2001,
   never '25 years'; hardcoded durations expire."

Worth doing, as a register addition rather than a copy decision.

## photography

Every photograph starts as the buyer page's, inherited from the template, and
**every replacement must be written to a `developer-` prefixed filename.**
`assets/img` is shared, the unprefixed names belong to the buyer page, and
`commercialPhotography` in `shared/segments.json` records that the first
commercial attempt silently replaced the buyer page's artwork by writing over
the shared names.

Slots most obviously wrong on a development page, in the order worth replacing:

1. Truth card 4, currently "An empty home seen before it is listed".
2. Truth card 2, currently an agent inspecting a property, now a feasibility
   card and wanting artwork to match.
3. The three story media panels, once records exist.
4. Step 1 and step 2 cards.

The commercial page's `commercial-` files are the closer of the two existing
sets for several of these, so check whether an existing file serves before
importing anything new, exactly as `investorPhotography` did.

Client has said images will be supplied separately.

## Capitals width watchlist

Headings within about 5 of budget, re-check with Proyale loaded at 390:

- Hero subhead at 38/42 HARD. Four under the cap, and still the string most
  likely to fail the checker.
- Step 2 H3 at 29/32, NEW in v2. Tightest new string on the page.
- Step 4 H3 at 30/32, KEPT from the buyer page where it already passes.
- Move 4 H3 at 28/32, KEPT.
- H1 at 48/60. Twelve under, and seven longer than draft 1's. Ships as three
  lines at 390 and verify no orphan word on the last line.

## What is still missing from this page

Draft 1 listed five. Two are resolved, one shrank, and two are new.

1. **Dates on three of the published site purchases**, plus a client first
   name each, to fill the three Tier 1 slots. RESOLVED IN SHAPE, the ask is
   now a date rather than a deck.
2. **Whether DESIGN.md's "$2.5m upward" or the client's own published deal
   range is current.** The bands follow the published deals.
3. ~~Whether the agency touches feasibility, planning or a DA.~~ RESOLVED from
   the client's own site. Feasibility yes, sale value estimates yes, planning
   by referral, DA never claimed.
4. **A claims register row for Richard Anderson**, and a decision on the joint
   venture band. Both are design lead calls.
5. **A currency check on both URLs.** Everything marked SOURCED is a marketing
   claim read on 21 Aug 2026, not a verified record. The $250 million figure
   and the twenty named purchases are the two that reach a live page.
6. **Photography.** Every slot currently inherits the buyer page's residential
   artwork.
