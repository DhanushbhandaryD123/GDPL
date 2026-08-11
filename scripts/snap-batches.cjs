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
      await reactSnap.run({ ...config, include: batch.include, concurrency: 2 });
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
