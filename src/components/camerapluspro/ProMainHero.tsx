import { motion } from 'motion/react';
import { Aperture, ArrowRight, Star } from 'lucide-react';

export function ProMainHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16">
      {/* Premium Light Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-50 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="container max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
           

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-6"
            >
              Master Your <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Photography.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 mb-10 max-w-[500px] leading-relaxed"
            >
              Experience unprecedented control with DSLR-like features, advanced macro focus, and powerful editing tools directly on your iPhone.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-gray-900/20 group">
                Download Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
             
            </motion.div>
          </div>

          {/* Right Content - Visuals */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative w-[320px] sm:w-[450px] lg:w-[550px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.1)] bg-gray-100 border-8 border-white group"
            >
              {/* Main Premium Photography Image */}
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional Camera Lens" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
