# Financial Mathematics
*The math behind every financial decision — compound interest, NPV, IRR, loan amortization, and the time value of money*

---

## What Is It

Financial mathematics is the application of mathematical tools to money, time, and risk. It answers questions like: how much is a future payment worth today, what rate of return actually makes two investments comparable, how does a mortgage payment get calculated, and how do portfolios balance return against risk?

This is not the same as "financial modeling" in the Wall Street quant sense — that's a much narrower field. This is the mathematical foundation every financially literate person should have: the formulas and logic that underlie the financial decisions made constantly in ordinary life.

---

## Why It Matters

Compound interest is the most powerful force in personal finance. The difference between 8% and 10% return over 30 years isn't 2% — it's 100% more money. The difference between a 15-year and 30-year mortgage isn't just duration — it's often hundreds of thousands of dollars in total interest. These differences are invisible without the math.

For every significant financial decision — mortgage, investment, business case, insurance — there's a correct mathematical framework. Without it, you're comparing numbers without the ability to normalize them to the same basis.

---

## Core Concepts

### Time Value of Money

The foundational principle: **a dollar today is worth more than a dollar in the future.**

Why? Because a dollar today can be invested to earn interest, becoming more than a dollar in the future. Conversely, a dollar in the future is worth less than a dollar today — you'd need less today to grow to that amount.

This means you cannot directly compare dollar amounts at different points in time. To compare them, you must move them all to the same reference point using the appropriate interest rate.

**Future value**: How much a current amount grows to.
`FV = PV · (1 + r)ⁿ`
Where PV = present value, r = interest rate per period, n = number of periods.

$1,000 invested at 8% for 10 years:
FV = 1000 · (1.08)¹⁰ = $2,158.93

**Present value**: What a future amount is worth today — discounting the future.
`PV = FV / (1 + r)ⁿ`

What is $2,158.93 received 10 years from now worth today at 8% discount rate?
PV = 2158.93 / (1.08)¹⁰ = $1,000

These two formulas are inverses of each other. Everything in financial math is derived from them.

### Compound Interest

Simple interest: interest only on the principal. If you earn 10% simple interest on $1,000, you get $100/year, period.

Compound interest: interest on the principal plus accumulated interest. You earn interest on your interest. This is what creates exponential growth.

`A = P · (1 + r/n)^(nt)`

Where P = principal, r = annual interest rate, n = compounding periods per year, t = years.

**Compounding frequency matters:**
$10,000 at 10% annual rate for 1 year:
- Annually (n=1): $11,000.00
- Monthly (n=12): $11,047.13
- Daily (n=365): $11,051.56
- Continuously: $11,051.71

Continuous compounding uses e: `A = P·e^(rt)`

For most practical purposes, daily and continuous compounding are nearly identical. But annual vs. monthly compounding makes a meaningful difference over decades.

**The Rule of 72**: Divide 72 by the annual interest rate to get the approximate number of years to double your money.
- 6% return: 72/6 = 12 years to double
- 8% return: 72/8 = 9 years to double
- 10% return: 72/10 = 7.2 years to double

This is an approximation but is accurate within 1–2 years for rates between 5% and 25%.

**Effective Annual Rate (EAR)**: The actual annual rate accounting for compounding within the year.
`EAR = (1 + r/n)ⁿ - 1`

A credit card charging 24% APR compounded monthly has EAR = (1 + 0.24/12)¹² - 1 = 26.82%. The stated rate and effective rate diverge when compounding is more frequent than annual.

### Net Present Value (NPV)

NPV is the sum of the present values of all cash flows associated with an investment or decision, both inflows and outflows, discounted at an appropriate rate.

`NPV = Σ [CFₜ / (1 + r)ᵗ]` for t = 0, 1, 2, ..., n

Where CFₜ = cash flow at time t, r = discount rate.

**Decision rule**: If NPV > 0, the investment creates value (return exceeds the cost of capital). If NPV < 0, it destroys value. NPV = 0 means the return exactly equals the discount rate.

NPV is the gold standard for investment evaluation because it:
- Accounts for the time value of money (discounting)
- Considers all cash flows over the investment's life
- Is in dollar terms — directly comparable across projects

**The discount rate** is the cost of capital or required rate of return — the return you could get on the next best alternative. Choosing the right discount rate is often the hardest part.

