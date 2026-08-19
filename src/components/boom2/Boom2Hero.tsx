import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const AppleLogo = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className={className}
    fill="currentColor"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

export function Boom2Hero() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-4 pt-2 md:pt-4 pb-8 md:pb-12">
        <section className="relative w-full rounded-3xl md:rounded-[2.5rem] shadow-2xl py-8 md:pt-16 md:pb-32 flex items-center aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:min-h-[70vh] overflow-hidden">

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/boom2/boom2.mp4" type="video/mp4" />
        </video>

        {/* Text Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060814]/90 via-[#060814]/30 to-transparent pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
          <div className="max-w-xl">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-3 mb-4 md:mb-8"
            >
              <motion.img
                src="/boom2/Boom2-icon.png"
                alt="Boom 2 Logo"
                className="w-12 md:w-20 h-auto object-contain drop-shadow-lg"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <span className="text-white font-semibold text-lg md:text-xl tracking-wide drop-shadow-md">
                Boom 2
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight drop-shadow-lg text-white"
            >
              {t('boom2.hero.title_1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">{t('boom2.hero.title_2')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-gray-300 text-[11px] sm:text-sm md:text-xl mb-6 md:mb-10 leading-relaxed max-w-lg drop-shadow-md"
            >
              {t('boom2.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 w-full sm:w-auto"
            >
              <button className="flex items-center justify-center gap-2 bg-white text-black px-4 py-1.5 md:px-4 md:py-3.5 rounded-full md:rounded-xl font-bold transition-all hover:bg-[#1390FB] hover:text-white hover:scale-[1.02] w-full sm:w-[210px] text-[10px] sm:text-xs md:text-[15px] tracking-wide shadow-lg group">
                <AppleLogo className="w-3.5 h-3.5 md:w-5 md:h-5 mb-0.5" />
                {t('boom2.hero.download_trial')}
              </button>

              <button className="flex items-center justify-center gap-2 bg-black/40 backdrop-blur-sm border border-white/40 text-white px-4 py-1.5 md:px-4 md:py-3.5 rounded-full md:rounded-xl font-bold transition-all hover:bg-[#1390FB] hover:border-[#1390FB] w-full sm:w-[210px] text-[10px] sm:text-xs md:text-[15px] tracking-wide shadow-lg group">
                <AppleLogo className="w-3.5 h-3.5 md:w-5 md:h-5 mb-0.5" />
                {t('boom2.hero.buy_now')}
              </button>
            </motion.div>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}
