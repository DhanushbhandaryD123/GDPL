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
const originalContent = Page.prototype.content;
Page.prototype.content = async function () {
  try {
    const height = await this.evaluate(() => document.body.scrollHeight);
    if (height > CRAWL_VIEWPORT_HEIGHT) {
      for (let y = 0; y < height; y += 700) {
        await this.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
        await this.waitFor(220);
      }
      // Some sections use a staggered multi-child reveal (Framer Motion
      // variants, e.g. Boom3DEqualizer's preset card stack) that keeps
      // animating for well over a second after its IntersectionObserver
      // first fires. The scroll above only guarantees every observer has
      // fired at least once - this settle wait, taken once at the bottom
      // rather than padding every single step, gives even a late-triggered
      // (near the bottom) staggered sequence time to actually finish before
      // the snapshot is taken.
      await this.waitFor(1600);
      await this.evaluate(() => window.scrollTo(0, 0));
      await this.waitFor(300);
    }
  } catch (e) {
    // A page that errors mid-scroll (navigation, closed context, etc.)
    // still gets its snapshot taken - just without the scroll-triggered fix.
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
      // concurrency: 1 - the scroll-through above keeps each page open
      // several seconds longer than before. At concurrency 2, two such pages
      // overlapping was enough to overwhelm react-snap's local static server
      // under load: some pages came back as a bare Express "Cannot GET" error
      // or an empty <html><body></body></html> shell instead of real content
      // (confirmed by inspecting the actual output, despite the crawl log
      // reporting every page as "crawled" successfully). Serial processing
      // is slower but reliable.
      await reactSnap.run({ ...config, include: batch.include, concurrency: 1 });
    } catch (e) {
      console.log(`🔥  batch "${batch.name}" failed: ${e}`);
      failed.push(batch.name);
    }
  }

  if (failed.length) {
    console.log(`\n🔥  Some language batches failed to prerender: ${failed.join(', ')}`);
    process.exit(1);
  } else {
    console.log('\n✅  All language batches prerendered successfully.');
  }
})();
