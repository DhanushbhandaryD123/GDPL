import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function BusinessHero() {
  const { t } = useTranslation();

  const slides = [
    { image: "/business/business3.png", title: t('business.hero.s1_title'), description: t('business.hero.s1_desc') },
    { image: "/business/business1.png", title: t('business.hero.s2_title'), description: t('business.hero.s2_desc') },
    { image: "/business/business2.png", title: t('business.hero.s3_title'), description: t('business.hero.s3_desc') }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full md:p-0 px-2 pt-1 pb-4">
      <section className="relative w-full overflow-hidden bg-[#020617] font-sans h-auto aspect-[16/9] md:aspect-auto md:h-[60vh] md:min-h-[450px] flex items-center rounded-3xl md:rounded-none">
        
        {/* Animated Full Background Image & Heavy Overlays */}
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence>
            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              src={slides[currentIndex].image} 
              alt="Business Background" 
              className="absolute inset-0 w-full h-full object-contain object-right md:object-right"
            />
          </AnimatePresence>
          {/* Gradient overlay to keep left text readable, while leaving the rest of the image clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full h-full px-4 md:px-12 flex items-center">
          
          {/* Text Container */}
          <div className="w-[60%] md:w-full max-w-2xl flex flex-col items-start text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                <h1 className="text-[12px] md:text-3xl lg:text-4xl font-normal leading-[1.2] mb-1 md:mb-4 text-white">
                  {slides[currentIndex].title}
                </h1>

                <p className="text-[9px] md:text-3xl lg:text-4xl font-normal text-gray-200 mb-2 md:mb-6 max-w-lg leading-relaxed">
                  {slides[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="absolute bottom-2 md:bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-1.5 md:gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-red-600 w-2 h-2 md:w-3 md:h-3" : "bg-gray-500 hover:bg-gray-400 w-1.5 h-1.5 md:w-2 md:h-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
