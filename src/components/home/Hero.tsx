import { HeroMobile } from '../mobile/HeroMobile';
import { HeroDesktop } from './HeroDesktop';

// Both variants render in the DOM and CSS decides which is visible, so the
// layout is stable from first paint — no post-hydration swap, no CLS.
export function Hero() {
  return (
    <>
      <div className="md:hidden">
        <HeroMobile />
      </div>
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
    </>
  );
}
