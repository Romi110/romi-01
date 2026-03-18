# Tag Update (Theme Detection & Tagging)

Read `config/categories.json` for existing tags, then read the daily entries I point you to
(or scan `daily/` for the last 14 days by default).

## Your Job

### 1. Scan Prose for Themes
Read the full prose content of each entry (not just frontmatter). Look for:
- Recurring words, topics, or concerns (e.g., "climate", "anxiety", "client", "reading before bed")
- Named people, places, projects
- Emotional tones that repeat (frustration, pride, dread, calm)
- Activities or habits not already captured by category tags

### 2. Cross-Reference Existing Tags
Check what tags already exist in `config/categories.json`. Identify:
- Tags that frequently appear in entries (already good)
- Tags that never match any prose (dead weight, consider removing)
- Themes in the prose that have NO matching tag yet (gaps)

### 3. Suggest Entry-Level Tags
For each entry that has untagged themes, output the tags you'd add to the frontmatter `tags: []` field.

Format:
```
2026-03-17: [climate, sleep-disrupted, system-setup, day-one]
2026-03-18: [...]
```

### 4. Suggest Category Tag Updates
If a theme appears in 3+ entries and isn't in any category's tag list, suggest adding it.
Format:
```
Add to insights tags: "climate", "anxiety"
Add to health tags: "nap-heavy", "disrupted-schedule"
```

### 5. Write the Changes
If I confirm, do the following:
- Add `tags:` line to the frontmatter of each entry (or update existing one)
- Update `config/categories.json` with any new suggested tags

## Output Format
Show me the proposed changes first. I'll confirm before you write anything.
Be specific. List exactly what you're adding and where.
