import { motion } from 'motion/react';
import {
  Camera,
  Video,
  MonitorPlay,
  Type,
  Image as ImageIcon,
  Scissors,
  Edit3,
  Monitor,
  Share2
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FeaturesGrid() {
  const { t } = useTranslation();

  const features = [
    { title: t('captoWindows.features.f1_title'), description: t('captoWindows.features.f1_desc'), icon: Camera, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: t('captoWindows.features.f2_title'), description: t('captoWindows.features.f2_desc'), icon: Video, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { title: t('captoWindows.features.f3_title'), description: t('captoWindows.features.f3_desc'), icon: MonitorPlay, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: t('captoWindows.features.f4_title'), description: t('captoWindows.features.f4_desc'), icon: Type, color: 'text-pink-600', bg: 'bg-pink-100' },
    { title: t('captoWindows.features.f5_title'), description: t('captoWindows.features.f5_desc'), icon: ImageIcon, color: 'text-teal-600', bg: 'bg-teal-100' },
    { title: t('captoWindows.features.f6_title'), description: t('captoWindows.features.f6_desc'), icon: Scissors, color: 'text-orange-600', bg: 'bg-orange-100' },
    { title: t('captoWindows.features.f7_title'), description: t('captoWindows.features.f7_desc'), icon: Edit3, color: 'text-red-600', bg: 'bg-red-100' },
    { title: t('captoWindows.features.f8_title'), description: t('captoWindows.features.f8_desc'), icon: Monitor, color: 'text-cyan-600', bg: 'bg-cyan-100' },
    { title: t('captoWindows.features.f9_title'), description: t('captoWindows.features.f9_desc'), icon: Share2, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('captoWindows.features.title_1')} <span className="text-[#0078D7]">{t('captoWindows.features.title_2')}</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            {t('captoWindows.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.bg} ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
