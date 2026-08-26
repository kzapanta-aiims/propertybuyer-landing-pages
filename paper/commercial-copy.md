# Copy deck, commercial landing page

Drafted 20 August 2026, against the buyer page as it stands at `0f9d6d0`
(after PR #6 merged research into diligence and cut the budget bands from
seven to four). Every string carries its character count against its budget:
hero subhead 42 HARD, H1 and H2 60, H3 and card headings 32, buttons 34 full
width and 20 beside another element, micro labels 20. Measured at 390, where
Proyale renders H1 and H2 in capitals.

Strings marked KEPT are verbatim from `New Builds/buyer/index.html` and are
deliberately unchanged, because they are brand-level claims that DESIGN.md
puts on every page rather than segment copy. Strings marked NEW are written
for this segment. Brackets mark values the client must supply.

Banned-language scan run on this deck 20 Aug 2026: no em dashes, no
exclamation marks, no advocate in headings or buttons, no
unlock/elevate/seamless/journey/empower, no "in today's market", no
"solutions" as a noun, no discretion vocabulary, no lowest price, no banned
button labels, no triadic default rhythm. Australian English throughout.

## The fork, and where it happens

DESIGN.md section Segments: "`commercial` carries two psychographics. Owner
occupiers and investors want opposite things, and one blended message serves
neither. Fork the page near the top rather than averaging the copy."

This deck forks in four places rather than splitting the page in two, which
would be a design change and is out of scope for a content pass:

1. **Hero body** names both buyers in the first two sentences.
2. **Story cards** run one owner occupier then two investors, and the pills
   label which is which.
3. **Real access move 3** uses lease expiry, the owner occupier's pressure
   point, as the thing you do not want to reveal.
4. **FAQ 2** is buy versus lease, which only the owner occupier asks.

If the client wants a harder fork, the honest version is two pages, not a
tabbed band. Raise it before building it.

## head

| String | Count / budget |
|---|---|
| Title: Buy commercial with due diligence done first / Propertybuyer, NEW | title tag |
| Meta description: Independent commercial buyers agency, established 2001. We act for buyers only, never for a vendor or a landlord. NEW | meta |

## site-header

| String | Count / budget |
|---|---|
| 25 Years Property Investment Excellence. NEW | 39, display line |
| Speak to an expert. KEPT button | 18/20 beside logo |

Note: DESIGN.md clears "Talk to our commercial team" as a CTA label, but it
is 26 and the header slot is 20. It is used in the closer instead, where the
budget is 34.

## hero

| String | Count / budget |
|---|---|
| H1: Buy commercial with due diligence done first. NEW, "commercial" in highlight, three lines at 390 | 44/60 |
| Subhead: We act for businesses, SMSF buyers, private investors and larger organisations. CLIENT EDIT 26 Aug 2026 | 78/42, OVER a hard budget, see the note below |
| Body: We source and secure premium commercial assets at a variety of price points, tailored to your specific needs. CLIENT EDIT 26 Aug 2026, replaces the fork | 109, body, no cap |
| Award pill: Best Buyers Agency of the Year 2025. KEPT | pill |
| Capture title: Tell us about your requirement. NEW | 30 |
| Legend: What are you buying. KEPT micro | 19/20 |
| Chips: all six, unchanged, `commercial` carries `checked`. KEPT | see segments.json |
| Budget label: Your budget. KEPT micro | 11/20 |
| Budget options. NEW, see below. ASSUMED, NOT CONFIRMED | select options |
| Location label: Suburb or postcode. KEPT micro | 18/20 |
| Placeholder: Where do you want to buy? KEPT | placeholder |
| Next: Contact details. KEPT | 21 |
| Send my details. KEPT | 15 |

### The client copy edits of 26 August 2026

Seven strings were replaced at the client's direction. Two things about them
are worth recording, because neither is visible in the strings themselves.

**The subhead is 78 against a 42 hard budget.** That budget existed because
the slot is a single display line at `--type-h3-card` with no max width, so
40 characters was one line at 390. The supplied string wraps to three lines on
mobile and two on desktop, which pushes the hero body and the award pill down.
It ships as supplied, because it is client copy and the ask was explicit, and
the wrap was checked at all four widths rather than assumed. If the client
wants one line back, the shortest faithful cut is "We act for businesses, SMSF
buyers and investors" at 48, still over.

