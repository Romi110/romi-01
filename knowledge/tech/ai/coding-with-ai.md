# Coding with AI
*How AI is changing the practice of software engineering and how to work with it effectively.*

---

## What Is It

Coding with AI means integrating tools like Cursor, GitHub Copilot, and Claude Code into your engineering practice — not as occasional assistants but as a core part of how code gets written and reviewed. The tools are available; the skill is in knowing how to use them without losing technical judgment.

This is not about the API or about building AI products. This is about the day-to-day practice of writing software when AI can generate, review, and debug code alongside you.

## Why It Matters

The software engineering role is changing. AI hasn't replaced engineers, but engineers who use AI tools effectively are producing significantly more output than those who don't — estimates range from 30–200% productivity increase depending on the task and how well-suited it is to AI generation. The ceiling for what one engineer can ship is rising.

The risk is the inverse: over-relying on AI output without critical review produces code that looks right but isn't. The new skill isn't just "use AI" — it's "use AI and maintain the technical judgment to catch what it gets wrong."

## Core Concepts

### Cursor: The Shifted Coding Environment

Cursor is VS Code with AI woven into every layer — not bolted on as a plugin but integrated into autocomplete, inline edit, and chat. The key difference from Copilot or a separate Claude tab: **Cursor has codebase context.**

When you ask Cursor a question or make an edit request, it indexes your codebase and reasons about your specific files, imports, types, and patterns — not just the current file. This changes output quality significantly. The difference between an AI that knows the general shape of React and one that knows *your* component structure and types.

**The three modes:**

- **Tab completion**: Predicts your next keystroke or line, similar to Copilot but with codebase context. Accept with Tab, reject with Escape. Use for boilerplate, repetitive patterns, obvious completions.

- **Inline edit (Ctrl+K)**: Describe a change in natural language; Cursor rewrites the selection. "Extract this into a useEffect with proper cleanup." "Add error handling for the network call." Faster than writing it yourself for anything well-defined.

- **Chat (Ctrl+L)**: Multi-turn conversation with codebase context. Ask questions about the codebase, request multi-file changes, debug errors. More powerful than inline edit for complex tasks that require reasoning across files.

### GitHub Copilot

Copilot is the predecessor — autocomplete-focused, lower friction to set up (GitHub subscription), integrates with VS Code and JetBrains. It does not have Cursor's codebase indexing or inline edit. If you're paying for GitHub Pro, Copilot is included and worth having. For serious AI-assisted development, Cursor is the better choice — but the two can coexist.

### Claude Code as a Companion

Claude Code (covered fully in [claude-code-workflow.md](./claude-code-workflow.md)) is the agentic layer. Where Cursor edits code inside your editor, Claude Code can run tests, make commits, chain multi-step tasks, and operate across the entire project from the terminal. The two are complementary:

- **Cursor** — in-editor, real-time coding within a file or small group of files
- **Claude Code** — multi-step tasks, repo-level operations, or anything involving running commands

### Trust and Verify: The Critical Practice

AI generates plausible code. "Plausible" is not "correct." The failure mode is accepting code that looks right — it compiles, the types check, the test passes — but is wrong in a subtle way: a race condition, an off-by-one in an edge case, an assumption about ordering that isn't guaranteed.

**Trust calibration:**

