import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const VizmatoLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="100" height="100" rx="24" fill="url(#vizmato-grad)" />
    {/* 3 Sparkles */}
    <path d="M22 15C22 18 20 20 17 20C20 20 22 22 22 25C22 22 24 20 27 20C24 20 22 18 22 15Z" fill="white" />
    <path d="M35 25C35 27 34 28 32 28C34 28 35 29 35 31C35 29 36 28 38 28C36 28 35 27 35 25Z" fill="white" />
    <path d="M15 30C15 31.5 14 32.5 12.5 32.5C14 32.5 15 33.5 15 35C15 33.5 16 32.5 17.5 32.5C16 32.5 15 31.5 15 30Z" fill="white" />
    
    {/* Clapperboard Top */}
    <path d="M25 45L75 35V45L25 55V45Z" fill="white" />
    <path d="M35 43L45 41L42 33L32 35L35 43Z" fill="#ff4b5c" />
    <path d="M55 39L65 37L62 29L52 31L55 39Z" fill="#ff4b5c" />
    
    {/* Clapperboard Body */}
    <path d="M25 57H75V75C75 80.5228 70.5228 85 65 85H35C29.4772 85 25 80.5228 25 75V57Z" fill="white" />
    
    {/* V in the center */}
    <path d="M40 65L47.5 78L58 61" stroke="#ff4b5c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    
    <defs>
      <linearGradient id="vizmato-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff5e62" />
        <stop offset="1" stopColor="#ff2a4b" />
      </linearGradient>
    </defs>
  </svg>
);

export function HeroWithVideoBackground() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-4 pt-2 md:pt-4">
      <section className="relative w-full rounded-3xl md:rounded-[2.5rem] shadow-2xl bg-[#09090b] overflow-hidden flex items-center justify-center min-h-[550px] sm:min-h-[600px] md:aspect-auto md:h-[85vh] md:max-h-[750px]">
      {/* Video Background */}
      <video
        autoPlay={navigator.userAgent !== 'ReactSnap'}
        loop
        muted
        playsInline
        poster="/vizmato/hero.webp"
        className="absolute inset-0 w-full h-full object-cover object-[15%_center] md:object-center opacity-80 md:opacity-100"
      >
        <source src="/vizmato/vizmato-hero.mp4" type="video/mp4" />
      </video>
      
      {/* Absolute Overlay for Content */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-end lg:justify-center">
        {/* Mobile Gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/60 to-transparent lg:hidden pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 h-full flex items-end lg:items-center pb-8 lg:pb-0 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end w-full max-w-[1400px] mx-auto">
            
            {/* Right Side: Text and Badges, pushed fully to the right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:w-[50%] xl:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 py-6 lg:py-0 lg:ml-auto lg:pr-8 mt-auto lg:mt-0"
            >
              {/* Title / Logo Row */}
              <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-4">
                <VizmatoLogo className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 shadow-[0_4px_20px_rgba(255,42,75,0.4)] rounded-[1.2rem] md:rounded-[1.5rem]" />
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[76px] font-bold text-white tracking-tight leading-none" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Vizmato
                </h1>
              </div>
              
              <p className="text-sm sm:text-base md:text-2xl lg:text-[30px] text-[#eaeaea] mb-6 md:mb-10 leading-[1.5] font-medium max-w-[95%] md:max-w-2xl drop-shadow-md" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                {t('vizmato.hero.subtitle_1')} <br className="hidden md:block" />
                {t('vizmato.hero.subtitle_2')}
              </p>

              <div className="flex flex-row items-center gap-4 md:gap-5 w-full justify-center lg:justify-start">
                <a 
                  href="https://apps.apple.com/us/app/vizmato-video-editor-maker/id496232649" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-transform hover:scale-105 hover:opacity-80"
                >
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-10 sm:h-12 md:h-[55px] lg:h-[65px] w-auto" width={120} height={40} loading="eager"
                  />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.globaldelight.vizmato&hl=&utm_source=website&utm_medium=vizmato&utm_campaign=vizmato_website" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-transform hover:scale-105 hover:opacity-80"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-10 sm:h-12 md:h-[55px] lg:h-[65px] w-auto" width={180} height={53} loading="eager"
                  />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
