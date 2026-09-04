import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../layout/LocalizedLink';

const heroImages = [
  '/hero/hero-banner-mobile.webp',
  '/hero/hero-banner1-mobile.webp',
  '/hero/hero-banner2-mobile.webp',
  '/hero/hero-banner3-mobile.webp',
  '/hero/hero-banner4-mobile.webp'
];

export function HeroMobile() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto px-3 sm:px-4 pt-1 pb-1 bg-white">
      <div className="w-full relative overflow-hidden text-white shadow-2xl bg-black rounded-2xl sm:rounded-3xl h-[290px] sm:h-[330px] flex flex-col justify-end">
        {/* Background Image Layer */}
        <AnimatePresence>
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-no-repeat bg-cover ${
              heroImages[currentImageIndex] === '/hero/hero-banner-mobile.webp' 
                ? 'bg-[65%_center]' 
                : 'bg-center'
            }`}
            style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
          />
        </AnimatePresence>

        {/* Boom 3D Logo (Only for the first slide) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner-mobile.webp' && (
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              src="/hero/Hlogo/Bom3D-logo.png"
              alt="Boom 3D"
              className="absolute top-3 left-3 w-16 sm:w-20 object-contain z-30 pointer-events-none drop-shadow-xl"
            />
          )}
        </AnimatePresence>

        {/* Audion Overlay (Only for the third slide: hero-banner2.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner2-mobile.webp' && (
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
                className="absolute top-3 left-3 w-22 sm:w-26 object-contain pointer-events-auto drop-shadow-xl"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-6 right-3 flex flex-col items-end text-right space-y-1.5 pointer-events-auto max-w-[62%]"
              >
                <h2 className="text-xs sm:text-sm font-semibold tracking-tight leading-snug drop-shadow-lg text-white">
                  <span className="text-red-500 font-bold">{t('home.hero_banner.audion_tagline')}</span><br />
                  {t('home.hero_banner.audion_subtitle')}
                </h2>
                <div className="flex flex-row items-center gap-2 mt-1">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.globaldelight.audiorecorder&referrer=utm_source%3DGDWebsite%26utm_medium%3DBanner%26utm_term%3DBannerCTA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/GooglePlay.png" alt="Get it on Google Play" className="h-6 sm:h-7 w-auto object-contain drop-shadow-md" width={307} height={92} loading="eager" />
                  </a>
                  <a 
                    href="https://apps.apple.com/us/app/audion-voice-recorder-memos/id1633228083" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/AppStore.png" alt="Download on App Store" className="h-6 sm:h-7 w-auto object-contain drop-shadow-md" width={306} height={91} loading="eager" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Vizmato Overlay (Only for the fourth slide: hero-banner3.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner3-mobile.webp' && (
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
                className="absolute top-3 left-3 w-22 sm:w-26 object-contain pointer-events-auto drop-shadow-xl"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-6 right-3 flex flex-col items-end text-right space-y-1.5 pointer-events-auto max-w-[55%]"
              >
                <h2 className="text-xs sm:text-sm font-semibold tracking-tight leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-white">
                  {t('home.hero_banner.vizmato_tagline')}
                </h2>
                <div className="flex flex-row items-center gap-2 mt-1">
                  <a 
                    href="https://apps.apple.com/us/app/vizmato-video-editor-maker/id496232649" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/AppStore.png" alt="Download on App Store" className="h-6 sm:h-7 w-auto object-contain drop-shadow-md" width={306} height={91} loading="eager" />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.globaldelight.vizmato&hl" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/GooglePlay.png" alt="Get it on Google Play" className="h-6 sm:h-7 w-auto object-contain drop-shadow-md" width={307} height={92} loading="eager" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Boom 3D Overlay (Only for the fifth slide: hero-banner4.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner4-mobile.webp' && (
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
                className="absolute top-3 left-3 w-16 sm:w-20 object-contain pointer-events-auto drop-shadow-xl"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-center space-y-1.5 pointer-events-auto w-[90%]"
              >
                <h2 className="text-xs sm:text-sm font-semibold tracking-tight leading-snug drop-shadow-lg text-white max-w-[280px]">
                  {t('home.hero_banner.boom3d_tagline')}
                </h2>

                <div className="flex flex-row items-center justify-center gap-2 mt-1">
                  <a 
                    href="https://apps.apple.com/us/app/boom3d-volume-booster-and-eq/id1233048948?mt=12" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/DownloadonMacAppStore.png" alt="Download on Mac App Store" className="h-6 sm:h-7 w-auto object-contain drop-shadow-md" width={269} height={69} loading="eager" />
                  </a>
                  <a 
                    href="https://apps.microsoft.com/detail/9pp81h1nczs1?cid=GD-Homepage-Banner&hl=en-US&gl=IN" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/en-us dark.svg" alt="Get it from Microsoft Store" className="h-6 sm:h-7 w-auto object-contain drop-shadow-md" width={161} height={44} loading="eager" />
                  </a>
                </div>

                <Link to="/boom3D" className="bg-[#00e5ff] text-black font-bold h-6 px-3.5 rounded-full text-[10px] sm:text-xs flex items-center justify-center hover:bg-[#00ccdd] active:scale-95 transition shadow-[0_0_10px_rgba(0,229,255,0.4)] mt-1 pointer-events-auto">
                  {t('home.hero_banner.learn_more')}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Slide 1 and Slide 2 Text Overlays */}
        <AnimatePresence mode="wait">
            {heroImages[currentImageIndex] === '/hero/hero-banner-mobile.webp' && (
              <motion.div 
                key="hero-text"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-1/2 -translate-y-1/2 right-2.5 w-[52%] flex flex-col items-end text-right space-y-1.5 z-20 pointer-events-auto pr-1"
              >
                <h1 className="text-sm sm:text-base font-bold tracking-tight leading-tight drop-shadow-lg text-white">
                  {t('home.hero_banner.capto_title_1')} {t('home.hero_banner.capto_title_2')}
                </h1>
                <p className="text-[11px] sm:text-xs text-white/90 drop-shadow-md font-medium leading-snug max-w-[170px]">
                  {t('home.hero_banner.capto_subtitle')}
                </p>

                <div className="flex flex-col items-end gap-1.5 pt-1">
                  <a
                    href="https://apps.microsoft.com/detail/9pp81h1nczs1?cid=GD-Homepage-Banner&hl=en-US&gl=IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform block shrink-0"
                  >
                    <img src="/button/en-us dark.svg" alt="Get it from Microsoft Store" className="h-6 sm:h-7 w-auto object-contain drop-shadow-md" width={161} height={44} loading="eager" />
                  </a>
                  <Link to="/boom3D" className="h-6 sm:h-7 px-3.5 rounded-lg border border-white/80 bg-white/15 text-white font-bold text-[10px] sm:text-xs hover:bg-white hover:text-black active:scale-95 transition shadow-md whitespace-nowrap backdrop-blur-sm flex items-center justify-center">
                    {t('home.hero_banner.learn_more')}
                  </Link>
                </div>
              </motion.div>
            )}

          {heroImages[currentImageIndex] === '/hero/hero-banner1-mobile.webp' && (
            <motion.div 
              key="hero-text-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-1/2 -translate-y-1/2 right-2.5 w-[48%] flex flex-col items-center text-center space-y-2 z-20 pointer-events-auto pr-1"
            >
              <img src="/button/Boom2-Logo.png" alt="Boom 2" className="w-20 sm:w-24 object-contain drop-shadow-2xl" width={311} height={69} loading="eager" />
              
              <h2 className="text-[11px] sm:text-xs font-semibold tracking-tight leading-snug drop-shadow-lg text-white max-w-[160px]">
                {t('home.hero_banner.boom2_tagline')}
              </h2>
              
              <div className="flex flex-col items-center gap-1.5 pt-1 w-full">
                <a 
                  href="https://apps.apple.com/us/app/boom2-volume-boost-equalizer/id948176063?mt=12" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-105 transition-transform block flex justify-center"
                >
                  <img src="/button/DownloadonMacAppStore.png" alt="Download on Mac App Store" className="h-6 sm:h-7 w-auto object-contain drop-shadow-md" width={269} height={69} loading="eager" />
                </a>
                <Link
                  to="/boom2"
                  className="bg-[#00e5ff] text-black font-bold h-6 px-3.5 rounded-full text-[10px] sm:text-xs hover:bg-[#00ccdd] active:scale-95 transition shadow-[0_0_10px_rgba(0,229,255,0.4)] flex items-center justify-center text-center block"
                >
                  {t('home.hero_banner.learn_more')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination Dots - small, thin and elegant */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentImageIndex === index 
                  ? 'w-3.5 h-[2.5px] bg-white' 
                  : 'w-1.5 h-[2.5px] bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

