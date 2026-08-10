import { motion } from 'motion/react';

export function HeroBanner() {
  return (
    <section className="relative pt-2 pb-8 md:pt-16 lg:pb-12 overflow-visible bg-white">
      {/* Background Decorative Lines */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-no-repeat bg-contain opacity-20 pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M300,100 C350,200 200,300 100,350' stroke='%2300B4B4' stroke-width='1' fill='none' stroke-dasharray='4,4'/%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left pt-10"
          >
            
            
            {/* Headline */}
            <h1 className="text-base sm:text-xl md:text-5xl lg:text-[64px] font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
              Capture more.<br />
              <span className="text-[#00B4B4]">Create</span> more.
            </h1>
            
            {/* Subhead */}
            <p className="text-xs sm:text-sm md:text-lg text-gray-500 mb-10 max-w-[420px] leading-relaxed">
              Camera Plus gives you powerful tools, stunning filters and advanced controls to take your photography to the next level.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <a href="#" className="transition-transform hover:scale-105 hover:opacity-90">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-8 sm:h-10 md:h-[80px] lg:h-[98px] w-auto"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105 hover:opacity-90">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-8 sm:h-10 md:h-[80px] lg:h-[98px] w-auto"
                />
              </a>
            </div>

          </motion.div>

          {/* Right Side: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="w-full lg:w-[55%] flex justify-center lg:justify-start relative mt-16 lg:mt-0 lg:pl-10"
          >
            <div className="relative w-full max-w-[600px] rounded-3xl aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:rounded-none overflow-hidden md:overflow-visible flex flex-col justify-end bg-black md:bg-transparent">
              <img 
                src="/cameraplus/hero.png" 
                alt="Camera Plus App Interface" 
                className="absolute inset-0 md:static w-full h-full md:h-auto object-cover md:object-contain drop-shadow-2xl origin-top lg:origin-top-right z-20"
                style={{ top: '20px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
