export const SUPPORTED_LANGS = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];
export const LANGUAGE_STORAGE_KEY = 'gd_lang';

export function rememberLanguage(lang: string) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // localStorage unavailable (private mode, disabled, etc.) — safe to ignore.
  }
}

export function getRememberedLanguage(): string | null {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}
