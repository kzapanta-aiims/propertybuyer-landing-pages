# Proof register, home buyers page

Every Tier 1 item that appears on the Paper design traces to a row here.
Anything not in this register renders bracketed. Retrieved 13 August 2026
from Propertybuyer's published materials. The standing rules apply: nothing
invented, and a bracket marks a value the client must confirm before code.

**Filled from the home buyer deck, 18 August 2026.** The three Tier 1 slots
carry no brackets. They are filled from "Legacy All Homebuyer (1).pdf",
supplied by the client on 18 August 2026: 80 residential purchases, each with
a purchase year and price, a 2026 valuation, client savings, equity created
and a time to purchase. Every figure below is copied from that deck rather
than derived. Figures shown on the page in abbreviated form are exact, not
rounded: $700K is $700,000, $1.88M is $1,880,000, $6.2M is $6,200,000,
$4.87M is $4,870,000 and $15M is $15,000,000.

**Segment mismatch resolved, 18 August 2026.** The slots briefly carried
commercial purchases, from the commercial deck supplied the same day. That
was corrected within the day at the client’s direction: this is the home
buyers page and it now carries home buyer records. The three commercial
records are kept under Reserves, where they are the natural starting content
for the commercial page when it is built.

**Why these three.** The deck is a ladder, not a list. The three chosen cover
the three life stages a home buyer arrives at the page in, at ascending price
points, so a visitor finds themselves in one of them: first home, family home,
downsize. Each also answers a different fear. 74 of the 80 records were passed
over; the selection notes below say what each was chosen against.

## Selected for the three Tier 1 slots

### Slot 1 · First home, after years of renting

- **Source:** Legacy All Homebuyer (1).pdf page 58, client supplied 18 Aug 2026.
- **Record:** Brisbane QLD, 3 bed 2 bath 2 car. Bought 2008 for $700,000,
  valued at $2,000,000 in 2026. Client savings $56,000. Equity created
  $1,300,000, a 2.9x multiple. Current rent $1,100 per week. Time to purchase
  3 weeks. Client Shane.
- **Verbatim:** "I didn’t want something generic. Propertybuyer found me a
  home with real character and soul."
- **On-page copy:** pill `First home` · h3 `First home in Brisbane` · body
  "Shane had rented for years and wanted a first home with real character,
  nothing generic. We found him a classic Queenslander in the suburb he had
  been watching." · stats `$700K` Bought 2008, `$2M` Value today, `3 weeks`
  To purchase.
- **Chosen against:** the other 15 Brisbane records. Shane carries the highest
  multiple of any Brisbane purchase with a named client, and the lowest entry
  price of the three slots, which is what makes the ladder start where a first
  home buyer actually stands.
- **Tier:** 1, complete. Named client, dated, attributable.

### Slot 2 · Family home, after losing at auction

- **Source:** Legacy All Homebuyer (1).pdf page 7, client supplied 18 Aug 2026.
- **Record:** Sydney NSW, 4 bed 3 bath 2 car. Bought 2012 for $1,880,000,
  valued at $6,200,000 in 2026. Client savings $169,000. Equity created
  $4,320,000, a 3.3x multiple. Current rent $2,800 per week. Time to purchase
  6 weeks. Clients Stephen and Veronica.
- **Verbatim:** "We had almost given up. Propertybuyer made it real for us."
  Context published with the record: three auctions lost in a row, and they
  never sat in an auction room again.
- **On-page copy:** pill `Bought without auction` · h3 `Family home in Sydney`
  · body "Stephen and Veronica lost three auctions in a row and were ready to
  stop looking. We found the family home they wanted, and they never sat in an
  auction room again." · stats `$1.88M` Bought 2012, `$6.2M` Value today,
  `6 weeks` To purchase.
- **Chosen against:** every other record in the deck. This is the one that
  matches the home segment register head on, which asks the page to lead with
  handover of risk. Losing three auctions is the segment’s first fear stated
  out loud, and the record answers it.
- **Tier:** 1, complete.

### Slot 3 · Downsizing without giving anything up

- **Source:** Legacy All Homebuyer (1).pdf page 3, client supplied 18 Aug 2026.
- **Record:** Sydney NSW, eastern suburbs, 5 bed 2 bath 2 car. Bought 2014 for
  $4,870,000, valued at $15,000,000 in 2026. Client savings $438,000. Equity
  created $10,130,000, a 3.1x multiple. Current rent $4,500 per week. Time to
  purchase 8 weeks. Clients Roderick and Denise.
- **Verbatim:** "We downsized. We didn’t compromise. Propertybuyer made that
  possible."
- **On-page copy:** pill `Downsizer` · h3 `Downsized in Sydney` · body
  "Roderick and Denise were downsizing and refused to trade quality or
  location for it. We secured an eastern suburbs home that met every point of
  the brief." · stats `$4.87M` Bought 2014, `$15M` Value today, `8 weeks`
  To purchase.
- **Chosen against:** the rest of the deck on size. The largest equity figure
  in all 80 records, and the only one that puts a downsizer on the page, which
  is the life stage the other two do not reach.
- **Tier:** 1, complete.

