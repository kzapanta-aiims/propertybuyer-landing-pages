# Copy deck, investor landing page

Segment `investor`. Built 21 August 2026 from `New Builds/buyer/index.html`
at `9651611`. Every string below is either NEW for this page or KEPT from the
template; nothing was changed without appearing here.

The page was derived by script rather than by hand, and every replacement
asserts an exact hit count, so a template change upstream fails loudly instead
of silently dropping copy.

## Register, from DESIGN.md

Evidence-forward and unsentimental. They arrive semi-informed via a broker or
an accountant and want validation, not education from scratch. **Lead with
independence and no developer commissions.**

That is the whole shape of this page. The fear answered first is not "will I
overpay", it is "is the person showing me these numbers paid to show me these
numbers". So the H1 leads on the commission rather than on due diligence, and
the first truth card is the independence claim rather than the inspection one.

## head

| String | Count / budget |
|---|---|
| Title: Buy an investment with no developer commission / Propertybuyer. NEW | title tag |
| Meta description: Independent buyers agency, established 2001. We act for buyers only and take no commission from developers, vendors or agents. NEW | meta |

## site-header

Unchanged. "On your side, since 2001" and "Speak to an expert" both KEPT.

## hero

| String | Count / budget |
|---|---|
| H1: Buy an investment with no developer commission. NEW, three lines at 390 | **46/60** |
| Subhead: We never act for a developer or a vendor. NEW | **41/42 HARD** |
| Body: You have probably already seen numbers from someone who is paid on the sale. We take no commission from developers, vendors or agents. The read you get on a property is the one we would act on ourselves. NEW | body, no cap |
| Award pill: Best Buyers Agency of the Year 2025. KEPT | pill |
| Capture title: Tell us about your investment. NEW | 29 |
| Legend: What are you buying. KEPT micro | 19/20 |
| Chips: all six, unchanged, `investor` carries `checked`. KEPT | see segments.json |
| Budget label: Your budget. KEPT micro | 11/20 |
| Budget options. NEW, see below. ASSUMED, NOT CONFIRMED | select options |
| Location label: Suburb or postcode. KEPT micro | 18/20 |
| Next: Contact details. KEPT | 21 |
| Send my details. KEPT | 15 |

The subhead has one character of headroom against the hard limit. Any edit to
it has to be counted, not eyeballed.

**No purpose field.** The commercial page carries one because that page has two
psychographics pulling in opposite directions and the client asked for it.
`DESIGN.md` describes this segment as a single spread rather than a fork, from
first timers through to portfolio builders and SMSF buyers, so nothing was
invented here. If a fork is wanted later, the honest split is by portfolio
stage and it belongs in the same slot the commercial page uses.

### Budget bands, ASSUMED, NOT CONFIRMED

Derived from the "$650k to $2m" investor range in `DESIGN.md` section Segments,
not supplied by the client. Same status as the commercial bands. The scale runs
wider than the stated range at both ends, deliberately, so a lead outside it
still arrives labelled rather than bouncing off a dropdown.

| Option label | value attribute |
|---|---|
| Under $650k | `under-650k` |
| $650k to $1m | `650k-1m` |
| $1m to $1.5m | `1m-1.5m` |
| $1.5m to $2m | `1.5m-2m` |
| $2m and above | `2m-plus` |

Changing these values after launch breaks HubSpot routing the same way the six
segment strings do. Confirm before the page takes paid traffic. The union
across the three built pages is now fourteen distinct values with no overlap,
which is the input the HubSpot schema decision has been waiting on.

## testimonials, the three Tier 1 slots

| String | Count / budget |
|---|---|
| H2: published client stories. KEPT | 24/60 |
| Sub: Genuine words from our valued clients. KEPT | muted |
| Rating rows Sydney 4.9, Melbourne 5.0, Brisbane 4.9. KEPT | Tier 2 |

All three records come from "Legacy All Investor.pdf", supplied 21 Aug 2026.
Every figure is copied from the deck rather than derived, and each abbreviates
exactly, so nothing on a card is rounded. Full traces in
`proof-register.md`. **The photographs are in place**, see below.

### Slot 1, first investment, Sydney inner west

Deck page 20. Mathew, Sydney NSW, inner west, 2 bed 1 bath 1 car.

| Field | String |
|---|---|
| Pill | First investment |
| H3 | Inner west, Sydney (18/32) |
| Body | Mathew had watched the inner west for years without ever buying. We secured his first investment a short walk from the light rail, inside two weeks. It has created $1.44M in equity and now rents for $1,000 a week. |
| Stat | Bought 2007 / $580K |
| Stat | Initial yield / 6.0% |
| Stat | Value today / $2.02M |

