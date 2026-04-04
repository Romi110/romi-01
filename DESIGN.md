# DESIGN.md — romi-01 System Architecture

> Reference for AI agents working in this repo.
> Start here to understand what the system is and how it is organized.

## System Identity

- **Name**: romi-01
- **Type**: Personal learning and knowledge system (wiki-style)
- **Owner**: Romi (see `context/about-me.md` for full profile)
- **Purpose**: Learn new topics deeply, build lasting knowledge files, practice what is learned
- **Philosophy**: Stoic — depth over breadth, discipline over motivation, understanding over coverage
- **Primary interface**: VS Code + Claude extension
- **Data format**: Markdown files
- **Version control**: Git

## Design Principles

1. **Plain text first**: Everything is markdown. No databases, no proprietary formats. Human-readable, git-friendly.
2. **Knowledge compounds**: Every file written here should deepen understanding of a topic.
3. **Depth over breadth**: One well-understood topic is worth more than ten shallow ones. Files grow over time.
4. **Low friction**: Usable in short sessions. No setup, no tooling, just open and write.
5. **Separation of concerns**: Context defines who I am. Knowledge is what I've learned. Prompts define AI behavior. Goals define direction.
6. **Minimize redundancy**: Each concept lives in one place. Link to existing files instead of re-explaining.

## Directory Architecture

```
romi-01/
├── DESIGN.md                  # THIS FILE — system architecture
├── README.md                  # Human-facing overview and quick start
│
├── context/                   # User identity and learning preferences
│   ├── about-me.md            # Who Romi is, values, constraints, how to teach him

│
├── goals/                     # Goal tracking
│   └── 2026-goals.md          # Annual goals and monthly skill focus
│
├── knowledge/                 # Wiki-style knowledge base
│   ├── INDEX.md               # Table of contents for all knowledge files
│   ├── philosophy/            # Philosophical traditions and ideas
│   │   ├── stoicism.md
│   │   ├── zen-buddhism.md
│   │   ├── philosophy-traditions-guide.md
│   │   └── core_tenets_of_wisdom.md
│   ├── roma/                  # Personal tenets and sacred text work
│   │   ├── roma.md
│   │   ├── sacred-text-plan.md
│   │   └── roma-improvements.md
│   ├── health/                # Fitness and nutrition
│   │   ├── fitness-plan.md
│   │   └── vegetarian-protein.md
│   └── meta/                  # System documentation
│       ├── using-this-system.md
│       └── vscode-claude-workflow.md
│
├── prompts/                   # Reusable AI prompt files
│   ├── README.md              # Prompt index and usage guide
│   ├── deep-dive.md           # Learn any topic → wiki-style knowledge file
│   ├── cross-pollinate.md     # Find connections between two knowledge files
│   ├── sacred-text-tenet.md   # Write one tenet for roma.md
│   ├── fitness-plan.md        # Build or adjust workout routine
│   └── sync-docs.md           # Audit all docs and fix stale references
│
└── templates/
    └── knowledge-topic.md     # New knowledge file starter
```

## Component Reference

### context/

| File | Purpose |
|------|---------|
| `about-me.md` | Full user profile, values, learning preferences, how to teach Romi |

### knowledge/

See `knowledge/INDEX.md` for the full organized list with status.

Files are organized into subfolders by domain. New domains get new subfolders as topics grow.

**Template**: `templates/knowledge-topic.md`
**Generator**: `@prompts/deep-dive.md` — produces complete wiki-style files

### prompts/

| File | Purpose |
|------|---------|
| `deep-dive.md` | Learn any topic — produces a complete wiki-style knowledge file with proposed sub-topics |
| `cross-pollinate.md` | Find connections between two knowledge files |
| `sacred-text-tenet.md` | Write one tenet for roma.md |
| `fitness-plan.md` | Build or adjust workout routine |
| `sync-docs.md` | Audit all docs and fix stale references |

See `prompts/README.md` for the full learning flow.

### goals/

| File | Purpose |
|------|---------|
| `2026-goals.md` | Annual goals, monthly skill focus tracker |

### templates/

| File | Used For |
|------|----------|
| `knowledge-topic.md` | New knowledge file starter |

## AI Agent Instructions

See `CLAUDE.md` for the full agent guide. Key points:

1. Read `context/about-me.md` first.
2. Check `knowledge/INDEX.md` before starting a new topic.
3. Use the relevant prompt from `prompts/` if one exists.
4. Follow the learning flow: `deep-dive` → `cross-pollinate` → `sacred-text-tenet`.
5. Romi is vegetarian. Do not suggest meat.
