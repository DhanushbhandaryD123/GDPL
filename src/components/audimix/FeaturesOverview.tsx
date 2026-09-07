import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, SlidersHorizontal, Download, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FeaturesOverview() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      id: 1,
      phase: 'Step 1 • Input',
      title: t('audimix.features_overview.step1'),
      description: t('audimix.features_overview.step1_desc'),
      icon: Upload,
      image: '/images/external/img_9f71690c4388.jpg',
    },
    {
      id: 2,
      phase: 'Step 2 • Separation',
      title: t('audimix.features_overview.step2'),
      description: t('audimix.features_overview.step2_desc'),
      icon: SlidersHorizontal,
      image: '/images/external/img_1716621547fc.jpg',
    },
    {
      id: 3,
      phase: 'Step 3 • Output',
      title: t('audimix.features_overview.step3'),
      description: t('audimix.features_overview.step3_desc'),
      icon: Download,
      image: '/images/external/img_75eca9ac3959.jpg',
    },
  ];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  }, [steps.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  }, [steps.length]);

  const handleSelectStep = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Automatically slide one by one every 4.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4200);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const currentStep = steps[currentIndex];

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Subtle ambient gradients in background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-100/40 via-purple-100/30 to-pink-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>AI Audio Separation Workflow</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5"
          >
            {t('audimix.features_overview.title_1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
              {t('audimix.features_overview.title_2')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
          >
            {t('audimix.features_overview.subtitle')}
          </motion.p>
        </div>

        {/* Auto-sliding Showcase (Images slide one-by-one automatically, NO DOTS) */}
        <div
          className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Interactive Step Cards (Desktop & Tablet) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 order-2 lg:order-1">
            {steps.map((step, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => handleSelectStep(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-50/90 via-purple-50/40 to-white border-indigo-300/80 shadow-lg shadow-indigo-100/60 ring-1 ring-indigo-500/20'
                      : 'bg-gray-50/70 hover:bg-gray-100/80 border-gray-200/70 text-gray-600'
                  }`}
                >
                  {/* Progress countdown indicator line on active step */}
                  {isActive && !isPaused && (
                    <motion.div
                      key={currentIndex}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 4.2, ease: 'linear' }}
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 origin-left"
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-sm ${
                        isActive
                          ? 'bg-indigo-600 text-white shadow-indigo-200'
                          : 'bg-white text-gray-500 border border-gray-200/80 group-hover:text-indigo-600'
                      }`}
                    >
                      <step.icon size={22} strokeWidth={2.2} />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isActive ? 'text-indigo-600' : 'text-gray-400'
                          }`}
                        >
                          {step.phase}
                        </span>
                        {isActive && (
                          <span className="text-[11px] font-medium text-indigo-500 bg-indigo-100/60 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </div>

                      <h3
                        className={`text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Slider Navigation Controls (Chevrons only - NO DOTS) */}
            <div className="flex items-center justify-between pt-2 px-1">
              <div className="text-xs font-medium text-gray-400">
                Auto-advancing • Hover to pause
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous step"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 hover:text-indigo-600 transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next step"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 hover:text-indigo-600 transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Sliding Visual Frame (NO NUMBER BADGES) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-950 aspect-[4/3] sm:aspect-[16/11]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Clean image with NO numbers on it */}
                  <img
                    src={currentStep.image}
                    alt={currentStep.title}
                    className="w-full h-full object-cover"
                    width={1200}
                    height={825}
                    loading="eager"
                  />

                  {/* Gradient vignettes for contrast and depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Title & Phase Pill */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-semibold uppercase tracking-wider">
                        <currentStep.icon size={13} />
                        <span>{currentStep.phase}</span>
                      </div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl md:text-3xl drop-shadow-md">
                        {currentStep.title}
                      </h4>
                      <p className="text-gray-200/90 text-xs sm:text-sm max-w-md line-clamp-2 drop-shadow-sm font-normal">
                        {currentStep.description}
                      </p>
                    </div>

                    {/* Quick navigation arrows on the image frame */}
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrev();
                        }}
                        aria-label="Previous image"
                        className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        aria-label="Next image"
                        className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
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
