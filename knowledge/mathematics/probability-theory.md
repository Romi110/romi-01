# Probability Theory
*The formal mathematics of uncertainty — how to reason about random events, quantify beliefs, and update with evidence*

---

## What Is It

Probability theory is the branch of mathematics that studies random phenomena. It provides a formal framework for assigning numbers to uncertainty, reasoning about how likely events are, and updating those beliefs when new information arrives.

Applied probability shows up in statistics, machine learning, gambling, finance, genetics, physics, and everyday risk assessment. The formal theory — built on measure theory and axioms laid down by Kolmogorov in 1933 — gives all of this a rigorous foundation that eliminates paradoxes and ambiguity.

---

## Why It Matters

Most decisions involve uncertainty. Probability is the only consistent framework for reasoning under uncertainty. Without it, your intuitions about likelihood are miscalibrated in systematic, predictable ways (the human brain is demonstrably bad at native probability reasoning).

For a tech professional: probabilistic thinking underlies A/B testing, model evaluation, risk assessment, and system reliability. Bayesian reasoning is the foundation of many ML algorithms. Understanding probability makes the difference between reading a study intelligently and being fooled by it.

---

## Core Concepts

### Sample Spaces and Events

The **sample space** (Ω) is the set of all possible outcomes of a random experiment. Rolling a die: Ω = {1,2,3,4,5,6}. Flipping two coins: Ω = {HH, HT, TH, TT}.

An **event** is any subset of the sample space. "Rolling an even number" = {2,4,6}. The probability of an event is a number between 0 and 1.

**Kolmogorov's axioms** (the foundation everything else rests on):
1. P(A) ≥ 0 for any event A
2. P(Ω) = 1 (something must happen)
3. For mutually exclusive events: P(A or B) = P(A) + P(B)

Everything else in probability theory follows from these three rules.

### Conditional Probability

The probability of event A given that event B has already occurred:

`P(A|B) = P(A and B) / P(B)`

This is not the same as P(A). Knowing B happened changes what you should believe about A.

**Example**: What's the probability someone tests positive for a disease, given the test is 99% accurate and the disease affects 1% of the population?

- P(disease) = 0.01
- P(positive|disease) = 0.99
- P(positive|no disease) = 0.01

P(disease|positive) turns out to be only about 50% — not 99%. This is counterintuitive and why base rates matter so much. Most people's intuition ignores the base rate (how rare the condition is), leading to dramatic overestimation of probability. This specific error is called the **base rate fallacy**.

### Bayes' Theorem

The central formula for updating beliefs with evidence:

`P(A|B) = P(B|A) · P(A) / P(B)`

In plain language: posterior belief = likelihood × prior belief / normalizing constant.

**Prior**: What you believed before seeing evidence — P(A)
**Likelihood**: How probable the evidence is if A is true — P(B|A)
**Posterior**: Updated belief after seeing evidence — P(A|B)

Bayes' theorem is not just a formula — it's a philosophy of reasoning. Every piece of new evidence should update your prior beliefs proportionally to how strongly it supports or contradicts them. This is Bayesian reasoning.

**Why it matters in practice:**
- Medical testing: interpreting test results correctly requires Bayes
- Spam filtering: Bayesian classifiers update the probability a message is spam based on which words appear
- Bayesian statistics: an entire alternative to frequentist statistics, treating probability as degree of belief rather than long-run frequency
- Forecasting: prediction markets and superforecasters apply Bayesian updating explicitly

### Random Variables and Distributions

A **random variable** is a function that maps outcomes from a sample space to numbers. Rather than talking about "the outcome of rolling a die," you define X = the value rolled. X takes values 1–6.

A **probability distribution** describes the probabilities of all possible values of a random variable.

**Discrete distributions** (countable outcomes):
- *Bernoulli*: One trial, success or failure. A coin flip. P(X=1) = p, P(X=0) = 1-p.
- *Binomial*: Number of successes in n independent Bernoulli trials. "How many heads in 10 flips?"
- *Poisson*: Number of events in a fixed interval of time/space, when events occur independently at a constant rate. Used for rare events: server failures, customer arrivals, radioactive decay.

**Continuous distributions** (uncountable outcomes):
- *Uniform*: Every value in a range is equally likely. A random number between 0 and 1.
- *Normal (Gaussian)*: Bell curve. Defined by mean μ and standard deviation σ. Appears naturally in sums of many independent random variables (Central Limit Theorem). The most important distribution in statistics.
- *Exponential*: Time between events in a Poisson process. Models waiting times.
- *Log-normal*: When the log of a variable is normally distributed. Common in finance (stock prices), biology (organism sizes), many natural phenomena.

### Expected Value and Variance

**Expected value (mean)**: The probability-weighted average of all possible outcomes.

E[X] = Σ x·P(X=x) (discrete) or ∫ x·f(x)dx (continuous)

For a fair die: E[X] = 1·(1/6) + 2·(1/6) + ... + 6·(1/6) = 3.5

