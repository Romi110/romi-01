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

A learning session with no knowledge file produces nothing lasting.

### Writing Knowledge Files

- Use `@prompts/deep-dive.md` to generate files. It handles structure, placement, and cataloging.
- Write from your own knowledge — accurate, concrete, and complete. The user's job is to learn, not to write.
- **Minimize redundancy** — check CATALOG.md before writing. Link to existing files instead of re-explaining concepts already covered elsewhere.
- Place files in the appropriate subfolder. Create new subfolders for new domains.
- After writing, mark the entry `[x] topic-name` (no description) in `knowledge/CATALOG.md`. Add new planned sub-topics as `[ ] topic-name — short description`.

### Catalog and Scale Rules

These rules keep the wiki usable as it grows. Follow them without being asked.

**CATALOG.md format:**
- `[x]` entries: topic name only, no description. The file is the reference.
- `[ ]` entries: topic name + one-line description. That's all — no more.

**File size:** If a file needs more than ~8 sections or exceeds ~1500 words, it's trying to be two files. Split off a sub-topic, add it as `[ ]` in CATALOG.md, and keep the parent file focused.

**Redundancy:** Before writing any Core Concepts section, grep the 2–3 most related existing files for the concept names. If a concept is already well-explained elsewhere, write one sentence and link — never re-explain.

**New domain folders must be broad:** Before creating a new folder under `knowledge/`, ask: is this a domain or a topic? A domain can hold 4+ unrelated files (e.g., `sports/`, `cooking/`, `art/`). A topic is a single file inside an existing domain. If you can't imagine 4 other files living next to it, it's a topic — not a folder. `basketball` is a topic inside `sports/`; `sourdough` is a topic inside `cooking/`.

**Sub-folders within a domain (trigger at 4+ clustered files):**
- When 4+ files in a domain share a clear sub-topic, group them into a sub-folder: `knowledge/[domain]/[subtopic]/`
- The domain catalog lists them flat with the sub-folder path as a prefix (e.g., `- [x] hair/hair-growth`) — no nested catalog file
- Sub-folders never nest. `health/hair/file.md` is valid. `health/hair/ayurveda/file.md` is not.

**Domain sub-catalogs (trigger at 25+ written files):**
- When any domain reaches 25+ written files, split it: create `knowledge/[domain]/CATALOG.md` and replace that domain's section in the main CATALOG.md with a single pointer line: `## Domain → see knowledge/[domain]/CATALOG.md (N written, N planned)`
- When the main CATALOG.md exceeds 300 lines, the above split is mandatory before adding new entries to that domain.
- A domain sub-catalog lists all entries flat, including sub-folder files by path prefix. It never points to further catalogs.

**Two-level catalog cap:**
- The catalog hierarchy is exactly: `CATALOG.md` → `knowledge/[domain]/CATALOG.md`. Nothing deeper ever gets its own catalog file. This is a hard limit regardless of domain size.

### Connections

Knowledge compounds through links. Whenever writing or discussing a topic:
- Check `knowledge/CATALOG.md` for related files.
- Name the connection explicitly — don't assume it's obvious.
- When a knowledge file proposes sub-topics, those are the natural next steps.

### Tone

- Direct. No fluff. No cheerleading. No corporate motivational language.
- Stoic-aligned where relevant — what's in your control, what's the right action, what does discipline require here.
- Respect time. Short answers unless asked to go deep.
- Don't soften feedback. If understanding is shallow, say so.
