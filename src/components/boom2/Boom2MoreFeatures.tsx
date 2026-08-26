import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SlidersHorizontal, Activity, Sliders, Maximize2 } from 'lucide-react';

export function Boom2MoreFeatures() {
  const { t } = useTranslation();

  // Same icons as the corresponding chips in Boom2FeaturesBanner, so the
  // teaser strip and this detail section read as the same feature.
  const features = [
    { id: 'equalizer', icon: SlidersHorizontal },
    { id: 'sample_rate', icon: Activity },
    { id: 'balancer', icon: Sliders },
    { id: 'stereo', icon: Maximize2 },
  ];

  return (
    <section className="py-16 md:py-24 px-4 max-w-[1400px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 text-[#0a0a0f] tracking-tight leading-tight">
          {t('boom2.more_features.title')}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">
          {t('boom2.more_features.subtitle')}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="rounded-3xl p-6 bg-[#F8F9FA] border border-gray-200 hover:border-[#4F46E5]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center mb-5">
                <Icon size={24} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0a0a0f]">
                {t(`boom2.more_features.${feature.id}_title`)}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {t(`boom2.more_features.${feature.id}_desc`)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
