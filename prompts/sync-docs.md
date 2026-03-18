# Sync Documentation

You are maintaining the romi-01 personal growth system. Your job is to audit every documentation
and reference markdown file in the repo, identify anything that is stale or inconsistent with the
current system state, and update those files directly.

## Step 1 — Load the Canonical Reference

Read these files first. They define how the system currently works:

1. `DESIGN.md` — system architecture, canonical daily entry format, component reference
2. `config/categories.json` — current category definitions, tracking fields, tags
3. `docs/logging-system.md` — frontmatter spec and data format

These three files are ground truth. Everything else should agree with them.

## Step 2 — Audit These Files

Read each file below and check it against the canonical reference:

| File | What to Check |
|------|---------------|
| `README.md` | Directory structure, workflow steps, script references |
| `knowledge/using-this-system.md` | Daily/weekly/monthly workflows, script commands |
| `knowledge/vscode-claude-workflow.md` | Entry creation steps, VS Code tips, scripts section |
| `context/about-me.md` | Health/fitness section, current priorities, stated goals |
| `context/learning-topics.md` | In-progress markers (`[~]`), completed markers (`[x]`) |
| `docs/logging-system.md` | Frontmatter field examples, category descriptions |
| `docs/changelog.md` | Missing recent changes |
| `prompts/README.md` | Missing or renamed prompt files in the index |
| `templates/daily-entry.md` | Instructions pointing to current workflow |
| `templates/weekly-review.md` | Sections match current review structure |
| `templates/monthly-review.md` | Sections match current review structure |
| `knowledge/stoicism.md` | Status checklist reflects actual progress |

## Step 3 — Identify Issues

For each file, identify:

- **Outdated workflow steps** — still say "copy the template" when scripts exist, wrong script flags, old directory paths
- **Stale frontmatter examples** — field names that don't match `config/categories.json`
- **Missing components** — new directories, scripts, or prompts not mentioned where they should be
- **Inconsistent status** — goals or learning topics marked as starting when they're now in progress
- **Placeholder text** — empty sections or `<!-- TODO -->` markers that should now be filled given what's known

## Step 4 — Update Directly

For every issue found, edit the file to fix it. Do not ask for approval on individual edits — just make the change and move on.

Rules:
- **Preserve all content not being updated.** Never remove sections that still apply.
- **Match the voice and style of surrounding text.** Don't make it sound like documentation from somewhere else.
- **Don't over-explain.** Short, direct updates. This system values brevity.
- **If a section is genuinely unknown** (e.g., a status that can't be determined without personal context), leave it with a comment flagging it rather than guessing.
- **Never edit daily entry files** (`daily/`) — those are personal logs, not documentation.
- **Never edit knowledge files about learned topics** (stoicism, food-preservation, etc.) unless the status checklist or cross-references are wrong.

## Step 5 — Report

After all edits, output a table:

| File | Change Made | Reason |
|------|-------------|--------|
| `README.md` | Updated directory tree | Added config/, scripts/, prompts/ |
| `context/about-me.md` | Updated health section | Fitness plan now exists |
| ... | ... | ... |

If nothing needed changing in a file, say so: `No changes — already current.`

End with one sentence: what was the biggest category of drift you found?

## Tone

Precise. No preamble. Start reading files immediately.
