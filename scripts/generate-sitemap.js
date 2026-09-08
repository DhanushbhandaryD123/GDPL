import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.resolve(__dirname, '../package.json');
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

const baseRoutes = [
  '/',
  '/boom',
  '/boom2',
  '/boom3D',
  '/capto',
  '/capto/windows',
  '/capto/educators',
  '/audion',
  '/audimix',
  '/vizmato',
  '/cameraplus',
  '/camerapluspro',
  '/boomformobile',
  '/about',
  '/business',
  '/technology/audio',
  '/technology/video',
  '/technology/camera',
  '/technology/screen-capture',
  '/faq',
  '/faq/boom3dmac',
  '/faq/boom3dmas',
  '/faq/boom3dwin',
  '/faq/audimixwin',
  '/faq/boom2',
  '/faq/boomios',
  '/faq/vizmato',
  '/faq/captomac',
  '/faq/captowin',
  '/faq/audion',
  '/contact',
  '/careers',
  '/press-info',
  '/privacy-policy',
  '/whatsnew/boom',
  '/whatsnew/boom2',
  '/whatsnew/capto',
  '/whatsnew/audion',
  '/whatsnew/audimix'
];

const langs = ['de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

// Build complete list of all 312 public indexable routes
const routes = [...baseRoutes];
for (const lang of langs) {
  for (const r of baseRoutes) {
    if (r === '/') {
      routes.push(`/${lang}`);
    } else {
      routes.push(`/${lang}${r}`);
    }
  }
}

let DOMAIN = 'https://www.globaldelight.com';
try {
  const envContent = fs.readFileSync(path.resolve(__dirname, '../.env'), 'utf8');
  const match = envContent.match(/VITE_SITE_URL=(.*)/);
  if (match && match[1].trim().startsWith('http')) DOMAIN = match[1].trim();
} catch(e) {}

// Generate sitemap content
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

const today = new Date().toISOString().split('T')[0];

routes.forEach((route) => {
  const isTopProduct = ['/boom3D', '/boom2', '/boom', '/capto', '/audion', '/audimix', '/vizmato'].includes(route);
  const priority = route === '/' ? '1.0' : (isTopProduct ? '0.9' : '0.8');
  sitemapContent += `  <url>\n`;
  sitemapContent += `    <loc>${DOMAIN}${route}</loc>\n`;
  sitemapContent += `    <lastmod>${today}</lastmod>\n`;
  sitemapContent += `    <changefreq>weekly</changefreq>\n`;
  sitemapContent += `    <priority>${priority}</priority>\n`;
  sitemapContent += `  </url>\n`;
});

sitemapContent += `</urlset>\n`;

// Write to public/sitemap.xml
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log(`✅ Sitemap successfully generated at public/sitemap.xml with ${routes.length} URLs.`);

// Write robots.txt
const robotsPath = path.resolve(__dirname, '../public/robots.txt');
const robotsContent = `# ================================
# Global Delight Robots.txt
# ================================

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: AdsBot-Google
Allow: /

User-Agent: *

Disallow: /m/boom/
Disallow: /boom3d/campaign/
Disallow: /mcfunctions/
Disallow: /storefs/
Disallow: /boom/boom-3d-ppc-generic/

Disallow: /purchase/
Disallow: /paddleapi

Disallow: /*?from=
Disallow: /*?utm_
Disallow: /*&utm_
Disallow: /*?gclid=
Disallow: /*&gclid=
Disallow: /*?fbclid=
Disallow: /*&fbclid=
Disallow: /*?reseller=
Disallow: /*?lang
Disallow: /*?lang=enJun
Disallow: /*?ref=
Disallow: /*&ref=
Disallow: /*?wgu=
Disallow: /*?promo=
Disallow: /*&promo=
Disallow: /*?c=Boom
Disallow: /*?source_page
Disallow: /*?source_page=
Disallow: /*&source_page=
Disallow: /*?cookie=true
Disallow: /*?dv=
Disallow: /*?item

# XML Sitemap
Allow: /
Allow: /sitemap.xml
Sitemap: ${DOMAIN}/sitemap.xml
`;
fs.writeFileSync(robotsPath, robotsContent, 'utf8');
console.log(`✅ robots.txt successfully generated at public/robots.txt with domain ${DOMAIN}`);

