# Investor landing page, brief

Segment `investor`. **BUILT 21 August 2026.** This file was the input the build
needed; it is now the record of what that build was given and what it had to
assume.

Copy deck: `../../paper/investor-copy.md`, which carries every string, its
character count against budget, and the reasoning behind each choice. Read it
before editing copy on the page.

Template: `../buyer/index.html`, the built `home` page, at `9651611`. Structure,
tokens, component classes and the acceptance rules do not change between
segments. Read `../../DESIGN.md` and `../../HANDOVER.md` first.

The page was derived by script rather than by hand, and every replacement
asserts an exact hit count, so a later template change fails loudly instead of
silently dropping copy.

## Register, from DESIGN.md

Evidence-forward. Lead with independence and no developer commissions.

The voice does not change between segments; the fear you answer first does.

## Minimum contents, every page

- one capture point inside the first screen
- one proof block inside the first two screens
- one segment router
- one closing capture point

A page missing any of these is not finished.

## Supplied, and where it came from

- [x] **H1.** "Buy an investment with no developer commission", 46/60. Leads on
      the commission rather than on due diligence, because `DESIGN.md` asks
      this segment to lead with independence.
- [x] **Hero subhead.** "We never act for a developer or a vendor.", 41/42.
      One character of headroom. Count any edit, do not eyeball it.
- [x] **Three Tier 1 proof points.** All three from "Legacy All Investor.pdf",
      supplied 21 Aug 2026: Mathew (first investment, Sydney, 2007), Wendy
      (portfolio addition, Melbourne, 2024), Pui Kwan and Janis (interstate
      with no inspection, Brisbane, 2023). Every figure copied from the deck,
      arithmetic reconciled, abbreviations exact. Traces in
      `../../paper/proof-register.md`.
- [x] **Body copy** for the mid-page sections.
- [x] **FAQ entries.** Five, including the commission question, which sits
      second because it is the one this segment actually arrives with.

## Still open, in priority order

1. **The deck disagrees with itself on slot 1.** Page 20's copy calls the
   property an apartment twice; the photographs on that page are of a
   freestanding cottage. The card names no dwelling type as a result, and every
   figure is unchanged. Worth a client answer, because the deck is the thing
   that is inconsistent.
2. **Budget bands are ASSUMED, not confirmed.** Five bands derived from the
   $650k to $2m range in `DESIGN.md`, not supplied. Changing the option values
   later affects HubSpot routing the same way the segment strings do. Recorded
   under `openDecisions.investorBudgetBands`.
3. **The deck retells the buyer page's three records as investments.** Roderick
   and Denise, Rozanne and Shane all appear in the investor deck with identical
   figures and a portfolio framing, against the downsizer, upsizer and
   first-home framing live on the buyer page. The framings are mutually
   exclusive. None of them is used here, but it questions how the decks are
   assembled, and it may mean the live buyer page is mis-labelled. Recorded
   under `openDecisions.investorDeckOverlap`.
4. ~~**The award count contradicts itself**~~. Settled 21 August 2026: the
   client chose 50+, so the callout and the bullet both read 50+ on all three
   pages, and `DESIGN.md` section Claims was corrected to match. See
   `awardsCountOnStatRow` in `shared/segments.json`.
5. **No purpose field.** The commercial page carries one because that page has
   two psychographics pulling opposite ways. `DESIGN.md` describes this segment
   as a single spread rather than a fork, so nothing was invented. If a fork is
   wanted, the honest split is by portfolio stage.

## Photographs, in place

All three story photographs are the hero shots from the deck pages the records
came from, the same source as the buyer page's three, at the same native
685x419. `npm run deck-images` regenerates them from `.deck-src/`, which holds
the client decks and is gitignored. Deleting the three files and re-running
reproduces them byte for byte.

The first attempt concluded the images were unreachable, because no page
rasteriser is available here. That was wrong: the photographs are embedded
image streams, and in these decks they are already JPEG, so there is nothing
to render. `../../tools/extract-deck-images.mjs` walks the page tree and writes
the bytes out.

## Inherited from home, do not re-decide

- `data-segment="investor"` on both capture points.
- Field names `segment`, `budget`, `suburb`, matching what the buyer and
  commercial pages actually post, not the `budget_band` and `location` the
  `DESIGN.md` Backend Handover table names. That table and the built pages
  disagree, and this page followed the pages so all three post one vocabulary
  into HubSpot. See the field-name finding in `../commercial/REVIEW.md`.
- Three inputs in the first screen. Name, email and phone come after, never
  before.
- Chip row is native radio inputs, selected state is border and weight with no
  fill.
- Asset paths are two levels up. Three stylesheets, in order:
  `../../assets/css/tokens.css`, `../../assets/css/base.css`, then
  `../../assets/css/landing.css`. Never `locations.css` as well.

## Settled, affects this page

Segment ranking was resolved on 13 August 2026: do not rank. The router here
gives all six equal weight exactly as the buyer page does, and that is
deliberate rather than a gap. There is no evidence base to rank against yet,
and these pages are what generates it. See `../../shared/segments.json` for
the full reasoning.
