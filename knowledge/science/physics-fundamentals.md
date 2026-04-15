# Physics Fundamentals
*The laws that govern how everything moves, stores energy, and transfers it — the physical layer beneath engineering, farming, energy systems, and the built world*

---

## What Is It

Physics is the study of matter, energy, and the forces that act between them. At its most fundamental: things move because forces act on them, energy is conserved as it changes form, and certain quantities (momentum, energy, charge) are never created or destroyed.

Physics divides into classical mechanics (how things move), thermodynamics (how energy flows and converts), waves (how energy propagates), and electromagnetism (forces between charges and moving currents). This file covers classical mechanics and thermodynamics at depth — the two domains with the most direct application to building, energy systems, and understanding the physical world. Waves and electromagnetism are flagged as sub-topics.

## Why It Matters

If you want to understand why solar panels have efficiency limits, why insulation works, why a lever multiplies force, why heat pumps move more energy than they consume, or why your home loses heat the way it does — that's physics. For Romi: every energy system decision (solar, battery, passive solar design, wood heat) has a physical mechanism behind it. Understanding that mechanism means you can evaluate claims, size systems, and troubleshoot failures rather than just following instructions.

## Core Concepts

### Forces and Motion (Classical Mechanics)

Newton's three laws describe motion with enough precision to send spacecraft to other planets:

**First law (Inertia)**: an object at rest stays at rest; an object in motion stays in motion at constant velocity — unless a net external force acts on it. Objects don't change their motion spontaneously. A mass on a frictionless surface will slide forever. The force required to *change* motion, not to maintain it, is the key insight.

**Second law (F = ma)**: force equals mass times acceleration. A 10 kg object and a 1 kg object accelerated the same way require 10× the force. Or: the same force applied to a 10× heavier object produces 1/10 the acceleration. This is why a car engine that can accelerate an empty car impressively feels sluggish when loaded — same force, more mass.

**Third law (Action-Reaction)**: every force has an equal and opposite reaction. When you push a wall, the wall pushes back on you with equal force. A rocket expels gas backward; the reaction pushes the rocket forward.

**Practical mechanics**: a lever, pulley, or inclined plane doesn't create force — it trades force for distance (or vice versa). A 2:1 lever lets you lift 200 lbs with 100 lbs of effort, but you must move the effort end twice as far as the load moves. Mechanical advantage is a force/distance trade, not free energy.

**Gravity**: a force between any two masses, proportional to each mass and inversely proportional to the square of the distance between them. Near Earth's surface, it simplifies to a constant: 9.8 m/s² downward acceleration for all objects regardless of mass (in the absence of air resistance). Air resistance is why a feather falls slower than a stone — not gravity.

### Energy, Work, and Power

**Work**: force applied over a distance. Lifting a 10 kg box 1 meter straight up requires about 98 joules of work (mass × gravity × height). If you do it in 1 second or 10 seconds, the work done is identical — time doesn't affect work.

**Power**: work per unit time. Doing 98 joules in 1 second is 98 watts. Doing the same 98 joules in 10 seconds is 9.8 watts. A 100-watt light bulb, left on for 10 hours, consumes 1 kilowatt-hour (kWh) — the unit on your electric bill.

**Forms of energy**:
- **Kinetic** (motion): ½mv². Doubling speed quadruples kinetic energy — why car crashes at 60 mph are 4× worse than at 30 mph.
- **Potential** (position in a force field): gravitational potential energy = mgh. Water in a reservoir has potential energy relative to the turbine below. Lifted weight has potential energy.
- **Thermal** (molecular motion): temperature measures the average kinetic energy of molecules. Hot things have faster-moving molecules.
- **Chemical** (bonds): food and fuel store energy in chemical bonds. Combustion and cellular respiration release it.
- **Electrical**: moving charges (current) carry energy. Solar panels convert electromagnetic radiation to electrical energy; batteries store it as chemical energy.

### Conservation Laws

Conservation laws are the most powerful ideas in physics: certain quantities are exactly preserved across all interactions.

**Conservation of energy**: energy is never created or destroyed — only converted between forms. Burning gasoline converts chemical energy to thermal and kinetic energy, with some wasted as heat (inefficiency). A solar panel converts electromagnetic radiation to electrical energy. Your body converts food (chemical) to mechanical work and heat. The total always balances.

**Conservation of momentum**: total momentum of an isolated system is constant. In a collision between two cars, the combined momentum before equals the combined momentum after. This is why a small car and a large truck have very different outcomes in a collision despite the same momentum change — the forces are equal and opposite, but F = ma means the same force decelerates the small car much faster.

**Why conservation laws matter**: they let you calculate outcomes without knowing every detail of the interaction. You don't need to model every molecule in a combustion engine to know that no engine can be more than 100% efficient — conservation of energy rules it out.

### Thermodynamics

Thermodynamics governs how heat moves and how it converts to work. Four laws underpin it:

**Zeroth law**: if A and B are each in thermal equilibrium with C, then A and B are in equilibrium with each other. This defines what temperature means — a consistent scale of "hotness" that determines the direction of heat flow.

**First law**: conservation of energy applied to heat. The heat added to a system equals the change in internal energy plus the work the system does. You can't get more work out of a heat engine than the energy you put in.

