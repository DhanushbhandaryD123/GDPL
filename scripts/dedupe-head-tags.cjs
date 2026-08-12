// react-fast-marquee (and ReactPlayer's preconnect hints) re-inject their
// shared <style> block / <link rel="preconnect"> tags into <head> on every
// component instance mount instead of checking whether they're already
// present. Pages with several marquees/embeds end up with dozens of
// byte-identical duplicate tags, bloating the prerendered HTML for no
// benefit (the CSS/preconnect hint is identical every time). This walks
// every prerendered HTML file and removes exact-duplicate <style> and
// <link rel="preconnect"> tags from <head>, keeping only the first copy.
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');

const STYLE_RE = /<style\b[^>]*>[\s\S]*?<\/style>/g;
const PRECONNECT_RE = /<link rel="preconnect"[^>]*>/g;

function dedupe(html, re) {
  const seen = new Set();
  let removed = 0;
  const result = html.replace(re, (match) => {
    if (seen.has(match)) {
      removed++;
      return '';
    }
    seen.add(match);
    return match;
  });
  return { result, removed };
}

function processFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const headEndIdx = html.indexOf('</head>');
  if (headEndIdx === -1) return;

  const head = html.slice(0, headEndIdx);
  const rest = html.slice(headEndIdx);

  const { result: dedupedStyles, removed: stylesRemoved } = dedupe(head, STYLE_RE);
  const { result: dedupedHead, removed: preconnectsRemoved } = dedupe(dedupedStyles, PRECONNECT_RE);

  if (stylesRemoved === 0 && preconnectsRemoved === 0) return;

  fs.writeFileSync(filePath, dedupedHead + rest, 'utf8');
  return stylesRemoved + preconnectsRemoved;
}

let totalFiles = 0;
let totalRemoved = 0;
function walkAndCount(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkAndCount(full);
    } else if (entry.name.endsWith('.html')) {
      const removed = processFile(full);
      if (removed) {
        totalFiles++;
        totalRemoved += removed;
      }
    }
  }
}

walkAndCount(distDir);
console.log(`✅  Removed ${totalRemoved} duplicate <style>/<link rel="preconnect"> tags across ${totalFiles} pages.`);
