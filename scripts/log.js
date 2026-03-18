#!/usr/bin/env node

/**
 * log.js — Quick-log a category entry from the command line
 * Usage: node scripts/log.js learning "Learned about water purification basics"
 *        node scripts/log.js exercise 25
 *        node scripts/log.js mood 4
 *        node scripts/log.js reading 15 "Read chapter 2 of Meditations"
 *
 * For trackable categories, first arg after category is the value.
 * Any remaining text is the prose entry.
 */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const configPath = path.join(repoRoot, 'config', 'categories.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Date setup
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const dateStr = `${yyyy}-${mm}-${dd}`;

const monthDir = `${yyyy}-${mm}`;
const targetDir = path.join(repoRoot, 'daily', monthDir);
const targetFile = path.join(targetDir, `${dateStr}.md`);

// Parse args
const categoryId = process.argv[2];
const restArgs = process.argv.slice(3);

if (!categoryId) {
  console.log('Usage: node scripts/log.js <category> [value] [text]');
  console.log('\nAvailable categories:');
  config.categories.forEach(c => console.log(`  ${c.icon} ${c.id.padEnd(15)} ${c.name}`));
  process.exit(0);
}

const cat = config.categories.find(c => c.id === categoryId);
if (!cat) {
  console.log(`Unknown category: "${categoryId}"`);
  console.log('Available:', config.categories.map(c => c.id).join(', '));
  process.exit(1);
}

// If no entry exists for today, create one first
if (!fs.existsSync(targetFile)) {
  console.log('No entry for today. Creating one first...');
  require('child_process').execSync(`node "${path.join(__dirname, 'new-day.js')}"`, {
    stdio: 'inherit'
  });
}

let content = fs.readFileSync(targetFile, 'utf-8');

// Determine trackable value and prose text
let trackValue = null;
let proseText = '';

if (cat.trackable && cat.trackType === 'boolean') {
  trackValue = true;
  proseText = restArgs.join(' ');
} else if (cat.trackable && (cat.trackType === 'number' || cat.trackType === 'rating')) {
  if (restArgs.length > 0 && !isNaN(restArgs[0])) {
    trackValue = parseFloat(restArgs[0]);
    proseText = restArgs.slice(1).join(' ');
  } else {
    proseText = restArgs.join(' ');
  }
} else {
  proseText = restArgs.join(' ');
}

// Update frontmatter if trackable
if (trackValue !== null) {
  const fmRegex = new RegExp(`(${cat.id}:\\s*)(.+)`);
  if (content.match(fmRegex)) {
    content = content.replace(fmRegex, `$1${trackValue}`);
  }
}

// Insert prose into the correct category section
if (proseText) {
  const sectionRegex = new RegExp(
    `(## .{1,2} ${cat.name}\\n<!-- .*? -->\\n)`,
    's'
  );
  const match = content.match(sectionRegex);
  if (match) {
    content = content.replace(sectionRegex, `$1\n${proseText}\n`);
  }
}

fs.writeFileSync(targetFile, content, 'utf-8');

console.log(`\n${cat.icon} Logged to ${cat.name}:`);
if (trackValue !== null) console.log(`   Value: ${trackValue}${cat.trackUnit ? ' ' + cat.trackUnit : ''}`);
if (proseText) console.log(`   Entry: ${proseText}`);
console.log(`\n   File: daily/${monthDir}/${dateStr}.md`);
