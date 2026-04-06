# Owner Compensation Strategy
*How to pay yourself from a business — salary, distributions, owner's draw — and how the structure of that payment changes what you owe in taxes.*

---

## What Is It

Owner compensation strategy is how you extract money from a business in a way that's legal, tax-efficient, and appropriate for your business stage. This is not the same as what you earn — it's how you classify what you take out, because the classification determines what gets taxed, at what rate, and when.

The central tension: money that flows through your personal return as wages is subject to payroll/self-employment tax (15.3% up to the Social Security wage base, 2.9% above). Money that flows as distributions is not — but you can't pay yourself entirely in distributions without triggering IRS "reasonable compensation" scrutiny.

Getting this wrong in either direction costs money:
- Too much salary: overpaying payroll taxes
- Too little salary: IRS reclassification risk, back taxes, penalties
- Wrong entity type: paying SE tax on income that didn't need to be

This file covers the mechanics for each entity structure. For the decision about which entity to be, see the business-entity-selection file when it exists.

---

## Why It Matters

On $200k of business net income, the difference between poorly structured and well-structured owner compensation can easily be $15,000–$25,000 per year in avoidable taxes. Over 10 years, that's $150k–$250k — a meaningful portion of a retirement account.

This is also where business and personal financial planning intersect most directly. How you pay yourself affects: W-2 income for mortgage qualification, solo 401k contribution limits, self-employed health insurance deductions, QBI deduction eligibility, and NJ state tax calculations.

---

## Core Concepts

### Entity Type Determines the Rules

Different entity structures have fundamentally different compensation rules:

**Sole Proprietor / Single-Member LLC (default)**: All net profit flows to your personal return as self-employment income. 100% subject to SE tax (15.3% up to $176,100 in 2025, 2.9% above). You don't have a "salary" — you just take an owner's draw, which doesn't affect your tax liability. The SE tax is the unavoidable cost of this structure.

**Partnership / Multi-Member LLC**: Profits pass through to partners' returns as guaranteed payments (for services — subject to SE tax) and distributive share (passive income — not subject to SE tax if you're not a general partner). Structure matters here.

**S-Corporation**: The structure that creates the most compensation planning flexibility. You must pay yourself a "reasonable salary" (W-2, subject to payroll taxes). Profits above the salary can be taken as S-corp distributions — not subject to SE/payroll tax. This split is where the tax savings live.

**C-Corporation**: You're an employee of the corporation. Your salary is a corporate deduction. The corporation pays its own taxes (21% flat rate), then pays dividends to you (taxed again at qualified dividend rates — "double taxation"). Rarely the best structure for a small business owner paying themselves primarily through compensation.

### The S-Corp Split: The Core Strategy

When your business generates meaningful profit (roughly $50k+/year above your personal needs), S-corp election creates a split:

- **Reasonable salary**: W-2 wages subject to payroll tax (15.3% up to wage base, 2.9% above)
- **Distributions**: Passed through to your personal return, taxed as ordinary income, but NOT subject to payroll/SE tax

The savings come entirely from the distribution bucket. Every dollar classified as a distribution instead of salary saves 15.3% in payroll tax (up to the Social Security wage base of $176,100 in 2025).

**Example with $300k net income:**

| Structure | Salary | Distribution | Payroll Tax | Total Tax |
|---|---|---|---|---|
| Sole prop/LLC | N/A (all SE) | N/A | $37,400 | Higher |
| S-Corp ($100k salary) | $100k | $200k | $15,300 | ~$22k lower |
| S-Corp ($120k salary) | $120k | $180k | $18,360 | ~$19k lower |

The gap narrows as the salary approaches the Social Security wage base, because above $176,100 the SE tax rate drops to 2.9%. The strategy is most powerful when the salary is below the wage base and the distribution is above it.

### Reasonable Compensation

The IRS requires S-corp owner-employees to pay themselves a "reasonable" salary — meaning what you'd pay an unrelated employee for the same work. If you set your salary artificially low (e.g., $1/year on $500k of net income), the IRS reclassifies distributions as wages, charges back payroll taxes plus interest plus penalties.

"Reasonable" is not a specific formula, but the IRS looks at:
- What similar businesses pay for similar roles
- Your qualifications and experience
- Time devoted to the business
- Your business's profitability

A software engineer who owns an S-corp and does the engineering work should pay themselves an engineer's market salary — typically $100k–$175k+ depending on location and experience. A business owner who manages but doesn't perform the primary technical work has more flexibility to set a lower salary.

**Practical guidance**: Set your salary between 40–60% of net business income, or at market rate for your role (whichever is higher). This passes IRS scrutiny while maintaining the distribution savings. Get a compensation study documented if your situation is unusual.

### Owner's Draw vs. Distribution (Why the Terms Matter)

These are often confused:

