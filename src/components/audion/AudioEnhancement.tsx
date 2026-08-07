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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Side: Interactive Visualizer Mockup */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] bg-gradient-to-br from-purple-500 via-[#1a1330] to-pink-600 border border-gray-100 shadow-2xl shadow-purple-200/60 overflow-hidden flex flex-col justify-center items-center p-8"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] rounded-full border border-white/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
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
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-lg shadow-black/20">
                    <activeData.icon size={48} className="text-purple-600" />
                  </div>

                  {/* Fake processing bar */}
                  <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-6">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-white"
                    />
                  </div>

                  <p className="text-white/90 font-mono text-sm uppercase tracking-widest">{activeData.visualText}</p>
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
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Audio Enhancement</span>
              </motion.h2>
              <p className="text-lg text-gray-500 mb-8">
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
                      ? 'bg-white border-purple-200 shadow-lg shadow-purple-100'
                      : 'bg-transparent border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-2 flex items-center gap-3 ${activeTab === item.id ? 'text-gray-900' : 'text-gray-500'}`}>
                    <item.icon size={24} className={activeTab === item.id ? 'text-purple-500' : 'text-gray-400'} />
                    {item.title}
                  </h3>
                  {activeTab === item.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-gray-500 mt-2 ml-9 leading-relaxed"
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
