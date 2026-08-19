import { motion } from 'motion/react';
import { Download, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative px-4 pt-12 pb-8 md:px-8 md:pt-20 md:pb-12 overflow-hidden bg-white flex items-center">
      {/* Dynamic Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-300/40 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-indigo-300/30 blur-[150px]"
        />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left"
          >
           

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              {t('captoWindows.hero.title_1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                {t('captoWindows.hero.title_2')}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
              {t('captoWindows.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                <Download size={22} className="group-hover:animate-bounce" />
                {t('captoWindows.hero.download')}
              </a>

              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-sm hover:-translate-y-1"
              >
                <Monitor size={22} />
                Learn More
              </a>
            </div>

           
          </motion.div>

          {/* Right Image/Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[350px] flex items-center justify-center perspective-1000"
          >
            {/* Main Mockup Container */}
            <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white transform transition-transform duration-500 hover:rotate-y-0 group z-10">
              <img
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=2000&q=80&auto=format&fit=crop"
                alt="Capto for Windows Dashboard"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
