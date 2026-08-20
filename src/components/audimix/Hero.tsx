import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Download, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Youtube, href: 'https://youtube.com' },
];

const heroImages = [
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=1920&q=80&auto=format&fit=crop',
];

// Spectrum palette pulled from the AuDimix logo's rainbow EQ bars
const spectrumBars = [
  { color: '#FF3B30', h: 14 },
  { color: '#FF8A00', h: 22 },
  { color: '#FF2D95', h: 18 },
  { color: '#A855F7', h: 28 },
  { color: '#3B82F6', h: 20 },
  { color: '#14B8A6', h: 24 },
  { color: '#22C55E', h: 16 },
];

function SpectrumBars({ className }: { className?: string }) {
  return (
    <div className={`flex items-end gap-1.5 ${className ?? ''}`}>
      {spectrumBars.map((bar, i) => (
        <motion.span
          key={i}
          className="w-1.5 rounded-full"
          style={{ backgroundColor: bar.color }}
          animate={{ height: [bar.h * 0.4, bar.h, bar.h * 0.4] }}
          transition={{ duration: 1.2 + i * 0.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
        />
      ))}
    </div>
  );
}

// Flowing marquee strip of spectrum-colored bars — echoes the logo, reinforces the "animated flow" motif
function FlowingSpectrumStrip() {
  const strip = [...spectrumBars, ...spectrumBars, ...spectrumBars, ...spectrumBars];
  return (
    <div className="absolute bottom-0 left-0 w-full h-8 md:h-10 overflow-hidden z-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <motion.div
        className="flex items-end gap-3 h-full py-2 px-2 absolute"
        animate={{ x: ['0%', '-25%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        {strip.map((bar, i) => (
          <span
            key={i}
            className="w-1 rounded-full opacity-70"
            style={{ backgroundColor: bar.color, height: `${bar.h}px` }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { t } = useTranslation();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-2 md:px-4 pt-1 pb-8 md:pb-12 bg-white">
      <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-black text-white shadow-2xl min-h-[600px] md:min-h-[680px] flex items-center">

        {/* Crossfading background photography */}
        <AnimatePresence>
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImages[slide]}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

        {/* Spectrum glow accents */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[10%] w-[40%] h-[50%] rounded-full bg-teal-500/20 blur-[120px] pointer-events-none" />

        {/* Vertical social rail */}
        <div className="hidden lg:flex flex-col gap-4 absolute left-6 top-1/2 -translate-y-1/2 z-20">
          {socialLinks.map(({ icon: Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors backdrop-blur-sm"
            >
              <Icon className="w-4 h-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>

        {/* Content */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-[55%] xl:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/faq/AudimixFaqLogo.png"
                alt="AuDimix"
                className="h-11 md:h-12 w-auto rounded-xl shadow-lg shadow-black/40"
              />
              <span className="text-3xl font-bold tracking-tight text-white">Audimix</span>
              <SpectrumBars className="h-6 hidden sm:flex" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 drop-shadow-md">
              {t('audimix.hero.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">{t('audimix.hero.title_2')}</span> <br className="hidden lg:block" />
              {t('audimix.hero.title_3')}
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed drop-shadow">
              {t('audimix.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-bold text-sm md:text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105"
              >
                <Download size={20} />
                {t('audimix.hero.download')}
              </a>
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3.5 rounded-xl bg-white/10 border border-white/20 hover:border-white/50 transition-colors backdrop-blur-sm"
              >
                <svg viewBox="0 0 23 23" className="w-6 h-6 shrink-0">
                  <path fill="#f25022" d="M1 1h10v10H1z" />
                  <path fill="#00a4ef" d="M1 12h10v10H1z" />
                  <path fill="#7fba00" d="M12 1h10v10H12z" />
                  <path fill="#ffb900" d="M12 12h10v10H12z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[11px] text-white/60">{t('audimix.hero.download_from')}</span>
                  <span className="block text-sm font-bold text-white">{t('audimix.hero.ms_store')}</span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                slide === index ? 'bg-white border-2 border-white scale-110' : 'bg-transparent border-2 border-white/60 hover:border-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <FlowingSpectrumStrip />
      </div>
    </div>
  );
}
