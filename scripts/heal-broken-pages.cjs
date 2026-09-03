// react-snap bundles a very old, unstable Puppeteer/Chromium (see the header
// comment in snap-batches.cjs). The scroll-through patch added there for the
// whileInView animation fix makes each page do significantly more work
// (scrolling, evaluating, waiting), which increases Chrome DevTools Protocol
// traffic enough to trigger that instability more readily than before -
// including outright mid-batch crashes ("WebSocket is not open: readyState 3
// (CLOSED)"). When that happens, react-snap's own internal error handling
// swallows the resulting cascade of per-route failures without ever
// propagating an exception up to snap-batches.cjs's try/catch, so the batch
// is reported as having succeeded even though most of its remaining routes
// were never actually written.
//
// Isolated, one-route-at-a-time re-crawls (crawl:false, fresh browser session
// each time) have been completely reliable in every test - the crash only
// shows up under the sustained load of a full batch. Rather than chase the
// exact instability inside 7-year-old bundled Chromium internals, this
// compares the finished dist/ against the full expected route list from
// package.json and re-crawls, individually, anything that's missing or
// came out broken.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const reactSnap = require('react-snap');
const pkg = require('../package.json');

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
      await this.waitFor(1600);
      await this.evaluate(() => window.scrollTo(0, 0));
      await this.waitFor(300);
    }
  } catch (e) {}
  return originalContent.call(this);
};

const config = pkg.reactSnap;
const distDir = path.resolve(__dirname, '..', config.source);
const marker = path.join(distDir, '200.html');

function routeToFile(route) {
  return route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route, 'index.html');
}

function isBrokenContent(html) {
  return html.length < 2000 || html.includes('Cannot GET');
}

async function main() {
  const problems = [];
  for (const route of config.include) {
    const filePath = routeToFile(route);
    if (!fs.existsSync(filePath)) {
      problems.push({ route, filePath, reason: 'missing' });
    } else if (isBrokenContent(fs.readFileSync(filePath, 'utf8'))) {
      problems.push({ route, filePath, reason: 'broken' });
    }
  }

  if (problems.length === 0) {
    console.log('✅  heal-broken-pages: no missing or broken pages found.');
    return;
  }

  console.log(`⚠️  heal-broken-pages: found ${problems.length} missing/broken page(s) out of ${config.include.length}, re-crawling individually:`);
  problems.forEach((p) => console.log(`   ${p.route} (${p.reason})`));

  for (const { route, filePath } of problems) {
    // A broken (not missing) file at this path would otherwise get served
    // as-is by react-snap's local static server, ahead of the SPA fallback
    // that would let React render the route fresh.
    fs.rmSync(filePath, { force: true });
    if (fs.existsSync(marker)) fs.unlinkSync(marker);
    try {
      await reactSnap.run({ ...config, include: [route], crawl: false, concurrency: 1 });
    } catch (e) {
      console.log(`🔥  heal-broken-pages: re-crawl of ${route} failed: ${e}`);
    }
  }

  const stillBroken = problems.filter(
    ({ filePath }) => !fs.existsSync(filePath) || isBrokenContent(fs.readFileSync(filePath, 'utf8'))
  );
  if (stillBroken.length > 0) {
    console.log(`🔥  heal-broken-pages: ${stillBroken.length} page(s) still missing/broken after re-crawl:`);
    stillBroken.forEach(({ route }) => console.log(`   ${route}`));
    process.exit(1);
  }

  console.log(`✅  heal-broken-pages: all ${problems.length} page(s) fixed.`);

  // Any of the just-healed pages need the same postprocessing every other
  // page already went through, so re-run the rest of the postbuild chain.
  execSync('node scripts/fix-404.cjs && node scripts/reorder-head-tags.cjs && node scripts/dedupe-head-tags.cjs && node scripts/patch-per-page-seo.cjs && node scripts/beautify-html.cjs', {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'inherit',
  });
}

main();
