import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative px-4 pt-2 pb-8 md:px-0 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#0078D7]/10 blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#0078D7]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0078D7] text-sm font-bold mb-8 border border-blue-100 shadow-sm">
            {t('captoWindows.hero.badge')}
          </div>

          <h1 className="text-base sm:text-xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            {t('captoWindows.hero.title_1')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D7] to-[#005a9e]">
              {t('captoWindows.hero.title_2')}
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('captoWindows.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto px-4 py-1.5 md:px-8 md:py-4 bg-[#0078D7] hover:bg-[#005a9e] text-white rounded-[2rem] md:rounded-xl font-bold text-[10px] sm:text-xs md:text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1"
            >
              <Download size={20} />
              {t('captoWindows.hero.download')}
            </a>
            <a 
              href="#"
              className="w-full sm:w-auto mt-4 sm:mt-0 transition-transform hover:scale-105"
            >
              {/* Fallback for Microsoft Store Badge */}
              <img 
                src="https://get.microsoft.com/images/en-us%20light.svg" 
                alt="Get it from Microsoft" 
                className="h-8 sm:h-10 md:h-[56px] w-auto border border-gray-200 rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-200 bg-white p-2 aspect-[4/3] sm:aspect-[16/9] md:aspect-auto">
            <div className="rounded-xl overflow-hidden bg-gray-100 h-full md:aspect-video relative flex items-center justify-center">
              <img 
                src="https://www.globaldelight.com/capto/windows/assets/banner_win-3591456d.png" 
                alt="Capto for Windows Interface"
                className="w-full h-full object-cover shadow-inner"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
