import { motion } from 'motion/react';
import { Cloud, Radio, Music, FolderOpen, Headphones } from 'lucide-react';

const integrations = [
  {
    title: 'Dropbox & Google Drive',
    description: 'Stream all your personal music stored in the cloud with Boom effects.',
    icon: Cloud,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    hoverBorder: 'hover:border-blue-300'
  },
  {
    title: 'Internet Radio',
    description: 'Access 20k+ internet radio stations across 120 countries.',
    icon: Radio,
    color: 'text-green-500',
    bg: 'bg-green-50',
    border: 'border-green-100',
    hoverBorder: 'hover:border-green-300'
  },
  {
    title: 'Podcasts',
    description: 'Listen to thousands of podcasts with enhanced vocal clarity.',
    icon: Headphones,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    hoverBorder: 'hover:border-orange-300'
  },
  {
    title: 'Tidal',
    description: 'Experience high-fidelity streaming like never before.',
    icon: Music,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    hoverBorder: 'hover:border-cyan-300'
  },
  {
    title: 'Local Library',
    description: 'Play all your downloaded tracks with 3D Surround Sound.',
    icon: FolderOpen,
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
    hoverBorder: 'hover:border-pink-300'
  }
];

export function DiscoverSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-blue-50 to-purple-50 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight"
          >
            Discover your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Music Universe</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 font-medium"
          >
            Boom seamlessly integrates with your favorite platforms so you can enjoy enhanced audio everywhere.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white/60 backdrop-blur-md border ${item.border} ${item.hoverBorder} rounded-[2rem] p-8 md:p-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 group`}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={item.color} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
