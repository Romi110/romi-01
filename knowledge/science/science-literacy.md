# Science Literacy
*How to read and evaluate scientific claims — what the evidence actually shows vs. what headlines say it shows*

---

## What Is It

Science literacy is the ability to read a study, evaluate its quality, understand what it does and doesn't prove, and apply that assessment to real decisions. It's not about knowing chemistry or biology — it's about understanding how evidence is generated, what its limits are, and how it gets distorted between the lab and the headline.

The gap between what a study says and what a journalist reports it says is often enormous. The gap between what a study says and what it proves is almost always significant. Science literacy closes that gap.

## Why It Matters

Every health decision, every financial decision, and every technology decision is now informed by a constant stream of scientific-sounding claims. "Studies show coffee reduces cancer risk." "New research suggests intermittent fasting reverses aging." "Experts say X is safe / dangerous / necessary." Most of these claims are based on real studies — they're just being described in ways that strip away the caveats that make them meaningful.

For Romi: health decisions (nutrition, training, fasting), farming decisions (soil science, pesticides, yields), and self-reliance decisions (what "studies show" about preparedness, water quality, etc.) all require this skill. The alternative is outsourcing your judgment to whoever wrote the article, which means your beliefs are shaped by whoever had the most compelling headline.

## Core Concepts

### Study Types — Not All Evidence Is Equal

A hierarchy of evidence exists. Not because some research is fraudulent, but because different study designs control for different sources of error.

