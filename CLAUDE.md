# CLAUDE.md — AI Assistant Guide for romi-01

This file provides context and conventions for AI assistants (Claude and others) working in this repository.

## What This Repository Is

**romi-01** is a personal growth and self-coaching system built on plain markdown files + JSON config + Node.js CLI scripts. It is **not a web app, API, or deployable service**. It is a daily journaling, habit tracking, and learning system designed for local use with Claude as the primary AI interface.

**User**: Romi (28, tech professional, New Jersey)
**Philosophy**: Stoicism, self-reliance, continuous learning, physical health
**Primary challenge**: Building consistency habits

---

## Repository Structure

```
romi-01/
├── CLAUDE.md               # This file — AI assistant guide
├── DESIGN.md               # System architecture and design principles (primary reference)
├── README.md               # Quick-start guide
├── config/
│   └── categories.json     # Central config: logging categories, trackable fields, tags
├── context/
│   ├── about-me.md         # User profile and values
│   └── learning-topics.md  # Topics Romi wants to learn
├── daily/                  # Daily log entries — YYYY-MM/YYYY-MM-DD.md
├── docs/
│   ├── changelog.md        # Version history
│   └── logging-system.md   # Daily entry format spec
├── goals/
│   └── 2026-goals.md       # Annual goals + monthly skill focus tracker
├── health/
│   └── fitness-plan.md     # Workout routine and wellness plan
├── knowledge/              # Deep-dive reference notes (Stoicism, VS Code workflow, etc.)
├── prompts/                # Reusable Claude prompt files (14+)
├── reading/
│   └── reading-log.md      # Books read, ratings, currently reading
├── reviews/                # Weekly and monthly reflections (AI-generated)
├── scripts/                # Node.js CLI automation tools
│   ├── new-day.js          # Scaffold a new daily entry
│   ├── log.js              # Quick-log a single category
│   └── status.js           # Generate trend/streak dashboard
└── templates/              # Markdown templates for new files
```

---

## Technology Stack

- **Language**: Node.js (stdlib only — no external dependencies, no package.json)
- **Data format**: Markdown files with YAML frontmatter + JSON config
- **Version control**: Git
- **Primary AI interface**: Claude (via VS Code extension)
- **No build step, no database, no deployment**

---

## Key Configuration: `config/categories.json`

This is the **single source of truth** for all logging behavior. All scripts and prompts read from it — nothing is hardcoded.

**6 logging categories**:
| ID | Name | Icon |
|----|------|------|
| `intention` | Intention | 🎯 |
| `health` | Health | 💚 |
| `life` | Life & Family | 🏠 |
| `progress` | Progress | 🚀 |
| `insights` | Insights | 💡 |
| `notes` | Notes | 📝 |

**Trackable frontmatter fields**:
- `exercise` — minutes (numeric)
- `sleep` — hours (numeric)
- `mood` — 1–5 rating (numeric)
- `reading` — chapters (numeric)
- `work` — 1–5 rating (numeric)
- `learning` — boolean
- `skills` — boolean

When modifying category behavior, **always edit `config/categories.json`**, not the scripts.

---

## Daily Entry Format

Every daily entry in `daily/YYYY-MM/YYYY-MM-DD.md` follows this canonical structure:

```markdown
---
date: YYYY-MM-DD
exercise: ~
sleep: ~
mood: ~
reading: ~
work: ~
learning: false
skills: false
tags: []
---

# YYYY-MM-DD — DayName

## 🎯 Intention
<!-- prompt text -->
[content]

## 💚 Health
<!-- prompt text -->
[content]

## 🏠 Life & Family
<!-- prompt text -->
[content]

## 🚀 Progress
<!-- prompt text -->
[content]

## 💡 Insights
<!-- prompt text -->
[content]

## 📝 Notes
<!-- prompt text -->
[content]
```

- `~` means null/missing (not zero)
- `tags: []` is populated by AI tag detection or manually
- Do not change the frontmatter field names — scripts parse them by exact key

---

## CLI Scripts

Run scripts from the repo root with `node scripts/<name>.js`.

### `node scripts/new-day.js`
Creates a new daily entry for today using the category config. Safe — will not overwrite an existing entry.

