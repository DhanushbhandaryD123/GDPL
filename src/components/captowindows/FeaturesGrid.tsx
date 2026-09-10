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
    <section className="py-10 md:py-14 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight"
          >
            {t('captoWindows.features.title_1')} <span className="text-[#0078D7]">{t('captoWindows.features.title_2')}</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            {t('captoWindows.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-5 border border-gray-100/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${feature.bg} ${feature.color} mb-3.5 group-hover:scale-105 transition-transform`}>
                <feature.icon size={20} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
