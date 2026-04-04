# Batteries and Storage
*LiFePO4 vs lead-acid, how to build a battery bank, and what actually determines usable capacity.*

---

## What Is It

The battery bank is what separates a solar system from a solar-powered system. Without storage, you only have power when the sun is shining. With storage, you shift that energy to when you need it — night, cloudy days, outages.

Batteries store DC electricity. The key metrics are: how much they store (kWh), how much you can actually use (usable capacity based on depth of discharge), how many cycles they last, and how efficiently they return energy. The chemistry determines all of these.

---

## Battery Chemistry Comparison

### LiFePO4 (Lithium Iron Phosphate) — The Right Choice for DIY Solar

LiFePO4 (pronounced "lithium ferro phosphate," abbreviated LFP) is the dominant chemistry for serious home DIY energy storage. It is a subset of lithium-ion batteries but with fundamentally different properties.

**Why LiFePO4 specifically** (not other lithium types like NMC or LCO):
- **No thermal runaway**: LiFePO4 chemistry is stable; it does not catch fire or explode under abuse, overcharge, or short circuit (unlike NMC batteries in laptops and EVs, which can and do). This is why it's considered safe for indoor installation.
- **Long cycle life**: 2,000–5,000+ cycles at 80% DoD before reaching 80% capacity. 10+ year lifespan in a solar application.
- **High usable capacity**: can be discharged to 80–100% DoD without significant degradation; most users run 80% DoD; compare to lead-acid at 50% DoD.
- **High efficiency**: 95–98% round-trip efficiency (put in 100 Wh, get out 95–98 Wh).
- **Flat discharge curve**: voltage stays relatively constant until nearly depleted; simpler for inverters to manage.
- **No maintenance**: no water to add, no equalization charges required.
- **Lightweight**: roughly 1/3 the weight of equivalent lead-acid capacity.

**Downsides**:
- Higher upfront cost (though total cost of ownership is typically lower)
- Does not charge efficiently below freezing (0°C / 32°F); must store and charge above freezing; most quality BMS units have low-temperature charge cutoff
- BMS required (see below)

### Lead-Acid — The Legacy Technology

Three types: flooded (FLA), AGM (Absorbent Glass Mat), and Gel.

**Flooded**: cheapest, requires maintenance (adding distilled water), produces hydrogen gas during charging (ventilation required), spills if tipped.

**AGM / Gel**: sealed, maintenance-free, safer indoors, more expensive than flooded. Still has lead-acid limitations.

**Lead-acid limitations**:
- 50% usable DoD: discharging below 50% significantly shortens life; a 100Ah battery is effectively a 50Ah battery
- 200–500 cycle life at 50% DoD: a system cycled daily lasts 1–2 years; LiFePO4 at the same use lasts 8–15 years
- Poor cold performance: capacity drops 30–50% at 32°F
- Heavy: 12V 100Ah FLA battery weighs 30–35 kg
- Require periodic equalization charges (FLA)

**When lead-acid still makes sense**: extreme budget constraints, short-term use (few years), or climates where batteries will be replaced often anyway. For any long-term investment in a home solar system, lead-acid loses on total cost of ownership.

---

## The BMS (Battery Management System)

Every LiFePO4 battery pack requires a Battery Management System — the circuit board that monitors and protects the cells.

**What the BMS does**:
- **Cell balancing**: ensures all cells in a pack charge and discharge evenly (cell imbalance causes capacity loss and early failure)
- **Overcurrent protection**: disconnects if current exceeds safe limits
- **Overvoltage protection**: stops charging when cells are full
- **undervoltage protection**: disconnects before cells are over-discharged
- **Short circuit protection**
- **Temperature protection**: stops charging below freezing

**In DIY battery builds**: you buy cells (prismatic LiFePO4 cells) separately and mount a BMS. The quality of the BMS determines safety and longevity.

**In commercial batteries** (EG4, SOK, Ampere Time, CATL): the BMS is built in. Higher quality commercial batteries also allow communication with compatible inverters (via CAN bus or RS485) — the inverter reads battery state of charge directly and manages charging accordingly. Look for "inverter communication" or "Victron/Growatt compatible" in the specs if using a hybrid inverter.

---

## DIY Battery Bank vs Pre-Built

### Pre-Built Commercial LiFePO4 Batteries

Batteries like EG4 LifePower4, Ampere Time (AMPTSTART), SOK, Battle Born, CATL-based units from various brands are complete, assembled units with BMS included, ready to install.

**Advantages**: no cell-level assembly, tested, warranty, BMS designed for the cells, often include inverter communication.

**Common sizes**: 100Ah 12V (~1.28 kWh), 200Ah 12V (~2.56 kWh), 100Ah 48V (~5.12 kWh), 280Ah 48V (~13.4 kWh).

**Typical cost**: $200–400 per kWh for quality pre-built units.

### DIY Prismatic Cells (EVE, CATL, REPT)

Grade-A prismatic LiFePO4 cells (280Ah being the most common) purchased from manufacturers (directly or through importers), assembled with a BMS and busbars.

**Cell spec**: EVE 280Ah (3.2V nominal, 3.65V max, 2.5V min) — the most common DIY cell; ~$80–100 USD/cell at current pricing (2026).

**Battery bank math**: 4 cells in series = 12V nominal bank, 280Ah = 3.58 kWh. For 48V: 16 cells in series = 48V, 280Ah = 13.4 kWh.

