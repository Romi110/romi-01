# Logging System

## Overview
The daily log uses a modular, category-based system. Each category is defined in
`config/categories.json` and can be added, removed, or modified at any time.

## How It Works

### Structure
- Each daily entry is a single markdown file: `daily/YYYY-MM/YYYY-MM-DD.md`
- Entries are organized by **categories** (e.g., Learning, Health, Reading)
- Each category gets 1-5 lines depending on detail needed
- Categories are defined in `config/categories.json` — add new ones anytime

### Category Config
Each category has:
- `id` — short key used in code and filenames
- `name` — display name in the log
- `icon` — emoji for quick visual scanning
- `prompt` — the journaling prompt shown in the template
- `minLines` / `maxLines` — expected entry length (1-5)
- `trackable` — whether to extract data for trend tracking
- `trackType` — how to track it: boolean, number, rating, or text
- `tags` — for grouping and filtering

### Trackable Data Format
At the top of each daily entry, a YAML-style frontmatter block captures trackable data:
```
---
date: 2026-03-18
exercise: 30        # minutes — numeric, ~ if not logged
sleep: 7            # hours
mood: 4             # 1-5 rating
reading: 2          # chapters/units
work: 4             # 1-5 rating
learning: true      # boolean
skills: false       # boolean
tags: []            # entry-level tags — AI-detected or manually added
---
```
Fields come from `trackFields` of composite categories and `id` of simple trackable categories in `config/categories.json`. Boolean fields default to `false`; numeric fields default to `~` (null/not logged). The `tags` array is the machine-parseable theme layer — distinct from category-level tags in config.

This frontmatter is what the status/trend scripts parse. The prose below it is for you.

### Adding a New Category
1. Edit `config/categories.json` — add your new category object
2. Run `node scripts/new-day.js` — it auto-generates from the config
3. That's it. All prompts and scripts read from the config.

### Trend Tracking
The `scripts/status.js` script reads frontmatter from all daily entries and outputs:
- Streak counts (consecutive days with entries)
- Category completion rates
- Weekly/monthly averages for numeric tracks
- Flags for missed days or empty categories
