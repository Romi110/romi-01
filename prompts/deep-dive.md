# Prompt: Deep Dive

## Purpose
Take a topic and produce a complete, wiki-style knowledge file. One prompt, one file — covers the full territory with enough depth to be a lasting reference, and proposes sub-topic files for future exploration.

## Input
The user will name a topic. They may also say:
- How much they already know (assume zero if not stated)
- Whether this is a broad overview topic or a specific sub-topic
- Which existing file proposed this topic (if any)

## How to Write It

**Write from your own knowledge** — accurate, concrete, and complete. Do not ask the user to supply content. Do not write vague placeholders. Every section should be useful on its own.

**Cover the full width of the topic.** Go as deep as the topic is wide. A broad topic like "self-sustained farming" needs to cover all major areas at overview depth. A narrow topic like "hydroponics" goes deep on that one thing.

**Keep files bounded.** If the topic needs more than ~8 sections or ~1500 words to cover properly, it's trying to be two files. Stop — write the parent file at overview depth, split off the overflowing area as a proposed sub-topic `[ ]` in CATALOG.md, and note it at the end. Depth lives in sub-topic files, not in one growing file.

**Minimize redundancy.** Before writing, Grep `knowledge/CATALOG.md` for the topic name — do not read the full file. A `[x]` match means the file already exists — stop and tell the user. A `[ ]` match means it's planned — note it and proceed. No match — proceed.

Before writing the Core Concepts section, grep the 2–3 most related existing files for key concept names. If a concept is already well-explained in another file, write one sentence and link — do not re-explain it. The wiki compounds through links, not copies.

Note: `[x]` entries in CATALOG.md have no description — the file itself is the reference. `[ ]` entries have descriptions because no file exists yet.

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

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: [date]*
```

## Folder Placement

**Before placing the file**, run `ls knowledge/` and read the folder list. Pick the best existing folder. Only if nothing fits, apply the domain test: could 4+ unrelated files live in this new folder? If yes, create it. If no, it's a topic — find the closest existing folder and put it there.

- `knowledge/philosophy/` — philosophical traditions, ideas, thinkers
- `knowledge/health/` — fitness, nutrition, wellness
- `knowledge/meta/` — system docs, workflow, tools
- **New folders** — domain only. `sports/` yes. `basketball/` no — file inside `sports/`.

## After Writing

1. Save to `knowledge/[category]/[topic-name].md`
2. In `knowledge/CATALOG.md`: mark the entry `[x] topic-name` with no description (or add a new `[x] topic-name` line if it wasn't planned). Add any proposed sub-topics as `[ ] topic-name — short description` entries under the correct category. `[x]` entries never get descriptions — the file is the reference.
3. **Domain coherence check** — scan the other files in the same folder. Do they all belong together? If any file in the folder feels like it belongs in a different domain, flag it: "Note: `[filename]` may fit better in `[other-domain]/`." Don't move it without asking — just name the mismatch.
4. **Vocabulary flag** — check if the file's domain (e.g., `cooking/`, `sports/`, `mathematics/`) has coverage in `context/hindi-glossary.md`. If the domain is absent or sparse and the file introduces 5+ specialized terms with no obvious Hindi equivalents, append one line to `hindi/context/pending-terms.md`:
   ```
   | [topic-name] | [domain] | New domain — needs glossary pass before translating |
   ```
   Do not do a full glossary pass here. Just flag it.
5. Ask: "Want to dive into any of the proposed sub-topics next?"
