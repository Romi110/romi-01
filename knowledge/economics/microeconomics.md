# Microeconomics
*How individual actors — consumers, firms, markets — make decisions and how those decisions interact*

---

## What Is It

Microeconomics studies decision-making at the level of individuals, households, and firms, and how those decisions aggregate into market outcomes. Where macroeconomics asks "why is the economy growing?" micro asks "why does the price of insulin stay high despite low manufacturing costs?" or "why does Uber surge-price on New Year's Eve?"

The core question is always: given scarcity and competing options, how do actors allocate resources? Micro gives you frameworks to answer that question rigorously — and to spot when markets are working, when they're failing, and why.

---

## Why It Matters

Micro is the most transferable economic domain. Its logic shows up in pricing your services, evaluating business decisions, understanding why regulations produce unexpected outcomes, and seeing through market manipulation. Game theory alone — a micro subdomain — explains behavior in negotiations, auctions, competition, and arms races. If you only go deep in one area of economics, make it micro.

---

## Core Concepts

### Price Theory: How Prices Are Determined

The basic supply-demand model from the overview is the starting point, but price theory goes deeper.

**Elasticity** determines how sensitive quantity is to price changes. Formally: % change in quantity ÷ % change in price.
- **Inelastic** (< 1): Insulin, gasoline, cigarettes. People keep buying as price rises. Producers have pricing power; they can raise prices and revenue goes up.
- **Elastic** (> 1): Luxury goods, restaurant meals, airline seats. Small price increase → large demand drop.
- **Cross-price elasticity**: How the demand for one good responds to the price of another. Substitutes (coffee/tea) have positive cross-elasticity. Complements (cars/gasoline) have negative cross-elasticity.
- **Income elasticity**: How demand changes with income. Normal goods (income rises → demand rises). Inferior goods (income rises → demand falls, e.g., Ramen, budget housing). Luxury goods have high income elasticity (demand rises faster than income).

Why it matters: every pricing strategy is an elasticity judgment. Dynamic pricing, premium tiers, bulk discounts — these work because firms know (or intuit) how sensitive their customers are.

