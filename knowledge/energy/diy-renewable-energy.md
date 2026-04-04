# DIY Renewable Energy
*Generating, storing, and using your own power — from a single outlet to whole-home independence.*

---

## What Is It

DIY renewable energy is the practice of installing and managing your own power generation system — solar panels, batteries, inverters, and charge controllers — without relying entirely on a contractor or utility. At the small end, it means a portable power station that charges from a panel and runs a lamp and phone. At the large end, it means a grid-tied or off-grid solar array that offsets or eliminates your electricity bill.

The core components are always the same: **generation** (solar panels, small wind), **storage** (batteries), **conversion** (inverters to turn DC into AC), and **management** (charge controllers to protect batteries). What changes is scale.

This is a genuinely learnable skill. The math is straightforward. The installation has clear standards. A person with no electrical background can safely build a small system with a weekend of learning, and expand from there.

---

## Why It Matters

**Self-reliance**: the grid goes down. NJ is in hurricane and nor'easter territory. A battery backup system keeps lights, refrigerator, and medical devices running through outages. That's the minimum case.

**Long-term cost reduction**: grid electricity in NJ averages $0.18–0.22/kWh and rises ~3% per year. A solar system installed now locks in free generation for 25+ years. The payback period on a well-designed residential system is 7–12 years; the panels last 25–30.

**Genuine independence**: for someone building self-reliance skills, energy is one of the last major dependencies. You can grow food, preserve water, store food — but if you depend entirely on the grid for every device in your house, there's a real vulnerability there. Solar + storage addresses it.

**Entry points are low now**: a capable all-in-one portable power station (EcoFlow, Bluetti) costs $500–1,500 and genuinely handles emergency power and outdoor use. Full home systems have never been more accessible to DIYers.

---

## Core Concepts

### How Solar Power Actually Works

A solar panel is made of photovoltaic (PV) cells — silicon wafers that produce DC (direct current) electricity when photons hit them. The output varies with sunlight intensity: a 400W panel produces 400W at Standard Test Conditions (STC: 1000W/m² irradiance, 25°C cell temp). In real conditions, expect 70–85% of rated output on a clear day, less on overcast days.

Panels are wired in series (increases voltage), parallel (increases current), or series-parallel combinations. The result feeds into a charge controller (for battery systems) or a grid-tied inverter (for grid systems).

**Key panel specs**:
- Wattage (W) — output at STC
- Voc (open circuit voltage) — max voltage with no load
- Vmp (max power voltage) — voltage at max power output
- Isc (short circuit current) — max current with no load
- Temperature coefficient — how much output drops per degree above 25°C (matters in NJ summers)

Modern panels are mostly monocrystalline — highest efficiency (20–23%), best for limited roof space, slightly more expensive than polycrystalline.

### Peak Sun Hours

Your panels don't produce at full rated output all day. "Peak sun hours" is the equivalent number of hours at full output. NJ averages 4.0–4.5 peak sun hours per day (higher in summer, lower in winter).

To estimate daily output: panel wattage × peak sun hours × system efficiency (0.8 for losses).  
Example: 2,000W of panels × 4.2 hours × 0.8 = 6,720 Wh/day ≈ 6.7 kWh/day

This is the core calculation that sizes everything else. See [energy/sizing-a-solar-system.md](sizing-a-solar-system.md).

### DC vs AC — and Why It Matters

Solar panels produce DC. Batteries store DC. Your household appliances run on AC (120V in the US). An **inverter** converts DC to AC.

**Types of inverter output**:
- **Modified sine wave** — cheap; works for most resistive loads (lights, heating elements); causes problems for sensitive electronics, motors, and some medical devices
- **Pure sine wave** — identical to grid power; works for everything; required for modern electronics, variable-speed motors, CPAP machines; the only type worth buying for home use

**Inverter sizing**: size your inverter to handle your peak load (the maximum wattage of everything running simultaneously). If you might run a 1,200W microwave + 200W of lights + 100W of electronics = 1,500W peak, you want a 2,000W inverter minimum (always leave headroom).

### Batteries

Batteries store energy for use when panels aren't producing (night, overcast days). The main chemistries relevant to home DIY:

**Lithium Iron Phosphate (LiFePO4)**: the current standard for DIY energy storage. Safe (no thermal runaway risk like other lithium types), 3,000–5,000+ cycle life at 80% depth of discharge, 95%+ round-trip efficiency, no maintenance, 10-year lifespan. More expensive upfront but far cheaper per cycle than lead-acid.

**Lead-Acid (Flooded / AGM / Gel)**: older technology. Cheap upfront, but only 50% usable capacity (deep discharge kills them), 200–500 cycle life, heavy, flooded types require maintenance. Total cost of ownership is usually higher than LiFePO4 over time. AGM/Gel are sealed and maintenance-free but still have the cycle and depth-of-discharge limitations.

