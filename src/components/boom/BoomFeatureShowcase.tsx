import { motion } from 'motion/react';
import { Sparkles, SlidersHorizontal, Volume2, AppWindow } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    tag: 'Immersive Audio',
    title: 'Magical 3D Surround Sound',
    description:
      "Feel movies, games and music come alive with a virtual surround sound effect that works on any headphones or speakers — no expensive gear required.",
    image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    icon: SlidersHorizontal,
    tag: 'Fine Tuned',
    title: '31-Band Precision Equalizer',
    description:
      'Shape every frequency exactly how you like it with studio-grade EQ presets, or build your own from scratch and save it for later.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Volume2,
    tag: 'Louder & Clearer',
    title: 'Smart Volume Booster',
    description:
      'Push far past 100% without distortion. Boom intelligently amplifies your audio so quiet laptop speakers finally sound full.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    icon: AppWindow,
    tag: 'Total Control',
    title: 'Per-App Audio Control',
    description:
      'Set independent volume and EQ profiles for every app — keep Spotify booming while Slack stays polite in the background.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-amber-500 to-orange-500',
  },
];

export function BoomFeatureShowcase() {
  return (
    <section id="showcase" className="relative bg-white py-16 md:py-28 overflow-hidden">
      <div className="absolute top-[10%] left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-[120px] translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase">Why Boom</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">
            Every feature, engineered to move you
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-28">
          {features.map((f, idx) => {
            const Icon = f.icon;
            const reversed = idx % 2 === 1;
            return (
              <div
                key={f.title}
                className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className="relative w-full md:w-1/2"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] aspect-[4/3]">
                    <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${f.accent} opacity-20 mix-blend-multiply`} />
                  </div>
                  {/* Floating icon badge */}
                  <div className={`absolute -bottom-6 ${reversed ? 'right-6 md:-right-6 md:left-auto' : 'left-6 md:-left-6'} w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${f.accent} shadow-xl flex items-center justify-center z-10`}>
                    <Icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="w-full md:w-1/2"
                >
                  <span className={`text-[11px] font-bold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r ${f.accent}`}>
                    {f.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mt-3 mb-5 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    {f.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
