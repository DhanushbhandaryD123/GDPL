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

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
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
                        className="w-full h-auto object-cover object-top max-h-[340px]"
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
