import { motion } from 'motion/react';
import { Mic } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#030014] flex items-center">
      {/* Dynamic Background Audio Wave Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none flex justify-center items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/20 blur-[150px] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[150px] opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-medium mb-6">
              <Mic size={16} className="animate-pulse text-purple-500" />
              Voice Recorder for Android & iOS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Enhance your audio recordings with <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AudiOn
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              The cutting-edge voice recorder app designed for professionals, students, and creators. Experience studio-quality recording, editing, and transcription right in your pocket.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
              <a 
                href="#"
                className="transition-transform hover:scale-105"
              >
                {/* Fallback image for App Store badge */}
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-[50px] w-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </a>
              <a 
                href="#"
                className="transition-transform hover:scale-105"
              >
                {/* Fallback image for Google Play badge */}
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-[50px] w-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </a>
            </div>
          </motion.div>

          {/* Hero Image / Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[3rem] border-[12px] border-[#1a1a2e] bg-[#030014] overflow-hidden shadow-2xl shadow-purple-900/50">
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
  );
}
