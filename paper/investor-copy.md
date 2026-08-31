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
| Title: Buy an investment with an expert on your side / Propertybuyer. CHANGED 28 Aug 2026, the old title read "no developer commission" and was mistaken for the developer segment. The fee claim stays in the meta description. | title tag |
| Meta description: Independent buyers agency, established 2001. We act for buyers only and take no commission from developers, vendors or agents. NEW | meta |

## site-header

Header tag now "25 Years Property Investment Excellence", 39, display line. NEW. "Speak to an expert" KEPT.

## hero

| String | Count / budget |
|---|---|
| H1: Build your property investment portfolio with an expert on your side. CHANGED 28 Aug 2026, client supplied and adamant. Four lines, breaking after "property". Widest line is still "investment portfolio", so it costs no extra width. | **68/60 OVER, excepted per page in check.mjs** |
| Subhead: Helping property investors achieve success in Australia. CHANGED 28 Aug 2026, client supplied. Set in sentence case, supplied in title case, no word changed. Wraps to two lines. | **55/42 OVER, excepted per page in check.mjs** |
| Body (UNCHANGED, re-confirmed 28 Aug 2026 as byte for byte identical to the client string): At Propertybuyer, we understand the unique needs and goals of property investors in Australia. Whether you're a seasoned investor or just starting, our team of dedicated professionals is here to guide you through the journey of property investment. NEW | body, no cap |
| Award pill: Best Buyers Agency of the Year 2025. KEPT | pill |
| Capture title: Tell us about your investment. NEW | 29 |
| Legend: What are you buying. KEPT micro | 19/20 |
| Chips: all six, unchanged, `investor` carries `checked`. KEPT | see segments.json |
| Budget label: Your budget. KEPT micro | 11/20 |
| Budget options. NEW, see below. ASSUMED, NOT CONFIRMED | select options |
| Location label: Suburb or postcode. KEPT micro | 18/20 |
| Next: Contact details. KEPT | 21 |
| Send my details. KEPT | 15 |

The subhead has four characters of headroom against the hard limit. Any edit
to it has to be counted, not eyeballed.

The client supplied all three strings on 25 August 2026. Two were cut to fit:
the H1 arrived at 68 against the 60 cap and lost "property", which the rest of
the line already implies; the subhead arrived at 55 against the 42 hard cap as
"Helping Property Investors Achieve Success in Australia". The body kept the
word "journey", which was on the banned list until the same date. It was taken
off the list in `tools/check.mjs` rather than worked around, so the removal
applies to every page, not just this one.

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
| Title | We buy property Australia wide. NEW |
| Lede | Your preferred area or suggest area from our experts. NEW |
| 1 H2 | The most comprehensive research. KEPT |
| 1 body | Only the most superior opportunities. Pay the absolute minimum. We will negotiate the lowest possible price. CHANGED 28 Aug 2026 |
| 2 H2 | Protecting your interests. CHANGED 28 Aug 2026 |
| 2 body | We have all the trusted advisors including the best pest and building inspectors, the best solicitors, and the best related professionals to ensure your interests are protected. CHANGED 28 Aug 2026 |
| 3 H2 | Off-market and pre-market. CHANGED 28 Aug 2026 |
| 3 body | We see off-market, pre-market and are privy to information on on-market properties not available to anyone else. CHANGED 28 Aug 2026 |
| 4 H2 | We provide industry leading research and analysis. CHANGED 28 Aug 2026 |
| 4 body | To give you a high level of confidence. We assess and enlighten you of areas that will outperform the market for your budget and have experts within them. CHANGED 28 Aug 2026 |

The whole band was rewritten by the client on 25 August 2026, then rewritten
again on 28 August 2026 in the Paper file, and no longer tracks the template.
All four cards now carry a heading and a body, so the two headings that stood
alone since 25 Aug are filled and the matched-height question is moot. Only
card 1's heading survived the second pass. Read off the Paper artboard
"INVESTOR · 1440 -- v2", where five comment threads on the truth frame mark
the changes; three were copy and two were the card images.

Three typographic corrections were made under DESIGN.md mechanics, none
changing meaning: a missing space after "opportunities." in card 1 body, and
"the best related progressions" to "professionals" in card 2 body, which the
client's own 25 Aug copy had written as "professional". Card 4 body gained its
terminal full stop.

