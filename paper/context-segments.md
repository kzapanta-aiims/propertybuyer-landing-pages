# Context page extraction: the four segment landing pages

Source: Paper file `01KZW0Y27PGW3NV0QJRPXAJ9DZ`, page `3-0`, artboard
"CONTEXT · Four segment landing pages". Read out via the Paper MCP on
13 August 2026, the same run that transferred the theme tokens. Text below is
verbatim from the artboard wherever it is quoted or set in a table; anything
else is a faithful compression. The artboard is the argument the four designs
have to satisfy, in its own words: *"Read it as the argument the design has to
satisfy."*

The artboard has four parts and fifteen numbered sections. Sections 1–3 are
the why, 4–9 the shared rules, 10–12 the four pages themselves, 13–15 the
judgement calls. A gap analysis against the current repo state follows at the
end; the extraction itself stays faithful to the page.

---

## Part 1 · Why four pages

### 1. What the current numbers point at

> Google Ads is producing roughly 46 leads per period, closing at about
> 2 percent, against an average deal of about $20,000. Enquiry to engagement
> across the business as a whole runs at roughly 7.6 percent. Same team, same
> script, same service.

> A paid channel closing at a third of the rate of the rest of the business is
> a targeting and qualification gap, not a sales gap.

What that rules out, verbatim: *"Volume is not the lever here. The stated lead
target and the stated revenue goal sit roughly an order of magnitude apart,
and no realistic increase in traffic reconciles them. Conversion rate and lead
quality do."*

### 2. The one job every page has

> **Make each lead arrive labelled: segment, budget band, location.**

HubSpot already holds nurture flows for each segment, but nothing on the site
ever asks who the person is, so the flows have nothing to personalise with.
Every page is built to answer that at the point of enquiry. *"A smaller number
of routed, labelled leads is a better outcome than a larger number of
anonymous ones. It is also the only way to learn which segment actually pays,
which is the question sitting underneath all of this."*

### 3. One dependency sits in front of the design

Google Ads runs Performance Max. Two settings decide whether the pages are
ever judged on their own merits:

- **Final URL Expansion** — on by default; lets Google replace the chosen
  landing page with any indexable page on the domain. *"A page can be built,
  paid for, and then quietly bypassed."* Must be switched off for the lead
  generation campaigns, each campaign pointed at its own segment page as the
  Final URL.
- **Offline conversion import** — without it, Performance Max optimises toward
  the cheapest form fill. HubSpot and CallRail are in place, so the qualified
  event (a marked SQL or a booked consultation) can be fed back, and *"the
  account then learns what a good lead looks like rather than what a cheap one
  looks like."*

Neither is a design task; both change what the design can be measured against.
**To be confirmed with Kynan before the pages go live.**

---

## Part 2 · What all four pages share

### 4. One page, one job

The current "who we help" pages are website pages built to let someone browse;
a paid landing page is built to let someone decide. Each page carries a single
goal, a logo-only header, and a headline that echoes the ad and the search
term. Message match is the mechanism, and it is also a landing page experience
factor inside Quality Score, *"so it pays twice."*

Off the page: global navigation, the award grid, competing calls to action,
and any section written for a different segment. Anchor links replace
navigation where a page runs long.

### 5. What the fold has to carry

NN/g eyetracking (130,000+ fixations): ~57% of viewing time above the fold,
~74% inside the first two screens. People scroll when the top of the page has
given them a reason to.

The fold carries three things and nothing else (these three rows are
highlighted on the artboard itself):

| | |
|---|---|
| **The promise** | "A headline matched to the ad and to the segment. Not the brand line." |
| **One proof point** | "A single dominant asset, not a wall. Whichever proof that segment actually responds to." |
| **The action** | "Tracked phone number and the first step of the form, side by side." |

*"The second screen then carries the evidence that the promise is credible.
That split is the whole structure of every page here."*

### 6. Capture that qualifies

