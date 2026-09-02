import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../layout/LocalizedLink';

const heroImages = [
  '/hero/hero-banner.webp',
  '/hero/hero-banner1.webp',
  '/hero/hero-banner2.webp',
  '/hero/hero-banner3.webp',
  '/hero/hero-banner4.webp'
];

export function HeroDesktop() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000);

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
              heroImages[currentImageIndex] === '/hero/hero-banner.webp'
                ? 'bg-cover bg-center scale-[1.08]'
                : 'bg-[length:100%_100%]'
            }`}
            style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
          />
        </AnimatePresence>

        {/* Boom 3D Logo (Only for the first slide) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner.webp' && (
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

        {/* Audion Overlay (Only for the third slide: hero-banner2.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner2.webp' && (
            <motion.div 
              key="audion-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              {/* Top Left Logo */}
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                src="/hero/Hlogo/AudiOnLaunchBannerLogo.png"
                alt="Audion"
                className="absolute top-8 left-8 md:top-16 md:left-12 lg:left-20 w-36 md:w-48 lg:w-56 object-contain pointer-events-auto"
              />
              
              {/* Bottom Right Text and Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-16 right-8 md:bottom-20 md:right-12 lg:right-20 flex flex-col items-end text-right space-y-4 pointer-events-auto max-w-[90%] md:max-w-[550px]"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight leading-snug drop-shadow-lg text-white">
                  <span className="text-red-500">{t('home.hero_banner.audion_tagline')}</span><br />
                  {t('home.hero_banner.audion_subtitle')}
                </h2>
                <div className="flex flex-row items-center gap-3 md:gap-4 mt-2">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.globaldelight.audiorecorder&referrer=utm_source%3DGDWebsite%26utm_medium%3DBanner%26utm_term%3DBannerCTA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/GooglePlay.png" alt="Get it on Google Play" className="h-10 md:h-12 object-contain drop-shadow-md" width={307} height={92} loading="eager" />
                  </a>
                  <a 
                    href="https://apps.apple.com/us/app/audion-voice-recorder-memos/id1633228083" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/AppStore.png" alt="Download on App Store" className="h-10 md:h-12 object-contain drop-shadow-md" width={306} height={91} loading="eager" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Vizmato Overlay (Only for the fourth slide: hero-banner3.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner3.webp' && (
            <motion.div 
              key="vizmato-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              {/* Top Left Logo */}
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                src="/hero/Hlogo/VizmatoLogo.png"
                alt="Vizmato"
                className="absolute top-8 left-8 md:top-16 md:left-12 lg:left-20 w-36 md:w-48 lg:w-56 object-contain pointer-events-auto"
              />
              
              {/* Bottom Right Text and Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-16 right-8 md:bottom-20 md:right-12 lg:right-20 flex flex-col items-end text-right space-y-4 pointer-events-auto max-w-[90%] md:max-w-[450px]"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight leading-snug drop-shadow-lg text-white">
                  {t('home.hero_banner.vizmato_tagline')}
                </h2>
                <div className="flex flex-row items-center gap-3 md:gap-4 mt-2">
                  <a 
                    href="https://apps.apple.com/us/app/vizmato-video-editor-maker/id496232649" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/AppStore.png" alt="Download on App Store" className="h-10 md:h-12 object-contain drop-shadow-md" width={306} height={91} loading="eager" />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.globaldelight.vizmato&hl" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/GooglePlay.png" alt="Get it on Google Play" className="h-10 md:h-12 object-contain drop-shadow-md" width={307} height={92} loading="eager" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Boom 3D Overlay (Only for the fifth slide: hero-banner4.png) */}
        <AnimatePresence>
          {heroImages[currentImageIndex] === '/hero/hero-banner4.webp' && (
            <motion.div 
              key="boom3d-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              {/* Top Left Logo */}
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                src="/hero/Hlogo/Bom3D-logo.png"
                alt="Boom 3D"
                className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16 w-24 md:w-32 lg:w-40 object-contain pointer-events-auto"
              />
              
              {/* Bottom Center Text and Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 md:bottom-16 flex flex-col items-center text-center space-y-4 pointer-events-auto max-w-[90%] md:max-w-[700px] w-full"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight leading-snug drop-shadow-lg text-white">
                  {t('home.hero_banner.boom3d_tagline')}
                </h2>

                {/* Store Buttons */}
                <div className="flex flex-row items-center justify-center gap-3 md:gap-4 mt-2">
                  <a 
                    href="https://apps.apple.com/us/app/boom3d-volume-booster-and-eq/id1233048948?mt=12" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/DownloadonMacAppStore.png" alt="Download on Mac App Store" className="h-10 md:h-12 object-contain drop-shadow-md" width={269} height={69} loading="eager" />
                  </a>
                  <a 
                    href="https://apps.microsoft.com/detail/9pp81h1nczs1?cid=GD-Homepage-Banner&hl=en-US&gl=IN" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/en-us dark.svg" alt="Get it from Microsoft Store" className="h-10 md:h-12 object-contain drop-shadow-md" width={161} height={44} loading="eager" />
                  </a>
                </div>

                <Link to="/boom3D" className="bg-[#00e5ff] text-black font-semibold px-8 py-2.5 rounded-full text-[15px] hover:bg-[#00ccdd] hover:scale-105 active:scale-95 transition shadow-[0_0_20px_rgba(0,229,255,0.4)] mt-4 pointer-events-auto">
                  {t('home.hero_banner.learn_more')}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center h-full min-h-[400px] relative z-10">
          {/* Left side empty spacer to push text past the laptop in the background image */}
          <div className="hidden lg:block lg:w-[55%] xl:w-[60%]"></div>

          {/* Right: Text Content Overlay */}
          <AnimatePresence mode="wait">
            {heroImages[currentImageIndex] === '/hero/hero-banner.webp' && (
              <motion.div 
                key="hero-text"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[45%] xl:w-[40%] space-y-6 text-center lg:text-left z-10 lg:pl-8 py-12"
              >
                <h1 className="text-5xl md:text-6xl font-normal tracking-tight leading-tight drop-shadow-md">
                  {t('home.hero_banner.capto_title_1')} <br className="hidden md:block" /> {t('home.hero_banner.capto_title_2')}
                </h1>
                <p className="text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0 drop-shadow-md font-medium">
                  {t('home.hero_banner.capto_subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                  <a
                    href="https://apps.microsoft.com/detail/9pp81h1nczs1?cid=GD-Homepage-Banner&hl=en-US&gl=IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                  >
                    <img src="/button/en-us dark.svg" alt="Get it from Microsoft Store" className="h-10 md:h-12 object-contain drop-shadow-md" width={161} height={44} loading="eager" />
                  </a>
                  <Link to="/capto" className="bg-transparent border border-white/80 text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white/10 active:scale-95 transition shadow-lg w-full sm:w-auto whitespace-nowrap backdrop-blur-sm text-center">
                    {t('home.hero_banner.learn_more')}
                  </Link>
                </div>
              </motion.div>
            )}

            {heroImages[currentImageIndex] === '/hero/hero-banner1.webp' && (
              <motion.div 
                key="hero-text-1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center space-y-5 text-center z-10 lg:pl-8 py-12"
              >
                <img src="/button/Boom2-Logo.png" alt="Boom 2" className="w-48 md:w-56 object-contain drop-shadow-lg" width={311} height={69} loading="eager" />
                
                <h2 className="text-2xl md:text-[28px] font-normal tracking-tight leading-snug drop-shadow-md text-white max-w-[400px]">
                  {t('home.hero_banner.boom2_tagline')}
                </h2>
                
                <div className="flex flex-col items-center gap-4 pt-2">
                  <a 
                    href="https://apps.apple.com/us/app/boom2-volume-boost-equalizer/id948176063?mt=12" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:scale-105 transition-transform block"
                  >
                    <img src="/button/DownloadonMacAppStore.png" alt="Download on Mac App Store" className="h-10 md:h-12 object-contain drop-shadow-md" width={269} height={69} loading="eager" />
                  </a>
                  <Link
                    to="/boom2"
                    className="bg-[#00e5ff] text-black font-semibold px-8 py-2.5 rounded-full text-[15px] hover:bg-[#00ccdd] hover:scale-105 active:scale-95 transition shadow-[0_0_20px_rgba(0,229,255,0.4)] block text-center"
                  >
                    {t('home.hero_banner.learn_more')}
                  </Link>
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
