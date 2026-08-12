import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight, Play, Pause, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BoomHero() {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20, mass: 0.5 });
  const [isPlaying, setIsPlaying] = useState(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(-py * 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-4 pt-2 md:pt-4 pb-8 md:pb-12 bg-white">
      <section className="relative w-full rounded-3xl md:rounded-[2.5rem] shadow-2xl aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:min-h-[820px] overflow-hidden bg-black">

        {/* Cinematic background photograph */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-[60%_45%] opacity-90"
          />
        </div>

        {/* Depth grading — left-to-right + bottom vignette so copy stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

        {/* Warm accent wash */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-amber-500/25 via-rose-500/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[110px] pointer-events-none" />

        {/* Film grain texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay pointer-events-none">
          <filter id="boom-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#boom-grain)" />
        </svg>

        {/* Hairline top keyline */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-14 lg:px-20 pt-16 md:pt-32 pb-16 md:pb-16 flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-8">

          {/* Left: Editorial copy */}
          <div className="w-full lg:w-[56%] text-left">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base sm:text-xl md:text-7xl lg:text-[5.25rem] leading-[0.98] font-bold tracking-tighter text-white"
            >
              <span className="block font-light text-white/60">{t('boom.hero.eyebrow')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-fuchsia-400">
                {t('boom.hero.headline')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-xs sm:text-sm md:text-xl text-white/65 max-w-[520px] leading-relaxed font-medium mt-7"
            >
              {t('boom.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#platforms"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2.5 bg-white text-black font-bold px-4 py-1.5 md:pl-7 md:pr-6 md:py-3.5 rounded-full text-[10px] sm:text-xs md:text-[15px] shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
              >
                {t('boom.hero.cta_primary')}
                <ArrowRight size={17} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#showcase"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 border border-white/20 text-white font-semibold px-4 py-1.5 md:px-7 md:py-3.5 rounded-full text-[10px] sm:text-xs md:text-[15px] hover:bg-white/[0.06] transition-colors backdrop-blur-sm"
              >
                <Play size={14} fill="currentColor" />
                {t('boom.hero.cta_secondary')}
              </motion.a>
            </motion.div>

            </div>

          {/* Right: Interactive glass "Now Playing" composition */}
          <div
            className="w-full lg:w-[44%] relative h-[280px] sm:h-[300px] md:h-[420px] lg:h-[480px] [perspective:1400px] mt-6 lg:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >


            {/* Main tilting glass player card */}
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-[6%] w-[92%] sm:w-[86%] max-w-[380px] bg-white/[0.08] border border-white/[0.14] backdrop-blur-2xl rounded-[1.5rem] md:rounded-[1.75rem] p-4 md:p-6 shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-xl overflow-hidden shrink-0 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=300&auto=format&fit=crop"
                    alt="Now playing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-[15px] md:text-base truncate">{t('boom.hero.now_playing_title')}</div>
                  <div className="text-white/50 text-[13px] font-medium truncate">{t('boom.hero.now_playing_subtitle')}</div>
                </div>
              </div>

              {/* Live equalizer */}
              <div className="flex items-end justify-between h-9 mt-5">
                {[9, 18, 26, 14, 22, 30, 12, 20, 16, 24, 10, 18].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: [h, h * 1.9, h * 0.6, h] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
                    className="w-[3px] rounded-full bg-gradient-to-t from-amber-300 via-rose-300 to-fuchsia-300"
                    style={{ height: h }}
                  />
                ))}
              </div>

              {/* Progress */}
              <div className="mt-5">
                <div className="h-[3px] w-full rounded-full bg-white/15 overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '64%' }}
                    transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-300 to-fuchsia-400"
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[11px] text-white/45 font-medium tabular-nums">2:14</span>
                  <button
                    onClick={() => setIsPlaying((v) => !v)}
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
                  </button>
                  <span className="text-[11px] text-white/45 font-medium tabular-nums">3:28</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">{t('boom.hero.scroll')}</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={16} />
          </motion.span>
        </motion.div>
      </section>
    </div>
  );
}
