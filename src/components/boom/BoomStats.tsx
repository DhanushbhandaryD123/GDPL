import { motion } from 'motion/react';
import { Download, Globe, Star, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BoomStats() {
  const { t } = useTranslation();

  const stats = [
    { icon: Download, value: '10M+', label: t('boom.stats.downloads') },
    { icon: Globe, value: '150+', label: t('boom.stats.countries') },
    { icon: Star, value: '4.8/5', label: t('boom.stats.rating') },
    { icon: Award, value: '12+', label: t('boom.stats.awards') },
  ];

  return (
    <section className="relative bg-white pb-16 md:pb-28">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative rounded-[2rem] bg-[#05040f] px-8 md:px-16 py-14 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#2a1a6b_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_left,_#7c1a5c_0%,_transparent_60%)]" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{s.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
