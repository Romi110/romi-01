# Grid-Tie Solar in New Jersey
*NJ-specific incentives, the SuSI/SREC landscape, permitting process, and whether the numbers actually work*

---

## What Is It

Grid-tie solar is a rooftop system connected to the utility grid. Unlike off-grid, you have no large battery bank — you export excess generation to the grid and draw from it at night. A utility meter tracks the net flow. In NJ, this setup qualifies for a stack of state and federal incentives that make the economics significantly better than most states.

This file covers everything NJ-specific: incentive programs (SuSI, SREC history, ITC), net metering rules, permits and interconnection, battery storage decisions, and a concrete ROI model. For panel types, system sizing math, and component specs, see the existing energy files.

## Why It Matters

NJ is one of the better states in the country for solar ROI, for three compounding reasons: high retail electricity rates ($0.18–0.22/kWh and rising ~3%/year), true retail-rate net metering, and a state production incentive on top of the federal tax credit. A well-sited 8 kW system has a realistic payback period of 6–8 years on hardware that lasts 25–30 years. The IRR outperforms most conservative investments.

For self-reliance: solar eliminates the largest recurring utility bill from your cost of living, permanently, and hedges against rate increases that are not in your control.

## Core Concepts

### NJ's Incentive Stack

Multiple incentives apply simultaneously. They're independent — you claim all of them.

**1. Federal Investment Tax Credit (ITC) — 30%**

The IRA (2022) set the ITC at 30% of total installed system cost through 2032, then it steps down. This is a dollar-for-dollar reduction in federal income tax owed, not a deduction. On a $25,000 system: $7,500 off your federal tax bill. You must have sufficient federal tax liability to use it (if your tax liability is less, the remainder rolls forward to following years). It now also covers battery storage if installed at the same time as solar.

**2. NJ Sales Tax Exemption**

Solar equipment is exempt from NJ's 6.625% sales tax. On $20,000 worth of equipment, that's ~$1,325 saved. Most installers handle this automatically — confirm it's applied on the quote.

**3. NJ Property Tax Exemption**

The added market value from a solar installation is 100% exempt from property tax assessment for 25 years (N.J.S.A. 54:4-3.113). A solar system typically increases home value by $10,000–25,000 — at NJ's high property tax rates (~2.5% of assessed value), this is worth $250–625/year in avoided taxes. Not captured in most ROI calculators, but real.

**4. Net Metering (NEM)**

When your system produces more than you consume, the excess flows to the grid and your meter spins backward. Your utility credits you at the full retail rate — the same rate you'd pay to buy that electricity. At $0.20/kWh, every kWh exported is worth $0.20 in credit.

**NEM in NJ**: retail-rate net metering is still in place for residential systems as of 2025-2026. The NJ BPU has been reviewing NEM policy. This is worth locking in: installers who get your system permitted and interconnected under current NEM rules grandfather you in. California moved to a dramatically weaker export rate in NEM 3.0 (2023); NJ has not done this yet. If you're considering solar, this is a reason not to wait years.

Credits roll month-to-month. At the end of your annual billing year (typically June), any remaining net credit is settled — you may get a check or reduced future bill, depending on your utility. Excess production in summer offsets winter months when production is lower.

**5. SuSI Program — The Main NJ State Incentive**

SuSI (Successor Solar Incentive) is NJ's current solar incentive program, replacing the old SREC market starting in 2021. It pays you a fixed rate per kWh your system produces for 15 years. Two tracks:

- **ADI (Administratively Determined Incentive)**: residential and small commercial systems ≤1 MW (residential systems always qualify). Rate is set by the NJ BPU and fixed at enrollment — you lock in today's rate for the full 15 years.
- **CSI (Competitive Solar Incentive)**: larger projects, competitive bid process. Not relevant for residential.

