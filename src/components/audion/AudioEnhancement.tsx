import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EarOff, SkipForward, Sliders } from 'lucide-react';

const enhancements = [
  {
    id: 'noise',
    title: 'Noise Removal & Voice Isolation',
    icon: EarOff,
    description: 'Instantly remove background hum, wind, and chatter to make your voice the focal point.',
    visualText: 'Isolating Voice Profile...'
  },
  {
    id: 'silence',
    title: 'Skip Silence',
    icon: SkipForward,
    description: 'Automatically detect and skip silent pauses to save time when reviewing long recordings.',
    visualText: 'Detecting Dead Air...'
  },
  {
    id: 'eq',
    title: 'Reverb & Pro EQ',
    icon: Sliders,
    description: 'Apply professional room reverb effects and tune frequencies using our 6-band equalizer.',
    visualText: 'Applying Studio Room Reverb...'
  }
];

export function AudioEnhancement() {
  const [activeTab, setActiveTab] = useState(enhancements[0].id);

  const activeData = enhancements.find(e => e.id === activeTab) || enhancements[0];

  return (
    <section className="py-24 bg-[#030014] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Interactive Visualizer Mockup */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] bg-[#0a0526] border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-center items-center p-8"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] rounded-full border border-purple-500/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-pink-500/10 animate-[spin_15s_linear_infinite_reverse]" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-8 shadow-lg shadow-purple-500/40">
                    <activeData.icon size={48} className="text-white" />
                  </div>
                  
                  {/* Fake processing bar */}
                  <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                    />
                  </div>
                  
                  <p className="text-purple-300 font-mono text-sm uppercase tracking-widest">{activeData.visualText}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Audio Enhancement</span>
              </motion.h2>
              <p className="text-lg text-gray-400 mb-8">
                Clean up noisy environments and polish your recordings with one-tap intelligent processing tools.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {enhancements.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col text-left p-6 rounded-2xl border transition-all duration-300 ${
                    activeTab === item.id 
                      ? 'bg-[#0a0526] border-purple-500/50 shadow-lg' 
                      : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/5'
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-2 flex items-center gap-3 ${activeTab === item.id ? 'text-white' : 'text-gray-400'}`}>
                    <item.icon size={24} className={activeTab === item.id ? 'text-purple-400' : 'text-gray-500'} />
                    {item.title}
                  </h3>
                  {activeTab === item.id && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-gray-400 mt-2 ml-9 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
