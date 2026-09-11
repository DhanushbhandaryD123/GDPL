import { useState, useEffect, type ComponentType } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Music2,
  AudioLines,
  Piano,
  Guitar,
  Headphones,
  Mic,
  Sliders,
  Sparkles,
} from 'lucide-react';

/* =========================================================
   TYPES & PRESET DEFINITIONS
   ========================================================= */

type PresetLane = {
  id: string;
  name: string;
  genre: string;
  color: string;
  glow: string;
  badgeBg: string;
  Icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  // Inbound Path Coordinates: Lower-Left -> Center (700, laneY)
  inStart: { x: number; y: number };
  inC1: { x: number; y: number };
  inC2: { x: number; y: number };
  laneY: number; // Expanded vertical connection point into the logo
  // Outbound Path Coordinates: Center (700, laneY) -> Expanded Upper-Right Corner
  outC1: { x: number; y: number };
  outC2: { x: number; y: number };
  outEnd: { x: number; y: number };
  badgeSize: number;
};

const PRESETS: PresetLane[] = [
  {
    id: 'classical',
    name: 'Classical',
    genre: 'Grand Piano & Symphonic',
    color: '#16A34A', // Emerald Green (piano)
    glow: 'rgba(22, 163, 74, 0.45)',
    badgeBg: '#15803D',
    Icon: Piano,
    inStart: { x: 50, y: 540 },
    inC1: { x: 240, y: 460 },
    inC2: { x: 470, y: 390 },
    laneY: 268, // Connects to the upper-left of Boom 2 logo
    outC1: { x: 880, y: 150 },
    outC2: { x: 1120, y: 130 },
    outEnd: { x: 1360, y: 60 },
    badgeSize: 82,
  },
  {
    id: 'rock',
    name: 'Rock',
    genre: 'Electric Guitar Crunch',
    color: '#F59E0B', // Amber / Gold (guitar)
    glow: 'rgba(245, 158, 11, 0.45)',
    badgeBg: '#D97706',
    Icon: Guitar,
    inStart: { x: 100, y: 510 },
    inC1: { x: 270, y: 440 },
    inC2: { x: 490, y: 380 },
    laneY: 280,
    outC1: { x: 890, y: 170 },
    outC2: { x: 1110, y: 150 },
    outEnd: { x: 1340, y: 90 },
    badgeSize: 76,
  },
  {
    id: 'pop',
    name: 'Pop',
    genre: 'Dynamic Synth & Beats',
    color: '#0284C7', // Sky Blue / Cyan (synth/keyboard)
    glow: 'rgba(2, 132, 199, 0.45)',
    badgeBg: '#0369A1',
    Icon: AudioLines,
    inStart: { x: 150, y: 480 },
    inC1: { x: 300, y: 420 },
    inC2: { x: 510, y: 360 },
    laneY: 294,
    outC1: { x: 900, y: 190 },
    outC2: { x: 1100, y: 170 },
    outEnd: { x: 1320, y: 120 },
    badgeSize: 72,
  },
  {
    id: 'jazz',
    name: 'Jazz',
    genre: 'Saxophone & Brass Beats',
    color: '#C026D3', // Magenta / Purple (drums)
    glow: 'rgba(192, 38, 211, 0.45)',
    badgeBg: '#A21CAF',
    Icon: Music2,
    inStart: { x: 200, y: 450 },
    inC1: { x: 330, y: 400 },
    inC2: { x: 530, y: 350 },
    laneY: 308,
    outC1: { x: 880, y: 220 },
    outC2: { x: 1080, y: 200 },
    outEnd: { x: 1300, y: 150 },
    badgeSize: 68,
  },
  {
    id: 'acoustic',
    name: 'Acoustic',
    genre: 'Studio Vocal Intimacy',
    color: '#E11D48', // Crimson / Rose (mic)
    glow: 'rgba(225, 29, 72, 0.45)',
    badgeBg: '#BE123C',
    Icon: Mic,
    inStart: { x: 250, y: 420 },
    inC1: { x: 360, y: 380 },
    inC2: { x: 540, y: 340 },
    laneY: 322,
    outC1: { x: 860, y: 240 },
    outC2: { x: 1050, y: 230 },
    outEnd: { x: 1280, y: 180 },
    badgeSize: 64,
  },
  {
    id: 'electronic',
    name: 'Electronic',
    genre: 'Sub-Bass & Headphones',
    color: '#8B5CF6', // Purple / Violet
    glow: 'rgba(139, 92, 246, 0.45)',
    badgeBg: '#6D28D9',
    Icon: Headphones,
    inStart: { x: 75, y: 530 },
    inC1: { x: 255, y: 450 },
    inC2: { x: 480, y: 385 },
    laneY: 274,
    outC1: { x: 890, y: 160 },
    outC2: { x: 1115, y: 140 },
    outEnd: { x: 1350, y: 75 },
    badgeSize: 74,
  },
];

