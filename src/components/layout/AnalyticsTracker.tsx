import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // If gtag is initialized, send standard GA4 page_view event on route changes
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // Small timeout to allow document.title to update via Helmet
      setTimeout(() => {
        window.gtag!('event', 'page_view', {
          page_path: location.pathname + location.search,
          page_title: document.title
        });
      }, 100);
    }
  }, [location]);

  return null;
}
