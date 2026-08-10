import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Don’t just listen.',
    highlight: 'Feel your music.',
    description: 'Experience 3D Surround Sound that transports you right into the heart of your favorite tracks.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-pink-500/10 to-purple-600/10'
  },
  {
    id: 2,
    title: 'Your music,',
    highlight: 'your way.',
    description: 'Customize your sound with advanced equalizer presets and a dynamic audio intensity slider.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-blue-500/10 to-cyan-600/10'
  },
  {
    id: 3,
    title: 'Immersive listening,',
    highlight: 'on the go.',
    description: 'Take the ultimate audio experience wherever you go with Boom for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-purple-500/10 to-indigo-600/10'
  }
];

export function HeroCarousel() {
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
    <div className="w-full mx-auto px-4 md:px-0 pt-4 md:pt-0 pb-8 md:pb-0 bg-transparent">
      <section className="relative rounded-3xl md:rounded-none min-h-[100dvh] md:h-[90vh] md:min-h-[600px] overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10" />
        </div>

        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full flex items-center">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-80 blur-3xl`} />
                
                <div className="container mx-auto px-4 md:px-6 relative z-20">
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 flex flex-col pt-20 lg:pt-0">
                      <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 30 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 leading-[1.1]"
                      >
                        {slide.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                          {slide.highlight}
                        </span>
                      </motion.h1>
                      
                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: selectedIndex === index ? 1 : 0, x: selectedIndex === index ? 0 : -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium"
                      >
                        {slide.description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                      >
                        <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 w-full sm:w-auto text-sm md:text-base hover:-translate-y-1">
                          <Download size={20} /> App Store
                        </a>
                        <a href="#" className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-sm w-full sm:w-auto text-sm md:text-base hover:-translate-y-1">
                          Google Play
                        </a>
                      </motion.div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ 
                          opacity: selectedIndex === index ? 1 : 0, 
                          scale: selectedIndex === index ? 1 : 0.8,
                          rotate: selectedIndex === index ? 0 : -5
                        }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative w-64 md:w-[340px] aspect-[1/2] rounded-[3rem] border-[10px] border-white bg-white overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                      >
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-pink-500 w-8' : 'bg-gray-300 w-2.5 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
