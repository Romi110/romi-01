# Prompts Index

Reusable prompt files for Claude. Reference these with `@prompts/filename.md` in VS Code.

## Daily Prompts
| Prompt | When to Use | File |
|--------|-------------|------|
| **Morning Start** | Beginning of day, before work | `morning-start.md` |
| **Quick Log** | Log your day through conversation with Claude | `quick-log.md` |
| **Daily Review** | End of day, after filling in your entry | `daily-review.md` |
| **Evening Journal** | End of day — fills in the Insights section through conversation | `evening-journal.md` |
| **Stoic Reflection** | When stressed, frustrated, or need perspective | `stoic-reflection.md` |

## Weekly / Periodic
| Prompt | When to Use | File |
|--------|-------------|------|
| **Weekly Summary** | Sunday — generates draft weekly review with tag + trend comparison | `weekly-summary.md` |
| **Consistency Check** | Midweek or whenever you feel yourself slipping | `consistency-check.md` |
| **Log Monitor** | Audit entries, analyze tags, grade category health | `log-monitor.md` |
| **Tag Update** | After 7-14 entries — detect themes, write entry tags, suggest new category tags | `tag-update.md` |
| **Trend Report** | Monthly or on demand — longitudinal patterns, tag frequency, correlations | `trend-report.md` |

## System Maintenance
| Prompt | When to Use | File |
|--------|-------------|------|
| **Sync Docs** | After system changes — audits all docs and updates anything stale or inconsistent | `sync-docs.md` |

## Planning
| Prompt | When to Use | File |
|--------|-------------|------|
| **Monthly Planner** | Start of month — pick and plan your deep-dive topic | `monthly-planner.md` |
| **Fitness Plan** | When building or adjusting your workout routine | `fitness-plan.md` |

## Learning
| Prompt | When to Use | File |
|--------|-------------|------|
| **Teach Me** | Anytime — ask Claude to teach you a new topic | `teach-me.md` |

## Scripts (Command Line)
| Script | What It Does | Usage |
|--------|-------------|-------|
| **new-day.js** | Creates today's entry from config | `node scripts/new-day.js` |
| **log.js** | Quick-log a category from terminal | `node scripts/log.js exercise 25 "Walked at lunch"` |
| **status.js** | Shows trends, streaks, completion rates | `node scripts/status.js` or `node scripts/status.js 30` |

## How to Use These Prompts

### In VS Code with Claude Extension
1. Open the Claude panel
2. Type `@prompts/teach-me.md` (or whichever prompt you want)
3. Add your specific request after it
4. Example: `@prompts/teach-me.md teach me about food canning basics`
5. Example: `@prompts/quick-log.md let's log today`
6. Example: `@prompts/log-monitor.md check my last 14 days`

### From the Terminal (Scripts)
```bash
# Start your day
node scripts/new-day.js

# Quick log from command line — use category IDs: health, progress, intention, insights, life, notes
node scripts/log.js health "30 min kettlebell push day. Slept 7hr. Mood 4/5. Read 2 chapters."
node scripts/log.js progress "Learned about JS promises vs callbacks. Work 4/5."
node scripts/log.js intention "Stay focused on shipping, not perfecting."
node scripts/log.js insights "Grateful for quiet morning. Didn't spiral when plan changed."
node scripts/log.js notes "Call dentist. Check tires."

# Check your status
node scripts/status.js         # last 7 days
node scripts/status.js 14      # last 14 days
node scripts/status.js 30      # last 30 days
```

> **Note on log.js and frontmatter**: `log.js` logs prose to the matching category section. For composite categories (`health`, `progress`), update numeric frontmatter fields (`exercise`, `sleep`, `mood`, `reading`, `work`, `learning`, `skills`) manually in the file — or just fill them in when you open the entry.

## Adding New Categories
1. Edit `config/categories.json` — add a new category object
2. All scripts and prompts automatically pick up the change
3. See `docs/logging-system.md` for the full spec

## Creating New Prompts
When you find yourself giving Claude the same instructions repeatedly, turn it into a prompt file.
A good prompt file has:
- Clear role/context instructions
- Specific output expectations
- Tone guidance
- References to your repo files for context
