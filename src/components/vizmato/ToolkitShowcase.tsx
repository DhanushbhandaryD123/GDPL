import { motion } from 'motion/react';
import { Palette, Zap, Timer, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const floatingIcons = [
  { Icon: Palette, pos: 'top-[8%] left-[4%] md:-left-6', delay: 0 },
  { Icon: Zap, pos: 'top-[42%] -right-3 md:-right-6', delay: 0.5 },
  { Icon: Timer, pos: 'bottom-[10%] left-[8%] md:left-[2%]', delay: 1 },
];

export function ToolkitShowcase() {
  const { t } = useTranslation();

  const badges = [
    t('vizmato.toolkit.badge_1'),
    t('vizmato.toolkit.badge_2'),
    t('vizmato.toolkit.badge_3'),
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0d] text-white relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ff2a4b]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {floatingIcons.map(({ Icon, pos, delay }, i) => (
              <motion.div
                key={i}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay }}
                className={`hidden md:flex absolute ${pos} z-20 w-14 h-14 rounded-2xl bg-white items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.4)]`}
              >
                <Icon className="text-[#ff2a4b]" size={24} strokeWidth={2} />
              </motion.div>
            ))}

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=1400&q=80&auto=format&fit=crop"
                alt="Vizmato editing in action"
                className="w-full h-full object-cover" width={1400} height={933} loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
              {t('vizmato.toolkit.title_1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e62] to-[#ff2a4b]">
                {t('vizmato.toolkit.title_2')}
              </span>
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
              {t('vizmato.toolkit.subtitle')}
            </p>

            <div className="flex flex-col gap-4">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-9 h-9 rounded-full bg-[#ff2a4b]/20 text-[#ff5e62] flex items-center justify-center shrink-0">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
