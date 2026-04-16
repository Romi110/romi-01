# Information Economics
*How unequal information distorts markets — and who profits from knowing things others don't.*

---

## What Is It

Information economics studies what happens to markets when buyers and sellers don't have equal access to the same information. Classical economics assumes all parties are equally informed. Real markets aren't. The result is a set of predictable market failures — adverse selection, moral hazard, and signaling games — that affect every market from used cars to insurance to hiring.

The field was largely built by three economists who shared the 2001 Nobel Prize: George Akerlof (adverse selection), Michael Spence (signaling), and Joseph Stiglitz (screening). Their ideas explain phenomena that supply-and-demand curves can't — why some markets collapse, why prices don't clear, and why information itself is a strategic asset.

## Why It Matters

Information asymmetry is everywhere in Romi's life. Why does health insurance have deductibles? (moral hazard.) Why do employers ask for degrees? (signaling.) Why are used cars cheaper than new ones even the day after purchase? (the lemons problem.) Why does your financial advisor have a conflict of interest? (information asymmetry between advisor and client.) Understanding the structure makes these situations legible — and often exploitable in your favor.

## Core Concepts

### Akerlof's Market for Lemons

George Akerlof's 1970 paper "The Market for Lemons" is the foundational text. The setup is deceptively simple.

Imagine a used car market. Some cars are good (peaches); some are defective (lemons). Sellers know which they have. Buyers can't tell — both types look the same on the lot. Given this uncertainty, buyers are only willing to pay the average expected value.

But here's the problem: that average price is too low for sellers of good cars. They know their car is worth more than the average. So they pull good cars from the market. Now the remaining cars skew toward lemons. Buyers update — they lower their offer price again. More good cars leave. The market spirals: in the extreme case, only lemons remain, and the market collapses entirely despite willing buyers and sellers existing.

