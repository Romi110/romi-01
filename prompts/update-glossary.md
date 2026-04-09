# Prompt: Update Hindi Glossary

## Purpose
Process staged terms in `hindi/context/pending-terms.md`, resolve each one, merge confirmed entries into `context/hindi-glossary.md`, and clear the staging file. Run this whenever pending-terms has accumulated entries — typically after translating a new domain or after several translation sessions.

## Steps

### 1. Read the current state
Read both files in full before doing anything:
- `hindi/context/pending-terms.md` — the staged terms and flagged domains
- `context/hindi-glossary.md` — the existing canonical glossary

If pending-terms has no entries (only the "none yet" placeholders), stop and tell the user there's nothing to process.

### 2. Resolve staged terms

For each row in the **Staged Terms** table:

- **Check if already in the glossary.** If an equivalent entry exists, note that the term was already covered (possibly under a different English phrasing) and mark it for removal from staging.
- **Evaluate the Hindi used.** Is it natural? Consistent with the register and style in `context/hindi-style.md`? Does a better standard term exist?
  - If the coined term is correct and natural → promote it to the glossary
  - If a better term exists → use the better one, note the correction
  - If uncertain → flag it with a `?` for manual review rather than guessing
- **Assign to the correct section** in the glossary (Finance, Geopolitics, Technology, etc.). If the term spans domains, put it in the most relevant one.

### 3. Resolve flagged domains

For each row in the **Flagged Domains** table:

- Identify the 10–20 most domain-specific terms that would appear in files from that domain
- Write their canonical Hindi translations
- Add them to the appropriate section in `context/hindi-glossary.md` (create a new section if the domain has no coverage)
- Remove the domain from the flagged list once covered

### 4. Update the glossary

Edit `context/hindi-glossary.md`:
- Add all promoted terms to the correct section table, in alphabetical order within each section
- Add any new domain sections at the end, following the existing table format exactly
- Do not reformat or reorder existing entries — append only

### 5. Clear the staging file

Rewrite `hindi/context/pending-terms.md` back to its empty state:
- Remove all resolved rows from Staged Terms, replace with `*(none yet)*`
- Remove all resolved rows from Flagged Domains, replace with `*(none yet)*`
- Keep the header, instructions, and table structure intact

### 6. Report

Tell the user:
- How many terms were added to the glossary
- Which domains got new coverage
- Any terms flagged with `?` that need manual review
- Whether any staged terms were already covered (duplicates)

## Format for new glossary entries

Match the existing table format exactly:

```
| English term | हिंदी अनुवाद | Notes if needed |
```

Notes column: use for transliterations where the Hindi is non-obvious, cases where a simpler term is also acceptable, or gender/declension notes that affect usage.
