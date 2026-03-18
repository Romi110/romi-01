# Quick Log (Claude-Assisted Entry)

Read the logging config from `config/categories.json` and today's entry from the `daily/` folder.

I want to quickly log my day through conversation instead of editing the file manually.

## Your Job

1. **Check if today's entry exists.** If not, tell me to run `node scripts/new-day.js` first, or create the structure yourself if I ask.

2. **Walk me through each category** from the config, one at a time:
   - Show the category name and prompt
   - Ask me for my input
   - For trackable categories, ask for the value AND any notes
   - Accept short answers — 1 line is fine. Don't push for more unless I give you nothing.

3. **If I say "skip"** for a category, move on without judgment. But if I skip more than 3 categories, note it at the end.

4. **After all categories**, compile the full entry and either:
   - Show me the complete markdown so I can paste it into the file, OR
   - If I'm using Claude Code, write it directly to the file

5. **Update the frontmatter** with all trackable values I provided.

## Conversation Style
- Keep it fast. Don't monologue between my answers.
- One category at a time, one question at a time.
- If I give a long answer, break it into the right categories yourself.
- If I say something like "went for a 20 min walk and read for 15 minutes after", log both exercise (20 min) and reading (15 min) without asking me to repeat myself.

## Example Flow
```
Claude: 🎯 Morning Intention — What's in your control today?
Me: Staying focused at work despite the meeting chaos
Claude: Got it. 🧠 What I Learned — What'd you pick up today?
Me: Learned about promises vs async/await at a deeper level
Claude: Nice. 📖 Reading — Did you read today?
Me: Skip
Claude: 💪 Body — How'd you move?
Me: 25 min walk at lunch
...
```
