# AI Productivity Stack
*Integrating AI tools into a daily professional workflow: what to use, when, and how to make it compound.*

---

## What Is It

An AI productivity stack is the set of tools and habits you use to get AI leverage in your daily work. It's not about having every tool — it's about having the right tools working together without friction.

This file covers the major tool categories, what they're actually good for, and how to build a workflow where they compound rather than add noise.

## Why It Matters

The gap between someone who uses AI well and someone who uses it casually is already large and widening. It's not about which tools you have — it's about habits: knowing which tool to reach for, keeping context lean, not breaking flow by switching tools constantly.

As a tech professional using Claude Code daily, you're already ahead of most. The question is whether you're leaving leverage on the table in the other parts of your work — research, writing, planning, communication.

## Core Concepts

### The Three Categories of AI Work

Before building the stack, map which type of work you're doing:

**Generation** — creating from scratch: code, drafts, plans, summaries. This is where most people start with AI and where raw output quality matters most.

**Research and retrieval** — finding, synthesizing, and understanding information. AI accelerates this by reading faster, connecting sources, and answering questions without requiring you to dig through 12 tabs.

**Iteration and judgment** — taking existing work and improving it: editing, debugging, reviewing, challenging assumptions. Often the highest-leverage use because your judgment guides the AI's improvements.

### The Core Tools

**Claude** — for generation, long-context tasks, and anything requiring reasoning. Your primary tool. Best for: writing, complex analysis, systems thinking, code review, anything requiring nuance. Claude Code is its own system covered in [claude-code-workflow.md](./claude-code-workflow.md).

**Cursor** — AI-native code editor. Built on VS Code with deep model integration — Cursor reads your codebase, not just the current file. Autocomplete at every keystroke, natural language code editing, chat that knows your project context. This is the tool that changes how you write code day-to-day. Covered in depth in [coding-with-ai.md](./coding-with-ai.md).

**Perplexity** — AI-powered search. Unlike ChatGPT's search mode, Perplexity is built ground-up for real-time retrieval with citation. Use it instead of Google for anything where you need a synthesized answer rather than a page to click through. Best for: research starting points, fact-checking claims, recent technical information outside a model's training window.

**Notion AI** — if Notion is already your operating system, the AI integration is the most natural place for writing assistance and note synthesis. Summarize a long doc, draft action items from meeting notes, rewrite sections, ask questions about content you've captured. Don't add it just for the AI features if Notion isn't already your tool.

**ChatGPT / GPT-4o** — the fallback and comparison model. For some tasks, GPT-4o is better (DALL-E image generation, specific plugins, browsing). Worth having access to as a second opinion. Not a daily primary if you're already on Claude.

**Midjourney or DALL-E 3** — image generation. Relevant if visual work (thumbnails, illustrations, mood boards) is part of your workflow. Midjourney 6 produces higher quality; DALL-E 3 is built into ChatGPT for lower friction.

### Workflow Integration Patterns

**Parallel drafting**: Before writing anything from scratch, have AI produce a draft first — then edit. An 80% draft in 30 seconds edited to 95% is faster than starting at 0%. Works for emails, docs, PRDs, and code.

**Research-then-verify**: Use Perplexity for fast synthesis, then verify claims you'll act on. Perplexity cites sources — follow the citation for anything that matters. Never trust AI on facts where being wrong has cost.

**AI as first reviewer**: Before asking a human to review something, run it through Claude. "What's weak about this argument?" or "What am I missing?" catches easy problems without burning someone else's time.

**Context loading**: For recurring tasks, write a short context block once and paste it at the start of conversations. The model doesn't remember last session; you control what it knows. For complex ongoing work, this context block becomes a standing document you update.

**Tool chaining**: Some workflows chain tools — Perplexity for research → Claude for synthesis → Cursor for implementation. Know when a task crosses a boundary and which tool handles it better.

### When Not to Use AI

**When accuracy is critical**: Don't use AI to generate facts, statistics, or legal/medical specifics without verification. AI is confidently wrong often enough to make fact-dependent work risky without review.

**When the thing you're learning is the point**: Using AI to solve a problem you're trying to understand short-circuits the learning. Know when you want the answer vs. when you want to understand it.

**When your specific context matters too much**: AI doesn't know your codebase relationships, your team's communication norms, your client's quirks. It produces plausible generic output. Your judgment is the delta.

**When the task takes 30 seconds manually**: AI adds latency. For a fast task, prompting costs more than doing it. Know where the breakeven is.

### Building Habits That Stick

The trap: adding tools and not changing habits. Five tools each used once a week aren't a stack — they're overhead.

The pattern that works: one tool deeply before adding another. Claude is your primary. If you're not squeezing maximum leverage out of Claude, adding Perplexity and Cursor won't compound — they'll fragment attention.

**Weekly review question**: What did I spend time on this week that AI could have done 80% of? That's where the next tool or habit goes.

## Key Considerations

**Privacy in professional context**: Don't paste proprietary company code, client data, or internal strategy into public AI tools. Know what your organization's AI data policy is. Cursor has settings for controlling what gets sent to the model.

**AI output has a recognizable signature**: Writing that's too smooth, code that's too generic, arguments that address obvious objections but miss domain-specific ones — reviewers will notice. Your job is to raise AI output to your standard, not just forward it.

**Cost is mostly not the constraint**: At individual professional usage, even pro plans ($20–$40/month per tool) pay for themselves on the first hour of work they save. Stop optimizing for free tiers on tools you'd actually use daily.

## Getting Started

1. **Audit your time for one week.** Where are you spending hours that AI could reduce to minutes? Research? Drafting? Debugging? The audit tells you where to invest.
2. **Get Cursor.** If you write code at all, this is the highest ROI addition to a Claude-centric workflow. The before/after is dramatic.
3. **Replace Google with Perplexity for 30 days** on research questions — not all searches, just questions that need synthesized answers. Form the habit.
4. **Write one context block** for a recurring task and test whether it produces reliably better output with it than without.

## Common Mistakes

**Not prompting with enough context**: Generic prompt → generic output. The quality of AI output is roughly proportional to the quality of context you provide. "Improve this" is a bad prompt. "Improve the argument in paragraph 3 — it's too abstract and doesn't address the main objection that X" is a good prompt.

**Treating every model as equivalent**: They're not. Different tools for different strengths. [ai-ecosystem.md](./ai-ecosystem.md) covers this.

**Building an elaborate system before building habits**: Templates, workflows, and integrations are useful once you have regular habits. Without the habits, the system is overhead.

**Using AI for everything**: Know where the breakeven is. Not everything benefits.

## Resources

- **Simon Willison's weblog** (simonwillison.net) — the best running commentary on practical AI tool usage; tool-specific, not hype
- **Cursor documentation** (cursor.sh/docs) — the non-obvious features are what make it powerful; worth reading beyond the defaults
- **Latent Space podcast** — technical-leaning AI coverage; useful for understanding where tools are going

## Connections

- [claude-code-workflow.md](./claude-code-workflow.md) — the full Claude Code system: hooks, skills, CLAUDE.md, memory — the depth layer for your primary tool
- [coding-with-ai.md](./coding-with-ai.md) — Cursor and AI-assisted engineering in depth
- [ai-ecosystem.md](./ai-ecosystem.md) — understanding what the models can and can't do makes tool selection clearer
- [prompt-engineering.md](../../meta/prompt-engineering.md) — the fundamentals of getting consistent output from any AI tool

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-15*
