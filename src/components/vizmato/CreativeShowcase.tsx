import { motion } from 'motion/react';
import { Compass, Music2, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CreativeShowcase() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t('vizmato.showcase.c1_title'),
      description: t('vizmato.showcase.c1_desc'),
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80&auto=format&fit=crop',
    },
    {
      title: t('vizmato.showcase.c2_title'),
      description: t('vizmato.showcase.c2_desc'),
      icon: Music2,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80&auto=format&fit=crop',
    },
    {
      title: t('vizmato.showcase.c3_title'),
      description: t('vizmato.showcase.c3_desc'),
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#ff5e62]/10 to-fuchsia-400/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {t('vizmato.showcase.title_1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e62] to-[#ff2a4b]">
              {t('vizmato.showcase.title_2')}
            </span>
          </motion.h2>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {t('vizmato.showcase.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg border border-gray-100"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center"
              >
                <card.icon className="text-white" size={22} strokeWidth={2} />
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-2 drop-shadow" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
