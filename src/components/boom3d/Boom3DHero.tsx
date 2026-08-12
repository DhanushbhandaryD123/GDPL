import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Boom3DHero() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-4 pt-2 md:pt-4 pb-8 md:pb-12">
      <section
        className="relative w-full rounded-3xl md:rounded-[2.5rem] shadow-2xl aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:min-h-[800px] lg:min-h-[85vh] flex items-center pt-12 md:pt-20 pb-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/boom3D/boom3d-hero.png")' }}
      >
      {/* Overlay to ensure text readability if needed (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-start">

          {/* Text Content - Aligned Left */}
          <div className="w-full lg:w-1/2 text-left space-y-6 mt-16 md:mt-0">

            {/* Boom 3D Logo */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <img src="/boom3D/boomLogo3D.png" alt="Boom 3D Logo" className="h-16 md:h-20 w-auto object-contain" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-xl md:text-7xl font-bold leading-[1.05] tracking-tighter text-white"
            >
              {t('boom3d.hero.title_1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {t('boom3d.hero.title_2')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xs sm:text-sm md:text-xl text-gray-200 max-w-[600px] leading-relaxed font-medium"
            >
              {t('boom3d.hero.subtitle')}
            </motion.p>




          </div>

        </div>
      </div>
      </section>
    </div>
  );
}