Deck figures: purchase $580,000, equity created $1,440,000, 2026 value
$2,020,000, initial yield 6.0%, 2026 rent $1,000 pw, current yield on purchase
price 9.0%. Purchase plus equity equals current value, checked.

### Slot 2, portfolio addition, Melbourne house

Deck page 37. Wendy, Melbourne VIC, 3 bed 2 bath 2 car.

| Field | String |
|---|---|
| Pill | Portfolio addition |
| H3 | House in Melbourne (18/32) |
| Body | Wendy wanted a low-maintenance asset to add to her holdings, after years of patient planning. We found a single level home a walk from the village strip. It rents for $1,200 a week. |
| Stat | Bought 2024 / $1.175M |
| Stat | Initial yield / 5.0% |
| Stat | Value today / $1.4M |

Deck figures: purchase $1,175,000, equity created $225,000, 2026 value
$1,400,000, initial yield 5.0%, 2026 rent $1,200 pw, current yield 5.3%.
Purchase plus equity equals current value, checked.

### Slot 3, interstate, Brisbane house

Deck page 63. Pui Kwan and Janis, Brisbane QLD, 4 bed 2 bath 2 car.

| Field | String |
|---|---|
| Pill | Interstate |
| H3 | House in Brisbane (17/32) |
| Body | Pui Kwan and Janis were buying from another state with no way to inspect in person. We chose and secured the house for them, and they first saw it after settlement. It rents for $1,200 a week. |
| Stat | Bought 2023 / $1.23M |
| Stat | Initial yield / 4.6% |
| Stat | Value today / $1.75M |

Deck figures: purchase $1,230,000, equity created $520,000, 2026 value
$1,750,000, initial yield 4.6%, 2026 rent $1,200 pw, current yield 5.1%.
Purchase plus equity equals current value, checked.

### Why these three

The deck holds 75 records across Sydney, Melbourne, Brisbane and Adelaide. The
three chosen ladder by portfolio stage, which is how `DESIGN.md` describes this
segment: "first timers through to portfolio builders and SMSF buyers, heavily
interstate". First investment, then an addition to existing holdings, then a
purchase made from another state without an inspection.

They also give three states, which the commercial page could not, and ascending
prices that span the budget band the form offers. Slot 1 sits below that band
at $580,000, but it was bought in 2007 and the card carries the year, so the
scale reads correctly.

### Photographs, IN PLACE

All three are the hero shots from the deck pages the records came from, the
same source as the buyer page's three. Extracted by
`../tools/extract-deck-images.mjs`, which reads the embedded image streams
rather than rendering a page, so it needs no rasteriser.

They ship at their native 685x419, which is exactly what every story image
already on the buyer page ships at, so this is parity rather than a
compromise. CSS `object-fit: cover` does the crop to the card panel.

| File | Deck page | Property |
|---|---|---|
| `investor-story-1.webp` | p20 | Sydney inner west |
| `investor-story-2.webp` | p37 | Melbourne single fronted |
| `investor-story-3.webp` | p63 | Brisbane, city outlook |

### The deck disagrees with itself on slot 1

Page 20's copy calls the property "a sunny apartment" and then "an apartment
that suits exactly the renter profile". The photograph on that same page is a
freestanding cottage with a picket fence and a courtyard garden, and the two
secondary photographs are of the same cottage.

Rather than pick a side, the card **stops naming the dwelling type**. The
heading reads "Inner west, Sydney" and the body says "his first investment a
short walk from the light rail". Every figure is unchanged, and nothing on the
card can now contradict the photograph beside it. Worth a client answer, since
the deck is the thing that is inconsistent.

## the truth band, four cards

| Card | String |
|---|---|
| Lede | No developer or vendor pays us, so neither can influence what we put in front of you. NEW |
| 1 H2 | No incentives to sell to you, ever. KEPT |
| 1 body | We take no commission from developers, vendors or agents. You are the only person paying us, so you are the only person we answer to. NEW |
| 2 H2 | Someone stands in the property. NEW (30/32) |
| 2 body | Your agent works the market you are buying in, and inspects the property, the tenancy and the condition in person before you commit. NEW |
| 3 H2 | We tell you what it is worth. KEPT |
| 3 body | You get an independent read on value against recent comparable sales and current rents. Then we hold the line in the negotiation. NEW |
| 4 H2 | Access before it is listed. KEPT |
| 4 body | Agents bring us off-market stock before it reaches the portals, because we buy often enough to be worth calling. NEW |

