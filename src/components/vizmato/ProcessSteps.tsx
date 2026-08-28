import { motion } from 'motion/react';
import { Video, Sparkles, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProcessSteps() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('vizmato.process.step1'),
      description: t('vizmato.process.step1_desc'),
      icon: Video,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80&auto=format&fit=crop',
    },
    {
      title: t('vizmato.process.step2'),
      description: t('vizmato.process.step2_desc'),
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=1200&q=80&auto=format&fit=crop',
    },
    {
      title: t('vizmato.process.step3'),
      description: t('vizmato.process.step3_desc'),
      icon: Send,
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=1200&q=80&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#ffffff] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {t('vizmato.process.title_1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e62] to-[#ff2a4b]">
              {t('vizmato.process.title_2')}
            </span>
          </motion.h2>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {t('vizmato.process.subtitle')}
          </p>
        </div>

        {/* Animated flow connector */}
        <div className="hidden md:flex items-center justify-center max-w-4xl mx-auto mb-8 px-[8%]">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center flex-1 last:flex-none">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ff5e62] to-[#ff2a4b] shadow-md shrink-0" />
              {index < steps.length - 1 && (
                <div className="relative flex-1 h-[2px] mx-2 bg-gray-200 overflow-hidden rounded-full">
                  <motion.div
                    className="absolute inset-y-0 w-1/3 rounded-full bg-gradient-to-r from-[#ff5e62] to-fuchsia-500"
                    animate={{ x: ['-40%', '140%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col"
            >
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-gray-100 bg-white mb-5">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-lg">
                    <step.icon className="text-[#ff2a4b]" size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight drop-shadow" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed px-1" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
