import { motion } from 'motion/react';
import { MonitorPlay, Type, Layers, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const floatingIcons = [
  { Icon: MonitorPlay, pos: 'top-[6%] left-[4%] md:-left-6', color: 'text-[#0078D7]', delay: 0 },
  { Icon: Type, pos: 'top-[38%] -right-3 md:-right-6', color: 'text-indigo-500', delay: 0.5 },
  { Icon: Layers, pos: 'bottom-[8%] left-[10%] md:left-[2%]', color: 'text-pink-500', delay: 1 },
];

export function Showcase() {
  const { t } = useTranslation();

  const badges = [
    t('captoWindows.showcase.badge_1'),
    t('captoWindows.showcase.badge_2'),
    t('captoWindows.showcase.badge_3'),
  ];

  return (
    <section className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0078D7]/10 via-indigo-100/30 to-transparent blur-xl pointer-events-none" />

            {floatingIcons.map(({ Icon, pos, color, delay }, i) => (
              <motion.div
                key={i}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay }}
                className={`hidden md:flex absolute ${pos} z-20 w-10 h-10 rounded-xl bg-white items-center justify-center shadow-md border border-gray-100`}
              >
                <Icon className={color} size={18} strokeWidth={2} />
              </motion.div>
            ))}

            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/11]">
              <img
                src="/images/external/img_314b59f4b41f.jpg"
                alt="Creator workflow on Windows"
                className="w-full h-full object-cover" width={1400} height={932} loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              {t('captoWindows.showcase.title_1')} <span className="text-[#0078D7]">{t('captoWindows.showcase.title_2')}</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed max-w-md">
              {t('captoWindows.showcase.subtitle')}
            </p>

            <div className="flex flex-col gap-2.5">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0078D7]/10 text-[#0078D7] flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
