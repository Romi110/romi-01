# Inverters and Charge Controllers
*The control layer of your solar system — what turns DC into usable AC and protects your batteries from overcharge.*

---

## What Is It

Two devices sit between your solar panels, battery bank, and loads:

**The charge controller** manages the flow of power from panels into the battery — regulating voltage and current to charge correctly without overcharging or damaging the battery.

**The inverter** converts DC power from the battery (or panels) into AC power for your household loads.

In small off-grid systems, these are separate devices. In modern hybrid systems, they're often combined into a single all-in-one inverter-charger unit. Understanding each function independently helps you choose the right product and troubleshoot problems.

---

## Charge Controllers

### What They Do

Panels can produce voltages far higher than the battery voltage (a 48V battery bank might charge from panels wired to produce 150V). The charge controller steps voltage down to the correct charging voltage, follows a multi-stage charging profile (bulk → absorption → float), and cuts off when the battery is full.

Without a charge controller, panels would overcharge and damage batteries. It's not optional.

### PWM vs MPPT

**PWM (Pulse Width Modulation)**:
- Operates by directly connecting panels to batteries through a switch that pulses on and off
- Can only use panels matched to battery voltage (12V panels → 12V battery; 24V panels → 24V battery)
- Cheap: $15–50 for a decent unit
- Efficient only when panel voltage closely matches battery voltage — in all other cases, wastes power

When to use PWM: small 12V systems where your panel voltage and battery voltage are matched and cost is the primary concern.

**MPPT (Maximum Power Point Tracking)**:
- Electronically finds the panel's maximum power point (the voltage/current combination where power output is highest), then converts that to the correct battery charging voltage
- Can use higher-voltage panels with lower-voltage batteries efficiently (e.g., 48V panels → 24V battery; the voltage difference becomes additional current)
- Efficiency improvement over PWM: 10–30% depending on conditions
- Required for any system with significant voltage mismatch between panels and batteries
- More expensive: $80–300+ depending on amperage rating

When to use MPPT: any serious system — off-grid cabin, whole-home, or wherever panels are wired to produce higher voltage than the battery bank. The efficiency gains pay back the cost difference quickly.

### Selecting an MPPT Controller

Key specs:
- **Max PV input voltage (Voc)** — must exceed your panel string's open-circuit voltage × 1.25 safety factor; this is a hard limit; exceeding it destroys the controller
- **Max charge current (A)** — determines how fast it can charge; calculate: (array watts × 1.25) ÷ battery voltage
- **Battery voltage compatibility** — must match your bank (12/24/48V); many units auto-detect

Example: 2,000W array, 48V battery bank  
Max charge current = (2,000 × 1.25) ÷ 48 = 52A → choose 60A controller

**Reputable MPPT brands**: Victron Energy (premium, extensive monitoring, excellent reliability), Renogy (budget-friendly, widely available), EPever/Tracer (common in DIY community, good performance for the price).

### Wiring Note

Wire from panels to charge controller before connecting controller to battery. This sequence prevents sparking and damage. Disconnect in reverse order: battery first, then panels.

---

## Inverters

### What They Do

Batteries store DC. Your home runs on 120V AC (in the US). An inverter converts DC to AC. Without one, you can only run DC devices directly (LED strip lights, USB charging) from your battery.

### Modified vs Pure Sine Wave

**Modified sine wave (MSW)**: produces a stepped approximation of a sine wave. Cheaper ($50–150 for small units). Works for resistive loads (simple heating elements, incandescent bulbs, older tools). Causes problems with:
- Variable-speed motors (fans, tools with soft-start)
- Audio equipment (hum and buzz)
- Many modern electronics with switching power supplies
- CPAP machines (may work but often causes issues)
- Fluorescent and CFL lighting
- Laser printers

**Pure sine wave (PSW)**: produces a smooth sine wave identical to grid power. More expensive ($100–500+). Works with everything. No exceptions, no compatibility issues.

**Decision**: always buy pure sine wave for any system powering a home or sensitive electronics. The cost difference is not worth the compatibility headaches and potential appliance damage from MSW.

### Standalone Inverters

A standalone inverter connects to a battery bank and outputs AC. It does nothing else — no charging, no solar input.

**When to use**: simple off-grid systems where the charge controller handles solar separately, or where you already have an existing battery bank.

**Sizing**: rated for continuous output watts. Add 25% safety margin above your peak load. Check surge rating exceeds your largest motor's startup draw.

**Good standalone brands**: Victron MultiPlus, Growatt, Giandel, AIMS Power (for larger systems).

### Inverter-Chargers

