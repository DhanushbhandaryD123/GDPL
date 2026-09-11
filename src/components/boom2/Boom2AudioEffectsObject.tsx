import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// 1. Ambience: Dual radiating acoustic reflection rings (top-right and bottom-left)
function IconAmbience({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Top-right diagonal acoustic reflection ripples */}
      <path d="M 37 20 A 10 10 0 0 1 47 30" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 41 14 A 18 18 0 0 1 55 28" strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Bottom-left diagonal sound wave ripples */}
      <path d="M 28 36 A 11 11 0 0 0 17 47" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 32 30 A 18 18 0 0 0 14 48" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 36 24 A 25 25 0 0 0 11 49" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

// 2. Fidelity: Sharp ECG frequency pulse spikes
function IconFidelity({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 10 32 H 18 L 22 24 L 26 44 L 32 12 L 38 52 L 44 26 L 48 32 H 54" />
    </svg>
  );
}

// 3. Spatial: Center speaker with dual binaural soundwave arcs on left & right
function IconSpatial({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      {/* Center Speaker Cone */}
      <path
        d="M 29 27 L 35 22 V 42 L 29 37 H 25 C 24.4 37 24 27.4 25 27 Z"
        fill="currentColor"
      />
      {/* Left sound arcs */}
      <path d="M 21 24 C 18 28 18 36 21 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M 16 20 C 12 26 12 38 16 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
      {/* Right sound arcs */}
      <path d="M 39 24 C 42 28 42 36 39 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M 44 20 C 48 26 48 38 44 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// 4. Night Mode: Smooth undulating dynamic leveler wave
function IconNightMode({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 14 36 C 17 36, 18 20, 22 20 C 26 20, 28 44, 32 44 C 36 44, 38 28, 42 28 C 46 28, 47 38, 50 38" />
    </svg>
  );
}

// 5. Pitch: Musical eighth note + vertical slider ladder with up & down arrows
function IconPitch({ className = "w-10 h-10 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      {/* Musical Note (Left) */}
      <circle cx="22" cy="40" r="6" fill="currentColor" />
      <path d="M 27 40 V 18 C 27 18 31 16 35 22 C 37 25 37 28 35 30" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      
      {/* Up/Down Arrow Slider (Right) */}
      <polygon points="46,14 41,21 51,21" fill="currentColor" />
      <polygon points="46,50 41,43 51,43" fill="currentColor" />
      <line x1="43" y1="26" x2="49" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="43" y1="31" x2="49" y2="31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <line x1="43" y1="36" x2="49" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <line x1="43" y1="41" x2="49" y2="41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

type EffectId = 'ambience' | 'fidelity' | 'spatial' | 'night' | 'pitch';

interface AudioEffectItem {
  id: EffectId;
  nameKey: string;
  defaultName: string;
  IconComponent: typeof IconAmbience;
}

const LEFT_EFFECTS: AudioEffectItem[] = [
  {
    id: 'ambience',
    nameKey: 'boom2.audio_effects_object.ambience',
    defaultName: 'Ambience',
    IconComponent: IconAmbience,
  },
  {
    id: 'fidelity',
    nameKey: 'boom2.audio_effects_object.fidelity',
    defaultName: 'Fidelity',
    IconComponent: IconFidelity,
  },
  {
    id: 'spatial',
    nameKey: 'boom2.audio_effects_object.spatial',
    defaultName: 'Spatial',
    IconComponent: IconSpatial,
  },
];

const RIGHT_EFFECTS: AudioEffectItem[] = [
  {
    id: 'night',
    nameKey: 'boom2.audio_effects_object.night_mode',
    defaultName: 'Night Mode',
    IconComponent: IconNightMode,
  },
  {
    id: 'pitch',
    nameKey: 'boom2.audio_effects_object.pitch',
    defaultName: 'Pitch',
    IconComponent: IconPitch,
  },
];

export function Boom2AudioEffectsObject() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<EffectId>('fidelity');

  return (
    <section
      id="boom2-audio-effects-object"
      className="relative w-full overflow-hidden bg-[#070B14] select-none"
      aria-label="Boom 2 Audio Effects"
    >
      {/* =====================================================
          FULL SECTION BACKGROUND IMAGE
          Official Boom 2 external website banner with fallback
          ===================================================== */}
      <div className="relative w-full min-h-[480px] sm:min-h-[560px] md:min-h-[640px] lg:min-h-[720px] overflow-hidden flex items-center justify-between px-6 sm:px-12 md:px-20 lg:px-28">
        
        {/* Background Image */}
        <img
          src="https://d3jbf8nvvpx3fh.cloudfront.net/Boom2/web/images/OGImages/Boom2OGImage.png"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/external/img_0a22d737fce8.png';
          }}
          alt="Boom 2 Audio Effects"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
          loading="lazy"
        />

        {/* Ambient Subtle Vignette for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none z-0" />

        {/* =====================================================
            LEFT SIDE: PURE ICONS WITH TEXT (NO BOX, ZERO CONTAINERS)
            Ambience, Fidelity, Spatial
            ===================================================== */}
        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 my-auto">
          {LEFT_EFFECTS.map((fx) => {
            const isActive = fx.id === activeId;
            const IconComp = fx.IconComponent;

            return (
              <motion.button
                key={fx.id}
                onClick={() => setActiveId(fx.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center justify-center cursor-pointer bg-transparent border-none p-0 focus:outline-none transition-all duration-300"
              >
                {/* Pure Vector Icon (No Box) */}
                <div className={`transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] ${
                  isActive
                    ? 'text-[#1390FB] scale-110 drop-shadow-[0_0_15px_rgba(19,144,251,0.8)]'
                    : 'text-white opacity-85 group-hover:opacity-100 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_12px_rgba(19,144,251,0.5)]'
                }`}>
                  <IconComp className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>

                {/* Text Label Underneath */}
                <span className={`mt-2 text-xs sm:text-sm font-medium tracking-wide transition-all drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
                  isActive
                    ? 'text-white font-bold tracking-wider'
                    : 'text-slate-300 opacity-80 group-hover:opacity-100 group-hover:text-white'
                }`}>
                  {t(fx.nameKey, { defaultValue: fx.defaultName })}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* =====================================================
            RIGHT SIDE: PURE ICONS WITH TEXT (NO BOX, ZERO CONTAINERS)
            Night Mode, Pitch
            ===================================================== */}
        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 my-auto">
          {RIGHT_EFFECTS.map((fx) => {
            const isActive = fx.id === activeId;
            const IconComp = fx.IconComponent;

            return (
              <motion.button
                key={fx.id}
                onClick={() => setActiveId(fx.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center justify-center cursor-pointer bg-transparent border-none p-0 focus:outline-none transition-all duration-300"
              >
                {/* Pure Vector Icon (No Box) */}
                <div className={`transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] ${
                  isActive
                    ? 'text-[#1390FB] scale-110 drop-shadow-[0_0_15px_rgba(19,144,251,0.8)]'
                    : 'text-white opacity-85 group-hover:opacity-100 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_12px_rgba(19,144,251,0.5)]'
                }`}>
                  <IconComp className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>

                {/* Text Label Underneath */}
                <span className={`mt-2 text-xs sm:text-sm font-medium tracking-wide transition-all drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
                  isActive
                    ? 'text-white font-bold tracking-wider'
                    : 'text-slate-300 opacity-80 group-hover:opacity-100 group-hover:text-white'
                }`}>
                  {t(fx.nameKey, { defaultValue: fx.defaultName })}
                </span>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Boom2AudioEffectsObject;
