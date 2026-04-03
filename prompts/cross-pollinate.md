# Prompt: Cross-Pollinate

## Purpose
Take two knowledge files and find what they're actually saying to each other — agreements, contradictions, tensions, and what the gap between them reveals. Knowledge compounds when ideas connect across domains.

## When to Use
- After writing a second knowledge file on a different topic
- When you sense two things you've studied are related but can't articulate how
- When a teaching session unexpectedly echoes something from a different file
- As a periodic practice once you have 3+ knowledge files

## Input
The user will name two files (e.g., `philosophy/stoicism.md` and `philosophy/zen-buddhism.md`, or `philosophy/stoicism.md` and `health/fitness-plan.md`). Read both in full before writing anything.

## Output Format

```markdown
# Cross-Pollination: [Topic A] × [Topic B]

## Where They Agree
[The ideas that both sources are pointing at, even if in different language.
Be specific — quote or paraphrase the actual concept from each side.]

## Where They Diverge
[Genuine disagreements, not just different vocabulary.
What does each tradition/approach say that the other would push back on?]

## The Tension
[What's interesting about the disagreement? Don't resolve it prematurely.
Sometimes the tension is the insight — sit with it.]

## What This Reveals
[What does seeing these two together show that neither shows alone?
This is the synthesis — the new understanding that emerges from the comparison.]

## Practical Implication
[Given both of these are true (or at least useful), what does that mean for how to live or act?
One or two concrete implications.]

## Possible Roma Connection
[Is there a tenet in Roma that either of these supports, complicates, or extends?
If yes, note which tenet and how.]
```

## Rules

- **Don't force agreement.** If two ideas genuinely conflict, say so. False synthesis is worse than acknowledged tension.
- **Be specific.** "Both talk about presence" is not useful. Name the exact concept from each source.
- **The practical implication is required.** If you can't say what this changes about how to live, the cross-pollination hasn't landed yet.
- **This is not a summary of both files.** The reader already knows both. Write only what emerges from the comparison.

## After Writing

Save to the appropriate subfolder under `knowledge/` as `[topic-a]-x-[topic-b].md` if it's worth keeping as a permanent reference.
Otherwise treat it as a conversation artifact — useful for today, not necessarily a permanent file.

Ask the user: "Is this worth saving, or was it useful just to think through?"
