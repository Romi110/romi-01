# Prompt: Build a Knowledge File

## Purpose
Turn what you just learned into a permanent knowledge file. This closes the loop between a learning session and lasting notes. Do not summarize the conversation — write from understanding.

## When to Use
After a `teach-me` session, after reading a chapter or book, or any time you've absorbed something worth keeping.

## Before Starting
Read:
- `templates/knowledge-topic.md` — the required structure
- `context/about-me.md` — so the file reflects Romi's lens, not generic notes

## Input
The user will provide:
- The topic name
- Key things they took away from the session (in their own words, rough is fine)
- Optionally: a specific angle or connection they want emphasized

If the user gives rough notes, work with those. Do not pull from your own knowledge to pad the file — only expand on what the user actually understood from the session.

## Output Format

Write the file using the structure from `templates/knowledge-topic.md`:

```markdown
# [Topic Name]
*[One-line description of what this file is]*

---

## What Is It
[Plain explanation. No jargon without definition. 2–3 paragraphs max.]

## Why It Matters
[Why should Romi care? Connect to his values: self-reliance, Stoicism, practical skill, long-term thinking.]

## Core Ideas
[The 3–5 ideas that actually matter. Not an exhaustive list — the signal, not the noise.]

## Key Figures / Sources
[Who to know, what to read. Only include if genuinely worth the time.]

## Practical Notes
[How does this change what you do? What's different now that you know this?]

## Connections
[Links to other knowledge files. Where does this idea show up elsewhere in the system?]

## Status
- [ ] Initial notes written
- [ ] Could explain this to someone else
- [ ] Actively practicing
- [ ] Connected to Roma or another knowledge file

*Last updated: [date]*
```

## Rules

- **Write from the user's understanding, not from the session transcript.** If the user can't explain something in their own words, note it as a gap rather than filling it with your words.
- **No padding.** Every section should earn its place. If Practical Notes are empty because it's a purely theoretical topic, say so briefly.
- **Flag gaps explicitly.** If there's something the user mentioned but didn't fully grasp, add a note like `[Needs more work — didn't fully click yet]` rather than writing something polished that masks a gap.
- **Connections matter.** Check existing knowledge files and link anything relevant. A knowledge file with no connections is an island.

## After Writing

1. Save to `knowledge/[topic-name].md`
2. Add an entry to `knowledge/INDEX.md` under the correct category
3. Update `context/learning-topics.md` if the topic was on the list
4. Ask: "Is there anything here that belongs in Roma?"
