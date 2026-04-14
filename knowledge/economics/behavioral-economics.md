# Behavioral Economics
*What happens when real humans replace the rational agent — cognitive bias, decision architecture, and nudge theory*

---

## What Is It

Behavioral economics is the field that emerged from grafting psychology onto economic models. Classical economics assumed rational agents: people with stable preferences who weigh costs and benefits accurately, update beliefs from evidence, and maximize expected utility. This is a useful fiction for modeling markets in aggregate. It fails badly at predicting what individual people actually do.

Behavioral economics documents *where and how* humans systematically deviate from that model — not randomly, but in predictable, consistent ways. The predictability matters: if biases were random, they'd cancel out in aggregate. Instead, they're directional, which means they can explain market anomalies and be exploited (or corrected) through policy.

The major figures: Daniel Kahneman and Amos Tversky (who built the empirical foundation), Richard Thaler (who applied it to economics and policy), Robert Shiller (asset pricing), and Dan Ariely (popularization).

---

## Why It Matters

Every decision you make — whether to exercise, how to save, what to buy, what risk to take — runs through the same cognitive machinery that behavioral economics studies. Understanding the biases doesn't make you immune, but it lets you design systems (automatic savings, default options, commitment devices) that work *with* your psychology instead of assuming you'll override it.

For a business owner or investor: these biases move markets. Herd behavior, anchoring to past prices, overconfidence in forecasts — these generate the mispricings that patient, disciplined investors can exploit. Recognizing them in yourself is harder than recognizing them in markets.

---

## Core Concepts

### The Rational Agent vs. the Real Human

The standard model assumes a **rational agent** who maximizes utility, has consistent preferences, and uses all available information correctly. This is covered in [economics/microeconomics.md](microeconomics.md) — consumer theory and utility maximization.

Behavioral economics doesn't discard this model. It identifies the *specific* conditions under which it fails:
- Decisions under uncertainty (risk and probability are systematically misestimated)
- Multi-period decisions (we discount the future hyperbolically, not exponentially)
- Complex choices (more options often produces worse decisions)
- Social contexts (we care about relative position and fairness, not just absolute payoffs)

### Prospect Theory and Loss Aversion

Kahneman and Tversky's core contribution. People don't evaluate outcomes in absolute terms — they evaluate them relative to a **reference point** (usually the status quo). And losses hurt about twice as much as equivalent gains feel good.

**Formal statement**: the value function is:
- Concave for gains (diminishing sensitivity — the difference between $100 and $200 feels larger than between $900 and $1000)
- Convex for losses (same pattern in reverse)
- Steeper for losses than gains by a factor of roughly 2–2.5

**What this explains:**
- People hold losing stocks too long (selling locks in the loss as real)
- People prefer a sure $80 to a 90% chance of $100 (even though EV favors the gamble)
- Contract negotiations are harder when framed as losses — the same outcome feels worse if presented as "you lose $5,000" vs. "you get $5,000 less"
- Homeowners don't sell at market price when the market falls below what they paid — anchoring to purchase price as the reference point

### Heuristics and Their Biases

The brain uses **heuristics** — fast, approximate rules — to handle complexity. These work reasonably well in familiar environments and fail in systematic ways when the environment changes. Three foundational ones:

**Availability heuristic**: estimate probability by how easily examples come to mind. Plane crashes are memorable → flying feels more dangerous than driving (which kills far more people per mile). Stock market news drives trading volume because recent events are highly available. Covered in depth in [mind/cognitive-biases.md](../mind/cognitive-biases.md).

**Anchoring**: the first number you hear biases subsequent estimates, even when the first number is arbitrary. In negotiations, the first offer anchors the eventual settlement. Retailers use this: "Was $499, now $299" — the $499 is the anchor, the $299 feels like a deal. Salary negotiations: whoever makes the first offer sets the anchor.

**Representativeness**: judge probability by how much something resembles a prototype. The classic error: told someone is quiet, orderly, and detail-oriented, people say they're more likely a librarian than a salesperson — ignoring base rates (salespeople vastly outnumber librarians). Investors fall into this when they assume last year's top performer will remain one.

### Temporal Discounting and Present Bias

People discount future payoffs, but not at a constant exponential rate — they discount the near future much more steeply than the far future. This is **hyperbolic discounting**.

**Example**: given a choice between $50 now or $60 next week, many take $50 now. Given $50 in a year or $60 in a year and a week — same gap, same 20% return — almost everyone takes the $60. The gap that felt big when "now vs. next week" shrinks to nothing when both options are far future.

**What this explains:**
- Procrastination: the future self bears the cost of the work while the present self bears none of the benefit
- Undersaving: retirement is distant, consumption is immediate
- Exercise: the effort is now, the benefit is months away
- Addiction: the drug reward is immediate, the health cost is long-term

**Commitment devices** are the solution: mechanisms that constrain future choices to prevent your future self from capitulating. Automatic 401(k) enrollment, gym contracts, deleting social media apps at night. Odysseus tied himself to the mast — the canonical commitment device.

### Mental Accounting

People mentally segregate money into non-fungible accounts — and treat money differently depending on which mental bucket it came from. This violates economic rationality, where $100 from a bonus is identical to $100 from salary.

