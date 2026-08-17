import { motion } from 'motion/react';
import { MicOff, Music4, AudioWaveform, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DetailedFeatures() {
  const { t } = useTranslation();

  const features = [
    { title: t('audimix.detailed_features.f1_title'), description: t('audimix.detailed_features.f1_desc'), icon: AudioWaveform, accent: 'bg-indigo-50 text-indigo-600' },
    { title: t('audimix.detailed_features.f2_title'), description: t('audimix.detailed_features.f2_desc'), icon: MicOff, accent: 'bg-violet-50 text-violet-600' },
    { title: t('audimix.detailed_features.f3_title'), description: t('audimix.detailed_features.f3_desc'), icon: Music4, accent: 'bg-indigo-50 text-indigo-600' },
    { title: t('audimix.detailed_features.f4_title'), description: t('audimix.detailed_features.f4_desc'), icon: Clock, accent: 'bg-violet-50 text-violet-600' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('audimix.detailed_features.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{t('audimix.detailed_features.title_2')}</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Features List Left */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {features.slice(0, 2).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.accent} group-hover:scale-110 transition-transform`}>
                  <feature.icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Central photo centerpiece */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-200/50 to-violet-200/50 blur-2xl pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl aspect-[4/5] md:h-[560px] md:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1000&q=80&auto=format&fit=crop"
                  alt="Mixing console"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 via-indigo-950/5 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Features List Right */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {features.slice(2, 4).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.accent} group-hover:scale-110 transition-transform`}>
                  <feature.icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