**Second law** (the deep one): heat flows spontaneously from hot to cold, never the reverse. More broadly: the entropy (disorder) of a closed system never decreases. You can convert work to heat with 100% efficiency (friction, resistive heating). You can never convert heat to work with 100% efficiency — some is always wasted.

**Why the second law matters for energy systems**:
- Every combustion engine (car, generator, coal plant) has a theoretical maximum efficiency called the Carnot efficiency: η = 1 − (T_cold/T_hot), where temperatures are in Kelvin. A coal plant with a boiler at 600°C (873K) exhausting to 30°C ambient (303K) has a maximum efficiency of 1 − 303/873 ≈ 65%. Real plants hit 35–45% due to further losses.
- Heat pumps and air conditioners move heat from cold to hot — which seems to violate the second law. They don't: you're doing *work* to drive the heat transfer, so the total entropy still increases. A heat pump can deliver 3–4 units of heat for every unit of electricity because it's moving heat, not generating it.
- **Insulation** slows heat transfer but doesn't stop it. The rate of heat loss through a wall is proportional to the temperature difference and inversely proportional to the insulation's thermal resistance (R-value). Double the R-value, halve the heat loss rate at the same temperature difference.

**Third law**: as temperature approaches absolute zero (−273.15°C), entropy approaches a minimum. Absolute zero is unreachable in practice.

**Thermal equilibrium in practice**: when you put a cold object in a warm room, heat flows from the room to the object until they reach the same temperature. The rate depends on the temperature difference and thermal conductivity. This is why a root cellar works — earth at constant 50°F moderates temperature swings; your 35°F food warms slowly and your 80°F summer air cools slowly.

## Key Considerations

**Efficiency is bounded, not arbitrary.** No engineering improvement can exceed the thermodynamic efficiency limit for a given temperature difference. When a company claims a device is "95% efficient," that's against a theoretical maximum — knowing the limit tells you how much room remains for improvement.

**Units and scale.** Physics lives in units. A joule is small (roughly the energy to lift an apple 10 cm). A kilowatt-hour is 3.6 million joules. A calorie (food) is 4,184 joules. Being comfortable converting between units lets you evaluate energy claims concretely: "our solar system produces 500 kWh per month" is interpretable if you know a typical NJ home uses 700–900 kWh/month.

**Models are approximations.** Newtonian mechanics is wrong at speeds near light and at quantum scales. It's extremely accurate at human scales. Using the right model for the right domain is the skill — classical mechanics for buildings and machines, quantum mechanics for electronics, relativity for GPS satellites (which actually requires relativistic corrections to stay accurate).

## Getting Started

1. **Read a physics-for-non-physicists book** (see Resources) rather than starting with a textbook. Build intuition before formalism.
2. **Apply to a concrete system you care about.** Size a solar system: look up your average monthly kWh usage, your roof's solar hours, panel wattage, and efficiency. The arithmetic is F = ma at a larger scale.
3. **Think in energy budgets.** When a home improvement decision comes up (insulation, heat pump, wood stove), estimate the energy flows: how much heat is lost, how much energy the system produces, what the efficiency limit is.

## Common Mistakes

**Confusing force and energy.** Force is what causes acceleration; energy is what gets stored and transferred. A structural beam under static load exerts force but does no work (no movement). Pushing a heavy box that doesn't move does no work in the physics sense even though it's exhausting.

**Assuming efficiency claims are unconstrained.** "More efficient" always has a ceiling given by thermodynamics. Useful to ask: what's the theoretical maximum, and how close is this device?

**Treating the second law as optional.** Perpetual motion machines, over-unity energy devices, and "free energy" schemes all claim to violate conservation of energy or the second law. They don't work. This is the most reliable filter for energy pseudoscience.

## Resources

- *The Feynman Lectures on Physics* — Richard Feynman. Available free online. Vol. 1 covers classical mechanics and thermodynamics with more intuition than any other source. Starts from first principles without dumbing down.
- *How Things Work: The Physics of Everyday Life* — Louis Bloomfield. Physics organized around familiar machines and phenomena. Best for building intuition about the physical world you interact with daily.
- *Sustainable Energy — Without the Hot Air* — David MacKay. Free online. Applies physics (especially energy budgets) to national-scale energy decisions. Teaches quantitative thinking about energy systems in a highly readable way.

## Connections

- [energy/solar-basics.md](../energy/solar-basics.md) — thermodynamics and efficiency limits applied to solar systems directly
- [science/basic-chemistry.md](basic-chemistry.md) — chemistry and physics overlap in thermochemistry; oxidation and combustion are both
- [science/ecology-basics.md](ecology-basics.md) — energy flow through ecosystems is applied thermodynamics (the 10% rule is a consequence of efficiency limits)
- [farming/soil-building.md](../farming/soil-building.md) — "carbon in soil is carbon out of atmosphere" and compost heat are physical/thermodynamic phenomena

## Proposed sub-topics
- *waves-and-oscillations* — wave mechanics, frequency, resonance, sound, light — connects to how antennas, musical instruments, and building acoustics work
- *electromagnetism-basics* — electric fields, circuits, magnetism, electromagnetic induction — the physics behind solar panels, motors, and home wiring

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-14*
