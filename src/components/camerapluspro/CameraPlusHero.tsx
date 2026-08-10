import { useEffect, useRef, useState } from 'react';
import { Twitter, Facebook, Instagram, Mail, Aperture, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface CameraPlusHeroProps {
  logoUrl?: string;
}

const carouselImages = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80&auto=format&fit=crop', // waterfall
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80&auto=format&fit=crop', // mountain lake
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80&auto=format&fit=crop', // pink cherry blossoms
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80&auto=format&fit=crop', // sunset palms
  'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=400&q=80&auto=format&fit=crop', // city skyline dusk
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80&auto=format&fit=crop', // woman portrait
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=80&auto=format&fit=crop', // bridge/pier
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80&auto=format&fit=crop', // lighthouse
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80&auto=format&fit=crop', // desert road
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80&auto=format&fit=crop', // aurora/mountain night
  'https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&q=80&auto=format&fit=crop', // street car
  'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=400&q=80&auto=format&fit=crop', // stormy sea cliff
];


// Fixed fan/arc layout per viewport slot — stays anchored while image content slides underneath.
const arcLayout = [
  { rotate: -18, y: 34, scale: 0.8, hideBelow: 'md' as const },
  { rotate: -11, y: 18, scale: 0.88, hideBelow: 'sm' as const },
  { rotate: -5, y: 6, scale: 0.96, hideBelow: null },
  { rotate: 0, y: -6, scale: 1.08, hideBelow: null },
  { rotate: 5, y: 6, scale: 0.96, hideBelow: null },
  { rotate: 11, y: 18, scale: 0.88, hideBelow: 'sm' as const },
  { rotate: 18, y: 34, scale: 0.8, hideBelow: 'md' as const },
];

const hideClass = (hideBelow: 'sm' | 'md' | null) => {
  if (hideBelow === 'sm') return 'hidden sm:block';
  if (hideBelow === 'md') return 'hidden md:block';
  return 'block';
};

// Reel track is 300% wide (prev/current/next, each one card-width = 1/3 of the track),
// so "one card" of horizontal movement is 100/3% of the track's own width — not 100%.
const REEL_PREV = 0;
const REEL_CURRENT = -100 / 3;
const REEL_NEXT = -200 / 3;