**Current ADI rate**: approximately $0.06–0.09/kWh for residential grid-tied systems (rates step down as capacity fills — check the NJ BPU's current published rate before signing with an installer). Paid quarterly by your electric distribution company (PSE&G, JCP&L, ACE, or RECO depending on your service area).

**On a 9,500 kWh/year system at $0.07/kWh**: $665/year for 15 years = $9,975 in total SuSI payments, purely for generating electricity you'd be generating anyway.

### The Old SREC Market (Background)

SRECs (Solar Renewable Energy Certificates) were the prior NJ incentive. Each 1,000 kWh generated = 1 SREC, tradable on a market. At peak (2010–2012), SRECs sold for $200–300 each — exceptional returns. The market became oversaturated, prices crashed, and NJ replaced the system with SuSI's fixed-rate model. If you see installers mentioning "SRECs," clarify: new residential systems enroll in SuSI ADI, not the old SREC market.

### ROI Math — A Realistic NJ Example

System: **8 kW roof-mounted, south-facing, minimal shading**

| Item | Number |
|------|--------|
| Installed cost (NJ typical, $2.90–$3.40/W) | $26,000 |
| Federal ITC (30%) | −$7,800 |
| Net cost | **$18,200** |
| Annual production (4.2 peak sun hours, 80% efficiency) | ~9,500 kWh/year |
| Value at net metering ($0.20/kWh) | $1,900/year |
| SuSI ADI at $0.07/kWh | $665/year |
| **Total year 1 value** | **$2,565/year** |
| Simple payback (net cost ÷ annual value) | **~7.1 years** |

Over 25 years (conservative, no electricity rate increases):
- Electricity offset: $1,900 × 25 = $47,500
- SuSI payments: $665 × 15 = $9,975
- Total value: $57,475
- Net profit after cost: **$39,275**

Build in 3% annual electricity rate increases and the numbers get better. Include the property tax exemption (~$375/year × 25 = $9,375) and total net value exceeds $48,000.

**The key assumption is electricity rate.** At $0.20/kWh, payback is ~7 years. If rates rise to $0.25 (plausible given NJ rate trends), payback drops to ~6 years.

### Is Battery Storage Worth It?

Separate question from solar. Battery (e.g., Tesla Powerwall 3, Enphase IQ Battery, FranklinWH) adds outage backup and potential time-of-use arbitrage.

**Financial case (standalone)**: weak. A Powerwall 3 (13.5 kWh) runs ~$9,000–12,000 installed. After the 30% ITC (applies if paired with solar): net cost ~$6,300–8,400. NJcurrent time-of-use rate plans from PSE&G/JCP&L aren't aggressive enough to generate strong arbitrage returns. Payback from financial savings alone: 12–18 years.

**Real case for adding battery**: NJ has nor'easters, summer thunderstorms, and occasional extended outages. If you're working from home, have medical equipment, or simply value not losing refrigerator contents during a 3-day outage, $7,000 after-ITC for a Powerwall is a legitimate purchase. It's appliance-category money buying real resilience — not primarily an investment.

**Timing**: adding battery during initial solar installation is cheaper than retrofitting later. Installers bundle the work. The ITC on the battery only applies when co-installed with solar (or if the battery charges exclusively from solar). Do both at once or plan to do battery at solar install time.

**Grid-tie with battery (hybrid)**: the right setup for most people. You get all the net metering and SuSI benefits of grid-tie plus battery backup. The system operates grid-tied normally; battery kicks in during outages. See `batteries-and-storage.md` for battery specs and chemistry.

### The Installation Process

1. **Get 3+ quotes.** Prices vary significantly. The quote should break down: panels (brand and wattage), inverter (string vs. microinverter), labor, permit fees, and utility interconnection costs. Microinverters (Enphase) cost more than string inverters but perform better under partial shading and are easier to monitor per-panel.

2. **Site assessment.** Installer sends someone to assess: roof orientation, pitch, shading from trees/chimneys, structural condition. A shading analysis matters — a tree blocking 20% of your panels in the afternoon can cut production by more than 20% due to string inverter behavior (microinverters mitigate this).

3. **Roof age.** If your roof is more than 12 years old, replace it before solar. Removing and reinstalling panels for a roof replacement costs $1,500–3,000. Adding 5–7 years of life to the roof before installation is the right call.

4. **Permits.** Your installer pulls a building permit and electrical permit from your municipality, and submits a utility interconnection application. This process takes 4–10 weeks in NJ — it's the main delay.

5. **Installation.** 1–2 days for most residential systems. Panels go on, inverter mounts in the garage or electrical room, meter upgrade happens if needed.

6. **Inspections.** Municipal inspection of the structural and electrical work. Utility inspection before they install the net meter.

7. **Permission to Operate (PTO).** The utility's approval to turn the system on. You cannot legally energize a grid-tied system without this. After PTO, your installer activates the system.

8. **SuSI enrollment.** Your installer handles this. They submit production data to the NJ Clean Energy Program. You get a welcome letter from your utility confirming your ADI rate and start date.

### HOA Rules in NJ

NJ law (N.J.S.A. 45:22A-48.2) prohibits HOAs from outright banning solar. However, HOAs can regulate placement and aesthetics — they can require panels to be on rear or side-facing slopes rather than street-facing, for example. What they cannot do: require placement that reduces system output by more than 20% compared to optimal placement. If an HOA objects, cite the statute. In practice, most NJ HOAs have little recourse against a standard roof-mount installation.

## Key Considerations

**SuSI rates step down over time.** The ADI rate drops as each tranche of capacity fills. The rate you lock in today is likely better than what will be available in 2–3 years. This is a genuine reason not to wait indefinitely.

**Get the ITC right.** You need sufficient federal tax liability to use the full 30% credit. If you typically owe $2,000/year in federal taxes and the credit is $7,500, it rolls forward but takes 3–4 years to fully use. Talk to a tax professional about timing, especially if you have other deductions that reduce your liability.

**Leases and PPAs are a bad deal.** You'll see offers to "go solar for $0 down" via lease or power purchase agreement (PPA). In these structures, the installer owns the system and you buy power from them at a fixed rate. You get none of the tax credits, no SuSI payments, and the HOA issues become the installer's problem. You're essentially locking into a long-term electricity contract. Buy the system outright (or finance it) — you want the ownership, the ITC, and the SuSI.

**Utility matters.** PSE&G's interconnection queue is slow. JCP&L can be faster. The timelines and process vary by utility.

## Getting Started

1. **Pull your last 12 months of electricity bills.** Total your kWh usage. This tells you what size system you need. Most NJ homes use 8,000–14,000 kWh/year.
2. **Run the sizing math** from [sizing-a-solar-system.md](sizing-a-solar-system.md) against your actual usage.
3. **Get 3 quotes from NJ-based installers.** Use EnergySage (marketplace that lets installers bid on your project) to get competitive pricing without playing phone tag. Make sure each quote shows: panel brand/model, inverter type, system size, estimated annual production, and an itemized cost breakdown with incentives applied.
4. **Verify current SuSI ADI rate** on the NJ Clean Energy Program website (njcleanenergy.com) before committing.
5. **Check your roof.** If it needs work in the next 5 years, do it first.
6. **Decide on battery.** If you want one, include it in the initial installation for ITC eligibility and lower combined labor cost.

## Common Mistakes

**Taking the first quote.** Solar installer pricing varies by 20–40% for equivalent systems in NJ. The first quote is almost never the best price. Use EnergySage or get 3+ bids.

**Leasing instead of buying.** Kills your ITC and SuSI eligibility. Don't do it.

**Ignoring shading.** One shaded panel can drag down an entire string. If you have significant shading, microinverters (Enphase IQ8 series) or DC optimizers (SolarEdge) are worth the premium. Ask each installer how they're handling your specific shading situation.

**Skipping the roof assessment.** Most installers do this, but make sure it happens. A roof warranty voided by improper penetration, or a roof that fails 5 years into a 25-year solar lifespan, is an expensive problem.

**Waiting for "better" panels.** Panel efficiency improvements are incremental. A panel installed in 2026 will produce electricity for 30 years. The incentive environment today (30% ITC, SuSI ADI rates, retail net metering) is meaningful and could change. Waiting for a marginal efficiency improvement while the incentive window narrows is a bad trade.

## Resources

- **EnergySage** (energysage.com) — the best way to get competitive quotes in NJ. Installers bid on your project; you compare apples-to-apples.
- **NJ Clean Energy Program** (njcleanenergy.com) — official BPU site. Current SuSI ADI rates, program rules, and application status. Check this directly rather than relying on installer representations.
- **DSIRE** (dsireusa.org) — Database of State Incentives for Renewables & Efficiency. Authoritative list of all current NJ incentives with statute citations.
- **r/solar** — active community; use for installer vetting and NJ-specific questions about PSE&G/JCP&L interconnection timelines.

## Connections

- [solar-panels.md](solar-panels.md) — Panel types, efficiency specs, and what to look for on a quote
- [sizing-a-solar-system.md](sizing-a-solar-system.md) — The load and production math that determines system size
- [batteries-and-storage.md](batteries-and-storage.md) — Battery specs and chemistry for the backup storage decision
- [diy-renewable-energy.md](diy-renewable-energy.md) — Off-grid context; how grid-tie differs from standalone systems

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-08*
