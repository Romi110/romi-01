# Building AI Products
*How to scope, build, and ship AI-powered products without overengineering them.*

---

## What Is It

Building AI products means using AI models as a core component in software that solves a real problem — not just wrapping an API, but making deliberate decisions about what the model does, what it doesn't do, and how to handle its failure modes.

This file covers product judgment for AI: how to identify what's worth building, how to scope it, and what makes AI products fail beyond technical issues. The mechanics of calling the API are in [building-with-claude-api.md](./building-with-claude-api.md). This is the layer above that.

## Why It Matters

The technical barrier to building AI products is now low — a working prototype takes hours. The product barrier is where most projects die: building the wrong thing, scoping too broadly, not validating that AI behavior is actually good before building the full product. The failure mode is almost never "we couldn't call the API." It's "the AI output wasn't good enough" or "users didn't use it the way we expected."

## Core Concepts

### Problem Selection

The best AI products solve problems where:

**1. The bottleneck is speed or scale, not judgment.** If a human could do the task in 5 minutes but needs to do it 1,000 times, AI can handle the volume. If the task requires nuanced judgment that's hard to specify, AI will produce plausible-but-wrong output at scale.

**2. The output can be verified cheaply.** Legal research: a lawyer can spot-check. Transcription: you can read the transcript. Code generation: you can run it. Medical diagnosis: a doctor needs to validate everything. Products where verification is as hard as the original task have a fundamental problem.

**3. The error cost is bounded.** AI will be wrong some percentage of the time. That percentage matters less if the error is easily caught and fixed. It matters a lot if the error is silent, expensive, or irreversible.

**4. The user has context to prompt effectively (or the product handles this).** Products that put raw LLM interfaces in front of users who don't know how to prompt produce frustrating experiences. Either the product handles the prompting internally via a structured interface, or the user needs to be sophisticated enough to prompt well.

Anti-patterns in problem selection:
- Building AI for a problem where a simple rule or lookup table would work
- Building AI for a problem requiring deep contextual knowledge the model doesn't have
- Building AI for a problem where the failure mode is catastrophic (safety-critical, irreversible)

### Prompt vs. Code: Where to Draw the Line

Every feature in an AI product involves a decision: handle this in the prompt or in code?

**In the prompt:**
- Tone, style, format constraints
- Task framing and role definition
- Output structure (JSON schema, numbered lists, specific sections)
- Simple conditional behavior ("if the user asks about X, focus on Y")

**In code:**
- Input validation and sanitization
- Routing logic between multiple prompts or models
- Error handling and fallbacks when the model fails or produces unexpected output
- Parsing and validating structured output before processing it
- Any security-critical logic — never trust the model with auth decisions

The rule: if it's business logic, it goes in code. If it's style or framing, it can go in the prompt. Putting too much logic in the prompt makes the system fragile — prompt changes have unpredictable side effects.

### RAG vs. Fine-Tuning vs. Vanilla API

Three patterns for domain-specific behavior. The concepts are covered in [ai-ecosystem.md](./ai-ecosystem.md) — this is the product decision layer:

**Vanilla API** (call the model with your prompt): sufficient for most products. The model has broad knowledge; a good system prompt gets you most of what you need. Start here.

**RAG** (retrieval-augmented generation): when your product needs current, private, or highly specific information the model doesn't have. User asks a question → your system retrieves relevant documents → those go in the context → model answers. Best for: knowledge bases, documentation Q&A, anything requiring your specific data.

**Fine-tuning**: training the model on your data to change its baseline behavior. Use when you need consistent style or format across all outputs, specific domain vocabulary the model doesn't know well, or lower cost on a narrow task (smaller fine-tuned model beats larger general model). Do not fine-tune to add knowledge — RAG does this better and is cheaper to update.

The progression: start with vanilla API. If the model doesn't have the information it needs, add RAG. If style or format consistency is the problem and prompting isn't solving it, consider fine-tuning. Fine-tuning is rarely the right first step.

### MVP Scope

Most AI products fail because of over-scoping. The AI capability is interesting; the product scope balloons.

**The minimal AI MVP:**
- One user problem
- One model call
- One output format
- Get something in front of real users

The second version adds the wrapper — UI, auth, persistence, billing. The first version proves the AI behavior is actually useful. You cannot know if the model produces good output for your use case until you test it with real examples, not synthetic ones.

**Prompts are the product in MVP stage.** Before building the UI, validate the prompt. Get 20 real examples of input and output and see if the output is good. If it's not, no amount of UI polish saves the product.