Short multi-step form, not one long one. *"The first step is the lowest
commitment and the highest signal."*

| Step | Field | Note (verbatim) |
|---|---|---|
| 1 | Segment | "Tap chips, six values. A visible chip row also tells a commercial buyer that commercial is a category here, before they commit anything." |
| 2 | Budget band | "Bands rather than a typed number. Placed after the first commitment, because budget is one of the highest friction fields on any form." |
| 3 | Location | "Suburb or region selector." |
| 4 | Contact | "Name, phone, email last, once the person is invested." |

*"This trades some volume for quality deliberately."* Field data shows budget,
phone and timeframe suppress completion, and that a qualifying step raises the
share of enquiries sales can act on. Given the goal is qualified leads rather
than more leads, the trade runs the right way round.

### 7. Phone runs in parallel with the form

2024 TransUnion survey (1,556 adults): 55% prefer a call for high-value
decisions. Propertybuyer testimonials repeatedly describe the first call with
a named agent as the moment trust formed. Every page carries a tracked number
as a **co-primary action** beside the form. *"A booked call is treated as the
highest value conversion on the page"* — CallRail records it.

### 8. Persuasion without urgency

Sales cycle is one to twelve months; urgency devices are off the table. The
levers that work over that horizon: named case studies with outcomes, a
transparent process and fee, the buyers-only position stated plainly, and a
next step small enough to take today.

Two cautions on the trust story:

- **Independence** — *"Real, and the category trust fault line, but now
  claimed by most reputable buyers agents. It earns trust. On its own it does
  not differentiate, so it never carries a page alone."*
- **Off market access** — *"Framed as access, not as a bargain. REBAA itself
  warns off market stock often carries a premium, so a discount framing is a
  credibility risk we do not need to take."*

### 9. Mobile discovers, desktop decides

Mobile carries the promise, the proof and tap-to-call plus a very short first
step; desktop carries the longer capture and the segment tools. *"A heavy
multi field form does not get forced onto a phone."* Design investment sits at
1440; mobile is a hard non-breaking check at 390; copy is written to the
mobile character budget first, then allowed to expand.

Honest caveat, verbatim: *"the current device conversion data is contaminated
by known mobile defects on the live site, so the split cannot be read reliably
yet. This is the working assumption, not a settled fact."*

---

## Part 3 · The four pages

### 10. What actually differs between them

> The four pages share a skeleton. What changes between them is the proof
> type, the depth of capture, the primary action and the tool. Cosmetic
> differentiation would not be worth building four pages for. Psychographic
> differentiation is.

### The segment cards, verbatim

#### PAGE 01 · Home buyers

Upgraders, downsizers, relocators, time poor professionals, some first home
buyers. Roughly $800k to $6m depending on city and stage.

| | |
|---|---|
| **Fear** | Losing again at auction, overpaying, being outmanoeuvred by a professional selling agent. Australians move house about once every thirteen years, so they negotiate as amateurs against professionals. |
| **Lead with** | Handover of risk. The relief of not doing this alone is the thing actually being bought. |
| **Proof** | Named local testimonials with suburb and outcome, video where it exists, off market access stories. Data authority is largely wasted on this segment. |
| **Action** | Booked call, with a short brief form as the alternative. Phone parity matters most here. |
| **Tool** | Kept light. An auction strategy explainer rather than a calculator. The emotional close does more work than a number. |

#### PAGE 02 · Residential investors

First time investors through to portfolio builders and SMSF buyers. Heavily
interstate. Influenced by accountants and brokers.

| | |
|---|---|
| **Fear** | The wrong asset in the wrong location, holding costs, policy change, and being sold stock by someone the seller pays. |
| **Lead with** | Independence and cycle tested judgement, stated together and stated early. |
| **Proof** | Named case studies carrying purchase price, yield and result. Awards support rather than lead. Founder personality does less here than it does for home buyers. |
| **Action** | Booked strategy call. This segment will trade more information for a substantive consult, so the form can run longer. |
| **Tool** | Yield or cash flow estimator. It engages the analytical mindset and captures budget band while it does so. |

