# Solar Panels
*How they work, how to read specs, how to wire them, and how to mount them.*

---

## What Is It

A solar panel is an array of photovoltaic (PV) cells — semiconductor devices that convert light directly into DC electricity. When photons strike the silicon layers, electrons are knocked free and flow as current. Connect panels to a charge controller or grid-tie inverter and you have a power source.

Modern monocrystalline panels are reliable, efficient, and inexpensive relative to their output. A quality 400W panel cost over $1,000 a decade ago. In 2026, the same panel costs $100–200. This cost drop is why solar is now the cheapest form of electricity generation in history.

---

## Panel Types

### Monocrystalline

Made from a single continuous silicon crystal (distinctive uniform dark color). Most efficient (20–23%) and most space-efficient. Slightly more expensive than poly but the default for any serious installation. Best for roof-mount where space per watt matters.

### Polycrystalline

Made from multiple silicon crystals fused together (speckled blue appearance). Slightly less efficient (15–17%), slightly cheaper. Mostly obsolete — the cost difference vs mono is small enough that mono is almost always worth it.

### Thin-Film (CIGS, CdTe, amorphous silicon)

Deposited on glass or flexible substrate. Lower efficiency (10–14%) but performs better in low light and high temperature (lower temperature coefficient). Rarely used in DIY home systems. Relevant for: flexible installations (curved surfaces, lightweight portable panels), commercial utility scale.

### Bifacial Panels

Capture light from both front and rear surfaces. The rear captures albedo (reflected light from the ground, roof, or other surfaces). Rear gain of 5–15% depending on installation. More expensive. Best value on ground-mount or elevated roof installations where reflected light reaches the rear.

---

## Key Specs to Read

Every panel has a spec sheet. These are the numbers that matter:

**Pmax (W)**: maximum power at STC (Standard Test Conditions: 1,000 W/m² irradiance, 25°C cell temp, AM 1.5 spectrum). The headline wattage. Real-world output is typically 75–85% of Pmax.

**Voc (V)**: open-circuit voltage — maximum voltage the panel produces with no load. Use this to ensure you don't exceed your charge controller or inverter's maximum input voltage. Critical for string sizing.

**Vmp (V)**: voltage at maximum power point — what the panel produces under load at peak output. Used for string sizing calculations.

**Isc (A)**: short-circuit current — maximum current with terminals shorted. Use for wire sizing and fuse sizing.

**Imp (A)**: current at maximum power point. Used with Vmp to confirm Pmax (Vmp × Imp = Pmax).

**Temperature coefficient of Pmax (%/°C)**: how much output changes per degree above 25°C. Typical value: -0.35% to -0.45%/°C. On a hot NJ summer day, roof panel temperature can reach 65–70°C — 40–45°C above STC. At -0.40%/°C, that's 16–18% output reduction. Factor this into summer production calculations.

**Temperature coefficient of Voc (%/°C)**: how much Voc changes per degree. Negative — Voc *increases* as temperature *decreases*. On a cold NJ winter day (-10°C), Voc can be 15–20% higher than the STC spec. This matters for not exceeding your controller's max input voltage in cold weather — the critical number for string sizing.

---

## Series vs Parallel Wiring

### Series Wiring

Connect positive of one panel to negative of the next. Voltages add; current stays the same.

Two 400W panels (Vmp 40V, Imp 10A) in series:
- String Vmp = 40 + 40 = **80V**
- String Imp = **10A**
- String power = 80V × 10A = **800W** ✓

**Why use series**: higher string voltage means lower current → smaller wire → less resistive loss. Required when your MPPT controller's voltage window is above single-panel Vmp.

**Constraint**: total string Voc (in cold weather) must not exceed the charge controller or inverter's max PV input voltage. Use the cold-temperature Voc calculation:

Cold Voc = Voc × [1 + (temp coefficient × (lowest expected temp − 25°C))]

Example: Voc = 48V, coefficient = -0.29%/°C, lowest temp = -10°C  
Cold Voc = 48 × [1 + (-0.0029 × (-10 - 25))] = 48 × 1.102 = **52.9V per panel**

For 4 panels in series: 52.9 × 4 = **211.6V** → must be below the controller's max input voltage.

### Parallel Wiring

Connect all positives together, all negatives together. Currents add; voltage stays the same.

Two 400W panels (Vmp 40V, Imp 10A) in parallel:
- String Vmp = **40V**
- String Imp = 10 + 10 = **20A**
- String power = 40V × 20A = **800W** ✓

**Why use parallel**: when your controller accepts only low voltage input (12V or 24V systems with matched-voltage panels). More current requires heavier wire.

### Series-Parallel

Combine both. Common in larger arrays — multiple strings of series panels, wired in parallel.

Example: 8 panels, 4 per string, 2 strings in parallel:
- Each string: Vmp = 4 × 40V = 160V, Imp = 10A
- Two strings parallel: Vmp = 160V, Imp = 20A, power = 3,200W

This is how most residential systems are wired.

---

## Mounting Options

### Roof Mount

