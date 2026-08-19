# Copy deck, home buyers Paper design

Drafted mobile-first on 13 August 2026. Every string carries its character
count against its budget (hero subhead 42 hard; H1/H2 60; H3 and card
headings 32; buttons 34 full width, 20 beside another element; micro labels
20, all measured at 390 where Proyale renders H1/H2 in capitals). Strings
marked SHIPPED are verbatim from `New Builds/buyer/index.html` and already
passed the checker. Brackets mark values the client must supply; they are the
repo's unshippable marker and carry onto the canvas visibly.

Banned-language scan run on this deck 13 Aug 2026: no em dashes, no
exclamation marks, no advocate in headings or buttons, no
unlock/elevate/seamless/journey/empower, no "in today's market", no
"solutions", no banned button labels, no discretion vocabulary outside the
prestige band, no triadic default rhythm. Australian English throughout.

## site-header

| String | Count / budget |
|---|---|
| Buyers only, since 2001 — SHIPPED micro | 23, display line not a field label |
| Call [1300 000 000] — phone link | 19/20 beside logo |

## hero

| String | Count / budget |
|---|---|
| H1: Buy with an expert on your side — SHIPPED, "expert" in highlight | 31/60, renders in capitals, 3 lines at 390 (verified in HTML build) |
| Subhead: We act for buyers only, never for sellers. — SHIPPED | 42/42 HARD, at the cap, re-verify no clip on canvas |
| Body: Going direct hands the selling agent your budget and your deadline. They are paid to use both against you. We sit on your side of the table, from the first brief to the keys. — SHIPPED | body copy, no cap |
| Capture title: Tell us about your search — SHIPPED | 25 |
| Legend: What are you buying — SHIPPED micro | 19/20 |
| Chips (FOUR per project scope): Home to live in · Investment · Commercial · Development site — SHIPPED labels, prestige and expat chips dropped from this project | 15 · 10 · 10 · 16, all /20 |
| Budget label: Budget band — SHIPPED micro | 11/20 |
| Budget options — SHIPPED, seven bands + Not sure yet | select options |
| Location label: Suburb or area — SHIPPED micro | 14/20 |
| Placeholder: For example, Lane Cove — SHIPPED | placeholder, not a label |
| Submit: Tell us what you are looking for — SHIPPED | 32/34 full width only; short sibling "Start your search" 17/20 |
| Hint: 3 questions now. Contact details on the next step. — SHIPPED | 50, small text |
| Phone micro label: Prefer to talk | 14/20 |
| Phone link: [1300 000 000] | bracketed, never a plausible number |

## testimonials (Tier 1, moved directly under the hero)

| String | Count / budget |
|---|---|
| H2: What that looks like in practice — SHIPPED heading, section relocated | 32/60 |
| Intro: Three purchases from our published client stories, in the buyers' own words. | intro, measure 760 |
| Card 1 stat: 12 bidders | stat, type/stat |
| Card 1 H3: Won at auction in [Suburb] | 26/32 |
| Card 1 body: Kylie and James went to auction against 12 registered bidders. Nick did the bidding, and they never had to. [Month Year]. | proof-register slot 1 |
| Card 2 stat: 4 weeks | stat |
| Card 2 H3: Home secured in North Sydney | 28/32 |
| Card 2 body: Sam went from engagement to a home in the heart of North Sydney in four weeks. [Month Year]. | proof-register slot 2 |
| Card 3 stat: 2 weeks | stat |
| Card 3 H3: Off market in Paddington | 24/32 |
| Card 3 body: Carolyn and Richard were back in Auckland when we found it. Sourced off market and secured without them flying in. [Month Year]. | proof-register slot 3 |

Three cards is a deliberate exception to the two-or-four rhythm preference:
the Tier 1 budget is three per page and the shipped grid is `grid--3`. Named
at review rather than silently reconciled.

## stats-band (Tier 2, the page's single aggregate line, placed after why-choose)

| String | Count / budget |
|---|---|
| 315+ Google reviews. Buyers only since 2001, more than 5,000 properties purchased and 53 industry awards. | one line, count-only awards, review count verify-at-publish |

## why-choose — SHIPPED verbatim, all strings

H2 "We buy property. We have never sold one." (41/60) · intro · four cards:
No kickbacks, ever (18/32) · One agent, in your market (25/32) · We tell you
what it is worth (28/32) · Access before it is listed (26/32), bodies as
built.

## navigate-band — SHIPPED verbatim, all strings