**Cost comparison**: 16× EVE 280Ah cells (~$85 each) = $1,360 + BMS ($60–150) + busbars and hardware ($50) = ~$1,470 for 13.4 kWh. Pre-built equivalent: ~$3,500–5,000. Significant savings.

**Downsides**: no warranty on cells if self-assembled, requires capacity testing and grading, risk of unbalanced cells if not properly tested before assembly, more technical knowledge required.

**Resources for DIY cells**: CATL and EVE cells widely available through Will Prowse's recommended vendors, Amy at Docan (common import source). Always test cells with an active capacity tester before building.

---

## System Voltage: 12V vs 24V vs 48V

Higher voltage = lower current for the same power. Lower current = smaller wire, less heat loss, safer.

**12V**: for small systems (under 1,000W). Simple, cheap components, lots of 12V accessories (car fridge, 12V lights). Becomes inefficient above 1,000W — current gets very high.

**24V**: medium systems (1,000–3,000W). Better efficiency than 12V. Less common component availability than 12V.

**48V**: standard for whole-home systems (3,000W+). Best efficiency, widest selection of quality hybrid inverters, required for most serious off-grid and grid-tie systems. All major all-in-one inverters (Growatt, Sol-Ark, EG4) operate at 48V.

**Rule of thumb**: if you're building a system with more than 2 kWh of storage and 2,000W+ inverter, use 48V.

---

## Wiring Battery Banks: Series vs Parallel

**Series**: connects positive of one battery to negative of the next. **Doubles voltage, keeps capacity the same.**
- Two 12V 100Ah batteries in series → 24V 100Ah (2.4 kWh)
- Four 12V 100Ah batteries in series → 48V 100Ah (4.8 kWh)

**Parallel**: connects positive to positive, negative to negative. **Doubles capacity, keeps voltage the same.**
- Two 12V 100Ah batteries in parallel → 12V 200Ah (2.4 kWh)

**Series-parallel**: combine both. Four 12V 100Ah batteries in 2S2P (two series strings, two parallel) → 24V 200Ah (4.8 kWh).

**Important for parallel banks**: batteries should be matched (same chemistry, brand, age, capacity, and state of charge before connecting). Mismatched batteries in parallel cause one to charge/discharge more than the other.

---

## Calculating Usable Capacity

The number on the label is not what you can use.

**Usable capacity (Wh)** = rated capacity (Ah) × system voltage × DoD

LiFePO4 at 80% DoD:  
400Ah × 48V × 0.80 = **15,360 Wh (15.4 kWh usable)**

Lead-acid at 50% DoD:  
400Ah × 48V × 0.50 = **9,600 Wh (9.6 kWh usable)**

For the same usable capacity, you need ~60% more lead-acid than LiFePO4. Combined with the cycle life difference, LiFePO4 is the correct economic choice for any long-term investment.

---

## Storage and Temperature

**Ideal operating temperature**: 15–25°C (59–77°F)

**Charging below 0°C (32°F)**: do not charge LiFePO4 below freezing. The BMS should cut off charging automatically. If your batteries are in an unheated space (garage, outdoor shed) in NJ winters, ensure the BMS low-temperature cutoff is set and working.

**Discharging below 0°C**: most LiFePO4 can discharge in sub-zero temps (reduced capacity, some risk). Charging is the key restriction.

**Above 40°C (104°F)**: capacity reduces; sustained high temps degrade cells faster. A garage in NJ summer can hit 38–42°C. Ensure adequate ventilation.

**Storage state**: if storing batteries long-term (not in use), store at 50–60% state of charge. 100% charge storage accelerates calendar aging.

---

## Common Mistakes

**Using lead-acid DoD rules with LiFePO4** — some people cautiously limit LiFePO4 to 50% DoD out of habit; unnecessary; you're leaving capacity on the table and over-sizing your bank

**Parallel-connecting batteries of different ages or states of charge** — one battery drains into the other; warm/hot batteries, reduced overall capacity; always balance state of charge before connecting in parallel

**No low-temperature charge cutoff** — charging LiFePO4 below freezing causes lithium plating and permanent cell damage; verify BMS protects against this before deploying in an unheated space

**Undersizing the wire between battery and inverter** — this circuit carries the highest current in your system; use the correct wire gauge (check ampacity charts); undersized wire is a fire risk

**Not fusing between battery and inverter** — see inverters file; this is the most critical fuse in the system

---

## Resources

- Will Prowse (willprowse.com / YouTube) — the most thorough DIY LiFePO4 content available; battery builds, cell testing, BMS comparison
- *DIY Power Wall* communities (diysolarforum.com) — large community of DIY battery builders; real-world build logs
- EG4 Electronics, SOK Battery, Ampere Time — quality pre-built LiFePO4 units with good community support

---

## Connections

- [diy-renewable-energy.md](diy-renewable-energy.md) — overview; batteries are the storage layer of the full system
- [sizing-a-solar-system.md](sizing-a-solar-system.md) — battery sizing calculations; days of autonomy determines required kWh
- [inverters-and-charge-controllers.md](inverters-and-charge-controllers.md) — inverter and MPPT selection depends on battery bank voltage; LiFePO4 requires BMS-compatible charger profiles
- [portable-power-stations.md](portable-power-stations.md) — PPS units use LiFePO4 internally; same chemistry, just sealed and managed internally

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-03*
