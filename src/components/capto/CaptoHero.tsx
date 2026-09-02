import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { onSplashComplete } from '@/lib/splashScreenSignal';

// =========================================
// 24-HOUR OFFER COUNTDOWN
// Uses the user's local browser time.
// Rolling 24-hour countdown beginning from the user's current local date/time.
// Updates every second; handles hours, minutes, seconds correctly.
// When expired, resets gracefully to next 24-hour period.
// =========================================
function use24HourCountdown() {
  const [expiry, setExpiry] = useState(() => Date.now() + 24 * 60 * 60 * 1000);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      const current = Date.now();
      setNow(current);
      // Gracefully handle expiry – rolling reset to next 24h
      if (current >= expiry) {
        setExpiry(current + 24 * 60 * 60 * 1000);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [expiry]);

  const diff = Math.max(0, expiry - now);
  const isExpired = diff === 0;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  return {
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0'),
    isExpired,
    expiry,
  };
}

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

interface TravelTarget {
  x: number;
  y: number;
  scale: number;
}

// Small celebratory particles that burst outward from the centered text.
// Fixed set (angle / distance / color / delay) computed once at module
// load — deterministic, so it doesn't need to be recalculated per render.
const CONFETTI_COLORS = ['#6554ff', '#2563eb', '#ffc145', '#22c1a5'];
const CONFETTI_PARTICLES = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  const distance = 90 + (i % 3) * 40;
  return {
    id: i,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    size: 6 + (i % 3) * 3,
    delay: (i % 5) * 0.03,
  };
});

