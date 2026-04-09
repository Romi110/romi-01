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

## How to Translate

**Translate the content, not the structure.** Every heading, paragraph, list item, and table cell should be translated. Do not translate:
- File paths in links (keep `[japan-history.md](japan-history.md)` link paths as-is — they still point to the English source)
- Code blocks, CLI commands, or technical strings
- Proper nouns that have no translation (names of people, places, organizations)
- Frontmatter keys if any exist

**Translate link display text.** If a link is `[networking-fundamentals.md](networking-fundamentals.md)`, translate the display text to the target language but keep the path unchanged: `[Fundamentos de Redes](networking-fundamentals.md)`.

**Preserve formatting exactly.** Headers, bold, italics, tables, bullet lists, numbered lists — same structure, translated content.

**Quality bar:** natural fluency in the target language, not word-for-word machine translation. Render idioms correctly. If a phrase doesn't translate cleanly, use the closest natural equivalent.

## Output Folder Structure

Save translated files to a root-level folder named after the language in lowercase:
- Spanish → `spanish/`
- Hindi → `hindi/`
- Japanese → `japanese/`
- French → `french/`

Mirror the source path under the language folder:
- `knowledge/history/japan-history.md` → `spanish/knowledge/history/japan-history.md`
- `knowledge/energy/solar-panels.md` → `spanish/knowledge/energy/solar-panels.md`

## Steps

1. **Identify files.** If the user named a folder or said "all," list all `.md` files in scope. Confirm with the user if the count is large (>10 files) before proceeding.

2. **Check for existing translations.** Before translating a file, check if `[language]/[path]` already exists. If it does, ask the user whether to overwrite or skip.

3. **Translate and save.** For each file:
   - Read the source file
   - Translate the content in one pass — do not split or abbreviate. If the file is long, translate the full content before writing. Incomplete translations with placeholder or gibberish text are worse than no translation.
   - Save to the mirrored path under the language folder
   - Confirm each file saved

4. **After completing all files**, report:
   - How many files were translated
   - The root folder they were saved to
   - Any files skipped (already existed) or that had translation notes

## Example

User: `@prompts/translate.md translate knowledge/history/japan-history.md to Spanish`

→ Reads `knowledge/history/japan-history.md`
→ Translates all content to Spanish
→ Saves to `spanish/knowledge/history/japan-history.md`
→ Reports done
