import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BookOpen, Palette, Share2, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AUTOPLAY_MS = 6000;

export function CaptoUseCases() {
  const { t } = useTranslation();

  const useCases = [
    {
      id: 'educators',
      title: t('capto.use_cases.educators_title'),
      tag: t('capto.use_cases.educators_tag'),
      icon: GraduationCap,
      description: t('capto.use_cases.educators_desc'),
      image: '/capto/s2.webp',
      features: [t('capto.use_cases.educators_f1'), t('capto.use_cases.educators_f2'), t('capto.use_cases.educators_f3')]
    },
    {
      id: 'students',
      title: t('capto.use_cases.students_title'),
      tag: t('capto.use_cases.students_tag'),
      icon: BookOpen,
      description: t('capto.use_cases.students_desc'),
      image: '/capto/s8.webp',
      features: [t('capto.use_cases.students_f1'), t('capto.use_cases.students_f2'), t('capto.use_cases.students_f3')]
    },
    {
      id: 'creatives',
      title: t('capto.use_cases.creatives_title'),
      tag: t('capto.use_cases.creatives_tag'),
      icon: Palette,
      description: t('capto.use_cases.creatives_desc'),
      image: '/capto/s5.webp',
      features: [t('capto.use_cases.creatives_f1'), t('capto.use_cases.creatives_f2'), t('capto.use_cases.creatives_f3')]
    },
    {
      id: 'everyday',
      title: t('capto.use_cases.everyday_title'),
      tag: t('capto.use_cases.everyday_tag'),
      icon: Share2,
      description: t('capto.use_cases.everyday_desc'),
      image: '/capto/s9.webp',
      features: [t('capto.use_cases.everyday_f1'), t('capto.use_cases.everyday_f2'), t('capto.use_cases.everyday_f3')]
    }
  ];

  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [paused, setPaused] = useState(false);

  const activeIndex = useCases.findIndex((uc) => uc.id === activeTab);
  const activeUseCase = useCases[activeIndex] ?? useCases[0];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const idx = useCases.findIndex((uc) => uc.id === prev);
        return useCases[(idx + 1) % useCases.length].id;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, activeTab]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#ffffff]">
      {/* Background decor — consistent with hero's dot grid */}
      <div className="absolute -top-10 right-[8%] opacity-40 pointer-events-none">
        <div className="w-40 h-40" style={{ backgroundImage: 'radial-gradient(#6554ff 2px, transparent 2px)', backgroundSize: '18px 18px' }} />
      </div>
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#6554ff]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#1c2331] leading-tight mb-5">
            {t('capto.use_cases.title_1')} <span className="text-[#6554ff]">{t('capto.use_cases.title_2')}</span>
          </h2>
          <p className="text-lg text-gray-500">
            {t('capto.use_cases.subtitle')}
          </p>
        </div>

        {/* Mobile View: Clean, standard interactive card with floating animations */}
        <div className="lg:hidden flex flex-col gap-5">
          {/* Persona selector pills - clean, scrollbar-free */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1">
            {useCases.map((uc) => {
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-[#6554ff] text-white shadow-md shadow-indigo-500/25 scale-[1.03]'
                      : 'bg-white text-gray-700 border border-gray-200/80 hover:bg-gray-50'
                  }`}
                >
                  <uc.icon size={14} strokeWidth={2.5} />
                  <span>{uc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Persona Card with Floating Micro-Animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative rounded-3xl bg-white p-4 sm:p-6 shadow-xl border border-gray-100 overflow-hidden"
            >
              {/* Floating Image with Tag */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-5 aspect-[16/10] bg-gray-50 flex items-center justify-center"
              >
                <img
                  src={activeUseCase.image}
                  alt={`Capto for ${activeUseCase.title}`}
                  className="w-full h-full object-cover object-top"
                  width={1536}
                  height={1024}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#6554ff] shadow-sm flex items-center gap-1.5 border border-white/60">
                  <activeUseCase.icon size={13} strokeWidth={2.5} />
                  <span>{activeUseCase.tag}</span>
                </div>
              </motion.div>

              {/* Text content */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-[#6554ff]/10 text-[#6554ff]">
                  <activeUseCase.icon size={18} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1c2331]">
                  {t('capto.use_cases.for')} {activeUseCase.title}
                </h3>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                {activeUseCase.description}
              </p>

              {/* 3 checklist items */}
              <div className="flex flex-col gap-2 mb-4">
                {activeUseCase.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 bg-gray-50/80 rounded-xl p-2.5 border border-gray-100/90"
                  >
                    <div className="shrink-0 w-4 h-4 rounded-full bg-[#6554ff] flex items-center justify-center text-white text-[9px] font-bold">
                      ✓
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bottom bar with CTA and dots */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100/80">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[#6554ff] font-bold text-xs sm:text-sm hover:gap-1.5 transition-all"
                >
                  {t('capto.use_cases.cta')}
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </a>

                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5">
                  {useCases.map((uc) => (
                    <button
                      key={uc.id}
                      onClick={() => setActiveTab(uc.id)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeTab === uc.id ? 'w-5 bg-[#6554ff]' : 'w-1.5 bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Go to ${uc.title}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop View: 12-column interactive split grid */}
        <div
          className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left — persona list */}
          <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {useCases.map((uc) => {
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`relative shrink-0 w-[260px] lg:w-full text-left rounded-2xl p-5 transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? 'bg-white shadow-xl shadow-indigo-100 border border-transparent'
                      : 'bg-white/60 border border-gray-100 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 p-2.5 rounded-xl transition-colors duration-300 ${
                        isActive ? 'bg-[#6554ff] text-white' : 'bg-gray-100 text-gray-500 group-hover:text-[#6554ff]'
                      }`}
                    >
                      <uc.icon size={20} strokeWidth={2.25} />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-bold text-[15px] mb-0.5 ${isActive ? 'text-[#1c2331]' : 'text-gray-600'}`}>
                        {t('capto.use_cases.for')} {uc.title}
                      </h3>
                      <p className={`text-xs font-medium ${isActive ? 'text-[#6554ff]' : 'text-gray-400'}`}>
                        {uc.tag}
                      </p>
                    </div>
                  </div>

                  {/* Autoplay progress indicator */}
                  {isActive && (
                    <div className="mt-4 h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        key={`${uc.id}-${paused}`}
                        className="h-full bg-[#6554ff] rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: paused ? '0%' : '100%' }}
                        transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right — showcase panel */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-indigo-100/60 border border-gray-100 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeUseCase.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col h-full"
                >
                  <div className="p-3 md:p-4 pb-0">
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      <img
                        src={activeUseCase.image}
                        alt={`Capto for ${activeUseCase.title}`}
                        className="w-full h-auto object-cover object-top max-h-[340px]" width={1536} height={1024} loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="p-6 md:p-10 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-[#6554ff]/10 text-[#6554ff]">
                        <activeUseCase.icon size={18} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#1c2331]">
                        {t('capto.use_cases.for')} {activeUseCase.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-7 max-w-2xl">
                      {activeUseCase.description}
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-3">
                      {activeUseCase.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-gray-700 font-medium text-[13.5px] bg-gray-50 rounded-xl p-3 border border-gray-100"
                        >
                          <div className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#6554ff] flex items-center justify-center text-white text-[10px] font-bold">
                            ✓
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 mt-8 text-[#6554ff] font-bold text-sm hover:gap-2.5 transition-all"
                    >
                      {t('capto.use_cases.cta')}
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
