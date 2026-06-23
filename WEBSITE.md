# Website — Setup & Operations Guide

The knowledge base is published as a static site using **MkDocs + Material theme**.

- Source: `knowledge/` directory
- Build output: `public/` (git-ignored)
- Live site: https://romi110.github.io/romi-01/
- Deploy: automatic via GitHub Actions on every push to `main`

---

## How deploy works

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:
1. Installs Python + mkdocs-material on a Ubuntu runner
2. Builds the site to `public/`
3. Uploads it as a GitHub Pages artifact
4. Deploys directly via `actions/deploy-pages` — no `gh-pages` branch needed

**You never run deploy manually.** Push to main → site updates in ~60 seconds.

**First-time GitHub Pages setup** (one time, if not done):
1. Repo → Settings → Pages
2. Source: **GitHub Actions** (not "Deploy from a branch")
3. Save

---

## Local preview

```bash
# From the repo root
python -m mkdocs serve
```

Runs at http://localhost:8000. Live-reloads on file save. Use this before pushing to verify changes look right.

---

## How content maps to pages

Every `.md` file under `knowledge/` becomes a page. The URL mirrors the path:

| File | URL |
|------|-----|
| `knowledge/finance/trusts.md` | `…/romi-01/finance/trusts/` |
| `knowledge/health/nutrition/protein.md` | `…/romi-01/health/nutrition/protein/` |
| `knowledge/index.md` | `…/romi-01/` (homepage) |

Folders become sections in the left sidebar automatically — no config needed when adding files.

---

## Adding content

**New file in an existing domain:** create it, commit, push. Done.

```
knowledge/finance/real-estate-basics.md  →  appears under Finance in sidebar
```

**New domain folder:** create the folder with at least one `.md` file. Optionally add `index.md` inside it to set the section title and landing page.

```
knowledge/law/
├── index.md       # optional: section overview
└── contracts.md
```

**The homepage** is `knowledge/index.md`.

---

## Config reference — mkdocs.yml

```yaml
site_url: https://romi110.github.io/romi-01/   # required for project site — sets base path for all assets
docs_dir: knowledge                              # content source
site_dir: public                                 # build output (git-ignored)
```

`site_url` is what makes assets and links work correctly when the site is served from `/romi-01/` rather than the root domain. Do not remove it.

**To change colors:** edit `theme.palette.primary` / `theme.palette.accent` in `mkdocs.yml`. Named colors: blue grey, teal, indigo, deep purple, etc. See Material docs.

---

## Adding Hindi content to the site

Currently only `knowledge/` is served. To add `hindi/`:

1. Change `docs_dir` in `mkdocs.yml` to `.` (repo root)
2. Create `.mkdocsignore` at the root:

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

3. Move `knowledge/index.md` → `index.md` at the repo root (new homepage).

Both `knowledge/` and `hindi/` will then appear as top-level sections.

---

## Build warnings

Every build prints warnings like:

```
WARNING - 'finance/insurance-basics.md' contains a link 'emergency-fund.md',
but the target is not found among documentation files.
```

These are links in **Connections sections pointing to planned but not-yet-written files**. Safe to ignore — they become valid links as those files get written.

---

## What's published vs. what's not

| Path | In site? |
|------|----------|
| `knowledge/` | Yes |
| `hindi/` | No (see above) |
| `context/`, `goals/`, `prompts/`, `templates/` | No |
| Root `.md` files (`CLAUDE.md`, etc.) | No |
