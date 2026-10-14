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
  let html = fs.readFileSync(filePath, 'utf8');
  const titleMatch = html.match(/<title>[\s\S]*?<\/title>/);
  if (!titleMatch) return;

  const tags = html.match(TAG_RE);
  if (tags && tags.length > 0) {
    for (const tag of tags) {
      html = html.replace(tag, '');
    }
    const insertAfter = titleMatch[0];
    const formattedTags = tags.map((tag) => `\n    ${tag}`).join('');
    html = html.replace(insertAfter, insertAfter + formattedTags + '\n');
  }

  // Find module scripts and modulepreloads in <head>
  const scriptMatch = html.match(/<script type="module"[^>]*src="\/assets\/index-[^"]+\.js"><\/script>/);
  const modulePreloads = html.match(/<link rel="modulepreload"[^>]*\/?>/g) || [];

  if (scriptMatch) {
    // Remove script tag and modulepreloads from <head>
    html = html.replace(scriptMatch[0], '');
    for (const mp of modulePreloads) {
      html = html.replace(mp, '');
    }

    // Insert module script at the very end of <body> for 0ms render-blocking FCP
    const closingBody = '</body>';
    if (html.includes(closingBody)) {
      html = html.replace(closingBody, `  ${scriptMatch[0]}\n${closingBody}`);
    }
  }

  // Ensure stylesheet is immediately after <title> for earliest possible CSS discovery
  const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="\/assets\/index-[^"]+\.css"[^>]*\/?>/);
  if (cssMatch && titleMatch) {
    html = html.replace(cssMatch[0], '');
    html = html.replace(titleMatch[0], `${titleMatch[0]}\n  ${cssMatch[0]}`);
  }

  // Ensure <meta charset="UTF-8" /> is strictly the very first element inside <head> (bytes 0-100)
  html = html.replace(/<meta\s+charset=["']?utf-8["']?\s*\/?>/gi, '');
  html = html.replace(/<head[^>]*>/i, (m) => `${m}\n  <meta charset="UTF-8" />`);

  // Inject critical hero image preloads early in <head> for instant mobile LCP discovery
  const normalizedPath = filePath.replace(/\\/g, '/').toLowerCase();
  if (normalizedPath.includes('boom3d') && !html.includes('href="/boom3D/boom3d-hero.webp"')) {
    html = html.replace(/<meta charset="UTF-8" \/>/, '<meta charset="UTF-8" />\n  <link rel="preload" as="image" href="/boom3D/boom3d-hero.webp" type="image/webp" fetchpriority="high" />');
  } else if (normalizedPath.includes('boom2') && !html.includes('href="/boom2/boom2-hero.webp"')) {
    html = html.replace(/<meta charset="UTF-8" \/>/, '<meta charset="UTF-8" />\n  <link rel="preload" as="image" href="/boom2/boom2-hero.webp" type="image/webp" fetchpriority="high" />');
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

walk(distDir);
console.log('✅  Moved Helmet-managed <head> tags to directly follow <title> in every prerendered page.');