### `node scripts/log.js <category> [value]`
Quick-logs a single category. Updates frontmatter numerics and appends prose. Creates today's entry if it doesn't exist.

### `node scripts/status.js`
Generates a trend and streak dashboard from all daily entries. Shows completion rates, averages, habit patterns, and weekly breakdowns.

**All scripts use Node.js built-in modules only** (`fs`, `path`). Do not add `npm install` or external dependencies.

---

## Prompts System

Prompts in `prompts/` are used with the Claude VS Code extension via `@prompts/filename.md`. They are markdown files, not scripts.

| File | Purpose |
|------|---------|
| `morning-start.md` | Stoic reflection + daily challenge |
| `quick-log.md` | Conversational daily entry |
| `daily-review.md` | End-of-day feedback |
| `stoic-reflection.md` | Reframe stress through Stoicism |
| `weekly-summary.md` | Draft weekly review |
| `consistency-check.md` | Streak and pattern analysis |
| `log-monitor.md` | Tag analysis and category grading |
| `tag-update.md` | Detect themes, update entry tags |
| `trend-report.md` | Longitudinal pattern analysis |
| `monthly-planner.md` | Monthly deep-dive planning |
| `fitness-plan.md` | Workout routine builder |
| `teach-me.md` | Claude teaching sessions |
| `sync-docs.md` | Audit and update all docs for consistency |

When modifying a prompt, keep it **concise, Stoic in tone, and actionable**. Avoid corporate language.

---

## Documentation Hierarchy

1. **`DESIGN.md`** — Primary architecture reference. Read this before making structural changes.
2. **`docs/logging-system.md`** — Daily entry format specification.
3. **`README.md`** — User-facing quick start.
4. **`docs/changelog.md`** — Version history. Update when making significant changes.

When docs and code conflict, **trust `DESIGN.md`** as the authoritative source.

---

## Design Principles

These principles are core to the system — do not violate them without explicit user direction:

1. **Config-driven**: All category behavior lives in `config/categories.json`. No hardcoding.
2. **Zero dependencies**: Scripts use only Node.js stdlib. No `npm install`.
3. **Plain text first**: Data is markdown + JSON. No databases, no binary formats.
4. **Git-friendly**: All files are line-based text for clean diffs.
5. **Human-readable**: Files must be comprehensible without special tools.
6. **Non-destructive**: Scripts never overwrite existing entries without prompting.

---

## Git Conventions

- **Branch naming**: `claude/<description>-<ID>` for AI-assisted work
- **Commit style**: Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
- **Remote**: `origin` → `http://local_proxy@127.0.0.1:38483/git/Romi110/romi-01`
- **Main branch**: `main` (also has `master` alias on remote)

---

## System Phases (Roadmap)

| Phase | Status | Description |
|-------|--------|-------------|
| Phase 1 | ✅ Complete | Foundation: config, scripts, docs, prompts, templates |
| Phase 2 | Planned | Messaging integration (SMS/Telegram via Twilio) |
| Phase 3 | Planned | Automated review generation, AI correlation analysis |
| Phase 4 | Planned | Self-evolving categories based on AI suggestions |

When implementing new features, start from the phase roadmap in `DESIGN.md` for context.

---

## User Context (for AI Coaching)

When acting as a coach or assistant in this system:

- **Tone**: Direct, no fluff, Stoic-aligned. Avoid cheerleading or corporate motivational language.
- **Values**: Self-reliance, discipline, long-term thinking, practical skills
- **Current focus areas** (2026): Emergency preparedness, growing food, financial independence, kettlebell strength
- **Reading**: Check `reading/reading-log.md` for current book
- **Goals**: Check `goals/2026-goals.md` for annual and monthly priorities
- **Health plan**: Check `health/fitness-plan.md` for current workout routine

Always read the most recent daily entry in `daily/` to understand current context before providing feedback.

---

## What Not to Do

- Do not add external npm packages or create a `package.json`
- Do not introduce databases, APIs, or web servers unless Phase 2+ is explicitly being built
- Do not modify `config/categories.json` schema without updating all scripts and templates
- Do not create files outside the established directory structure without justification
- Do not change frontmatter field names — scripts depend on exact key names
- Do not add linting configs, TypeScript, or build tooling (intentionally zero-config)
