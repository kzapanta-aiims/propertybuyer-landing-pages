# Commercial landing page, brief

Segment `commercial`. **BUILT 20 August 2026.** This file was the input the
build needed; it is now the record of what that build was given and what it
had to assume.

Copy deck: `../../paper/commercial-copy.md`, which carries every string, its
character count against budget, and the reasoning behind each choice. Read it
before editing copy on the page.

Template: `../buyer/index.html`, the built `home` page, at `0f9d6d0`.
Structure, tokens, component classes and the acceptance rules do not change
between segments. Read `../../DESIGN.md` and `../../HANDOVER.md` first.

## Register, from DESIGN.md

Competent, transactional. Lead with due diligence and buy-versus-lease
certainty.

The voice does not change between segments; the fear you answer first does.

## Minimum contents, every page

- [x] one capture point inside the first screen
- [x] one proof block inside the first two screens
- [x] one segment router
- [x] one closing capture point

## Supplied, and where it came from

- [x] **H1.** "Buy commercial with due diligence done first", 44/60.
- [x] **Hero subhead.** "We never act for a vendor or a landlord.", 40/42.
- [x] **Three Tier 1 proof points.** All three from the Reserves table in
      `../../paper/proof-register.md`, sourced from "Latest Recent Purchases -
      Commercial.pdf": Geoff (Melbourne office, owner occupier, May 2025),
      Jamie and Tamara (Brisbane warehouse, Dec 2024), Stella (Sydney office,
      bought from overseas, Apr 2024). Every figure copied from that deck.
      Their images were already in `assets/img/`.
- [x] **Body copy** for the mid-page sections.
- [x] **FAQ entries.** Five, including buy versus lease.

## Still open, in priority order

1. **Budget bands are ASSUMED, not confirmed.** The five bands shipped are
   derived from the $600k to $20m commercial range in `DESIGN.md`, not
   supplied by the client. Confirm before the page takes paid traffic;
   changing the option values later affects HubSpot routing the same way the
   segment strings do. Recorded in `shared/segments.json` under
   `openDecisions.commercialBudgetBands`.
2. **The prestige band was removed, and that is open to overrule.** DESIGN.md
   puts prestige on the home page only, and the band's copy is residential.
   No commercial claim exists to replace it. The prestige chip stays in the
   router. Recorded under `openDecisions.prestigeBandOnCommercial`.
3. **Are the deck's yields net or gross?** The deck says "yield" and the cards
   say "yield". Nothing was added, but it is worth knowing.
4. **Proof spread.** All three records sit in the $3m to $6m band, and none is
   in Perth, Adelaide or Canberra. If the client would rather show geographic
   spread, the deck has more records.
5. **The two psychographics are forked, not split.** Owner occupier and
   investor are addressed separately in four places rather than on two pages.
   DESIGN.md calls this the page most likely to underperform. If a harder
   fork is wanted, the honest version is two pages, not a tabbed band.

## Inherited from home, do not re-decide

- `data-segment="commercial"` on both capture points. Done.
- Field names `segment`, `budget`, `suburb`, and now `purpose`. Name, email and
  phone come after, never before. **The three input maximum no longer holds on
  this page**, see the purpose field below.
- Chip row is native radio inputs, all six segments, selected state is border
  and weight with no fill. `commercial` carries `checked`.
- Asset paths are two levels up: `../../assets/css/styles.css`.
- The three POC demo items (`data-poc`, `data-experts-count`, `.poc-toggle`)
  are inherited from the template and fail the shippability check on every
  page. Delete before launch, on every page at once.

## Photography, replaced 21 August 2026

The build inherited the buyer page's residential photography. Eleven slots now
carry commercial artwork from the `COMMERCIAL -- v1` artboard in the Paper
file: the four truth cards, steps 2 to 4, the middle service card and all
three auction photos. Four alt strings said "home" on a page about offices and
warehouses and were rewritten.

**The files are prefixed `commercial-`, and that matters.** Both pages share
one `assets/img`, and `truth-card-1.webp`, `auction-1.webp` and the rest are
referenced by the buyer page too. Writing over them changes that page as a
side effect, which is exactly what the first attempt did before it was caught.

Reproduce with `npm run import-images`. The crop geometry, the Paper node ids
and the content addressed asset URLs are recorded per slot in
`../../tools/import-paper-images.mjs`, so the crops are re-derived rather than
re-eyeballed. Recorded under `openDecisions.commercialPhotography` in
`../../shared/segments.json`, with the five artwork concerns worth a client
look before this takes paid traffic.

Three slots on the artboard are still placeholder frames rather than artwork,
so step 1 and the outer two service cards keep the buyer photography. Paper
names what they are waiting for.

## The purpose field, added 21 August 2026

The client asked whether the segment router was redundant here, since it offers
home, prestige and expat to a commercial visitor. It is not: it is the HubSpot
routing contract, `tools/check.mjs` fails a page missing any of the six chips,
and `openDecisions.segmentRanking` records that the router measures demand
before it converts it. It also catches misrouted paid traffic.

The question did expose a real gap though. `DESIGN.md` says this page carries
two psychographics and should fork them near the top, and nothing captured
which one a visitor was. So step one gained a required two option pair,
`purpose`, values `occupier` and `investment`, under the legend "What is it
for". Same chip component as the router, so no new CSS.

**Two things this needs from someone else.** `purpose` is a new name on the
integration surface, so HubSpot needs a property for it with exactly those two
values, or the answer arrives nowhere. And step one now carries four inputs
where `DESIGN.md` says three; that is deliberate and recorded, not an
oversight.

**Half of this is still undone.** The form now asks which buyer someone is,
and the copy still answers them the same way. The hero names both and then
says "We run the same due diligence for both". Forking the copy is the other
half.

## Fluted glass, removed 21 August 2026

The truth cards and the auction photos each carried a fluted-glass strip
across the foot of the photograph, mounted live over an exported still. The
buyer page dropped them in PR #8 and took the shared CSS, the shader wiring
and all fourteen glass assets with it. The commercial page dropped its own
seven strips in the same round, at the client's request. Nothing references
the glass on either page now.

## One correction carried back to the buyer page

**Settled 21 August 2026, no longer outstanding.** The stat callout read 53
while the bullet beside it read 50+. The client chose 50+, so the callout now
reads 50+ on all three pages and `DESIGN.md` section Claims has been corrected
to match. See `awardsCountOnStatRow` in `shared/segments.json`.

The buyer page bullet still reads "Over 50+ industry awards", which doubles the
qualifier and is the only one of the three phrased that way. That is a wording
nit rather than a claim conflict.
