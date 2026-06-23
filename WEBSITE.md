# Website — Setup & Operations Guide

The knowledge base is published as a static site using **MkDocs + Material theme**.

- Source: `knowledge/` directory
- Build output: `public/` (git-ignored)
- Live site: https://romi110.github.io/romi-01/

---

## Daily commands

```bash
# Preview locally (live-reloads on file save)
python -m mkdocs serve

# Build to public/ without serving
python -m mkdocs build

# Deploy to GitHub Pages
python -m mkdocs gh-deploy
```

Run all commands from the repo root. The dev server runs at http://localhost:8000.

---

## How content maps to pages

Every `.md` file under `knowledge/` becomes a page. The URL mirrors the path:

| File | URL |
|------|-----|
| `knowledge/finance/trusts.md` | `/finance/trusts/` |
| `knowledge/health/nutrition/protein.md` | `/health/nutrition/protein/` |
| `knowledge/index.md` | `/` (homepage) |

**Folders become sections** in the left sidebar automatically. No config needed when adding files.

---

## Adding content

**New file in an existing domain:** just create it. MkDocs discovers it on next build.

```
knowledge/finance/real-estate-basics.md  →  appears under Finance in the sidebar
```

**New domain folder:** create the folder, add at least one `.md` file, and add an `index.md` to name the section. Without `index.md`, MkDocs uses the folder name as the section title.

```
knowledge/law/
├── index.md          # section title + overview (optional but recommended)
└── contracts.md
```

**The homepage** is `knowledge/index.md`. Edit it to update the intro text or domain list.

---

## Config reference — mkdocs.yml

Key settings:

```yaml
site_name: romi-01          # browser tab title and header
docs_dir: knowledge         # where MkDocs reads content from
site_dir: public            # where the built HTML goes (git-ignored)
```

**To change the color scheme:** edit `theme.palette.primary` and `theme.palette.accent`. Material supports named colors (blue grey, teal, indigo, etc.) — see https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/

**To add plugins:** add to the `plugins:` list and `pip install` the plugin. Search is the only one enabled now.

---

## Deploying to GitHub Pages

```bash
python -m mkdocs gh-deploy
```

This builds the site and force-pushes the `public/` output to the `gh-pages` branch on GitHub. GitHub Pages serves from that branch automatically.

**First-time setup** (one time only):
1. Go to the repo on GitHub → Settings → Pages
2. Set source to: `gh-pages` branch, `/ (root)` folder
3. Save. The site will be live at `https://romi110.github.io/romi-01/`

After that, `gh-deploy` handles every subsequent publish.

---

## Adding Hindi content to the site

Currently `docs_dir: knowledge` only serves English files. To add the `hindi/` directory:

1. Change `docs_dir` in `mkdocs.yml`:

```yaml
docs_dir: .
```

2. Create a `.mkdocsignore` file at the repo root to exclude non-content directories:

```
context/
goals/
prompts/
templates/
public/
CLAUDE.md
DESIGN.md
IMPROVEMENTS.md
README.md
WEBSITE.md
```

3. Move `knowledge/index.md` to the repo root as `index.md` (the new homepage).

This makes both `knowledge/` and `hindi/` accessible as top-level sections.

---

## Build warnings — what they mean

Every build prints warnings like:

```
WARNING - Doc file 'finance/insurance-basics.md' contains a link 'emergency-fund.md',
but the target 'finance/emergency-fund.md' is not found among documentation files.
```

These are **links to planned but not-yet-written files** — the Connections sections pointing to future topics. They're not broken in a harmful way; they just won't resolve to pages until those files exist. Ignore them.

---

## What's in the repo vs. what's published

| Path | Included in site? |
|------|-------------------|
| `knowledge/` | Yes — all of it |
| `hindi/` | No (see above to add) |
| `context/` | No |
| `goals/` | No |
| `prompts/` | No |
| `templates/` | No |
| `CLAUDE.md`, `DESIGN.md`, etc. | No |
