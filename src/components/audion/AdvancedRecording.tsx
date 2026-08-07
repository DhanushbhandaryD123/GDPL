import { motion } from 'motion/react';
import { Settings2, FastForward, Mic2, FileText } from 'lucide-react';

const features = [
  {
    title: 'Lossless Audio Recording',
    description: 'Capture every nuance with uncompressed, studio-quality WAV recording formats designed for professionals.',
    icon: Mic2,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    title: 'Microphone Sensitivity Boost',
    description: 'Amplify your device’s built-in microphone up to 200% to capture quiet speakers or distant sounds clearly.',
    icon: Settings2,
    color: 'text-pink-500',
    bg: 'bg-pink-50'
  },
  {
    title: 'Real-time Customization',
    description: 'Adjust pitch and playback speed on the fly without affecting the original recording quality.',
    icon: FastForward,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Built-in Teleprompter',
    description: 'Read your scripts flawlessly while recording. Our floating teleprompter scrolls your text at your preferred speed.',
    icon: FileText,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  }
];

export function AdvancedRecording() {
  return (
    <section className="py-24 bg-gray-50 relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Recording</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            AudiOn pushes the hardware limits of your smartphone, giving you unprecedented control over how you capture sound.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all group flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
