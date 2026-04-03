# romi-01

A personal learning and knowledge system. The purpose is to learn new topics deeply, build lasting knowledge files, and actually practice what is learned — not just read about it.

All data is plain markdown. No tooling, no build steps, no dependencies.

## Structure

```
romi-01/
├── DESIGN.md         # System architecture — start here if you're an AI agent
├── context/          # Who I am, values, learning preferences (feed to Claude at start of conversations)
├── goals/            # Annual goals and monthly skill focus tracker
├── knowledge/        # Wiki-style knowledge base, organized by category
│   ├── philosophy/   # Stoicism, Zen, cross-tradition analysis
│   ├── roma/         # Personal book of tenets
│   ├── health/       # Fitness, nutrition
│   └── meta/         # System docs, workflow guides
├── prompts/          # Reusable AI prompt files (reference in Claude conversations)
└── templates/        # File templates (knowledge-topic)
```

## How to Use This

**Primary workflow: VS Code + Claude extension**

1. Open this repo in VS Code
2. Start a Claude conversation with `@context/about-me.md` for context
3. Use `@prompts/deep-dive.md [topic]` to learn any topic — get a complete wiki-style knowledge file
4. Use `@prompts/sacred-text-tenet.md` to write Roma entries
5. Commit regularly with Git

## Philosophy

- Learn something real every day — not surface-level, not a summary.
- Understanding compounds. One deep file is worth ten shallow ones.
- Knowledge only counts if it changes how you think or act.
- This system serves you. Change it whenever it stops working.
