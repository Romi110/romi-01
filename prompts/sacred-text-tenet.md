# Prompt: Sacred Text — Write One Tenet

## Purpose
Write one tenet section for the Book of Tenets. Each section should stand alone — readable on its own, useful on its own — while fitting the tone and structure of the whole document.

## Before Writing
Read these files for context:
- `knowledge/philosophy/core_tenets_of_wisdom.md` — the philosophical source material
- `knowledge/philosophy/philosophy-traditions-guide.md` — cross-tradition analysis per tenet
- `knowledge/roma/sacred-text-plan.md` — the plan, tone, and format spec

## Input
The user will tell you which tenet to write (1–7) and may give additional direction. If they don't specify direction, use the defaults in the plan.

The 7 tenets:
1. The mind makes the world
2. Holding tight makes it worse
3. You are not alone in here
4. Now is the only place
5. You become what you do
6. Meaning is made, not found
7. The small self gets in the way

## Output Format

Write the tenet section in this exact structure:

---

```markdown
# Tenet [N]: [Short Title]

## The Statement
[One sentence. Declarative. No jargon. Should be something a person can remember without trying.]

## Quotes
> "[Quote 1]"
> — [Name, tradition/era]

> "[Quote 2]"
> — [Name, tradition/era]

> "[Quote 3]"
> — [Name, tradition/era]

## What This Actually Means
[2–3 paragraphs of plain prose. Not academic. Explain it like you're talking to a sharp person who has never studied philosophy. What is this really saying? Why does it matter? What is the insight beneath the words?]

## What It Looks Like in Real Life
[3–4 specific, concrete examples. Not "a person might feel..." — actual situations. Work, relationships, self-talk, decisions. Make them recognizable.]

## What It Is Not
[1–2 paragraphs clarifying the most common misreading. Every tenet has an obvious wrong interpretation. Name it and correct it. This section prevents the text from being used as an excuse for passivity, coldness, or avoidance.]

## Remember
- [Takeaway 1]
- [Takeaway 2]
- [Takeaway 3]
- [Takeaway 4]
- [Takeaway 5 — optional]
```

---

## Tone Rules

- **Direct.** No padding. No hedging. Every sentence earns its place.
- **Slightly elevated but not academic.** This is a text meant to be read slowly. Not a blog post. Not a textbook.
- **No cheerleading.** No "you've got this," no motivational language. Just the truth, clearly stated.
- **Stoic in backbone, Zen in texture.** Firm about what is true. Spacious about how to hold it.
- **Quotes should be cross-cultural where possible.** Pull from East and West — Stoic, Buddhist, Taoist, Existentialist, Sufi — to show the universality of the idea.

## Quality Check Before Outputting

Before writing the final version, ask:
1. Is the Statement something a person can actually remember?
2. Do the quotes come from at least 2 different traditions?
3. Does the explanation avoid philosophy jargon entirely?
4. Are the real-life examples specific enough that a reader thinks "yes, that's happened to me"?
5. Does the "What It Is Not" section prevent the most obvious misuse of this tenet?
6. Are the Remember bullets short enough to hold in working memory?

If any answer is no, revise before outputting.

## After Writing

Append the completed tenet section to `knowledge/roma/roma.md`. If the file does not exist, create it with this header first:

```markdown
# Roma
*A personal book of tenets*

---
```

Then append the tenet section followed by `---`.

Ask the user: "Ready to move to Tenet [N+1], or do you want changes to this one first?"

Do not auto-generate the next tenet. One at a time, by request.
