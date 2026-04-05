# Prompt: Cross-Pollinate

## Purpose
Connect knowledge across files to produce something neither file shows alone — either a synthesis analysis or a full new knowledge file that emerges from the intersection.

## Two Modes

### Mode 1: Analysis (two files)
Use when you want to understand how two topics relate: where they agree, conflict, and what tension between them reveals. Output is a standalone analysis document, not necessarily a permanent knowledge file.

**Input**: Two file names.
**Output format**:

```markdown
# Cross-Pollination: [Topic A] × [Topic B]

## Where They Agree
[Ideas both sources point at, even in different language. Quote or paraphrase the exact concept from each side — not summaries.]

## Where They Diverge
[Genuine disagreements, not just different vocabulary. What does each tradition say that the other would push back on?]

## The Tension
[What's interesting about the disagreement? Don't resolve it prematurely. The tension is often the insight.]

## What This Reveals
[What does seeing these two together show that neither shows alone? This is the synthesis.]

## Practical Implication
[Given both are true (or at least useful), what does that change about how to act? One or two concrete implications.]
```

---

### Mode 2: Synthesis (one anchor + multiple cross-topics → new knowledge file)
Use when you want to synthesize an anchor topic with insights from multiple other files to produce a new, permanent knowledge file in the appropriate subfolder.

**Input**: 
- One anchor topic (the primary lens — the problem to solve, the domain to act in)
- Two or more cross-topic files (knowledge that bears on the anchor)
- What the user wants the output file to accomplish — the practical question it answers

**Process**:
1. Read the anchor topic and all cross-topic files in full
2. Identify the specific insights from each cross-topic that apply to the anchor topic's practical question
3. Build a new knowledge file that answers the user's question using those synthesized insights — not a summary of source files, but a genuinely new document
4. Place it in the most appropriate subfolder. Usually the anchor topic's domain unless the synthesis creates a new category.
5. After writing, update INDEX.md and wiki-plan.md

**Output format**: Standard knowledge file template (What Is It, Why It Matters, Core Concepts, Key Considerations, Getting Started, Common Mistakes, Resources, Connections, Status).

**Rules for Mode 2**:
- The new file must be actionable — it answers a specific question with specific answers
- Don't summarize the source files. Extract only what's relevant to the practical question.
- The synthesis should produce insight that doesn't exist in any single source file — the point is the intersection
- Connections section must link back to all source files

---

## Rules (Both Modes)

- **Don't force agreement.** If ideas genuinely conflict, say so. False synthesis is worse than acknowledged tension.
- **Be specific.** "Both talk about resilience" is not useful. Name the exact concept from each source and how it applies.
- **The practical implication is required.** If you can't say what this changes about how to live or act, the cross-pollination hasn't landed yet.
- **This is not a summary of both files.** The reader already knows both. Write only what emerges from the comparison or synthesis.

## After Writing (Mode 1)
Ask the user: "Is this worth saving as a permanent file, or was it useful just to think through?"
If saving: use the filename pattern `[topic-a]-x-[topic-b].md` in the appropriate subfolder.

## After Writing (Mode 2)
Mark the new file in INDEX.md (add row to appropriate section). Mark it in wiki-plan.md with `[x]` if it was planned, or add it as a new entry. Propose any obvious follow-on sub-topics.
