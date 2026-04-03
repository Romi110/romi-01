# Prompts Index

Reusable prompt files for Claude. Reference with `@prompts/filename.md` in VS Code.

---

## Learning

| Prompt | When to Use | File |
|--------|-------------|------|
| **Teach Me** | Deep-dive on any topic from zero | `teach-me.md` |
| **Topic Map** | Before starting a new topic — build the learning path first | `topic-map.md` |
| **Build Knowledge File** | After a learning session — turn understanding into a permanent file | `build-knowledge-file.md` |
| **Cross-Pollinate** | Find connections between two knowledge files you've already written | `cross-pollinate.md` |

## Writing

| Prompt | When to Use | File |
|--------|-------------|------|
| **Sacred Text Tenet** | Write one tenet for `roma.md` | `sacred-text-tenet.md` |

## Health

| Prompt | When to Use | File |
|--------|-------------|------|
| **Fitness Plan** | Building or adjusting your workout routine | `fitness-plan.md` |

## System Maintenance

| Prompt | When to Use | File |
|--------|-------------|------|
| **Sync Docs** | Audit all docs and fix anything stale | `sync-docs.md` |

---

## How to Use These Prompts

In VS Code with the Claude extension:
1. Open the Claude panel
2. Type `@prompts/teach-me.md` (or whichever prompt you want)
3. Add your specific request after it

Examples:
- `@prompts/topic-map.md food preservation and canning`
- `@prompts/teach-me.md teach me about raised bed gardening`
- `@prompts/build-knowledge-file.md [paste your notes]`
- `@prompts/cross-pollinate.md stoicism.md and zen-buddhism.md`
- `@prompts/sacred-text-tenet.md tenet 3`
- `@prompts/sync-docs.md`

---

## Typical Learning Flow

1. **New topic** → `topic-map.md` — understand what you're committing to, build the path
2. **Learning session** → `teach-me.md` — go deep on Stage 1
3. **After session** → `build-knowledge-file.md` — lock it into a permanent file
4. **Over time** → `cross-pollinate.md` — find how it connects to what you already know
5. **When it belongs in Roma** → `sacred-text-tenet.md` — write the principle

---

## Creating New Prompts

When you find yourself giving Claude the same instructions repeatedly, turn it into a prompt file. A good prompt file has:
- Clear purpose and when to use it
- Specific output format
- Tone guidance (direct, Stoic-aligned, no fluff)
- References to relevant repo files
- What to do after the output
