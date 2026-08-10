import { motion } from 'motion/react';
import { Camera, Zap } from 'lucide-react';

export function HeroBanner() {
  return (
    <section className="relative pt-6 pb-12 md:pt-12 lg:pb-16 overflow-hidden bg-white">
      {/* Background Decorative Gradient & Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00B4B4]/10 via-[#F0FDFD]/30 to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#00B4B4]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-20"
          >
            
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#111827] tracking-tight leading-[1.05] mb-6 drop-shadow-sm mt-0 md:mt-4">
              Capture more.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4B4] to-[#009b9b]">Create</span> more.
            </h1>
            
            {/* Subhead */}
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-12 max-w-[480px] leading-relaxed">
              Camera Plus gives you powerful tools, stunning filters, and advanced controls to take your photography to the next level.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full justify-center lg:justify-start">
              <a href="#" className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00B4B4]/20 rounded-xl overflow-hidden flex justify-center">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-10 sm:h-14 md:h-[60px] w-auto"
                />
              </a>
              <a href="#" className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00B4B4]/20 rounded-xl overflow-hidden flex justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-10 sm:h-14 md:h-[60px] w-auto"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[55%] flex justify-center relative mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[700px] rounded-3xl md:rounded-[40px] flex items-center justify-center">
              <img 
                src="/cameraplus/hero.png" 
                alt="Camera Plus App Interface" 
                className="w-full h-auto object-contain mx-auto z-20"
              />    
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

