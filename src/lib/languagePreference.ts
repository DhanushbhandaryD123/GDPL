export const SUPPORTED_LANGS = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];
export const LANGUAGE_STORAGE_KEY = 'gd_lang';

// The static build's postbuild step crawls every route with react-snap,
// which reuses ONE browser session (and therefore one shared localStorage)
// across every page in a batch. If remembered-language persistence stayed
// active there, crawling a /zh/... page would leave "zh" remembered, and
// any later same-batch, unprefixed route (bare links auto-discovered by
// react-snap's crawler) would then get redirected into Chinese and get
// saved to disk under its English path. Keep prerendering purely
// URL-driven by no-op'ing persistence for that crawler specifically.
function isPrerendering(): boolean {
  return typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap';
}

export function rememberLanguage(lang: string) {
  if (isPrerendering()) return;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // localStorage unavailable (private mode, disabled, etc.) — safe to ignore.
  }
}

export function getRememberedLanguage(): string | null {
  if (isPrerendering()) return null;
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}
