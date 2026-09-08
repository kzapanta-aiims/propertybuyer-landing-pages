# Perth is blocked, and here is exactly what is missing

Written 8 September 2026, per `../PLAN.md` phase 6: before building Perth,
check whether the client has supplied a named person who buys in Perth and at
least one Perth purchase. Neither is recorded, so the HTML page is not built.

## What was checked

- **All five client decks, page by page**, now committed in `paper/decks/`:
  Legacy Homebuyer (80 pages), Legacy Investor (80), July 2026 Homebuyers
  (88), July 2026 Investors (89), Commercial (14). Cities covered: Sydney,
  Melbourne, Brisbane, Adelaide, Gold Coast, regional NSW, VIC, QLD and SA,
  and one Hobart record. **Zero Perth or Western Australian records.**
- **The client's team page**, `propertybuyer.com.au/about/our-team`. Every
  person is placed in NSW, VIC, QLD or SA, or "Australia-wide". Nobody is
  placed in Perth or WA.
- **The client's office list**, recorded in `paper/commercial-copy.md` and
  `paper/investor-copy.md` and repeated in the site footer: Sydney, Bondi
  Junction, Forestville, Erina, Newcastle, Prahran, Brisbane, Surfers
  Paradise, Maroochydore, Adelaide, Goodwood Island, Redlands. No Perth.
- **`/location/perth`** returns 404. There is no live page and nothing to
  preserve.

## What unblocks it

1. **A named agent who has bought in Perth**, with their profile URL on the
   client site. Fills the third "How we buy in Perth" card, the FAQ answer
   and the `[named agent]` bracket.
2. **One Perth purchase** with a month, year, price and client first name,
   in the same shape as the decks. Fills the card's stats.
3. **Which office runs Perth briefs.** Fills `[nearest office]`, which
   appears five times on the design.

With all three, phase 6 builds the variant from the Melbourne template as
described in `COPY.md`. Without them, PLAN section 5's standing advice holds:
two good pages beat three where one cannot support its own structure.

## What exists anyway

The Paper artboard "PERTH· 1440" was updated on 8 September 2026 to the
variant, with the gaps shown as brackets, so the client can see the honest
version of the page and what it is waiting on. `COPY.md` records it.
