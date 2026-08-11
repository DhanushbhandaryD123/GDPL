import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.resolve(__dirname, '../src/pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if it has globaldelight.com
  if (content.includes('https://www.globaldelight.com')) {
    // 1. Add domain definition inside the main functional component if not already there
    if (!content.includes('const domain = import.meta.env.VITE_SITE_URL || \'http://localhost:5173\';')) {
       // Find the component definition (e.g. export function Boom3D() { )
       content = content.replace(/(export function [a-zA-Z0-9_]+\(\)\s*\{)/, "$1\n  const domain = import.meta.env.VITE_SITE_URL || 'http://localhost:5173';");
    }

    // 2. Replace the hardcoded urls in tags
    // e.g. content="https://www.globaldelight.com/boom3D" -> content={`${domain}/boom3D`}
    content = content.replace(/content="https:\/\/www\.globaldelight\.com([^"]*)"/g, "content={`\\${domain}$1`}");
    
    // Replace in JSON-LD where it might be a string literal
    // e.g. "image": "https://www.globaldelight.com/apps/Capto-mac.jpeg" -> "image": `${domain}/apps/Capto-mac.jpeg`
    content = content.replace(/"image":\s*"https:\/\/www\.globaldelight\.com([^"]*)"/g, '"image": `\\${domain}$1`');
    content = content.replace(/"url":\s*"https:\/\/www\.globaldelight\.com([^"]*)"/g, '"url": `\\${domain}$1`');
    
    // Also canonical links
    content = content.replace(/href="https:\/\/www\.globaldelight\.com([^"]*)"/g, "href={`\\${domain}$1`}");

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

// Update the FAQ pages too
const faqDir = path.join(pagesDir, 'faq');
const faqFiles = fs.readdirSync(faqDir).filter(f => f.endsWith('.tsx'));
for (const file of faqFiles) {
  const filePath = path.join(faqDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('https://www.globaldelight.com')) {
    if (!content.includes('const domain = import.meta.env.VITE_SITE_URL || \'http://localhost:5173\';')) {
       content = content.replace(/(export function [a-zA-Z0-9_]+\(\)\s*\{)/, "$1\n  const domain = import.meta.env.VITE_SITE_URL || 'http://localhost:5173';");
    }
    content = content.replace(/content="https:\/\/www\.globaldelight\.com([^"]*)"/g, "content={`\\${domain}$1`}");
    content = content.replace(/href="https:\/\/www\.globaldelight\.com([^"]*)"/g, "href={`\\${domain}$1`}");
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated faq/${file}`);
  }
}
console.log('✅ All hardcoded domains replaced with dynamic domain!');
