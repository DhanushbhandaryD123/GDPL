import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Boom3DHero() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[1920px] mx-auto px-2 md:px-4 pt-1 pb-12 bg-white">
      <div className="w-full relative overflow-hidden text-white pt-12 pb-16 md:pt-20 md:pb-24 shadow-2xl bg-black rounded-3xl md:rounded-[2.5rem]">
        
        {/* Background Image Layer with scale to crop out borders */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-[1.08]"
          style={{ backgroundImage: 'url("/boom3D/boom3d-hero.png")' }}
        />

        {/* Scrim so the headline stays legible regardless of what's behind it at any breakpoint */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10 lg:to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center h-full min-h-[400px] relative z-10">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] xl:w-[40%] space-y-6 text-center lg:text-left z-10 lg:pl-8 py-12"
          >
            {/* Boom 3D Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/boom3D/boomLogo3D.png" 
                alt="Boom 3D Logo" 
                className="w-48 lg:w-64 xl:w-72 object-contain"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-normal tracking-tight leading-tight drop-shadow-md text-white">
              {t('boom3d.hero.title_1')} <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {t('boom3d.hero.title_2')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0 drop-shadow-md font-medium">
              {t('boom3d.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 justify-center lg:justify-start pt-4">
              <a
                href="https://apps.apple.com/us/app/boom3d-volume-booster-and-eq/id1233048948?mt=12"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img src="/button/DownloadonMacAppStore.png" alt="Download on Mac App Store" className="h-11 md:h-14 lg:h-16 object-contain drop-shadow-md" />
              </a>
              <a
                href="https://apps.microsoft.com/detail/9pp81h1nczs1?cid=GD-Homepage-Banner&hl=en-US&gl=IN"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img src="/button/en-us dark.svg" alt="Get it from Microsoft Store" className="h-11 md:h-14 lg:h-16 object-contain drop-shadow-md" />
              </a>
            </div>
          </motion.div>

          {/* Spacer for Right side */}
          <div className="hidden lg:block lg:w-[55%] xl:w-[60%]"></div>
        </div>
      </div>
    </div>
  );
}
