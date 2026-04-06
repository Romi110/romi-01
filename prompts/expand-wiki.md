# Prompt: Expand Wiki

## Purpose
Read the current state of the wiki — what exists and what's planned — and propose new topics and subtopics worth adding. This is a planning prompt, not a writing prompt. Output is a list of proposals to review and accept, not files.

## When to Use
- When the wiki feels thin in a category and you want to know what's missing
- Periodic planning: "what should I learn next?"
- After finishing a batch of files and looking for what to build next
- When a new domain opens up and you want to map its full territory

## How to Run It

Read this file before proposing anything:
- `knowledge/CATALOG.md` — what exists (`[x]`) and what's already planned (`[ ]`). Don't re-propose existing entries.

If a specific category is named, read only that section of CATALOG.md — from its `## [Category]` header to the next `##` header. Do not load the full file for single-category requests.

Optionally, the user may specify a category to focus on (e.g., "expand the Mind section"). If no category is given, survey the entire wiki.

---

## What to Look For

**Gaps in existing categories:**
- Categories with few entries relative to their scope
- Topics named in the body of existing files (in Connections or passing references) but not yet written
- Natural pairs: if file A exists, does its complement or inverse exist?

**Subtopic opportunities:**
- Broad files that could be split or expanded (e.g., a file that covers 3 big ideas, each of which could be its own file)
- Files in the Connections section that link to a file that doesn't exist yet

**Cross-domain connections:**
- Topics that would connect two existing categories (e.g., a Stoicism × farming file, or a sleep × training file)
- Applied versions of theoretical files (e.g., a theory file with no corresponding practice file)

**Romi's context — weight proposals toward:**
- Self-reliance and practical skill
- NJ-specific context (zoning, farming regs, net metering, local ecology)
- Stoic and philosophical application
- Vegetarian diet, Indian heritage
- Financial independence and homeownership trajectory
- Health longevity over short-term optimization

---

## Output Format

Group proposals by category. Use CATALOG.md syntax throughout — proposals can be pasted directly into that file.

```
## Proposed Additions

### [Category]
- [ ] `category/filename.md` — [what it covers and why it belongs here]
- [ ] `category/filename.md` — [what it covers and why it belongs here]

### [Category]
...
```

After the proposals:

**Rationale for top picks:** briefly explain which 3–5 proposals have the highest value for Romi's current stage and why.

**What to pass on:** note any areas that are genuinely thin and could be filled but aren't urgent.

---

## Tone and Constraints

- No filler. Every proposal should earn its place.
- Don't re-propose anything already in CATALOG.md (whether checked or unchecked).
- Don't propose files just to fill a category — propose files that would be genuinely used.
- Proposals for NJ-specific files (land use, ecology, energy regulations) should be flagged as high-value given Romi's location and goals.
- If a category is already well-covered, say so instead of padding it with weak proposals.

---

## After Output

1. User reviews and picks which proposals to accept
2. Accepted proposals get added to `knowledge/CATALOG.md` under the right category
3. Run `@prompts/deep-dive.md [topic]` on whichever file to write next
