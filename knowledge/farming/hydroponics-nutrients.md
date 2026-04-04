# Hydroponic Nutrients
*The chemistry side of hydroponics — pH, EC, and keeping plants fed without soil to buffer your mistakes.*

---

## What Is It

In soil, microorganisms break down organic matter and release nutrients in plant-available forms over time. Soil buffers imbalances. In hydroponics, you dissolve mineral salts directly in water and deliver them to roots immediately. No biological buffer. The chemistry must be right, or plants show it fast.

This file covers the two measurements that matter most (pH and EC), what nutrients plants actually need, how to manage a reservoir, and how to read deficiency symptoms when something goes wrong.

---

## The Two Numbers You Manage

### pH (5.5–6.5)

pH is the most important variable in hydroponics. It measures how acidic or alkaline your nutrient solution is, on a scale of 0–14. Neutral is 7; plants generally want 5.5–6.5 for hydroponics (slightly more acidic than neutral).

**Why it matters**: every nutrient has a pH range at which it's soluble and plant-available. Outside that range, nutrients "lock out" — they're present in solution but the plant can't absorb them. A plant showing nitrogen deficiency in a properly fed reservoir is almost always a pH problem, not a nutrient problem.

**pH targets by crop**:
- Lettuce and leafy greens: 5.5–6.5 (sweet spot 6.0)
- Tomatoes and peppers: 5.8–6.3
- Strawberries: 5.5–6.0
- Herbs: 5.5–6.5

**How pH drifts**: plants absorb nutrients selectively. When they absorb nitrogen as nitrate (NO3-), they release hydroxide ions, raising pH. When they absorb ammonium (NH4+), they release hydrogen ions, lowering pH. pH drift is normal and continuous — not a sign of a problem, just something you manage.

**Adjusting pH**:
- pH Up: potassium hydroxide solution — add drop by drop; strong stuff
- pH Down: phosphoric acid solution — add drop by drop
- Always adjust nutrient solution *after* mixing nutrients, not before
- Small additions; wait 30 seconds and recheck before adding more

**Tools**: a digital pH pen ($15–40). Liquid test kits work but are slow. Paper strips are inaccurate enough to be useless for hydroponics. A decent pen is mandatory.

---

### EC (Electrical Conductivity)

EC measures the concentration of dissolved minerals in your solution — your proxy for nutrient concentration. Higher EC = more nutrients dissolved. Measured in mS/cm (millisiemens per centimeter) or ppm (parts per million).

**Conversion**: 1 mS/cm ≈ 500–700 ppm depending on the meter's calibration factor. Most hydro nutrient charts use EC; some use ppm. Know which your meter reports.

**EC targets by crop and stage**:

| Crop | Seedling | Vegetative | Flowering/Fruiting |
|------|----------|------------|-------------------|
| Lettuce | 0.8–1.0 | 1.2–1.8 | 1.6–2.0 |
| Spinach, herbs | 1.0–1.2 | 1.4–1.8 | — |
| Tomatoes | 1.0–1.4 | 2.0–2.5 | 2.5–3.5 |
| Peppers | 1.0–1.4 | 1.8–2.2 | 2.0–3.0 |
| Strawberries | 1.0–1.4 | 1.4–1.8 | 1.8–2.2 |

**Too low EC (under-feeding)**: slow growth, pale yellow-green leaves, small plants. Fix: add more nutrient solution.

**Too high EC (over-feeding / nutrient burn)**: brown leaf tips, wilting despite wet roots, crusty white deposits on medium. Fix: dilute with pH-adjusted plain water; flush medium.

**EC drift**: as plants absorb water and nutrients at different rates, EC and pH change. In small reservoirs (under 10 gallons), this happens fast. In large reservoirs, more slowly.

**Tap water baseline**: tap water has its own EC (minerals already dissolved). In NJ, typical tap water EC is 0.2–0.5 mS/cm. This gets added to your nutrient EC. Account for it — don't target 1.5 mS/cm and add nutrients on top of 0.4 mS/cm tap water without knowing your actual total is 1.9.

---

## The 17 Essential Nutrients

Plants need 17 nutrients. Three come from air and water (carbon, hydrogen, oxygen — no action needed). The other 14 come from your nutrient solution.

**Macronutrients** (plants use in large quantities):
- **Nitrogen (N)** — leaf and stem growth; deficiency shows as yellowing of older leaves first
- **Phosphorus (P)** — root development, flowering, fruiting; deficiency shows as purple/dark coloring on undersides of leaves
- **Potassium (K)** — overall plant health, disease resistance, fruiting; deficiency shows as brown leaf edges

**Secondary macronutrients**:
- **Calcium (Ca)** — cell wall structure; deficiency causes blossom end rot in tomatoes, tip burn in lettuce
- **Magnesium (Mg)** — center of chlorophyll molecule; deficiency causes yellowing between veins on older leaves (interveinal chlorosis)
- **Sulfur (S)** — protein synthesis; deficiency causes yellowing of newer leaves

