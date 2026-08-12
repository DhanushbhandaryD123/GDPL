import { motion } from 'motion/react';
import { Camera, Wand2, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    { title: t('vizmato.features.f1_title'), description: t('vizmato.features.f1_desc'), icon: Camera },
    { title: t('vizmato.features.f2_title'), description: t('vizmato.features.f2_desc'), icon: Wand2 },
    { title: t('vizmato.features.f3_title'), description: t('vizmato.features.f3_desc'), icon: Share2 },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 tracking-widest uppercase"
          >
            {t('vizmato.features.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8 relative">
                {/* Neon Glow effect behind icon */}
                <div className="absolute inset-0 bg-fuchsia-500 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-full" />
                
                {/* Icon Container */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <feature.icon 
                    size={64} 
                    strokeWidth={1.5}
                    className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed max-w-xs font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
