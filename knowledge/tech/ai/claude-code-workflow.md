# Claude Code Workflow
*Using Claude Code as a development tool: automation, hooks, skills, and day-to-day practice.*

---

## What Is It

Claude Code is Anthropic's CLI agent — a terminal-based tool that can read, write, and run code in your local environment. It's not a chatbot in a browser. It has access to your filesystem, your shell, and your git repo. It can read files, write files, run tests, make commits, and chain multiple actions together without you intervening at each step.

The key distinction from the web Claude: Claude Code operates inside your actual project. It knows your file structure, can read your code before editing it, and keeps a running context of what it's doing. It's less like "ask a question" and more like "delegate a task."

## Why It Matters

You work in tech full-time and use Claude Code daily. The ceiling for what you can do with it is higher than most users realize — because most people use it like a chatbot that happens to be in a terminal. Understanding hooks, skills, CLAUDE.md, and how to structure project context changes it from a search-and-paste tool into something closer to a capable junior developer who reads your docs before doing anything.

This repo itself is a working example: `CLAUDE.md`, `prompts/`, and the knowledge base are all Claude Code infrastructure.

## Core Concepts

### CLAUDE.md

CLAUDE.md is a persistent instruction file at the root of a project. Every time Claude Code runs, it reads this file first. It's the closest thing to a system prompt you get.

What belongs in CLAUDE.md:
- What this project is (not a README summary — Claude's purpose-oriented framing)
- Conventions Claude should follow (naming, structure, tone)
- Things to check before acting (read CATALOG.md, read about-me.md)
- Warnings about what *not* to do (don't re-propose planned topics, don't create docs unless asked)

What doesn't belong:
- Information already in the code
- One-time instructions
- Anything better expressed as a prompt

The shorter and more specific CLAUDE.md is, the better it works. Long files get diluted. Every line competes for the model's attention.

### Hooks

Hooks are shell commands that Claude Code executes automatically at specific lifecycle events — before or after tool calls, on new messages, etc. They run in your actual shell. They're configured in `settings.json`.

Use cases:
- Auto-lint after every file edit
- Run tests after writes
- Log all edits to an audit file
- Reject certain types of edits (e.g., block writes to `.env`)
- Auto-format code on save

Hooks run whether Claude wants them to or not. They're a hard constraint on Claude's behavior — the harness executes them, not Claude. This is the right place to enforce invariants you never want broken.

Example hook structure in settings.json:
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{ "type": "command", "command": "npm run lint" }]
    }]
  }
}
```

### Skills (Slash Commands)

Skills are reusable prompts invoked with `/skill-name` in a Claude Code session. They expand into full prompts — the user types `/deep-dive` and Claude Code loads and executes the full `deep-dive.md` instruction set.

They live in the `prompts/` directory (for project-scoped skills) or `~/.claude/` (for global skills). They're plain markdown files with the instructions Claude should follow.

Skills are worth building when:
- You repeat the same type of task regularly
- The task has multiple steps that need to happen in order
- You want consistent output format across sessions

The `deep-dive.md`, `cross-pollinate.md`, and others in this repo are exactly this.

### Permission Modes

Claude Code has permission settings that control what it can do without asking. Three tiers:
- **Restricted**: Asks before every file change, every command
- **Default**: Asks for shell commands, auto-approves safe reads/edits
- **Auto-approved**: Executes without prompting (useful for automation, risky for destructive ops)

Understanding this matters when designing hooks and automation — hooks always run, regardless of permission mode.

### Memory System

Claude Code supports a file-based memory system at `~/.claude/projects/[project]/memory/`. Memories persist across sessions and are loaded into context automatically. They're used for:
- User preferences that shouldn't need restating every session
- Project context that's not in the code
- Feedback on approach ("don't do X, here's why")

This is distinct from CLAUDE.md (which is project-level, in the repo) — memory is user-level, persists across machines via sync, and updates automatically based on what's learned in conversation.

### Context Management

Claude Code loads files into context as needed. It reads your actual files — it doesn't guess. When context grows large (long sessions, many files), earlier content gets compressed or dropped. Implications:
- Put critical instructions at the start and end of CLAUDE.md (not buried in the middle)
- Complex tasks are better split into focused sessions than one marathon conversation
- Use `@file.md` references in prompts to force-load specific context

### Multi-Step Tasks and Plans

For complex tasks, Claude Code can enter plan mode — producing a step-by-step plan before executing anything. This is worth using when:
- The task touches many files
- The approach isn't obvious
- You want to review before any changes are made

Plan mode is a forcing function: you see the whole approach before it runs, which catches bad assumptions early.

## Key Considerations

**CLAUDE.md maintenance is ongoing.** As a project evolves, CLAUDE.md needs updating. Stale instructions get followed — that's the problem. Treat it like code documentation: update it when behavior should change.

**Hooks are powerful and dangerous.** A hook that runs on every edit can block Claude completely if it's misconfigured. Test hooks carefully. Keep them focused.

**Skills require good prompt engineering.** A skill that's vague produces vague output, consistently. The effort that goes into writing a skill prompt is effort you save on every future invocation.

**Longer sessions accumulate drift.** In a long session with many tool calls, earlier context compresses. If Claude stops following instructions it was following earlier, context compression is the likely cause. Start a fresh session.

**Auto-approve mode is for automation, not daily use.** Letting Claude run without confirmation in a production repo or a repo with no good git history is asking for trouble.

## Getting Started

1. **Read your own CLAUDE.md.** If you haven't looked at it recently, read it now and ask: is this still accurate? Is there anything missing that would prevent Claude from doing the right thing without prompting?

2. **Build one skill.** Take a task you repeat — a specific review format, a specific output structure — and write it as a skill in `prompts/`. Invoke it next session.

3. **Set up one hook.** If you write code in this repo, add a hook that runs a linter or formatter after edits. This is the simplest form of automation and builds the habit.

4. **Use plan mode before large tasks.** Next time you ask Claude to do something that touches more than 3 files, explicitly ask for a plan first.

## Common Mistakes

**Treating CLAUDE.md like a README.** CLAUDE.md is instructions for Claude, not documentation for humans. It should be imperative ("Read CATALOG.md first"), not descriptive ("This repo contains knowledge files").

**Building skills before practicing prompts.** A skill is a hardened prompt. If you don't have a reliable prompt, you don't have a reliable skill. Get the prompt right first.

**Overloading CLAUDE.md.** Every line in CLAUDE.md competes for attention. 50 lines of important instructions > 200 lines of mixed-priority notes.

**Using auto-approve in high-stakes repos.** The time saved on confirmations is not worth a destructive change with no checkpoint.

**Starting new sessions instead of fixing bad instructions.** If Claude keeps doing something wrong, the fix is in CLAUDE.md or the prompt — not starting over and hoping.

## Resources

- **Claude Code documentation** (docs.anthropic.com/claude-code) — official reference for hooks, settings, memory, and permissions
- **This repo's CLAUDE.md** — a working example of project-level instructions
- **`prompts/` directory** — working examples of skills designed for this specific workflow

## Connections

- [vscode-claude-workflow.md](../meta/vscode-claude-workflow.md) — the IDE layer on top of Claude Code; extension-specific behaviors and the @-reference system
- [prompt-engineering.md](../meta/prompt-engineering.md) — skills are hardened prompts; same principles apply, plus the structure of system prompts
- [building-with-claude-api.md](./building-with-claude-api.md) — when Claude Code isn't enough: building autonomous agents using the API directly
- [using-this-system.md](../meta/using-this-system.md) — how this repo is set up to work with Claude Code

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-06*
