# Prompt: Sync Docs

## Purpose
Audit the entire repo for drift. Check that documentation reflects the actual state of files, prompts, and knowledge. Fix what's stale. Flag what's missing.

## When to Use
- After adding or removing files
- After rewriting a prompt or knowledge file
- When something feels out of date
- Start of each month as a maintenance habit

## What to Audit

Work through each check in order. Report findings before making changes.

---

### 1. File Inventory
List every file currently in the repo. Compare against:
- The prompts table in `CLAUDE.md`
- The prompts table in `prompts/README.md`
- The catalog in `knowledge/CATALOG.md` — this is the authoritative file registry; do not use `DESIGN.md` as a file list source

Flag anything that exists in docs but not on disk, or on disk but not in docs.

---

### 2. Prompts Check
For each prompt listed in `prompts/README.md`:
- Does the file exist?
- Does the description match what the prompt actually does?
- Is it referenced correctly in `CLAUDE.md`?

---

### 3. Knowledge Index Check
For each file in `knowledge/`:
- Is it listed in `knowledge/CATALOG.md` under the correct category?
- Is its description accurate?

---

### 4. Learning Topics Check
Read `knowledge/CATALOG.md`. For each topic marked `[ ]` (planned):
- Does a knowledge file already exist for it? If so, mark it `[x]`.

For each topic marked `[x]` (done):
- Does the referenced knowledge file actually exist on disk?

---

### 5. Goals Check
Read `goals/2026-goals.md`. Flag any references to systems that no longer exist (e.g., daily logs, frontmatter fields, scripts).

---

---

## Output Format

Report findings in this structure:

```
## Sync Report — [date]

### Found Issues
- [file]: [what's wrong]
- ...

### Proposed Fixes
- [what to change and where]
- ...

### Already in Sync
- [areas that are clean]
```

Then ask: "Fix all of these, fix specific ones, or review first?"

Do not make changes without confirmation unless the user explicitly says to fix everything.

## After Syncing
Verify `knowledge/CATALOG.md` matches the actual state of all files on disk.
