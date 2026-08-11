import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.resolve(__dirname, '../package.json');
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

// Read package.json
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const routes = pkg.reactSnap?.include || [];

const DOMAIN = 'https://www.globaldelight.com';

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