**Key battery specs**:
- Capacity (Ah or kWh) — how much it stores
- Voltage (12V, 24V, 48V) — system voltage
- Depth of Discharge (DoD) — how much you can safely use (LiFePO4: 80–100%; Lead-acid: 50%)
- Round-trip efficiency — how much you get back vs what you put in
- Cycle life at rated DoD

**Usable capacity**: a 100Ah LiFePO4 at 12V = 1.2 kWh × 80% DoD = 0.96 kWh usable. Plan from usable capacity, not rated capacity.

### Charge Controllers

The charge controller sits between solar panels and battery bank. It regulates charging voltage and current to prevent overcharging and battery damage.

**PWM (Pulse Width Modulation)**: simple, cheap, less efficient. Matches panel voltage to battery voltage — wastes the difference. Fine for small systems with 12V panels and 12V batteries where voltages are matched.

**MPPT (Maximum Power Point Tracking)**: more expensive, significantly more efficient (10–30% more power harvested). Tracks the panel's maximum power point as conditions change, then steps down voltage to match the battery while converting the difference to current. Required for systems where panel voltage is significantly higher than battery voltage. The right choice for any serious system.

### System Voltage: 12V vs 24V vs 48V

Home systems typically run at 12V (small/portable), 24V (medium), or 48V (whole-home scale).

Higher voltage = lower current for the same power = thinner wire needed = less resistive loss. At whole-home scale (5–10+ kW), 48V is standard. At small portable or shed scale, 12V works.

All-in-one systems (EcoFlow, Bluetti) manage this internally — you don't choose.

### Grid-Tied vs Off-Grid vs Hybrid

**Grid-tied**: panels connect through a grid-tie inverter to your home and the utility. Solar offsets your bill; excess goes to the grid (net metering). No battery — no power during outages (grid-tie inverters shut off for safety when grid is down). Simplest and highest ROI for most homes.

**Off-grid**: no utility connection. Full independence. Requires larger panel array and battery bank to handle worst-case (multiple cloudy days in winter). Higher cost, more complexity.

**Hybrid**: grid-tied with battery backup. Best of both — offsets utility costs and provides backup during outages. The current recommended path for most homeowners. Systems like the Enphase IQ Battery and Tesla Powerwall are commercial hybrid systems; the DIY path uses an all-in-one hybrid inverter + LiFePO4 battery bank.

---

## System Types by Scale

### Level 1: Portable Power Station (All-in-One)

A single unit containing battery, inverter, charge controller, and display. Charge from solar panels, wall outlet, or car. Plug devices directly in. No installation, no permits, no wiring knowledge required.

**What it handles**: phone charging, laptops, lighting, small fans, CPAP machines, mini-fridges, power tools (check watt rating).

**What it doesn't handle**: central AC, electric stove, electric water heater, electric dryer, whole-home circuits.

**Recommended entry products**: EcoFlow Delta 2 (1 kWh, 1800W), EcoFlow Delta Pro (3.6 kWh, 3600W), Bluetti AC200P (2 kWh, 2000W). Add matching solar panels for full solar input.

**Cost**: $500–2,000 depending on capacity. No installation cost.

**Best for**: emergency backup, camping/van use, apartment/renter situations, testing the concept before committing to a permanent system.

### Level 2: Small Off-Grid System (Shed, Workshop, Cabin)

1–4 solar panels, a charge controller, a battery bank (100–400Ah LiFePO4), and a pure sine wave inverter, wired together. Powers a specific space or set of loads — not the whole house.

**What it handles**: lighting, outlets for small electronics, a chest freezer, power tools, fans.

**Installation**: basic wiring knowledge required. All DC wiring under 48V is low-voltage — legal to DIY in most jurisdictions without permits. AC side (inverter output) should follow NEC codes.

**Cost**: $500–2,000 depending on capacity.

**Best for**: detached shed or workshop, backup for specific critical loads, learning the system before scaling up.

### Level 3: Whole-Home Backup / Grid-Tie Offset

Roof-mounted solar array (4–12 kW), whole-home battery (10–30 kWh), hybrid inverter. Either grid-tied with backup capability or fully off-grid.

**Permits**: required in NJ for grid-tied systems; electrical permit + utility interconnection agreement.

**DIY vs contractor**: panel installation and most wiring can be DIYed. Utility interconnection and final inspection typically require a licensed electrician to sign off. Many homeowners do the labor and hire an electrician for the final inspection — reduces cost significantly.

**Cost**: $10,000–25,000 DIY; $20,000–40,000 contractor-installed. NJ has a 30% federal solar tax credit (ITC), plus NJ state incentives (SREC program, sales tax exemption on solar equipment).