High trust (read but don't sweat):
- Boilerplate (CRUD routes, standard data transformations, test setup)
- Types and interfaces
- Documentation and comments
- Obvious refactors ("rename this variable throughout")

Low trust (review carefully):
- Business logic, especially branching conditions
- Concurrency and async code
- Security-adjacent code (auth, input validation, permissions)
- Code that touches external state (database writes, API calls with side effects)
- Error handling edge cases

**The debugging loop**: When AI code fails, paste the error + relevant code back into the conversation and ask for a fix — don't start over. AI debugs its own output well when given the error message. Keep the loop tight: error → paste → fix → verify → next.

### How the Engineering Role Is Changing

The shift that's already happening:

**Before AI**: Senior engineers spent significant time writing implementation. The bottleneck was writing code.

**With AI**: Senior engineers spend more time on design, review, and direction. The bottleneck shifts to specifying what needs to be built and catching what AI gets wrong.

What this means for your skills:
- **System design and architecture** become more valuable — AI can implement, but it can't design the system correctly without direction
- **Code review** becomes more important and more frequent — more code is generated faster, which means more to review
- **Problem decomposition** — breaking a large task into pieces small enough that AI implements each one correctly is itself a skill
- **Specification quality** — describing what you want precisely enough that AI implements it correctly is the new engineering skill

Skills that depreciate: typing speed, boilerplate memorization, syntax recall.
Skills that appreciate: technical judgment, system reasoning, architecture, API design.

### When to Write It Yourself

Not everything should be AI-generated. Write the code yourself when:

- **You need to understand it deeply.** AI-generated code you don't fully understand becomes debt.
- **The problem is novel or highly specific.** AI generates from patterns. If your problem is genuinely new, AI will hallucinate a solution that looks plausible.
- **The stakes of a subtle bug are high.** Security, payments, data integrity — read every line, understand every line.
- **You're in a learning context.** Using AI to solve problems you're trying to learn prevents the learning.

## Key Considerations

**Codebase quality matters more with AI.** AI generates code consistent with your existing patterns. A messy codebase with inconsistent patterns produces worse AI output than a clean one. Investment in code quality compounds as you use AI more.

**Security review is not optional.** AI doesn't have your security threat model. It will generate code that's functionally correct but misses input validation, SQL injection risks, or permission checks. OWASP Top 10 awareness is the filter — AI output still needs to pass it.

**Testing AI-generated code.** Write tests before or alongside AI-generated code, not after. Tests written after AI code tend to match what the AI built rather than what you wanted.

**Long sessions accumulate context drift.** Cursor's codebase indexing handles this better than a raw conversation, but in long editing sessions, output quality can degrade. Start a fresh session if behavior changes.

## Getting Started

1. **Install Cursor and migrate from VS Code.** Drop-in replacement — same extensions, same settings sync, same keybindings. Use it for one week on a real project before evaluating.
2. **Use Tab completion for one week without Chat.** Build the habit of accepting and rejecting completions quickly. Comfort here is the foundation.
3. **Practice inline edit (Ctrl+K).** Pick 5 small refactors this week and do them with Ctrl+K instead of writing manually. Build the prompt-edit-verify loop.
4. **Commit before significant AI editing sessions.** Cursor edits can be undone; multi-file Chat changes are harder to roll back cleanly.

## Common Mistakes

**Accepting AI output without reading it.** The speed gain from AI is real; the time lost debugging a subtle bug you didn't catch is realer. Read what the model wrote.

**Using AI for problems you don't understand.** If you can't verify the solution, you're not qualified to use AI on the problem.

**Over-specifying in prompts.** Long, detailed prompts don't always produce better code. State the goal and constraints; let the model decide implementation unless you have a reason to constrain it.

**Never leaving the editor to think.** The best engineering thinking happens away from the keyboard. AI generates faster; that doesn't mean all problems are well-served by faster generation.

## Resources

- **Cursor documentation** (cursor.sh/docs) — the codebase context docs and model selection are the non-obvious parts worth reading
- **Simon Willison's weblog** (simonwillison.net) — practical notes on Cursor, Copilot, and AI-assisted development; grounded not hyped
- **GitHub Copilot documentation** — if using Copilot, the context-window settings and model selection matter

## Connections

- [claude-code-workflow.md](./claude-code-workflow.md) — the terminal-and-agent layer; Claude Code handles multi-step and repo-level tasks that Cursor doesn't
- [building-with-claude-api.md](./building-with-claude-api.md) — when you're building AI-powered tools rather than using AI to write code
- [ai-productivity-stack.md](./ai-productivity-stack.md) — how Cursor fits into the broader daily tool stack
- [ai-job-market.md](./ai-job-market.md) — how these tool shifts are reshaping the software engineering role and hiring

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-15*
