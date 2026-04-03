# DESIGN.md — romi-01 System Architecture

> Reference for AI agents working in this repo.
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
2. **Knowledge compounds**: Every file written here should deepen understanding of a topic.
3. **Depth over breadth**: One well-understood topic is worth more than ten shallow ones. Files grow over time.
4. **Low friction**: Usable in short sessions. No setup, no tooling, just open and write.
5. **Separation of concerns**: Context defines who I am. Knowledge is what I've learned. Prompts define AI behavior. Goals define direction.

## Directory Architecture

```
romi-01/
├── DESIGN.md                  # THIS FILE — system architecture
├── README.md                  # Human-facing overview and quick start
│
├── context/                   # User identity and learning preferences
│   ├── about-me.md            # Who Romi is, values, constraints, how to teach him
│   └── learning-topics.md     # Master checklist of topics to explore
│
├── goals/                     # Goal tracking
│   └── 2026-goals.md          # Annual goals and monthly skill focus
│
├── knowledge/                 # Deep-dive notes on learned topics
│   ├── INDEX.md               # Organized index of all knowledge files
│   ├── stoicism.md
│   ├── zen-buddhism.md
│   ├── philosophy-traditions-guide.md
│   ├── core_tenets_of_wisdom.md
│   ├── roma.md
│   ├── sacred-text-plan.md
│   ├── fitness-plan.md
│   ├── vegetarian-protein.md
│   ├── using-this-system.md
│   └── vscode-claude-workflow.md
│
├── prompts/                   # Reusable AI prompt files
│   ├── README.md              # Prompt index and usage guide
│   ├── teach-me.md
│   ├── topic-map.md
│   ├── build-knowledge-file.md
│   ├── cross-pollinate.md
│   ├── sacred-text-tenet.md
│   ├── fitness-plan.md
│   └── sync-docs.md
│
└── templates/
    └── knowledge-topic.md     # New knowledge file starter
```

## Component Reference

### context/

| File | Purpose |
|------|---------|
| `about-me.md` | Full user profile, values, learning preferences, how to teach Romi |
| `learning-topics.md` | Master topic checklist — check before starting something new |

### knowledge/

See `knowledge/INDEX.md` for the full organized list with status.

**Template**: `templates/knowledge-topic.md`
**Structure**: What Is It, Why It Matters, Core Ideas, Practical Notes, Resources, Connections, Status

### prompts/

| File | Purpose |
|------|---------|
| `teach-me.md` | Deep-dive learning session |
| `topic-map.md` | Build a learning path before starting a new topic |
| `build-knowledge-file.md` | Turn a learning session into a permanent knowledge file |
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
4. Follow the learning flow: `topic-map` → `teach-me` → `build-knowledge-file` → `cross-pollinate` → `sacred-text-tenet`.
5. Romi is vegetarian. Do not suggest meat.
