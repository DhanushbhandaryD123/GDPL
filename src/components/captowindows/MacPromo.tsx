import { motion } from 'motion/react';
import { Link } from '@/components/layout/LocalizedLink';
import { useTranslation } from 'react-i18next';

// Official Apple Inc. Vector Silhouette
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 170" fill="currentColor" className={className}>
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.85-11.89-14.42-6.52-10.12-11.75-21.43-15.68-33.93-3.93-12.5-5.89-24.16-5.89-34.99 0-14.16 3.57-26.04 10.7-35.63 7.13-9.59 16.27-14.51 27.42-14.77 5.11 0 10.78 1.48 17 4.43 6.23 2.96 10.15 4.51 11.77 4.65 1.83-.26 5.86-1.87 12.09-4.82 6.23-2.96 11.7-4.35 16.42-4.17 13.2.65 23.47 5.74 30.82 15.26-11.74 7.13-17.48 16.83-17.22 29.11.26 9.69 3.93 17.76 11 24.22 7.07 6.46 15.42 10.05 25.04 10.78-2.22 7.06-4.81 14.16-7.77 21.31zM119.22 31.84c0-7.72 2.76-14.99 8.28-21.81 5.53-6.82 12.28-10.97 20.26-12.45.26 1.04.39 2.08.39 3.13 0 7.58-2.9 15-8.7 22.25-5.8 7.25-12.65 11.39-20.55 12.42-.26-1.18-.39-2.36-.39-3.54z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function MacPromo() {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-[#0078D7] via-[#0063B1] to-[#004e8c] text-white relative overflow-hidden">
      {/* Ambient background glow & effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-400/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/[0.12] hover:bg-white/[0.14] backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl shadow-blue-950/20 overflow-hidden transition-all"
        >
          {/* Subtle inner corner highlight */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left: Apple Icon & Text Content */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 flex-1">
              {/* Apple Icon Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white text-gray-900 flex items-center justify-center shadow-md shadow-black/10 shrink-0 border border-white/80 transition-transform duration-300 hover:scale-105">
                <AppleIcon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" />
              </div>

              {/* Text Info */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                  <AppleIcon className="w-3 h-3" />
                  <span>macOS Edition</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {t('captoWindows.mac_promo.title')}
                </h3>

                <p className="text-blue-100/90 text-xs sm:text-sm font-normal max-w-lg leading-relaxed">
                  {t('captoWindows.mac_promo.subtitle')}
                </p>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto shrink-0">
              {/* Primary: Explore Mac Version */}
              <Link
                to="/capto"
                className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
              >
                <AppleIcon className="w-3.5 h-3.5 text-gray-900" />
                <span>{t('captoWindows.mac_promo.explore')}</span>
                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary: Available on Setapp */}
              <a
                href="https://go.setapp.com/stp344?ref=globaldelight&utm_medium=referral&utm_campaign=globaldelight-website-capto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 hover:border-white/50 font-semibold rounded-xl text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
              >
                <span className="text-pink-300 font-bold text-sm leading-none">❖</span>
                <span>{t('captoWindows.mac_promo.setapp')}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
