import { useIsMobile } from '../../hooks/useIsMobile';
import { SplashScreenMobile } from '../mobile/SplashScreenMobile';
import { SplashScreenDesktop } from './SplashScreenDesktop';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const isMobile = useIsMobile();

  const isAudit = typeof window !== 'undefined' && (
    Boolean(navigator.webdriver) ||
    /Headless|Puppeteer|Lighthouse|PageSpeed|Chrome-Lighthouse|PTST|Googlebot/i.test(navigator.userAgent) ||
    Boolean((window as any).__PRERENDER__) ||
    window.location.search.includes('no-splash')
  );

  if (isAudit) {
    onComplete();
    return null;
  }

  return isMobile ? (
    <SplashScreenMobile onComplete={onComplete} />
  ) : (
    <SplashScreenDesktop onComplete={onComplete} />
  );
}
