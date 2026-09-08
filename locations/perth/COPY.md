# Perth location page, copy deck for the variant

**Applied to the Paper artboard "PERTH· 1440" on 8 September 2026**, in the
file "Location Pages - Adelaide, Perth, Melbourne". This is the variant
`../PLAN.md` section 5 describes, not the template: no proof section, no
local team, no office block, and an FAQ that answers "Do you have an office
in Perth?" honestly. It is a design for the client to react to. **The HTML
page is not built and stays blocked**; see `BLOCKED.md` for what unblocks it.

Counts are `used/budget`. Brackets are inputs, and each names what fills it.

## Ranking layer (for the HubSpot build, when unblocked)

| Field | Draft | Notes |
|---|---|---|
| URL | `/location/perth` | new URL, nothing to preserve. The live nav link is empty and the URL returns 404 |
| Title | Buyers' Agents in Perth \| Propertybuyer | 41. WA says agent, so no advocate variant needed |
| Meta description | Independent buyers' agents for Perth since 2001. We act for buyers only, never for sellers. Every shortlisted property inspected in person. Fixed fees, 30 to 60 days to purchase. | 173 |
| H1 | Buyer's agents in Perth | 23/60 |
| Schema | `Service` with `areaServed` Perth, never `LocalBusiness` | PLAN 5 |

## What changed from the Melbourne template, structurally

| Melbourne section | Perth |
|---|---|
| 3. Melbourne purchases, three proof cards, Google rating row | **How we buy in Perth**, three cards carrying cleared Tier 2 facts and one bracketed slot for the named agent. Rating row removed, no Perth listing exists |
| 4. Your Melbourne buyer's agents, seven cards | **Removed.** No WA based person on the client's team page |
| 7. Regions, eight cards | Six cards, the six PLAN 5 proposes |
| 11. Testimonials, five cards | One bracketed card. No Perth client exists in any deck |
| 12. FAQ | "Do you have an office in Perth?" replaces the auction question in the row that shows its answer; the auction question moves to row 6 |
| 13. Closer office block: map, address, phone, hours | **Removed.** Only "We also buy in" remains |

## Zone A

### Hero

| Element | Copy | Count |
|---|---|---|
| H1 | Buyer's agents in Perth | 23/60 |
| Subhead | We work for you. Never for the seller. | 38/42 |
| Primary action | Talk to a Perth buyer's agent | 29/34 |
| Hero photographs | Palmyra house · Fremantle street · Perth CBD skyline | Unsplash |

"Buying in" prefills **Perth** in the closing form.

### How we buy in Perth (19/60)

Intro: "No Perth office yet, and we say so. Here is how a Perth purchase is
run." Side note: "Propertybuyer has no Perth office. Perth briefs are run from
our [nearest office] office, and every shortlisted property is inspected in
person."

| Card | Pill | Heading | Count | Body | Stats |
|---|---|---|---|---|---|
| 1 | Where it is run from | Run from our [nearest office] office | 36/32 with the bracket, 28 once "Adelaide" or "Melbourne" is substituted | [Confirm with the client which office runs Perth briefs.] One named agent takes the brief, the appraisal and the negotiation, and stays with you to settlement. | Since 2001 Buyers only · 5,000+ Properties bought · 50+ Industry awards |
| 2 | How we inspect | Inspected in person, every time | 31/32 | We walk every shortlisted property ourselves, then send you what we saw: the video, the contract, the building report and our appraisal, before you commit to anything. | In person Every inspection · 10,000+ Selling agents briefed · 30 to 60 Days to purchase |
| 3 | Who buys for you | [Named agent] buys in Perth | 27/32 | [Blocked on the client. Name the agent who has bought in Perth, and one Perth purchase with a month, year and price. Without both, locations/PLAN.md holds this page.] | [Name] Your agent · [Month Year] Last Perth purchase · [$ price] Bought |

Every unbracketed number is in the DESIGN.md claims register: since 2001,
5,000+ purchases, 50+ awards, 10,000+ agents, 30 to 60 days. "Inspected in
person" is the claim the segment copy decks already make for interstate and
overseas buyers, and `shared/locations.json` records it as true. The card
photographs are Perth streetscapes and are named "(not a purchase)" in the
layer tree so nobody reads them as proof.

Band: "Most Perth buyers only ever see what is advertised."

## Zone B

**Why use a buyer's agent in Perth?** (33/60)
Answer: A buyer's agent in Perth acts only for you, so the selling agent
never learns your budget, your deadline or your finance position. (23)
Body: Go direct and you hand all three to the person paid to act against you.
Buying in Perth from another state or from overseas adds a second problem:
you cannot be at the inspection, and the selling agent knows it. Photo:
Fremantle port.

