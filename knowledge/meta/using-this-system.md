# How to Use This System

## What It Is
A personal learning and knowledge system built on plain markdown files. The purpose is to learn new topics deeply, build lasting reference files, and practice what you've learned — not just read about it.

No scripts. No build step. Open a file and write.

## The Core Loop

```
deep-dive → cross-pollinate → (if earned) sacred-text-tenet
```

1. **Learn a topic** — use `@prompts/deep-dive.md [topic]` to produce a complete wiki-style knowledge file. Covers the full territory, proposes sub-topic files for future exploration.
2. **Go deeper** — use `@prompts/deep-dive.md` again on any proposed sub-topic to expand it into its own file.
3. **Find connections** — use `@prompts/cross-pollinate.md` to find how two knowledge files relate. This is where knowledge compounds.
4. **When a principle is worth keeping** — use `@prompts/sacred-text-tenet.md` to write it into `knowledge/roma/roma.md`.

## Knowledge Structure

Files live in subfolders under `knowledge/`:
- `philosophy/` — traditions, thinkers, ideas
- `roma/` — personal tenets, sacred text work
- `health/` — fitness, nutrition, wellness
- `meta/` — system docs, workflow guides
- New folders created as needed for new domains

See `knowledge/CATALOG.md` for the full map — what exists and what's planned.

## Key Files

| File | What It's For |
|------|---------------|
| `context/about-me.md` | Feed this to Claude at the start of any conversation |
| `knowledge/CATALOG.md` | What exists and what's planned — the single map file |
| `goals/2026-goals.md` | Annual goals and monthly skill focus |
| `prompts/README.md` | All prompts and when to use them |

## How to Start a Learning Session

1. Open VS Code
2. Open the Claude panel
3. Type: `@context/about-me.md @prompts/deep-dive.md self-sustained farming`
4. The prompt produces a full wiki file and proposes sub-topics to explore next

## How to Add a Knowledge File

1. Use `@prompts/deep-dive.md [topic]` — Claude writes the complete file
2. Or copy `templates/knowledge-topic.md` to `knowledge/[category]/[topic-name].md` as a manual skeleton
3. The prompt handles marking the entry in `knowledge/CATALOG.md`, or do it manually

## Maintenance

Run `@prompts/sync-docs.md` periodically to audit docs for drift — stale file references, missing index entries, outdated goal language.

## Philosophy

- A knowledge file with no practical notes is just notes. Write what changes.
- A learning session with no file produced nothing lasting.
- One topic understood well beats ten topics touched once.
- This system serves you. If something isn't working, change it.
