const { execSync } = require('child_process');
const fs = require('fs');

const pages = [
  { name: 'Home', url: 'https://gdpl-website.pages.dev/' },
  { name: 'Boom 3D', url: 'https://gdpl-website.pages.dev/boom3D' },
  { name: 'Capto', url: 'https://gdpl-website.pages.dev/capto' },
  { name: 'Boom for Mobile', url: 'https://gdpl-website.pages.dev/boomformobile' },
  { name: 'AuDimix', url: 'https://gdpl-website.pages.dev/audimix' },
  { name: 'AudiOn', url: 'https://gdpl-website.pages.dev/audion' },
  { name: 'Vizmato', url: 'https://gdpl-website.pages.dev/vizmato' }
];

console.log('Starting Desktop & Mobile audits for each product page...\n');

const results = [];

for (const p of pages) {
  console.log(`\n========================================`);
  console.log(`Auditing ${p.name}: ${p.url}`);
  console.log(`========================================`);

  // Desktop
  try {
    const desktopOutPath = `./lh-temp-desktop.json`;
    execSync(`npx lighthouse ${p.url} --preset=desktop --output json --output-path ${desktopOutPath} --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new"`, { stdio: 'ignore' });
    const dLh = JSON.parse(fs.readFileSync(desktopOutPath, 'utf8'));
    const dCats = dLh.categories;
    const dAuds = dLh.audits;
    const dScore = {
      preset: 'Desktop',
      perf: Math.round(dCats.performance.score * 100),
      a11y: Math.round(dCats.accessibility.score * 100),
      bp: Math.round(dCats['best-practices'].score * 100),
      seo: Math.round(dCats.seo.score * 100),
      fcp: dAuds['first-contentful-paint']?.displayValue,
      lcp: dAuds['largest-contentful-paint']?.displayValue,
      tbt: dAuds['total-blocking-time']?.displayValue,
      cls: dAuds['cumulative-layout-shift']?.displayValue
    };
    console.log(`Desktop: Perf=${dScore.perf} | A11y=${dScore.a11y} | BP=${dScore.bp} | SEO=${dScore.seo} | FCP=${dScore.fcp} | LCP=${dScore.lcp} | TBT=${dScore.tbt} | CLS=${dScore.cls}`);
    results.push({ page: p.name, ...dScore });
  } catch (e) {
    console.error(`Desktop error for ${p.name}:`, e.message);
  }

  // Mobile
  try {
    const mobileOutPath = `./lh-temp-mobile.json`;
    execSync(`npx lighthouse ${p.url} --output json --output-path ${mobileOutPath} --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new"`, { stdio: 'ignore' });
    const mLh = JSON.parse(fs.readFileSync(mobileOutPath, 'utf8'));
    const mCats = mLh.categories;
    const mAuds = mLh.audits;
    const mScore = {
      preset: 'Mobile',
      perf: Math.round(mCats.performance.score * 100),
      a11y: Math.round(mCats.accessibility.score * 100),
      bp: Math.round(mCats['best-practices'].score * 100),
      seo: Math.round(mCats.seo.score * 100),
      fcp: mAuds['first-contentful-paint']?.displayValue,
      lcp: mAuds['largest-contentful-paint']?.displayValue,
      tbt: mAuds['total-blocking-time']?.displayValue,
      cls: mAuds['cumulative-layout-shift']?.displayValue
    };
    console.log(`Mobile:  Perf=${mScore.perf} | A11y=${mScore.a11y} | BP=${mScore.bp} | SEO=${mScore.seo} | FCP=${mScore.fcp} | LCP=${mScore.lcp} | TBT=${mScore.tbt} | CLS=${mScore.cls}`);
    results.push({ page: p.name, ...mScore });
  } catch (e) {
    console.error(`Mobile error for ${p.name}:`, e.message);
  }
}

fs.writeFileSync('./audit-summary.json', JSON.stringify(results, null, 2));
console.log('\n✅ All audits completed! Results saved to ./audit-summary.json');
