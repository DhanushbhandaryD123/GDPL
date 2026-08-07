import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic2, Music, Headphones } from 'lucide-react';

const useCases = [
  {
    id: 'musicians',
    title: 'Musicians',
    icon: Mic2,
    description: 'Perfect for singers and instrumentalists. Isolate the vocals from any track to practice your singing, or remove the guitar track to play along with your favorite band.',
    image: 'https://images.unsplash.com/photo-1516280440502-86105c2a13cc?q=80&w=2000&auto=format&fit=crop',
    color: 'text-purple-400'
  },
  {
    id: 'djs',
    title: 'DJs',
    icon: Music,
    description: 'Create unique mashups and remixes. Extract clean acapellas and instrumentals from mixed tracks to elevate your live sets and productions.',
    image: 'https://images.unsplash.com/photo-1571266028243-cb40fce75727?q=80&w=2000&auto=format&fit=crop',
    color: 'text-blue-400'
  },
  {
    id: 'producers',
    title: 'Producers',
    icon: Headphones,
    description: 'Sample with precision. Isolate individual stems like drums, bass, or synths from stereo files to use in your own beats and compositions.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop',
    color: 'text-pink-400'
  }
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  const activeUseCase = useCases.find(uc => uc.id === activeTab) || useCases[0];

  return (
    <section className="py-24 bg-[#050507] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Audio separation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">any use</span>
          </h2>
          <p className="text-lg text-gray-400">
            Whether you are practicing, performing, or producing, AuDimix provides the stems you need.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Tabs Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                  activeTab === uc.id 
                    ? 'bg-[#111118] border border-white/10 shadow-lg shadow-purple-900/10' 
                    : 'bg-transparent border border-transparent hover:border-white/5 hover:bg-white/5'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${
                  activeTab === uc.id ? 'bg-white/10' : 'bg-transparent'
                }`}>
                  <uc.icon size={28} className={activeTab === uc.id ? uc.color : 'text-gray-500'} />
                </div>
                <div>
                  <h3 className={`font-bold text-xl ${activeTab === uc.id ? 'text-white' : 'text-gray-500'}`}>
                    {uc.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-2/3">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#0a0a0f] border border-white/5 shadow-2xl min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeUseCase.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col md:flex-row h-full"
                >
                  <div className="h-64 md:h-full w-full md:w-1/2 relative">
                    <img 
                      src={activeUseCase.image} 
                      alt={activeUseCase.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                  </div>
                  
                  <div className="p-8 md:p-12 flex-1 flex flex-col justify-center bg-[#0a0a0f] relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                      <activeUseCase.icon className={activeUseCase.color} size={32} />
                      {activeUseCase.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {activeUseCase.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