**Photographs.** The three property images are the hero shots from the same
three pages of the deck, resized under the rules `tools/compress-images.mjs`
applies to `story-*` assets. They are the actual properties purchased.

**The privacy badge is hidden from 18 Aug 2026** at the client’s request. It
is hidden in CSS, not deleted: the markup stays and one declaration in
`styles.css` brings it back. Worth knowing that a street number is legible on
two of the three photographs; the deck is the client’s own published material,
so this publishes nothing they have not already published themselves.

**Not used, and why.** 77 records were not slotted. Melbourne is the largest
single group in the deck at 23 records and is not represented in the three;
its strongest by equity is Stephen and Melanie, page 29, $2,500,000 in 2013
to $4,200,000, and its strongest by client saving is Suzy, page 30, $346,000.
Either could take a slot if the client would rather show three states than
three life stages. The rules budget three Tier 1 blocks per page, so the
ladder was chosen over the map.

## Reserves, qualified but not slotted

**Commercial, for the commercial page.** Filled the three slots for part of
18 Aug 2026 before the home buyer deck arrived. Sourced from "Latest Recent
Purchases - Commercial.pdf", every figure copied from the deck. Their images
are still in `assets/img/`. These are the natural starting content for
`New Builds/commercial/index.html`.

| Client | Location | Record | Source |
|---|---|---|---|
| Geoff | Melbourne VIC | Office, 952 sqm, owner occupier. May 2025, $3,908,748 against a $4,172,548 appraisal. Savings $263,800, $4,106 per sqm | Commercial deck p.7 |
| Jamie & Tamara | Brisbane QLD | Warehouse, 650 sqm, investment. Dec 2024, $5,550,000. Rent $335,310, yield 6.0 percent, 3 year lease | Commercial deck p.9 |
| Stella | Sydney NSW | Office, 431 sqm, investment, bought from overseas. Apr 2024, $4,475,000. Rent $220,000, yield 4.9 percent, 5+5 year lease | Commercial deck p.14 |


**Residential, displaced 18 Aug 2026.** These three held the Tier 1 slots
until the commercial deck arrived. Still qualified, still short a month and
year, and the natural content for this page if it returns to residential.

| Name | Location | Outcome | Source |
|---|---|---|---|
| Kylie & James | not published | Won at auction against 12 registered bidders | who-we-help/home-buyers, new-testimonial |
| Sam | North Sydney | Engagement to purchase in four weeks | who-we-help/home-buyers |
| Carolyn & Richard | Paddington, Sydney | Found in 2 weeks, sourced off market, bought from Auckland | new-testimonial |

**Residential, never slotted.**

| Name | Location | Outcome | Source |
|---|---|---|---|
| Sophie Johnston | Brisbane (from Newcastle) | First house, offer accepted in 25 days, within budget | new-testimonial |
| Basil Klevansky | not published | Exchanged in 24 hours against 8 other issued contracts | new-testimonial |
| Merridy | Sydney | Property found 3 weeks after engagement | who-we-help/home-buyers |
| Vishwinder Singh Ghai | not published | Won auction against 11 registered bidders | new-testimonial |
| Zane McIntyre | Sydney/Qld | Home in 2 weeks of inspections, 4-week settlement | new-testimonial |
| Rebecca Furzer | Sydney | Family upgrade with 3 kids | new-testimonial |
| Hannah | Eastern Suburbs | Dream family home purchased | new-testimonial |
| Sarah & Jeff | Northern Beaches | Off-market access, "Rich was on the ball all the time" | who-we-help/home-buyers |

## Investor page, selected 21 August 2026

**Filled from "Legacy All Investor.pdf"**, supplied by the client 21 Aug 2026.
75 records across Sydney, Melbourne, Brisbane and Adelaide, each carrying a
purchase year and price, a 2026 valuation, equity created, an initial yield, a
2026 weekly rent and a current yield on the purchase price. Every figure below
is copied from the deck rather than derived.

**Why these three.** The ladder is portfolio stage, which is how DESIGN.md
describes the segment: "first timers through to portfolio builders and SMSF
buyers, heavily interstate". First investment, then an addition to existing
holdings, then a purchase made from another state with no inspection. The three
also give three states, which the commercial page could not, and prices that
ascend across the band the form offers.

| Slot | Client | Location | Bought | Price | Initial yield | Equity created | 2026 value | 2026 rent | Deck page |
|---|---|---|---|---|---|---|---|---|---|
| 1 · First investment | Mathew | Sydney NSW, inner west | 2007 | $580,000 | 6.0% | $1,440,000 | $2,020,000 | $1,000 pw | p20 |
| 2 · Portfolio addition | Wendy | Melbourne VIC | 2024 | $1,175,000 | 5.0% | $225,000 | $1,400,000 | $1,200 pw | p37 |
| 3 · Interstate | Pui Kwan and Janis | Brisbane QLD | 2023 | $1,230,000 | 4.6% | $520,000 | $1,750,000 | $1,200 pw | p63 |

**Arithmetic checked.** Purchase price plus equity created equals the 2026
current value on all three. The deck's current-yield figures also reconcile
against the stated weekly rent: 9.0, 5.3 and 5.1 percent respectively.

