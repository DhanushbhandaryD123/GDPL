import { useIsMobile } from '../../hooks/useIsMobile';
import { SplashScreenMobile } from '../mobile/SplashScreenMobile';
import { SplashScreenDesktop } from './SplashScreenDesktop';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <SplashScreenMobile onComplete={onComplete} />
  ) : (
    <SplashScreenDesktop onComplete={onComplete} />
  );
}
