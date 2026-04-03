# Prompt: Topic Map

## Purpose
Before starting to learn something, build a learning path. Not a summary — a map. What do you need to understand first, what's worth reading, what does genuine understanding actually look like, and what are you committing to when you pick this topic.

## When to Use
- When adding a new topic to `context/learning-topics.md`
- Before a teach-me session on something unfamiliar
- When you want to learn something properly rather than just browse it

## Input
The user will name a topic. They may also say how much they already know (assume zero if not stated).

## Output Format

```markdown
# Topic Map: [Topic Name]

## What This Actually Is
[One paragraph. Plain language. What is this field/skill/subject really about — not the dictionary definition,
but the real thing. What questions does it answer? What problems does it solve?]

## Why It's Worth Your Time
[Specific to Romi. Connect to his values: self-reliance, Stoicism, practical skill, long-term thinking.
If you can't make the case here, say so — some topics aren't worth the investment.]

## What You Need to Know First
[Prerequisites, if any. What concepts or skills make this topic much easier to understand?
If there are none, say so.]

## The Learning Path

### Stage 1 — Foundation (understand the basics)
- [What to learn]
- [What to learn]
- Milestone: [What you can do or explain when Stage 1 is done]

### Stage 2 — Working Knowledge (can apply it)
- [What to learn]
- [What to learn]
- Milestone: [What you can do or explain when Stage 2 is done]

### Stage 3 — Depth (optional — only if this becomes a priority)
- [What to go deeper on]
- Milestone: [What genuine expertise looks like here]

## Best Starting Resources
[2–4 specific resources — books, references, practices. Not the most famous ones necessarily.
The ones actually worth the time for someone learning from zero.]

## What Beginners Get Wrong
[The most common mistake or misconception when starting out.
What wastes time or builds the wrong foundation.]

## What "I Actually Know This" Looks Like
[Concrete test. Not "I've read about it" — what can you DO or explain or demonstrate
when you genuinely understand this topic?]

## Connections to Existing Knowledge
[Does this topic connect to anything already in `knowledge/`?
Where does it overlap, conflict, or extend what's already there?]

## Honest Time Estimate
[Stage 1 is roughly X hours/weeks of focused work. Stage 2 requires Y.
Don't soften this — if it's a year-long commitment, say so.]
```

## After Writing

1. Add the topic to `context/learning-topics.md` if it isn't there
2. Create a skeleton knowledge file at `knowledge/[topic-name].md` using `templates/knowledge-topic.md` — leave most sections empty, just fill in "What Is It" and "Why It Matters" based on the map
3. Ask: "Ready to start Stage 1 with a teach-me session, or do you want to sit with the map first?"
