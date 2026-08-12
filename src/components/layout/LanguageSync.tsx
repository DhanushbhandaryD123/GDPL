import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function LanguageSync() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const supportedLangs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];
    // Determine the correct language based on the URL parameter, default to English
    const targetLang = lang && supportedLangs.includes(lang) ? lang : 'en';
    
    // Only change if the current resolved language is different
    if (i18n.resolvedLanguage !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [lang, i18n, location.pathname]);

  return null;
}