**Payback**: 7–12 years at current NJ electricity rates. After payback, free electricity for the remaining 15–20+ year panel life.

---

## Key Considerations

**NJ specifics**: Zone 6 climate, 4.0–4.5 peak sun hours annually. NJ has strong solar incentives — the Solar Renewable Energy Certificate (SREC) program pays you for every 1,000 kWh generated. Net metering credits you for excess grid export at retail rates. Worth understanding before sizing a system.

**Permits**: any grid-tied system requires permits. Off-grid systems under 100W typically don't. Small off-grid shed systems are a gray area — check your municipality. Permits protect you and make the system insurable.

**HOA/roof**: check HOA rules and roof condition before any roof installation. A roof with 10+ years left is required — installing solar on a roof that needs replacement in 5 years means removing and reinstalling panels.

**Shade kills output disproportionately**: one shaded panel in a string drags down the whole string. Map your roof's shade during winter (when the sun is lowest) before designing a layout. Microinverters or power optimizers (Enphase, SolarEdge) solve the shading problem but add cost.

**Battery placement**: LiFePO4 batteries are safe indoors but still need ventilation and should not be in living spaces. A garage, basement, or utility room is standard. Avoid temperature extremes — performance degrades below 32°F and above 105°F.

---

## Getting Started

**Step 1 (now)**: get a portable power station. EcoFlow Delta 2 + a 220W panel. Use it. Understand what 1 kWh of storage actually means in your life. This is the low-risk, high-learning entry point.

**Step 2**: audit your home's power consumption. Pull the last 12 months of utility bills. Calculate average monthly kWh. Identify your highest-consumption months and devices. This is the data you need to size anything permanent.

**Step 3**: if you want to go further — read [sizing-a-solar-system.md](sizing-a-solar-system.md) and [solar-panels.md](solar-panels.md). Design a system on paper before spending anything.

**Step 4**: build a small off-grid system for your shed or garage first. Real-world practice at low stakes, no permits required.

---

## Common Mistakes

**Undersizing batteries** — most beginners size for average use; you need to size for 2–3 days of cloudy weather without running the generator; most first systems are 50% too small

**Buying cheap modified sine wave inverters** — causes appliance damage, overheating, and failure; only buy pure sine wave

**Ignoring losses** — wiring resistance, inverter efficiency, battery round-trip efficiency, and temperature derate all reduce usable output; use 75–80% of theoretical output in calculations

**Skipping the consumption audit** — building a system without knowing what you actually use; you end up over- or under-built

**Not planning for winter** — NJ in December has ~2.5 peak sun hours vs 5+ in July; a system sized for summer will underperform significantly in winter; design for the worst month

---

## Resources

- *Solar Electricity Handbook* by Michael Boxwell (updated annually) — practical, accessible; explains sizing, wiring, and components without assuming electrical background
- Will Prowse (YouTube, willprowse.com) — the best practical DIY solar content available; honest reviews, detailed tutorials, LiFePO4 deep-dives
- Hoymiles, Enphase, and Sol-Ark documentation — manufacturer technical guides are often the clearest explanation of their equipment
- NJ Clean Energy Program (njcleanenergy.com) — NJ-specific incentive programs and rebates

---

## Connections

- [self-sustainable-farming.md](../farming/self-sustainable-farming.md) — solar powers irrigation timers, grow lights, water pumps, electric fencing; the two systems compound
- [hydroponics.md](../farming/hydroponics.md) — indoor hydro grow lights are a significant electrical load; solar makes the operating cost near-zero
- [stoicism.md](../philosophy/stoicism.md) — reducing dependency on systems outside your control; energy independence is practical Stoicism

---

## Proposed Files

- `energy/sizing-a-solar-system.md` — the math: calculating your load, sizing panels, batteries, and inverter; peak sun hours; design for worst-case winter; step-by-step worksheet
- `energy/solar-panels.md` — panel types, specs to understand, wiring (series vs parallel), mounting options (roof, ground, pole), shading and mitigation
- `energy/batteries-and-storage.md` — LiFePO4 vs lead-acid in depth, BMS explained, building a DIY battery bank, sizing, temperature management, safety
- `energy/inverters-and-charge-controllers.md` — inverter types, sizing, pure sine wave requirement; MPPT vs PWM, how to select and wire them; all-in-one hybrid inverters
- `energy/portable-power-stations.md` — all-in-one units: EcoFlow, Bluetti, Jackery comparison, what each handles, real-world use cases, when to upgrade to a permanent system
- `energy/grid-tie-solar-nj.md` — NJ-specific: permits, net metering, SREC program, HOA rules, utility interconnection, incentives and tax credits; what DIY is legal in NJ

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-03*
