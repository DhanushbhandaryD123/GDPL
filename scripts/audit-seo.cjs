const fs = require('fs');
const path = require('path');

function walk(dir, list = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, list);
    else if (e.name.endsWith('.html')) list.push(p);
  }
  return list;
}

const files = walk('dist');
console.log('Total HTML files in dist:', files.length);

let withTitle = 0, withDesc = 0, withCanonical = 0, withOg = 0, withTwitter = 0;
let withOrgSchema = 0, withFaqSchema = 0, withBreadcrumbSchema = 0, withSoftwareSchema = 0;
let withBreadcrumbNav = 0;

const noBreadcrumb = [];
const noCanonical = [];
const noOg = [];
const noSchema = [];
const noDesc = [];

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const rel = path.relative('dist', f).replace(/\\/g, '/');
  
  if (c.includes('<title>')) withTitle++;
  if (c.includes('name="description"')) withDesc++; else noDesc.push(rel);
  if (c.includes('rel="canonical"')) withCanonical++; else noCanonical.push(rel);
  if (c.includes('property="og:title"')) withOg++; else noOg.push(rel);
  if (c.includes('name="twitter:card"')) withTwitter++;
  if (c.includes('"@type":"Organization"') || c.includes('"@type": "Organization"')) withOrgSchema++;
  if (c.includes('"@type":"FAQPage"') || c.includes('"@type": "FAQPage"')) withFaqSchema++;
  if (c.includes('"@type":"BreadcrumbList"') || c.includes('"@type": "BreadcrumbList"')) withBreadcrumbSchema++;
  if (c.includes('"@type":"SoftwareApplication"') || c.includes('"@type": "SoftwareApplication"')) withSoftwareSchema++;
  if (c.includes('aria-label="Breadcrumb"')) withBreadcrumbNav++; else noBreadcrumb.push(rel);
  if (!c.includes('application/ld+json')) noSchema.push(rel);
}

console.log('With Title:', withTitle);
console.log('With Description:', withDesc, '(missing:', noDesc.length, noDesc.slice(0, 10), ')');
console.log('With Canonical:', withCanonical, '(missing:', noCanonical.length, noCanonical, ')');
console.log('With OG Title:', withOg, '(missing:', noOg.length, noOg, ')');
console.log('With Twitter Card:', withTwitter);
console.log('With Organization Schema:', withOrgSchema);
console.log('With FAQ Schema:', withFaqSchema);
console.log('With Breadcrumb Schema:', withBreadcrumbSchema);
console.log('With SoftwareApplication Schema:', withSoftwareSchema);
console.log('With Breadcrumbs Navigation UI:', withBreadcrumbNav, '(without:', noBreadcrumb.length, ')');
console.log('Without any schema:', noSchema.length, noSchema);

// Check sitemap
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const sitemapUrls = (sitemap.match(/<loc>(.*?)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));
console.log('URLs in sitemap.xml:', sitemapUrls.length);

// Compare dist files vs sitemap
const distRoutes = files.map(f => {
  let r = path.relative('dist', f).replace(/\\/g, '/');
  if (r === 'index.html') return '/';
  if (r.endsWith('/index.html')) return '/' + r.slice(0, -'/index.html'.length);
  return '/' + r.replace(/\.html$/, '');
});

const notInSitemap = distRoutes.filter(r => !sitemapUrls.some(u => u.endsWith(r === '/' ? 'globaldelight.com/' : r)));
console.log('Prerendered routes NOT in sitemap.xml:', notInSitemap.length, notInSitemap.slice(0, 20));
