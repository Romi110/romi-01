# Sizing a Solar System
*The math that determines whether your system works — load calculation, panel sizing, battery sizing, inverter sizing.*

---

## What Is It

Sizing is the process of calculating how much solar, battery, and inverter capacity you need to meet a specific set of loads. Get it right and the system works reliably. Get it wrong and you're either undersized (constant shortfalls) or oversized (wasted money).

The inputs are: what you want to power (loads), when you want to power it, and what your solar resource looks like (peak sun hours for your location). The outputs are: required panel wattage, battery capacity in kWh, and inverter size in watts.

This is arithmetic, not engineering. You do not need an electrical background to run these calculations.

---

## Step 1: Load Audit — What Do You Actually Use?

List every device you want to power. For each, you need:
1. Wattage (W) — found on the device label, in the manual, or by searching the model
2. Hours per day you run it

**Watt-hours per day** = watts × hours/day

Example load audit for essential home backup:

| Device | Watts | Hours/day | Wh/day |
|--------|-------|-----------|--------|
| Refrigerator | 150 | 24 | 3,600 |
| LED lighting (10 bulbs) | 100 | 5 | 500 |
| Phone + laptop charging | 100 | 4 | 400 |
| Router/modem | 20 | 24 | 480 |
| CPAP (if applicable) | 40 | 8 | 320 |
| Chest freezer | 80 | 24 | 1,920 |
| **Total** | | | **7,220 Wh/day** |

7,220 Wh/day ≈ 7.2 kWh/day — this is your daily energy requirement.

**Tools for getting wattage**: a Kill-A-Watt meter ($20–30) measures actual draw of any plugged-in device. Refrigerators especially — the nameplate wattage is the compressor watt, not average draw. Actual average draw is often 30–50% of nameplate.

---

## Step 2: Account for System Losses

No system is 100% efficient. Estimate 75–80% overall system efficiency to account for:
- Battery round-trip efficiency (~95% for LiFePO4, ~85% for lead-acid)
- Inverter efficiency (~90–95%)
- Wiring losses (~1–3%)
- Temperature and other derating (~5%)

**Adjusted daily requirement** = daily Wh ÷ 0.80

Example: 7,220 Wh ÷ 0.80 = **9,025 Wh needed from panels**

---

## Step 3: Size the Solar Array

**Peak sun hours (PSH)** for your location determine how many Wh each watt of panel produces per day.

NJ peak sun hours by season:
- Summer (June–August): 5.0–5.5 PSH
- Spring/Fall: 4.0–4.5 PSH
- Winter (Dec–Feb): 2.5–3.0 PSH

**Design for the worst month** (usually December in NJ) if you want year-round reliability without a generator. Design for average conditions if you're willing to use a generator or grid occasionally in winter.

**Panel array size (W)** = adjusted daily Wh ÷ peak sun hours

Year-round design (using 2.8 PSH winter):  
9,025 Wh ÷ 2.8 PSH = **3,223W** → round up to **3,400W** (e.g., eight 425W panels)

Summer-adequate design (using 5.0 PSH):  
9,025 Wh ÷ 5.0 PSH = **1,805W** → round up to **2,000W** (five 400W panels)

The difference is significant. A year-round off-grid system needs ~2x the panels of a summer-adequate system. This is why most people use grid-tie or a generator as winter backup rather than sizing entirely for December.

---

## Step 4: Size the Battery Bank

Battery sizing has two drivers:
1. **Days of autonomy** — how many days you can run without solar input (cloudy stretch, system maintenance)
2. **Daily consumption** — from step 1

**Battery capacity needed (Wh)** = daily Wh × days of autonomy ÷ DoD

For most home backup systems: 1–2 days of autonomy is reasonable. Off-grid systems in cloudy climates plan for 3–5 days.

Example: 7,220 Wh/day × 2 days ÷ 0.80 DoD (LiFePO4) = **18,050 Wh** ≈ **18 kWh of battery**

At 48V: 18,000 Wh ÷ 48V = 375 Ah. A 400Ah 48V LiFePO4 bank works.

At 24V: 18,000 Wh ÷ 24V = 750 Ah. Achievable but more batteries.

**Common battery bank configurations**:
- Single 100Ah LiFePO4 at 12V = 1.2 kWh (small shed, basic backup)
- Four 100Ah LiFePO4 in 2S2P at 24V = 4.8 kWh (workshop, small off-grid cabin)
- Four 200Ah LiFePO4 at 48V = 38.4 kWh (whole-home, serious off-grid)

