import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Check if dataLayer exists (meaning GA4 is initialized on the page)
    if (window.dataLayer) {
      // Push a custom event to the dataLayer to record the page view on route changes
      window.dataLayer.push({
        event: 'spa_page_view',
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
}