H2 "What happens after you call us" (30/60) · intro with 30 to 60 days ·
Step 1 to 4 labels (6/20 each) · We set the brief (16/32) · We search and
inspect (21/32) · We value it (11/32) · We negotiate or bid (19/32), bodies
as built.

## real-access, was auction-explainer (rewritten 20 Aug 2026)

The band now carries off market access first and auction second, per Paper
"Value & Features 7" on BUYER 1440 v2. Eyebrow, moves and close line all
change; the photo strip, the four icons and the capture point are unchanged.

| String | Count / budget |
|---|---|
| Eyebrow: Real Access | 11/20 micro |
| H2: Off-market & auction ready | 26/60 |
| Intro: Much of what we buy never reaches a listing. Here is how we get there first. | intro, two lines, first line semibold |
| Move 1 H3: We ask before it is listed | 26/32 |
| Move 1 body: Your brief goes out to a database of 10,000+ agents. We hear about a property while the vendor is still deciding whether to list it at all. | two sentences |
| Move 2 H3: Fewer buyers in the room | 24/32 |
| Move 2 body: An off-market sale has no campaign and no competing bidders. It is a negotiation between two parties rather than a contest you have to win. | two sentences |
| Move 3 H3: Your position stays yours | 25/32 |
| Move 3 body: Going direct tells the selling agent what you can pay and how much you want it. We sit between you and the person who is paid to act against you. | two sentences |
| Move 4 H3: Auction ready when it counts | 28/32 |
| Move 4 body: Some properties only come up under the hammer. You agree the walk-away number before the day, your agent bids to it, and we stop when it is passed. | two sentences |
| Close line 1: Most buyers only ever see the advertised market. | 47, semibold, the emotional close |
| Close line 2: Tell us what you are looking for and we will put it to our agent network. | 73, body weight, runs into the capture button |

The 10,000+ agent database is the only number in the band. It is already
cleared on the proof register and stated in the client USP table.

## who-we-help — router rescoped to the four-segment project

H2 "Not buying a home to live in?" (29/60) — SHIPPED. Intro — SHIPPED.
2×2 grid, four items:

| Item | Copy | Route |
|---|---|---|
| An investment | First property through to a portfolio. — SHIPPED | capture, investor |
| Commercial | Lease expiry, or buying for yield. — SHIPPED | capture, commercial |
| A development site | Duplex, subdivision or larger. — SHIPPED | capture, developer |
| Prestige | Buying without going public. — SHIPPED | anchors DOWN to the prestige band, not to capture |

The shipped "A home to live in" self-item and "Buying from overseas" item
come off: the page is the home page, and expat is out of the project's
four-segment scope.

## prestige (net-new band)

| String | Count / budget |
|---|---|
| Micro label: Prestige | 8/20, gold, uppercase |
| H2: A quieter way to buy | 20/60, gold text/prestige |
| Body: Some homes never reach the portals, and some purchases are better made without an audience. Our prestige team works by referral and private appointment, in complete confidence. | the only copy on the page allowed discretion vocabulary |
| Button: Call the prestige team | 22/34, gold action/prestige, ink #001114 annotated literal |
| Number line: [1300 000 000] | bracketed |

Fewest words on the page. No outbound link; the band is a terminus.

## faq — SHIPPED verbatim, five items

H2 "Questions we get from home buyers" (33/60) and the five Q&A pairs as
built.

## discover-banner

| String | Count / budget |
|---|---|
| H2: Talk to a buyer's agent in your market — SHIPPED | 40/60 |
| Intro — SHIPPED | |
| Chips, budget, location — as hero, four chips | |
| Submit: Book a call with a buyer's agent — SHIPPED | 32/34 full width |
| Phone micro label: Prefer to talk | 14/20 |
| Phone link: [1300 000 000] | bracketed |

## footer — SHIPPED verbatim plus bracketed legal slots

Offices paragraph, propertybuyer.com.au link, legal line, plus
[Privacy policy] · [Terms] · [Licence numbers] as bracketed slots.

## Capitals width watchlist (headings within ~5 of budget, re-check on canvas)

- Subhead 42/42 (Geist, not Proyale, but at the hard cap)
- H2 "Off-market & auction ready" 26/60 fine, but renders in capitals at
  390: verify the ampersand line does not orphan "ready"
- H3 "We walk away when it is wrong" 29/32
- H3 "Home secured in North Sydney" 28/32
- Submit buttons 32/34 full width at 390
