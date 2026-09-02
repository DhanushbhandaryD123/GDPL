import { motion } from 'motion/react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from '@/components/layout/LocalizedLink';

export function EducatorsHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#140f2e] text-white pt-28 pb-24 md:pt-36 md:pb-32">
      {/* Chalkboard grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#6554ff]/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-16 w-[420px] h-[420px] rounded-full bg-[#ffc145]/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1300px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <GraduationCap size={16} className="text-[#ffc145]" />
              <span className="text-[12px] font-bold tracking-widest uppercase text-white/80">
                {t('capto_educators.hero.eyebrow')}
              </span>
            </div>

            <h1 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] mb-6">
              {t('capto_educators.hero.title_1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b8cff] to-[#ffc145]">
                {t('capto_educators.hero.title_2')}
              </span>{' '}
              {t('capto_educators.hero.title_3')}
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-[520px] mb-10 font-medium">
              {t('capto_educators.hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#signup"
                className="px-8 py-3.5 rounded-full bg-[#ffc145] hover:bg-[#f5b429] text-[#1c2331] font-bold text-[14px] flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20"
              >
                {t('capto_educators.hero.cta_primary')}
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <Link
                to="/capto"
                className="px-8 py-3.5 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold text-[14px] transition-all"
              >
                {t('capto_educators.hero.cta_secondary')}
              </Link>
            </div>
          </motion.div>

          {/* Right: annotated screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-white/10">
              <img
                src="/capto/s3.webp"
                alt="Capto's timeline and annotation tools used to build a tutorial video"
                className="w-full h-auto block" width={1536} height={1024} loading="eager"
              />

              {/* Animated spotlight ring */}
              <motion.div
                className="absolute w-16 h-16 rounded-full border-2 border-[#ffc145]"
                style={{ top: '38%', left: '30%' }}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: [0.6, 1.15, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#ffc145]"
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{ duration: 1.6, delay: 1.6, repeat: Infinity, ease: 'easeOut' }}
                />
              </motion.div>

              {/* Animated callout bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8, ease: 'easeOut' }}
                className="absolute bottom-[14%] right-[8%] bg-[#6554ff] text-white text-[12px] font-bold px-4 py-2 rounded-xl rounded-br-sm shadow-lg"
              >
                {t('capto_educators.hero.callout')}
              </motion.div>
            </div>

            {/* Floating annotation toolbar chip */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
              className="hidden md:flex absolute -left-8 top-10 items-center gap-2 bg-white text-[#1c2331] px-4 py-2.5 rounded-xl shadow-xl text-[12px] font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-[#ffc145]" />
              {t('capto_educators.hero.toolbar_chip')}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