**Price discrimination** — charging different customers different prices for the same product — is possible when a firm has market power and can segment customers. Airlines do this constantly: same seat, prices vary 10x based on timing, class, loyalty status. First-degree discrimination = perfect (charge each customer exactly what they'd pay). Second-degree = price by quantity (bulk discounts). Third-degree = price by group (student discounts, senior rates).

### Consumer Theory

How consumers make choices, given preferences and a budget constraint.

**Utility** is the economic term for satisfaction/value derived from a good. **Marginal utility** is the additional utility from one more unit. The **law of diminishing marginal utility**: each additional unit of a good typically provides less satisfaction than the previous. The fifth slice of pizza isn't as good as the first.

**Budget constraint**: you have limited income and face prices. The optimal consumer choice is the bundle of goods that maximizes utility subject to the budget constraint. This is why price changes affect what people buy — not just how much of one thing, but the entire composition of their consumption.

**Consumer surplus** = what buyers would have paid minus what they actually paid. If you'd pay $50 for a book and it costs $20, you captured $30 in surplus. Aggregate consumer surplus is a measure of how much value a market creates for buyers beyond the price they pay.

### Producer Theory

How firms make decisions about what to produce and at what cost.

**Production function**: output as a function of inputs (labor, capital, raw materials). In the short run, some inputs are fixed (the factory building). In the long run, all inputs are variable.

**Marginal cost (MC)**: the cost of producing one more unit. This is the most important number in microeconomics. Firms maximize profit at the quantity where **marginal cost = marginal revenue** (MC = MR). Going beyond that point adds more to cost than to revenue — profit falls.

**Fixed costs vs. variable costs**: Fixed costs don't change with output (rent, equipment). Variable costs do (raw materials, hourly labor). In the short run, a firm should keep producing as long as price exceeds average variable cost — even if it's not covering fixed costs. In the long run, all costs must be covered or the firm exits.

**Producer surplus** = what firms receive minus their minimum acceptable price (marginal cost). The mirror of consumer surplus. Together, consumer + producer surplus = total market surplus — the measure of economic value created by a transaction.

**Economies of scale**: average cost falls as output increases. This is why large firms can undercut small ones on price — spread fixed costs over more units. Diseconomies of scale occur when the firm gets so large that coordination costs rise faster than output.

### Game Theory

How rational actors make decisions when outcomes depend on what others do. This is where micro connects to strategy.

**Nash Equilibrium** (John Nash): a situation where no player can improve their outcome by changing their strategy unilaterally, given what others are doing. Not necessarily the best outcome for everyone — just the stable one. The Prisoner's Dilemma is the canonical example.

**Prisoner's Dilemma**: Two suspects interrogated separately. Each can confess or stay silent. If both stay silent: light sentences for both. If one confesses: confessor goes free, the other gets the max. If both confess: both get heavy sentences. The Nash Equilibrium is both confessing — even though both staying silent is the collectively better outcome. This explains: arms races, price wars, climate agreements, advertising wars.

**Dominant strategy**: an action that's best regardless of what the other player does. In the Prisoner's Dilemma, confessing is the dominant strategy for both players — which is why the bad equilibrium is stable.

**Repeated games** change the dynamic. If prisoners play many rounds, cooperation can emerge — defecting in round 1 invites retaliation in all future rounds. The **tit-for-tat** strategy (cooperate first, then do whatever the other player did last round) is remarkably robust in repeated Prisoner's Dilemmas. This explains why long-term business relationships function differently from one-shot transactions.

**Coordination games**: sometimes the problem isn't conflict of interest but coordination failure. Driving on the right vs. left, choosing a standard (VHS vs. Betamax, QWERTY). Any equilibrium is fine as long as everyone's on the same one. The role of laws, standards, and conventions is often to solve coordination games.

**Auctions** are formalized games. English auction (open bidding, price rises): rational strategy is to bid up to your true value. Second-price (Vickrey) auction: winner pays the second-highest bid — truthful bidding is the dominant strategy. First-price sealed-bid: bid below your true value (bid shading). Understanding which auction type you're in matters.

**Oligopoly and strategic behavior**: in markets with few firms, each firm's decision depends on what it expects competitors to do. Price wars, capacity races, advertising battles — all modeled as games. The **Cournot model** (compete on quantity) and **Bertrand model** (compete on price) make different predictions, and the difference is often which input is harder to change quickly.

### Externalities in Depth

The [economics-overview.md](economics-overview.md) covers the basic types. Here's the mechanism and what to do about them.

**The Coase Theorem**: if property rights are well-defined and transaction costs are zero, private parties will negotiate their way to an efficient outcome regardless of who holds the property right. Example: factory pollutes neighbor's river. If the factory has the right to pollute, the neighbor could pay the factory to reduce pollution (if the benefit to the neighbor exceeds the cost to the factory). If the neighbor has the right to clean water, the factory could pay the neighbor for the right to pollute. Either way, the efficient level of pollution is reached.

**The real world problem**: transaction costs are rarely zero. When there are thousands of affected parties (air pollution, climate change), negotiation is impossible. Coase tells us the mechanism; it doesn't tell us it will happen automatically in large-N cases.

**Pigouvian taxes**: tax a negative externality at the rate of its social cost. A carbon tax is the classic example — make the polluter internalize the cost they impose on others. Theoretically clean; politically brutal because it makes prices visible.

**Cap and trade**: set a total cap on pollution, issue permits up to that cap, and allow firms to buy and sell permits. Achieves a quantity target while allowing price discovery. The efficient firms (lowest cost to reduce emissions) reduce the most; the high-cost firms buy permits. The EU ETS and California's cap-and-trade are real implementations.

**Subsidies for positive externalities**: if education, vaccination, or basic research generate social benefits beyond what individuals can capture, subsidize to increase production to the social optimum. The argument for public education and NIH funding.

**Information asymmetry** — a specific market failure. The classic paper is Akerlof's "Market for Lemons" (used car market). Sellers know the quality of their car; buyers don't. This means buyers discount all cars to account for the probability of getting a lemon — which drives quality sellers out of the market. Result: only lemons survive. The mechanism explains: health insurance adverse selection, used car markets, employer uncertainty about worker quality, financial product opacity. Solutions: signals (warranties, degrees, certifications), screening (job interviews, medical exams), reputation (eBay ratings, Yelp).

### Factor Markets

Markets for inputs to production: labor, capital, land.

**Labor markets**: workers supply labor; firms demand it. Wage is the price. Competitive labor markets pay workers their **marginal product** — the additional output they produce. This is why software engineers earn more than retail workers: their marginal product is higher. Monopsony (one dominant employer — Amazon in some towns, hospitals in some regions) allows below-market wages because workers have no alternatives. Minimum wage debates are really arguments about whether low-wage labor markets are competitive or monopsonistic.

**Human capital**: skills and knowledge as a form of capital. Education, training, and experience raise your marginal product, raising your wage. This is the economic logic for investing in skills. The return to human capital is the wage premium minus the cost and time of acquisition.

**Capital markets**: firms raise money (via equity or debt) to fund investment. Interest rate is the price of capital. Higher rates → less investment (borrowing is expensive). Lower rates → more investment. This is how monetary policy transmits to the real economy.

### Public Goods and Commons

**Public goods** are non-excludable (you can't prevent free riders from using them) and non-rivalrous (my use doesn't diminish yours). National defense, basic research, open-source software. Markets under-produce public goods because firms can't recoup costs from free riders.

**Common-pool resources**: non-excludable but rivalrous. Fisheries, groundwater, shared pastures. This is the **Tragedy of the Commons** — each individual has an incentive to overuse because they capture the full benefit but share the cost of depletion. Solutions: privatization (give someone a property right), regulation (fishing quotas), community governance (Elinor Ostrom's work showed communities often self-govern commons effectively without either privatization or central control).

---

## Key Considerations

**MC = MR is the firm's decision rule**, but few firms calculate this explicitly. Pricing is often done by markup over cost, by competitive benchmarking, or by intuition. The micro logic still predicts firm behavior at the aggregate level even when individual firms don't consciously calculate it.

**Equilibrium doesn't mean fair.** Markets can reach equilibrium at outcomes most people would consider unjust (extremely low wages, monopoly rents, unequal access to healthcare). Whether that matters is a normative question; micro as a positive science can describe the equilibrium but not evaluate it ethically.

**Markets often fail in the ways micro predicts.** When you see prices that seem wrong, quality that seems low, markets that don't exist despite obvious demand — the micro framework almost always explains it. Look for: externalities, asymmetric information, market power, or missing property rights.

---

## Getting Started

1. **Work through *The Armchair Economist*** (Steven Landsburg) — applies micro logic to everyday situations without math. Best entry point for intuition.
2. **Learn game theory visually** — Yale's Game Theory course (Ben Polak) on YouTube is the clearest available. Even 3–4 lectures on Nash equilibria is enough to transform how you see competitive situations.
3. **Apply immediately**: any pricing decision, negotiation, or strategic situation you face is a micro problem. Model it — who are the players, what are their options, what's the equilibrium?

---

## Common Mistakes

**Ignoring equilibrium effects.** A policy that looks good for the individual may cause market shifts that undo the effect or create new problems. Rent control lowers rent for current tenants but reduces housing supply over time — a micro prediction confirmed repeatedly.

**Assuming markets are competitive when they're not.** The efficiency arguments for markets rely on competition. Monopolistic or oligopolistic markets don't self-correct to efficient prices. Most interesting real-world markets are not competitive in the textbook sense.

**Treating consumer theory as descriptive.** People don't literally maximize utility. Behavioral economics shows systematic deviations. Micro models are useful for predicting aggregate market outcomes; they're poor models of individual psychology.

---

## Resources

- *The Armchair Economist* — Steven Landsburg. Micro intuition applied to real-world situations. Read first.
- *Thinking Strategically* — Dixit & Nalebuff. Game theory made readable. The best lay introduction.
- *The Market for Lemons* — Akerlof (paper, 1970). Read the original — it's short and the insight is foundational. Available free.
- *Governing the Commons* — Elinor Ostrom. How communities actually manage shared resources, correcting the simplistic Tragedy of the Commons narrative.

---

## Connections

- [economics/economics-overview.md](economics-overview.md) — foundational supply/demand, opportunity cost, market structures — start here before this file
- [economics/behavioral-economics.md](behavioral-economics.md) — where rational agent assumptions break down; the correction to standard micro
- [economics/macroeconomics.md](macroeconomics.md) — macro builds on micro foundations but studies aggregate outcomes
- [mind/systems-thinking.md](../mind/systems-thinking.md) — feedback loops and equilibrium dynamics generalize micro equilibrium concepts
- [mind/mental-models.md](../mind/mental-models.md) — opportunity cost, incentives, and marginal thinking are micro concepts that work as general mental models

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-05*
