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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#0078D7]/10 via-indigo-100/40 to-transparent blur-2xl pointer-events-none" />

            {floatingIcons.map(({ Icon, pos, color, delay }, i) => (
              <motion.div
                key={i}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay }}
                className={`hidden md:flex absolute ${pos} z-20 w-14 h-14 rounded-2xl bg-white items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-gray-100`}
              >
                <Icon className={color} size={24} strokeWidth={2} />
              </motion.div>
            ))}

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&auto=format&fit=crop"
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('captoWindows.showcase.title_1')} <span className="text-[#0078D7]">{t('captoWindows.showcase.title_2')}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t('captoWindows.showcase.subtitle')}
            </p>

            <div className="flex flex-col gap-4">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0078D7]/10 text-[#0078D7] flex items-center justify-center shrink-0">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-gray-900">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
