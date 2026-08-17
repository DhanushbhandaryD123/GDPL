import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { Headphones, SlidersHorizontal, Settings2, Music2, Radio } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function PrimeFeatures() {
  const { t } = useTranslation();

  const features = [
    {
      id: '3d-surround',
      title: t('boom_mobile.prime_features.f1_title'),
      description: t('boom_mobile.prime_features.f1_desc'),
      icon: Headphones,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'equalizer',
      title: t('boom_mobile.prime_features.f2_title'),
      description: t('boom_mobile.prime_features.f2_desc'),
      icon: SlidersHorizontal,
      image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'intensity',
      title: t('boom_mobile.prime_features.f3_title'),
      description: t('boom_mobile.prime_features.f3_desc'),
      icon: Settings2,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'tidal',
      title: t('boom_mobile.prime_features.f4_title'),
      description: t('boom_mobile.prime_features.f4_desc'),
      icon: Music2,
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'radio',
      title: t('boom_mobile.prime_features.f5_title'),
      description: t('boom_mobile.prime_features.f5_desc'),
      icon: Radio,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  return (
    <section className="py-24 bg-[#F8FAFC] relative">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight"
          >
            {t('boom_mobile.prime_features.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">{t('boom_mobile.prime_features.title_2')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto font-medium"
          >
            {t('boom_mobile.prime_features.subtitle')}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch max-w-6xl mx-auto">
          {/* Numbered tab navigation */}
          <div className="w-full lg:w-[30%] flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => scrollTo(index)}
                className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 group shrink-0 lg:shrink w-auto lg:w-full border ${
                  selectedIndex === index
                    ? 'bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
                    : 'bg-transparent border-transparent hover:bg-white/60 text-gray-500'
                }`}
              >
                <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                  selectedIndex === index ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600' : 'text-gray-300'
                }`}>
                  0{index + 1}
                </span>
                <h3 className={`font-bold text-[15px] whitespace-nowrap lg:whitespace-normal transition-colors duration-300 ${selectedIndex === index ? 'text-gray-900' : 'text-gray-500'}`}>
                  {feature.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Carousel Viewport */}
          <div className="w-full lg:w-[70%]">
            <div className="overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)]" ref={emblaRef}>
              <div className="flex">
                {features.map((feature, index) => (
                  <div key={feature.id} className="flex-[0_0_100%] min-w-0">
                    <div className="relative aspect-[16/10] sm:aspect-video">
                      <motion.img
                        animate={{ scale: selectedIndex === index ? 1.05 : 1 }}
                        transition={{ duration: 10, ease: 'linear' }}
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <feature.icon className="text-white" size={26} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 text-[15px] sm:text-[17px] leading-relaxed font-medium max-w-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
