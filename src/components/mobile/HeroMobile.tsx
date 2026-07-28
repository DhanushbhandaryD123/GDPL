import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const heroImages = [
  '/hero/hero-banner.png',
  '/hero/hero-banner1.png',
  '/hero/hero-banner2.png',
  '/hero/hero-banner3.png',
  '/hero/hero-banner4.png'
];

export function HeroMobile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto px-4 pt-2 pb-8 bg-white">
      <div className="w-full relative overflow-hidden text-white shadow-2xl bg-black rounded-3xl aspect-[4/3] sm:aspect-[16/9] flex flex-col justify-end">
        {/* Background Image Layer */}
        <AnimatePresence>
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-no-repeat bg-cover ${
              heroImages[currentImageIndex] === '/hero/hero-banner.png' 
                ? 'bg-[60%_center]' 
                : 'bg-center'
            }`}
            style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
          />
        </AnimatePresence>

        {/* Boom 3D Logo (Only for the first slide) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner.png' && (
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              src="/hero/Hlogo/Bom3D-logo.png"
              alt="Boom 3D"
              className="absolute top-4 left-4 w-20 sm:w-24 object-contain z-20 pointer-events-none drop-shadow-xl"
            />
          )}
        </AnimatePresence>

        {/* Audion Overlay (Only for the third slide: hero-banner2.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner2.png' && (
            <motion.div 
              key="audion-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                src="/hero/Hlogo/AudiOnLaunchBannerLogo.png"
                alt="Audion"
                className="absolute top-4 left-4 w-28 sm:w-32 object-contain pointer-events-auto drop-shadow-xl"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-10 right-4 flex flex-col items-end text-right space-y-3 pointer-events-auto max-w-[85%]"
              >
                <h2 className="text-sm sm:text-base font-medium tracking-tight leading-snug drop-shadow-lg text-white">
                  <span className="text-red-500 font-bold">Record, edit, share:</span><br />
                  Tell your story with Audion
                </h2>
                <div className="flex flex-row items-center gap-3 mt-2">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.globaldelight.audiorecorder&referrer=utm_source%3DGDWebsite%26utm_medium%3DBanner%26utm_term%3DBannerCTA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/GooglePlay.png" alt="Get it on Google Play" className="h-8 sm:h-10 object-contain drop-shadow-md" />
                  </a>
                  <a 
                    href="https://apps.apple.com/us/app/audion-voice-recorder-memos/id1633228083" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/AppStore.png" alt="Download on App Store" className="h-8 sm:h-10 object-contain drop-shadow-md" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Vizmato Overlay (Only for the fourth slide: hero-banner3.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner3.png' && (
            <motion.div 
              key="vizmato-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                src="/hero/Hlogo/VizmatoLogo.png"
                alt="Vizmato"
                className="absolute top-4 left-4 w-28 sm:w-32 object-contain pointer-events-auto drop-shadow-xl"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-10 right-4 flex flex-col items-end text-right space-y-3 pointer-events-auto max-w-[85%]"
              >
                <h2 className="text-sm sm:text-base font-medium tracking-tight leading-snug drop-shadow-lg text-white">
                  Creating dazzling videos with a few taps!
                </h2>
                <div className="flex flex-row items-center gap-3 mt-2">
                  <a 
                    href="https://apps.apple.com/us/app/vizmato-video-editor-maker/id496232649" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/AppStore.png" alt="Download on App Store" className="h-8 sm:h-10 object-contain drop-shadow-md" />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.globaldelight.vizmato&hl" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/GooglePlay.png" alt="Get it on Google Play" className="h-8 sm:h-10 object-contain drop-shadow-md" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Boom 3D Overlay (Only for the fifth slide: hero-banner4.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner4.png' && (
            <motion.div 
              key="boom3d-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                src="/hero/Hlogo/Bom3D-logo.png"
                alt="Boom 3D"
                className="absolute top-4 left-4 w-20 sm:w-24 object-contain pointer-events-auto drop-shadow-xl"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-center space-y-3 pointer-events-auto w-[90%] sm:w-[80%]"
              >
                <h2 className="text-sm sm:text-base font-medium tracking-tight leading-snug drop-shadow-lg text-white">
                  Experience rich & true to life audio quality with Boom 3D
                </h2>
                
                <div className="flex flex-row items-center justify-center gap-3 mt-2">
                  <a 
                    href="https://apps.apple.com/us/app/boom3d-volume-booster-and-eq/id1233048948?mt=12" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/DownloadonMacAppStore.png" alt="Download on Mac App Store" className="h-8 sm:h-10 object-contain drop-shadow-md" />
                  </a>
                  <a 
                    href="https://apps.microsoft.com/detail/9pp81h1nczs1?cid=GD-Homepage-Banner&hl=en-US&gl=IN" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/en-us dark.svg" alt="Get it from Microsoft Store" className="h-8 sm:h-10 object-contain drop-shadow-md" />
                  </a>
                </div>

                <button className="bg-[#00e5ff] text-black font-bold px-5 py-2 rounded-full text-xs sm:text-sm hover:bg-[#00ccdd] active:scale-95 transition shadow-[0_0_15px_rgba(0,229,255,0.4)] mt-2 w-full sm:w-auto">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Slide 1 and Slide 2 Text Overlays */}
        <AnimatePresence mode="wait">
            {heroImages[currentImageIndex] === '/hero/hero-banner.png' && (
              <motion.div 
                key="hero-text"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-1/2 -translate-y-1/2 right-3 w-[55%] flex flex-col items-start text-left space-y-3 z-10 pointer-events-auto pr-2"
              >
                <h1 className="text-base sm:text-xl font-bold tracking-tight leading-tight drop-shadow-lg text-white">
                  Turn Captures into Creations
                </h1>
                <p className="text-xs sm:text-sm text-white/95 drop-shadow-md font-medium leading-relaxed">
                  Powerful screen recording and editing tools
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 w-full">
                  <a 
                    href="https://apps.microsoft.com/detail/9pp81h1nczs1?cid=GD-Homepage-Banner&hl=en-US&gl=IN" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform block shrink-0"
                  >
                    <img src="/button/en-us dark.svg" alt="Get it from Microsoft Store" className="h-8 sm:h-10 object-contain drop-shadow-md" />
                  </a>
                  <button className="bg-white/10 border border-white/80 text-white font-bold px-4 py-2 rounded text-xs sm:text-sm hover:bg-white/20 active:scale-95 transition shadow-lg whitespace-nowrap backdrop-blur-sm flex items-center justify-center w-full sm:w-auto">
                    Learn More
                  </button>
                </div>
              </motion.div>
            )}

          {heroImages[currentImageIndex] === '/hero/hero-banner1.png' && (
            <motion.div 
              key="hero-text-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-1/2 -translate-y-1/2 right-3 w-[50%] flex flex-col items-center text-center space-y-3 z-10 pointer-events-auto pr-2"
            >
              <img src="/button/Boom2-Logo.png" alt="Boom 2" className="w-24 sm:w-28 object-contain drop-shadow-2xl" />
              
              <h2 className="text-xs sm:text-sm font-semibold tracking-tight leading-snug drop-shadow-lg text-white">
                Sculpt your system audio for the best stereo sound experience.
              </h2>
              
              <div className="flex flex-col items-center gap-3 pt-2 w-full">
                <a 
                  href="https://apps.apple.com/us/app/boom2-volume-boost-equalizer/id948176063?mt=12" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-105 transition-transform block w-full flex justify-center"
                >
                  <img src="/button/DownloadonMacAppStore.png" alt="Download on Mac App Store" className="h-8 sm:h-10 object-contain drop-shadow-md" />
                </a>
                <a 
                    href="https://www.globaldelight.com/boom2/?source_page=GD%20Home%20page" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#00e5ff] text-black font-bold px-5 py-2 rounded-full text-xs sm:text-sm hover:bg-[#00ccdd] active:scale-95 transition shadow-[0_0_15px_rgba(0,229,255,0.4)] text-center w-full sm:w-auto block"
                  >
                  Learn More
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-white border-2 border-white scale-125' 
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

