import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#050507] flex items-center">
      {/* Dynamic Background Decor for Dark Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[120px] opacity-70" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] opacity-70" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              New Release for Windows
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Music separation <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                made easy.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              AuDimix is the ultimate vocal isolation and extraction tool. 
              Isolate vocals, extract instruments, and create your own mix with professional quality.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105"
              >
                <Download size={20} />
                Download Free Trial
              </a>
              <a 
                href="#"
                className="w-full sm:w-auto mt-4 sm:mt-0 opacity-90 hover:opacity-100 transition-opacity"
              >
                {/* Fallback image for Microsoft store badge */}
                <img 
                  src="https://get.microsoft.com/images/en-us%20dark.svg" 
                  alt="Get it from Microsoft" 
                  className="h-[56px] w-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </a>
            </div>
          </motion.div>

          {/* Hero Image Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl shadow-purple-900/20">
              <img 
                src="https://www.globaldelight.com/AuDimix/assets/AudimixBanner-Bg-90f77b78.png" 
                alt="AuDimix Interface"
                className="w-full h-auto rounded-xl shadow-inner"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
