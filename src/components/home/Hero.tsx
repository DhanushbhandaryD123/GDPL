import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const heroImages = [
  '/hero/hero-banner.png',
  '/hero/hero-banner1.png',
  '/hero/hero-banner2.png',
  '/hero/hero-banner3.png',
  '/hero/hero-banner4.png'
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-2 md:px-4 pt-1 pb-12 bg-white">
      <div className="w-full relative overflow-hidden text-white pt-12 pb-16 md:pt-20 md:pb-24 shadow-2xl bg-black rounded-3xl md:rounded-[2.5rem]">
        {/* Background Image Layer with scale to crop out white borders */}
        <AnimatePresence>
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-no-repeat ${
              heroImages[currentImageIndex] === '/hero/hero-banner.png'
                ? 'bg-cover bg-center scale-[1.08]'
                : 'bg-[length:100%_100%]'
            }`}
            style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
          />
        </AnimatePresence>

        {/* Boom 3D Logo (Only for the first slide) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner.png' && (
            <motion.img 
              key="hero-logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="/hero/Hlogo/Bom3D-logo.png"
              alt="Boom 3D"
              className="absolute hidden lg:block top-8 xl:top-12 left-[25%] xl:left-[28%] -translate-x-1/2 w-48 lg:w-64 xl:w-72 object-contain z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>
        
        <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center h-full min-h-[400px] relative z-10">
          {/* Left side empty spacer to push text past the laptop in the background image */}
          <div className="hidden lg:block lg:w-[55%] xl:w-[60%]"></div>

          {/* Right: Text Content Overlay */}
          <AnimatePresence mode="wait">
            {heroImages[currentImageIndex] === '/hero/hero-banner.png' && (
              <motion.div 
                key="hero-text"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[45%] xl:w-[40%] space-y-6 text-center lg:text-left z-10 lg:pl-8 py-12"
              >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-md">
                  Turn Captures <br className="hidden md:block" /> into Creations
                </h1>
                <p className="text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0 drop-shadow-md font-medium">
                  Powerful screen recording and editing tools
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                  <button className="bg-white text-purple-900 font-semibold px-6 py-3 rounded text-sm hover:bg-gray-100 transition shadow-lg w-full sm:w-auto whitespace-nowrap">
                    Download from the Microsoft Store
                  </button>
                  <button className="bg-transparent border border-white/80 text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white/10 transition shadow-lg w-full sm:w-auto whitespace-nowrap backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </motion.div>
            )}

            {heroImages[currentImageIndex] === '/hero/hero-banner1.png' && (
              <motion.div 
                key="hero-text-1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center space-y-5 text-center z-10 lg:pl-8 py-12"
              >
                <img src="/button/Boom2-Logo.png" alt="Boom 2" className="w-48 md:w-56 object-contain drop-shadow-lg" />
                
                <h2 className="text-2xl md:text-[28px] font-bold tracking-tight leading-snug drop-shadow-md text-white max-w-[400px]">
                  Sculpt your system audio for the best stereo sound experience.
                </h2>
                
                <div className="flex flex-col items-center gap-4 pt-2">
                  <a href="#" className="hover:scale-105 transition-transform block">
                    <img src="/button/DownloadonMacAppStore.png" alt="Download on Mac App Store" className="h-10 md:h-12 object-contain drop-shadow-md" />
                  </a>
                  <button className="bg-[#00e5ff] text-black font-semibold px-8 py-2.5 rounded-full text-[15px] hover:bg-[#00ccdd] transition shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                    Learn More
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-white border-2 border-white scale-110' 
                  : 'bg-transparent border-2 border-white/80 hover:border-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
