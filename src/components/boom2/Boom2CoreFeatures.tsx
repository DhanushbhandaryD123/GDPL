import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// 1. 31 Band Equalizer: "3" followed by "1" and slider bars with knobs
function Icon31Band({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Number 3 */}
      <path d="M12 20h10a6 6 0 0 1 0 12h-4m4 0a6 6 0 0 1 0 12H12" strokeWidth="2.6" />
      {/* Slider 1 (also acts as the "1") */}
      <line x1="32" y1="14" x2="32" y2="50" />
      <rect x="28" y="32" width="8" height="6" rx="2" fill="currentColor" />
      {/* Slider 2 */}
      <line x1="42" y1="14" x2="42" y2="50" />
      <rect x="38" y="22" width="8" height="6" rx="2" fill="currentColor" />
      {/* Slider 3 */}
      <line x1="52" y1="14" x2="52" y2="50" />
      <rect x="48" y="36" width="8" height="6" rx="2" fill="currentColor" />
    </svg>
  );
}

// 2. Audio Effects: Speaker horn with waveform and [FX] badge
function IconAudioEffects({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Speaker body */}
      <path d="M10 26h6l9-8v28l-9-8h-6z" fill="currentColor" fillOpacity="0.08" />
      {/* Waveform coming from speaker */}
      <path d="M29 27l2 5 3-8 3 11 2-6" strokeWidth="2" />
      {/* FX Box */}
      <rect x="40" y="22" width="20" height="20" rx="3.5" strokeWidth="2.2" />
      <text x="43" y="36.5" fill="currentColor" stroke="none" fontSize="11" fontWeight="800" letterSpacing="-0.5" fontFamily="system-ui, -apple-system, sans-serif">FX</text>
    </svg>
  );
}

// 3. System-wide Control: Laptop with sound waves on screen
function IconSystemWide({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Screen Frame */}
      <rect x="14" y="14" width="36" height="26" rx="3" strokeWidth="2.2" />
      {/* Speaker on screen */}
      <path d="M25 24h3l4-3v12l-4-3h-3z" fill="currentColor" fillOpacity="0.2" strokeWidth="1.8" />
      {/* Radiating sound arcs */}
      <path d="M35 24a4.5 4.5 0 0 1 0 6" strokeWidth="1.8" />
      <path d="M38 21a9 9 0 0 1 0 12" strokeWidth="1.8" />
      {/* Laptop base */}
      <path d="M8 44h48l-3 4H11z" fill="currentColor" fillOpacity="0.1" strokeWidth="2.2" />
      {/* Trackpad notch */}
      <line x1="28" y1="44" x2="36" y2="44" strokeWidth="3" stroke="currentColor" />
    </svg>
  );
}

// 4. File Boost: Lightning bolt in background + file audio sheet
function IconFileBoost({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Lightning bolt behind */}
      <path d="M36 8L18 32h14l-4 24 20-28H34l6-20z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
      {/* File Document overlaid */}
      <path d="M24 22h12l6 6v14a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2z" fill="#ffffff" stroke="currentColor" strokeWidth="2" />
      <polyline points="36 22 36 28 42 28" strokeWidth="2" />
      {/* Audio disc / note inside document */}
      <circle cx="32" cy="35" r="4" fill="currentColor" strokeWidth="1" />
      <circle cx="32" cy="35" r="1.5" fill="#ffffff" stroke="none" />
    </svg>
  );
}

// 5. Boom Remote: Angled remote control with wifi waves
function IconBoomRemote({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Remote body rotated at 45 deg */}
      <g transform="translate(14, 12) rotate(45 18 18)">
        <rect x="10" y="-2" width="16" height="38" rx="5" strokeWidth="2.2" fill="currentColor" fillOpacity="0.08" />
        {/* Top IR transmitter / signal */}
        <line x1="18" y1="-2" x2="18" y2="2" strokeWidth="2" />
        {/* Directional Pad ring */}
        <circle cx="18" cy="8" r="4.5" strokeWidth="2" />
        <circle cx="18" cy="8" r="1.5" fill="currentColor" stroke="none" />
        {/* Buttons */}
        <circle cx="14" cy="18" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="22" cy="18" r="1.2" fill="currentColor" stroke="none" />
        <rect x="14" y="23" width="8" height="2.5" rx="1" fill="currentColor" stroke="none" />
      </g>
      {/* Broadcast waves at top right */}
      <path d="M44 14a9 9 0 0 1 6 6" strokeWidth="2" />
      <path d="M47 9a15 15 0 0 1 10 10" strokeWidth="2" />
    </svg>
  );
}

