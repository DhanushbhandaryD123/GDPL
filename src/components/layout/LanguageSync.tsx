import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function LanguageSync() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const supportedLangs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];
    // If a lang param exists and it's supported, switch to it.
    if (lang && supportedLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      // If there is no valid lang param, default to English
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
      }
    }
  }, [lang, i18n, location.pathname]);

  return null;
}
