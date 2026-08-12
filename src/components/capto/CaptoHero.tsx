import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CaptoHero() {
  const { t } = useTranslation();
  return (
    <section className="relative px-4 pt-2 pb-8 md:px-0 md:pt-8 md:pb-16 overflow-hidden bg-[#fafbfe]">
      {/* Background Decor (Grid & squiggles based on image) */}
      <div className="absolute top-[20%] left-[45%] opacity-30 pointer-events-none">
         {/* Dot grid */}
         <div className="w-32 h-32" style={{ backgroundImage: 'radial-gradient(#6c5ce7 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1300px]">
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-4">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-[600px] text-center lg:text-left lg:pt-10"
          >
            <div className="flex items-center gap-3 mb-6 mx-auto lg:mx-0 justify-center lg:justify-start">
              <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden flex-shrink-0">
                <img 
                  src="/capto/Logo_Web2x_1.png" 
                  alt="Capto Icon" 
                  className="absolute top-0 left-0 h-16 md:h-20 w-auto max-w-none object-left object-cover drop-shadow-sm"
                />
              </div>
              <span className="text-[2.25rem] md:text-[3rem] font-bold tracking-tight text-[#1c2331]">Capto</span>
            </div>
            <h1 className="text-base sm:text-xl md:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-6 text-[#1c2331]">
              <span className="text-[#6554ff]">{t('capto.hero.title_1')}</span><br />
              <span className="text-[#6554ff]">{t('capto.hero.title_2')}</span> {t('capto.hero.title_3')}<br />
              {t('capto.hero.title_4')}
            </h1>

            <p className="text-xs sm:text-sm md:text-xl text-[#2d3748] font-bold mb-10">
              {t('capto.hero.subtitle')}
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 mb-5 w-full">
              <a
                href="#"
                className="flex-1 sm:flex-none sm:w-auto px-2 py-2.5 md:px-8 md:py-3.5 bg-[#6953ff] hover:bg-[#5b48df] text-white rounded-[2rem] font-bold text-[11px] sm:text-xs md:text-[15px] flex items-center justify-center gap-1.5 sm:gap-2.5 transition-all shadow-lg shadow-indigo-500/30"
              >
                <svg className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] fill-current" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                {t('capto.hero.download_trial')}
              </a>
              <a
                href="#"
                className="flex-1 sm:flex-none sm:w-auto px-2 py-2.5 md:px-8 md:py-3.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-[2rem] font-bold text-[11px] sm:text-xs md:text-[15px] flex items-center justify-center gap-1.5 sm:gap-2.5 transition-all shadow-sm"
              >
                <ShoppingCart className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
                {t('capto.hero.buy_now')}
              </a>
            </div>

            <p className="text-[13px] text-gray-500 font-medium mb-3">{t('capto.hero.macos_req')}</p>
            <p className="text-[12px] text-gray-400 font-medium leading-relaxed max-w-[420px] mx-auto lg:mx-0">
              {t('capto.hero.trial_note')}
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-[700px] relative flex flex-col items-center"
          >
            <div className="relative rounded-3xl md:rounded-none aspect-[4/3] sm:aspect-[16/9] md:aspect-auto overflow-hidden md:overflow-visible bg-black md:bg-transparent w-full">
            <img 
              src="/capto/c-hero.png" 
              alt="Capto Interface"
              className="w-full h-full md:h-auto absolute inset-0 md:static object-cover md:object-contain"
            />
            </div>
            
            <div className="mt-4 flex justify-center lg:ml-20">
              <a href="#" className="inline-block hover:opacity-80 transition-opacity bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg" alt="Get it from Microsoft Store" className="h-8" />
              </a>
            </div>
          </motion.div>
          
        </div>

        {/* Bottom Banner - Back to School */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-16 md:mt-24 w-full max-w-[1000px] mx-auto bg-[#f8f8fb] rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between px-8 py-5 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="font-black text-[1.6rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#77a6f7] to-[#998ceb] transform -rotate-2 drop-shadow-sm text-center md:text-left">
              {t('capto.hero.back')} <span className="text-sm align-top">{t('capto.hero.to')}</span><br/>{t('capto.hero.school')}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <span className="font-bold text-gray-800 text-sm">{t('capto.hero.only')}</span>
            <div className="flex gap-2 text-center items-start">
              <div>
                <div className="bg-white rounded-md px-3 py-1.5 text-[#7c63ff] font-bold text-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] w-[46px] border border-gray-50">08</div>
                <div className="text-[8px] text-gray-400 mt-1.5 font-bold tracking-wider">{t('capto.hero.hours')}</div>
              </div>
              <span className="font-bold text-gray-300 mt-1.5">:</span>
              <div>
                <div className="bg-white rounded-md px-3 py-1.5 text-[#7c63ff] font-bold text-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] w-[46px] border border-gray-50">06</div>
                <div className="text-[8px] text-gray-400 mt-1.5 font-bold tracking-wider">{t('capto.hero.minutes')}</div>
              </div>
              <span className="font-bold text-gray-300 mt-1.5">:</span>
              <div>
                <div className="bg-white rounded-md px-3 py-1.5 text-[#7c63ff] font-bold text-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] w-[46px] border border-gray-50">49</div>
                <div className="text-[8px] text-gray-400 mt-1.5 font-bold tracking-wider">{t('capto.hero.seconds')}</div>
              </div>
            </div>
            <span className="font-bold text-gray-800 text-sm">{t('capto.hero.left')}</span>
          </div>

          <div className="mt-2 md:mt-0">
            <span className="font-extrabold text-[#1c2331] text-[1.1rem]">
              {t('capto.hero.avail')} <span className="text-[#6554ff]">{t('capto.hero.off')}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