**Owner's draw** (sole prop/partnership): Simply taking money out of the business. Doesn't affect your tax liability — you're taxed on net profit regardless of what you draw. If you draw $50k from a $100k profit business, you're still taxed on $100k.

**S-corp distribution**: Money paid from after-tax S-corp retained earnings to shareholders. Not subject to payroll tax. Must flow from actual profit after salary is paid.

**W-2 salary** (S-corp, C-corp): Wages subject to payroll tax withholding, reported on W-2. Also triggers benefits eligibility (health insurance, HSA, solo 401k as employee).

### Solo 401k: The Most Powerful Business Owner Retirement Tool

As a self-employed person or S-corp owner, you can establish a Solo 401k (also called individual 401k or self-employed 401k). Contribution limits in 2025:

- **Employee contribution**: Up to $23,500 (same as any 401k, with $7,500 catch-up over 50)
- **Employer contribution**: Up to 25% of W-2 compensation (for S-corp owners) or 20% of net SE income (for sole props)
- **Total limit**: $70,000/year (2025)

For an S-corp owner with $150k salary:
- Employee contribution: $23,500
- Employer contribution: 25% × $150k = $37,500
- Total: $61,000/year in a solo 401k

That $61,000 of contributions is deducted — either from your personal income (employee portion) or the business income (employer portion via deductible payroll). At a 32% marginal rate, this saves ~$19,500 in federal taxes per year just from the 401k contribution.

**Roth option**: Solo 401ks can include Roth contributions for the employee portion — you contribute after-tax, it grows and withdraws tax-free. Useful in years when you expect to be in higher brackets later.

**SEP-IRA alternative**: Simpler to set up than a solo 401k, but limited to 25% of net SE income (no employee contribution), and doesn't allow Roth. Max contribution same ($70k). Better for very high earners where 25% of income already hits the limit; otherwise solo 401k is usually superior.

### Health Insurance as Compensation

If you're self-employed (sole prop, LLC) or an S-corp owner-employee, you can deduct 100% of your health insurance premiums as an "adjustment to income" on your personal return — even without itemizing. This applies to premiums for yourself, your spouse, and dependents.

For S-corp owner-employees, the premium must be included in your W-2 wages first (as income), then deducted. Your S-corp pays the premium, adds it to your W-2, and you deduct it on Schedule 1. Net effect: the premium is deducted from income tax but still subject to payroll tax on the W-2. Slightly less efficient than sole prop treatment, but still a meaningful deduction.

**HSA pairing**: If you're on a high-deductible health plan, you can contribute to an HSA ($4,300 individual / $8,550 family in 2025), deduct the contributions, and the account grows and withdraws tax-free for medical expenses. As an S-corp, the HSA contribution should be run through payroll (employer contribution) to avoid payroll tax on it.

### QBI Deduction (Section 199A)

Pass-through businesses (S-corps, partnerships, sole proprietorships) get a 20% deduction on "qualified business income" — the net profit from the business, minus reasonable salary. This deduction reduces the income tax on business profit by 20%, before it's subject to SE/payroll tax.

**Limits**: The deduction phases out above $197,300 (single) / $394,600 (married, 2025). For "specified service trades or businesses" (law, accounting, consulting, financial services), the deduction is fully phased out above those thresholds. Engineering and architecture are excluded from the limitation.

**Implication for salary**: A higher salary reduces QBI (because QBI = business profit - W-2 wages paid to you). There's an optimization point between paying more salary (saves on QBI deduction, which saves on income tax) and paying less salary (saves more on payroll tax). This requires running the numbers for your specific situation.

### Timing and Deferring Income

Business owners have more income timing flexibility than employees. Strategies:

**Defer income**: Invoice late in the year so payment arrives in January — pushes revenue into the next tax year. Useful in a high-income year when you expect lower income next year.

**Accelerate deductions**: Make deductible purchases (equipment, supplies, qualified retirement contributions) before year-end. Section 179 lets you deduct the full cost of qualifying equipment in the year purchased rather than depreciating it.

**Bonus distributions before year-end**: S-corp owners can time distributions to hit in a lower-income year.

**Roth conversion years**: If you take a lower salary year (sabbatical, business slowdown), fill the lower brackets with Roth conversions — convert traditional IRA/401k money to Roth at today's lower rate.

---

## Key Considerations

**The payroll tax administration burden of S-corp**: S-corp owners must run actual payroll — withhold and remit federal and state payroll taxes, file quarterly 941 forms, issue a W-2 at year end. This costs $500–$2,000/year in payroll service fees (Gusto, ADP, etc.). Factor this into the break-even calculation. The S-corp election only makes sense when the payroll tax savings exceed the administrative cost — roughly $50k+ of net income above your salary is the common threshold.

**NJ-specific**: NJ has its own payroll taxes and does not conform to all federal S-corp rules. NJ taxes S-corp income at both the corporate level (via the NJ S-corp filing) and at the individual level. See [nj-business-taxes](nj-business-taxes.md) for the full NJ picture.

