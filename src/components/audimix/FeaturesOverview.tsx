import { motion } from 'motion/react';
import { Upload, SlidersHorizontal, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FeaturesOverview() {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: t('audimix.features_overview.step1'),
      icon: Upload,
      image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1200&q=80&auto=format&fit=crop',
    },
    {
      id: 2,
      title: t('audimix.features_overview.step2'),
      icon: SlidersHorizontal,
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80&auto=format&fit=crop',
    },
    {
      id: 3,
      title: t('audimix.features_overview.step3'),
      icon: Download,
      image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1200&q=80&auto=format&fit=crop',
    },
  ];

  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('audimix.features_overview.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{t('audimix.features_overview.title_2')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            {t('audimix.features_overview.subtitle')}
          </motion.p>
        </div>

        {/* Animated flow connector — signal traveling from step to step */}
        <div className="hidden md:flex items-center justify-center max-w-5xl mx-auto mb-8 px-[8%]">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1 last:flex-none">
              <div className="w-3 h-3 rounded-full bg-indigo-600 shadow-md shrink-0" />
              {index < steps.length - 1 && (
                <div className="relative flex-1 h-[2px] mx-2 bg-gray-200 overflow-hidden rounded-full">
                  <motion.div
                    className="absolute inset-y-0 w-1/3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    animate={{ x: ['-40%', '140%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg border border-gray-100"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-bold text-sm">
                {step.id}
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-lg">
                  <step.icon className="text-indigo-600" size={20} strokeWidth={2} />
                </div>
                <h3 className="text-white font-bold text-lg leading-tight drop-shadow">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
