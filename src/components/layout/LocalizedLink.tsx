import { forwardRef } from 'react';
import { Link as RouterLink, useParams, type LinkProps } from 'react-router-dom';

const supportedLangs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

function localize(to: string, lang: string | undefined): string {
  if (!lang || lang === 'en' || !supportedLangs.includes(lang)) return to;
  if (!to.startsWith('/') || to.startsWith('#')) return to;
  // Already targets a specific language (e.g. the language-switcher itself
  // building an explicit "/fr/about" link) — don't double-prefix it.
  if (supportedLangs.includes(to.split('/')[1])) return to;
  return to === '/' ? `/${lang}` : `/${lang}${to}`;
}

/**
 * Drop-in replacement for react-router-dom's <Link> that keeps the current
 * URL language prefix when navigating to another internal page. Without
 * this, every internal link (nav, footer, CTAs, product cross-links) points
 * at the bare English path, so clicking anything while on a /de/... page
 * silently dropped the user back into English.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const { lang } = useParams<{ lang?: string }>();
  const localizedTo = typeof to === 'string' ? localize(to, lang) : to;
  return <RouterLink ref={ref} to={localizedTo} {...props} />;
});

Link.displayName = 'LocalizedLink';
