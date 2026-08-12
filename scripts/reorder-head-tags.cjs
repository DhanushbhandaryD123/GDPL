// react-helmet-async appends its tags (canonical, hreflang, description,
// keywords, OG, Twitter, JSON-LD) to <head> asynchronously, after other
// libraries (react-hot-toast, react-fast-marquee) synchronously inject their
// own <style> tags during render. The end result: in the final static HTML,
// all the real SEO tags land at the very bottom of <head>, after a wall of
// unrelated <style> blocks. Order doesn't matter to search engines, but it
// makes raw view-source hard to read and doesn't match normal site
// conventions. This walks every prerendered HTML file and moves every
// Helmet-managed tag (marked with data-rh="true") to right after <title>.
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');

const TAG_RE = /<(meta|link)\b[^>]*\bdata-rh="true"[^>]*\/?>|<script\b[^>]*\bdata-rh="true"[^>]*>[\s\S]*?<\/script>/g;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.html')) {
      processFile(full);
    }
  }
}

function processFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const titleMatch = html.match(/<title>[\s\S]*?<\/title>/);
  if (!titleMatch) return;

  const tags = html.match(TAG_RE);
  if (!tags || tags.length === 0) return;

  let result = html;
  for (const tag of tags) {
    result = result.replace(tag, '');
  }

  const insertAfter = titleMatch[0];
  const formattedTags = tags.map((tag) => `\n    ${tag}`).join('');
  result = result.replace(insertAfter, insertAfter + formattedTags + '\n');

  if (result !== html) {
    fs.writeFileSync(filePath, result, 'utf8');
  }
}

walk(distDir);
console.log('✅  Moved Helmet-managed <head> tags to directly follow <title> in every prerendered page.');
