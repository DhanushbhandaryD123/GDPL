import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-4 pt-2 md:pt-4 pb-8 md:pb-12 bg-white">
      <section className="relative w-full rounded-3xl md:rounded-[2.5rem] shadow-xl pt-8 pb-8 md:pt-12 md:pb-12 bg-gray-50/50 border border-gray-100 flex items-center">
      {/* Dynamic Background Decor for Light Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl md:rounded-[2.5rem] z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-200/50 blur-[120px] opacity-70" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-200/50 blur-[120px] opacity-70" />
        <div className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-blue-200/40 blur-[120px] opacity-70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center mb-6 mx-auto lg:mx-0 justify-center lg:justify-start">
              <img 
                src="/Audio/audion-logo.png" 
                alt="AudiOn Logo" 
                className="h-14 md:h-20 w-auto object-contain drop-shadow-sm"
              />
            </div>
            
            <h1 className="text-base sm:text-xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Enhance your audio recordings with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                AudiOn
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
              The cutting-edge voice recorder app designed for professionals, students, and creators. Experience studio-quality recording, editing, and transcription right in your pocket.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
              <a
                href="#"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="/Audio/storeCTA2.png"
                  alt="Download on the App Store"
                  className="h-8 sm:h-10 md:h-[50px] w-auto"
                />
              </a>
              <a
                href="#"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="/Audio/playstoreCTA.png"
                  alt="Get it on Google Play"
                  className="h-8 sm:h-10 md:h-[50px] w-auto"
                />
              </a>
            </div>
          </motion.div>

          {/* Hero Image / Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center relative mt-6 lg:mt-0"
          >
            <div className="relative w-[180px] md:w-[220px] lg:w-[240px] aspect-[9/19.5] rounded-[2rem] md:rounded-[2.5rem] border-[8px] md:border-[10px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl shadow-purple-200/60">
              {/* Dynamic waveform simulation on phone screen */}
              <div className="absolute inset-0 flex flex-col items-center pt-12 pb-8 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a1a]">
                <div className="w-full flex justify-between items-center mb-8">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" /></div>
                  <span className="text-white font-mono text-xl">00:14:59</span>
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>

                <div className="flex-1 w-full flex items-center justify-center gap-1">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: ['20%', '80%', '20%'] }}
                      transition={{
                        duration: 1 + Math.random(),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random()
                      }}
                      className="w-2 rounded-full bg-gradient-to-t from-purple-500 to-pink-500"
                    />
                  ))}
                </div>

                <div className="w-20 h-20 mt-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <div className="w-8 h-8 bg-red-500 rounded-sm" />
                </div>
              </div>
            </div>

           
          </motion.div>
        </div>
      </div>
      </section>
    </div>
  );
}
