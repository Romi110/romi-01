# Prompt: Translate

## Purpose
Translate one or more knowledge files into a target language and save them to a root-level folder named after that language. The translated files mirror the original structure and are kept in sync with the source.

## Input
The user will specify:
- **Target language** (e.g., "Spanish", "Hindi", "Japanese")
- **Which files to translate** — one of:
  - A single file path (e.g., `knowledge/history/japan-history.md`)
  - A domain folder (e.g., `knowledge/history/`)
  - A list of files
  - "all" — the entire wiki

## Hindi Translations — Read These First

Before translating anything into Hindi, read these three files in full. They eliminate all re-derivation cost:

1. **`context/hindi-style.md`** — register, script decisions, how to handle English terms, punctuation, sentence structure
2. **`context/hindi-glossary.md`** — canonical translations for ~150 recurring terms across all wiki domains. Use these verbatim — do not coin your own translations for listed terms. Includes standard section header translations and status checkbox translations.
3. **`hindi/context/reference.md`** — a complete worked example showing correct style, register, and terminology in practice. Match this.

## How to Translate

**Translate the content, not the structure.** Every heading, paragraph, list item, and table cell should be translated. Do not translate:
- File paths in links (keep `[japan-history.md](japan-history.md)` link paths as-is — they still point to the English source)
- Code blocks, CLI commands, or technical strings
- Proper nouns per the style guide (names of people, places, organizations — see `context/hindi-style.md`)
- Frontmatter keys if any exist

**Translate link display text.** If a link is `[networking-fundamentals.md](networking-fundamentals.md)`, translate the display text but keep the path unchanged.

**Preserve formatting exactly.** Headers, bold, italics, tables, bullet lists, numbered lists — same structure, translated content.

**Translate the full file in one pass.** Do not split, abbreviate, or stop partway. An incomplete translation with placeholder or gibberish text is worse than no translation. If the file is long, translate it completely before writing.

**Quality bar:** natural fluency in the target language — sentence structure appropriate to the language, not word-for-word from English. For Hindi, use SOV structure as a native speaker would.

## Output Folder Structure

Save translated files to a root-level folder named after the language in lowercase:
- Spanish → `spanish/`
- Hindi → `hindi/`
- Japanese → `japanese/`
- French → `french/`

Mirror the source path under the language folder:
- `knowledge/history/japan-history.md` → `hindi/knowledge/history/japan-history.md`
- `knowledge/energy/solar-panels.md` → `hindi/knowledge/energy/solar-panels.md`

## Steps

1. **If translating to Hindi**, read `context/hindi-style.md`, `context/hindi-glossary.md`, and `hindi/context/reference.md` before proceeding.

2. **Identify files.** If the user named a folder or said "all," list all `.md` files in scope. Confirm with the user if the count is large (>10 files) before proceeding.

3. **Check for existing translations.** Before translating a file, check if `[language]/[path]` already exists. If it does, ask the user whether to overwrite or skip.

4. **Translate and save.** For each file:
   - Read the source file
   - Translate the complete content
   - Save to the mirrored path under the language folder
   - Confirm each file saved

5. **After completing all files**:
   - Report how many files were translated and the root folder
   - For any term you coined that wasn't in `context/hindi-glossary.md`, append it to `hindi/context/pending-terms.md` using this format:
     ```
     | [English term] | [Hindi used] | [source file] | [notes] |
     ```
   - Report how many new terms were staged, if any
   - Report any files skipped (already existed)

## Example

User: `@prompts/translate.md translate knowledge/history/japan-history.md to Hindi`

→ Reads `context/hindi-style.md`, `context/hindi-glossary.md`, `hindi/context/reference.md`
→ Reads `knowledge/history/japan-history.md`
→ Translates full content to Hindi following style guide and glossary
→ Saves to `hindi/knowledge/history/japan-history.md`
→ Reports done; flags any new terms not covered by the glossary