export function CameraPlusHero({ logoUrl }: CameraPlusHeroProps) {
  const total = carouselImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(REEL_CURRENT);
  const [instant, setInstant] = useState(false);
  const [locked, setLocked] = useState(false);
  const pendingDirection = useRef<'next' | 'prev' | null>(null);

  const goNext = () => {
    if (locked) return;
    setLocked(true);
    pendingDirection.current = 'next';
    setInstant(false);
    setTranslate(REEL_NEXT);
  };

  const goPrev = () => {
    if (locked) return;
    setLocked(true);
    pendingDirection.current = 'prev';
    setInstant(false);
    setTranslate(REEL_PREV);
  };

  const handleTransitionEnd = () => {
    if (pendingDirection.current === 'next') {
      setCurrentIndex((i) => (i + 1) % total);
    } else if (pendingDirection.current === 'prev') {
      setCurrentIndex((i) => (i - 1 + total) % total);
    }
    pendingDirection.current = null;
    setInstant(true);
    setTranslate(REEL_CURRENT);
  };

  useEffect(() => {
    if (!instant) return;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        setInstant(false);
        setLocked(false);
      });
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [instant]);
  useEffect(() => {
    const timer = setInterval(() => {
      setLocked((currentLocked) => {
        if (currentLocked) return currentLocked;
        pendingDirection.current = 'next';
        setInstant(false);
        setTranslate(REEL_NEXT);
        return true;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#0f1729] text-white pt-2 pb-8 md:pt-2 md:pb-4"
    >
      {/* Starfield */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 40px 60px, white, transparent),
            radial-gradient(1px 1px at 120px 20px, white, transparent),
            radial-gradient(1px 1px at 200px 110px, white, transparent),
            radial-gradient(1.5px 1.5px at 260px 40px, white, transparent),
            radial-gradient(1px 1px at 320px 150px, white, transparent),
            radial-gradient(1px 1px at 20px 170px, white, transparent),
            radial-gradient(1.5px 1.5px at 360px 90px, white, transparent)
          `,
          backgroundSize: '400px 200px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Radial glow behind globe */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-2 relative z-20">
          <div className="flex flex-col gap-3 md:gap-4">
            {[Twitter, Facebook, Instagram, Mail].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-colors bg-white/5 backdrop-blur-sm"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.75} />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-end gap-12 sm:gap-20">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] sm:text-xs md:text-xs font-bold px-4 py-1.5 md:px-4 md:py-2 rounded-full transition-colors shadow-lg shadow-blue-600/30">
              Download App Store
            </button>
            
            <div className="text-right max-w-[200px] md:max-w-[280px] flex flex-col items-end z-20 relative mt-4 sm:mt-0">
              
              <h2 className="text-base sm:text-xl md:text-4xl font-black bg-gradient-to-br from-white via-white to-blue-400 bg-clip-text text-transparent mb-4 leading-[1.15] tracking-tight drop-shadow-sm">
                Capture.<br/>Edit.<br/>Create.
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-l from-blue-500 to-transparent mb-4 rounded-full opacity-60"></div>
              <p className="text-xs sm:text-sm text-blue-100/80 font-medium leading-relaxed drop-shadow-sm">
                Professional photography tools meticulously designed for iPhone.
              </p>
            </div>
          </div>
        </div>

        {/* Globe — fixed, static hero visual */}
        <div className="flex justify-center mb-0 mt-[-10.5rem] sm:mt-[-14.5rem] md:-mt-[440px]">
          <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[680px] md:h-[680px]">
            {/* Outer rim glow */}
            <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-2xl" />

            {/* Main Globe Image */}
            <img
              src="/cameraplus/global.png"
              alt="Camera Plus Pro Global"
              className="relative w-full h-full object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            />

            {/* Centered content on top of globe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
              <div className="relative -mt-4">
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt="Camera Plus Pro logo"
                    className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-[14px] sm:rounded-[20px] shadow-[0_0_25px_rgba(59,130,246,0.55)]"
                  />
                ) : (
                  <>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] ring-2 ring-blue-300/40">
                      <Aperture className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={1.75} />
                    </div>
                    <Sparkles className="absolute -top-1.5 -right-2.5 w-5 h-5 text-blue-200" strokeWidth={1.5} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel strip */}
        <div className="relative -mt-16 sm:-mt-24 md:-mt-32 z-20">
          {/* Curved guide line the cards appear to sit on — inset so it clears the arrow buttons */}
          <svg viewBox="0 0 800 100" preserveAspectRatio="none" className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 w-full opacity-20 pointer-events-none">
            <path d="M 110 75 Q 400 15 690 75" stroke="white" strokeWidth="1" fill="none" strokeDasharray="3 7" />
          </svg>

          <div
            className="relative flex items-center justify-center gap-2 sm:gap-3 px-10"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            }}
          >
            {arcLayout.map((arc, slotIndex) => {
              const idx = (currentIndex + slotIndex) % total;
              const prevIdx = (idx - 1 + total) % total;
              const nextIdx = (idx + 1) % total;

              return (
                <div
                  key={slotIndex}
                  className={`shrink-0 w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl overflow-hidden border border-white/10 shadow-xl ${hideClass(arc.hideBelow)}`}
                  style={{ transform: `rotate(${arc.rotate}deg) translateY(${arc.y}px) scale(${arc.scale})` }}
                >
                  <div
                    className="flex h-full"
                    style={{
                      width: '300%',
                      transform: `translateX(${translate}%)`,
                      transition: instant ? 'none' : 'transform 350ms ease',
                    }}
                    onTransitionEnd={slotIndex === 0 ? handleTransitionEnd : undefined}
                  >
                    <img src={carouselImages[prevIdx]} alt="" className="w-1/3 h-full object-cover" />
                    <img src={carouselImages[idx]} alt="" className="w-1/3 h-full object-cover" />
                    <img src={carouselImages[nextIdx]} alt="" className="w-1/3 h-full object-cover" />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={goPrev}
            disabled={locked}
            aria-label="Previous photos"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white transition-colors disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={goNext}
            disabled={locked}
            aria-label="Next photos"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white transition-colors disabled:opacity-40"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
