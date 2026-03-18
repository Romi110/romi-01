# VS Code + Claude Workflow Guide

## Setup

### 1. Install the Claude Extension
- Open VS Code
- Go to Extensions (Ctrl+Shift+X)
- Search for "Claude" by Anthropic
- Install it
- Sign in with your Anthropic/Claude account

### 2. Open This Repo
- File → Open Folder → `C:\Users\romvp\github\romi-01`
- This becomes your workspace — everything is accessible from the sidebar

### 3. Set Up Your Context
- In the Claude panel, you can reference files with `@` mentions
- Start conversations by referencing `@context/about-me.md` so Claude knows your situation

## Daily Workflow

### Morning or Evening (5-15 min)

1. **Create today's entry**
   - Open `templates/daily-entry.md`
   - Copy its contents
   - Create a new file: `daily/2026-03/2026-03-17.md` (use today's date)
   - Paste and fill in your entry

2. **Learn something**
   - Open the Claude panel in VS Code
   - Ask Claude about something you're curious about
   - Reference your learning topics: "Looking at @context/learning-topics.md, teach me about [topic]"
   - Write what you learned in YOUR words in the daily entry

3. **Commit**
   - Open Source Control panel (Ctrl+Shift+G)
   - Stage your changes, write a simple commit message like "daily: 2026-03-17"
   - Commit

## Learning Sessions

When you have 20-30 minutes to go deep on a topic:

1. **Pick a topic** from `context/learning-topics.md`
2. **Create a knowledge file** — copy `templates/knowledge-topic.md` to `knowledge/topic-name.md`
3. **Open Claude panel** and reference your new file:
   - "I'm working on @knowledge/food-preservation.md — teach me the basics of canning"
4. **Take notes in the file as you learn** — pause Claude, write in your own words, then ask follow-ups
5. **Update the checklist** in `context/learning-topics.md` as you make progress

### Good Claude Prompts for Learning
- "Explain [topic] like I'm smart but have zero experience with it"
- "What are the most common mistakes beginners make with [topic]?"
- "I just learned about [concept]. What should I learn next?"
- "Looking at @context/about-me.md — what self-reliance skill should I focus on this month?"
- "Here's what I wrote about [topic] — @knowledge/topic.md — am I understanding this correctly?"

## Weekly Review (Sunday, 15-30 min)

1. Copy `templates/weekly-review.md` to `reviews/2026-W12.md` (use the week number)
2. Open the week's daily entries side by side (Ctrl+click files in sidebar)
3. Fill in the review — be honest about what worked and what didn't
4. Open Claude panel: "Here's my week — @reviews/2026-W12.md — what patterns do you notice?"
5. Update goals in `goals/2026-goals.md` if needed
6. Commit everything

## VS Code Tips

- **Split editor**: Right-click a tab → Split Right. Great for template on one side, new entry on the other.
- **Quick file creation**: Ctrl+N for new file, then Ctrl+S to save with the right name and path.
- **File explorer**: Keep the sidebar open to see your whole repo structure.
- **Search across files**: Ctrl+Shift+F to search all your notes. Useful when you remember writing about something but forgot where.
- **Git Graph extension**: Install it to see your commit history visually — a nice timeline of your growth.
- **Markdown Preview**: Ctrl+Shift+V to preview any markdown file rendered nicely.

## Keep It Simple

You don't need plugins, task runners, or automation right now.
Your stack is: VS Code + Claude extension + Git + Markdown.
If you find yourself tweaking the system more than using it, stop and just write an entry.
