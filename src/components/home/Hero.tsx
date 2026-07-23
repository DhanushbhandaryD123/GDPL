import { useIsMobile } from '../../hooks/useIsMobile';
import { HeroMobile } from '../mobile/HeroMobile';
import { HeroDesktop } from './HeroDesktop';

export function Hero() {
  const isMobile = useIsMobile();

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}
