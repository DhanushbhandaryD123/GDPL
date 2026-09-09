import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface AppIconItem {
  id: string;
  name: string;
  renderIcon: () => React.ReactNode;
}

export function Boom3DAppController() {
  const { t } = useTranslation();

  const apps: AppIconItem[] = [
    {
      id: 'itunes',
      name: 'iTunes',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm">
          <defs>
            <linearGradient id="apple-music-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d55" />
              <stop offset="50%" stopColor="#fa233b" />
              <stop offset="100%" stopColor="#fb5c74" />
            </linearGradient>
          </defs>
          {/* Apple Music gradient circle */}
          <circle cx="50" cy="50" r="44" fill="url(#apple-music-grad)" />
          {/* Beamed double note in white */}
          <g fill="white">
            <ellipse cx="34" cy="67" rx="8.5" ry="6" transform="rotate(-20 34 67)" />
            <rect x="39" y="32" width="4.5" height="35" rx="1.5" />
            <ellipse cx="61" cy="61" rx="8.5" ry="6" transform="rotate(-20 61 61)" />
            <rect x="66" y="26" width="4.5" height="35" rx="1.5" />
            <path d="M39 32 L70.5 26 V34 L39 40 Z" />
          </g>
        </svg>
      ),
    },
    {
      id: 'teams',
      name: 'Teams',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm">
          <defs>
            <linearGradient id="teams-front-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B83EB" />
              <stop offset="100%" stopColor="#5059C9" />
            </linearGradient>
          </defs>
          {/* Rear avatar */}
          <circle cx="72" cy="30" r="8" fill="#5059C9" />
          <path d="M62 46c0-6 4.5-10 10-10s10 4 10 10v16H62V46z" fill="#5059C9" />
          {/* Front avatar */}
          <circle cx="55" cy="24" r="10" fill="url(#teams-front-grad)" />
          <path d="M41 41c0-8 6.5-13 14-13s14 5 14 13v21H41V41z" fill="url(#teams-front-grad)" />
          {/* Front T badge with official Teams purple */}
          <rect x="14" y="29" width="38" height="40" rx="8" fill="#464EB8" />
          {/* Crisp white "T" */}
          <path d="M23 39h20v5h-7.5V60h-5V44H23V39z" fill="white" />
        </svg>
      ),
    },
    {
      id: 'chrome',
      name: 'Google Chrome',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm">
          {/* Red top blade */}
          <path
            d="M50 8 A42 42 0 0 0 13.6 29 L32 60.8 A21 21 0 0 1 50 29 H86.3 A42 42 0 0 0 50 8 Z"
            fill="#EA4335"
          />
          {/* Green bottom-left blade */}
          <path
            d="M13.6 29 A42 42 0 0 0 50 92 A42 42 0 0 0 73.4 82.8 L55.2 51.3 A21 21 0 0 1 32 60.8 L13.6 29 Z"
            fill="#34A853"
          />
          {/* Yellow bottom-right blade */}
          <path
            d="M86.3 29 H50 A21 21 0 0 1 68.2 60.5 L50 92 A42 42 0 0 0 92 50 A42 42 0 0 0 86.3 29 Z"
            fill="#FBBC04"
          />
          {/* Center white boundary circle */}
          <circle cx="50" cy="50" r="21" fill="white" />
          {/* Center Google Blue circle */}
          <circle cx="50" cy="50" r="16.5" fill="#4285F4" />
        </svg>
      ),
    },
    {
      id: 'spotify',
      name: 'Spotify',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm">
          {/* Spotify vibrant green circle */}
          <circle cx="50" cy="50" r="44" fill="#1DB954" />
          {/* 3 sound waves in authentic black */}
          <path
            d="M68 68.5c-.8 1.3-2.5 1.7-3.8.9-10.5-6.4-23.7-7.9-39.2-4.3-1.5.3-3-.6-3.3-2.1-.3-1.5.6-3 2.1-3.3 17-3.9 31.6-2.2 43.4 5 1.3.8 1.7 2.5.8 3.8zm5.4-12.1c-1 1.6-3.1 2.1-4.8 1.1-12-7.4-30.3-9.5-44.5-5.2-1.8.5-3.8-.5-4.3-2.3-.5-1.8.5-3.8 2.3-4.3 16.2-4.9 36.4-2.5 50.2 6 1.7 1 2.2 3.1 1.1 4.7zm.5-12.6c-14.4-8.5-38.1-9.3-51.8-5.2-2.2.7-4.6-.6-5.2-2.8-.7-2.2.6-4.6 2.8-5.2 15.8-4.8 42-3.9 58.6 5.9 2 1.2 2.6 3.8 1.5 5.7-1.2 2-3.8 2.6-5.9 1.6z"
            fill="#191414"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="apps-volume-controller"
      className="relative py-20 lg:py-28 overflow-hidden bg-white text-gray-900 scroll-mt-20 md:scroll-mt-24 select-none border-b border-gray-100"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Matching Reference Design */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            {t('boom3d.app_controller.title', 'App Volume Controller')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 md:mt-6 text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto"
          >
            {t(
              'boom3d.app_controller.description',
              'App Volume Controller - Would you prefer if certain apps were muted and the volume was turned up on others? Boom 3D gives you control over the volume of each individual application that is running!'
            )}
          </motion.p>
        </div>

        {/* 4 App Circular Icons with Boom 3D Gradient Rings and Real Brand Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-4xl mx-auto justify-items-center">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Badge with Boom 3D Gradient Border */}
              <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-[#ec4899] via-[#8b5cf6] to-[#00f0ff] transition-all duration-300 group-hover:scale-105 shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:shadow-[0_0_35px_rgba(236,72,153,0.35),0_0_25px_rgba(0,240,255,0.25)]">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center transition-colors">
                  {app.renderIcon()}
                </div>
              </div>

              {/* App Label */}
              <span className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg font-semibold text-gray-800 group-hover:text-black transition-colors tracking-wide text-center">
                {app.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
