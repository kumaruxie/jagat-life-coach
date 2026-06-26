/**
 * deploy.mjs — custom deploy script for GitHub Pages
 * Replaces the gh-pages package which hangs on Windows when the repo has large git history.
 * Run with: node deploy.mjs
 *
 * What it does:
 *  1. Copies public/*.mp4 videos into dist/
 *  2. Initialises a fresh git repo inside dist/
 *  3. Force-pushes to the remote gh-pages branch
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');
const pub = path.join(__dirname, 'public');

// ── Step 1: Copy public videos into dist ───────────────────────────────────
const videos = fs.readdirSync(pub).filter(f => f.endsWith('.mp4'));
for (const v of videos) {
  fs.copyFileSync(path.join(pub, v), path.join(dist, v));
  console.log(`✔ Copied ${v} → dist/`);
}

// ── Step 2: Get remote URL from the main repo ──────────────────────────────
const remoteUrl = execSync('git remote get-url origin', { cwd: __dirname })
  .toString()
  .trim();
console.log(`\nRemote: ${remoteUrl}`);

// ── Step 3: Init a fresh git repo in dist, commit, and force-push ──────────
const run = (cmd) => execSync(cmd, { cwd: dist, stdio: 'inherit' });

// Only init if not already a git repo
if (!fs.existsSync(path.join(dist, '.git'))) {
  run('git init');
}

run('git add -A');

const timestamp = new Date().toISOString();
try {
  run(`git commit -m "deploy: ${timestamp}"`);
} catch {
  console.log('Nothing new to commit — already up to date.');
  process.exit(0);
}

console.log('\nPushing to gh-pages branch...');
execSync(`git push -f "${remoteUrl}" HEAD:gh-pages`, { cwd: dist, stdio: 'inherit' });

console.log('\n✅ Deployed successfully to GitHub Pages!');
