import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FlowingAudioWaveform } from './FlowingAudioWaveform';

export function Boom3DVolumeBooster() {
  const { t } = useTranslation();
  // Volume level ranges from 100% (Unity +0dB) to 300% (Maximum Overdrive +18dB)
  const [volume, setVolume] = useState<number>(200);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const knobRef = useRef<HTMLDivElement>(null);

  // Normalized progress (0.0 at 100%, 1.0 at 300%)
  const progress = (volume - 100) / 200;
  // Rotation angle for knob dial (-135deg at 100% to +135deg at 300%)
  const knobAngle = -135 + progress * 270;

  // Real-time wave dynamics: scale amplitude, bar heights and speed smoothly with volume
  const waveIntensity = 0.65 + progress * 1.5;


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
      className="relative py-16 lg:py-24 overflow-hidden bg-white text-gray-900 scroll-mt-20 md:scroll-mt-24 select-none"
    >
      {/* Background Soft Studio Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full blur-[150px] pointer-events-none transition-all duration-700 opacity-25"
        style={{
          background:
            volume >= 250
              ? 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(139,92,246,0.18) 45%, rgba(6,182,212,0.08) 70%, transparent 80%)'
              : 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, rgba(99,102,241,0.16) 40%, rgba(168,85,247,0.08) 70%, transparent 80%)',
        }}
      />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-blue-50/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-14 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] leading-tight"
          >
            {t('boom3d.volume_booster.title', 'Complete Volume Control')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-[740px] mx-auto font-normal"
          >
            {t(
              'boom3d.volume_booster.subtitle',
              'Safely increase the volume beyond its regular limits, and take granular control over every individual app on your system.'
            )}
          </motion.p>
        </div>

        {/* ================================================================== */}
        {/* MAIN VISUALIZATION STAGE: NO OVERFLOW, NO CUTOFF, BALANCED SIZES    */}
        {/* ================================================================== */}
        <div className="relative w-full py-4 sm:py-6 md:py-12 flex flex-row items-center justify-between gap-0.5 sm:gap-2 md:gap-4 overflow-visible">
          
          {/* ---------------------------------------------------------------- */}
          {/* 1. LEFT: PHOTOREALISTIC MODERN OPEN LAPTOP (100% TRANSPARENT)     */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex flex-col items-center justify-center shrink-0 w-[64px] xs:w-[82px] sm:w-[150px] md:w-[200px] lg:w-[260px] relative z-20">
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              {/* Clean Transparent Laptop */}
              <img
                src="/boom3D/macbook-transparent.png"
                alt="Realistic modern open laptop with metallic unibody"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 2. BETWEEN LEFT & CENTER: DYNAMIC VOLUME-RESPONSIVE WAVEFORM     */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex-1 items-center justify-center min-w-0 relative flex -ml-4 xs:-ml-6 sm:-ml-20 md:-ml-28 lg:-ml-36 -mr-1.5 xs:-mr-2 sm:-mr-5 md:-mr-8 z-10 pointer-events-none">
            <FlowingAudioWaveform
              progress={progress}
              variant="left-segment"
              viewBoxWidth={280}
              viewBoxHeight={120}
              barCount={30}
              className="h-14 xs:h-18 sm:h-28 md:h-32"
            />
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 3. CENTER: METALLIC ROTARY VOLUME KNOB WITH FIXED UPRIGHT TEXT    */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex flex-col items-center justify-center relative shrink-0 z-20">
            {/* Curved Directional Adjustment Arc Above Knob */}
            <div className="relative mb-0.5 sm:mb-2 flex items-center justify-center scale-75 xs:scale-85 sm:scale-100 origin-bottom">
              <svg width="190" height="28" viewBox="0 0 200 28" className="overflow-visible pointer-events-none">
                <path
                  d="M 22,25 Q 100,2 178,25"
                  fill="none"
                  stroke="url(#arcDirectionGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="5 4"
                />
                <polygon
                  points="19,27 25,19 15,21"
                  fill="#00f0ff"
                />
                <polygon
                  points="181,27 175,19 185,21"
                  fill="#a855f7"
                />
                <defs>
                  <linearGradient id="arcDirectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#a855f7" />
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
              className="relative w-[96px] h-[96px] xs:w-[118px] xs:h-[118px] sm:w-[170px] sm:h-[170px] md:w-[210px] md:h-[210px] lg:w-[225px] lg:h-[225px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none group"
              title="Drag around the dial or use mouse wheel to modulate volume"
            >
              {/* Outer Circular SVG Progress Gauge */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 280 280">
                {/* Background Track */}
                <circle
                  cx="140"
                  cy="140"
                  r="122"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="7"
                  strokeDasharray="575"
                  strokeDashoffset="144"
                  strokeLinecap="round"
                />

                {/* Active Neon Progress Arc */}
                <circle
                  cx="140"
                  cy="140"
                  r="122"
                  fill="none"
                  stroke="url(#knobArcGrad)"
                  strokeWidth="9"
                  strokeDasharray="575"
                  strokeDashoffset={575 - progress * 431}
                  strokeLinecap="round"
                  style={{
                    filter:
                      volume >= 250
                        ? 'drop-shadow(0 0 10px rgba(236,72,153,0.85))'
                        : 'drop-shadow(0 0 9px rgba(6,182,212,0.75))',
                  }}
                />

                {/* Dial Tick Marks */}
                {Array.from({ length: 28 }).map((_, i) => {
                  const tickAngle = -135 + (i / 27) * 270;
                  const rad = (tickAngle * Math.PI) / 180;
                  const x1 = 140 + Math.cos(rad) * 130;
                  const y1 = 140 + Math.sin(rad) * 130;
                  const x2 = 140 + Math.cos(rad) * 136;
                  const y2 = 140 + Math.sin(rad) * 136;
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
                className="absolute w-[86px] h-[86px] xs:w-[104px] xs:h-[104px] sm:w-[150px] sm:h-[150px] md:w-[185px] md:h-[185px] rounded-full blur-xl pointer-events-none transition-all duration-300"
                style={{
                  background:
                    volume >= 250
                      ? 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(6,182,212,0.45) 0%, transparent 70%)',
                  opacity: isDragging ? 0.9 : 0.45,
                }}
              />

              {/* Dark Navy Outer Bezel Ring */}
              <div className="w-[82px] h-[82px] xs:w-[102px] xs:h-[102px] sm:w-[145px] sm:h-[145px] md:w-[175px] md:h-[175px] rounded-full bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] p-1.5 xs:p-2 sm:p-2.5 shadow-[0_16px_35px_rgba(15,23,42,0.35)] flex items-center justify-center border border-slate-700/60 relative">
                {/* Glowing LED Ring */}
                <div
                  className="w-full h-full rounded-full p-1.5 xs:p-2 flex items-center justify-center transition-all duration-300 relative"
                  style={{
                    border: `2px solid ${volume >= 250 ? '#ec4899' : '#06b6d4'}`,
                    boxShadow:
                      volume >= 250
                        ? '0 0 18px rgba(236,72,153,0.6), inset 0 0 12px rgba(236,72,153,0.3)'
                        : '0 0 14px rgba(6,182,212,0.5), inset 0 0 10px rgba(6,182,212,0.25)',
                  }}
                >
                  {/* Rotating Brushed Silver Metallic Face */}
                  <div
                    className="w-full h-full rounded-full relative shadow-inner transition-transform duration-75"
                    style={{
                      background:
                        'conic-gradient(from 45deg, #f8fafc 0deg, #cbd5e1 60deg, #f8fafc 120deg, #94a3b8 180deg, #f8fafc 240deg, #cbd5e1 300deg, #f8fafc 360deg)',
                      transform: `rotate(${knobAngle}deg)`,
                    }}
                  >
                    {/* Rotating Indicator Notch */}
                    <div
                      className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 xs:w-2 h-3.5 xs:h-4 sm:h-5 rounded-full shadow-md"
                      style={{
                        backgroundColor: volume >= 250 ? '#ec4899' : '#06b6d4',
                        boxShadow:
                          volume >= 250
                            ? '0 0 10px #ec4899'
                            : '0 0 8px #06b6d4',
                      }}
                    />
                  </div>

                  {/* STATIC NON-ROTATING METALLIC CENTER CAP WITH PERFECT UPRIGHT TEXT */}
                  <div className="absolute inset-0 m-auto w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#cbd5e1] via-[#f1f5f9] to-[#ffffff] border border-gray-300 shadow-md flex flex-col items-center justify-center pointer-events-none z-10">
                    <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-black text-gray-900 tracking-tight leading-none">
                      {volume}%
                    </span>
                    <span
                      className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-[10px] font-mono font-bold mt-0.5"
                      style={{ color: volume >= 250 ? '#ec4899' : '#2563eb' }}
                    >
                      {volume >= 250 ? '+18 dB' : volume >= 200 ? '+12 dB' : volume >= 150 ? '+6 dB' : '+0 dB'}
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 4. BETWEEN CENTER & RIGHT: DYNAMIC VOLUME-RESPONSIVE WAVEFORM    */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex-1 items-center justify-center min-w-0 relative flex -ml-1.5 xs:-ml-2 sm:-ml-5 md:-ml-8 -mr-4 xs:-mr-6 sm:-mr-16 md:-mr-24 lg:-mr-28 z-10 pointer-events-none">
            <FlowingAudioWaveform
              progress={progress}
              variant="right-segment"
              viewBoxWidth={320}
              viewBoxHeight={120}
              barCount={36}
              className="h-14 xs:h-18 sm:h-28 md:h-32"
            />
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 5. RIGHT: TWO LARGE STUDIO SPEAKERS (FULLY VISIBLE & VIBRATING)  */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex flex-col items-center justify-center shrink-0 w-[54px] xs:w-[70px] sm:w-[115px] md:w-[155px] lg:w-[195px] relative z-20">
            {/* Vibrating Speaker Cabinet & Woofer Base */}
            <motion.div
              animate={
                progress > 0.05
                  ? {
                      scale: [
                        1,
                        1 + 0.035 * progress,
                        1 - 0.015 * progress,
                        1 + 0.022 * progress,
                        1,
                      ],
                      y: [0, -2.5 * progress, 1.8 * progress, -0.8 * progress, 0],
                      x: [0, -0.8 * progress, 0.8 * progress, 0],
                    }
                  : { scale: 1, y: 0, x: 0 }
              }
              transition={{
                duration: Math.max(0.08, 0.22 / waveIntensity),
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full aspect-[3/4] flex items-center justify-center"
            >
              {/* Photorealistic Stacked Studio Monitors Render (100% Transparent PNG) */}
              <img
                src="/boom3D/speakers-transparent.png"
                alt="Two professional studio monitor speakers stacked vertically with vibrating metallic blue cones"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.14)]"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
