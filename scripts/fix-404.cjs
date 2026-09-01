// react-snap special-cases the literal string "/404" in reactSnap.include:
// instead of navigating there and capturing whatever the app renders, it just
// copies the already-captured "/" (Home) page into dist/404.html. Since
// Vercel serves dist/404.html (with a real 404 status) for any URL that
// isn't a static file, that means crawlers reading raw HTML at a broken URL
// see Home's title/content, not "page not found".
//
// Fix: "/__prerender/not-found" has no matching route, so react-snap's own
// crawl renders the app's real catch-all <NotFound /> component for it — the
// same proven mechanism that correctly captures every other distinct page.
// It must be a *two-segment* path: every route is also registered as
// "/:lang<path>", so a single-segment scratch path (e.g. "/not-found") would
// itself match "/:lang" (treated as a bogus language code) and render Home
// instead of ever reaching the catch-all route. This script promotes the
// capture into dist/404.html / dist/404/index.html and removes the scratch
// route's output.
const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "..", "dist");
const scratchDir = path.join(distDir, "__prerender");
const sourceFile = path.join(scratchDir, "not-found", "index.html");

function main() {
  if (!fs.existsSync(sourceFile)) {
    console.log("⚠️  fix-404: dist/__prerender/not-found/index.html not found — leaving dist/404.html untouched.");
    return;
  }

  const html = fs.readFileSync(sourceFile, "utf8");
  if (!html.includes("404")) {
    console.log("⚠️  fix-404: captured page doesn't look like the NotFound route — leaving dist/404.html untouched.");
    return;
  }

  fs.writeFileSync(path.join(distDir, "404.html"), html, "utf8");
  fs.mkdirSync(path.join(distDir, "404"), { recursive: true });
  fs.writeFileSync(path.join(distDir, "404", "index.html"), html, "utf8");
  fs.rmSync(scratchDir, { recursive: true, force: true });
  console.log("✅  dist/404.html regenerated from the real NotFound render.");
}

main();