/* Timing Constants for Continuous Mathematical Conveyor */
const STAGGER_INTERVAL = 1.7;
const TOTAL_LOOP_TIME = STAGGER_INTERVAL * PRESETS.length; // 10.2s loop cycle
const IN_DURATION = 2.7;
const OUT_DURATION = 3.2;

/* =========================================================
   EXPANDED HARMONIC S-WAVE RIBBON GENERATORS
   Both Blue and Purple waves connect to the Boom 2 Logo
   with an EXPANDED, FULL-BODIED ribbon width (NO PINCHING)
   ========================================================= */

const INBOUND_STRANDS = Array.from({ length: 26 }, (_, i) => {
  const offset = (i - 12.5) * 7.5; // -94px to +94px spread at lower-left
  const endOffset = (i - 12.5) * 4.2; // -52px to +52px EXPANDED connection at the logo (104px ribbon height)
  const opacity = 0.2 + 0.65 * (1 - Math.abs(i - 12.5) / 13.5);
  return {
    id: `in-strand-${i}`,
    d: `M 20 ${530 + offset} C ${230 + offset * 0.4} ${420 + offset * 1.1}, ${480 + offset * 0.5} ${330 + endOffset * 1.35}, 700 ${300 + endOffset}`,
    opacity,
  };
});

const OUTBOUND_STRANDS = Array.from({ length: 28 }, (_, i) => {
  const offset = (i - 13.5) * 7.8; // -105px to +105px spread at upper-right
  const startOffset = (i - 13.5) * 3.9; // -52px to +52px EXPANDED emergence from the logo (104px ribbon height)
  const opacity = 0.2 + 0.68 * (1 - Math.abs(i - 13.5) / 14.5);
  return {
    id: `out-strand-${i}`,
    d: `M 700 ${300 + startOffset} C ${880 + startOffset * 1.1} ${170 + startOffset * 0.95}, ${1120 + offset * 0.75} ${170 + offset * 0.95}, 1390 ${90 + offset * 1.2}`,
    opacity,
  };
});