**What is the Perth property market doing in 2026?** (48/60)
Bracketed as Melbourne. Table: median house price · median unit price ·
rental vacancy rate. Photo: Perth from Kings Park.

**Which Perth suburbs do you cover?** (33/60)
Answer: Propertybuyer buys across metropolitan Perth from our [nearest
office] office, with every shortlisted property inspected in person. [The
regions below are a draft for the client to confirm.]

| Region | Suburbs |
|---|---|
| Western suburbs | Cottesloe, Claremont, Nedlands |
| Inner north | Mount Lawley, Leederville |
| Inner south | South Perth, Applecross |
| Fremantle and the coast | Fremantle and the coastal suburbs. [Suburbs to confirm] |
| Northern corridor | Joondalup |
| Perth Hills | [Suburbs to confirm] |

All six are PLAN section 5's proposal, verbatim, with nothing added. Photo:
Cottesloe beach.

**What does a buyer's agent cost in Perth?** (40/60)
Answer: Propertybuyer charges a fixed fee agreed before the search starts, and
most clients go from engagement to purchase in 30 to 60 days. (22) The city
is deliberately absent from the sentence: there is no Perth client record to
say "most Perth clients" about.

**What is an off-market property in Perth?** (40/60) Body unchanged. Photo:
Perth suburban street.

**Who do you buy for in Perth?** (28/60)
Answer: Propertybuyer buys for six kinds of buyer in Perth, and the brief, the
search and the fee are set for each one rather than shared. (24) Six blocks,
none referencing a record. Prestige names Cottesloe, Nedlands, Claremont
(from the regions list). Expats: "The process is the same from Singapore,
London or Sydney."

**What Perth clients say** (22/60)
Intro: [No Perth client record exists in any deck the client has supplied.
Supply one or remove this section.] One bracketed card.

**Questions about buying in Perth** (31/60)

1. How much does a buyer's agent cost in Perth?
2. Do buyer's agents in Perth charge a percentage or a fixed fee?
3. How long does it take to buy with a buyer's agent in Perth?
4. **Do you have an office in Perth?** Answer visible: No. Perth purchases
   are run from our [nearest office] office by [named agent], who inspects
   every shortlisted property in person and negotiates on your behalf.
   [Confirm with the client before this page is built.]
5. What areas of Perth do you cover?
6. Do you bid at auction on my behalf?
7. How do you find off market properties in Perth?
8. Can you help me buy in Perth if I live interstate or overseas?
9. How do you stop me overpaying for a Perth property?
10. What is the difference between a buyer's agent and a buyer's advocate?
    Answer visible: Nothing. A buyer's advocate and a buyer's agent are the
    same licensed role acting for the buyer only. Western Australia mostly
    says agent; Victoria says advocate.

**Talk to a Perth buyer's agent** (29/60)
Body: One conversation tells you what your budget really buys in Perth, and
how we would run the search from [nearest office]. Nothing to sign. No office
block. We also buy in: Sydney · Melbourne · Brisbane · Adelaide · Gold Coast ·
Sunshine Coast · Newcastle · Central Coast · Canberra · Hobart.

## Photography

All Unsplash, hotlinked for review; download and self host for the build.

| Slot | Subject | Photographer | Unsplash id |
|---|---|---|---|
| Hero 1 | Palmyra house at sunset | Steve Doig | FmZrwZgiwq4 |
| Hero 2 | Fremantle street | Samuel T | MyEnfLYBZYo |
| Hero 3 | Perth CBD skyline | Steve Doig | guguFi5GTw4 |
| Card 1 | Perth skyline at sunrise | Eddie Mark Blair | ySzmc-Hozsw |
| Card 2 | Bicton from Palmyra | Steve Doig | a5rUGAf1VlM |
| Card 3 | Cottesloe beach | Nathan Hurst | 98ncNcX24AU |
| Argument | Fremantle port | Nathan Hurst | div_c0agF14 |
| Market banner | Perth from Kings Park | Joshua Leong | gl7nkS_h4lo |
| Regions banner | Cottesloe beach clubhouse | Dylan Alcock | C1zrEm4KabM |
| Off market | Perth suburban street | Steve Doig | 3pfLewydrcs |

## Flags

Everything in `BLOCKED.md`, plus: the six regions are a proposal, and the
"[nearest office]" bracket appears five times and should be filled once the
client names the office.