**Randomized Controlled Trial (RCT)** — the gold standard for establishing causation. Participants are randomly assigned to treatment or control groups. Randomization eliminates selection bias (the tendency for people who choose a treatment to differ from those who don't). RCTs are expensive and often short-term, which limits what can be studied.

**Systematic Review / Meta-Analysis** — combines data across many studies of the same question to reach a pooled conclusion. The highest evidence tier when done well. Watch for: cherry-picking studies, combining incomparable populations, and publication bias inflating the pooled effect.

**Cohort study (prospective or retrospective)** — follows a group over time to see who develops a condition. Observational, not experimental — can show correlation but not prove causation. "People who eat red meat have higher heart disease rates" is a cohort finding; it doesn't prove the meat caused the disease.

**Case-control study** — compares people who have a condition to those who don't, looking backward at exposures. Prone to recall bias (people with disease remember exposures differently) and confounding.

**Cross-sectional study** — snapshot in time. Good for describing populations; essentially useless for causation.

**Case report / expert opinion** — lowest tier. Describes one patient or summarizes an expert's view. Generates hypotheses; doesn't test them.

**The key question**: what kind of study is this, and what can that study design actually prove?

### Correlation vs. Causation

The most commonly violated distinction in science journalism. A correlation means two variables move together. Causation means one variable changes the other.

Ice cream sales and drowning rates both peak in summer. They're correlated. Ice cream does not cause drowning — summer causes both.

Establishing causation requires:
1. Correlation (necessary but not sufficient)
2. Temporal sequence (cause precedes effect)
3. Plausible mechanism (a reason why A would cause B)
4. Ruling out confounders (other variables that explain the relationship)

RCTs rule out confounders by randomizing. Observational studies try to control for confounders statistically, but this only works for confounders researchers thought to measure. Unknown confounders can explain apparent causal relationships in observational data.

When a headline says "X linked to Y" or "X associated with Y" — that's a correlation claim, not a causal claim. When it says "X causes Y" based on an observational study, that's an overclaim.

### P-Values and Statistical Significance

A p-value is the probability of observing the study result (or a more extreme one) if the null hypothesis (no effect) were true. Conventionally, p < 0.05 is called "statistically significant."

What p < 0.05 means: if there were truly no effect, there'd be less than a 5% chance of seeing a result this large by random chance.

What p < 0.05 does not mean:
- The result is definitely true
- The effect is large or meaningful
- The study will replicate
- You should change your behavior

**The replication crisis**: a systematic effort to replicate published psychology and social science findings found that only ~50% reproduced. Fields with higher p-hacking rates, smaller samples, and more researcher degrees of freedom had the worst replication rates. Nutrition research has similar problems.

**p-hacking**: running multiple analyses until one hits p < 0.05, then reporting only that one. Easy to do accidentally or deliberately. Pre-registration (publishing the study design before collecting data) is the main guard against it.

**Statistical vs. practical significance**: a study with 50,000 participants might find a statistically significant result with a negligibly small effect. Large samples make it easy to detect effects too small to matter. Always ask: how large is the effect?

### Effect Size — the Number That Actually Matters

Statistical significance tells you whether an effect is probably real. Effect size tells you whether it's worth caring about.

Common measures:
- **Absolute risk reduction (ARR)**: the actual percentage point difference. A drug that reduces heart attack rate from 4% to 3% has an ARR of 1%.
- **Relative risk reduction (RRR)**: the percentage improvement relative to the baseline. The same drug has an RRR of 25% (1% out of 4%). Headlines use RRR; you need ARR to evaluate relevance.
- **Number needed to treat (NNT)**: how many people need to receive a treatment for one person to benefit. If ARR is 1%, NNT is 100 — treat 100 people to help 1. Is that worth the cost/risk?
- **Cohen's d**: standardized effect size for continuous outcomes. d = 0.2 is small, 0.5 medium, 0.8 large.

**The relative risk trap**: "Drug X reduces cancer risk by 50%!" If baseline risk is 0.2%, a 50% reduction takes it to 0.1%. The absolute risk change is 0.1 percentage points. Knowing the baseline rate is essential for evaluating any relative risk claim.

### Confounding

A confounder is a third variable that is associated with both the exposure and the outcome, creating an apparent relationship that doesn't reflect a causal mechanism.

Classic example: higher shoe size is correlated with better reading ability in children. Confounder: age. Older children have larger feet and read better. Shoe size doesn't cause reading ability.

**Healthy user bias**: people who take vitamins also tend to exercise more, eat better, smoke less, and have higher income. Observational studies of vitamin supplements often show benefits that disappear in RCTs because the RCTs control for the healthy behaviors that were the real cause.

**Residual confounding**: even after controlling for known confounders, unmeasured ones remain. Observational studies cannot fully eliminate confounding — this is the fundamental limitation of the design.

### Publication Bias

Studies with positive results (treatment works) are more likely to be published than studies with null results (treatment makes no difference). This skews the published literature toward apparent effects.

The result: for any given intervention, the published evidence is systematically more positive than the truth. Meta-analyses built on published studies inherit this bias.

**Funnel plot asymmetry** is a statistical test for publication bias in meta-analyses. If small studies have only positive results (the ones most susceptible to publication bias), the funnel is asymmetric. A symmetric funnel suggests less bias.

**Pre-registration** (clinicaltrials.gov for medical research) helps. When researchers register their study design and hypothesis before collecting data, the publication becomes traceable — null results can be audited for missing publications.

### Reading a Study Abstract

Most people only read abstracts. A checklist for abstracts:

1. **Study type?** RCT, cohort, cross-sectional? What does that type let the authors prove?
2. **Sample size?** Underpowered studies (small N) produce unreliable estimates even with significant p-values.
3. **Population?** Lab mice, healthy 25-year-olds, elderly hospital patients — effect may not generalize to you.
4. **Outcome?** Surrogate outcomes (LDL levels, tumor markers) vs. hard outcomes (heart attack, death, quality of life). Surrogate outcomes don't always translate to hard outcomes.
5. **Effect size?** Absolute or relative? How large is it in practical terms?
6. **Who funded it?** Industry-funded studies find favorable results at significantly higher rates than independent studies for the same interventions.
7. **Does the conclusion match the data?** Authors sometimes overclaim in the conclusion relative to what the data actually shows.

### Spotting Bad Science in Media

Common distortions between study and headline:

- **Correlation reported as causation**: "eating X linked to Y" becomes "eating X causes Y"
- **Relative risk without baseline**: "reduces risk by 30%" without mentioning baseline risk is 0.5%
- **Mouse study reported as human evidence**: especially common in nutrition and cancer research
- **Single study reported as settled science**: one study, even a well-done RCT, is provisional
- **Industry-funded research**: not automatically wrong, but requires scrutiny
- **Expert consensus conflated with individual study**: "experts say" often means one scientist or one paper, not a field consensus
- **"Significant" meaning important**: in headlines, "significant" almost always means "statistically significant," which says nothing about practical importance

## Key Considerations

**Consensus vs. individual studies.** For questions with many studies (vaccine safety, climate change, dietary fat and heart disease), the relevant question is what the weight of evidence shows — not whether you can find a contradictory study. For any well-studied question, you can find one study pointing in any direction. The consensus, built on the full body of literature, is more reliable than any individual paper.

**Domain matters.** Physics and chemistry have extremely high replication rates. Psychology, nutrition, and social science have poor replication rates. This reflects study design difficulty, sample sizes, and incentive structures — not fraud. Apply more skepticism to findings in low-replication domains.

**Nutritional epidemiology is especially weak.** Food frequency questionnaires (asking people to recall what they ate over the past year) are unreliable. Randomized dietary trials are very hard to run. Confounding in diet studies is extreme (healthy behaviors cluster together). Most nutrition "findings" are much weaker than they're reported. The general picture (variety, vegetables, whole foods, not too much) is robust; specific claims about individual foods usually aren't.

**Risk tolerance and base rates matter.** Even if a study is perfectly valid, whether to act on it depends on your personal baseline risk, the costs and side effects of the intervention, and what else you'd have to change. Science can tell you what works on average; it can't tell you what's right for your specific situation.

## Getting Started

For evaluating any health or scientific claim you encounter:

1. Find the original study (not just the article about it). PubMed is free for abstracts; many papers are freely available.
2. Note the study type. What can this design prove?
3. Find the actual numbers: sample size, effect size in absolute terms, p-value.
4. Ask: who is this population, and am I like them?
5. Ask: who funded this, and is there a conflict of interest?
6. Ask: has this been replicated?

You won't do this for every headline. But for claims that would change your behavior — a supplement, a dietary change, a medical decision — it's worth 20 minutes.

## Common Mistakes

**Treating a single study as proof.** Science advances through accumulated evidence across independent studies. One study, however well-done, is a data point.

**Ignoring base rates.** A 50% risk reduction is meaningless without knowing the starting risk. Always find the baseline.

**Trusting observational nutrition studies.** They generate hypotheses worth testing; they're not evidence of causation. The supplement and "superfood" industries are built on misinterpreted observational data.

**Assuming peer review guarantees quality.** Peer review catches some errors and improves manuscripts. It doesn't guarantee validity, replication, or absence of fraud. The replication crisis happened in peer-reviewed journals.

**Using "scientists disagree" to dismiss consensus.** Scientists always disagree about details. What matters is the weight of evidence. A 97% consensus on a well-studied question with a small minority dissenting is not the same as genuine scientific uncertainty.

## Resources

- *The Demon-Haunted World* — Carl Sagan. The foundational text on scientific thinking and skepticism. Introduces the "baloney detection kit" — a set of questions to apply to any extraordinary claim.
- *Bad Science* — Ben Goldacre. Specifically focused on medicine and nutrition. Readable, specific, and damning about how pharmaceutical companies and media distort evidence. Best practical guide to the topics in this file.
- *Calling Bullshit* — Carl Bergstrom & Jevin West. Covers statistical manipulation, misleading visualizations, and how quantitative claims are used to mislead. More current than Sagan.
- PubMed (pubmed.ncbi.nlm.nih.gov) — the search engine for biomedical literature. Free access to abstracts; many full papers are available.

## Connections

- [mind/mental-models.md](../mind/mental-models.md) — Survivorship bias, confirmation bias, and the map vs. territory model all apply directly to how scientific evidence gets distorted and misread.
- [history/history-mental-models.md](../history/history-mental-models.md) — The history of scientific consensus being wrong (bloodletting, lobotomies) is worth knowing — but so is the history of minority scientific views being wrong despite feeling contrarian and correct.
- [health/nutrition.md](../health/nutrition.md) — Nutritional epidemiology is the domain where these literacy skills most often matter in daily life.

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-04*
