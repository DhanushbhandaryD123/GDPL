const { execSync } = require('child_process');
const fs = require('fs');

const testUrl = 'https://gdpl-website.pages.dev/boom3D';
console.log('Auditing Boom 3D Mobile...');
execSync(`npx lighthouse ${testUrl} --output json --output-path ./lh-diag-boom3d.json --only-categories=performance --chrome-flags="--headless=new"`, { stdio: 'inherit' });
const lh = JSON.parse(fs.readFileSync('./lh-diag-boom3d.json', 'utf8'));
const a = lh.audits;
console.log('\n--- AUDIT RESULTS FOR BOOM 3D MOBILE ---');
console.log('Performance Score:', Math.round(lh.categories.performance.score * 100));
console.log('FCP:', a['first-contentful-paint']?.displayValue, '(ms:', a['first-contentful-paint']?.numericValue, ')');
console.log('LCP:', a['largest-contentful-paint']?.displayValue, '(ms:', a['largest-contentful-paint']?.numericValue, ')');
console.log('TBT:', a['total-blocking-time']?.displayValue, '(ms:', a['total-blocking-time']?.numericValue, ')');
console.log('CLS:', a['cumulative-layout-shift']?.displayValue, '(score:', a['cumulative-layout-shift']?.numericValue, ')');
console.log('Speed Index:', a['speed-index']?.displayValue, '(ms:', a['speed-index']?.numericValue, ')');
console.log('\nLCP Element:', a['largest-contentful-paint-element']?.details?.items?.[0]?.node?.snippet);
console.log('\nRender blocking resources:', a['render-blocking-resources']?.details?.items);
console.log('\nLong tasks (top 5):', a['long-tasks']?.details?.items?.slice(0, 5));
console.log('\nNetwork requests (largest 8):', a['network-requests']?.details?.items?.sort((x,y) => y.transferSize - x.transferSize).slice(0, 8).map(r => ({ url: r.url.split('/').pop(), size: r.transferSize, mime: r.mimeType, dur: r.timeToFirstByte + r.downloadTime })));
