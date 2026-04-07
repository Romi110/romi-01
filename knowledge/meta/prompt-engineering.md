# Prompt Engineering
*Writing instructions that get the output you actually want from an LLM.*

---

## What Is It

Prompt engineering is the practice of writing inputs to a language model in a way that reliably produces useful outputs. It's not magic — it's communication design. The model has no memory of you, no idea what you actually want, and no ability to ask clarifying questions unless you build that in. Your prompt is everything the model has to work with.

A good prompt is explicit about role, context, task, format, and constraints. A bad prompt is one that assumes the model will guess what you meant.

## Why It Matters

You use Claude daily — for learning, writing knowledge files, building workflows, refining Roma. The difference between a prompt that produces a useful knowledge file in one pass and one that produces a generic article that needs heavy editing is almost entirely in how you wrote the instruction. Prompt engineering is leverage: 10 minutes learning it saves hours of rework.

It also keeps you in control. When a model drifts — becomes too verbose, too formal, too hedging — that's usually a prompt problem. Knowing how to fix it means you're never at the mercy of default behavior.

## Core Concepts

### Role and Context

The model responds differently depending on who it thinks it's talking to and what it thinks the situation is. Setting this explicitly changes output quality.

- **Role**: "You are a Stoic philosopher" vs. no role — different tone, different framing
- **Context**: Who is asking, what do they already know, what will this be used for
- **Constraint on defaults**: LLMs default to being verbose, hedging, and generic unless told otherwise

Example: `Write as a practical tradesperson explaining this to someone with no background but high intelligence.` — this produces concrete, direct prose instead of textbook language.

### Task Specificity

Vague tasks produce vague outputs. The more precisely you describe what you want, the closer the first draft is to what you need.

Weak: `Tell me about stoicism`
Strong: `Explain the Stoic concept of the dichotomy of control. Use one concrete modern example. Keep it under 200 words.`

The second prompt has a topic, a constraint, a deliverable, and a length cap. It takes 15 seconds more to write and saves 5 minutes of editing.

### Format Instructions

Models default to whatever format they're trained to produce — often markdown with headers, bullet points, and bold text everywhere. If you want something different, say so.

- `No bullet points — write in prose.`
- `Use a table.`
- `Give me the answer first, then explain.`
- `Three sentences maximum.`

Format instructions also constrain the model's tendency to hedge and pad: `Skip caveats and disclaimers. Be direct.`

### Constraints

Constraints narrow the search space. Without them, the model explores the full range of possible responses, which often means generic.

Types of constraints:
- **Length**: `Under 100 words`, `3 paragraphs`, `one sentence`
- **Audience**: `For someone who knows Python but not Go`
- **Tone**: `Blunt and direct`, `like Marcus Aurelius`, `no corporate language`
- **Scope**: `Only cover the first two years`, `focus on the practical not the theoretical`
- **Exclusion**: `Don't mention X`, `skip the history, go straight to application`

### Iteration

A prompt is rarely perfect on the first try. Treat it like a function you're debugging. When output is wrong:
1. Identify which part failed — wrong tone, wrong scope, wrong format, wrong depth
2. Add one constraint that addresses it
3. Re-run

Good prompts are built, not written once. The prompts in `prompts/` in this repo exist because they were iterated until reliable.

### Chain of Thought

For reasoning tasks, asking the model to "think step by step" before giving an answer produces better results. The model works better when it shows its work.

`Think through this carefully before answering: [question]`

This matters most for multi-step logic, math, or any task where intermediate reasoning affects the final answer.

### Few-Shot Examples

When you want output in a very specific format, showing one or two examples is more reliable than describing the format.

`Here are two examples of the format I want: [example 1] / [example 2]. Now do this: [task]`

The model pattern-matches off examples. This is especially useful for structured outputs — reports, summaries, entries in a consistent format.

### System Prompts vs. User Prompts

In most LLM interfaces there's a distinction between:
- **System prompt**: background context, rules, persona — set once, applies to the whole conversation
- **User prompt**: the specific request in this turn

In Claude Code, CLAUDE.md functions as a persistent system prompt. The instructions there (tone, structure, what to check first) apply to every message. That's why CLAUDE.md is kept tight and specific — it's always being read.

## Key Considerations

**Longer is not better.** A long prompt that adds irrelevant context can hurt as much as help. The model weighs everything — garbage in, garbage out. Keep prompts tight.

**Context window position matters.** In very long contexts, instructions buried in the middle receive less weight than instructions at the start or end. Critical constraints belong near the end of the prompt, close to where the model starts generating.

**Temperature affects creativity vs. reliability.** Higher temperature = more creative, less predictable. For tasks needing consistent structure (like filling out a knowledge file template), lower temperature is better. Most interfaces default to something reasonable.

**Hallucination is a prompt problem (partially).** Asking for citations, specific dates, or obscure facts invites fabrication. Constrain the domain: `Only use information you're confident about. If you're uncertain, say so.`

**Model knowledge has a cutoff.** For anything recent, prompting for "what exists" is unreliable. Prompt for reasoning, frameworks, and general principles — not current facts.

## Getting Started

1. **Write one bad prompt, then improve it.** Take something you've already asked Claude and rewrite the prompt with: explicit role, a constraint on length, one format instruction, and one exclusion. Compare outputs.

2. **Build a personal prompt library.** The `prompts/` folder in this repo already does this. When you find a prompt pattern that works, save it. Reusable prompts compound.

3. **Learn the levers.** Role → Context → Task → Format → Constraints. Practice adding each one deliberately.

4. **Read one existing prompt file end-to-end.** `prompts/deep-dive.md` is a well-structured example of a system prompt. Notice how it handles format, tone, context, and fallback behavior.

## Common Mistakes

**Assuming the model knows your context.** It doesn't. It knows what's in the prompt and its training. State everything relevant.

**Under-specifying format.** Default LLM format is verbose markdown. If that's not what you want, say so explicitly every time.

**Over-specifying everything.** Writing a 500-word prompt for a 50-word task is its own failure. Match prompt complexity to task complexity.

**Prompting for facts about recent events.** The model will produce something confident-sounding. It may be wrong. Constrain to reasoning and frameworks for anything post-cutoff.

**Not iterating.** Treating the first output as final. The first draft is a starting point; what's wrong with it tells you what to add to the prompt.

**Vague correction.** Saying "make it better" in a follow-up. Better at what? Shorter? Less formal? More concrete? Be specific.

## Resources

- **"Prompt Engineering Guide"** (promptingguide.ai) — comprehensive technical reference; useful for chain-of-thought, few-shot, and advanced techniques
- **Anthropic's prompt engineering docs** (docs.anthropic.com/prompts) — Claude-specific guidance; covers system prompts, XML tags, and Claude's particular behaviors
- **"Building LLM Applications"** by Chip Huyen — covers prompt design as part of a broader production context; useful if you move toward building with the API

## Connections

- [how-claude-works.md](../tech/ai/how-claude-works.md) — understanding the transformer architecture explains *why* prompts work the way they do: context window, attention, why position matters
- [vscode-claude-workflow.md](../meta/vscode-claude-workflow.md) — where prompt engineering meets daily practice; CLAUDE.md is a persistent prompt
- [building-with-claude-api.md](../tech/ai/building-with-claude-api.md) — when prompts become code: system prompts, multi-turn, and tool use in the API

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-06*