An inverter-charger combines an inverter with an AC battery charger. When grid or generator power is available, it charges the battery. When not available, it inverts battery power to AC. Some models have automatic transfer switching — they switch seamlessly between grid and battery without interruption.

**Why this matters**: in a hybrid system (solar + grid + battery), the inverter-charger is the core device. It manages the flow of power between all sources.

**Example**: Victron MultiPlus 24/3000/70 — inverts 3,000W continuous from 24V battery; charges at 70A from AC source; auto-transfers in 20ms (imperceptible to most electronics).

### Hybrid / All-in-One Solar Inverters

The most useful category for whole-home DIY solar: a single unit that combines:
- MPPT charge controller (solar input)
- Inverter (DC to AC)
- Battery charger (from grid or generator)
- Transfer switch (automatic switching between sources)
- System monitoring

You wire solar panels in, battery bank in, grid in, and loads out. One device handles everything.

**Growatt SPF 5000 ES**: popular DIY choice, 5,000W output, 2× MPPT inputs (up to 6,000W solar), works with 48V LiFePO4, communicates with most battery BMS, grid-tie or off-grid capable. ~$400–600. Excellent value.

**Sol-Ark 12k**: premium US-made hybrid inverter, 12,000W output, 96A MPPT, handles whole-home loads, excellent reliability and support. ~$3,000–4,000. The premium option for serious whole-home systems.

**EG4 18kPV**: newer entrant, competitive specs, lower cost than Sol-Ark, good DIY community support.

**Victron Quattro / MultiPlus II**: modular system — inverter-charger combined with separate Victron MPPT controllers and monitoring. More expensive, extremely reliable, best monitoring/control options. Common in marine, RV, and serious off-grid applications.

### Micro-Inverters and Power Optimizers

These solve the shading problem in grid-tied systems:

**Micro-inverters** (Enphase): a small inverter mounted on each panel. Each panel operates independently — one shaded panel doesn't drag down the whole array. Simplest wiring (AC out from roof, no high-voltage DC runs). Higher cost per watt than string inverters. Enphase IQ8 series is the current standard.

**Power optimizers** (SolarEdge): a DC optimizer on each panel, still fed into a central string inverter. Addresses shading like micro-inverters but at lower cost. SolarEdge system requires their proprietary inverter.

**For a NJ roof with any shading at all**: micro-inverters or optimizers are worth the premium. A single chimney shadow at winter sun angles can cut production by 20–30% on a standard string system. With micro-inverters, only the shaded panels are affected.

---

## Wiring Safety and NEC Basics

**DC wiring under 50V**: low-voltage, generally safe to handle. Still capable of high current (and high current = fire if shorted). Use appropriately rated wire (check ampacity charts for your wire gauge), fuse or breaker every circuit, use MC4 connectors for panel connections.

**DC wiring above 50V**: higher risk, especially at 200–400V of a series panel string. Follow NEC Article 690 for solar PV wiring. Use conduit, appropriate wire, and arc-fault protection (required by NEC for most solar circuits).

**AC wiring** (inverter output): treat as grid power. Standard home electrical rules apply. Use appropriate wire gauge (14 AWG for 15A circuits, 12 AWG for 20A). Ground the system correctly.

**Fusing/breaker requirements**: fuse or breaker every segment — between panels and controller, between controller and battery, between battery and inverter. Size fuses to protect the wire, not the load.

**Grounding**: solar arrays and all metal components must be grounded. Required by NEC and critical for lightning protection and safety.

---

## Common Mistakes

**Buying a modified sine wave inverter to save money** — causes problems immediately; the cost saving is not worth it

**Exceeding MPPT controller's Voc rating** — destroys the controller; always calculate worst-case open circuit voltage (cold temperature increases Voc) and leave 25% margin

**Not fusing between battery and inverter** — this is the most dangerous circuit; a short here can cause a fire; always fuse

**Under-sizing inverter for surge loads** — check startup draw of refrigerators, well pumps, AC units; buy inverter with sufficient surge rating

**Confusing "all-in-one" portable power stations with hybrid inverters** — different products; a portable power station is a sealed unit; a hybrid inverter is a permanent installation device; both are valid but for different use cases

---

## Connections

- [diy-renewable-energy.md](diy-renewable-energy.md) — overview; how inverters and controllers fit the full system
- [sizing-a-solar-system.md](sizing-a-solar-system.md) — the load and array sizing calculations determine inverter size and controller amperage
- [batteries-and-storage.md](batteries-and-storage.md) — battery bank voltage and chemistry affect charge controller selection; LiFePO4 requires controllers that support its charging profile
- [solar-panels.md](solar-panels.md) — panel wiring (series/parallel) determines the voltage and current entering the charge controller

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-03*
