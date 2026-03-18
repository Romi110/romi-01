#!/usr/bin/env node

/**
 * new-day.js — Creates today's daily entry from config/categories.json
 * Usage: node scripts/new-day.js
 * Optional: node scripts/new-day.js 2026-03-20
 */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const configPath = path.join(repoRoot, 'config', 'categories.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Date setup
const dateArg = process.argv[2];
const today = dateArg ? new Date(dateArg + 'T12:00:00') : new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const dateStr = `${yyyy}-${mm}-${dd}`;
const monthDir = `${yyyy}-${mm}`;
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const dayName = days[today.getDay()];

const targetDir = path.join(repoRoot, 'daily', monthDir);
const targetFile = path.join(targetDir, `${dateStr}.md`);

// Don't overwrite existing entries
if (fs.existsSync(targetFile)) {
  console.log(`\nEntry already exists: daily/${monthDir}/${dateStr}.md`);
  console.log('Open it and keep writing.');
  process.exit(0);
}

// Create month directory if needed
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Build frontmatter from trackable categories
const trackables = config.categories.filter(c => c.trackable);
let frontmatter = '---\n';
frontmatter += `date: ${dateStr}\n`;
for (const cat of trackables) {
  if (cat.trackType === 'boolean') {
    frontmatter += `${cat.id}: false\n`;
  } else if (cat.trackType === 'number') {
    frontmatter += `${cat.id}: 0\n`;
  } else if (cat.trackType === 'rating') {
    frontmatter += `${cat.id}: 0\n`;
  }
}
frontmatter += '---\n';

// Build entry body from categories
let body = `# ${dateStr} — ${dayName}\n\n`;

for (const cat of config.categories) {
  body += `## ${cat.icon} ${cat.name}\n`;
  body += `<!-- ${cat.prompt} -->\n\n\n`;
}

// Combine and write
const fullEntry = frontmatter + '\n' + body;
fs.writeFileSync(targetFile, fullEntry, 'utf-8');

// Output
console.log(`\nCreated: daily/${monthDir}/${dateStr}.md`);
console.log(`\nGood ${today.getHours() < 12 ? 'morning' : 'evening'}, Romi.`);
console.log(`It's ${dayName}, ${dateStr}.`);
console.log(`\nCategories loaded: ${config.categories.length}`);
console.log(config.categories.map(c => `  ${c.icon} ${c.name}`).join('\n'));
console.log(`\nYour entry is ready. Show up today.`);
