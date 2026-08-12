import { motion } from 'motion/react';
import { Scissors, MapPin, Type } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function EditingTranscription() {
  const { t } = useTranslation();

  const workflowSteps = [
    { title: t('audion.transcription.editing_title'), description: t('audion.transcription.editing_desc'), icon: Scissors, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: t('audion.transcription.markers_title'), description: t('audion.transcription.markers_desc'), icon: MapPin, color: 'text-green-500', bg: 'bg-green-50' },
    { title: t('audion.transcription.transcription_title'), description: t('audion.transcription.transcription_desc'), icon: Type, color: 'text-orange-500', bg: 'bg-orange-50' }
  ];

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
            {t('audion.transcription.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">{t('audion.transcription.title_2')}</span>
          </motion.h2>
          <p className="text-lg text-gray-500">
            {t('audion.transcription.subtitle')}
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
