import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Volume2, Zap, ShieldCheck, Sliders } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom3DVolumeBooster() {
  const { t } = useTranslation();
  // Volume level ranges from 100% (Standard Unity) to 300% (Maximum Overdrive)
  const [volume, setVolume] = useState<number>(200);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const knobRef = useRef<HTMLDivElement>(null);

  // Quick preset calibration options
  const presets = [
    { level: 100, label: '100% Standard', db: '+0 dB' },
    { level: 150, label: '150% Dynamic', db: '+6 dB' },
    { level: 200, label: '200% Cinema', db: '+12 dB' },
    { level: 300, label: '300% Max Boom', db: '+18 dB' },
  ];

  // Normalized progress (0.0 at 100%, 1.0 at 300%)
  const progress = (volume - 100) / 200;
  // Rotation angle for knob dial (-135deg at 100% to +135deg at 300%)
  const knobAngle = -135 + progress * 270;

  // Real-time wave dynamics
  const waveIntensity = 0.6 + progress * 1.8;
  const waveAmplitude = 18 + progress * 46; // Amplitude scaling from 18px to 64px

  // Dynamic colors matching futuristic audio aesthetic
  const wavePrimaryColor =
    volume >= 250 ? '#ec4899' : volume >= 180 ? '#8b5cf6' : '#06b6d4';
  const waveSecondaryColor =
    volume >= 250 ? '#f43f5e' : volume >= 180 ? '#6366f1' : '#3b82f6';

  // Interactive Circular Drag Controller
  const updateVolumeFromPointer = useCallback((clientX: number, clientY: number) => {
    if (!knobRef.current) return;
    const rect = knobRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;
    let angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (angleDeg > 180) angleDeg -= 360;

    const clampedAngle = Math.max(-135, Math.min(135, angleDeg));
    const newProgress = (clampedAngle + 135) / 270;
    const newVolume = Math.round(100 + newProgress * 200);
    setVolume(newVolume);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateVolumeFromPointer(e.clientX, e.clientY);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateVolumeFromPointer(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const step = e.deltaY < 0 ? 5 : -5;
    setVolume((prev) => Math.max(100, Math.min(300, prev + step)));
  };

  return (
    <section
      id="boom-volume-booster"
      className="relative py-20 lg:py-28 overflow-hidden bg-white text-gray-900 scroll-mt-20 md:scroll-mt-24 select-none"
    >
      {/* Background Studio Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-30"
        style={{
          background:
            volume >= 250
              ? 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(139,92,246,0.2) 45%, rgba(6,182,212,0.1) 70%, transparent 80%)'
              : 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(99,102,241,0.2) 40%, rgba(168,85,247,0.1) 70%, transparent 80%)',
        }}
      />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-14 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] leading-tight"
          >
            {t('boom3d.volume_booster.title', 'Complete Volume Control')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 leading-relaxed max-w-[760px] mx-auto font-normal"
          >
            {t(
              'boom3d.volume_booster.subtitle',
              'Safely increase the volume beyond its regular limits, and take granular control over every individual app on your system.'
            )}
          </motion.p>
        </div>

        {/* ================================================================== */}
        {/* MAIN VISUALIZATION STAGE: 4 HORIZONTAL ELEMENTS                     */}
        {/* ================================================================== */}
        <div className="relative w-full py-6 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          
          {/* ---------------------------------------------------------------- */}
          {/* 1. LEFT: PHOTOREALISTIC MODERN OPEN LAPTOP                       */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex flex-col items-center justify-center shrink-0 w-[260px] sm:w-[300px] lg:w-[320px] relative">
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              {/* Photorealistic MacBook Studio Render (100% Transparent PNG) */}
              <img
                src="/boom3D/macbook-transparent.png"
                alt="Realistic modern open laptop with metallic unibody"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
              />

              {/* Dynamic Screen Luminous Glow linked to volume */}
              <div
                className="absolute top-[14%] left-[22%] w-[50%] h-[44%] rounded-lg pointer-events-none mix-blend-screen transition-all duration-300"
                style={{
                  background:
                    volume >= 250
                      ? 'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.45) 0%, rgba(139,92,246,0.2) 50%, transparent 80%)'
                      : 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.5) 0%, rgba(59,130,246,0.25) 50%, transparent 80%)',
                  opacity: 0.4 + progress * 0.6,
                }}
              />
            </div>

            <span className="mt-2 text-xs font-mono font-medium text-gray-400 uppercase tracking-wider">
              System Audio Source
            </span>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 2. BETWEEN LEFT & CENTER: FLOWING SINE WAVES & EQUALIZER BARS     */}
          {/* ---------------------------------------------------------------- */}
          <div className="hidden lg:flex flex-1 items-center justify-center px-1 relative min-w-[130px] max-w-[210px]">
            <svg viewBox="0 0 200 110" className="w-full h-28 overflow-visible">
              <defs>
                <linearGradient id="leftWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="60%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor={wavePrimaryColor} />
                </linearGradient>
                <linearGradient id="leftWaveFill" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(56, 189, 248, 0.18)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.22)" />
                </linearGradient>
              </defs>

              {/* Translucent Filled Wave Ribbon */}
              <motion.path
                animate={{
                  d: [
                    `M 0,55 Q 50,${55 - waveAmplitude * 0.45} 100,55 T 200,55 L 200,65 Q 100,${65 + waveAmplitude * 0.35} 0,65 Z`,
                    `M 0,55 Q 50,${55 + waveAmplitude * 0.45} 100,55 T 200,55 L 200,65 Q 100,${65 - waveAmplitude * 0.35} 0,65 Z`,
                    `M 0,55 Q 50,${55 - waveAmplitude * 0.45} 100,55 T 200,55 L 200,65 Q 100,${65 + waveAmplitude * 0.35} 0,65 Z`,
                  ],
                }}
                transition={{
                  duration: 1.3 / waveIntensity,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                fill="url(#leftWaveFill)"
              />

              {/* Primary Flowing Sine Wave Ribbon */}
              <motion.path
                animate={{
                  d: [
                    `M 0,55 Q 50,${55 - waveAmplitude * 0.5} 100,55 T 200,55`,
                    `M 0,55 Q 50,${55 + waveAmplitude * 0.5} 100,55 T 200,55`,
                    `M 0,55 Q 50,${55 - waveAmplitude * 0.5} 100,55 T 200,55`,
                  ],
                }}
                transition={{
                  duration: 1.3 / waveIntensity,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                fill="none"
                stroke="url(#leftWaveGrad)"
                strokeWidth="3.2"
                strokeLinecap="round"
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.6))',
                }}
              />

              {/* Secondary Harmonic Wave */}
              <motion.path
                animate={{
                  d: [
                    `M 0,55 Q 50,${55 + waveAmplitude * 0.35} 100,55 T 200,55`,
                    `M 0,55 Q 50,${55 - waveAmplitude * 0.35} 100,55 T 200,55`,
                    `M 0,55 Q 50,${55 + waveAmplitude * 0.35} 100,55 T 200,55`,
                  ],
                }}
                transition={{
                  duration: 1.6 / waveIntensity,
                  repeat: Infinity,
                  delay: 0.15,
                  ease: 'easeInOut',
                }}
                fill="none"
                stroke="#818cf8"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-70"
              />

              {/* Pulsing Vertical Equalizer Bars */}
              {[25, 55, 85, 115, 145, 175].map((x, i) => {
                const barHeight = (12 + Math.sin(i * 0.9) * 9) * waveIntensity * 0.8;
                return (
                  <motion.line
                    key={x}
                    animate={{
                      y1: [55 - barHeight / 2, 55 - (barHeight * 1.3) / 2, 55 - barHeight / 2],
                      y2: [55 + barHeight / 2, 55 + (barHeight * 1.3) / 2, 55 + barHeight / 2],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.08,
                      ease: 'easeInOut',
                    }}
                    x1={x}
                    x2={x}
                    stroke="#38bdf8"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    className="opacity-80"
                  />
                );
              })}
            </svg>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 3. CENTER: PREMIUM ROTARY BRUSHED VOLUME KNOB                    */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex flex-col items-center justify-center relative shrink-0">
            {/* Curved Directional Adjustment Arc Above Knob */}
            <div className="relative mb-2 flex items-center justify-center">
              <svg width="220" height="32" viewBox="0 0 220 32" className="overflow-visible pointer-events-none">
                <path
                  d="M 25,28 Q 110,2 195,28"
                  fill="none"
                  stroke="url(#arcDirectionGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                />
                <polygon
                  points="22,30 28,22 17,23"
                  fill={volume >= 250 ? '#ec4899' : '#06b6d4'}
                />
                <polygon
                  points="198,30 192,22 203,23"
                  fill={volume >= 250 ? '#ec4899' : '#8b5cf6'}
                />
                <defs>
                  <linearGradient id="arcDirectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor={volume >= 250 ? '#ec4899' : '#3b82f6'} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Interactive Volume Knob Housing */}
            <div
              ref={knobRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onWheel={handleWheel}
              className="relative w-[240px] h-[240px] sm:w-[270px] sm:h-[270px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none group"
              title="Drag around the dial or use mouse wheel to modulate volume"
            >
              {/* Outer Circular SVG Progress Gauge */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 300 300">
                {/* Background Track (270 degrees) */}
                <circle
                  cx="150"
                  cy="150"
                  r="132"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="8"
                  strokeDasharray="622"
                  strokeDashoffset="155"
                  strokeLinecap="round"
                />

                {/* Active Neon Progress Arc */}
                <circle
                  cx="150"
                  cy="150"
                  r="132"
                  fill="none"
                  stroke="url(#knobArcGrad)"
                  strokeWidth="10"
                  strokeDasharray="622"
                  strokeDashoffset={622 - progress * 467}
                  strokeLinecap="round"
                  style={{
                    filter:
                      volume >= 250
                        ? 'drop-shadow(0 0 12px rgba(236,72,153,0.85))'
                        : 'drop-shadow(0 0 10px rgba(6,182,212,0.75))',
                  }}
                />

                {/* Dial Tick Marks */}
                {Array.from({ length: 28 }).map((_, i) => {
                  const tickAngle = -135 + (i / 27) * 270;
                  const rad = (tickAngle * Math.PI) / 180;
                  const x1 = 150 + Math.cos(rad) * 140;
                  const y1 = 150 + Math.sin(rad) * 140;
                  const x2 = 150 + Math.cos(rad) * 146;
                  const y2 = 150 + Math.sin(rad) * 146;
                  const isActive = tickAngle <= knobAngle;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? (volume >= 250 ? '#ec4899' : '#3b82f6') : '#cbd5e1'}
                      strokeWidth={isActive ? '2.5' : '1.5'}
                      strokeLinecap="round"
                    />
                  );
                })}

                <defs>
                  <linearGradient id="knobArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="80%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Glowing Halo on Interaction */}
              <div
                className="absolute w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] rounded-full blur-xl pointer-events-none transition-all duration-300"
                style={{
                  background:
                    volume >= 250
                      ? 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(6,182,212,0.45) 0%, transparent 70%)',
                  opacity: isDragging ? 0.9 : 0.45,
                }}
              />

              {/* Dark Navy Outer Bezel Ring */}
              <div className="w-[195px] h-[195px] sm:w-[215px] sm:h-[215px] rounded-full bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] p-2.5 shadow-[0_18px_40px_rgba(15,23,42,0.35)] flex items-center justify-center border border-slate-700/60 relative">
                {/* Glowing Electric-Blue and Violet LED Ring */}
                <div
                  className="w-full h-full rounded-full p-2 flex items-center justify-center transition-all duration-300"
                  style={{
                    border: `2px solid ${volume >= 250 ? '#ec4899' : '#06b6d4'}`,
                    boxShadow:
                      volume >= 250
                        ? '0 0 20px rgba(236,72,153,0.6), inset 0 0 15px rgba(236,72,153,0.3)'
                        : '0 0 16px rgba(6,182,212,0.5), inset 0 0 12px rgba(6,182,212,0.25)',
                  }}
                >
                  {/* Brushed Silver Metallic Knob Face */}
                  <div
                    className="w-full h-full rounded-full relative flex items-center justify-center shadow-inner transition-transform duration-75"
                    style={{
                      background:
                        'conic-gradient(from 45deg, #f8fafc 0deg, #cbd5e1 60deg, #f8fafc 120deg, #94a3b8 180deg, #f8fafc 240deg, #cbd5e1 300deg, #f8fafc 360deg)',
                      transform: `rotate(${knobAngle}deg)`,
                    }}
                  >
                    {/* Metallic Center Cap */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#cbd5e1] via-[#f1f5f9] to-[#ffffff] border border-gray-300 shadow-md flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gray-400/40" />
                    </div>

                    {/* Indicator Notch */}
                    <div
                      className="absolute top-2 w-2.5 h-6 rounded-full shadow-md"
                      style={{
                        backgroundColor: volume >= 250 ? '#ec4899' : '#06b6d4',
                        boxShadow:
                          volume >= 250
                            ? '0 0 10px #ec4899'
                            : '0 0 8px #06b6d4',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Cursor Pointer Indicator Touching the Lower-Right Edge */}
              <div className="absolute -bottom-1 -right-1 z-30 pointer-events-none flex items-center gap-1.5 drop-shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-900">
                  <path
                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                    fill="black"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[11px] font-bold text-gray-500 bg-white/90 px-1.5 py-0.5 rounded shadow-sm border border-gray-200">
                  {volume}%
                </span>
              </div>
            </div>

            <span className="mt-3 text-xs font-mono font-medium text-gray-400 uppercase tracking-wider">
              Gain Booster Dial
            </span>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 4. BETWEEN CENTER & RIGHT: POWERFUL EXPANDED AMPLIFIED WAVES      */}
          {/* ---------------------------------------------------------------- */}
          <div className="hidden lg:flex flex-1 items-center justify-center px-1 relative min-w-[150px] max-w-[270px]">
            <svg viewBox="0 0 260 140" className="w-full h-32 overflow-visible">
              <defs>
                <linearGradient id="rightWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor={waveSecondaryColor} />
                  <stop offset="100%" stopColor={wavePrimaryColor} />
                </linearGradient>
                <linearGradient id="rightWaveFill" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                  <stop offset="50%" stopColor="rgba(99, 102, 241, 0.25)" />
                  <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
                </linearGradient>
              </defs>

              {/* Translucent Broad Expanding Wave Ribbon */}
              <motion.path
                animate={{
                  d: [
                    `M 0,70 Q 65,${70 - waveAmplitude * 0.9} 130,70 T 260,70 L 260,85 Q 130,${85 + waveAmplitude * 0.8} 0,85 Z`,
                    `M 0,70 Q 65,${70 + waveAmplitude * 0.9} 130,70 T 260,70 L 260,85 Q 130,${85 - waveAmplitude * 0.8} 0,85 Z`,
                    `M 0,70 Q 65,${70 - waveAmplitude * 0.9} 130,70 T 260,70 L 260,85 Q 130,${85 + waveAmplitude * 0.8} 0,85 Z`,
                  ],
                }}
                transition={{
                  duration: 0.85 / waveIntensity,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                fill="url(#rightWaveFill)"
              />

              {/* High-Energy Primary Sine Ribbon */}
              <motion.path
                animate={{
                  d: [
                    `M 0,70 Q 65,${70 - waveAmplitude} 130,70 T 260,70`,
                    `M 0,70 Q 65,${70 + waveAmplitude} 130,70 T 260,70`,
                    `M 0,70 Q 65,${70 - waveAmplitude} 130,70 T 260,70`,
                  ],
                }}
                transition={{
                  duration: 0.85 / waveIntensity,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                fill="none"
                stroke="url(#rightWaveGrad)"
                strokeWidth={3.8 + progress * 2.2}
                strokeLinecap="round"
                style={{
                  filter:
                    volume >= 250
                      ? 'drop-shadow(0 0 12px rgba(236,72,153,0.85))'
                      : 'drop-shadow(0 0 10px rgba(139,92,246,0.75))',
                }}
              />

              {/* Secondary Harmonic Sine Ribbon */}
              <motion.path
                animate={{
                  d: [
                    `M 0,70 Q 65,${70 + waveAmplitude * 0.75} 130,70 T 260,70`,
                    `M 0,70 Q 65,${70 - waveAmplitude * 0.75} 130,70 T 260,70`,
                    `M 0,70 Q 65,${70 + waveAmplitude * 0.75} 130,70 T 260,70`,
                  ],
                }}
                transition={{
                  duration: 1.05 / waveIntensity,
                  repeat: Infinity,
                  delay: 0.1,
                  ease: 'easeInOut',
                }}
                fill="none"
                stroke={wavePrimaryColor}
                strokeWidth="2.8"
                strokeLinecap="round"
                className="opacity-80"
              />

              {/* Dynamic Sound Spectrum Equalizer Bars Cluster */}
              {[20, 50, 80, 110, 140, 170, 200, 230].map((x, i) => {
                const barHeight = (16 + Math.sin(i * 1.1) * 14) * waveIntensity;
                return (
                  <motion.line
                    key={x}
                    animate={{
                      y1: [70 - barHeight / 2, 70 - (barHeight * 1.4) / 2, 70 - barHeight / 2],
                      y2: [70 + barHeight / 2, 70 + (barHeight * 1.4) / 2, 70 + barHeight / 2],
                    }}
                    transition={{
                      duration: 0.38,
                      repeat: Infinity,
                      delay: i * 0.04,
                      ease: 'easeInOut',
                    }}
                    x1={x}
                    x2={x}
                    stroke={i % 2 === 0 ? wavePrimaryColor : waveSecondaryColor}
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    className="opacity-90"
                  />
                );
              })}
            </svg>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 5. RIGHT: TWO LARGE PROFESSIONAL VERTICAL STUDIO SPEAKERS        */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex flex-col items-center justify-center shrink-0 w-[200px] sm:w-[220px] lg:w-[240px] relative">
            <div className="relative w-full aspect-[3/4] flex items-center justify-center">
              {/* Photorealistic Stacked Studio Monitors Render (100% Transparent PNG) */}
              <img
                src="/boom3D/speakers-transparent.png"
                alt="Two professional studio monitor speakers stacked vertically with metallic blue cones"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.14)]"
              />

              {/* Pulsing Concentric Sound Waves Radiating from the Speaker Cones */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none">
                <motion.div
                  animate={{
                    scale: [0.9, 1.4, 1.8],
                    opacity: [0.7 * progress, 0.25 * progress, 0],
                  }}
                  transition={{
                    duration: 1.2 / waveIntensity,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/40"
                />
                <motion.div
                  animate={{
                    scale: [0.9, 1.5, 2.1],
                    opacity: [0.5 * progress, 0.15 * progress, 0],
                  }}
                  transition={{
                    duration: 1.2 / waveIntensity,
                    repeat: Infinity,
                    delay: 0.35,
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                />
              </div>
            </div>

            <span className="mt-2 text-xs font-mono font-medium text-gray-400 uppercase tracking-wider">
              Studio Reference Monitors
            </span>
          </div>

        </div>

        {/* ================================================================== */}
        {/* INTERACTIVE CALIBRATION DOCK (PRESETS & LEVEL METER)                */}
        {/* ================================================================== */}
        <div className="mt-6 md:mt-10 max-w-[850px] mx-auto bg-[#f8fafc] border border-gray-200/80 rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-md"
                style={{
                  background:
                    volume >= 250
                      ? 'linear-gradient(135deg, #ec4899, #8b5cf6)'
                      : 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                }}
              >
                <Volume2 size={22} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-gray-400 font-mono">
                  Master Output Calibration
                </div>
                <div className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2">
                  <span>{volume}% Boost</span>
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    style={{
                      backgroundColor: volume >= 250 ? '#fdf2f8' : '#eff6ff',
                      color: volume >= 250 ? '#db2777' : '#2563eb',
                    }}
                  >
                    {volume >= 250
                      ? '+18 dB Overdrive'
                      : volume >= 200
                      ? '+12 dB Cinema'
                      : volume >= 150
                      ? '+6 dB Dynamic'
                      : '+0 dB Unity'}
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Waveform Micro Equalizer */}
            <div className="flex items-end gap-1.5 h-8 px-3.5 py-1.5 bg-white rounded-xl border border-gray-200 shadow-xs">
              {Array.from({ length: 14 }).map((_, i) => {
                const heightPercent = Math.min(
                  100,
                  Math.max(15, (Math.sin(i * 0.65) * 0.5 + 0.5) * 100 * waveIntensity)
                );
                return (
                  <motion.div
                    key={i}
                    animate={{
                      height: [`${heightPercent * 0.35}%`, `${heightPercent}%`, `${heightPercent * 0.55}%`],
                    }}
                    transition={{
                      duration: 0.55 / waveIntensity,
                      repeat: Infinity,
                      delay: i * 0.04,
                      ease: 'easeInOut',
                    }}
                    className="w-1.5 rounded-full"
                    style={{
                      backgroundColor:
                        volume >= 250
                          ? i > 9
                            ? '#ec4899'
                            : '#8b5cf6'
                          : i > 9
                          ? '#8b5cf6'
                          : '#06b6d4',
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Quick Calibration Preset Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-gray-200/60">
            {presets.map((preset) => {
              const isSelected = volume === preset.level;
              return (
                <button
                  key={preset.level}
                  type="button"
                  onClick={() => setVolume(preset.level)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col items-center gap-0.5 ${
                    isSelected
                      ? 'bg-gray-900 text-white shadow-md scale-[1.02]'
                      : 'bg-white text-gray-600 hover:bg-gray-100/80 border border-gray-200/70'
                  }`}
                >
                  <span>{preset.label}</span>
                  <span
                    className={`text-[10px] font-mono font-normal ${
                      isSelected ? 'text-gray-300' : 'text-gray-400'
                    }`}
                  >
                    {preset.db}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================== */}
        {/* TECH HIGHLIGHT CARDS (3-COLUMN CLEAN WHITE STUDIO CARDS)           */}
        {/* ================================================================== */}
        <div className="mt-14 md:mt-20 pt-10 border-t border-gray-200/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-200/70 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-5 group-hover:scale-110 transition-transform">
              <Zap size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">300% Maximum Overdrive</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              Elevates audio volume up to 300% beyond standard operating system thresholds without introducing digital distortion or clipping.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-200/70 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Hardware Protection Limiter</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              Intelligent zero-latency peak limiters protect MacBook drivers, external monitors, and sensitive headphone diaphragms from blowout.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-200/70 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-5 group-hover:scale-110 transition-transform">
              <Sliders size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Granular Control</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              Provides precision calibration across all audio frequencies, ensuring rich dialogue and deep acoustic warmth at any volume.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