**Abbreviations are exact.** $580K, $1.175M, $1.23M, $1.44M, $1.4M, $1.75M and
$2.02M all abbreviate without rounding, so every figure can sit in a stat row
rather than being pushed into body text the way the commercial page had to do
with $3,908,748.

**Photographs are in place.** All three are the hero shots from the deck pages
the records came from, the same source as the buyer page's three, and they
ship at the same native 685x419 those already do. Extracted by
tools/extract-deck-images.mjs, which reads the embedded image streams rather
than rendering a page, so no rasteriser is involved and the result is
reproducible: deleting the three files and re-running reproduces them byte for
byte. Each record page in the deck carries three photographs of the same
property; the card uses the large hero.

**The deck disagrees with itself on slot 1.** Page 20's copy calls the property
an apartment twice. The photographs on that same page are of a freestanding
cottage with a picket fence. The card therefore names no dwelling type at all:
the heading is "Inner west, Sydney" and the body says "his first investment a
short walk from the light rail". Every figure is unchanged. This is the deck
contradicting itself rather than a transcription error, and it is worth a
client answer alongside the overlap question below.

**Not used, and why.** 72 records were not slotted. The strongest unslotted
candidates, kept here in case a slot changes:

| Client | Location | Bought | Price | Initial yield | Note | Deck page |
|---|---|---|---|---|---|---|
| Mary | Sydney NSW, Northern Beaches | 2007 | $790,000 | 6.1% | Highest initial yield in the in-band set, $1,810,000 equity | p18 |
| Stephanie | Brisbane QLD | 2017 | $630,000 | 4.8% | First investment, secured inside five weeks | p72 |
| Gary | Sydney NSW | 2006 | $760,000 | 4.0% | Portfolio addition, harbour outlook | p19 |
| Peter | Regional SA | 2009 | $365,000 | 4.6% | Interstate, "never had to fly down once" | p77 |

Peter's record is the cleanest interstate story in the deck but his quote uses
a word the DESIGN.md banned list rules out, so quoting him verbatim would put
banned copy on the page. Pui Kwan and Janis carry the same story without that
problem.

## Deck overlap, RAISED 21 August 2026, UNRESOLVED

**The investor deck retells all three of the buyer page's Tier 1 records as
investment purchases**, with identical figures and near-identical sentences.

| Client | Live on the buyer page as | In the investor deck as | Figures |
|---|---|---|---|
| Roderick and Denise | Downsizer, "downsizing and refused to trade quality or location" | "adding to their portfolio", let at $4,500 pw, 3.5% initial yield | 2014, $4,870,000, 2026 value $15,000,000. Identical. |
| Rozanne | Upsizer, "spent two years missing the school zone she needed" | "trying to expand her portfolio for two years", let at $1,000 pw, 4.4% initial yield | 2025, $1,140,000, 2026 value $1,250,000. Identical. |
| Shane | First home, "had rented for years and wanted a first home" | "his first investment", let at $1,100 pw, 5.3% initial yield | 2008, $700,000, 2026 value $2,000,000. Identical. |

**Why this matters rather than being a curiosity.** The two framings are
mutually exclusive. An owner-occupied home does not carry a rental yield and a
weekly rent. Shane either bought his first home after years of renting, or he
bought his first investment and let it at 5.3 percent. Both cannot be true of
one purchase, and both are currently published, one on a live page and one in a
client deck.

**What is not known.** Whether the client's decks re-narrate one purchase
history per audience, or whether these are coincidentally identical purchases
by same-named clients. Nothing in the documents settles it, and it is not ours
to guess: DESIGN.md places contested claims at Tier 3, which does not render.

**Consequence, and it reaches a live page.** If the investment framing is the
accurate one, the three Tier 1 cards on the buyer page now in production are
mis-labelled. That page belongs to another branch and was not touched.

**What was done here.** None of the three overlapping records is used on the
investor page. The three selected above appear only in the investor deck, so
they carry no contradiction. But if three records were re-narrated, the other
72 cannot be assumed clean, which is why this section exists rather than a
footnote.

**Needed from the client.** Confirmation of which framing is correct for
Roderick and Denise, Rozanne and Shane, and whether any record in the investor
deck also appears in the homebuyer or commercial decks under a different story.

## Tier 2 verification notes

- **"315+ Google reviews"** could not be verified from public search on
  13 Aug 2026. The claim stays on the page exactly as shipped, with its
  verify-at-publish flag intact. The client targets 500.
- **Award count.** The live site's home-buyers page says "50+ industry
  awards"; the repo's claims register resolved **53** as cleared on
  13 Aug 2026. The design uses 53 per the register. Flag the live-site
  discrepancy to the client rather than silently matching it.
- **"30 to 60 days"** is corroborated in public use: the live home-buyers
  page leads with "Find Your Home in 30 - 60 Days".
- **Success rate.** The live site now publishes "98%" where older material
  said "96%". Two numbers in circulation confirms the register's ruling:
  GATED, does not render.

## Not hunted, per the claims register

Off-market percentages (competitors quote 69 and 70), the purchase-rate
denominator, award badge imagery.
