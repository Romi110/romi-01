#!/usr/bin/env node

/**
 * status.js — Reads daily entries and reports trends, streaks, and gaps
 * Usage: node scripts/status.js              (last 7 days)
 *        node scripts/status.js 14           (last 14 days)
 *        node scripts/status.js 30           (last 30 days)
 */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const configPath = path.join(repoRoot, 'config', 'categories.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const dailyDir = path.join(repoRoot, 'daily');

const lookback = parseInt(process.argv[2] || '7', 10);

// Generate date range
function getDates(days) {
  const dates = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    dates.push({ dateStr: `${yyyy}-${mm}-${dd}`, monthDir: `${yyyy}-${mm}` });
  }
  return dates;
}

// Parse frontmatter from a daily entry
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      const val = rest.join(':').trim();
      if (val === 'true') data[key.trim()] = true;
      else if (val === 'false') data[key.trim()] = false;
      else if (!isNaN(val) && val !== '') data[key.trim()] = parseFloat(val);
      else data[key.trim()] = val;
    }
  });
  return data;
}

// Check if a category section has content (not just the template)
function categoryHasContent(content, categoryName) {
  const regex = new RegExp(`## .{1,2} ${categoryName}\\n<!-- .*? -->\\n\\n(.*?)(?=\\n## |$)`, 's');
  const match = content.match(regex);
  if (!match) return false;
  return match[1].trim().length > 0;
}

// Gather data
const dates = getDates(lookback);
const entries = [];
const missing = [];

for (const { dateStr, monthDir } of dates) {
  const filePath = path.join(dailyDir, monthDir, `${dateStr}.md`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fm = parseFrontmatter(content);
    const filled = {};
    for (const cat of config.categories) {
      filled[cat.id] = categoryHasContent(content, cat.name);
    }
    entries.push({ date: dateStr, frontmatter: fm, filled, content });
  } else {
    missing.push(dateStr);
  }
}

// === REPORT ===
console.log('═══════════════════════════════════════════');
console.log(`  ROMI-01 STATUS REPORT — Last ${lookback} days`);
console.log('═══════════════════════════════════════════\n');

// Streak
let currentStreak = 0;
for (let i = dates.length - 1; i >= 0; i--) {
  const d = dates[i].dateStr;
  if (entries.find(e => e.date === d)) currentStreak++;
  else break;
}
console.log(`📅 Entries: ${entries.length}/${dates.length} days logged`);
console.log(`🔥 Current streak: ${currentStreak} day(s)`);
if (missing.length > 0) {
  console.log(`❌ Missing: ${missing.join(', ')}`);
}
console.log('');

// Category completion rates
console.log('CATEGORY COMPLETION');
console.log('───────────────────────────────────────');
for (const cat of config.categories) {
  const filled = entries.filter(e => e.filled[cat.id]).length;
  const total = entries.length;
  const pct = total > 0 ? Math.round((filled / total) * 100) : 0;
  const bar = '█'.repeat(Math.round(pct / 10)) + '░'.repeat(10 - Math.round(pct / 10));
  console.log(`${cat.icon} ${cat.name.padEnd(22)} ${bar} ${pct}% (${filled}/${total})`);
}
console.log('');

// Trackable averages
const trackables = config.categories.filter(c => c.trackable && c.trackType !== 'boolean');
if (trackables.length > 0 && entries.length > 0) {
  console.log('TRACKABLE AVERAGES');
  console.log('───────────────────────────────────────');
  for (const cat of trackables) {
    const values = entries
      .map(e => e.frontmatter[cat.id])
      .filter(v => typeof v === 'number' && v > 0);
    if (values.length > 0) {
      const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
      const unit = cat.trackUnit || '';
      console.log(`${cat.icon} ${cat.name.padEnd(22)} avg: ${avg} ${unit} (${values.length} entries)`);
    }
  }
  console.log('');
}

// Boolean trackables (did/didn't streaks)
const booleans = config.categories.filter(c => c.trackable && c.trackType === 'boolean');
if (booleans.length > 0 && entries.length > 0) {
  console.log('HABIT TRACKING');
  console.log('───────────────────────────────────────');
  for (const cat of booleans) {
    const daysTrue = entries.filter(e => e.frontmatter[cat.id] === true).length;
    const total = entries.length;
    const pct = Math.round((daysTrue / total) * 100);
    console.log(`${cat.icon} ${cat.name.padEnd(22)} ${daysTrue}/${total} days (${pct}%)`);
  }
  console.log('');
}

// Weekly pattern (which day of week has most/least entries)
if (entries.length >= 7) {
  console.log('WEEKLY PATTERN');
  console.log('───────────────────────────────────────');
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const dayCounts = [0,0,0,0,0,0,0];
  entries.forEach(e => {
    const d = new Date(e.date + 'T12:00:00');
    dayCounts[d.getDay()]++;
  });
  const pattern = dayNames.map((name, i) =>
    `${name}: ${'■'.repeat(dayCounts[i])}${'·'.repeat(Math.max(0, 4 - dayCounts[i]))} (${dayCounts[i]})`
  ).join('  ');
  console.log(pattern);
  console.log('');
}

console.log('═══════════════════════════════════════════');
console.log('  Show up today. The action comes first.');
console.log('═══════════════════════════════════════════');
