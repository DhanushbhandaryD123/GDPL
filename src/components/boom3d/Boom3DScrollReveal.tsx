  import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
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

// Analyzed against the real reference (macpaw.com's homepage — the code
// snippet's own CTA just happens to link out to /about): the swap is not a
// slow crossfade scrubbed continuously across scroll distance. Line 1 holds
// clean, then at one scroll point it swaps cleanly and quickly to line 2 —
// no screenshot at any scroll position ever caught a blended in-between
// state. So this is a discrete threshold + a short, fixed-duration
// transition, not proportional interpolation.
const PHASE_1_THRESHOLD = 1 / 3; // line1 -> line2
const PHASE_2_THRESHOLD = 2 / 3; // line2 -> app universe
const SWAP_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

type Phase = 'line1' | 'line2' | 'universe';

// =========================================
// SCROLL-PINNED THREE-STAGE REVEAL
// The section is taller than the viewport; its content stays pinned
// (position: sticky) while the user scrolls through that extra height.
// Scroll progress is reduced to a three-way phase (line1 -> line2 -> the
// App Universe visual, at its original full size, not the previous
// scaled-down/simultaneous version) and AnimatePresence plays a quick
// fixed-duration transition whenever the phase changes — reversing
// automatically on scroll-up, since the phase itself is still driven
// directly by live scroll position.
// =========================================
export function Boom3DScrollReveal() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const [phase, setPhase] = useState<Phase>('line1');
  // A ref (not state) on purpose: read directly during render to decide
  // whether the App Universe entrance should be skipped for *this* mount —
  // it must reflect "had this already played before now", not trigger its
  // own re-render when it flips.
  const hasPlayedUniverseRef = useRef(false);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setPhase(v < PHASE_1_THRESHOLD ? 'line1' : v < PHASE_2_THRESHOLD ? 'line2' : 'universe');
  });

  useEffect(() => {
    if (phase === 'universe') hasPlayedUniverseRef.current = true;
  }, [phase]);

  const scrollAngleDeg = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 360]);

  // =========================================
  // FIT SCALE — keeps every icon fully visible
  // The sticky box below is `h-screen` with `overflow-hidden`; on any
  // viewport shorter than the App Universe visual's natural height, the
  // composition was silently clipped top/bottom (the visual's own `scale`
  // prop existed for exactly this but was always passed a hardcoded 1).
  // This measures the sticky box's real available space and shrinks the
  // visual down only as far as needed to fit — 1:1 on tall viewports.
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
    : 1; // first paint, before the ResizeObserver has measured — refined a frame later

  if (prefersReducedMotion) {
    // No scroll-lock, no swap — everything simply stacked in normal flow.
    return (
      <section className="relative bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <p className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight">{t('boom3d.scroll_reveal.line1')}</p>
          <div>
            <p className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight mb-8">{t('boom3d.scroll_reveal.line2')}</p>
            <a
              href="#boom3d-download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-black/80 transition-colors"
            >
              {t('boom3d.scroll_reveal.learn_more')}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flex justify-center">
            <Boom3DAppUniverseVisual scrollAngleDeg={scrollAngleDeg} prefersReducedMotion scale={1} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: '300vh' }}>
      {/* pt-24, not py-8 uniformly: the sitewide navbar is `sticky` and
          overlays the top ~81px of the viewport, so content vertically
          centered in the *full* h-screen box would have its top edge
          hidden behind it once a state (the App Universe visual) gets
          tall enough — asymmetric padding shrinks the centering box to
          the space actually clear of the navbar. */}
      <div ref={stickyRef} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-8">
        <AnimatePresence mode="wait">
          {phase === 'line1' && (
            <motion.p
              key="line1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={SWAP_TRANSITION}
              className="max-w-4xl text-center text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight"
            >
              {t('boom3d.scroll_reveal.line1')}
            </motion.p>
          )}
          {phase === 'line2' && (
            <motion.div
              key="line2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={SWAP_TRANSITION}
              className="max-w-4xl text-center"
            >
              <p className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-tight mb-8">{t('boom3d.scroll_reveal.line2')}</p>
              <a
                href="#boom3d-download"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-black/80 transition-colors"
              >
                {t('boom3d.scroll_reveal.learn_more')}
                <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
          )}
          {phase === 'universe' && (
            <motion.div
              key="universe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={SWAP_TRANSITION}
              className="w-full flex justify-center"
            >
              <Boom3DAppUniverseVisual
                scrollAngleDeg={scrollAngleDeg}
                prefersReducedMotion={prefersReducedMotion}
                scale={fitScale}
                skipEntrance={hasPlayedUniverseRef.current}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