**Example**: Should you buy a rental property for $200,000 that generates $15,000/year in net rent for 10 years, then sells for $250,000? Discount rate = 8%.

NPV = -200,000 + Σ[15,000/(1.08)ᵗ] for t=1 to 10 + 250,000/(1.08)¹⁰
NPV = -200,000 + 100,651 + 115,828 = +$16,479

Positive NPV — the investment makes financial sense at an 8% hurdle rate.

### Internal Rate of Return (IRR)

The IRR is the discount rate at which NPV = 0. It's the return rate that makes the present value of cash inflows equal to the present value of outflows — the break-even rate.

There's no closed-form formula for IRR — it's found by numerical methods (Excel's IRR function, Newton-Raphson iteration).

**Decision rule**: Accept a project if IRR > cost of capital (hurdle rate). The higher the IRR, the more attractive the investment.

**Comparing NPV and IRR**: IRR is a percentage — more intuitive and comparable across investments of different sizes. NPV is in dollars — tells you the actual value created. They usually agree on accept/reject decisions, but can give different rankings when comparing multiple projects. NPV is theoretically superior because IRR has edge cases where it fails (multiple sign changes in cash flows can produce multiple IRRs; IRR assumes reinvestment at the IRR rate, which is often unrealistic).

**Modified IRR (MIRR)**: Assumes reinvestment at the cost of capital rather than the IRR itself. More realistic and eliminates multiple IRR problems. Less commonly used but more reliable.

### Loan Amortization

An amortizing loan is paid in equal periodic payments that cover both interest and principal repayment, with the balance between them shifting over time.

**Payment formula:**
`PMT = PV · [r(1+r)ⁿ] / [(1+r)ⁿ - 1]`

Where PV = loan amount, r = interest rate per period, n = total number of payments.

**Example — 30-year mortgage**:
$400,000 loan at 7% annual rate (0.5833%/month), 360 payments:
PMT = 400,000 · [0.005833·(1.005833)³⁶⁰] / [(1.005833)³⁶⁰ - 1] = $2,661/month

Total paid over 30 years: $2,661 × 360 = $957,960
Total interest paid: $957,960 - $400,000 = **$557,960**

This is why the true cost of a mortgage is so much higher than the principal, and why extra payments early in the loan (when the interest-to-principal ratio is highest) have a large impact.

**Amortization schedule**: Month-by-month breakdown. In early months, most of the payment is interest. In later months, most is principal. Month 1 of the above mortgage: $2,333 interest, $328 principal. Month 360: $15 interest, $2,646 principal.

**15 vs. 30-year mortgage**: The 15-year loan has higher monthly payments but dramatically less total interest. At 7%, a $400,000 mortgage:
- 30-year: $2,661/month, $557,960 total interest
- 15-year: $3,595/month, $247,110 total interest

The extra $934/month buys you $310,850 less interest and pays off the house twice as fast. Whether it's the right choice depends on what you'd do with that $934 — if you'd invest it at returns exceeding the mortgage rate, the 30-year might win in net worth terms.

### Annuities and Perpetuities

An **annuity** is a series of equal payments at regular intervals.

**Present value of an ordinary annuity** (payments at end of each period):
`PV = PMT · [1 - (1+r)⁻ⁿ] / r`

This is just the sum of present values of each payment.

**Future value of an ordinary annuity** (how much your periodic investments grow to):
`FV = PMT · [(1+r)ⁿ - 1] / r`

$500/month invested at 8% annual (0.667%/month) for 30 years:
FV = 500 · [(1.00667)³⁶⁰ - 1] / 0.00667 = **$745,180**

Total contributed: $500 × 360 = $180,000
Growth: $565,180 — the power of compounding over time.

A **perpetuity** pays a fixed amount forever. PV = PMT / r. A perpetuity paying $1,000/year at a 5% discount rate is worth $20,000 today. This is the formula behind the Gordon Growth Model for stock valuation and real estate capitalization rates.

### Portfolio Mathematics — Risk and Return

**Expected return** of a portfolio is the weighted average of the expected returns of its components:
`E[Rₚ] = Σ wᵢ·E[Rᵢ]`

Where wᵢ are the portfolio weights (summing to 1).

**Portfolio variance** is NOT the weighted average of individual variances — because of correlations between assets:
`Var(Rₚ) = Σᵢ Σⱼ wᵢwⱼ·Cov(Rᵢ,Rⱼ)`

When assets are not perfectly correlated, combining them reduces overall variance — this is **diversification**. Two assets with correlation less than 1 combined produce lower risk than either alone.

**The Sharpe ratio**: Return per unit of risk.
`Sharpe = (E[R] - Rₓ) / σ`
Where Rₓ is the risk-free rate and σ is the standard deviation of returns. Compares investments on a risk-adjusted basis. Higher Sharpe = better return per unit of risk taken.

**Markowitz efficient frontier**: For any set of assets, there's a set of portfolios that maximize expected return for each level of risk. These form the "efficient frontier." Any portfolio below the frontier is suboptimal — the same risk could get you more return, or the same return with less risk.

This is a quadratic programming problem (minimize variance subject to target return constraint and weights summing to 1) — applied optimization using linear algebra.

---

## Key Considerations

**The discount rate drives NPV dramatically.** A project that's positive at 8% may be negative at 12%. Always check sensitivity — how does the decision change if the rate is 2% higher or lower?

**Inflation is a compounding destroyer.** An 8% nominal return with 3% inflation is a 5% real return. All long-term comparisons should be in real (inflation-adjusted) terms, especially for retirement planning.

**Most financial decisions are optimization problems.** Mortgage term, investment allocation, rent vs. buy — each has a correct mathematical framing. The math doesn't make the decision for you (risk tolerance, lifestyle preferences matter), but it makes the trade-offs explicit.

**Sequence of returns risk**: For retirees withdrawing from a portfolio, the order of returns matters, not just the average. Getting poor returns early in retirement while withdrawing is far worse than getting them late. Average return doesn't capture this — Monte Carlo simulation does.

---

## Getting Started

1. **Build a compound interest calculator** in a spreadsheet. Vary the rate and years, observe the nonlinearity. This makes the Rule of 72 visceral.
2. **Create an amortization schedule** for your actual mortgage or a hypothetical one. See how much of early payments is interest. Compute the effect of one extra payment per year.
3. **Apply NPV to a real decision**: rent vs. buy, lease vs. buy equipment, a home improvement that increases value. Force yourself to quantify the assumptions.

---

## Common Mistakes

**Comparing dollar amounts at different points in time without discounting.** "$500,000 in 30 years" and "$100,000 today" are not directly comparable. Discount them both to the same point in time.

**Using nominal rates when real rates are appropriate.** For long-term planning, inflation-adjusted returns matter. 10% nominal with 4% inflation = 6% real. Over 40 years, the difference between 6% and 10% is roughly 4x in final value.

**Ignoring IRR's reinvestment assumption.** IRR implicitly assumes you can reinvest cash flows at the IRR rate. If the IRR is high (25%+), this assumption is usually unrealistic — MIRR is more accurate.

**Treating the efficient frontier as a static target.** Correlations between assets change over time, especially in crises (when they tend to increase toward 1, eliminating diversification benefits exactly when you want them most).

---

## Resources

- *The Psychology of Money* — Morgan Housel: The behavioral context around financial decisions. The math only helps if the behavior is right.
- *Principles of Corporate Finance* — Brealey, Myers, Allen: The standard finance textbook. Part I (value and capital budgeting) is the NPV/IRR treatment at depth.
- Khan Academy Finance: Free, structured coverage of time value, NPV, IRR, amortization with worked examples.

---

## Connections

- [math-overview.md](math-overview.md) — financial mathematics in the broader mathematical landscape
- [calculus.md](calculus.md) — continuous compounding uses e^(rt) derived from calculus; option pricing (Black-Scholes) is a partial differential equation
- [optimization.md](optimization.md) — portfolio optimization (Markowitz) is a quadratic program; capital budgeting under constraints is a linear or integer program
- [probability-theory.md](probability-theory.md) — portfolio expected return and variance, Monte Carlo simulation, and option pricing all require probability
- [index-fund-investing.md](../finance/index-fund-investing.md) — the practical application of return, compounding, and portfolio concepts
- [tax-optimization.md](../finance/tax-optimization.md) — tax treatment transforms nominal returns; after-tax math is often what determines the right financial decision

*Last updated: 2026-04-06*