#### PAGE 03 · Commercial buyers

Two audiences on one page. Owner occupiers facing lease expiry or a board
directive, and investors chasing yield and diversification. Roughly $600k to
$20m.

| | |
|---|---|
| **Fear** | Owner occupiers fear getting a once in a decade premises decision wrong. Investors fear being beaten to the deal and mispricing the yield. |
| **Lead with** | A fork, not a blend. A two option selector near the top routes each audience to its own argument, and captures the qualification signal at first contact. |
| **Proof** | Buy versus lease economics, LVR and tax outcomes for owner occupiers. Secured volume, yields and tenant quality for investors. |
| **Action** | Booked call with a commercial specialist. Owner occupiers acting on a board directive are strong phone candidates. |
| **Tool** | Buy versus lease calculator for owner occupiers. Yield or cap rate tool for investors. |

#### PAGE 04 · Developers

Duplex and dual occupancy through to institutional. Roughly $2.5m upward. The
smallest and least documented of the four.

| | |
|---|---|
| **Fear** | Paying too much for the land, and a site that does not stack up once feasibility is run. |
| **Lead with** | Numbers and deal flow. This is the shortest copy of the four pages by some distance. |
| **Proof** | Sites secured, with addresses, prices and site types. Off market and joint venture access. Feasibility discipline. Speed. |
| **Action** | Direct call to the development division, or a short brief. This segment is transactional and phone led. |
| **Tool** | Feasibility or residual land value calculator. It speaks their native language and qualifies budget and site type in one move. |

### 11. The positioning problem on the investor page

> The data led competitors have a sharper quantified claim than Propertybuyer
> can match, and trying to match it would be a losing race. InvestorKit
> publishes a research spend, a model accuracy figure and a portfolio
> performance number. There is no point competing on that ground.

The durable difference, verbatim: *"25 years across multiple cycles, a
national footprint with agents who live in their markets, breadth across home,
investment, commercial and development, and the most awarded independent track
record in the category. That is what the investor page leads with, paired with
independence rather than instead of it."*

### 12. Where prestige sits, and why it is not a fifth page

Prestige does not get a page of its own yet: *"prestigepropertybuyer.com.au is
a non functional shell and there is nowhere to route a click to. Building a
paid page that hands a $5m buyer to a broken destination would be worse than
not building it."*

Interim: **a single restrained prestige band sits low on the home buyer page,
after the main proof and before the final capture, linking out to the future
prestige destination.**

- **Why low, not high** — "High enough that a prestige buyer can self
  identify. Low enough that it does not push past the $800k to $1.5m buyer the
  page is actually written for."
- **Language boundary** — "Discretion, anonymity and confidentiality stay off
  this page entirely. That vocabulary belongs to prestige and nowhere else.
  Privacy framed as a negotiating shield is different, and is allowed
  everywhere."

---

## Part 4 · Judgement calls and limits

### 13. The commercial page is the weakest part of the split

> Buyers, investors and developers each justify a page of their own.
> Commercial is being asked to hold two audiences who want opposite things,
> and it is the page most likely to underperform. The fork mitigates that. It
> does not remove it.

- **If volume supports it** — two ad groups pointing at two pages is the
  cleaner answer, because message match is the single biggest paid search
  lever.
- **If volume stays thin** — commercial may not warrant a paid page at this
  stage, and would be better served by a booked call route until the demand is
  there.

*"This is named now rather than defended later. It is a real risk in the plan
and worth deciding on evidence rather than symmetry."*

### 14. What the evidence behind these decisions actually supports

- **Well evidenced** — attention and scrolling behaviour (NN/g eyetracking);
  the pattern that a qualifying step can lift lead quality without collapsing
  conversion (B2B field data).
