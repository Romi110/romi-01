# Prompt: Reorganize Wiki

## Purpose
Reorganize one domain at a time — move misplaced files, create sub-catalogs when domains hit scale, and fix cross-links. Works from CATALOG.md and grep only; never reads full files to plan.

## When to Use
- A domain reaches 25+ written files (sub-catalog trigger)
- Files were placed in a folder that no longer fits as the wiki expanded
- A new domain has been created and files from other domains belong there

## Scope Rule

**One domain per session.** Name the domain upfront. Do not reorganize the whole wiki in one run — context accumulates fast and cross-link updates compound. If multiple domains need work, run this prompt separately for each.

---

## Step 1 — Survey (CATALOG.md only)

Read `knowledge/CATALOG.md` once. Do not read individual knowledge files.

Identify for the target domain:
- How many `[x]` entries exist
- Any entries that belong in a different domain section based on topic name alone
- Whether the domain has hit 25+ written files (sub-catalog trigger)
- Any planned `[ ]` entries that belong in a different domain
- Any inbound files flagged by a prior session (user will name them upfront if so)

If the user says "pick up [file] from [domain]" at the start, treat it as a confirmed inbound move — skip re-evaluating placement, go straight to grep for cross-links.

Do not propose changes yet.

---

## Step 2 — Identify What Should Move

Still working from CATALOG.md only — no file reads.

**Misplaced entries (within-domain):** Does the topic name align with the domain it's listed under? If not, flag it as an inbound move candidate for the correct domain.

**Cross-domain misplacement:** Scan the other domain headers and entries already visible in CATALOG.md. If a topic in the target domain clearly fits another domain by name alone, flag it as a cross-domain suggestion — do not move it this session. The receiving domain handles it when that domain is the target.

**Sub-folder trigger (4+ clustered files):** Look for 4+ `[x]` entries in the target domain whose topic names share a clear sub-topic cluster. If no sub-folder exists yet, flag it as a grouping candidate — files move into `knowledge/[domain]/[subtopic]/`. The catalog lists them flat with the path prefix; no new catalog file is created. If a sub-folder already exists, confirm it stays flat — sub-folders never nest.

**Sub-catalog trigger (25+ written files):** If the domain has 25+ `[x]` entries, create `knowledge/[domain]/CATALOG.md` and replace the domain section in the main CATALOG.md with a single pointer:
```
## Domain → see knowledge/[domain]/CATALOG.md (N written, N planned)
```
The domain catalog lists all entries flat, including any sub-folder files by path prefix. It never points to further catalogs.

**Cross-links to update:** For each file that will change path, grep for the old filename across `knowledge/` — do not read files, use grep output only. Note which files contain references to the moving path.

---

## Step 3 — Propose Before Executing

```
## Reorganization Proposal — [Domain]

### Moves (this session)
- `old/path/file.md` → `new/path/file.md`
  - References found in: [grep results — file paths only]

### New sub-folders (file grouping only, no catalog)
- `knowledge/[domain]/[subtopic]/` — triggered by N clustered files: [list files moving in]

### New sub-catalogs (domain-level only)
- `knowledge/[domain]/CATALOG.md` — triggered by N written files

### CATALOG.md changes
- Move [entry] from [section] to [section]
- Replace [domain] section with pointer line (if sub-catalog)

### Cross-domain suggestions (not moved this session)
- `[topic]` currently in [domain] — fits [other domain] better
  - Handle by running: `@prompts/reorganize.md` on [other domain]
  - That session will move it in as an inbound file; no prep needed here

### Files staying put
- [file] — stays, fits domain
```

Do not move any files until approved.
Ask: "Move all, skip any, or adjust before proceeding?"

---

## Step 4 — Execute

After approval, in this order:

1. **Move files on disk** — rename/move each file to its new path
2. **Fix cross-links** — for each file flagged in Step 2, grep for the old path string, then edit only the specific lines that contain it. Do not read the full file unless the grep match is ambiguous.
3. **Update CATALOG.md** — move entries to correct sections; add pointer line if creating a sub-catalog; remove empty sections
4. **Verify** — list every file moved with old → new path

---

## Rules

- **Plan from CATALOG.md only.** If you can't determine placement from the topic name, the filename needs fixing — that's a separate task.
- **Grep for links, don't read files.** Use grep to find references to moved paths. Edit only matching lines.
- **One domain per session.** Stop after the target domain is done.
- **Never delete files.** Flag ambiguous files for the user to decide.
- **No renames during moves** unless the filename is wrong for the new location.
- **Sub-folders at 4+ clustered files only.** Don't create a folder for 1–3 files.
- **Sub-folders never nest.** `domain/subtopic/file.md` is the deepest valid path. No further nesting.
- **Sub-folders never get catalog files.** Only domains get catalogs. Sub-folders are path organization only.
- **Two-level catalog cap.** `CATALOG.md` → `knowledge/[domain]/CATALOG.md` is the maximum hierarchy. Hard limit.

---

## After Executing

1. List all moved files: old path → new path
2. Confirm CATALOG.md reflects the new structure
3. Flag anything left for user decision
4. If sub-catalog was created, confirm the pointer line is in place
5. Ask: "Run `@prompts/sync-docs.md` to catch anything missed?"