export function Boom2EqualizerPresetFlow() {
  const prefersReducedMotion = useReducedMotion();
  const [activePulseColor, setActivePulseColor] = useState<string>('#16A34A');
  const [pulseTrigger, setPulseTrigger] = useState<number>(0);

  // Periodic trigger for Boom 2 center pulse when presets arrive
  useEffect(() => {
    if (prefersReducedMotion) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % PRESETS.length;
      setActivePulseColor(PRESETS[index].color);
      setPulseTrigger((prev) => prev + 1);
    }, STAGGER_INTERVAL * 1000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section
      id="boom2-equalizer-presets"
      className="relative w-full overflow-hidden bg-white pt-6 pb-4 md:pt-8 md:pb-6 text-slate-900"
      aria-label="Boom 2 31-Band Equalizer Sound Transformation Experience"
    >
      {/* =====================================================
          PURE WHITE BACKGROUND WITH DELICATE AMBIENT TINTS
          ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft blue atmospheric wash on bottom-left */}
        <div className="absolute -left-24 bottom-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] blur-[120px]" />

        {/* Soft pink / purple atmospheric wash on top-right corner */}
        <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.07)_0%,rgba(168,85,247,0.05)_50%,transparent_70%)] blur-[130px]" />

        {/* Subtle center dynamic acoustic halo */}
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] transition-colors duration-1000"
          style={{
            backgroundColor: activePulseColor,
            opacity: 0.035,
          }}
        />
      </div>

      {/* =====================================================
          SECTION HEADER
          ===================================================== */}
      <div className="relative z-10 mx-auto mb-2 max-w-3xl px-6 text-center md:mb-3">

        <h2 className="text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-5xl">
          Control it all, down to the last decibel.
        </h2>

        <p className="mx-auto mt-2.5 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
          A 31-Band Equalizer with 20 dB range lets you adjust individual frequencies of your sound for the best, and most realistic audio experience, that’s suited to you.
        </p>
      </div>

      {/* =====================================================
          DESKTOP CONTINUOUS FLOW CANVAS (1400x560 STAGE)
          Both Blue & Purple ribbons connect to Boom 2 with expanded width
          ===================================================== */}
      <div className="relative z-10 mx-auto hidden h-[540px] w-full max-w-[1400px] select-none lg:block">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1400 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Inbound Expanded Blue Gradient */}
            <linearGradient id="expandedBlueWave" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#0284C7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.95" />
            </linearGradient>

            {/* Outbound Expanded Pink / Purple Gradient */}
            <linearGradient id="expandedPinkPurpleWave" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#C026D3" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>

            {/* Crisp soft glow filter */}
            <filter id="meshGlowLight" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.0" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Inbound Expanded Blue Wave Bundle (Connects to Logo with expanded width) */}
          <g filter="url(#meshGlowLight)">
            {INBOUND_STRANDS.map((strand) => (
              <path
                key={strand.id}
                d={strand.d}
                stroke="url(#expandedBlueWave)"
                strokeWidth="1.3"
                strokeOpacity={strand.opacity}
                fill="none"
              />
            ))}
          </g>

          {/* 2. Outbound Expanded Pink / Purple Wave Bundle (Emerges from Logo with expanded width) */}
          <g filter="url(#meshGlowLight)">
            {OUTBOUND_STRANDS.map((strand) => (
              <path
                key={strand.id}
                d={strand.d}
                stroke="url(#expandedPinkPurpleWave)"
                strokeWidth="1.35"
                strokeOpacity={strand.opacity}
                fill="none"
              />
            ))}
          </g>
        </svg>

        {/* ===================================================
            CONTINUOUS STREAM: TRAVELING PRESETS
            =================================================== */}
        {!prefersReducedMotion &&
          PRESETS.map((preset, idx) => {
            const Icon = preset.Icon;
            const staggerDelay = idx * STAGGER_INTERVAL;

            return (
              <div key={`stream-lane-${preset.id}`}>
                {/* PHASE 1: INBOUND BLUE BUBBLE (Left -> Center) */}
                <motion.div
                  className="pointer-events-none absolute left-0 top-0 z-20"
                  style={{ willChange: 'transform, opacity' }}
                  animate={{
                    x: [
                      preset.inStart.x,
                      preset.inC1.x,
                      preset.inC2.x,
                      700,
                    ],
                    y: [
                      preset.inStart.y,
                      preset.inC1.y,
                      preset.inC2.y,
                      preset.laneY,
                    ],
                    scale: [0.75, 1, 0.95, 0.2],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: IN_DURATION,
                    repeat: Infinity,
                    repeatDelay: TOTAL_LOOP_TIME - IN_DURATION,
                    delay: staggerDelay,
                    times: [0, 0.2, 0.8, 1],
                    ease: 'easeInOut',
                  }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-blue-500 bg-[#0C1E4A] shadow-[0_6px_20px_rgba(37,99,235,0.38)]">
                      <div className="absolute inset-[2px] rounded-full border border-blue-400/30 bg-gradient-to-b from-blue-400/25 to-transparent" />
                      <span className="relative z-10 text-xs font-bold tracking-tight text-white drop-shadow-sm">
                        {preset.name}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* PHASE 2: OUTBOUND COLORFUL INSTRUMENT BADGE (Center -> Upper-Right) */}
                <motion.div
                  className="pointer-events-none absolute left-0 top-0 z-20"
                  style={{ willChange: 'transform, opacity' }}
                  animate={{
                    x: [
                      700,
                      preset.outC1.x,
                      preset.outC2.x,
                      preset.outEnd.x,
                    ],
                    y: [
                      preset.laneY,
                      preset.outC1.y,
                      preset.outC2.y,
                      preset.outEnd.y,
                    ],
                    scale: [0.25, 1, 1, 0.75],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: OUT_DURATION,
                    repeat: Infinity,
                    repeatDelay: TOTAL_LOOP_TIME - OUT_DURATION,
                    delay: staggerDelay + IN_DURATION,
                    times: [0, 0.25, 0.85, 1],
                    ease: 'easeOut',
                  }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div
                      className="absolute -top-1 rounded-full opacity-50 blur-md transition-all duration-300"
                      style={{
                        backgroundColor: preset.color,
                        width: `${preset.badgeSize}px`,
                        height: `${preset.badgeSize}px`,
                      }}
                    />

                    <div
                      className="relative flex items-center justify-center rounded-full border-2 border-white shadow-xl transition-transform duration-300"
                      style={{
                        backgroundColor: preset.badgeBg,
                        width: `${preset.badgeSize}px`,
                        height: `${preset.badgeSize}px`,
                        boxShadow: `0 10px 30px ${preset.glow}, inset 0 2px 5px rgba(255,255,255,0.45)`,
                      }}
                    >
                      <Icon className="h-8 w-8 text-white drop-shadow-md" />
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm">
                        <Sparkles className="h-2.5 w-2.5 text-slate-900" />
                      </span>
                    </div>

                    <span
                      className="mt-1.5 rounded-full border border-slate-200 bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur-sm"
                      style={{ borderColor: `${preset.color}50` }}
                    >
                      {preset.name}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}

        {/* ===================================================
            CENTER: BOOM 2 PROCESSING ENGINE AT (700, 300)
            Both the blue wave and the purple wave connect seamlessly across its 104px vertical height
            =================================================== */}
        <div className="absolute left-[700px] top-[300px] z-30 -translate-x-1/2 -translate-y-1/2">
          {/* 1. Outer Soft Radial Halo */}
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,rgba(168,85,247,0.08)_50%,transparent_70%)] blur-md" />

          {/* 2. Concentric Orbit Guide Ring */}
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/90" />

          {/* 3. Smooth Rotating Orbital Satellite Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/60"
          >
            <span className="absolute bottom-[16%] right-[10%] h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06B6D4]" />
            <span className="absolute top-[18%] left-[12%] h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_#EC4899]" />
          </motion.div>

          {/* 4. Reactive Sonic Shockwave */}
          <AnimatePresence>
            <motion.div
              key={`shockwave-white-${pulseTrigger}`}
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
              style={{ borderColor: activePulseColor }}
              initial={{ width: 100, height: 100, opacity: 0.85 }}
              animate={{
                width: [100, 200, 310],
                height: [100, 200, 310],
                opacity: [0.85, 0.4, 0],
              }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            />
          </AnimatePresence>

          {/* 5. Deep Obsidian Circular Boom 2 Core */}
          <motion.div
            className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full border border-slate-700/60 bg-[#070B14] shadow-2xl transition-shadow duration-500"
            style={{
              boxShadow: `0 20px 50px rgba(15, 23, 42, 0.22), 0 0 35px ${activePulseColor}35, inset 0 0 25px rgba(19,144,251,0.25)`,
            }}
            animate={
              !prefersReducedMotion
                ? {
                    scale: [1, 1.02, 1],
                  }
                : undefined
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute inset-[10px] rounded-full border border-white/10 bg-gradient-to-b from-blue-900/20 to-black/60" />
            <div className="absolute inset-[24px] rounded-full bg-[radial-gradient(circle,rgba(19,144,251,0.3),transparent_70%)]" />

            <img
              src="/boom2/Boom2-icon.png"
              alt="Boom 2 Audio Processing Engine"
              className="relative z-10 h-[84px] w-[84px] object-contain select-none pointer-events-none drop-shadow-[0_0_15px_rgba(19,144,251,0.5)]"
            />

            <span className="absolute bottom-[26px] z-10 text-[10.5px] font-bold tracking-[0.24em] text-white/85">
              BOOM <span className="text-[#1390FB]">2</span>
            </span>

            <span
              className="absolute right-[30px] top-[32px] h-2 w-2 rounded-full transition-colors duration-500"
              style={{
                backgroundColor: activePulseColor,
                boxShadow: `0 0 12px ${activePulseColor}`,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE MOBILE STREAM VIEW (< lg)
          ===================================================== */}
      <div className="relative z-10 mx-auto block px-6 lg:hidden">
        <div className="relative mx-auto flex flex-col items-center rounded-3xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-sm backdrop-blur-md">
          <div className="relative mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full border border-slate-800 bg-[#070B14] shadow-xl">
            <img
              src="/boom2/Boom2-icon.png"
              alt="Boom 2 Engine"
              className="h-11 w-11 object-contain"
            />
            <span className="absolute bottom-1.5 text-[8.5px] font-bold tracking-widest text-white/75">
              BOOM <span className="text-[#1390FB]">2</span>
            </span>
          </div>

          <div className="w-full space-y-2.5">
            {PRESETS.slice(0, 4).map((preset) => {
              const Icon = preset.Icon;

              return (
                <div
                  key={`mobile-lane-${preset.id}`}
                  className="flex w-full items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500 bg-[#0C1E4A] font-bold text-xs text-white shadow-sm">
                      {preset.name.slice(0, 3)}
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-slate-800">
                        {preset.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {preset.genre}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-blue-500">→</div>

                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white shadow-md"
                    style={{
                      backgroundColor: preset.badgeBg,
                      boxShadow: `0 0 12px ${preset.glow}`,
                    }}
                  >
                    <Icon className="h-4.5 w-4.5 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boom2EqualizerPresetFlow;
