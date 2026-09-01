import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGS, rememberLanguage, getRememberedLanguage } from '@/lib/languagePreference';

export function LanguageSync() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && SUPPORTED_LANGS.includes(lang)) {
      if (i18n.resolvedLanguage !== lang) {
        i18n.changeLanguage(lang);
      }
      rememberLanguage(lang);
      // Keep the raw HTML's lang attribute honest for this locale — it also
      // gets captured as-is by react-snap's prerendered static HTML.
      document.documentElement.lang = lang;
      return;
    }

    // No language prefix in the URL — if the visitor previously picked a
    // non-English language, keep them there instead of silently falling
    // back to English on every refresh/new page.
    const remembered = getRememberedLanguage();
    if (remembered && remembered !== 'en' && SUPPORTED_LANGS.includes(remembered)) {
      const target = location.pathname === '/' ? `/${remembered}` : `/${remembered}${location.pathname}`;
      navigate(`${target}${location.search}${location.hash}`, { replace: true });
      return;
    }

    if (i18n.resolvedLanguage !== 'en') {
      i18n.changeLanguage('en');
    }
    document.documentElement.lang = 'en';
  }, [lang, i18n, location.pathname, location.search, location.hash, navigate]);

  return null;
}
