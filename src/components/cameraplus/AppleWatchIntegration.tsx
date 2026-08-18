import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const watchImages = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534360699709-3286f0d7e63f?q=80&w=400&auto=format&fit=crop"
];

export function AppleWatchIntegration() {
  const { t } = useTranslation();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % watchImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <div className="bg-gradient-to-br from-[#00B4B4]/5 via-[#F0FDFD] to-[#E0F6F6]/50 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row items-center gap-12 lg:gap-24 p-8 md:p-16 lg:p-20 border border-[#00B4B4]/10 shadow-[0_20px_40px_rgba(0,180,180,0.05)] relative">
      
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B4B4]/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[60px]" />

          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
             

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


              {/* Apple Watch Mockup */}
              <div className="relative flex flex-col items-center">

                {/* Top Band (tapered, seamless into case) */}
                <div
                  className="w-[112px] sm:w-[136px] h-[64px] sm:h-[76px] bg-gradient-to-b from-[#e9e9ee] to-[#c7c7cc] shadow-inner"
                  style={{ clipPath: 'polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)' }}
                />

                {/* Case */}
                <div className="relative -mt-2 w-[200px] sm:w-[240px] h-[240px] sm:h-[280px] bg-[#1c1c1e] rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_30px_50px_rgba(0,0,0,0.25)] z-10 p-1.5 sm:p-2 flex items-center justify-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer group">

                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative flex flex-col justify-between p-2">
                    
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImgIndex}
                        src={watchImages[currentImgIndex]}
                        alt={`Watch Live Preview ${currentImgIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      />
                    </AnimatePresence>

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
                  <div className="absolute top-[22%] -right-[3px] w-2.5 h-9 sm:h-11 bg-gradient-to-r from-[#d1d1d6] to-[#8e8e93] rounded-r-md shadow-sm z-0" />
                  {/* Side Button */}
                  <div className="absolute bottom-[24%] -right-[2px] w-1.5 h-11 sm:h-14 bg-gradient-to-r from-[#c7c7cc] to-[#8e8e93] rounded-r-md z-0" />
                </div>

                {/* Bottom Band (tapered, seamless into case) */}
                <div
                  className="-mt-2 w-[112px] sm:w-[136px] h-[80px] sm:h-[96px] bg-gradient-to-t from-[#e9e9ee] to-[#c7c7cc] shadow-inner"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 82% 100%, 18% 100%)' }}
                />

              </div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
