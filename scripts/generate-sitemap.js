import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.resolve(__dirname, '../package.json');
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

// Read package.json
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
// Thank-you/confirmation pages are real, prerendered pages (useful to real
// visitors and social shares) but deliberately noindex — they shouldn't be
// offered to crawlers as a landing page, so they're excluded here same as
// the internal 404-capture scratch route.
const NOINDEX_ROUTES = ['/404', '/__prerender/not-found', '/capto/thankyou', '/boom2/thankyou/download'];
const routes = (pkg.reactSnap?.include || []).filter(route => !NOINDEX_ROUTES.includes(route));
let DOMAIN = 'http://localhost:5173';
try {
  const envContent = fs.readFileSync(path.resolve(__dirname, '../.env'), 'utf8');
  const match = envContent.match(/VITE_SITE_URL=(.*)/);
  if (match) DOMAIN = match[1].trim();
} catch(e) {}

// Generate sitemap content
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

const today = new Date().toISOString().split('T')[0];

routes.forEach((route) => {
  sitemapContent += `  <url>\n`;
  sitemapContent += `    <loc>${DOMAIN}${route}</loc>\n`;
  sitemapContent += `    <lastmod>${today}</lastmod>\n`;
  sitemapContent += `    <changefreq>weekly</changefreq>\n`;
  sitemapContent += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
  sitemapContent += `  </url>\n`;
});

sitemapContent += `</urlset>\n`;

// Write to public/sitemap.xml
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log(`✅ Sitemap successfully generated at public/sitemap.xml with ${routes.length} URLs.`);

// Write robots.txt
const robotsPath = path.resolve(__dirname, '../public/robots.txt');
const robotsContent = `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`;
fs.writeFileSync(robotsPath, robotsContent, 'utf8');
console.log(`✅ robots.txt successfully generated at public/robots.txt with domain ${DOMAIN}`);
