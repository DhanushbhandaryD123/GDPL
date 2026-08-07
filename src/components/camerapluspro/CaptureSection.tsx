import { motion } from 'motion/react';
import { Camera, Focus, Sliders, Zap } from 'lucide-react';

export function CaptureSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Independent Control for <span className="text-orange-500">Perfect Shots</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Camera Plus Pro gives you the freedom to separately lock focus, exposure, and white balance. Tap anywhere to focus, use a second finger to set exposure.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 relative">
          
          {/* Mockup with Animated Bubbles */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[3rem] border-[12px] border-gray-900 bg-black overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.3)] relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop" 
                alt="Capture Interface"
                className="w-full h-full object-cover"
              />
              
              {/* UI Overlay Simulation */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Focus Square */}
                <div className="absolute top-[30%] left-[20%] w-16 h-16 border-2 border-yellow-400 rounded-sm animate-pulse" />
                {/* Exposure Circle */}
                <div className="absolute top-[50%] right-[30%] w-16 h-16 border-2 border-orange-500 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Animated Pointers */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[25%] -left-12 md:-left-32 z-20 flex items-center"
            >
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                <p className="font-bold text-gray-900 text-sm">Focus Lock</p>
              </div>
              <div className="w-12 md:w-24 h-px bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-[55%] -right-12 md:-right-32 z-20 flex items-center flex-row-reverse"
            >
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                <p className="font-bold text-gray-900 text-sm">Exposure Lock</p>
              </div>
              <div className="w-12 md:w-24 h-px bg-orange-500" />
              <div className="w-2 h-2 rounded-full bg-orange-500" />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="w-full lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm">
                <Focus size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Macro & Point Focus</h3>
              <p className="text-gray-600 text-sm">Get incredibly close to your subject or let the app intelligently select the best focus point.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm">
                <Camera size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Burst Mode</h3>
              <p className="text-gray-600 text-sm">Capture fast-moving action by shooting a rapid succession of high-resolution photos.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm">
                <Sliders size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Live Filters</h3>
              <p className="text-gray-600 text-sm">Preview 18 carefully crafted vintage, artistic, and monochrome filters in real-time before you shoot.</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm">
                <Zap size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Time-Lapse Video</h3>
              <p className="text-gray-600 text-sm">Compress hours of recording into seconds with customizable intervals.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