// 6. Output Compatibility: Central speaker flanked by headphones & earbuds
function IconOutputCompatibility({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Headphone on left */}
      <path d="M12 28a6 6 0 0 1 6-6v16a6 6 0 0 1-6-6z" strokeWidth="1.8" />
      <path d="M12 26v4a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2z" fill="currentColor" stroke="none" />
      <path d="M14 22a8 8 0 0 0-8 8v4" strokeWidth="1.8" />

      {/* Central main speaker cabinet */}
      <rect x="25" y="14" width="18" height="34" rx="3.5" strokeWidth="2.2" fill="currentColor" fillOpacity="0.08" />
      {/* Tweeter */}
      <circle cx="34" cy="22" r="3" strokeWidth="2" />
      {/* Large Woofer */}
      <circle cx="34" cy="36" r="6" strokeWidth="2" />
      <circle cx="34" cy="36" r="2" fill="currentColor" stroke="none" />

      {/* Earbuds on right */}
      <path d="M50 26c0-2.5 1.5-4 3.5-4s3.5 1.5 3.5 4v6h-7v-6z" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
      <line x1="53.5" y1="32" x2="53.5" y2="40" strokeWidth="1.8" />
      <path d="M57 26c0-2.5 1.5-4 3.5-4s3.5 1.5 3.5 4v6h-7v-6z" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
      <line x1="60.5" y1="32" x2="60.5" y2="40" strokeWidth="1.8" />
    </svg>
  );
}

// 7. Sample Rate Control: Stepped digital audio sampling bars (up & down)
function IconSampleRate({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Upper cluster */}
      <line x1="18" y1="32" x2="18" y2="24" />
      <line x1="22" y1="32" x2="22" y2="18" />
      <line x1="26" y1="32" x2="26" y2="12" />
      <line x1="30" y1="32" x2="30" y2="16" />
      <line x1="34" y1="32" x2="34" y2="24" />

      {/* Lower cluster (offset to the right) */}
      <line x1="34" y1="32" x2="34" y2="40" />
      <line x1="38" y1="32" x2="38" y2="46" />
      <line x1="42" y1="32" x2="42" y2="52" />
      <line x1="46" y1="32" x2="46" y2="48" />
      <line x1="50" y1="32" x2="50" y2="40" />
    </svg>
  );
}