Card 2's heading is the one place this page departs from the template's
wording rather than its content. `DESIGN.md` asks this segment for "an honest
on-the-ground assessment, not more data", and "Local Buyers Agent" describes a
job title where the register asks for a person in a room.

## stats band

Tier 2, unchanged except the award count.

The bullet reads **50+ industry awards**, matching the change the client
directed on the commercial page. Note that the stat callout directly above it
still reads 53, and `DESIGN.md` section Claims resolves the count at 53 and
says it replaces 50+ everywhere. This page inherits that contradiction rather
than introducing it; recorded under `commercialAwardsCount` in
`shared/segments.json`, and it wants settling once across all three pages.

Review count: verify on the day it ships, per the claims register.

## the process rail, four steps

| Step | String |
|---|---|
| 1 H3 | Define the numbers. NEW |
| 1 body | We start with the brief: the yield you need, the budget you will hold to, the holding period, and the markets in play. NEW |
| 2 H3 | Search and due diligence. NEW |
| 2 body | We read the market against recent sales and rents, then inspect the property, the tenancy and the contract before you commit. NEW |
| 3 H3 | Negotiate and secure. KEPT |
| 3 body | We handle the agent and the campaign. You are never the one revealing your position. NEW |
| 4 H3 | Settlement and ongoing support. KEPT |
| 4 body | We stay with you through settlement, from the final inspection to the day the rent starts. NEW |

Step 1 lists four items rather than three, deliberately. `DESIGN.md` bans
triadic lists as a default rhythm.

## services

Three cards KEPT. Only the Full Search body changes, ending at settlement
rather than at the keys, because an investor does not take the keys.

## off-market band

| String |
|---|
| We ask before it is listed: Your brief goes out to a database of 10,000+ agents. We hear about a property while the owner is still deciding whether to sell. NEW |
| Fewer buyers in the room. KEPT |
| Your position stays yours. KEPT |
| Auction ready when it counts. KEPT |

Off-market is framed as access rather than as a discount, per the claims
register. No off-market percentage appears anywhere; that claim is gated.

## FAQ, five entries

| Q | A |
|---|---|
| What does a buyer's agent do for an investor? | We find the property, inspect it, tell you what it is worth, and negotiate or bid for you. You keep the decision. We do the work and carry the risk of getting it wrong. KEPT |
| Do you take any commission from developers? | No. We take no commission from developers, vendors or agents. You are the only person paying us, so you are the only person we answer to. NEW |
| Can you buy in a state I do not live in? | Yes. We have offices in Sydney, Melbourne, Brisbane and Adelaide, and we inspect in person so you do not have to fly. NEW |
| How long does it usually take? | Most clients go from engagement to purchase in 30 to 60 days. A tight brief in a liquid market can be faster; a rare one takes as long as it takes to find the right property. KEPT |
| What do you charge? | A full search is 1.5 to 2 percent of the purchase price. Appraise and negotiate, where you have already found the property, is 1 percent. NEW |

The second question is the one this segment actually arrives with, so it sits
second rather than last. The fee answer uses the schedule cleared in the
`DESIGN.md` claims register, unchanged.

**Nothing here advises on yield or growth.** Every answer describes the
service. That is deliberate: a claim about what a property will return is not
in the register and is not ours to make.

## closer

| String | Count |
|---|---|
| H2: Your side of the table is waiting. KEPT | |
| Body KEPT | |
| CTA: Talk to our investment team. NEW | 26/34 |
| Buyers only, since 2001. Your details stay private. KEPT | |

## removed from the template

**The prestige band.** Same decision as the commercial page: `DESIGN.md` puts
prestige on the home page only, in both section Segments and section Voice, and
the band's copy is residential owner-occupier language with no investor
equivalent in the claims register. Writing one would be inventing a service.
The prestige **chip** stays in the router, so a prestige lead still arrives
labelled. This page has nine sections where the buyer page has ten.

## still open

1. **The deck disagrees with itself on slot 1**, above. The copy says apartment,
   the photograph is a cottage. The card names neither.
2. **Budget bands are assumed**, not confirmed.
3. **The award count contradicts itself**, inherited.
4. **The deck retells the buyer page's three records as investments.** Roderick
   and Denise, Rozanne and Shane appear in this deck with identical figures and
   a portfolio framing, against the downsizer, upsizer and first-home framing
   live on the buyer page. None of them is used here, but the overlap questions
   how the client's decks are assembled. Recorded in `proof-register.md`.
5. **The three POC demo items** are inherited and fail the shippability check,
   as on every page. Delete before launch, on all three at once.
