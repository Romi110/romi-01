# How Claude Works
*What Claude actually is under the hood — how it reasons, what it knows, where it fails, and how to use it well based on that*

---

## What Is It

Claude is a large language model (LLM) — a neural network trained to predict likely continuations of text. It's not a search engine, a database, a reasoning engine, or a person. It's a very large statistical model that has learned patterns from an enormous amount of human text, and those patterns let it do things that look like reasoning, writing, and understanding.

This file is about the actual mechanics — what's happening when Claude responds, what that means for how to use it, and where the model's structure creates specific failure modes you can work around.

## Why It Matters

Most people use Claude as if it were a search engine with better prose, or a person who might be uncertain about some facts. Neither framing is accurate, and both lead to using it wrong. Understanding what Claude actually is produces better prompts, better skepticism, and better outputs.

For Romi: Claude is a core tool in this system and a deep learning area. Understanding the mechanism is the same principle as understanding how soil works before farming or how the engine works before maintaining a car.

## Core Concepts

### What a Language Model Actually Is

A language model is trained to predict the next token (roughly: word or word-fragment) given all prior tokens. That's the core task. Nothing else.

The model is a neural network — billions of parameters (weights) trained by gradient descent on a massive text corpus. Training adjusts the weights until the model gets good at predicting what comes next in human text. After enough training on enough text, the model develops internal representations that generalize to new tasks — writing code, answering questions, summarizing documents — because those tasks are all expressible as text-completion problems.

**What this means in practice**: Claude doesn't look things up. It doesn't access the internet during inference (unless given a tool to do so). It generates responses by repeatedly predicting the most likely next token given the context. The output is determined by the weights (fixed after training) and the input prompt.

### Training vs. Inference

**Training**: The process of building the model. Anthropic ran large amounts of text through the neural network, computed prediction errors, and adjusted the weights to minimize those errors. This process also included reinforcement learning from human feedback (RLHF) — humans rated outputs and the model was fine-tuned to produce outputs humans prefer. Training is done; it doesn't happen during your conversation.

**Inference**: What happens when you send a message. The model takes your input, runs it through the network, and generates a response token by token. No learning occurs. The model's knowledge is frozen at its training cutoff. It doesn't update from your conversation (no memory across sessions unless explicitly provided).

**Knowledge cutoff**: Claude's training data has a cutoff date (currently around early 2025). It has no knowledge of events after that date. Asking about recent events produces either honest uncertainty or — more dangerously — plausible-sounding but fabricated responses.

### Context Window

The context window is the amount of text Claude can "see" at once during inference. Everything outside the context window is invisible — the model has no access to it.

**What's in the context**: your messages, Claude's previous messages in the session, any system prompt set by the application, and any files or text you've pasted in. The total token count of all this cannot exceed the context limit (currently 200,000 tokens for Claude — roughly 150,000 words).

**What happens at the limit**: either earlier parts of the conversation are dropped, or the request fails. This is why very long conversations can degrade — the model loses access to earlier context.

**Practical implications**:
- Long documents should be pasted in when they matter, not referenced abstractly
- Claude can't remember previous conversations (each new session starts with an empty context)
- In Claude Code (this environment), the system manages context and may compress earlier messages
- Quality of output degrades somewhat at the edges of very long contexts

**Context ≠ memory**: Claude appears to "remember" earlier in a conversation because that text is in the context window. It's not a memory system — it's just text the model can see. Once the session ends, that context is gone.

### How "Reasoning" Actually Works

Claude doesn't reason the way a human does — building an explicit logical chain and checking each step. It generates text that looks like reasoning because reasoning-shaped text was common in training data, and producing that kind of text was rewarded.

**What extended thinking / chain-of-thought does**: when Claude is asked to think step-by-step, or given space to reason before answering, the text it generates in the "thinking" phase becomes part of the context for the final answer. This genuinely improves accuracy on structured problems — not because Claude is reasoning more carefully, but because working through the problem in text creates a scaffold that leads to better token predictions.

**Implication**: for hard problems, prompts that ask Claude to show its work, break problems into steps, or explain reasoning produce better outputs than prompts that ask for a direct answer. The reasoning isn't internal — it's the text itself.

### What Claude Is Good At

**Synthesis and recombination**: Taking many pieces of information and producing something coherent — summaries, drafts, explanations. This is exactly what next-token prediction on vast text does well.

**Explaining things**: Claude has seen explanations of most topics from many angles. It can usually produce a clear, accurate explanation of a well-documented concept.

**Writing and editing**: Structure, tone, clarity — these are deeply embedded in training data. Claude produces high-quality prose, especially with constraints and examples.

**Code generation**: Source code was a large portion of training data. Claude understands common patterns, generates working code for standard tasks, explains what code does, and debugs known error types.

**Brainstorming and ideation**: Generating many plausible options quickly, even if you'll discard most of them.

**Applying frameworks**: If the framework is well-documented (Stoic philosophy, double-entry bookkeeping, REST API design), Claude applies it accurately.

### Where Claude Fails — Systematically

**Hallucination**: Claude generates plausible-sounding false information, particularly for:
- Specific facts (exact dates, statistics, citations)
- Less-documented topics (niche subjects, recent events)
- Anything that requires real-time lookup
- Details within generally accurate knowledge

The danger: hallucinated text looks exactly like accurate text. Claude doesn't express less confidence when it's wrong than when it's right. Always verify specific facts, citations, and numbers through primary sources.

**Math and formal reasoning**: Without a tool, Claude's arithmetic and multi-step calculations are unreliable. The model predicts likely-looking math text — which is usually right but wrong often enough to matter. For non-trivial calculations, use code execution.

