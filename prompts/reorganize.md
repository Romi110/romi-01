# Prompt: Reorganize Wiki

## Purpose
Audit the current folder structure and file placement across `knowledge/`, identify what belongs somewhere else, and execute a clean reorganization — moving files, updating CATALOG.md, and fixing any cross-file links.

## When to Use
- When a category has grown large enough to warrant subfolders
- When files were placed in a folder that no longer fits as the wiki expanded
- When a new category (e.g., `mind/`) has been planned but not yet populated
- After a batch of new files reveals a structural pattern that wasn't visible before

---

## Step 1 — Survey

Before proposing anything, read and internalize:
- `knowledge/CATALOG.md` — what exists and what's planned
- The actual folder structure on disk (list files in each subfolder)

Do not propose changes yet.

---

## Step 2 — Identify What Should Move

Look for these patterns:

**Misplaced files:**
Files whose content belongs in a different category than where they currently live. Check: does the file's topic align with the category it's in, or has the wiki's structure evolved away from it?

**Category bloat:**
Any folder with many files where a subset is clearly a distinct sub-domain. Example: `health/` with 15+ files could split off a `health/hair/` subfolder if 3+ hair files exist, or keep flat if the grouping doesn't add clarity.

**Planned but unexecuted migrations:**
Check `CATALOG.md` for any entries that belong in a different category section.

**Cross-links that would break:**
For every file proposed to move, identify which other files link to it. These links need updating after the move.

---

## Step 3 — Propose Before Executing

Output a reorganization plan in this format:

```
## Reorganization Proposal

### Moves
- `skills/building-discipline.md` → `mind/building-discipline.md`
  - Links to update: [list files that reference this path]
- `skills/habit-design.md` → `mind/habit-design.md`
  - Links to update: [...]
- ...

### New folders to create
- `knowledge/mind/` — cognitive/behavioral files split from skills/

### Files that stay where they are
- [category]: stays — [one-line reason]
- ...

### CATALOG.md changes
- Move [file] entry from [category] to [new category]
- Add new [category] section header if needed
```

**Do not move any files until the user approves the proposal.**
Ask: "Move all of these, skip any, or adjust before proceeding?"

---

## Step 4 — Execute

After approval:

1. **Move files** — rename/move each file to its new path
2. **Update cross-links** — for each file that was moved, find every other knowledge file that links to it and update the path. Read each affected file before editing.
3. **Update CATALOG.md** — move entries to the correct category sections; add new section headers as needed; remove empty sections
5. **Verify** — list every file moved and confirm its new location

---

## Rules

- **Propose before moving.** Moving files without approval risks breaking a structure the user has deliberately chosen.
- **Never delete files.** Only move them. If something looks like it should be deleted, flag it for the user to decide.
- **Update every cross-link.** A moved file with broken incoming links is worse than leaving it in place. Read every file that references a moved path and fix it.
- **Keep categories flat unless there's a clear reason to nest.** A subfolder is only worth creating if it has 3+ files that form a distinct sub-domain. Don't create folders for 1–2 files.
- **Don't rename files during a move** unless the filename is genuinely wrong for its new location.
- **Check CATALOG.md first** — see which entries need to move between sections.

---

## After Executing

1. Run a final check: list all moved files with old and new paths
2. Confirm CATALOG.md is consistent with the new structure
3. Note any files flagged for the user to decide on (potential deletes, ambiguous placements)
4. Ask: "Want to run `@prompts/sync-docs.md` to catch anything missed?"
