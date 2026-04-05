# CLAUDE.md — AI Assistant Guide for romi-01

This file provides context and conventions for AI assistants working in this repository.

## What This Repository Is

**romi-01** is a personal learning and knowledge system built on plain markdown files. It is **not a web app, API, or deployable service**. It is not a daily log or habit tracker.

The purpose is: **learn new topics deeply, build lasting knowledge files, and practice what is learned.**

**User**: Romi (28, tech professional, New Jersey)
**Philosophy**: Stoicism, self-reliance, continuous learning
**Primary focus**: Depth over breadth — one topic understood well beats ten touched once

---

## Repository Structure

```
romi-01/
├── CLAUDE.md               # This file — AI assistant guide
├── DESIGN.md               # System architecture (primary reference)
├── README.md               # Quick-start guide
├── context/
│   ├── about-me.md         # User profile, values, learning preferences
├── goals/
│   └── 2026-goals.md       # Annual goals + monthly skill focus tracker
├── knowledge/              # Wiki-style knowledge base
│   ├── CATALOG.md          # What exists + what's planned (single map file)
│   ├── philosophy/         # Stoicism, Zen, traditions, core tenets
│   ├── roma/               # Roma, sacred text plan, improvements
│   ├── health/             # Fitness, nutrition
│   ├── meta/               # System docs, workflow guides
│   └── [new domains]/      # New folders created as topics grow
├── prompts/                # Reusable Claude prompt files
└── templates/
    └── knowledge-topic.md  # Knowledge file starter template
```

---

## Technology Stack

- **Data format**: Markdown files
- **Version control**: Git
- **Primary AI interface**: Claude (via VS Code extension)
- **No build step, no database, no scripts, no deployment**

---

## Prompts System

Prompts in `prompts/` are used with the Claude VS Code extension via `@prompts/filename.md`.

| File | Purpose |
|------|---------|
| `deep-dive.md` | Learn any topic — produces a complete wiki-style knowledge file with proposed sub-topics |
| `cross-pollinate.md` | Find connections between two knowledge files |
| `sacred-text-tenet.md` | Writing sessions for roma.md |
| `fitness-plan.md` | Build or adjust workout routine |
| `sync-docs.md` | Audit and update all docs for consistency |

When modifying a prompt, keep it **concise, Stoic in tone, and actionable**. Avoid corporate language.

---

## Knowledge Files

Knowledge files live in subfolders under `knowledge/`. See `knowledge/CATALOG.md` for the full map — what exists (`[x]`) and what's planned (`[ ]`).

New domains get new subfolders as needed. Use `@prompts/deep-dive.md` to generate new files.

---

## Design Principles

1. **Plain text first**: Data is markdown. No databases, no binary formats.
2. **Knowledge compounds**: Every file written here should deepen understanding of a topic.
3. **Depth over breadth**: One well-understood topic beats ten shallow ones. Files grow over time.
4. **Low friction**: Usable in short sessions. No setup, no tooling, just open and write.
5. **No tooling**: No scripts, no build steps, no dependencies.
6. **Minimize redundancy**: Link to existing files instead of re-explaining. Each concept lives in one place.

---

## Git Conventions

- **Branch naming**: `claude/<description>-<ID>` for AI-assisted work
- **Commit style**: Conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
- **Main branch**: `main`

---

## AI Agent Instructions

### Orientation (do this first)

1. Read `context/about-me.md` — understand who Romi is before doing anything involving learning, coaching, or writing.
2. Read `knowledge/CATALOG.md` — see what exists and what's planned. Don't teach what's already been written. Don't re-propose what's already planned.
3. If a relevant prompt file exists in `prompts/`, read it and follow it. The prompts are instructions, not suggestions.

### The Learning Flow

When a user wants to learn something new:
1. `deep-dive.md` — produces a complete wiki-style knowledge file covering the full territory, with proposed sub-topic files
2. `deep-dive.md` again — on any proposed sub-topic to expand it
3. `cross-pollinate.md` — find connections to existing knowledge
4. `sacred-text-tenet.md` — if the topic produced a principle worth adding to Roma

A learning session with no knowledge file produces nothing lasting.

### Writing Knowledge Files

- Use `@prompts/deep-dive.md` to generate files. It handles structure, placement, and cataloging.
- Write from your own knowledge — accurate, concrete, and complete. The user's job is to learn, not to write.
- **Minimize redundancy** — check CATALOG.md before writing. Link to existing files instead of re-explaining concepts already covered elsewhere.
- Place files in the appropriate subfolder. Create new subfolders for new domains.
- After writing, mark the entry `[x]` in `knowledge/CATALOG.md`. Add new planned sub-topics there too.
- Always ask: "Is there anything here that belongs in Roma?"

### Roma

`knowledge/roma/roma.md` is a living document — the most important file in the repo. When any learning session, book, or reflection produces a principle worth keeping, surface it. Ask whether it belongs in Roma. Use `prompts/sacred-text-tenet.md` to write it properly.

### Connections

Knowledge compounds through links. Whenever writing or discussing a topic:
- Check `knowledge/CATALOG.md` for related files.
- Name the connection explicitly — don't assume it's obvious.
- If two topics are closely related, suggest running `cross-pollinate.md`.
- When a knowledge file proposes sub-topics, those are the natural next steps.

### Tone

- Direct. No fluff. No cheerleading. No corporate motivational language.
- Stoic-aligned where relevant — what's in your control, what's the right action, what does discipline require here.
- Respect time. Short answers unless asked to go deep.
- Don't soften feedback. If understanding is shallow, say so.
