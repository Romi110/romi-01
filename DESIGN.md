# DESIGN.md — romi-01 System Architecture

> **Purpose**: Reference for AI agents working in this repo.
> Start here to understand what the system is and how it is organized.

## System Identity

- **Name**: romi-01
- **Type**: Personal learning and knowledge system
- **Owner**: Romi (see `context/about-me.md` for full profile)
- **Purpose**: Learn new topics deeply, build lasting knowledge files, practice what is learned
- **Philosophy**: Stoic — depth over breadth, discipline over motivation, understanding over coverage
- **Primary interface**: VS Code + Claude extension
- **Data format**: Markdown files
- **Version control**: Git

## Design Principles

1. **Plain text first**: Everything is markdown. No databases, no proprietary formats. Human-readable, git-friendly.
2. **Knowledge compounds**: Every file written here should deepen understanding of a topic. Notes, guides, and reflections are the output.
3. **Depth over breadth**: One well-understood topic is worth more than ten shallow ones. Files grow over time.
4. **Low friction**: The system must be usable in short sessions. No setup, no tooling, just open and write.
5. **Separation of concerns**: Context defines who I am. Knowledge is what I've learned. Prompts define AI behavior. Goals define direction.

## Directory Architecture

```
romi-01/
├── DESIGN.md                  # THIS FILE — system architecture
├── README.md                  # Human-facing overview and quick start
│
├── context/                   # User identity and learning preferences (fed to AI as context)
│   ├── about-me.md            # Who Romi is, values, constraints, how to teach him
│   └── learning-topics.md     # Master checklist of topics to explore
│
├── goals/                     # Goal tracking
│   └── 2026-goals.md          # Annual goals and monthly skill focus
│
├── health/                    # Health and fitness reference
│   └── fitness-plan.md        # Weekly routine and wellness notes
│
├── knowledge/                 # Deep-dive notes on learned topics
│   ├── stoicism.md            # Stoic philosophy reference
│   ├── zen-buddhism.md        # Zen Buddhism reference
│   ├── philosophy-traditions-guide.md  # Cross-tradition comparison
│   ├── roma.md                # Personal book of tenets
│   ├── core_tenets_of_wisdom.md       # Core tenets reference
│   ├── sacred-text-plan.md            # Study plan for sacred texts
│   ├── fitness-plan.md                # Physical training philosophy
│   ├── using-this-system.md           # Meta: how to use romi-01
│   └── vscode-claude-workflow.md      # VS Code + Claude setup guide
│
├── prompts/                   # Reusable AI prompt files
│   ├── README.md              # Prompt index and usage guide
│   ├── teach-me.md            # Learning session prompt
│   ├── sacred-text-tenet.md   # Roma tenet writing prompt
│   └── sync-docs.md           # Audit and update documentation
│
├── reading/                   # Reading log
│   └── reading-log.md         # Current, completed, and to-read books
│
└── templates/                 # File templates
    └── knowledge-topic.md     # New knowledge file starter
```

## Component Reference

### context/ — User Identity (AI Context)

| File | Purpose |
|------|---------|
| `about-me.md` | Full user profile, values, learning preferences, how to teach Romi |
| `learning-topics.md` | Master topic checklist |

These files are the AI's knowledge of the user. Any prompt that needs to understand who Romi is should reference `context/about-me.md`. Update as life changes.

### knowledge/ — Learning Notes

| File | Topic | Status |
|------|-------|--------|
| `stoicism.md` | Stoic philosophy | Active reference |
| `zen-buddhism.md` | Zen Buddhism | Active reference |
| `philosophy-traditions-guide.md` | Cross-tradition comparison | Reference |
| `roma.md` | Personal book of tenets | Active — ongoing |
| `core_tenets_of_wisdom.md` | Core tenets reference | Reference |
| `sacred-text-plan.md` | Sacred texts study plan | Active |
| `fitness-plan.md` | Physical training philosophy | Reference |
| `using-this-system.md` | Meta: how romi-01 works | Reference |
| `vscode-claude-workflow.md` | VS Code + Claude setup | Reference |

**Template**: `templates/knowledge-topic.md`

Structure for all knowledge files: What Is It, Why It Matters, Key Concepts, Practical Notes, Resources, Status.

### prompts/ — Reusable AI Instructions

| File | Trigger | Output |
|------|---------|--------|
| `teach-me.md` | Learning session | Deep teaching + actionable practice |
| `sacred-text-tenet.md` | Roma writing session | Tenet written to roma.md |
| `sync-docs.md` | After system changes | Updated documentation, drift report |

### goals/ — Goal Tracking

| File | Purpose |
|------|---------|
| `2026-goals.md` | Annual goals, monthly skill focus tracker |

### reading/ — Reading Log

| File | Purpose |
|------|---------|
| `reading-log.md` | Currently reading, to-read list, completed books with takeaways |

### templates/ — File Templates

| File | Used For |
|------|----------|
| `knowledge-topic.md` | New knowledge file starter |

## AI Agent Instructions

1. **Read `context/about-me.md` first** in any conversation involving learning or personal context.
2. **Read the relevant prompt file** from `prompts/` if one exists for the task. Follow it exactly.
3. **Teach from first principles.** Romi wants genuine understanding — not summaries or overviews.
4. **Connect to practice.** After teaching, ask: what's one way to apply this?
5. **Frame through Stoicism** when relevant. See `knowledge/stoicism.md` for reference.
6. **Be direct.** No fluff. See `context/about-me.md` → "How Claude Should Work With Me".
7. **Respect time constraints.** Keep responses focused. Romi works full-time.
8. **Romi is vegetarian.** Always suggest vegetarian protein sources. Do not suggest meat.
9. **When adding to knowledge files**, follow the structure in `templates/knowledge-topic.md`.

## Roadmap

### Current Focus
- Deepen knowledge files on philosophy, sacred texts, and self-reliance topics
- Build Roma (personal philosophy text) through regular writing sessions
- Track reading and extract lessons into knowledge files

### Planned
- Knowledge graph linking topics across files
- AI-suggested connections between knowledge files

## Changelog

See [`docs/changelog.md`](docs/changelog.md) for the full history.
