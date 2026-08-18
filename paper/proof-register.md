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
