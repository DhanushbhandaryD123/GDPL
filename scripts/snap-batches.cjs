// react-snap bundles a very old Puppeteer/Chromium that becomes unstable
// (silently crashes, no stack trace) once it has rendered ~150-180 pages in a
// single browser session. This site has 180+ routes across 8 languages, so a
// single `react-snap` run reliably dies partway through (English finishes,
// most other languages never get static HTML at all).
//
// Workaround: run react-snap multiple times, once per language, each with a
// fresh browser session. Smaller batches stay well under the crash threshold.
const fs = require('fs');
const path = require('path');
const reactSnap = require('react-snap');
const pkg = require('../package.json');

// Framer Motion's `whileInView` entrance animations (opacity:0 -> 1, only
// triggered by IntersectionObserver as an element scrolls into the viewport)
// never fire during the crawl, since react-snap just loads each page and
// waits - it never scrolls. Without this, every below-the-fold animated
// element gets its pre-animation opacity:0 state permanently frozen into
// the static HTML (only "fixed" for real users once their own browser
// scrolls and re-triggers the observer). Patching Page.prototype.content -
// the exact method react-snap calls right before saving each page's HTML
// (see node_modules/react-snap/index.js's saveAsHtml) - to scroll the full
// page height first means every real viewport-triggered animation has
// already fired and settled by the time the snapshot is taken, for every
// route, without touching react-snap's own source.
//
// Only pages taller than the crawl viewport (850px, see reactSnap.viewport
// default) have anything to scroll to - skipping the wait entirely for
// short pages (FAQ subpages, thank-you pages, etc.) keeps the added cost
// proportional to how much a page actually needs it.
const CRAWL_VIEWPORT_HEIGHT = 850;
const { Page } = require('puppeteer/lib/Page.js');
const { execSync } = require('child_process');
const originalContent = Page.prototype.content;

// Free port 45678 if hanging from previous runs
try {
  if (process.platform === 'win32') {
    execSync('powershell -Command "(Get-NetTCPConnection -LocalPort 45678 -State Listen -ErrorAction SilentlyContinue).OwningProcess | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }"', { stdio: 'ignore' });
  }
} catch (e) {}

Page.prototype.content = async function () {
  try {
    const height = await this.evaluate(() => document.body.scrollHeight);
    if (height > CRAWL_VIEWPORT_HEIGHT) {
      const maxHeight = Math.min(height, 3500);
      for (let y = 0; y < maxHeight; y += 900) {
        await this.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
        await this.waitFor(150);
      }
      await this.waitFor(600);
      await this.evaluate(() => window.scrollTo(0, 0));
      await this.waitFor(150);
    }
  } catch (e) {
    // A page that errors mid-scroll still gets its snapshot taken
  }
  return originalContent.call(this);
};

const config = pkg.reactSnap;
const sourceDir = path.resolve(__dirname, '..', config.source);
const marker = path.join(sourceDir, '200.html');

const languages = ['de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];
const batches = [
  { name: 'en', include: config.include.filter((p) => !languages.some((l) => p === `/${l}` || p.startsWith(`/${l}/`))) },
  ...languages.map((lang) => ({
    name: lang,
    include: config.include.filter((p) => p === `/${lang}` || p.startsWith(`/${lang}/`)),
  })),
];

(async () => {
  const failed = [];
  for (const batch of batches) {
    if (batch.include.length === 0) continue;
    if (fs.existsSync(marker)) fs.unlinkSync(marker);
    console.log(`\n=== react-snap batch: ${batch.name} (${batch.include.length} routes) ===`);
    try {
      await reactSnap.run({ ...config, include: batch.include, concurrency: 1 });
    } catch (e) {
      console.log(`⚠️  batch "${batch.name}" notice: ${e}`);
      failed.push(batch.name);
    }
  }

  if (failed.length) {
    console.log(`\n⚠️  Language batches noted: ${failed.join(', ')} — continuing post-processing.`);
  } else {
    console.log('\n✅  All language batches prerendered successfully.');
  }
})();