**Flush mount (rafter mount)**: panels parallel to roof surface, 2–4 inch gap for airflow. Most common residential installation. Requires roof penetrations (lag bolts into rafters) sealed with flashing to prevent leaks. Compatible with most rail systems (Unirac, IronRidge, Ironcore).

**Tilt mount**: panels angled away from roof for better orientation; more complex, less common in residential.

**Key considerations**:
- Roof condition: must have 10+ years of life remaining
- Structural load: panels and racking add 3–5 lbs/sq ft; most roofs handle this; check with a structural engineer if uncertain
- Orientation: south-facing, 30–40° tilt is optimal for NJ latitude (40° N); east/west is acceptable at 10–15% production loss; north-facing is not viable
- Shading: map shadows from chimneys, vents, trees; winter sun is low (30° above horizon in NJ December); shadows are long

### Ground Mount

Panels on a freestanding structure. Requires more material (steel posts, deeper framing) but:
- Optimal angle adjustable
- No roof penetrations
- Easier access for cleaning and maintenance
- Can be any orientation
- Bifacial panels capture rear reflection from ground

**Post requirements**: typically 4-inch steel pipes or 4×4 pressure-treated wood, set in concrete, below frost line (NJ frost line: 36–42 inches). Ground mount permit requirements vary by municipality.

### Pole Mount

Single central pole with panel array on top. Top-of-pole mounts can manually or automatically track the sun (single-axis tracking adds 20–30% annual production; dual-axis tracking adds 30–40%). More expensive but recovers cost in production gain for large systems.

### Portable / Folding Panels

EcoFlow, Jackery, Renogy all offer folding panels for portable use. Typically 100–200W, foldable to briefcase size, handle included, MC4 output or proprietary connector. For use with portable power stations or while travelling.

---

## Wire Sizing

Solar panel wiring uses specific wire: USE-2 or PV Wire for outdoor runs, THWN-2 for conduit. Both are UV-resistant and rated for outdoor use.

**NEC 690 requirement**: wires must be sized for 1.25× Isc of the string (short-circuit current safety factor).

Wire sizing by current:
- Up to 10A: 12 AWG
- Up to 20A: 10 AWG
- Up to 30A: 8 AWG
- Up to 55A: 6 AWG

Long runs (over 50 feet) may need one size larger to limit voltage drop below 3%.

**MC4 connectors**: the standard weatherproof connector for solar PV. All panels use them. Most charge controllers and inverters use MC4 or accept adapters. Use a proper MC4 crimping tool — poorly crimped MC4s are a fire hazard.

---

## Shading and Diodes

A shaded cell acts like a resistor in a series string — it limits current for the entire string, not just the shaded panel. A single leaf blocking one cell can reduce a 10-panel string's output by 30–50%.

**Bypass diodes**: built into most panels (in the junction box). When one cell section is shaded, the bypass diode allows current to flow around it, limiting shading impact to one section of the panel rather than the entire string.

**Solutions when shading is unavoidable**:
- **Micro-inverters** (Enphase): each panel independent; shading one panel affects only that panel
- **Power optimizers** (SolarEdge): per-panel DC optimization before a central inverter; similar result to micro-inverters
- **Shade-tolerant wiring**: short strings, parallel rather than series, to limit the impact of shaded panels

---

## Cleaning and Maintenance

Panels require minimal maintenance. In NJ:
- Rain cleans panels naturally; manual cleaning rarely needed
- After heavy pollen season, a rinse with a hose helps
- After large snowfall: let snow slide off naturally (panels are slippery, snow melts faster than surrounding roof); do not scrape panels
- Inspect annually: look for damaged glass, loose wiring, bird nesting under panels, loose mounting hardware
- Monitor production: a sudden drop in one string indicates a panel or connection problem; monitor with your charge controller or inverter app

**Panel degradation**: quality panels lose 0.3–0.5% output per year. After 25 years at 0.4%/year: 10% total degradation. Most panels are warrantied for 25 years at ≥80% output.

---

## Common Mistakes

**Not checking cold-weather Voc before wiring in series** — string voltage in cold weather exceeds controller max input; destroys controller on the first cold day

**Mixing different panel models in the same string** — the weakest panel limits the whole string; use matched panels in series strings

**Running wires without conduit where required** — NEC 690 requires conduit in certain locations; check code for your jurisdiction before wiring

**Under-sizing combiner fuses** — if you parallel multiple strings, each string needs its own fuse at the combiner box; protects against reverse current flow between strings

**Installing on a shaded roof without mitigation** — a south-facing roof with a chimney shade in December is not a good candidate for a standard string inverter; use micro-inverters or address the shade before installing

---

## Connections

- [diy-renewable-energy.md](diy-renewable-energy.md) — overview; panels are the generation layer
- [sizing-a-solar-system.md](sizing-a-solar-system.md) — panel wattage and peak sun hours determine system output; array design comes from sizing calculations
- [inverters-and-charge-controllers.md](inverters-and-charge-controllers.md) — panel string Voc must not exceed controller/inverter max input; series string design depends on controller specs
- [batteries-and-storage.md](batteries-and-storage.md) — panel output flows through controller into the battery bank; panel sizing determines charge rate

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-03*
