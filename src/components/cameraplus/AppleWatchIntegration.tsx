import { motion } from 'motion/react';
import { Camera, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AppleWatchIntegration() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <div className="bg-gradient-to-br from-[#00B4B4]/5 via-[#F0FDFD] to-[#E0F6F6]/50 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row items-center gap-12 lg:gap-24 p-8 md:p-16 lg:p-20 border border-[#00B4B4]/10 shadow-[0_20px_40px_rgba(0,180,180,0.05)] relative">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B4B4]/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[60px]" />

          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00B4B4]/20 text-[#00B4B4] font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
                {t('cameraplus.apple_watch.badge')}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-[#111827] leading-[1.1] mb-6 tracking-tight">
                {t('cameraplus.apple_watch.title_1')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4B4] to-[#009b9b]">{t('cameraplus.apple_watch.title_2')}</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-sm leading-relaxed">
                {t('cameraplus.apple_watch.subtitle')}
              </p>

              <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-[#111827] hover:bg-black text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30 hover:-translate-y-1 group">
                {t('cameraplus.apple_watch.learn_more')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Mockup */}
          <div className="w-full md:w-1/2 flex justify-center relative min-h-[300px] sm:min-h-[380px] z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[280px] sm:max-w-none flex justify-center scale-90 sm:scale-100" // Scaling on very small screens to prevent clipping
            >
              {/* Floating Camera Icon */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[40%] -left-8 sm:-left-12 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,180,180,0.15)] border border-white/50 z-20 backdrop-blur-md"
              >
                <Camera className="w-7 h-7 text-[#00B4B4]" strokeWidth={2} />
              </motion.div>

              {/* Apple Watch Mockup Frame */}
              <div className="relative w-[200px] sm:w-[240px] h-[240px] sm:h-[280px] bg-[#E8E8ED] rounded-[2.5rem] sm:rounded-[3rem] border-[3px] border-[#D1D1D6] shadow-[0_30px_50px_rgba(0,0,0,0.2)] z-10 p-1.5 sm:p-2 flex flex-col items-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer group">
                
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative border-4 border-black p-2 flex flex-col justify-between">
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop" 
                    alt="Watch Live Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Top Bar */}
                  <div className="relative z-10 flex justify-between w-full pt-1 px-2">
                    <span className="text-[#00B4B4] text-[10px] font-bold">Camera Plus</span>
                    <span className="text-white text-[10px] font-bold">10:09</span>
                  </div>
                  
                  {/* Shutter Button */}
                  <div className="relative z-10 self-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full border-[2px] border-white/80 flex items-center justify-center backdrop-blur-sm bg-black/20">
                      <div className="w-9 h-9 bg-[#00B4B4] rounded-full opacity-90 shadow-[0_0_15px_rgba(0,180,180,0.6)]" />
                    </div>
                  </div>
                </div>

                {/* Digital Crown */}
                <div className="absolute top-[25%] -right-[9px] w-2 h-10 sm:h-12 bg-gradient-to-r from-[#C7C7CC] to-[#A0A0A5] rounded-r-md border-y border-[#B0B0B5] shadow-sm z-0" />
                {/* Side Button */}
                <div className="absolute bottom-[25%] -right-[7px] w-1 h-12 sm:h-14 bg-gradient-to-r from-[#D1D1D6] to-[#C7C7CC] rounded-r-md z-0" />
              </div>
              
              {/* Watch Bands */}
              <div className="absolute -top-[60px] sm:-top-[80px] left-1/2 -translate-x-1/2 w-[120px] sm:w-[150px] h-[60px] sm:h-[80px] bg-gradient-to-b from-[#f8f9fa] to-[#E8E8ED] rounded-t-[2rem] sm:rounded-t-[3rem] -z-10 shadow-inner" />
              <div className="absolute -bottom-[60px] sm:-bottom-[80px] left-1/2 -translate-x-1/2 w-[120px] sm:w-[150px] h-[60px] sm:h-[80px] bg-gradient-to-t from-[#f8f9fa] to-[#E8E8ED] rounded-b-[2rem] sm:rounded-b-[3rem] -z-10 shadow-inner" />
              
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
