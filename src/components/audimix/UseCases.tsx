import { motion } from 'motion/react';
import { Mic2, Music, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function UseCases() {
  const { t } = useTranslation();

  const useCases = [
    {
      id: 'musicians',
      title: t('audimix.use_cases.musicians_title'),
      icon: Mic2,
      description: t('audimix.use_cases.musicians_desc'),
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80&auto=format&fit=crop',
    },
    {
      id: 'djs',
      title: t('audimix.use_cases.djs_title'),
      icon: Music,
      description: t('audimix.use_cases.djs_desc'),
      image: 'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=1200&q=80&auto=format&fit=crop',
    },
    {
      id: 'producers',
      title: t('audimix.use_cases.producers_title'),
      icon: Headphones,
      description: t('audimix.use_cases.producers_desc'),
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80&auto=format&fit=crop',
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('audimix.use_cases.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{t('audimix.use_cases.title_2')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            {t('audimix.use_cases.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((uc, index) => (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={uc.image}
                  alt={uc.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute top-5 left-5 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <uc.icon className="text-white" size={20} strokeWidth={2} />
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{uc.title}</h3>
                <p className="text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