- **Directional only** — multi-step form multipliers, and the claim that
  removing navigation doubles conversion. Vendor case studies, no stated
  sample size, duration or stopping rule. *"Followed as sensible defaults, not
  promised as outcomes."*
- **Claims, not facts** — off market percentages, quoted by Propertybuyer and
  competitors alike. Marketing figures, not audited data. *"Reported as claims
  or left off the page."*

### 15. Scope

> Four new landing pages, plus the section level conversion work already
> underway on the existing site. Not a website redesign, not a brand refresh,
> not a rebuild of the HubSpot build.

> The homepage H1 stays untouched. It holds position one for the core
> commercial terms, and the SEO risk outweighs any conversion gain available
> from changing it.

---

## Gap analysis against the repo, 13 August 2026

What the context page mandates that the built buyer page and the three briefs
do not yet carry. The extraction above is the source; this section is the
delta.

### The built buyer page (`New Builds/buyer/index.html`)

- **No prestige band.** Section 12 places a restrained prestige band low on
  this page — after the main proof, before the final capture, linking out to
  the future prestige destination, with the strict language boundary. The
  built page has prestige only as a chip value and a router item pointing back
  at `#capture`; there is no band and no outbound link. (The outbound
  destination is itself blocked: prestigepropertybuyer.com.au is a
  non-functional shell.)
- **No tool.** The card names an auction strategy explainer, deliberately
  light. Nothing on the page answers to it.
- **Primary action framing.** The card says booked call first, short brief
  form as the alternative, and *"phone parity matters most here."* Worth
  auditing the built hero against that ordering.

### All three briefs (`New Builds/investor|commercial|developer/BRIEF.md`)

- **No tool named.** Section 10 makes the tool one of the four axes that
  actually differ between pages, and every card names one (yield/cash-flow
  estimator; buy-vs-lease calculator plus yield/cap-rate tool; feasibility or
  residual land value calculator). No brief mentions a tool at all.
- **No fear/lead-with/proof/action card content.** Each brief carries a
  one-line register; the full psychographic card above is what the body copy
  and proof slots have to be written from.
- **Campaign dependency not referenced.** Final URL Expansion off + offline
  conversion import (section 3) precede judging any of these pages, and are
  waiting on confirmation with Kynan.

### Investor brief specifically

- Register says *"lead with independence and no developer commissions."* The
  context page is more precise, twice over: independence **paired with cycle
  tested judgement**, stated together and stated early (card), and section 8's
  caution that independence *"on its own does not differentiate, so it never
  carries a page alone."* Section 11 adds the do-not-do: no quantified
  data-authority race against InvestorKit; lead with 25 years, national
  footprint, breadth, most awarded independent track record.
- Form depth: this segment will trade more information for a substantive
  consult, *"so the form can run longer"* — a sanctioned deviation from the
  buyer template's capture depth.

### Commercial brief specifically

- **The fork is missing.** The card's lead is *"a fork, not a blend"* — a
  two-option selector near the top (owner occupier vs investor) routing each
  audience to its own argument. The brief inherits the standard six-segment
  router and never mentions the fork, and the two-audience proof split
  (buy-vs-lease/LVR/tax vs volume/yields/tenant quality) depends on it.
- **The page is conditional.** Section 13 flags commercial as the weakest part
  of the split and names the criteria: thin volume means no paid page, a
  booked-call route instead. The brief treats the page as settled.
- Budget bands: brief already flags residential bands don't fit; the card
  gives the working range, roughly $600k to $20m.

### Developer brief specifically

- The brief's "shortest copy" and numbers-led register match the card. Missing
  from the brief: the proof list (sites secured with addresses, prices and
  site types; off market and JV access; feasibility discipline; speed), the
  action (direct call to the development division — implies a distinct tracked
  number), and the tool (feasibility / residual land value calculator, which
  also captures budget and site type).
- Working range roughly $2.5m upward; bands to be confirmed, as the brief
  already notes.
