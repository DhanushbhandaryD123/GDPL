import { motion } from 'motion/react';
import { SlidersHorizontal, Sparkles, Monitor, FileAudio, Smartphone, Headphones, Activity, Sliders, Maximize2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom2FeaturesBanner() {
  const { t } = useTranslation();
  const features = [
    { icon: <SlidersHorizontal size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.eq') },
    { icon: <Sparkles size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.effects') },
    { icon: <Monitor size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.system_wide') },
    { icon: <FileAudio size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.file_boost') },
    { icon: <Smartphone size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.remote') },
    { icon: <Headphones size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.output') },
    { icon: <Activity size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.sample_rate') },
    { icon: <Sliders size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.balancer') },
    { icon: <Maximize2 size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: t('boom2.features_banner.stereo') },
  ];

  return (
    <div className="relative z-20 max-w-[1400px] mx-auto px-4 -mt-8 md:-mt-16">
      <div className="bg-white/95 backdrop-blur-2xl border border-gray-200/60 rounded-[2.5rem] shadow-xl shadow-gray-200/50 py-6 px-6 md:px-12 flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:flex-wrap justify-start md:justify-between items-start md:items-center gap-8 md:gap-6 snap-x snap-mandatory">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center text-center shrink-0 w-20 md:w-auto md:flex-1 snap-start md:snap-align-none"
          >
            {feature.icon}
            <span className="text-gray-800 font-bold text-[11px] md:text-sm whitespace-pre-line leading-snug">
              {feature.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
