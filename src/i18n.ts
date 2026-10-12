import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { SUPPORTED_LANGS, getRememberedLanguage } from './lib/languagePreference';
import en from './locales/en.json';

const localeLoaders: Record<string, () => Promise<{ default: Record<string, any> }>> = {
  de: () => import('./locales/de.json'),
  it: () => import('./locales/it.json'),
  ja: () => import('./locales/ja.json'),
  fr: () => import('./locales/fr.json'),
  pt: () => import('./locales/pt.json'),
  es: () => import('./locales/es.json'),
  zh: () => import('./locales/zh.json'),
};

export async function ensureLanguageLoaded(lang: string): Promise<void> {
  if (lang === 'en' || i18n.hasResourceBundle(lang, 'translation')) return;
  const loader = localeLoaders[lang];
  if (loader) {
    const mod = await loader();
    i18n.addResourceBundle(lang, 'translation', mod.default, true, true);
  }
}

function detectInitialLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  const firstSegment = window.location.pathname.split('/')[1];
  if (SUPPORTED_LANGS.includes(firstSegment)) return firstSegment;

  const remembered = getRememberedLanguage();
  if (remembered && SUPPORTED_LANGS.includes(remembered)) return remembered;
  return 'en';
}

const initialLang = detectInitialLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

if (initialLang !== 'en') {
  ensureLanguageLoaded(initialLang).then(() => {
    i18n.changeLanguage(initialLang);
  });
}

export default i18n;