**Social Security implications**: By reducing the salary subject to Social Security taxes, you're also reducing your eventual Social Security benefit. Social Security benefits are calculated on your 35 highest-earning years. If you're consistently keeping salary low, consider whether the lifetime SS benefit reduction is worth the current-year payroll tax savings. At current benefit levels, this is usually worth it if you're also maximizing retirement accounts (better long-term vehicle), but it's worth modeling.

**Working spouse considerations**: If your spouse is also an S-corp owner or self-employed, each person has their own solo 401k contribution limits and salary/distribution split. Two business owners in a household can shelter $140k+/year in solo 401ks.

**The SALT cap**: The 2017 TCJA capped the state and local tax (SALT) deduction at $10,000 for individuals. As a business owner in NJ, your business's state income taxes (pass-through entity tax, or PTET) can be deducted at the business level — bypassing the SALT cap entirely. NJ's BAIT (Business Alternative Income Tax) election lets the entity pay NJ tax and deduct it federally. This is one of the most valuable NJ-specific tax elections available to S-corp owners. See [nj-business-taxes](nj-business-taxes.md).

---

## Getting Started

**If you're currently a sole prop or single-member LLC generating $75k+ net profit:**
1. Model the S-corp savings: (net profit - estimated reasonable salary) × 15.3% (capped at wage base). If this exceeds $3,000-5,000, the S-corp election is worth evaluating.
2. Meet with a CPA who works with small business owners — not just a tax preparer. Ask specifically about S-corp election timing, reasonable compensation for your role, and solo 401k setup.
3. Timing: S-corp election can be made mid-year for the current year (Form 2553, filed within 2 months and 15 days of the desired effective date) or at any point for next year.

**If you're already an S-corp:**
1. Confirm your solo 401k is established and you're maximizing contributions.
2. Review your salary level against reasonable compensation standards — document the rationale.
3. Confirm the NJ BAIT election is active — this is left on the table by many NJ S-corp owners.
4. Review with your CPA whether your salary/distribution split is still optimized as income has changed.

**Ongoing:**
- Review compensation structure annually with your CPA
- Adjust salary when business income changes materially
- Max solo 401k before December 31 each year (employee contributions must be elected before year-end; employer contributions can be made up to tax filing deadline)

---

## Common Mistakes

**Skipping S-corp because payroll seems complicated**: Payroll services (Gusto, Rippling) handle this for $500-1,500/year. The payroll tax savings on a profitable business dwarf this cost. Avoiding the S-corp election to avoid payroll paperwork is one of the most expensive shortcuts small business owners take.

**Setting salary too low**: A $1 salary on $500k of net income is a guaranteed IRS flag. Beyond the legal risk, it also limits your solo 401k employee contribution (limited to salary amount), reduces your Social Security earnings record, and looks exactly like what it is: tax evasion.

**Not establishing a solo 401k**: The S-corp election and the solo 401k are a pair. The SE tax savings from the S-corp are most powerful when combined with sheltering the salary income into a solo 401k. People who run S-corps without a solo 401k leave the second half of the strategy on the table.

**Treating distributions as unlimited**: S-corp distributions must come from positive accumulated adjustments account (AAA) — essentially retained earnings. You can't distribute money the business hasn't earned. Distributions that exceed basis trigger capital gains tax.

**Missing the NJ BAIT election**: NJ S-corp owners who don't elect the Business Alternative Income Tax are paying NJ taxes that could be deducted at the federal level. This election is completely voluntary, available to all NJ pass-through entities, and worth real money — typically 6.37% of NJ taxable income that becomes a federal deduction instead of a nondeductible SALT payment.

---

## Resources

- **IRS Publication 560** — Retirement Plans for Small Business: authoritative source on solo 401k and SEP-IRA contribution rules
- **Kitces.com** — the best technical coverage of S-corp reasonable compensation, solo 401k strategy, and QBI deduction optimization for practitioners and owners who want to understand the details
- ***Profit First* by Mike Michalowicz** — behavioral system for managing business cashflow and owner compensation by allocating from gross revenue first; practical operating framework that complements the tax strategy here

---

## Connections

- [nj-business-taxes.md](nj-business-taxes.md) — NJ BAIT election, NJ S-corp filing requirements, NJ-specific payroll and income tax rules
- [tax-optimization.md](../finance/tax-optimization.md) — 401k, Roth IRA, HSA mechanics; the personal accounts that receive the income extracted from the business
- [family-wealth-strategy.md](../finance/family-wealth-strategy.md) — how business income feeds the broader wealth stack: solo 401k, S-corp distributions into investment accounts, trust funding
- [nj-retail-overview.md](nj-retail-overview.md) — if you own NJ retail: entity structure is set at formation; this file covers the compensation layer on top

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-05*
