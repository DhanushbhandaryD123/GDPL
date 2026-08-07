import { motion } from 'motion/react';
import { MicOff, Music4, AudioWaveform, Clock } from 'lucide-react';
import ReactPlayer from 'react-player/lazy';

const features = [
  {
    title: 'Create Your Own Mix',
    description: 'Adjust the volume of individual stems like drums, bass, and vocals to create a custom mix of any song.',
    icon: AudioWaveform,
  },
  {
    title: 'Vocal Remover',
    description: 'Instantly strip away vocals to create high-quality instrumental backing tracks for karaoke or practice.',
    icon: MicOff,
  },
  {
    title: 'Change your Pitch',
    description: 'Shift the key of the song up or down without affecting the tempo to match your vocal range perfectly.',
    icon: Music4,
  },
  {
    title: 'Adjust your Tempo',
    description: 'Speed up or slow down the track without changing its pitch, perfect for practicing difficult sections.',
    icon: Clock,
  },
];

export function DetailedFeatures() {
  return (
    <section className="py-24 bg-[#0a0a0f] border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Powerful tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">total control</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Features List Left */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {features.slice(0, 2).map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111118] p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors group"
              >
                <feature.icon className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Central Video */}
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111118] p-2 shadow-2xl shadow-purple-900/20 aspect-[9/16] md:aspect-auto md:h-[600px]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-black flex items-center justify-center">
                {/* Fallback to image if video fails or is unavailable */}
                <ReactPlayer 
                  url="https://www.globaldelight.com/AuDimix/assets/audimix-demo.mp4" 
                  playing 
                  loop 
                  muted 
                  playsinline
                  width="100%" 
                  height="100%"
                  className="absolute top-0 left-0 object-cover"
                  fallback={
                    <img src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=1000&auto=format&fit=crop" alt="Demo" className="w-full h-full object-cover" />
                  }
                />
              </div>
            </motion.div>
          </div>

          {/* Features List Right */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {features.slice(2, 4).map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111118] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group"
              >
                <feature.icon className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
