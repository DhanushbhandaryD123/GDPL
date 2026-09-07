import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function HeroCarousel() {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      title: t('boom_mobile.hero.s1_title'),
      highlight: t('boom_mobile.hero.s1_highlight'),
      description: t('boom_mobile.hero.s1_desc'),
      image: '/images/external/img_98438af44226.jpg',
      accent: 'from-pink-500 to-purple-600'
    },
    {
      id: 2,
      title: t('boom_mobile.hero.s2_title'),
      highlight: t('boom_mobile.hero.s2_highlight'),
      description: t('boom_mobile.hero.s2_desc'),
      image: '/images/external/img_8b1e62927519.jpg',
      accent: 'from-cyan-400 to-blue-600'
    },
    {
      id: 3,
      title: t('boom_mobile.hero.s3_title'),
      highlight: t('boom_mobile.hero.s3_highlight'),
      description: t('boom_mobile.hero.s3_desc'),
      image: '/images/external/img_b16b02524b1f.jpg',
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
    <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-4 md:px-4 pt-1 pb-2 md:pb-12 bg-white">
      <section className="relative w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-2xl bg-black overflow-hidden h-[320px] sm:h-[360px] md:h-[620px] lg:h-[660px] xl:h-[700px]">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
                {/* Full-bleed background photo */}
                <div className="absolute inset-0">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" width={1600} height={1067} loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#05050A]/95 via-[#05050A]/80 to-[#05050A]/25" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A]/90 via-transparent to-[#05050A]/40" />
                </div>

                <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-16 pb-4 sm:pb-0">
                  <div className="max-w-2xl">
                    {/* Animated equalizer bars accent */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-end gap-1 h-3.5 sm:h-5 md:h-8 mb-1.5 sm:mb-2 md:mb-6"
                    >
                      {[0.4, 0.9, 0.6, 1, 0.5, 0.8, 0.3].map((h, i) => (
                        <motion.span
                          key={i}
                          className={`w-1 md:w-1.5 rounded-full bg-gradient-to-t ${slide.accent}`}
                          animate={{ height: selectedIndex === index ? [`${h * 40}%`, '100%', `${h * 40}%`] : `${h * 40}%` }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                        />
                      ))}
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 20 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="text-xl sm:text-2xl md:text-6xl lg:text-7xl font-extrabold mb-1.5 sm:mb-2.5 md:mb-6 tracking-tight text-white leading-[1.12] md:leading-[1.05]"
                    >
                      {slide.title} <br />
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accent}`}>
                        {slide.highlight}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, x: selectedIndex === index ? 0 : -15 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-xs sm:text-sm md:text-xl text-white/80 mb-3.5 sm:mb-4 md:mb-10 max-w-[280px] sm:max-w-md md:max-w-lg leading-snug sm:leading-relaxed font-medium line-clamp-2 md:line-clamp-none"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 15 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="flex flex-row items-center gap-2.5 sm:gap-4 w-auto"
                    >
                      <a
                        href="https://apps.apple.com/app/id948176063"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center transition-transform hover:scale-105 active:scale-95"
                      >
                        <img
                          src="/button/en-us dark.svg"
                          alt={t('boom_mobile.hero.app_store')}
                          className="h-8 sm:h-9 md:h-12 lg:h-14 w-auto object-contain drop-shadow-md"
                          width={161}
                          height={44}
                          loading="eager"
                        />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.globaldelight.boom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center transition-transform hover:scale-105 active:scale-95"
                      >
                        <img
                          src="/button/GooglePlay.png"
                          alt={t('boom_mobile.hero.google_play')}
                          className="h-8 sm:h-9 md:h-12 lg:h-14 w-auto object-contain drop-shadow-md"
                          width={307}
                          height={92}
                          loading="eager"
                        />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-2.5 md:bottom-6 left-0 right-0 flex justify-center gap-2 md:gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 md:h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-white w-6 md:w-8' : 'bg-white/30 w-1.5 md:w-2.5 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
