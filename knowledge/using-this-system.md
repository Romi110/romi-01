# How to Use This System

## What Is It?
A personal knowledge management and growth tracking system built on plain markdown files in a git repo.

## Why It Matters
Having a system means the difference between "I should learn more" and actually doing it. Writing things down in your own words is how knowledge sticks.

## Key Workflows

### Daily (5-15 minutes)
1. Run `node scripts/new-day.js` — auto-generates today's entry from `config/categories.json`
2. Fill in what you learned, read, and how you moved (the entry has all prompts pre-loaded)
3. Optional: Open Claude, use `prompts/quick-log.md` or `prompts/daily-review.md` to talk through your day
4. Commit: `git add . && git commit -m "daily: YYYY-MM-DD"`

### Weekly (15-30 minutes)
1. Copy `templates/weekly-review.md` → `reviews/YYYY-WXX.md`
2. Look back at the week's daily entries
3. Reflect honestly — the template includes tag/trend sections
4. Optional: Use `prompts/weekly-summary.md` in Claude for AI-assisted review

### Learning Sessions (when you have time)
1. Check `context/learning-topics.md` for something that interests you
2. Use `prompts/teach-me.md` in Claude to start a learning session
3. Take notes in `knowledge/topic-name.md` using the knowledge template
4. Write it in YOUR words — that's how you actually learn it

### Monthly
1. Copy `templates/monthly-review.md` → `reviews/YYYY-MM-monthly.md`
2. Use `prompts/monthly-planner.md` to plan the next month's deep-dive topic
3. Update `context/about-me.md` if your priorities have shifted
4. Check off goals progress in `goals/2026-goals.md`

## System Components
- **`config/categories.json`** — controls everything. Change a category here and it propagates everywhere.
- **`scripts/new-day.js`** — scaffolds daily entries from config
- **`scripts/log.js`** — quick-log a single category from the terminal
- **`scripts/status.js`** — shows streak and trend report in the terminal
- **`prompts/`** — reusable instructions for Claude conversations. Reference these by name.

## Tips
- Git commit regularly so you have a history
- Don't backfill missed days — just start fresh tomorrow
- When sharing context with Claude, paste your `about-me.md` first
- Keep entries honest, not performative — nobody's grading you
- Use `node scripts/status.js` to see where you actually stand, not where you think you stand