---

## Step 5: Size the Inverter

The inverter must handle your peak simultaneous load — the maximum wattage of everything running at the same time.

**Peak load** = sum of wattage of devices that might run simultaneously

Example: refrigerator running (150W) + microwave (1,200W) + lighting (100W) + laptop (60W) = 1,510W

Add 25% safety margin: 1,510 × 1.25 = **1,887W** → choose a **2,000W or 2,500W inverter**

**Motor surge**: check that your inverter's surge rating exceeds the startup surge of your largest motor load (refrigerator, well pump, HVAC). Most quality inverters have 2–3× surge capacity.

**For whole-home systems**: 3,000–5,000W inverters are typical. Systems with 10kW+ solar often use a 10,000W hybrid inverter.

---

## Step 6: Size the Charge Controller (MPPT)

**MPPT controller current needed (A)** = (panel Wh array size in W × 1.25 safety factor) ÷ battery bank voltage

Example: 2,000W array ÷ 48V × 1.25 = **52A** → choose a **60A MPPT controller**

Most MPPT controllers come in 40A, 60A, 80A, and 100A ratings. Multiple controllers can run in parallel for large arrays.

---

## Quick Reference: System Sizes

| Use Case | Panel Array | Battery | Inverter |
|----------|-------------|---------|---------|
| Shed / basic backup | 400–800W | 1–2 kWh | 1,000–2,000W |
| Essential home backup (outages) | 2,000–3,000W | 10–15 kWh | 3,000–5,000W |
| Full home offset (grid-tied) | 5,000–10,000W | Optional (grid is backup) | 5,000–10,000W |
| Off-grid whole home | 8,000–15,000W | 20–40 kWh | 5,000–10,000W |

---

## NJ-Specific Numbers

Average NJ home uses 8,000–10,000 kWh/year (~22–27 kWh/day). To fully offset with solar:  
27 kWh/day × 1.25 (losses) ÷ 4.2 PSH (annual average) = **8,000W** ≈ 8kW solar array

That's 20 × 400W panels. On a typical NJ roof, this fits on 400–600 sq ft of south-facing roof area.

NJ incentives that affect the math:
- **30% federal ITC** (Investment Tax Credit): deduct 30% of system cost from federal taxes
- **NJ Sales Tax Exemption**: solar equipment is exempt from NJ sales tax (saves 6.625%)
- **SREC**: earn one SREC for every 1,000 kWh generated; currently trading ~$230–250 each; a 8kW system generates ~8–10 SRECs/year → $1,840–2,500/year of additional income
- **Net metering**: excess generation credited at retail rate against future bills

With NJ incentives, a 8kW system costing $20,000 DIY:
- 30% ITC: -$6,000
- Net cost: $14,000
- Annual electricity savings: ~$1,800–2,200
- Annual SREC income: ~$2,000–2,500
- Total annual benefit: ~$3,800–4,700
- Payback: 3–4 years (exceptional for NJ vs national average of 7–10 years)

---

## Common Sizing Mistakes

**Sizing for average rather than worst case** — a system sized for July will underperform in December; decide your autonomy strategy before sizing

**Forgetting the Kill-A-Watt step** — nameplate wattage on appliances is often 2–3× actual average draw; measuring gets you real numbers

**Not accounting for future loads** — if you're planning to add an EV or a heat pump in 5 years, size the array larger now; marginal cost of additional panels at installation time is low

**Undersizing batteries relative to inverter** — a 5,000W inverter drawing from a 2 kWh battery bank can drain it in under 30 minutes at full load; battery and inverter must be matched

**Treating 100% DoD as usable** — even LiFePO4 rated for 100% DoD degrades faster at full discharge; design for 80% usable capacity for longevity

---

## Connections

- [diy-renewable-energy.md](diy-renewable-energy.md) — overview; how sizing fits into the full system design
- [solar-panels.md](solar-panels.md) — panel specs, wiring configurations, and how to calculate string voltage and current
- [batteries-and-storage.md](batteries-and-storage.md) — battery chemistry, DoD, and why LiFePO4 changes the sizing calculus vs lead-acid
- [inverters-and-charge-controllers.md](inverters-and-charge-controllers.md) — inverter types and how to match them to your system
- [portable-power-stations.md](portable-power-stations.md) — the kill-a-watt audit is the same process used to spec a PPS

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-03*
