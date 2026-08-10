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
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-pink-500/20 to-purple-600/20'
  },
  {
    id: 2,
    title: 'Your music,',
    highlight: 'your way.',
    description: 'Customize your sound with advanced equalizer presets and a dynamic audio intensity slider.',
    image: 'https://images.unsplash.com/photo-1516280440502-86105c2a13cc?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-blue-500/20 to-cyan-600/20'
  },
  {
    id: 3,
    title: 'Immersive listening,',
    highlight: 'on the go.',
    description: 'Take the ultimate audio experience wherever you go with Boom for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop',
    gradient: 'from-purple-500/20 to-indigo-600/20'
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
    <div className="w-full mx-auto px-4 md:px-0 pt-2 md:pt-0 pb-8 md:pb-0 bg-white md:bg-transparent">
    <section className="relative rounded-3xl md:rounded-none aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:h-[90vh] min-h-[600px] overflow-hidden bg-[#060814]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060814]/50 to-[#060814] z-10" />
      </div>

      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full flex items-center">
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-50 blur-3xl`} />
              
              <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="w-full lg:w-1/2 flex flex-col pt-20 lg:pt-0">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 20 }}
                      transition={{ duration: 0.6 }}
                      className="text-base sm:text-xl md:text-7xl font-bold mb-4 tracking-tight"
                    >
                      {slide.title} <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                        {slide.highlight}
                      </span>
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-xs sm:text-sm md:text-xl text-gray-300 mb-8 max-w-lg"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 20 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                      <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 md:px-8 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 w-full sm:w-auto text-[10px] sm:text-xs md:text-base">
                        <Download size={20} /> App Store
                      </a>
                      <a href="#" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-1.5 md:px-8 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all backdrop-blur-sm w-full sm:w-auto text-[10px] sm:text-xs md:text-base">
                        Google Play
                      </a>
                    </motion.div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, scale: selectedIndex === index ? 1 : 0.8 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="relative w-64 md:w-80 aspect-[1/2] rounded-[3rem] border-[8px] border-[#1a1a2e] bg-[#060814] overflow-hidden shadow-2xl shadow-purple-900/50"
                    >
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060814] to-transparent opacity-80" />
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-pink-500 w-10' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
    </div>
  );
}
