import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { Calendar, Users, Package } from 'lucide-react'; // Removed MoveRight since button is removed
import { useTranslation } from 'react-i18next';

export function AboutHero() {
  const { t } = useTranslation();
  return (
    <div className="w-full md:p-0 px-2 pt-1 pb-4">
      <section className="relative w-full overflow-hidden bg-[#020617] font-sans h-auto aspect-[16/9] md:aspect-auto md:h-[60vh] md:min-h-[450px] flex items-center rounded-3xl md:rounded-none">
        {/* Background Image & Heavy Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/team/GDPL-team.webp" 
            alt="Global Delight Team" 
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          {/* Lighter shadow overlay */}
          <div className="absolute inset-0 bg-[#020617]/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 w-full h-full flex flex-row items-center justify-between px-3 md:px-12">
          
          {/* LEFT COLUMN */}
          <div className="w-[55%] md:w-[50%] flex flex-col items-start text-white pt-0 md:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-0 md:mb-2"
            >
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-[14px] md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-1.5 md:mb-4 text-white"
            >
              {t('about.hero.title_1')}<br />
              {t('about.hero.title_2')}
            </motion.h1>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-row items-center gap-1 md:gap-3 mb-0 md:mb-4"
            >
              <div className="flex items-center gap-1 md:gap-3 pr-2 md:pr-6 border-r border-gray-700/50">
                <div className="text-blue-500 opacity-80 p-0.5 md:p-2 border border-blue-500/30 rounded md:rounded-lg bg-blue-500/10">
                  <Calendar className="w-2 h-2 md:w-4 md:h-4" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xl font-bold text-white leading-tight">
                    <CountUp end={2007} duration={2.5} separator="" />
                  </div>
                  <div className="text-[6px] md:text-[10px] text-gray-400">{t('about.hero.founded')}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 md:gap-3 px-2 md:px-6 border-r border-gray-700/50">
                <div className="text-blue-500 opacity-80 p-0.5 md:p-2 border border-blue-500/30 rounded md:rounded-lg bg-blue-500/10">
                  <Users className="w-2 h-2 md:w-4 md:h-4" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xl font-bold text-white leading-tight">
                    <CountUp end={30} duration={2.5} />M+
                  </div>
                  <div className="text-[6px] md:text-[10px] text-gray-400">{t('about.hero.users')}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 md:gap-3 pl-2 md:pl-6">
                <div className="text-blue-500 opacity-80 p-0.5 md:p-2 border border-blue-500/30 rounded md:rounded-lg bg-blue-500/10">
                  <Package className="w-2 h-2 md:w-4 md:h-4" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xl font-bold text-white leading-tight">
                    <CountUp end={50} duration={2.5} />+
                  </div>
                  <div className="text-[6px] md:text-[10px] text-gray-400">{t('about.hero.products')}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-[45%] md:w-[50%] h-full relative flex items-center justify-center">

            {/* Static Globe Image Replacing 3D Canvas */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 flex justify-center items-center scale-[1.3] md:scale-[1.1] lg:scale-[1.2] xl:scale-[1.3] right-0 md:right-auto"
            >
              <img 
                src="/team/global.webp" 
                alt="Global Delight Digital Globe"
                className="w-full md:w-[500px] lg:w-[650px] xl:w-[750px] h-auto object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
