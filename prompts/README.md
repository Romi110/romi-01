# Prompts Index

Reusable prompt files for Claude. Reference with `@prompts/filename.md` in VS Code.

---

## Learning

| Prompt | When to Use | File |
|--------|-------------|------|
| **Deep Dive** | Learn any topic — produces a complete wiki-style knowledge file | `deep-dive.md` |
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
2. Type `@prompts/deep-dive.md` (or whichever prompt you want)
3. Add your specific request after it

Examples:
- `@prompts/deep-dive.md self-sustained farming`
- `@prompts/deep-dive.md hydroponics` (to expand a proposed sub-topic)
- `@prompts/cross-pollinate.md stoicism.md and fitness-plan.md`
- `@prompts/sacred-text-tenet.md tenet 3`
- `@prompts/sync-docs.md`

---

## Typical Flow

1. **New topic** → `deep-dive.md` — get a complete wiki-style overview with proposed sub-topics
2. **Go deeper** → `deep-dive.md` again — pick a proposed sub-topic and expand it
3. **Find connections** → `cross-pollinate.md` — see how two files relate
4. **When it belongs in Roma** → `sacred-text-tenet.md` — write the principle

---

## Creating New Prompts

When you find yourself giving Claude the same instructions repeatedly, turn it into a prompt file. A good prompt file has:
- Clear purpose and when to use it
- Specific output format
- Tone guidance (direct, Stoic-aligned, no fluff)
- References to relevant repo files
- What to do after the output
