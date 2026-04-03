# How to Use This System

## What It Is
A personal learning and knowledge system built on plain markdown files. The purpose is to learn new topics deeply, build lasting reference files, and practice what you've learned — not just read about it.

No scripts. No build step. Open a file and write.

## The Core Loop

```
topic-map → teach-me → build-knowledge-file → cross-pollinate → (if earned) sacred-text-tenet
```

1. **Before starting a new topic** — use `@prompts/topic-map.md` to map the learning path, understand what you're committing to, and create a skeleton knowledge file.
2. **Learning session** — use `@prompts/teach-me.md` to go deep. Don't just ask for a summary — push for genuine understanding.
3. **After the session** — use `@prompts/build-knowledge-file.md` to write what you actually understood. Write from your own words, not Claude's.
4. **Over time** — use `@prompts/cross-pollinate.md` to find connections between two knowledge files. This is where knowledge compounds.
5. **When a principle is worth keeping** — use `@prompts/sacred-text-tenet.md` to write it into `knowledge/roma.md`.

## Key Files

| File | What It's For |
|------|---------------|
| `context/about-me.md` | Feed this to Claude at the start of any conversation |
| `context/learning-topics.md` | The master list of topics to explore — add to it freely |
| `knowledge/INDEX.md` | See what you already know before starting something new |
| `goals/2026-goals.md` | Annual goals and monthly skill focus |
| `prompts/README.md` | All prompts and when to use them |

## How to Start a Learning Session

1. Open VS Code
2. Open the Claude panel
3. Type: `@context/about-me.md @prompts/teach-me.md teach me about [topic]`
4. Or for a new topic: `@prompts/topic-map.md [topic]`

## How to Add a Knowledge File

1. Copy `templates/knowledge-topic.md` to `knowledge/[topic-name].md`
2. Or use `@prompts/build-knowledge-file.md` after a session — it writes the file for you
3. Add the file to `knowledge/INDEX.md` under the right category
4. Check off the topic in `context/learning-topics.md` if it was on the list

## Maintenance

Run `@prompts/sync-docs.md` periodically to audit docs for drift — stale file references, missing index entries, outdated goal language.

## Philosophy

- A knowledge file with no practical notes is just notes. Write what changes.
- A learning session with no file produced nothing lasting.
- One topic understood well beats ten topics touched once.
- This system serves you. If something isn't working, change it.
