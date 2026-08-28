import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Circle, MousePointerClick, MoveUpRight, Share2, Type } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STEPS = [
  { id: 'capture', icon: MousePointerClick },
  { id: 'arrow', icon: MoveUpRight },
  { id: 'spotlight', icon: Circle },
  { id: 'text', icon: Type },
  { id: 'share', icon: Share2 },
] as const;

export function EducatorsShowcase() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.75', 'end 0.4'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 px-4 bg-[#1c2331] text-white overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#6554ff]/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-[1100px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('capto_educators.showcase.title')}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-medium">
            {t('capto_educators.showcase.subtitle')}
          </p>
        </motion.div>

        {/* Step rail */}
        <div className="relative">
          {/* Track */}
          <div className="absolute top-7 left-0 right-0 h-[3px] bg-white/10 rounded-full hidden md:block" />
          {/* Animated fill, driven by scroll progress through this section */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-7 left-0 h-[3px] bg-gradient-to-r from-[#6554ff] to-[#ffc145] rounded-full hidden md:block"
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6 relative">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#2a3142] border border-white/10 flex items-center justify-center mb-4 relative z-10">
                    <Icon size={22} className="text-[#ffc145]" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-1.5">
                    {t('capto_educators.showcase.step_label', { n: i + 1 })}
                  </span>
                  <h3 className="text-[15px] font-bold text-white mb-1.5">
                    {t(`capto_educators.showcase.${step.id}_title`)}
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed max-w-[160px]">
                    {t(`capto_educators.showcase.${step.id}_desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
