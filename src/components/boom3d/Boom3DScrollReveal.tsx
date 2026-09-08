import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Boom3DAppUniverseVisual, useResponsiveTier, getNaturalSize } from './Boom3DAppUniverse';

// =========================================
// REDUCED MOTION SUPPORT
// Respects prefers-reduced-motion.
// =========================================
function usePrefersReducedMotion() {
  const [prefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  return prefersReducedMotion;
}

type Phase = 'line1' | 'line2' | 'universe';

// =========================================
// SCROLL-PINNED THREE-STAGE REVEAL
// 1. Stage 1: "Every app sounds different..." displays cleanly.
// 2. On scroll: Line 1 moves up & out; Line 2 ("Boom 3D makes them all sound extraordinary...") displays in its place.
// 3. On further scroll: Line 2 moves UPWARD out of view, and the Universe visual slides UP into view.
// 4. Zero background overlap (visibility: hidden when inactive) & zero scroll-freeze hanging.
// =========================================
export function Boom3DScrollReveal() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Exact sticky range: progress 0 (hits top) to 1 (reaches 400vh bottom)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [phase, setPhase] = useState<Phase>('line1');

  // 4-stage progression:
  // 0.00 - 0.25: Line 1
  // 0.25 - 0.50: Line 2
  // 0.50 - 0.75: Universe Visual
  // 0.75 - 1.00: KeyFeatures slides up like a presentation slide covering Universe
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const nextPhase: Phase = v < 0.25 ? 'line1' : v < 0.50 ? 'line2' : 'universe';
    setPhase((prev) => (prev !== nextPhase ? nextPhase : prev));
  });

  // Orbital rotation smoothly advances as user scrolls through Stage 3
  const scrollAngleDeg = useTransform(
    scrollYProgress,
    [0.50, 0.85],
    prefersReducedMotion ? [0, 0] : [0, 180]
  );

  // Recessing depth as the next section slides over it like a PDF slide
  const universeCoverScale = useTransform(scrollYProgress, [0.75, 1], [1, 0.94]);
  const universeCoverOpacity = useTransform(scrollYProgress, [0.75, 0.98], [1, 0.4]);

  // =========================================
  // FIT SCALE — keeps every icon fully visible without clipping
  // =========================================
  const tier = useResponsiveTier();
  const stickyRef = useRef<HTMLDivElement>(null);
  const [availableSize, setAvailableSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;
    const measure = () => setAvailableSize({ width: el.clientWidth, height: el.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const natural = getNaturalSize(tier);
  const fitScale = availableSize
    ? Math.min(1, availableSize.width / natural.width, availableSize.height / natural.height)
    : 1;

  if (prefersReducedMotion) {
    // No scroll-lock, no swap — everything simply stacked in normal flow.
    return (
      <section className="relative bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <p className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight">
            {t('boom3d.scroll_reveal.line1')}
          </p>
          <div>
            <p className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight mb-8">
              {t('boom3d.scroll_reveal.line2')}
            </p>
            <a
              href="#boom3d-download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-black/80 transition-colors"
            >
              {t('boom3d.scroll_reveal.learn_more')}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flex justify-center">
            <Boom3DAppUniverseVisual scrollAngleDeg={scrollAngleDeg} prefersReducedMotion scale={1} skipEntrance={true} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: '400vh' }}>
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* STAGE 1: Line 1 ("Every app sounds different...") */}
        <div
          className="absolute inset-0 flex items-center justify-center pt-24 pb-8 px-6 transition-all duration-500 ease-out"
          style={{
            opacity: phase === 'line1' ? 1 : 0,
            transform: phase === 'line1' ? 'translateY(0)' : 'translateY(-36px)',
            pointerEvents: phase === 'line1' ? 'auto' : 'none',
            visibility: phase === 'line1' ? 'visible' : 'hidden',
          }}
        >
          <p className="max-w-4xl text-center text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight">
            {t('boom3d.scroll_reveal.line1')}
          </p>
        </div>

        {/* STAGE 2: Line 2 ("Boom 3D makes them all sound extraordinary...") + CTA */}
        <div
          className="absolute inset-0 flex items-center justify-center pt-24 pb-8 px-6 transition-all duration-500 ease-out"
          style={{
            opacity: phase === 'line2' ? 1 : 0,
            transform:
              phase === 'line2'
                ? 'translateY(0)'
                : phase === 'line1'
                ? 'translateY(36px)'
                : 'translateY(-48px)', // Moves UPWARD out of view when transitioning to Universe
            pointerEvents: phase === 'line2' ? 'auto' : 'none',
            visibility: phase === 'line2' ? 'visible' : 'hidden',
          }}
        >
          <div className="max-w-4xl text-center">
            <p className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight mb-8">
              {t('boom3d.scroll_reveal.line2')}
            </p>
            <a
              href="#boom3d-download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-black/80 transition-colors"
            >
              {t('boom3d.scroll_reveal.learn_more')}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* STAGE 3: App Universe Visual (Slides UP into view, gently recesses as next section slides over it like a PDF slide) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pt-24 pb-8 px-6 transition-all duration-500 ease-out"
          style={{
            opacity: phase === 'universe' ? universeCoverOpacity : 0,
            scale: phase === 'universe' ? universeCoverScale : 0.95,
            transform: phase === 'universe' ? 'translateY(0)' : 'translateY(56px)',
            pointerEvents: phase === 'universe' ? 'auto' : 'none',
            visibility: phase === 'universe' ? 'visible' : 'hidden',
          }}
        >
          <Boom3DAppUniverseVisual
            scrollAngleDeg={scrollAngleDeg}
            prefersReducedMotion={prefersReducedMotion}
            scale={fitScale}
            skipEntrance={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