**The independence claim left the page in three places at once.** The old
subhead ("We never act for a vendor or a landlord"), the old hero body ("we
take nothing from the seller") and the whole first truth card ("No incentives
to sell to you, ever", the no-commission proof) all carried it, and all three
are now gone. DESIGN.md builds the commercial register on due diligence and
buy-versus-lease certainty, so the direction is not off-brief, but the page no
longer states anywhere near the top that no vendor pays us. What still carries
it, all of it below the fold: FAQ 4, "Does the vendor pay you anything?", which
keeps the deleted card's body verbatim; the meta description; truth card 3, on
value rather than on who pays; and the closer note, "Buyers only, since 2001".
Recorded as
`openDecisions.commercialIndependenceClaim`.

### Budget bands, ASSUMED, NOT CONFIRMED

The buyer page ships four residential bands. DESIGN.md section Segments puts
the commercial range at $600k to $20m, so these five are **derived from that
stated range, not supplied by the client**. `New Builds/commercial/BRIEF.md`
asks for them to be confirmed before build, and they were not, so they ship
as the visible assumption rather than blocking the page.

| Option label | value attribute |
|---|---|
| Under $1m | `under-1m` |
| $1m to $3m | `1m-3m` |
| $3m to $6m | `3m-6m` |
| $6m to $20m | `6m-20m` |
| $20m and above | `20m-plus` |

**Changing these values after launch breaks HubSpot routing the same way the
segment strings do.** Confirm before the page takes paid traffic. All three
proof records on this page fall in `3m-6m`, which is weak evidence that the
middle of this scale is where the volume is, and no evidence at all about
the ends.

## testimonials, the three Tier 1 slots

All three come from `paper/proof-register.md` under Reserves, sourced from
"Latest Recent Purchases - Commercial.pdf". Every figure is copied from that
deck rather than derived. Abbreviated figures are exact, never rounded:
where a price does not abbreviate exactly it is written in full in the body
and kept out of the stat row.

| String | Count / budget |
|---|---|
| H2: published client stories. KEPT | 24/60 |
| Sub: Genuine words from our valued clients. KEPT | muted |
| Rating rows Sydney 4.9, Melbourne 5.0, Brisbane 4.9. KEPT | Tier 2 |

### Slot 1, owner occupier, Melbourne office

- **Source:** Commercial deck p.7, via proof register Reserves.
- **Record:** Office, 952 sqm, owner occupier. May 2025, $3,908,748 against a
  $4,172,548 appraisal. Savings $263,800, $4,106 per sqm.
- **Image:** `story-melbourne-office.webp`, already in the repo.
- **Pill:** `Owner occupier`. **H3:** `Office in Melbourne` (19/32)
- **Body:** Geoff wanted premises of his own rather than another lease. We
  appraised a 952 sqm office at $4,172,548 and bought it for $3,908,748.
- **Stats:** `$263,800` Under appraisal. `952 sqm` Floor area. Two, not three:
  the purchase date came off all three cards on 26 Aug 2026 at the client's
  request.
- **Why the price is not a stat:** $3,908,748 does not abbreviate exactly,
  and the register forbids rounding a figure on a card. The saving does
  abbreviate exactly, is the stronger number, and is the one the segment
  register asks the page to lead with.

### Slot 2, investment, Brisbane warehouse

- **Source:** Commercial deck p.9, via proof register Reserves.
- **Record:** Warehouse, 650 sqm, investment. Dec 2024, $5,550,000. Rent
  $335,310, yield 6.0 percent, 3 year lease.
- **Image:** `story-brisbane-warehouse.webp`, already in the repo.
- **Pill:** `Investment`. **H3:** `Warehouse in Brisbane` (21/32)
- **Body:** Jamie and Tamara wanted an industrial asset with a tenant already
  in place. We bought a 650 sqm warehouse returning $335,310 a year on a
  three year lease.
- **Stats:** `$5.55M` Price. `6.0%` Yield. Date removed 26 Aug 2026.
- **Note:** the deck does not say whether the yield is net or gross. It is
  published as "yield", which is what the deck says, and nothing is added.

### Slot 3, investment bought sight unseen, Sydney office

- **Source:** Commercial deck p.14, via proof register Reserves.
- **Record:** Office, 431 sqm, investment, bought from overseas. Apr 2024,
  $4,475,000. Rent $220,000, yield 4.9 percent, 5+5 year lease.
- **Image:** `story-sydney-office.webp`, already in the repo.
- **Pill:** `Investment`. **H3:** `Office in Sydney` (16/32)
- **Body:** Stella was buying from overseas and never saw the building. We
  inspected it for her and secured a 431 sqm office let on a five plus five
  year lease.
- **Stats:** `$4.475M` Price. `4.9%` Yield. Date removed 26 Aug 2026.
- **Why this one is third:** it carries the remote purchase, which is the
  content DESIGN.md retired the `expat` segment into. It belongs on this page
  and on `investor`, not in a segment of its own.

## truth band

| String | Count / budget |
|---|---|
| Pill: The Truth. KEPT | 9/20 |
| H2: The best commercial assets are never on the market. CLIENT EDIT 26 Aug 2026, two-tone split after "assets" | 50/60 |
| Lede: You need to access properties not available on the open market in order to achieve a superior price or yield outcome. CLIENT EDIT 26 Aug 2026 | 117, lede |
| CTA: Book a free consultation. KEPT | 25/34 |
| Note: No obligation. No upfront fees. Just a conversation. KEPT | note |

### Four cards

| Heading | Count | Body |
|---|---|---|
| Unwavering due diligence. CLIENT EDIT 26 Aug 2026, was "No incentives to sell to you, ever" | 24/60 | CLIENT EDIT: Risk is not measured just in what you see on paper. We uncover and assess the real risks and opportunities behind an asset. |
| We inspect the asset ourselves. NEW, was "Local Buyers Agent" | 30/60 | NEW: Your agent works the market you are buying in, and inspects the building, the tenancy and the condition in person before you see it. |
| We tell you what it is worth. KEPT | 28/60 | NEW: You get an independent read on value against recent comparable sales and current rents. Then we hold the line in the negotiation. |
| Access opportunities others will not see. CLIENT EDIT 26 Aug 2026, was "Access before it is listed" | 40/60 | KEPT: Agents bring us off-market stock before it reaches the portals, because we buy often enough to be worth calling. |

## stats band, Tier 2

Unchanged from the buyer page except one correction.

| String | Note |
|---|---|
| 5,000+ properties purchased. KEPT | cleared claim |
| 50+ industry awards. KEPT | cleared claim, reduced from 53 on 21 Aug 2026 |
| 4.9 star google reviews. KEPT | verify on the day it ships |
| H2: Reviewed by buyers only, since 2001. KEPT | 38/60 |
| Over 5,000 properties purchased. KEPT | |
| **50+ industry awards. CORRECTED** | Settled 21 Aug 2026. The callout and the bullet disagreed, 53 against 50+; the client chose 50+, so both read 50+ on all three pages and DESIGN.md section Claims was corrected to match. See awardsCountOnStatRow in shared/segments.json. |
| Over 300 total genuine Google reviews. KEPT | DESIGN.md says 315+ was true at time of writing and moves. Verify on the day. |

## steps band

| String | Count / budget |
|---|---|
| H2: What happens after you call us. KEPT | 30/60 |
| Sub: Most clients go from engagement to purchase in 30 to 60 days. KEPT | cleared claim |
| Order line: Here is the order it happens in: KEPT | |
| Step 1 H3: Define your requirement. NEW | 23/32 |
| Step 1 body: We start with the brief: the use, the budget, the timing, and whether buying beats renewing the lease. NEW | |
| Step 2 H3: Search and due diligence. NEW | 22/32 |
| Step 2 body: We read the market against recent sales and rents, then check the building, the lease and the contract before you commit. NEW | |
| Step 3 H3: Negotiate and secure. KEPT | 18/32 |
| Step 3 body: We handle the agent and the campaign. You are never the one revealing your position across the table. NEW | |
| Step 4 H3: Settlement and ongoing support. KEPT | 29/32 |
| Step 4 body: We stay with you through settlement, from the final inspection to the day you take the keys or the rent starts. NEW | |

"or the rent starts" is the fork inside step 4: an owner occupier takes the
keys, an investor starts collecting.

## services band

The three engagement shapes are the client's own named services. Changing the
names would invent a service, so all three headings are KEPT and only the
bodies move to commercial language.

| Heading | Body |
|---|---|
| Full Search. KEPT | NEW: The complete engagement. We search, shortlist, inspect, appraise and negotiate, from the first brief to settlement. |
| Appraise and Negotiate. KEPT | KEPT: Found the property yourself? We inspect it, tell you what it is worth, and negotiate so you do not overpay. |
| Auction Bidding. KEPT | KEPT: We agree your walk-away number before the day, then do the bidding for you. No nerves to read, no tells to price. |

## real access band

| String | Count / budget |
|---|---|
| Pill: Real Access. KEPT | 11/20 |
| H2: Off-market and auction ready. KEPT | 25/60 |
| Sub 1: Much of what we buy never reaches a listing. KEPT | |
| Sub 2: Here is how we get there first. KEPT | |
| Move 1 H3: We ask before it is listed. KEPT | 26/32 |
| Move 1 body: Your requirement goes out to a database of 10,000+ agents. We hear about a building while the owner is still deciding whether to sell. NEW | |
| Move 2 H3: Fewer buyers in the room. KEPT | 24/32 |
| Move 2 body. KEPT verbatim | |
| Move 3 H3: Your position stays yours. KEPT | 25/32 |
| Move 3 body: Going direct tells the agent your budget and your lease expiry date. We sit between you and the person who is paid to act against you. NEW, this is the fork | |
| Move 4 H3: Auction ready when it counts. KEPT | 28/32 |
| Move 4 body. KEPT verbatim | |
| CTA lines and button. KEPT | |

## prestige band, REMOVED

**This is the one structural deviation from the template, and it is a content
decision rather than a design one.** DESIGN.md section Segments: prestige "is
served by one restrained band low on the `home` page", and section Voice:
"Applied to the prestige band on `home`, not to a page of its own."

The band as it stands reads "A quieter way to buy / For homes valued from $2m
and above". On a commercial page that is simply wrong content, and there is no
commercial equivalent claim in the claims register to put in its place.
Writing one would be inventing a service.

The prestige chip stays in the router, as segments.json requires. Only the
band is gone.

**Overrule this if you would rather keep the band and the rhythm it gives the
page.** If so it needs a commercial claim from the client, not from us.

## faq

| Question | Answer |
|---|---|
| What does a commercial buyer's agent do? NEW | NEW: We find the property, inspect it, tell you what it is worth, and negotiate or bid for you. You keep the decision. We do the work and carry the risk of getting it wrong. |
| Should I buy or keep leasing? NEW | NEW: That depends on what the lease costs you, what the premises would cost to own, and how long you plan to stay. We put the two side by side with real numbers before you commit to either. |
| How long does it usually take? KEPT | NEW: Most clients go from engagement to purchase in 30 to 60 days. A tight requirement in a liquid market can be faster; a rare one takes as long as it takes to find the right building. |
| Does the vendor pay you anything? NEW, was "seller" | NEW: No. We take no commission from vendors, developers or agents. You are the only person paying us, so you are the only person we answer to. |
| Can you buy in a state I am not in? NEW | NEW: Yes. We have offices in Sydney, Melbourne, Brisbane and Adelaide, and we inspect in person so you do not have to fly. |

H2: Questions we get from commercial buyers. NEW, 42/60.

**FAQ 2 is the buy versus lease question**, which is what the segment register
asks this page to lead with and the only question here an investor never asks.
The answer describes a comparison, not an outcome, and promises no number. It
is not financial advice and must not become any.

**FAQ 5 rests on the footer blurb**, which names Sydney, Melbourne, Brisbane
and Adelaide. It claims no capability beyond attending an inspection.

## closer

| String | Count / budget |
|---|---|
| H2: Your side of the table is waiting. KEPT | 33/60 |
| Body. KEPT verbatim | |
| Button: Talk to our commercial team. NEW, on the DESIGN.md cleared list | 26/34 full width |
| Note: Buyers only, since 2001. Your details stay private. KEPT | |

## footer

KEPT verbatim, including the three bracketed legal slots.

## Capitals width watchlist

Headings within about 5 of budget, re-check with Proyale loaded at 390:

- H1 at 44/60. Three lines at 390, same as the buyer page. Verify no orphan.
- Hero subhead at 40/42 HARD. Two under the cap, tighter than it looks once
  the checker measures it. This is the string most likely to fail.
- Step 4 H3 at 29/32, KEPT from the buyer page where it already passes.

## What is still missing from this page

- Budget bands are derived, not confirmed. See above.
- No commercial claim exists to replace the prestige band, so it is removed
  rather than rewritten.
- The three proof records are real and dated but none is in Perth, Adelaide or
  Canberra, and all three sit in one price band.
- Whether the yields in the deck are net or gross.
