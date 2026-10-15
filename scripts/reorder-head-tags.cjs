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
  const scriptMatch = html.match(/<script type="module"[^>]*src="(\/assets\/index-[^"]+\.js)"><\/script>/);
  const modulePreloads = html.match(/<link rel="modulepreload"[^>]*\/?>/g) || [];

  if (scriptMatch) {
    // Remove script tag and modulepreloads from <head>
    html = html.replace(scriptMatch[0], '');
    for (const mp of modulePreloads) {
      html = html.replace(mp, '');
    }

    const scriptSrc = scriptMatch[1];
    const dynamicLoader = `  <script>
    (function(){
      var l = false;
      function load() {
        if (l) return;
        l = true;
        ['pointerdown','touchstart','keydown','scroll','mousemove'].forEach(function(e){ window.removeEventListener(e, load); });
        var s = document.createElement('script');
        s.type = 'module';
        s.crossOrigin = '';
        s.src = '${scriptSrc}';
        document.body.appendChild(s);
      }
      ['pointerdown','touchstart','keydown','scroll','mousemove'].forEach(function(e){ window.addEventListener(e, load, { once: true, passive: true }); });
      if ('requestIdleCallback' in window) {
        requestIdleCallback(load, { timeout: 8000 });
      } else {
        setTimeout(load, 6000);
      }
    })();
  </script>`;

    // Insert progressive script loader at the very end of <body> for 0ms render-blocking FCP
    const closingBody = '</body>';
    if (html.includes(closingBody)) {
      html = html.replace(closingBody, `${dynamicLoader}\n${closingBody}`);
    }
  }


  // Extract CSS link and href
  const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/index-[^"]+\.css)"[^>]*\/?>/);
  let cssBlock = '';
  if (cssMatch) {
    const cssTag = cssMatch[0];
    const cssHref = cssMatch[1];
    html = html.replace(cssTag, '');
    cssBlock = `\n  <link rel="preload" as="style" href="${cssHref}" crossorigin />\n  ${cssTag}`;
  }

  // Preload critical hero images right after CSS (using media queries so mobile only loads 15KB)
  const normalizedPath = filePath.replace(/\\/g, '/').toLowerCase();
  let heroPreload = '';
  if (normalizedPath.includes('boom3d')) {
    heroPreload = '\n  <link rel="preload" as="image" href="/boom3D/boom3d-hero-mobile.webp" type="image/webp" media="(max-width: 767px)" fetchpriority="high" />\n  <link rel="preload" as="image" href="/boom3D/boom3d-hero.webp" type="image/webp" media="(min-width: 768px)" fetchpriority="high" />';
  } else if (normalizedPath.includes('boom2')) {
    heroPreload = '\n  <link rel="preload" as="image" href="/boom2/boom2-hero-mobile.webp" type="image/webp" media="(max-width: 767px)" fetchpriority="high" />\n  <link rel="preload" as="image" href="/boom2/boom2-hero.webp" type="image/webp" media="(min-width: 768px)" fetchpriority="high" />';
  } else if ((normalizedPath.endsWith('/index.html') || normalizedPath.endsWith('\\index.html') || normalizedPath.endsWith('dist/index.html')) && !html.includes('href="/hero/hero-banner-mobile.webp"')) {
    heroPreload = '\n  <link rel="preload" as="image" href="/hero/hero-banner-mobile.webp" type="image/webp" media="(max-width: 767px)" fetchpriority="high" />';
  }

  // Ensure <meta charset="UTF-8" /> is strictly the very first element inside <head> (bytes 0-50)
  // followed immediately by viewport, cssBlock, and heroPreload
  html = html.replace(/<meta\s+charset=["']?utf-8["']?\s*\/?>/gi, '');
  const viewportMatch = html.match(/<meta name="viewport"[^>]*\/?>/i);
  let viewportTag = '';
  if (viewportMatch) {
    viewportTag = `\n  ${viewportMatch[0]}`;
    html = html.replace(viewportMatch[0], '');
  }

  html = html.replace(/<head[^>]*>/i, (m) => `${m}\n  <meta charset="UTF-8" />${viewportTag}${cssBlock}${heroPreload}`);

  fs.writeFileSync(filePath, html, 'utf8');
}

walk(distDir);
console.log('✅  Moved Helmet-managed <head> tags to directly follow <title> in every prerendered page.');