export function CaptoHero() {
  const { t } = useTranslation();
  // =========================================
  // 75% OFF PROMOTION
  // Prominently communicated as fixed 75% OFF for the 24-hour rolling offer.
  // =========================================
  const { hours, minutes, seconds, isExpired } = use24HourCountdown();
  const prefersReducedMotion = usePrefersReducedMotion();

  // =========================================
  // 75% OFF ENTRANCE ANIMATION
  // Starts in the center of the viewport
  // and transitions into the actual offer.
  // =========================================
  // `hasPlayedRef` guarantees the sequence is kindled exactly once per page
  // load — React re-renders (countdown ticking every second, etc.) never
  // re-trigger it because the effect below bails out immediately once it's
  // already fired.
  const hasPlayedRef = useRef(false);
  const [entranceDone, setEntranceDone] = useState(prefersReducedMotion);
  // Celebration window (background blur/dim + confetti burst + a shimmering
  // color sweep on "75% OFF") — active only while the clone is held centered,
  // i.e. the same span as the "hold" keyframe segment below (times 0.18–0.55
  // of the 2.4s sequence ≈ 430ms–1320ms). Everything here clears itself
  // before the clone starts travelling, so it never bleeds into the offer's
  // permanent, plain design.
  const CELEBRATION_END_MS = 1320;
  const [celebrating, setCelebrating] = useState(false);

  // =========================================
  // OFFER DESTINATION POSITION
  // Dynamically calculates the final position
  // across different screen sizes.
  // =========================================
  // The "75% OFF" text inside the real offer banner is the landing spot the
  // floating clone travels to. Measured live via getBoundingClientRect (no
  // hardcoded coordinates), so it's correct at any viewport size.
  const offerTextRef = useRef<HTMLSpanElement>(null);
  const [travelTarget, setTravelTarget] = useState<TravelTarget | null>(null);

  const measureTravelTarget = () => {
    const el = offerTextRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const destCenterX = rect.left + rect.width / 2;
    const destCenterY = rect.top + rect.height / 2;
    // Shrink the large centered clone down toward the real text's size.
    const scale = Math.min(1, Math.max(0.3, rect.height / 72));
    return {
      x: destCenterX - window.innerWidth / 2,
      y: destCenterY - window.innerHeight / 2,
      scale,
    };
  };

  useEffect(() => {
    if (hasPlayedRef.current) return; // never replay on re-render
    hasPlayedRef.current = true;

    if (prefersReducedMotion) {
      // Skip the animated center-to-offer journey entirely; show it plainly.
      setEntranceDone(true);
      return;
    }

    // Wait for the intro SplashScreen to actually finish before starting.
    // Without this, the entrance sequence would run on mount — while the
    // splash's full-screen overlay is still covering the page — and be
    // completely over by the time the splash clears, so the user would
    // never actually see it. If the splash already finished (e.g. this
    // page was reached via in-app navigation, not the first load), the
    // callback below fires immediately.
    let celebrationTimer: ReturnType<typeof setTimeout>;
    const unsubscribe = onSplashComplete(() => {
      // Measure once layout has settled, then kick off the travel animation.
      const target = measureTravelTarget();
      if (!target) {
        setEntranceDone(true);
        return;
      }
      setTravelTarget(target);
      setCelebrating(true);
      celebrationTimer = setTimeout(() => setCelebrating(false), CELEBRATION_END_MS);
    });

    return () => {
      unsubscribe();
      clearTimeout(celebrationTimer);
    };
  }, [prefersReducedMotion]);

  // Recalculate the destination if the window is resized while the
  // entrance sequence is still in flight, so the clone never lands off-target.
  useEffect(() => {
    if (entranceDone || !travelTarget) return;
    const handleResize = () => {
      const target = measureTravelTarget();
      if (target) setTravelTarget(target);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [entranceDone, travelTarget]);

  return (
    <section className="relative px-4 pt-2 pb-8 md:px-0 md:pt-8 md:pb-16 overflow-hidden bg-[#ffffff]">
      {/* =========================================
          75% OFF ENTRANCE ANIMATION — celebration backdrop
          A soft blur/dim over the hero banner behind the centered
          text, active only for the ~1.3s the clone is held in the
          center (never during travel, never permanent).
          ========================================= */}
      <AnimatePresence>
        {celebrating && (
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[9996] pointer-events-none bg-white/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* Confetti burst, centered behind the entrance text */}
      <AnimatePresence>
        {celebrating && (
          <div className="fixed top-1/2 left-1/2 z-[9997] pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
            {CONFETTI_PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                className="absolute top-0 left-0 rounded-full"
                style={{ width: p.size, height: p.size, backgroundColor: p.color }}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], x: p.x, y: p.y, scale: [0, 1, 0.6] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, delay: p.delay, ease: 'easeOut' }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* =========================================
          75% OFF ENTRANCE ANIMATION (overlay)
          Fixed positioning keeps this out of document
          flow entirely, so it never causes a layout
          shift in the page underneath it.
          ========================================= */}
      {travelTarget && !entranceDone && (
        <motion.div
          aria-hidden="true"
          className="fixed top-1/2 left-1/2 z-[9998] pointer-events-none"
          style={{ translateX: '-50%', translateY: '-50%' }}
          initial={{ opacity: 0, scale: 0.85, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.85, 1, 1, travelTarget.scale],
            x: [0, 0, 0, travelTarget.x],
            y: [0, 0, 0, travelTarget.y],
          }}
          transition={{
            duration: 2.4,
            times: [0, 0.18, 0.55, 1],
            ease: ['easeOut', 'linear', [0.65, 0, 0.35, 1]],
          }}
          onAnimationComplete={() => setEntranceDone(true)}
        >
          <span className="font-black text-[#1c2331] text-[2.25rem] sm:text-[3.25rem] md:text-[4.25rem] tracking-tight whitespace-nowrap drop-shadow-[0_10px_40px_rgba(101,84,255,0.3)]">
            Available{' '}
            <motion.span
              animate={
                celebrating
                  ? { color: ['#6554ff', '#2563eb', '#6554ff'] }
                  : { color: '#6554ff' }
              }
              transition={{ duration: 1.1, repeat: celebrating ? Infinity : 0, ease: 'easeInOut' }}
            >
              75% OFF
            </motion.span>
          </span>
        </motion.div>
      )}

      {/* Background Decor (Grid & squiggles based on image) */}
      <div className="absolute top-[20%] left-[45%] opacity-30 pointer-events-none">
         {/* Dot grid */}
         <div className="w-32 h-32" style={{ backgroundImage: 'radial-gradient(#6c5ce7 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1300px]">
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-4">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-[600px] text-center lg:text-left lg:pt-10"
          >
            <div className="flex items-center gap-3 mb-6 mx-auto lg:mx-0 justify-center lg:justify-start">
              <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden flex-shrink-0">
                <img 
                  src="/capto/Logo_Web2x_1.png" 
                  alt="Capto Icon" 
                  className="absolute top-0 left-0 h-16 md:h-20 w-auto max-w-none object-left object-cover drop-shadow-sm" width={273} height={100} loading="eager"
                />
              </div>
              <span className="text-[2.25rem] md:text-[3rem] font-bold tracking-tight text-[#1c2331]">Capto</span>
            </div>
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-tight leading-[1.15] mb-6 text-[#1c2331]">
              <span className="text-[#6554ff]">{t('capto.hero.title_1')}</span><br />
              <span className="text-[#6554ff]">{t('capto.hero.title_2')}</span> {t('capto.hero.title_3')}<br />
              {t('capto.hero.title_4')}
            </h1>

            <p className="text-[15px] sm:text-lg md:text-xl text-[#2d3748] font-bold mb-10">
              {t('capto.hero.subtitle')}
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 mb-5 w-full">
              <a
                href="#"
                className="flex-1 sm:flex-none sm:w-auto px-2 py-2.5 md:px-8 md:py-3.5 bg-[#6953ff] hover:bg-[#5b48df] text-white rounded-[2rem] font-bold text-[11px] sm:text-xs md:text-[15px] flex items-center justify-center gap-1.5 sm:gap-2.5 transition-all shadow-lg shadow-indigo-500/30"
              >
                <svg className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] fill-current" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                {t('capto.hero.download_trial')}
              </a>
              <a
                href="#"
                className="flex-1 sm:flex-none sm:w-auto px-2 py-2.5 md:px-8 md:py-3.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-[2rem] font-bold text-[11px] sm:text-xs md:text-[15px] flex items-center justify-center gap-1.5 sm:gap-2.5 transition-all shadow-sm"
              >
                <ShoppingCart className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
                {t('capto.hero.buy_now')}
              </a>
            </div>

            <p className="text-[13px] text-gray-500 font-medium mb-3">{t('capto.hero.macos_req')}</p>
            <p className="text-[12px] text-gray-400 font-medium leading-relaxed max-w-[420px] mx-auto lg:mx-0">
              {t('capto.hero.trial_note')}
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-[700px] relative flex flex-col items-center"
          >
            <div className="relative rounded-3xl md:rounded-none aspect-[4/3] sm:aspect-[16/9] md:aspect-auto overflow-hidden md:overflow-visible bg-black md:bg-transparent w-full">
            <img 
              src="/capto/c-hero.webp" 
              alt="Capto Interface"
              className="w-full h-full md:h-auto absolute inset-0 md:static object-cover md:object-contain" width={1672} height={941} loading="eager"
            />
            </div>
            
            <div className="mt-4 flex justify-center lg:ml-20">
              <a href="#" className="inline-block hover:opacity-80 transition-opacity bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg" alt="Get it from Microsoft Store" className="h-8" width={864} height={312} loading="eager" />
              </a>
            </div>
          </motion.div>
          
        </div>

        {/* Bottom Banner - Back to School – PREMIUM, INCREASED SIZE */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-16 md:mt-24 w-full max-w-[1220px] mx-auto bg-white rounded-[24px] md:rounded-[28px] border border-gray-200/60 flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-12 py-8 md:py-9 lg:py-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] gap-8 lg:gap-6"
        >
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="font-black text-[1.9rem] md:text-[2.2rem] lg:text-[2.6rem] leading-none text-[#1c2331] tracking-tight text-center md:text-left">
              {t('capto.hero.back')} <span className="text-sm md:text-base align-top font-black text-[#1c2331]">{t('capto.hero.to')}</span><br/>{t('capto.hero.school')}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 flex-1 justify-center">
            <span className="font-bold text-gray-800 text-sm md:text-base hidden sm:block tracking-wide">{t('capto.hero.only')}</span>
            <div className="flex gap-2.5 md:gap-3 text-center items-start">
              <div className="flex flex-col items-center">
                <div className="bg-[#f8f8fb] rounded-xl md:rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-[#1c2331] font-extrabold text-xl md:text-2xl lg:text-[1.7rem] shadow-[0_2px_10px_rgba(0,0,0,0.04)] w-[58px] md:w-[68px] lg:w-[72px] border border-gray-200/50 tabular-nums">{hours}</div>
                <div className="text-[9px] md:text-[10px] text-gray-500 mt-2 font-bold tracking-[0.12em]">{t('capto.hero.hours')}</div>
              </div>
              <span className="font-bold text-gray-300 mt-3 md:mt-4 text-lg md:text-xl">:</span>
              <div className="flex flex-col items-center">
                <div className="bg-[#f8f8fb] rounded-xl md:rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-[#1c2331] font-extrabold text-xl md:text-2xl lg:text-[1.7rem] shadow-[0_2px_10px_rgba(0,0,0,0.04)] w-[58px] md:w-[68px] lg:w-[72px] border border-gray-200/50 tabular-nums">{minutes}</div>
                <div className="text-[9px] md:text-[10px] text-gray-500 mt-2 font-bold tracking-[0.12em]">{t('capto.hero.minutes')}</div>
              </div>
              <span className="font-bold text-gray-300 mt-3 md:mt-4 text-lg md:text-xl">:</span>
              <div className="flex flex-col items-center">
                <div className="bg-[#f8f8fb] rounded-xl md:rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-[#1c2331] font-extrabold text-xl md:text-2xl lg:text-[1.7rem] shadow-[0_2px_10px_rgba(0,0,0,0.04)] w-[58px] md:w-[68px] lg:w-[72px] border border-gray-200/50 tabular-nums">{isExpired ? '00' : seconds}</div>
                <div className="text-[9px] md:text-[10px] text-gray-500 mt-2 font-bold tracking-[0.12em]">{t('capto.hero.seconds')}</div>
              </div>
            </div>
            <span className="font-bold text-gray-800 text-sm md:text-base hidden sm:block tracking-wide">{t('capto.hero.left')}</span>
          </div>

          {/* This is the real, permanent home of the 75% OFF promotion —
              it never moves. The floating clone above only ever travels
              toward it and hands off here. */}
          <motion.div
            className="text-center lg:text-right flex flex-col items-center lg:items-end gap-1 flex-shrink-0"
            initial={false}
            animate={{ opacity: entranceDone ? 1 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <span className="font-black text-[#1c2331] text-[1.4rem] md:text-[1.6rem] lg:text-[1.75rem] tracking-tight">
              {t('capto.hero.avail')} <span ref={offerTextRef} className="text-[#1c2331]">75% OFF</span>
            </span>
            <span className="text-[11px] md:text-xs text-gray-500 font-medium mt-0.5">{isExpired ? 'Offer renewed – 24h left' : 'Limited time • Ends in 24 hours'}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
