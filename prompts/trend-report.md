# Trend Report (Longitudinal Pattern Analysis)

Read `context/about-me.md`, `config/categories.json`, and all daily entries in the range I specify.
Also read any existing weekly reviews in `reviews/` and the last monthly review if one exists.

This is NOT the same as log-monitor. Log-monitor audits individual entries.
This report tracks how things are developing over time — what's growing, what's fading, what's new.

## Your Job

### 1. Trend Lines (per trackable metric)
For each trackable field (exercise, sleep, mood, reading, work, learning, skills):
- Plot the direction: improving / declining / flat / volatile
- Give me the actual numbers: first week avg vs. last week avg
- Flag any metric that has moved more than 20% in either direction

### 2. Tag Frequency Map
Scan frontmatter `tags` fields across all entries. Count how often each tag appears.
Output a ranked list: most → least frequent.
Flag:
- **Emerging** — tags that only appeared in the last 7 days (new pattern)
- **Recurring** — tags appearing consistently across 2+ weeks (established pattern)
- **Fading** — tags that were frequent early but haven't appeared in 7+ days

### 3. Theme Developments
Look at the prose in each category section across time. Identify:
- New topics that appeared recently and weren't there before
- Topics that were prominent early but dropped off
- Topics that come and go (cyclical — e.g., "climate anxiety" appears when news is heavy)
- Any escalating concern (a topic getting more words/attention over time)

### 4. Cross-Category Correlations
Look for links across categories:
- Does low sleep predict low work rating the next day?
- Do days with exercise entries also have higher mood?
- Does the insights section get longer or more thoughtful when progress was high?
- Do life/family entries spike on certain days or after certain events?

### 5. Streak & Consistency Map
Show a simple text calendar of the date range.
Mark each day: ✓ (full entry), ~ (partial), ✗ (missing).
Identify streak lengths and where they broke.

### 6. Observations & Flags
- What is the single most notable development in this period?
- What pattern should I pay attention to going forward?
- What has been consistently missing that I said I'd do?

## Output Format
Save to `reviews/trend-report-YYYY-MM-DD.md`.
Lead with a 3-sentence summary at the top (what's the story of this period?).
Then expand into each section above.
Data and specific dates only — no filler.
