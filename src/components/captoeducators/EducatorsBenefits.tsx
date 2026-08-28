import { motion } from 'motion/react';
import { Video, GraduationCap, ClipboardCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function EducatorsBenefits() {
  const { t } = useTranslation();

  const benefits = [
    { id: 'tutorials', icon: Video, rotate: -2, accent: '#6554ff' },
    { id: 'elearning', icon: GraduationCap, rotate: 1.5, accent: '#ffc145' },
    { id: 'grading', icon: ClipboardCheck, rotate: -1, accent: '#22c1a5' },
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 bg-[#ffffff] overflow-hidden">
      {/* Faint notebook rule lines */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#e7e0d0 1px, transparent 1px)',
          backgroundSize: '100% 42px',
        }}
      />

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2331] tracking-tight mb-4">
            {t('capto_educators.benefits.title')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            {t('capto_educators.benefits.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: b.rotate }}
                whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-200 shadow-[0_10px_30px_rgba(28,35,49,0.06)] transition-shadow hover:shadow-[0_16px_40px_rgba(28,35,49,0.12)]"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${b.accent}1a`, color: b.accent }}
                >
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#1c2331] mb-3">
                  {t(`capto_educators.benefits.${b.id}_title`)}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {t(`capto_educators.benefits.${b.id}_desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