The expected value is the long-run average — if you repeat the experiment many times, the average outcome converges to E[X].

**Variance**: How spread out the outcomes are around the expected value.

Var(X) = E[(X - μ)²]

Low variance: outcomes cluster near the mean. High variance: outcomes spread widely. Standard deviation (σ) = √Var(X) — expressed in the same units as the original variable.

**Covariance**: How two random variables move together. Positive covariance: when one is high, the other tends to be high. Negative covariance: they move in opposite directions. Normalized covariance = correlation (-1 to 1).

### Law of Large Numbers

As the number of trials increases, the sample average converges to the expected value. This is why casinos always win in the long run and why insurance works — individual outcomes are uncertain, but averages are predictable.

Two forms:
- *Weak LLN*: The sample mean converges in probability to the true mean
- *Strong LLN*: Convergence with probability 1 (almost surely)

### Central Limit Theorem (CLT)

The sum (or average) of many independent random variables — regardless of their individual distributions — tends toward a normal distribution as the number of variables increases.

This is why the normal distribution is so ubiquitous: height is the sum of many genetic and environmental factors; measurement error is the sum of many small independent errors; financial returns over a period are the sum of many small daily changes.

The CLT justifies the widespread use of normal-based statistics even when the underlying data isn't normally distributed — because the averages of samples are approximately normal.

### Independence

Two events are independent if knowing one occurred gives no information about the other:

`P(A and B) = P(A)·P(B)` if and only if A and B are independent.

Independence is often assumed when it doesn't hold. Stock prices are not independent across days. Test results in the same person are not independent. Systems sharing infrastructure are not independent. Overassuming independence leads to systematic underestimation of joint risk.

---

## Key Considerations

**Frequentist vs. Bayesian interpretations**: Two competing philosophies about what probability means.
- *Frequentist*: Probability is the long-run frequency of an event in repeated trials. A probability of 0.3 means it happens 30% of the time in many repetitions.
- *Bayesian*: Probability is a degree of belief. It's subjective but updated consistently using Bayes' theorem. This allows assigning probabilities to one-time events ("probability this startup succeeds") which the frequentist view struggles with.

In practice, both frameworks are useful and most working statisticians draw on both. The debate is philosophical; the math overlaps significantly.

**Human probability intuition is systematically bad** — this is well-documented. We overweight vivid, recent events (availability heuristic). We ignore base rates. We see patterns in noise. We're bad at multiplicative probabilities. Understanding the formal theory is partly about correcting for these known failure modes.

**Rare event probabilities compound quickly.** A system with 100 components, each with 99% reliability, has overall reliability of 0.99¹⁰⁰ ≈ 36.6%. This is why highly reliable systems are hard to build — independence and multiplication make rare events common in aggregate.

---

## Getting Started

1. **Work through Bayes' theorem with a medical testing example.** Calculate the probability of having a disease given a positive test, using realistic base rates. The result is usually surprising — this exercise cements why base rates matter.
2. **3Blue1Brown's probability videos** (YouTube) for visual intuition on distributions and Bayes.
3. **Think in distributions, not point estimates.** Next time you make a prediction, don't say "it'll take 3 weeks." Say "most likely 3–5 weeks, with meaningful probability of 8+." This is probabilistic thinking applied directly.

---

## Common Mistakes

**Confusing P(A|B) with P(B|A).** These are not the same and are often dramatically different. The probability you have cancer given a positive test is not the same as the probability you test positive given you have cancer. This confusion (the "prosecutor's fallacy") has sent innocent people to prison.

**Treating correlated events as independent.** Multiplying probabilities only works for independent events. Risk assessments that assume independence systematically underestimate failure probability.

**Confusing expected value with likely outcome.** The expected value of a lottery ticket might be $0.50 if you paid $1.00 — but no individual ticket pays $0.50. Expected value is the long-run average; individual outcomes can be far from it.

---

## Resources

- *The Drunkard's Walk* — Leonard Mlodinow: How randomness shapes life. Accessible, concrete, and corrects most of the major intuition failures.
- *Thinking in Bets* — Annie Duke: Applied Bayesian thinking from a poker player. Practical probabilistic decision-making.
- *Introduction to Probability* — Blitzstein and Hwang (Harvard): Free PDF. Rigorous but readable. The standard undergrad text.

---

## Connections

- [math-overview.md](math-overview.md) — probability in the broader mathematical landscape
- [calculus.md](calculus.md) — continuous probability distributions require integration; the normal distribution's area under the curve is computed via integral
- [linear-algebra.md](linear-algebra.md) — covariance matrices, multivariate normal distributions, and PCA connect probability to linear algebra
- [optimization.md](optimization.md) — maximum likelihood estimation (finding model parameters that make observed data most probable) is a core optimization problem
- [mathematical-thinking.md](mathematical-thinking.md) — probabilistic reasoning is one of the most important transferable meta-skills from mathematics

*Last updated: 2026-04-06*
