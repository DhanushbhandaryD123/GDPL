import { motion } from 'motion/react';
import { Import, Sliders, HardDriveDownload } from 'lucide-react';

const steps = [
  {
    id: 'import',
    title: 'Import',
    description: 'Easily bring in your favorite tracks in MP3 or WAV formats to begin the separation process.',
    icon: Import,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'adjust',
    title: 'Change Levels',
    description: 'Use the intuitive sliders to isolate vocals, drums, bass, or instruments with precision.',
    icon: Sliders,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'export',
    title: 'Export',
    description: 'Save your newly created mix or isolated stems directly to your device in high quality.',
    icon: HardDriveDownload,
    color: 'from-orange-500 to-red-500',
  },
];

export function FeaturesOverview() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Create your mix in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">3 simple steps</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            AuDimix uses advanced AI algorithms to separate any song into its core components, 
            giving you the freedom to create what you want, instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-white/10 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-full bg-[#111118] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group-hover:border-white/20 transition-all duration-300`}>
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${step.color} group-hover:opacity-40 transition-opacity`} />
                <step.icon size={36} className="text-white relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
