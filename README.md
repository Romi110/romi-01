# romi-01

A personal system for learning, self-reliance, health, and daily growth.

## Structure

```
romi-01/
├── DESIGN.md         # System architecture — start here if you're an AI agent
├── config/           # Single source of truth: category definitions, tracking types
├── context/          # Who I am, values, life context (feed to Claude at start of conversations)
├── daily/            # Daily log entries organized by month (YYYY-MM/YYYY-MM-DD.md)
├── docs/             # System documentation (logging spec, changelog)
├── goals/            # Annual goals and monthly skill focus tracker
├── health/           # Fitness plan, body notes
├── knowledge/        # Deep-dive notes on learned topics
├── prompts/          # Reusable AI prompt files (reference in Claude conversations)
├── reading/          # Reading log — current, completed, to-read
├── reviews/          # Weekly and monthly reflections
├── scripts/          # CLI automation: new-day.js, log.js, status.js
└── templates/        # File templates (weekly-review, monthly-review, knowledge-topic)
```

## How to Use This

**Primary workflow: VS Code + Claude extension**
See `knowledge/vscode-claude-workflow.md` for the full guide.

Quick version:
1. Open this repo in VS Code
2. Run `node scripts/new-day.js` to scaffold today's entry
3. Reference `@context/about-me.md` when starting Claude conversations
4. Use prompts in `prompts/` to guide Claude interactions (morning, review, learning, etc.)
5. Commit regularly with Git

## Philosophy

- Short entries beat no entries. Five lines on a busy day is a win.
- Learn something every day, even if it's small.
- Self-reliance is a spectrum, not a destination. Every skill learned is progress.
- This system serves you. Change it whenever it stops working.
