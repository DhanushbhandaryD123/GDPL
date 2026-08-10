import { motion } from 'motion/react';
import { Scissors, MapPin, Type } from 'lucide-react';

const workflowSteps = [
  {
    title: 'Precision Editing',
    description: 'Effortlessly trim, cut, and merge audio clips. Our intuitive waveform editor lets you zoom in to make millisecond-accurate edits directly on your mobile device.',
    icon: Scissors,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Timestamp Markers',
    description: 'Drop markers during recording or playback to instantly jump back to important moments. Perfect for navigating long lectures, interviews, or meetings.',
    icon: MapPin,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  {
    title: 'Speech-to-Text Transcription',
    description: 'Convert your voice notes into text instantly. AudiOn supports highly accurate transcription, making it easy to search, copy, and share your spoken ideas.',
    icon: Type,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  }
];

export function EditingTranscription() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative border-t border-gray-100 overflow-hidden">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 opacity-40"
           style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">Post-Recording Workflow</span>
          </motion.h2>
          <p className="text-lg text-gray-500">
            AudiOn provides a full suite of editing tools so you never have to export to a desktop application to finalize your audio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${step.bg}`}>
                <step.icon size={32} className={step.color} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