**The mechanism**: information asymmetry (seller knows quality; buyer doesn't) drives out the high-quality good. This is **adverse selection** — the party with unfavorable characteristics is the one most likely to participate.

Adverse selection shows up wherever one party has private information:

- **Health insurance**: people who know they're sick are more likely to buy comprehensive coverage. Healthy people opt out or buy minimal coverage. The insurance pool skews toward high-cost patients, driving up premiums, which drives out more healthy people. Without a mandate or employer-pooling, insurance markets for individual coverage face this spiral.
- **Life insurance**: applicants know their own health risks better than the insurer. High-risk individuals want more coverage; low-risk individuals want less. The insurer can't easily distinguish them → adverse selection.
- **Credit markets**: borrowers know more about their ability and intent to repay than lenders. High-risk borrowers want loans more than low-risk borrowers (who can self-fund). At a given interest rate, the pool of loan applicants skews risky.
- **Online platforms**: on eBay or Craigslist, sellers know the quality of what they're selling; buyers don't. The lemons problem is why eBay had to build the reputation system — a mechanism for reducing information asymmetry.

### Moral Hazard

Moral hazard occurs when one party changes their behavior after entering a contract because the other party bears the cost of that behavior.

Classic example: once you have car insurance, you may park less carefully. The downside (damage to the car) is partly absorbed by the insurer, not you. Your behavior becomes riskier — not because you're dishonest, but because your incentives changed. The insurer can't observe your behavior after the contract is signed.

Moral hazard is about **hidden actions**, not hidden information at contract-signing. (Adverse selection is about hidden *characteristics*; moral hazard is about hidden *post-contract behavior*.)

Where it shows up:

- **Banking**: a bank with deposit insurance has less incentive to manage risk carefully. If investments go well, they profit. If they fail catastrophically, the government (FDIC) absorbs depositor losses. This is precisely the dynamic behind 2008 — financial institutions took on tail risks because the downside was socialized. The phrase "too big to fail" is a moral hazard problem.
- **Health insurance**: once insured, people may seek more medical care than they would if paying out-of-pocket. Deductibles and co-pays exist specifically to preserve some skin-in-the-game for the insured.
- **Employment contracts**: once hired with a guaranteed salary, an employee's incentive to perform is weakened compared to piece-rate payment. This is why variable compensation, bonuses, and equity exist — to realign incentives by making the employee bear some of the outcome risk.
- **Government bailouts**: industries that expect to be bailed out if they fail take on more risk. The expectation of rescue changes the behavior before the crisis.

**Mitigation mechanisms**: deductibles (health/auto insurance), equity compensation (employment), covenants (loan agreements), deposit insurance limits ($250K per account — above that, you're motivated to monitor the bank), performance monitoring.

### Signaling

If you have a favorable characteristic that a buyer can't verify, you can sometimes credibly communicate it through an action that would be costly for someone without that characteristic to imitate. This is signaling.

Michael Spence formalized this in the context of education and hiring — covered in [labor-economics.md](../labor-economics.md). The key insight: a signal is credible only if it's costly enough for the "wrong" type to make it not worth faking.

Beyond hiring, signaling is pervasive:

- **Warranties**: a seller offering a long warranty signals confidence in the product's quality. A seller with a lemon wouldn't offer the same warranty — the expected repair costs are too high. The warranty is a credible signal because it's expensive to offer for a bad product.
- **Advertising**: heavy advertising of a product signals quality — not because the ad contains information, but because the cost of the campaign is evidence the firm expects repeat purchases. You wouldn't spend $50M on an ad campaign for a product you expect buyers to try once and hate.
- **Prices as signals**: in some markets, high prices signal quality. Buyers use price as a quality indicator when they can't evaluate quality directly. This is why luxury goods maintain high prices even under low demand — dropping prices would signal a quality problem.
- **Credentials and certifications**: not all signaling is pure waste. A CPA credential signals not just training but willingness to pass a hard exam — which correlates with persistence and ability. The useful signal is the correlation with underlying quality, not the credential itself.

**The signaling waste problem**: if a signal is pure signaling (the education adds nothing but screen) and everyone has to signal to be taken seriously, the result is a costly arms race — everyone spends four years and $200K to end up in the same relative position as before. This is a real concern about credential inflation.

### Screening

The mirror of signaling: when the *uninformed* party designs a mechanism to sort the informed party by type.

Insurance companies screen applicants with medical exams, driving records, and credit scores. Employers screen candidates with skills tests, trial projects, or structured interviews. Lenders screen borrowers with credit scores and income verification.

**Self-selection screening**: offer a menu of contracts designed so each type voluntarily reveals itself by choosing the option suited to them. Insurance companies offer both high-deductible/low-premium and low-deductible/high-premium plans. Low-risk individuals self-select into the high-deductible plan (lower expected cost). High-risk individuals self-select into the low-deductible plan. The insurer learns something about risk type from the choice itself, without asking directly.

### Information Asymmetry as a Strategic Asset

Once you understand the structure, you can identify who holds information advantages and how they exploit them:

**Real estate agents**: an agent selling your house knows the local market intimately; you don't. Their incentive is to close quickly (commission on a fast sale is marginally lower than commission on a slow sale, but time is money). This creates a systematic bias: they may nudge you toward accepting offers below your maximum achievable price. Levitt and Dubner documented this in *Freakonomics* — agents hold their own homes longer and sell for more than comparable client homes.

**Financial advisors**: a fee-based advisor (paid hourly) has different incentives than a commission-based one (paid per product sold). The commission-based advisor benefits from recommending products with higher commissions, not necessarily products better for you. The information asymmetry (they know the commission structure; you don't) enables this.

**Doctors and mechanics**: both are agents with expertise you don't have and financial incentives that may not align with your interests. Both are constrained by professional norms and liability — but imperfectly. Getting second opinions is a screening mechanism: it reduces information asymmetry at a cost (your time).

**Markets**: anywhere information is privately held and traders act on it before the information becomes public is a version of information economics. Legal insider trading (executives trading their own company stock) is restricted precisely because the information asymmetry advantage is too large.

## Key Considerations

**Reputation systems are information-asymmetry solutions.** eBay star ratings, Yelp reviews, Airbnb host profiles, doctor ratings, contractor reviews — all exist because information asymmetry between buyer and seller otherwise causes adverse selection. A reputation system that's hard to fake is worth a lot.

**Disclosure requirements are a regulatory response.** When markets fail due to information asymmetry, one regulatory option is mandatory disclosure: SEC filings, nutrition labels, fuel efficiency ratings, building inspection disclosures. Disclosure doesn't fully solve the problem (buyers still can't always interpret disclosures) but it narrows the gap.

**Third-party verification creates value.** Auditors, credit rating agencies, product certifiers (UL, ISO, CARFAX) are all paid to reduce information asymmetry. Their value is credibility — they're trusted precisely because they're independent. When that independence is compromised (rating agencies paid by the securities issuers they rate), the information value collapses.

**Your counterparty's information advantage is often the source of your bad deal.** Used car? The seller knows the maintenance history. Contract? The drafter knows which clauses favor them. Job offer? The employer knows what they've paid others. The antidote in each case is narrowing the gap: CARFAX report, independent contract review, salary transparency and benchmarking.

## Getting Started

1. **Map your major information asymmetries.** Where do you regularly deal with a counterparty who knows more than you? Insurance? Real estate? Finance? Medical? Identify 2–3 and think about how to close the gap.
2. **Read Akerlof's original paper.** "The Market for Lemons: Quality Uncertainty and the Market Mechanism" (1970) is 13 pages. Still the clearest exposition of adverse selection.
3. **Apply the signaling lens to your own choices.** What signals are you sending? Are they credible? Are there costly signals you're not sending that would change how others assess you?

## Common Mistakes

**Assuming information asymmetry is always exploited maliciously.** Often it's structural, not intentional. Your insurance company isn't scheming against you — the incentive structure is the problem, not individual bad faith.

**Ignoring which side of the asymmetry you're on.** In some markets you're the informed party (selling your own skills, your own house, your own business). Understanding that the buyer faces adverse selection risk tells you what signals to send.

**Conflating signaling with value.** A signal is credible without being valuable — credentials that screen without educating are waste at the social level even if rational at the individual level.

## Resources

- *"The Market for Lemons"* — George Akerlof (1970). 13 pages. Free online. The clearest economic paper written in the 20th century on market failure.
- *Freakonomics* — Levitt & Dubner. Accessible applications of information economics to real-estate agents, teachers, sumo wrestlers. Not rigorous theory but excellent intuition-building.
- *The Economics of Information* — Joseph Stiglitz's Nobel lecture (2001, free online). Covers adverse selection, moral hazard, and screening in one synthetic overview.
- [labor-economics.md](labor-economics.md) — Spence's signaling model applied to education and hiring; the credential premium and its limits

## Connections

- [microeconomics.md](microeconomics.md) — game theory and market structure: the strategic foundation that information economics builds on; price discrimination and market power overlap
- [labor-economics.md](labor-economics.md) — Spence's signaling model in full: why degrees function as signals and the credential inflation problem
- [behavioral-economics.md](behavioral-economics.md) — how cognitive biases compound with information asymmetry; overconfidence, availability, and anchoring all affect how parties process information disadvantages
- [inequality-and-wealth.md](inequality-and-wealth.md) — information advantages accumulate to the wealthy; professional networks, financial advisors, and legal representation are all information-asymmetry-reducing services priced out of reach for low-income people

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-15*
