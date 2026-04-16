# AI Job Market
*Where AI is creating work, where it's eliminating it, and how to read your own exposure.*

---

## What Is It

The AI job market is not a monolithic force that "takes jobs" or "creates jobs" — it's a restructuring. Specific tasks within roles are being automated; entire new role categories are being created. The net effect on employment is genuinely uncertain, but the distribution of who wins and loses is already visible.

This file maps the restructuring in concrete terms: which roles are compounding with AI, which are under pressure, and which skills are now baseline rather than differentiating.

## Why It Matters

You're a tech professional at 28. The choices you make now about where to specialize — which skills to deepen, which to let atrophy — will compound for the next 20 years. Getting the sector map right early is the highest-leverage move. Getting it wrong means training hard in the wrong direction.

## Core Concepts

### The Task-Based Frame

Don't think about which *jobs* AI replaces — think about which *tasks* within a job. A lawyer's job includes: legal research, brief writing, client communication, courtroom strategy, and negotiation. AI is good at the first two. The last three are harder to automate. So the lawyer's job changes shape, not disappears.

The underlying framework (Acemoglu & Autor's task-based model) is covered in [labor-economics.md](../../economics/labor-economics.md). The key update for AI: this round of automation reaches into *cognitive non-routine tasks* — legal research, code generation, writing, image generation — which previous automation didn't touch. The historical reassurance that "automation only replaces routine work" needs revising.

### Roles Under Pressure

High automation exposure — roles where AI handles 50–80%+ of the task content today:

- **Manual QA / test scripting**: AI generates tests, catches regressions. Head count shrinking; the role hasn't disappeared but new hiring has.
- **Routine content writing**: SEO articles, product descriptions, templated copy. Human-in-the-loop for brand voice; AI for volume.
- **Data entry and document processing**: Virtually automated. Roles that existed to extract and structure information from documents are going.
- **Junior research / literature review**: AI synthesizes sources at scale. Research assistants whose primary task was information gathering face real pressure.
- **Basic graphic design and image production**: Midjourney, DALL-E 3, and Firefly compressed the budget end of the market. Creative direction is not affected yet.
- **Routine financial analysis and reporting**: Pulling data, building standard reports, writing summaries — heavily automatable. Financial modeling with judgment is not.

What this doesn't mean: these roles won't disappear overnight. Organizations are slow to restructure. But *hiring into* these roles is harder, and career advancement within them depends on moving toward the non-automatable parts.

### Roles That Compound with AI

High AI leverage — roles where using AI tools multiplies output significantly:

- **Software engineers**: An engineer using Cursor and Claude effectively ships 2–3x more code than one who doesn't. The skill floor for entry-level work is rising (AI covers simple implementations), but the ceiling for senior engineers also rises. The shift is from "writing code" to "directing code generation, reviewing, architecting."
- **Product managers**: Research synthesis, spec drafting, user story generation — AI handles the grunt work. More time for decision-making and user insight.
- **Data scientists / ML engineers**: Data exploration, feature engineering boilerplate, statistical analysis — all faster with AI. The judgment layer (which question to ask, which model to trust) still requires a human.
- **Lawyers and paralegals with AI fluency**: Document review, research, contract drafting. Firms that adopt this bill fewer hours for the same work — clients win, old-guard firms resist.
- **Domain experts who can prompt**: A doctor who uses AI for literature search and differential generation is more effective, not replaced. The domain knowledge is the asset; AI is the research assistant.

The key pattern: roles where judgment, domain expertise, and interpersonal skill matter retain or increase their value. Roles that were primarily information-gathering or information-formatting face the most pressure.

### New Roles the AI Era Is Creating

Emerging role categories as of 2026:

- **AI/ML engineers**: Building, fine-tuning, and deploying models. High demand, not enough supply.
- **AI product managers**: Specifically for AI-native products — need to understand model behavior, latency, failure modes, hallucination. Different skill set than traditional PM.
- **AI evaluators and red teamers**: Testing model output quality, safety, and reliability at scale. Every enterprise deploying AI needs this.
- **LLMOps / AI operations**: The DevOps equivalent for AI systems — monitoring inference, managing model versions, observability pipelines for AI behavior.
- **Retrieval and data engineers**: The RAG stack requires people who can build and maintain document pipelines, vector databases, and search infrastructure.
- **Prompt engineers / AI systems designers**: Structuring how AI is applied within organizations. Likely absorbed into existing roles rather than staying standalone long-term.

### Skills That Are Now Table Stakes

Were differentiating 3 years ago; are baseline now for knowledge workers:

- **Prompt fluency**: Knowing how to get consistent, useful output from an LLM. Not optional for any knowledge worker.
- **AI tool integration in daily workflow**: Using Claude, Copilot, Perplexity, Cursor as natural extensions of existing tools.
- **Critical evaluation of AI output**: Knowing when to trust the model, when to verify, when to override. The skill that prevents the competent-looking but wrong output from going out the door.

Skills that are *newly* differentiating:

- **Building AI-powered tools**: Taking the API and building something — even internal tooling. See [building-with-claude-api.md](./building-with-claude-api.md).
- **Domain expertise + AI fluency combined**: Scarcer and more valuable than either alone.
- **Evaluation and quality judgment**: As AI generates more, the human value is increasingly in discernment — knowing what's good.

### Reading Your Own Exposure

Concrete diagnostic — map your current role's tasks into three buckets:

1. **Already automatable** (AI does this reasonably well today): reduce time investment here, don't specialize further
2. **AI-augmented** (AI helps but judgment still required): optimize with tools, invest in the judgment layer
3. **Non-automatable** (requires domain expertise, relationships, physical presence, or creative judgment): double down here

The goal isn't to fight automation — it's to move your own work toward bucket 3 while using AI to clear buckets 1 and 2 faster.

## Key Considerations

**The transition lag is real.** Even if a task is technically automatable, organizations take 2–5 years to restructure around it. This creates a window: people who adopt AI tools in currently-manual roles can dramatically increase output before the role itself is restructured away.

**Adjacency matters more than pivoting.** Moving from "manual QA" to "AI-assisted testing strategy" is achievable. Pivoting from "manual QA" to "ML engineer" is a years-long investment. Lateral moves within a domain are underrated.

**Credentials are decoupling from skill.** AI closes some skill gaps faster than formal education does. A developer who has used Claude Code intensively for 6 months may have a higher practical ceiling than one who spent that time in a bootcamp.

## Getting Started

1. **Run the three-bucket exercise** on your current role. Be honest about what you actually spend time on that AI can do.
2. **Read your sector's specific automation exposure.** Goldman Sachs's 2023 AI jobs report and McKinsey's automation assessments are worth reading — the direction holds even if specific numbers shift.
3. **Identify one skill in bucket 3** that you can deepen. That's where specialization investment returns most.
4. **Get one AI tool working in your daily workflow this week.** See [ai-productivity-stack.md](./ai-productivity-stack.md).

## Common Mistakes

**Waiting for certainty.** The job market is restructuring now. Waiting to see "how it plays out" means missing the window to move early.

**Pivoting entirely into AI roles.** Unless you have genuine ML background, pivoting to "AI engineer" is a multi-year project. The shorter path is becoming the most AI-fluent person in your current domain.

**Undervaluing domain expertise.** The hype says "anyone can use AI." True — but AI-fluent domain experts outperform AI-fluent generalists because they know when the model is wrong.

**Overvaluing prompt engineering as a standalone skill.** It's real and important, but it commoditizes fast. The durable skill is judgment + domain knowledge + AI fluency, not prompting alone.

## Resources

- *McKinsey Global Institute AI automation reports* — free on their site; the most rigorous sector-by-sector task-exposure analysis
- *Goldman Sachs "The Potentially Large Effects of Artificial Intelligence on Economic Growth" (2023)* — sector-level exposure estimates with real data; starts the conversation
- *The Work of Nations* — Robert Reich (1991) — dated but the symbolic analyst / in-person service worker framing maps cleanly onto AI exposure
- [labor-economics.md](../../economics/labor-economics.md) — task-based model and job polarization framework behind this file

## Connections

- [labor-economics.md](../../economics/labor-economics.md) — the task-based model and job polarization framework; automation history provides calibration for this round
- [ai-ecosystem.md](./ai-ecosystem.md) — understanding what current AI can do is the input to understanding which tasks it automates
- [finance/career-positioning-ai-era.md](../../finance/career-positioning-ai-era.md) — the strategic layer: how to position your career given this map
- [building-with-claude-api.md](./building-with-claude-api.md) — the skill that currently most differentiates engineers in the AI job market

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-15*
