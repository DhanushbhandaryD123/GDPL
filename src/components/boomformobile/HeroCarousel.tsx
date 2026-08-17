import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function HeroCarousel() {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      title: t('boom_mobile.hero.s1_title'),
      highlight: t('boom_mobile.hero.s1_highlight'),
      description: t('boom_mobile.hero.s1_desc'),
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
      accent: 'from-pink-500 to-purple-600'
    },
    {
      id: 2,
      title: t('boom_mobile.hero.s2_title'),
      highlight: t('boom_mobile.hero.s2_highlight'),
      description: t('boom_mobile.hero.s2_desc'),
      image: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop',
      accent: 'from-cyan-400 to-blue-600'
    },
    {
      id: 3,
      title: t('boom_mobile.hero.s3_title'),
      highlight: t('boom_mobile.hero.s3_highlight'),
      description: t('boom_mobile.hero.s3_desc'),
      image: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=80&w=1600&auto=format&fit=crop',
      accent: 'from-fuchsia-500 to-indigo-600'
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative min-h-[100dvh] md:h-[92vh] md:min-h-[640px] overflow-hidden bg-white">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
              {/* Full-bleed background photo */}
              <div className="absolute inset-0">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05050A] via-[#05050A]/80 to-[#05050A]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-[#05050A]/40" />
              </div>

              <div className="relative z-10 h-full flex items-center pt-24 pb-16 md:pt-0 md:pb-0">
                <div className="container mx-auto px-6 md:px-10">
                  <div className="max-w-2xl">
                    {/* Animated equalizer bars accent */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex items-end gap-1 h-8 mb-6"
                    >
                      {[0.4, 0.9, 0.6, 1, 0.5, 0.8, 0.3].map((h, i) => (
                        <motion.span
                          key={i}
                          className={`w-1.5 rounded-full bg-gradient-to-t ${slide.accent}`}
                          animate={{ height: selectedIndex === index ? [`${h * 40}%`, '100%', `${h * 40}%`] : `${h * 40}%` }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                        />
                      ))}
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 30 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-[1.05]"
                    >
                      {slide.title} <br />
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accent}`}>
                        {slide.highlight}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, x: selectedIndex === index ? 0 : -20 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed font-medium"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 20 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                      <a href="#" className={`bg-gradient-to-r ${slide.accent} text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-black/40 hover:shadow-2xl w-full sm:w-auto text-sm md:text-base hover:-translate-y-1`}>
                        <Download size={20} /> {t('boom_mobile.hero.app_store')}
                      </a>
                      <a href="#" className="bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/20 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-auto text-sm md:text-base hover:-translate-y-1">
                        {t('boom_mobile.hero.google_play')}
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-white w-8' : 'bg-white/30 w-2.5 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