**Micronutrients** (trace amounts): iron, manganese, zinc, copper, boron, molybdenum, chlorine, nickel. Most pre-made hydroponic nutrients include these; rarely need to supplement separately.

---

## Nutrient Solutions: What to Buy

### Pre-Mixed (Recommended for Beginners)

**General Hydroponics Flora Series** (3-part: FloraGro, FloraBloom, FloraMicro): the industry standard. Has been around for decades. Feeding charts are well-tested. FloraMicro includes all the micronutrients. Available at most garden centers and Amazon.

**General Hydroponics MaxiGro / MaxiBloom**: dry powder, 2-part system. Cheaper per gallon than liquid. Mix one powder for veg, one for flowering. Good for beginners who want simplicity over fine control.

**Masterblend 4-18-38** (+ calcium nitrate + epsom salt): 3 components bought separately and mixed at ratio. Significantly cheaper than brand-name nutrients at scale. Standard in commercial greenhouse production. Requires a simple calculation each time.

**For Kratky or small DWC systems**: any of the above works. Flora Series requires no math beyond following the chart. Masterblend requires a kitchen scale to measure powders — more precise, lower cost.

### What to Avoid

- General potting soil fertilizers, Miracle-Gro, etc. — these are formulated for soil; missing key elements for full hydroponic use
- Single-nutrient supplements without a base: you need the full spectrum, not just NPK
- Organic liquid nutrients (fish emulsion, etc.) for recirculating systems: they clog emitters, feed bacteria in reservoirs, and are designed to work through soil biology that isn't present in hydroponics

---

## Reservoir Management

### Mixing Nutrients

1. Start with the target volume of pH-neutral water (or tap water — check its starting EC)
2. Add each nutrient component separately, stirring between additions; never mix concentrated nutrients directly together (they can precipitate)
3. Check EC — adjust to target range
4. Check pH — adjust to target range
5. Let sit 15–30 minutes and recheck pH (it shifts slightly after mixing)

### Reservoir Change Schedule

**Every 7–14 days**, drain and replace with fresh solution. Reasons:
- Nutrient ratios shift as plants uptake selectively (they absorb more of some nutrients than others)
- Beneficial minerals accumulate over time
- Pathogen load builds in older solution
- pH management becomes harder in old solution

In small systems (under 5 gallons), weekly changes are better. In large recirculating systems, you can often go 2 weeks.

**Between changes**: top off water loss with pH-adjusted plain water (not full nutrient solution) — plants drink more water than nutrients; EC naturally rises between changes.

### Calcium and Magnesium

Ca and Mg are commonly deficient in hydroponics because:
- Tap water that has been softened has had calcium/magnesium removed
- Reverse osmosis water has zero minerals
- Fast-growing plants in DWC uptake calcium quickly

If you're using RO water or seeing tip burn (lettuce) or blossom end rot (tomatoes), add a dedicated Cal-Mag supplement. General Hydroponics CALiMAGic and similar products are standard; add according to their chart before adding other nutrients.

---

## Reading Deficiency Symptoms

When something looks wrong, diagnosis order:

1. **Check pH first** — 80% of apparent deficiency symptoms are pH-caused lockout; fix pH before assuming you're missing a nutrient
2. **Check EC** — under or over-feeding
3. **Check reservoir age** — old solution loses balance
4. **Check root health** — brown, slimy roots = pythium (root rot); roots should be white or light tan

**Quick symptom guide**:
- Yellowing of *old* (lower) leaves first → nitrogen deficiency
- Yellowing *between veins* on old leaves → magnesium deficiency
- Yellowing of *new* (upper) leaves → iron deficiency (almost always a pH problem — iron locks out above 6.5)
- Brown leaf *tips* → nutrient burn (EC too high) or calcium deficiency
- Purple/dark undersides of leaves → phosphorus deficiency
- Wilting with healthy-looking solution → root rot; check roots

---

## Common Mistakes

**Not checking pH daily in small systems** — pH in a 5-gallon reservoir can shift 0.5–1.0 units in 24 hours; unchecked for a few days and you're outside the range for multiple nutrients

**Adding nutrients without checking tap water EC first** — adding a full dose of nutrients to 0.4 mS/cm tap water overshoots your target by 25%+

**Mixing concentrated nutrients together** — always dilute in water first; calcium and sulfate ions precipitate when concentrated solutions touch

**Treating symptoms without checking pH** — adding more calcium when the real problem is pH 7.0 locking out calcium that's already there

**Skipping reservoir changes** — solution chemistry drifts; old solution is harder to manage; fresh solution is the reset

---

## Connections

- [hydroponics.md](hydroponics.md) — overview including pH and EC basics; start there if this is your first hydro file
- [hydroponics-systems.md](hydroponics-systems.md) — nutrient management applies to all system types; the system determines how fast reservoir chemistry drifts
- [hydroponics-lighting.md](hydroponics-lighting.md) — light drives plant growth rate, which drives nutrient uptake rate; more light = faster EC and pH drift

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-03*
