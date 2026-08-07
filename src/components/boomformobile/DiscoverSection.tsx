import { motion } from 'motion/react';
import { Cloud, Radio, Music, FolderOpen, Headphones } from 'lucide-react';

const integrations = [
  {
    title: 'Dropbox & Google Drive',
    description: 'Stream all your personal music stored in the cloud with Boom effects.',
    icon: Cloud,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Internet Radio',
    description: 'Access 20k+ internet radio stations across 120 countries.',
    icon: Radio,
    color: 'text-green-400',
    bg: 'bg-green-500/10'
  },
  {
    title: 'Podcasts',
    description: 'Listen to thousands of podcasts with enhanced vocal clarity.',
    icon: Headphones,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10'
  },
  {
    title: 'Tidal',
    description: 'Experience high-fidelity streaming like never before.',
    icon: Music,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10'
  },
  {
    title: 'Local Library',
    description: 'Play all your downloaded tracks with 3D Surround Sound.',
    icon: FolderOpen,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10'
  }
];

export function DiscoverSection() {
  return (
    <section className="py-24 bg-[#060814] relative border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-blue-900/10 to-purple-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Discover your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Music Universe</span>
          </motion.h2>
          <p className="text-lg text-gray-400">
            Boom seamlessly integrates with your favorite platforms so you can enjoy enhanced audio everywhere.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#111118]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
