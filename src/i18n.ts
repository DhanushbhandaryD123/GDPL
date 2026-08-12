import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import it from './locales/it.json';
import ja from './locales/ja.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import pt from './locales/pt.json';
import es from './locales/es.json';
import zh from './locales/zh.json';

const supportedLangs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

function detectInitialLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  const firstSegment = window.location.pathname.split('/')[1];
  return supportedLangs.includes(firstSegment) ? firstSegment : 'en';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
      ja: { translation: ja },
      de: { translation: de },
      fr: { translation: fr },
      pt: { translation: pt },
      es: { translation: es },
      zh: { translation: zh }
    },
    lng: detectInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
