
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './index.css';
import App from './App.tsx';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root')!;
const app = (
  <HelmetProvider>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </I18nextProvider>
  </HelmetProvider>
);
let hasHydrated = false;

const hydrateApp = () => {
  if (hasHydrated) return;
  hasHydrated = true;
  cleanupListeners();

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app, {
      onRecoverableError(error) {
        if (import.meta.env.DEV) {
          console.warn('Recovered hydration mismatch:', error);
        }
      },
    });
  } else {
    createRoot(rootElement).render(app);
  }
};

const interactionEvents = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'mousemove'];
const onInteraction = () => hydrateApp();
const cleanupListeners = () => {
  if (typeof window !== 'undefined') {
    interactionEvents.forEach(evt => window.removeEventListener(evt, onInteraction));
  }
};

const isPrerenderBuild = typeof window !== 'undefined' && 
  (/ReactSnap/i.test(navigator.userAgent) || Boolean((window as unknown as { __PRERENDER_INJECTED__?: boolean }).__PRERENDER_INJECTED__));

if (isPrerenderBuild) {
  // Prerender worker needs immediate sync hydration to capture DOM
  hydrateApp();
} else if (typeof window !== 'undefined') {
  // If the page was NOT prerendered (i.e. #root is empty), render immediately
  if (!rootElement.hasChildNodes()) {
    hydrateApp();
  } else {
    // For prerendered HTML, hydrate instantly on user interaction (tap, scroll, mousemove, key)
    interactionEvents.forEach(evt => window.addEventListener(evt, onInteraction, { once: true, passive: true }));
  }
} else {
  hydrateApp();
}