### Handling AI Failure Modes

AI products fail in specific, predictable ways. Build for them from the start:

**Hallucination**: the model states false information confidently. Mitigations: constrain the model to source documents (RAG), ask for citations, design UX to show uncertainty, build verification into the workflow.

**Format failure**: the model doesn't output the structure you expected. Mitigations: parse defensively, validate output against a schema before processing, use tools/function calling for structured output instead of hoping the model formats JSON correctly.

**Prompt injection**: user input that manipulates system prompt behavior. If users can submit input that goes into your prompt, they can hijack the model's behavior. Mitigations: sanitize user input, separate system instructions from user content clearly, never trust model output for security decisions.

**Latency**: models are slow relative to normal API calls. Haiku and Gemini Flash are fastest; Opus is slowest. Stream responses for user-facing applications. Precompute where possible. Don't block the UI waiting on model response.

**Cost at scale**: per-call costs are low; at high volume, they matter. Profile your actual cost per user action. Right-size your model — Haiku for classification and simple extraction, Sonnet for generation, Opus only when the task requires it.

### What Makes a Product Defensible

There's a spectrum between a fully custom AI product and a heavily configured off-the-shelf tool:

**Configured tools** (Notion AI, ChatGPT team, etc.): low build cost, limited differentiation. Right for internal productivity, not a product.

**Lightly wrapped API products**: a UI around an LLM with a specific system prompt and UX. Fast to build. Most "AI startups" of 2023–2024 were this. The differentiation is shallow if anyone can replicate your prompt.

**Deeply integrated products**: AI embedded in a workflow with proprietary data, feedback loops, and distribution advantages. This is where durable businesses are built.

For side projects and early-stage products, the lightly wrapped product is fine to start — but know what your defensibility actually is. If it's just the prompt, plan for competition.

## Key Considerations

**Evaluation is the underrated skill.** You can build the AI logic in a day. Knowing if it's working — consistently, across edge cases, at the quality bar you need — takes sustained effort. Build an eval set (20+ real examples with expected outputs) before shipping to users. Run new prompts against it before deploying. This is the practice that separates AI products that stay good from those that degrade silently.

**User-facing AI requires different UX patterns.** Users don't know what to expect from AI output. Show uncertainty when it exists. Let users correct mistakes easily. Don't present AI output as authoritative when it isn't.

**Data compounds.** AI products that become durable have proprietary data — user behavior, corrections, domain-specific examples — that makes their model behavior better over time. Think early about what data your product generates and whether you're capturing it.

## Getting Started

1. **Pick one problem you personally experience** that fits the selection criteria above. Don't build for a hypothetical user.
2. **Write a prompt that solves it.** No code yet. Test it manually with 10 real examples.
3. **If the prompt works, build the minimal wrapper.** A script that takes an input, calls the API, and returns the output. Not a UI.
4. **Show 5 people the output.** Not the product — just show them inputs and outputs and ask if it's useful.
5. Only then, build the product.

## Common Mistakes

**Skipping prompt validation.** Building a UI before knowing if the AI does what you need. The reverse is always cheaper.

**Building general AI tools.** "An AI that helps you be more productive" is not a product. Narrow wins. What specific task, for what specific user, in what specific context?

**Ignoring latency from day one.** A 5-second response time feels fine in a demo. It kills user experience in production. Streaming + fast models solves most of this — know which you're using.

**Using the model for logic it shouldn't control.** Auth, permissions, pricing, routing — these go in code, not in prompts. The model is not a reliable rule-enforcer for business logic.

**Treating "AI product" as a genre.** AI is a component. The product still needs a real problem, real users, and real differentiation. Adding AI doesn't create those.

## Resources

- **Anthropic Cookbook** (github.com/anthropics/anthropic-cookbook) — working code patterns for common AI product primitives: RAG, tool use, structured output, agents
- *Eugene Yan's blog* (eugeneyan.com) — the best writing on practical ML/LLM product development and evaluation design
- **"Emerging Architectures for LLM Applications"** — a16z blog post; the best overview of how AI products are actually being built architecturally

## Connections

- [building-with-claude-api.md](./building-with-claude-api.md) — the implementation layer: messages endpoint, tool use, agent patterns, cost management
- [ai-ecosystem.md](./ai-ecosystem.md) — RAG, fine-tuning, and model selection; don't duplicate what's here
- [side-projects-to-income.md](../../finance/side-projects-to-income.md) — the income model for productized AI services
- [ai-job-market.md](./ai-job-market.md) — the market context for what AI products are valuable and who's building them

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-15*
