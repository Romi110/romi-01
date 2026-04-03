# Prompt: Deep Dive

## Purpose
Take a topic and produce a complete, wiki-style knowledge file. One prompt, one file — covers the full territory of the topic with enough depth to be a lasting reference, and proposes sub-topic files for future exploration.

This replaces the old topic-map → teach-me → build-knowledge-file flow. One step instead of three.

## When to Use
- Learning something new — give a topic, get a complete reference file
- Expanding the wiki — filling in a sub-topic proposed by an existing file
- Any time you want to understand something well enough to explain it

## Input
The user will name a topic. They may also say:
- How much they already know (assume zero if not stated)
- Whether this is a broad overview topic or a specific sub-topic
- Which existing file proposed this topic (if any)

## How to Write It

**Write from your own knowledge** — accurate, concrete, and complete. Do not ask the user to supply content. Do not write vague placeholders. Every section should be useful on its own.

**Cover the full width of the topic.** Go as deep as the topic is wide. A broad topic like "self-sustained farming" needs to cover all major areas at overview depth. A narrow topic like "hydroponics" goes deep on that one thing.

**Minimize redundancy.** Before writing, check `knowledge/INDEX.md` for existing files. If another file already covers a concept well, link to it instead of re-explaining. Reference existing knowledge — don't duplicate it.

**Tailor to Romi's context:**
- Connect to self-reliance, Stoicism, practical skill, or long-term thinking where genuine connections exist
- Use concrete examples, not abstract descriptions
- Cut theory that has no practical application
- Use tech/software analogies where they help — that's his world

## Output Format

```markdown
# [Topic Name]
*[One-line description]*

---

## What Is It
[Plain explanation. 1–2 paragraphs. No jargon without definition.
What is this actually about? What questions does it answer?]

## Why It Matters
[Why should Romi care? Connect to his values and goals — not generic motivation.
If you can't make the case, say so honestly.]

## Core Concepts
[The essential ideas that make up this topic. Use sub-headers for each.
Each concept explained with enough depth to actually understand it — not just named.
For broad topics, this is where you cover the major areas at overview level.]

### [Concept 1]
[Explanation — what it is, why it matters, how it works]

### [Concept 2]
[...]

## Key Considerations
[What matters when actually doing this? Practical constraints, common trade-offs,
things that aren't obvious from the overview. Real-world context.]

## Getting Started
[If someone wanted to begin with this topic tomorrow, what are the first steps?
Concrete, actionable, realistic for someone with a full-time job.]

## Common Mistakes
[What do beginners get wrong? What wastes time or builds the wrong foundation?]

## Resources
[2–4 sources worth the time. Specific — title, author, and one sentence on why.
Skip anything generic or just famous.]

## Connections
[Links to existing knowledge files where this topic intersects.
Be specific about what the connection is, not just that one exists.
Format: `[file-name.md](../category/file-name.md)` — [what the connection is]]

## Proposed Files
[Sub-topics worth their own deep-dive file. These are NOT created yet — just proposed.
Each entry: proposed path, one-line description, and why it deserves its own file.

- `category/file-name.md` — [description]. [Why it's worth a separate file.]
- `category/file-name.md` — [description]. [Why it's worth a separate file.]

If this is already a specific sub-topic with no further subdivision needed, write "None — this topic is self-contained."]

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: [date]*
```

## Folder Placement

Place the file in the appropriate subfolder under `knowledge/`:
- `knowledge/philosophy/` — philosophical traditions, ideas, thinkers
- `knowledge/roma/` — Roma, tenets, sacred text work
- `knowledge/health/` — fitness, nutrition, wellness
- `knowledge/meta/` — system docs, workflow, tools
- **New folders** — create as needed for new domains (e.g., `knowledge/farming/`, `knowledge/skills/`)

## After Writing

1. Save to `knowledge/[category]/[topic-name].md`
2. Add an entry to `knowledge/INDEX.md` under the correct category (create a new category section if needed)
3. Update `context/learning-topics.md` if the topic was on the list
4. Ask: "Is there a principle from this worth adding to Roma?"
5. Ask: "Want to dive into any of the proposed sub-topics next?"
