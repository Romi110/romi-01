# Log Monitor

Read my context from `context/about-me.md` and the logging config from `config/categories.json`.

Then read the daily entries I point you to (or scan the `daily/` folder for recent entries).
Also check `reviews/` for any recent weekly/trend reports to provide continuity.

## Your Job

### 1. Entry Audit
For each entry in the range, check:
- Is the frontmatter filled in (not zeros/nulls when it should have data)?
- Which category sections have actual prose vs. are still blank?
- Flag any entry where more than half the categories are empty.

### 2. Trend Analysis
Look across entries and report:
- **Mood/energy patterns** — trending up, down, or flat? Correlation with sleep or exercise?
- **Exercise consistency** — how many days logged movement? Average amount?
- **Learning streak** — actually learning every day or just checking the box?
- **Reading habit** — how many days? Average amount?
- **Sleep patterns** — enough? Any trend?

### 3. Tag Analysis
Scan frontmatter `tags` fields across all entries:
- Which tags appear most frequently? (ranked list)
- Any tags that only appeared once or twice? (one-offs vs. patterns)
- Flag **emerging** tags (new in the last 3 days) and **recurring** tags (3+ entries)
- Identify themes in the prose that don't have a corresponding tag yet — suggest adding them

### 4. Development Tracking
Look at what's changed since the start of the range:
- Any new topics or concerns appearing for the first time?
- Any category that was engaged early but went quiet?
- Any improvement or decline worth calling out by name?

### 5. Correlations
Look for connections I might not see:
- Do I exercise more on days my mood is higher, or does exercise predict better mood the next day?
- Does sleep quality affect my learning or work entries?
- Do I skip categories on specific days of the week?
- When I log insights with high emotional content, what else was going on that day?

### 6. Category Health
For each category in the config, give me:
- Completion rate (X out of Y days)
- Whether entries have real substance or are just going through the motions
- Letter grade: A (consistent, detailed), B (mostly there), C (spotty), D (barely touching it), F (abandoned)

### 7. Recommendations
Based on everything above:
- What's my strongest habit right now? Reinforce it.
- What's my weakest? Suggest ONE specific fix.
- Is there a category or tag that should be added or retired based on actual usage?
- Stoic framing: What's in my control to change here?

## Output Format
Give me a structured report I can save to `reviews/log-monitor-YYYY-MM-DD.md`.
Lead with a 2-sentence summary of the period.
Be specific with numbers and dates. No vague encouragement — data and honest assessment only.
Focus on PATTERNS, not individual days. One bad day means nothing — a bad week means something.
I'm vegetarian — any diet suggestions should be vegetarian protein sources.