Card 1 body arrived as "We will negotiate you the lowest best possible
price", a double superlative with "negotiate you" for "negotiate for you". It
shipped that way for a few hours on 28 Aug 2026 and was then corrected to "We
will negotiate the lowest possible price", which is the client's own 25 August
wording for the same sentence rather than anything written here. The banned
list holds "lowest price" as a contiguous string, which this does not contain,
so it passes the checker, but it sits close to a claim the register would
otherwise gate.

Card 3 body is now word for word identical to a paragraph already in the
off-market band lower down the same page, so that sentence renders twice.

## stats band

Tier 2, unchanged except the award count.

The bullet and the stat callout above it both read **50+ industry awards**.
The two disagreed when this page was built, the callout saying 53; the client
settled it at 50+ on 21 August 2026 and `DESIGN.md` section Claims was
corrected to match. Recorded under `awardsCountOnStatRow` in
`shared/segments.json`.

Review count: verify on the day it ships, per the claims register.

The three laurelled bullets under the heading, which carried the aggregate
claims (5,000+ properties, 50+ awards, 300+ reviews), were replaced on
25 August 2026 by the Sydney, Melbourne and Brisbane rating rows the
testimonials header already carries. The client asked for this band to read as
reviews on the investor page. The rows were drawn for a light surface, so the
place names, scores and stars are recoloured for teal/700 through
`.rating-rows--on-brand`; the stars take gold/400, which is the colour the
laurels they replaced were already using.

The stat callouts floating over the photograph are untouched and still read
5,000+, 50+ and 4.9 star.

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

The capture card at the foot of the band carries three strings:

| String |
|---|
| Most investors only ever see the advertised market. NEW, was "Most buyers" |
| Tell us what you are looking for and we will put it to our agent network. KEPT |
| Strip: We see off-market, pre-market and are privy to information on on-market properties not available to anyone else. NEW |

The strip is a brand-filled bar across the foot of that card, from the Paper
file, investor only. It is carried by `.auction-cta--strip` so the other three
segment pages, which have no third child in that form, keep the single row
they were built with.

Off-market is framed as access rather than as a discount, per the claims
register. No off-market percentage appears anywhere; that claim is gated.

## FAQ, five entries

| Q | A |
|---|---|
| What does a buyer's agent do for an investor? | Two paragraphs. First, NEW: We provide industry leading research and analysis - to give you a high level of confidence. We assess and enlighten you of areas that will outperform the market for your budget and have experts within them. Second, KEPT: We find the property, inspect it, tell you what it is worth, and negotiate or bid for you. You keep the decision. We do the work and carry the risk of getting it wrong. |
| Do you work for me exclusively? | Yes. We act for buyers only, and have since 2001. We take no commission from sellers, developers or agents. You are the only person paying us, so you are the only person we answer to. SUPPLIED VERBATIM by the client 31 Aug 2026, BugHerd task 8, filling the bracket that stood here from 28 Aug. See investorFaqExclusivityGap28Aug |
| Can you buy in a state I do not live in? | Yes. We have offices in Sydney, Melbourne, Brisbane and Adelaide, and we inspect in person so you do not have to fly. NEW |
| How long does it usually take? | Every buyer moves at a different pace. / Some are ready to purchase within 48 hours, most land somewhere in the 30 to 60 day range, and a rare brief takes as long as it takes to find the right property. Our job is to guide you through it and give you confidence in a major financial decision. CHANGED 28 Aug 2026, the line break is authored and ships as a br |
| What do you charge? | A full search is 1.5 to 2 percent of the purchase price. Appraise and negotiate, where you have already found the property, is 1 percent. NEW |

The second question was replaced on 25 August 2026. As supplied, the question
asks about exclusivity and the answer describes how long a purchase takes, so
the pair does not currently meet. It is recorded here as given; both halves are
the client's. It was **resolved as far as it can be on 28 August 2026**. The
client rewrote that same timing copy as the answer to "How long does it
usually take?", where it belongs, which briefly left the page answering timing
twice. The duplicate was removed and the exclusivity slot shipped as a visible
bracket for three days.

**Filled 31 August 2026, by the client, verbatim.** BugHerd task 8 supplied
the answer word for word and it is on the page unedited. It reads on the first
of the two possible questions, who pays and who the agency answers to, and not
on the second, whether two of the agency's own buyers can be run against each
other on one property. That is the client answering their own question, so it
stands as supplied. Nothing about buyers agent licensing was added around it:
licensing is state by state, no source for it sits in the claims register, and
rule 1 forbids writing one here.

It also returns the statement that no commission is taken from developers,
which dropping the old entry had removed and which is this segment's
independence claim. The fee answer uses the schedule cleared in the
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