**Examples:**
- Windfall money (tax refund, bonus) gets spent more freely than earned income
- "I've already paid for the gym membership, I should use it" — the sunk cost fallacy in mental accounting
- House money effect: gamblers reinvest winnings more aggressively than principal because winnings sit in a different mental account
- Credit cards break the mental accounting link between spending and payment — making purchases feel less real

### Overconfidence and Calibration Errors

People consistently overestimate their own knowledge and abilities. In one survey, 93% of American drivers rated themselves above average. Professional traders who are right 60% of the time often feel they're right 90% of the time.

**Planning fallacy**: underestimate time and cost for one's own projects while estimating others' accurately. Software projects, construction, policy implementation all run over reliably. The fix is **reference class forecasting** — ignore your inside view, look at how similar projects actually performed.

**Overconfidence in markets**: high trading volume requires buyers and sellers who both think they're right. Studies show that trading makes most retail investors worse off (especially frequent traders) — they're paying transaction costs to express overconfident predictions.

### Nudge Theory and Choice Architecture

If decisions are predictably influenced by how options are presented, then whoever designs the choice environment — the **choice architect** — has power. Thaler and Sunstein's **nudge theory** uses this to steer behavior toward better outcomes without coercion.

**Default effects**: people disproportionately stick with the default option. In countries where organ donation requires active opt-in, donation rates are ~15%. In countries with opt-out (donation is default, you must refuse), rates exceed 90%. Same population, same legal right to choose — the default does almost all the work.

**Applications:**
- Automatic 401(k) enrollment dramatically increases retirement savings
- Putting healthier food at eye level in cafeterias increases healthy choices
- Sending letters that say "most of your neighbors pay their taxes on time" increases compliance more than legal threats
- "Order by Friday to receive by Christmas" — deadline framing, not a rule, just a nudge

**The policy debate**: nudges are cheap and often effective, but they work through psychological influence rather than rational deliberation. Critics argue this is manipulation, even if well-intentioned. Libertarians object to paternalism; some psychologists argue nudges don't address underlying incentives and produce fragile behavior change.

---

## Key Considerations

**Biases are real but often small in aggregate.** Behavioral effects can be robust in experiments but modest in actual markets — arbitrage by rational actors can eliminate some mispricings. Don't overcorrect and assume all markets are driven by irrationality.

**Context determines which bias dominates.** Loss aversion drives some decisions; overconfidence dominates others. The skill is identifying which bias is active in the current situation, not memorizing a long list.

**Debiasing is hard.** Knowing about anchoring doesn't make you immune to it. The best practical fix is process: slow down, consider alternatives, seek outside views, use base rates. [mind/decision-making.md](../mind/decision-making.md) has the applied framework.

**The Stoic angle**: Marcus Aurelius on distinguishing what you control from what you don't is essentially bias decontamination — don't let narrative, loss aversion, or fear of change drive decisions that should be made on what's actually true now.

---

## Getting Started

1. **Read *Thinking, Fast and Slow*** (Kahneman) — the primary source. Part IV on biases in financial and risk decisions is most applicable.
2. **Track one bias for 2 weeks** — pick anchoring or loss aversion and notice when it appears in your actual decisions: negotiating, pricing, trading, planning.
3. **Audit your defaults** — what are the defaults in your financial, health, and work life? Are they defaults you'd choose consciously? If not, change them.

---

## Common Mistakes

**Assuming awareness eliminates bias.** Kahneman himself says he's still subject to the biases he spent his career documenting. Awareness is necessary but insufficient — you need structural fixes (checklists, commitment devices, external accountability).

**Using behavioral economics as an excuse.** "I'm just wired for present bias" is not an answer. Understanding the bias is step one; the work is building systems that compensate for it.

**Overgeneralizing from lab results.** Many behavioral economics findings were discovered in experiments with psychology undergraduates, then generalized to financial markets. The effect sizes in real markets are often smaller, and some famous results haven't replicated.

---

## Resources

- *Thinking, Fast and Slow* — Daniel Kahneman. The comprehensive source. Read Chapters 11–14 (heuristics/biases) and 25–34 (choices under risk and uncertainty).
- *Nudge* — Thaler & Sunstein. Applied behavioral economics for policy. Light and readable; strong on choice architecture.
- *Misbehaving* — Richard Thaler. How behavioral economics entered mainstream economics; equal parts memoir and intellectual history.
- *Predictably Irrational* — Dan Ariely. More popular; good entry point if Kahneman feels dense.

---

## Connections

- [economics/microeconomics.md](microeconomics.md) — the rational agent model this field corrects; consumer theory, utility maximization
- [mind/psychology/behavioral-psychology.md](../mind/psychology/behavioral-psychology.md) — conditioning, reinforcement, habit formation — the behavioral science substrate under behavioral economics
- [mind/psychology/cognitive-psychology.md](../mind/psychology/cognitive-psychology.md) — memory, attention, and reasoning — the cognitive architecture biases emerge from
- [mind/cognitive-biases.md](../mind/cognitive-biases.md) — catalog of specific biases; behavioral economics is largely applied cognitive bias theory
- [mind/decision-making.md](../mind/decision-making.md) — practical frameworks for making better decisions, accounting for these biases
- [economics/economics-overview.md](economics-overview.md) — schools of thought including behavioral; how this field changed mainstream economics

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-13*