**Consistency over very long contexts**: Coherence degrades across very long documents or conversations. Early commitments or constraints may be quietly dropped.

**Genuine novelty**: Claude recombines what it's seen. It's excellent at tasks where the answer exists in human text and it's synthesizing or applying it. It's much weaker at genuinely novel logical problems, unseen scientific territory, or situations requiring knowledge past its cutoff.

**Self-knowledge**: Claude cannot accurately introspect on what it knows versus doesn't know. Expressions of uncertainty ("I'm not sure, but...") are generated like any other text — they're not reliable signals that the following content is less accurate.

**Sycophancy**: Claude is trained to produce outputs humans rate highly. Humans tend to prefer text that agrees with them. This creates a tendency toward agreement, validation, and telling people what they want to hear — which the RLHF process has worked to reduce but not eliminated. If you want Claude's genuine assessment, explicitly ask it to push back or identify weaknesses.

### The RLHF Layer

After base training, Claude went through reinforcement learning from human feedback (RLHF) — human raters evaluated outputs and the model was fine-tuned to produce outputs humans prefer. This added: helpfulness, harm avoidance, honesty norms, and appropriate communication style.

RLHF is why Claude is more useful and safer than raw language model text. It's also why Claude has systematic tendencies — to be helpful, to avoid certain topics, to hedge when uncertain. These tendencies were rewarded by human raters, so they became embedded.

**Constitutional AI** (Anthropic's specific approach): Instead of human raters for everything, a set of principles ("the constitution") is used to evaluate outputs, with the model trained against those principles. This allows scaling safety training without proportional increases in human annotation.

### Using Claude Well — Based on How It Works

**Give context explicitly.** Claude only knows what's in the context window. If relevant background exists — your situation, your constraints, what you've already tried — include it. Don't assume Claude knows your history.

**Specify the output format.** The model generates text that looks like what was asked for. Specifying format (bullet list, numbered steps, table, markdown file with specific sections) produces structured, useful output.

**Ask for reasoning before the answer.** "Think through this step by step" or "explain your reasoning" produces better outputs on hard problems.

**Request pushback explicitly.** "What are the weaknesses in this plan?" or "argue against this" counteracts sycophancy.

**Verify facts and citations.** Treat any specific fact, number, or citation as unverified until you've checked it. This is especially true for recent events, niche topics, and exact statistics.

**Iterate, don't expect perfection.** The first output is a draft. Asking Claude to revise, narrow, expand, or reframe produces better outputs than expecting the first response to be final.

**Use code for calculations.** When precise computation matters, ask Claude to write code and run it (in Claude Code) rather than compute in prose.

## Key Considerations

**Claude is a tool, not an authority.** Its outputs are starting points — synthesized from human text, not derived from first principles. Use Claude to accelerate your thinking, not to replace it.

**The model doesn't "understand" in the human sense.** This isn't a limitation worth dwelling on philosophically — it's practically important because it means Claude can be confidently wrong in ways a human expert wouldn't be. A doctor who doesn't know something says "I don't know." Claude generates what a doctor would plausibly say.

**Prompts matter a lot.** Because Claude is predicting likely continuations of text, the framing of the input shapes the output significantly. A vague prompt produces vague output. A well-structured prompt with context and constraints produces useful output. Prompt engineering is real skill with real returns.

**New models improve on these limitations.** Extended thinking, tool use, and improved RLHF have addressed several failure modes from earlier models. The limitations in this file are current as of 2025 — expect them to shift.

## Getting Started

1. **Internalize the context window model.** Everything Claude knows about your situation is what you've told it in this session. Treat every new conversation as a blank slate — provide context you'd want a smart colleague to have.
2. **Get into the habit of verifying facts.** Especially citations, statistics, and recent events. The prose confidence of the output tells you nothing about accuracy.
3. **Try structured prompting.** Compare outputs from "tell me about X" vs. "I'm trying to [goal]. I know [relevant context]. Explain X in terms of [specific angle]. Focus on [constraint]. Format as [structure]."

## Common Mistakes

**Trusting the confidence.** Fluent, detailed, well-structured text is not a signal of accuracy. Claude generates fluent text about wrong things just as easily.

**Not providing context.** "Help me with this" with no background produces generic output. "I'm doing X, have done Y, need Z" produces targeted output.

**Treating the first response as final.** Iteration improves outputs dramatically.

**Using Claude for recent events without acknowledging the cutoff.** It will fill gaps with plausible-sounding but potentially fabricated content.

**Asking for opinions without asking for pushback.** You'll get validation. If you want critique, ask for it explicitly.

## Resources

- *Attention Is All You Need* — Vaswani et al. (2017). The original transformer paper. Dense, but reading the abstract and conclusion gives you the actual technical foundation. Available free on arxiv.
- Anthropic's model card and system prompt documentation — describes the RLHF and Constitutional AI training approach. More accessible than the technical papers.
- [prompt-engineering.md](../meta/prompt-engineering.md) — How to write effective prompts: structure, context, constraints, iteration. The practical skills built on this understanding.
- [claude-code-workflow.md](./claude-code-workflow.md) — Using Claude Code specifically as a development tool.

## Connections

- [vscode-claude-workflow.md](../meta/vscode-claude-workflow.md) — The VS Code extension workflow that this system uses. Knowing how Claude works makes that workflow more effective.
- [science/science-literacy.md](../science/science-literacy.md) — Evaluating Claude's outputs requires the same skills as evaluating any information source: what is the claim, how was it generated, what are the failure modes?
- [mind/mental-models.md](../mind/mental-models.md) — The map vs. territory model applies directly: Claude's outputs are maps of knowledge, not the territory itself. They're useful approximations that can be wrong.

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-04*
