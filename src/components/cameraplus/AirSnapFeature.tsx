import { motion } from 'motion/react';
import { Smartphone, Tablet, Wifi, Bluetooth } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AirSnapFeature() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-r from-blue-100/50 via-indigo-100/50 to-purple-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Mockups */}
          <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[450px] md:h-[600px] flex justify-center items-center mb-16 lg:mb-0">
            
            {/* Connection Line & Glow */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute z-10 w-[70%] md:w-[80%] h-1 md:h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 blur-sm top-1/2 -translate-y-1/2 rounded-full"
            />
            
            <div className="absolute z-10 w-[70%] md:w-[80%] h-[2px] top-1/2 -translate-y-1/2 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1 }}
                className="w-full h-full bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 border-t border-dashed border-white/50 origin-left"
              />
              {/* Moving Signal Wave (Mobile Only) */}
              <motion.div
                animate={{ left: ['-30%', '130%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-white rounded-full blur-[1px] shadow-[0_0_8px_3px_rgba(255,255,255,0.8)] md:hidden"
              />
            </div>

            {/* iPad (Remote) */}
            <motion.div 
              initial={{ opacity: 0, x: -30, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute left-2 sm:left-[5%] md:left-[10%] z-20 w-[140px] sm:w-[220px] md:w-[300px] aspect-[3/4] bg-[#f8f9fa] rounded-2xl md:rounded-[2.5rem] border-4 md:border-8 border-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden hover:rotate-0 hover:scale-105 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-3 sm:p-4">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-2 sm:border-4 border-white/20 mb-4 sm:mb-6 flex items-center justify-center relative"
                >
                  <div className="w-8 h-8 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-14 sm:h-14 bg-red-500 rounded-full opacity-0" />
                  </div>
                  {/* Radar pulse effect */}
                  <div className="absolute inset-0 rounded-full border border-white/40 animate-ping" />
                </motion.div>
                <p className="text-white text-[8px] sm:text-xs font-bold tracking-[0.2em] uppercase text-center">{t('cameraplus.airsnap.remote_viewfinder')}</p>
                <div className="mt-4 sm:mt-12 flex gap-4 sm:gap-6 text-white/40">
                  <Wifi size={16} className="sm:w-8 sm:h-8" />
                  <Bluetooth size={16} className="sm:w-8 sm:h-8" />
                </div>
              </div>
            </motion.div>

            {/* iPhone (Camera) */}
            <motion.div 
              initial={{ opacity: 0, x: 30, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
              className="absolute right-2 sm:right-[5%] md:right-[5%] z-30 w-[100px] sm:w-[170px] md:w-[240px] aspect-[9/19.5] bg-gray-900 rounded-[1.5rem] md:rounded-[3rem] border-[4px] md:border-[8px] border-gray-800 shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden hover:rotate-0 hover:scale-105 transition-all duration-500"
            >
              <div className="absolute top-0 inset-x-0 h-4 md:h-8 bg-black z-10 flex justify-center rounded-b-xl md:rounded-b-3xl max-w-[50%] mx-auto" />
              <img 
                src="https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=600&auto=format&fit=crop" 
                alt="Group Photo Capture"
                className="w-full h-full object-cover opacity-90 scale-105"
              />
              {/* Camera UI Overlay */}
              <div className="absolute inset-0 border-[1px] border-white/20 m-1 md:m-2 rounded-[1.2rem] md:rounded-[2rem] pointer-events-none" />
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <div className="w-6 h-6 md:w-12 md:h-12 bg-white/90 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 z-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              
              
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#111827] mb-4 md:mb-6 tracking-tight leading-[1.1]">
                {t('cameraplus.airsnap.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t('cameraplus.airsnap.title_2')}</span>
              </h2>

              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
                {t('cameraplus.airsnap.subtitle')}
              </h3>

              <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
                {t('cameraplus.airsnap.description')}
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Tablet size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{t('cameraplus.airsnap.f1_title')}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{t('cameraplus.airsnap.f1_desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{t('cameraplus.airsnap.f2_title')}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{t('cameraplus.airsnap.f2_desc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
