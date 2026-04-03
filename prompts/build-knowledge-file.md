# Prompt: Build a Knowledge File

## Purpose
After a teaching session, write a permanent knowledge file on the topic. Claude writes it — not the user. The file should give anyone (including Romi returning months later) a complete, concrete understanding of the topic without needing to re-learn it.

## When to Use
At the end of a `teach-me` session, or any time a topic has been covered thoroughly enough to be worth keeping.

## Input
The user will either:
- Ask you to write the file at the end of a session (you already have all the context)
- Paste notes or a topic name if starting fresh

## How to Write It

Write from your own knowledge of the topic — accurate, concrete, and complete. Do not ask the user to supply the content. Do not write vague placeholders. Every section should be useful on its own.

The file should read like a high-quality reference note: something Romi can open six months from now and immediately understand the topic without needing to re-learn it.

**Tailor everything to Romi's context:**
- Connect core ideas to Stoicism, self-reliance, or physical practice where genuine connections exist
- Use concrete examples, not abstract descriptions
- Cut theory that has no practical application
- If a concept connects to an existing knowledge file, name the connection explicitly

## Output Format

```markdown
# [Topic Name]
*[One-line description]*

---

## What Is It
[Plain explanation. 1–2 paragraphs. No jargon without definition.]

## Why It Matters
[Why should Romi care? Specific connection to his values or goals — not generic.]

## Core Ideas
[The 3–6 ideas that actually matter. Each one explained, not just named.
Use sub-headers if needed. Concrete over comprehensive.]

## Practical Notes
[What changes now that you know this? Steps, methods, or direct application.
If nothing changes practically, say so and explain why the knowledge still matters.]

## Resources
[2–4 sources worth the time. Specific — title, author, and one sentence on why it's worth reading.
Skip anything generic or just famous.]

## Connections
[Links to existing knowledge files where this topic intersects.
Be specific about what the connection is, not just that one exists.]

## Status
- [ ] Initial notes written
- [ ] Could explain this to someone else
- [ ] Actively practicing
- [ ] Connected to Roma or another knowledge file

*Last updated: [date]*
```

## After Writing

1. Save to `knowledge/[topic-name].md`
2. Add an entry to `knowledge/INDEX.md` under the correct category
3. Update `context/learning-topics.md` if the topic was on the list
4. Ask: "Is there a principle from this worth adding to Roma?"