// 8. Audio Balancer (L-R): Knob in center flanked by L and R
function IconAudioBalancer({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Letter L */}
      <text x="14" y="22" fill="currentColor" stroke="none" fontSize="13" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">L</text>
      {/* Letter R */}
      <text x="46" y="22" fill="currentColor" stroke="none" fontSize="13" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">R</text>
      
      {/* Outer arc track */}
      <path d="M22 38a13 13 0 1 1 20 0" strokeWidth="2.4" />
      
      {/* Rotary knob circle */}
      <circle cx="32" cy="34" r="9" strokeWidth="2.4" fill="currentColor" fillOpacity="0.1" />
      {/* Indicator notch / position */}
      <circle cx="32" cy="28" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

// 9. Stereo Widening: Two stereo speakers with double-headed arrow between them
function IconStereoWidening({ className = "w-16 h-16 md:w-20 md:h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Left Speaker Box */}
      <rect x="8" y="16" width="15" height="30" rx="2.5" strokeWidth="2.2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="15.5" cy="23" r="2.5" strokeWidth="1.8" />
      <circle cx="15.5" cy="34" r="5" strokeWidth="1.8" />
      <circle cx="15.5" cy="34" r="1.5" fill="currentColor" stroke="none" />

      {/* Double headed arrow in middle */}
      <line x1="28" y1="31" x2="36" y2="31" strokeWidth="1.8" />
      <polyline points="30 28 27 31 30 34" strokeWidth="1.8" />
      <polyline points="34 28 37 31 34 34" strokeWidth="1.8" />

      {/* Right Speaker Box */}
      <rect x="41" y="16" width="15" height="30" rx="2.5" strokeWidth="2.2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="48.5" cy="23" r="2.5" strokeWidth="1.8" />
      <circle cx="48.5" cy="34" r="5" strokeWidth="1.8" />
      <circle cx="48.5" cy="34" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Boom2CoreFeatures() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);

  // Top Row: 6 features
  const row1Features = [
    {
      id: 'eq',
      Icon: Icon31Band,
      title: t('boom2.features_banner.eq', { defaultValue: '31 Band Equalizer' }).replace(/\n/g, ' '),
    },
    {
      id: 'effects',
      Icon: IconAudioEffects,
      title: t('boom2.features_banner.effects', { defaultValue: 'Audio Effects' }).replace(/\n/g, ' '),
    },
    {
      id: 'system_wide',
      Icon: IconSystemWide,
      title: t('boom2.features_banner.system_wide', { defaultValue: 'System-wide Control' }).replace(/\n/g, ' '),
    },
    {
      id: 'file_boost',
      Icon: IconFileBoost,
      title: t('boom2.features_banner.file_boost', { defaultValue: 'File Boost' }).replace(/\n/g, ' '),
    },
    {
      id: 'remote',
      Icon: IconBoomRemote,
      title: t('boom2.features_banner.remote', { defaultValue: 'Boom Remote' }).replace(/\n/g, ' '),
    },
    {
      id: 'output',
      Icon: IconOutputCompatibility,
      title: t('boom2.features_banner.output', { defaultValue: 'Output compatibility' }).replace(/\n/g, ' '),
    },
  ];

  // Bottom Row: 3 features centered
  const row2Features = [
    {
      id: 'sample_rate',
      Icon: IconSampleRate,
      title: t('boom2.features_banner.sample_rate', { defaultValue: 'Sample Rate Control' }).replace(/\n/g, ' '),
    },
    {
      id: 'balancer',
      Icon: IconAudioBalancer,
      title: t('boom2.features_banner.balancer', { defaultValue: 'Audio Balancer (L-R)' }).replace(/\n/g, ' '),
    },
    {
      id: 'stereo',
      Icon: IconStereoWidening,
      title: t('boom2.features_banner.stereo', { defaultValue: 'Stereo Widening' }).replace(/\n/g, ' '),
    },
  ];

  const handleFeatureClick = (id: string) => {
    setActiveId(id);
    if (id === 'eq') {
      const el = document.getElementById('boom2-equalizer-presets');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="bg-white py-12 md:py-16 px-4 max-w-[1400px] mx-auto">
      {/* Container maintaining the exact 2-row structure from the original design */}
      <div className="w-full">
        
        {/* ROW 1: 6 Features with vertical divider lines */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-stretch">
          {row1Features.map((feature, idx) => {
            const Icon = feature.Icon;
            const isLastInDesktop = idx === row1Features.length - 1;
            const isActive = activeId === feature.id;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: 'easeOut' }}
                className={`p-2 sm:p-2.5 flex items-center justify-center transition-colors ${
                  !isLastInDesktop ? 'lg:border-r lg:border-gray-200' : ''
                } ${idx % 2 === 0 ? 'border-r sm:border-r-0 border-gray-200' : ''} ${
                  idx % 3 !== 2 ? 'sm:border-r lg:sm:border-r-0 border-gray-200' : ''
                }`}
              >
                {/* Box-like structure appears ONLY when hovered or touched */}
                <div
                  onClick={() => handleFeatureClick(feature.id)}
                  onMouseEnter={() => setActiveId(feature.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`w-full flex flex-col items-center text-center px-3 py-6 md:py-8 rounded-none transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-gray-200 shadow-xl scale-[1.03]'
                      : 'border-transparent bg-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg hover:scale-[1.02]'
                  }`}
                >
                  {/* Real Icon matching authentic graphic style with color change on touch/hover */}
                  <div className={`mb-4 flex items-center justify-center h-20 md:h-24 transition-all duration-200 ${
                    isActive ? 'text-[#1390FB] scale-110' : 'text-[#1F2937] hover:text-[#1390FB]'
                  }`}>
                    <Icon className="w-16 h-16 md:w-20 md:h-20" />
                  </div>

                  {/* Text Title only with color change on touch/hover */}
                  <h4 className={`font-semibold text-[13.5px] md:text-[15px] leading-snug transition-colors duration-200 ${
                    isActive ? 'text-[#1390FB]' : 'text-gray-900 hover:text-[#1390FB]'
                  }`}>
                    {feature.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Horizontal Divider Line between Row 1 and Row 2 */}
        <div className="w-full border-b border-gray-200 my-3 md:my-4" />

        {/* ROW 2: 3 Features Centered with vertical divider lines */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-stretch">
          {row2Features.map((feature, idx) => {
            const Icon = feature.Icon;
            const isLast = idx === row2Features.length - 1;
            const isActive = activeId === feature.id;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.3 + idx * 0.05, ease: 'easeOut' }}
                className={`p-2 sm:p-3 flex items-center justify-center transition-colors ${
                  !isLast ? 'sm:border-r sm:border-gray-200' : ''
                }`}
              >
                {/* Box-like structure appears ONLY when hovered or touched */}
                <div
                  onClick={() => handleFeatureClick(feature.id)}
                  onMouseEnter={() => setActiveId(feature.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`w-full flex flex-col items-center text-center px-4 py-6 md:py-8 rounded-none transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-gray-200 shadow-xl scale-[1.03]'
                      : 'border-transparent bg-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg hover:scale-[1.02]'
                  }`}
                >
                  {/* Real Icon */}
                  <div className={`mb-4 flex items-center justify-center h-20 md:h-24 transition-all duration-200 ${
                    isActive ? 'text-[#1390FB] scale-110' : 'text-[#1F2937] hover:text-[#1390FB]'
                  }`}>
                    <Icon className="w-16 h-16 md:w-20 md:h-20" />
                  </div>

                  {/* Text Title only */}
                  <h4 className={`font-semibold text-[13.5px] md:text-[15px] leading-snug transition-colors duration-200 ${
                    isActive ? 'text-[#1390FB]' : 'text-gray-900 hover:text-[#1390FB]'
                  }`}>
                    {feature.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
