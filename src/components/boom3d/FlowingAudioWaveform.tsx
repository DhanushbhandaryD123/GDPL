import React, { useMemo } from 'react';
import { motion } from 'motion/react';

export interface FlowingAudioWaveformProps {
  /**
   * Normalized progress from 0 (low/100% volume) to 1 (max/300% volume)
   */
  progress?: number;
  /**
   * Raw volume percentage (100 to 300)
   */
  volume?: number;
  /**
   * Total number of vertical equalizer bars
   */
  barCount?: number;
  /**
   * Waveform segment mode:
   * - 'full': Complete start-to-end waveform (starts low, rises in middle/right, tapers down)
   * - 'left-segment': Optimized for laptop → volume knob
   * - 'right-segment': Optimized for volume knob → speaker
   */
  variant?: 'full' | 'left-segment' | 'right-segment';
  /**
   * Additional container CSS classes
   */
  className?: string;
  /**
   * SVG ViewBox width (default 320 for segments, 640 for full)
   */
  viewBoxWidth?: number;
  /**
   * SVG ViewBox height (default 120)
   */
  viewBoxHeight?: number;
  /**
   * Show connection dots at the ends
   */
  showConnectionNodes?: boolean;
}

export const FlowingAudioWaveform: React.FC<FlowingAudioWaveformProps> = ({
  progress: progressProp,
  volume,
  barCount = 34,
  variant = 'full',
  className = '',
  viewBoxWidth = 320,
  viewBoxHeight = 120,
  showConnectionNodes = false,
}) => {
  // Determine normalized progress (0.0 to 1.0)
  const progress = useMemo(() => {
    if (typeof progressProp === 'number') {
      return Math.max(0, Math.min(1, progressProp));
    }
    if (typeof volume === 'number') {
      return Math.max(0, Math.min(1, (volume - 100) / 200));
    }
    return 0.5; // Default medium volume
  }, [progressProp, volume]);

  const centerY = viewBoxHeight / 2; // 60
  const width = viewBoxWidth;

  // Wave intensity and amplitude scaling dynamically with volume
  // Low: 3px (almost flat), Med: 17px, High: 32px
  const curveAmp = 3 + progress * 28;
  const waveSpeed = 0.7 + progress * 1.3;

  // Generate vertical bars with envelope matching user's audio-flow pattern
  const bars = useMemo(() => {
    return Array.from({ length: barCount }, (_, i) => {
      const t = i / (barCount - 1);
      const x = 6 + t * (width - 12);

      let envelope = 0.5;
      if (variant === 'full') {
        // Starts with very low amplitude, increases toward middle/right, tapers down
        // Sinusoidal packet envelope with multi-harmonics
        const baseEnvelope = Math.sin(t * Math.PI);
        const packetMod = 0.4 + 0.6 * Math.sin(t * Math.PI * 2.8 - 0.2);
        envelope = Math.max(0.1, baseEnvelope * packetMod);
      } else if (variant === 'left-segment') {
        // Laptop → Knob: Starts low at laptop, builds up nicely
        const taperLeft = Math.min(1, t * 2.5);
        const packet = 0.35 + 0.65 * (Math.sin(t * Math.PI * 3.0 - 0.3) * 0.5 + 0.5);
        envelope = taperLeft * packet;
      } else {
        // Knob → Speaker: Starts energized at knob, waves into speaker cone
        const taperRight = Math.min(1, (1 - t) * 2.5);
        const packet = 0.35 + 0.65 * (Math.sin(t * Math.PI * 3.2 + 0.4) * 0.5 + 0.5);
        envelope = taperRight * packet;
      }

      return { x, t, envelope, i };
    });
  }, [barCount, width, variant]);

  // Unique ID prefix for gradients to prevent collisions
  const uid = useMemo(() => `flow-wave-${Math.random().toString(36).substr(2, 6)}`, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Subtle Glow Filter */}
          <filter id={`${uid}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={1.5 + progress * 1.5} result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Cyan Curve Gradient */}
          <linearGradient id={`${uid}-cyan`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity={0.85 + progress * 0.15} />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.85 + progress * 0.15} />
          </linearGradient>

          {/* Purple Curve Gradient */}
          <linearGradient id={`${uid}-purple`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8} />
            <stop offset="50%" stopColor="#a855f7" stopOpacity={0.85} />
            <stop offset="100%" stopColor="#c084fc" stopOpacity={0.8} />
          </linearGradient>

          {/* Magenta Curve Gradient */}
          <linearGradient id={`${uid}-magenta`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity={0.75} />
            <stop offset="50%" stopColor="#f43f5e" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#ec4899" stopOpacity={0.75} />
          </linearGradient>
        </defs>

        {/* ================================================================ */}
        {/* 1. THIN NEON MAGENTA/PINK VERTICAL ROUNDED BARS                  */}
        {/* ================================================================ */}
        {bars.map(({ x, envelope, i }) => {
          // At low volume: very small (4px min, 10px max)
          // At high volume: up to 58px max
          const minH = 4 + progress * 6;
          const maxH = 8 + progress * 50;
          const h = minH + envelope * (maxH - minH);
          const delta = (Math.sin(i * 0.9) * 0.35 + 0.65) * (1.2 + progress * 8);

          return (
            <motion.line
              key={i}
              x1={x}
              x2={x}
              animate={{
                y1: [centerY - (h - delta) / 2, centerY - (h + delta) / 2, centerY - (h - delta) / 2],
                y2: [centerY + (h - delta) / 2, centerY + (h + delta) / 2, centerY + (h - delta) / 2],
              }}
              transition={{
                duration: 0.35 + (i % 5) * 0.06,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              stroke="#f43f85"
              strokeWidth={2.4 + progress * 0.6}
              strokeLinecap="round"
              style={{
                filter: `drop-shadow(0 0 ${2 + progress * 4}px rgba(244, 63, 133, ${0.4 + progress * 0.4}))`,
              }}
              opacity={0.85 + progress * 0.15}
            />
          );
        })}

        {/* ================================================================ */}
        {/* 2. SINE CURVE 1: SMOOTH FLOWING CYAN LINE                        */}
        {/* ================================================================ */}
        <motion.path
          animate={{
            d: [
              `M 0,${centerY} C ${width * 0.15},${centerY - curveAmp} ${width * 0.3},${centerY + curveAmp} ${width * 0.45},${centerY - curveAmp} C ${width * 0.6},${centerY + curveAmp} ${width * 0.75},${centerY - curveAmp} ${width * 0.9},${centerY + curveAmp * 0.7} ${width},${centerY}`,
              `M 0,${centerY} C ${width * 0.15},${centerY + curveAmp} ${width * 0.3},${centerY - curveAmp} ${width * 0.45},${centerY + curveAmp} C ${width * 0.6},${centerY - curveAmp} ${width * 0.75},${centerY + curveAmp} ${width * 0.9},${centerY - curveAmp * 0.7} ${width},${centerY}`,
              `M 0,${centerY} C ${width * 0.15},${centerY - curveAmp} ${width * 0.3},${centerY + curveAmp} ${width * 0.45},${centerY - curveAmp} C ${width * 0.6},${centerY + curveAmp} ${width * 0.75},${centerY - curveAmp} ${width * 0.9},${centerY + curveAmp * 0.7} ${width},${centerY}`,
            ],
          }}
          transition={{
            duration: 1.6 / waveSpeed,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          fill="none"
          stroke={`url(#${uid}-cyan)`}
          strokeWidth={1.8 + progress * 0.7}
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 ${3 + progress * 5}px rgba(0, 240, 255, ${0.45 + progress * 0.4}))`,
          }}
        />

        {/* ================================================================ */}
        {/* 3. SINE CURVE 2: SMOOTH FLOWING PURPLE / VIOLET LINE              */}
        {/* ================================================================ */}
        <motion.path
          animate={{
            d: [
              `M 0,${centerY} C ${width * 0.18},${centerY + curveAmp * 0.85} ${width * 0.35},${centerY - curveAmp * 0.85} ${width * 0.52},${centerY + curveAmp * 0.85} C ${width * 0.68},${centerY - curveAmp * 0.85} ${width * 0.82},${centerY + curveAmp * 0.85} ${width * 0.93},${centerY - curveAmp * 0.4} ${width},${centerY}`,
              `M 0,${centerY} C ${width * 0.18},${centerY - curveAmp * 0.85} ${width * 0.35},${centerY + curveAmp * 0.85} ${width * 0.52},${centerY - curveAmp * 0.85} C ${width * 0.68},${centerY + curveAmp * 0.85} ${width * 0.82},${centerY - curveAmp * 0.85} ${width * 0.93},${centerY + curveAmp * 0.4} ${width},${centerY}`,
              `M 0,${centerY} C ${width * 0.18},${centerY + curveAmp * 0.85} ${width * 0.35},${centerY - curveAmp * 0.85} ${width * 0.52},${centerY + curveAmp * 0.85} C ${width * 0.68},${centerY - curveAmp * 0.85} ${width * 0.82},${centerY + curveAmp * 0.85} ${width * 0.93},${centerY - curveAmp * 0.4} ${width},${centerY}`,
            ],
          }}
          transition={{
            duration: 2.0 / waveSpeed,
            repeat: Infinity,
            delay: 0.15,
            ease: 'easeInOut',
          }}
          fill="none"
          stroke={`url(#${uid}-purple)`}
          strokeWidth={1.6 + progress * 0.6}
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 ${3 + progress * 4}px rgba(139, 92, 246, ${0.4 + progress * 0.35}))`,
          }}
          opacity={0.88}
        />

        {/* ================================================================ */}
        {/* 4. SINE CURVE 3: SMOOTH FLOWING MAGENTA LINE                      */}
        {/* ================================================================ */}
        <motion.path
          animate={{
            d: [
              `M 0,${centerY} C ${width * 0.14},${centerY - curveAmp * 0.65} ${width * 0.32},${centerY + curveAmp * 0.65} ${width * 0.5},${centerY - curveAmp * 0.65} C ${width * 0.66},${centerY + curveAmp * 0.65} ${width * 0.8},${centerY - curveAmp * 0.55} ${width * 0.92},${centerY + curveAmp * 0.25} ${width},${centerY}`,
              `M 0,${centerY} C ${width * 0.14},${centerY + curveAmp * 0.65} ${width * 0.32},${centerY - curveAmp * 0.65} ${width * 0.5},${centerY + curveAmp * 0.65} C ${width * 0.66},${centerY - curveAmp * 0.65} ${width * 0.8},${centerY + curveAmp * 0.55} ${width * 0.92},${centerY - curveAmp * 0.25} ${width},${centerY}`,
              `M 0,${centerY} C ${width * 0.14},${centerY - curveAmp * 0.65} ${width * 0.32},${centerY + curveAmp * 0.65} ${width * 0.5},${centerY - curveAmp * 0.65} C ${width * 0.66},${centerY + curveAmp * 0.65} ${width * 0.8},${centerY - curveAmp * 0.55} ${width * 0.92},${centerY + curveAmp * 0.25} ${width},${centerY}`,
            ],
          }}
          transition={{
            duration: 1.8 / waveSpeed,
            repeat: Infinity,
            delay: 0.25,
            ease: 'easeInOut',
          }}
          fill="none"
          stroke={`url(#${uid}-magenta)`}
          strokeWidth={1.4 + progress * 0.5}
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 ${2 + progress * 4}px rgba(236, 72, 153, ${0.35 + progress * 0.35}))`,
          }}
          opacity={0.8}
        />

        {/* Connection Nodes at Interlocking Junctions */}
        {variant === 'left-segment' && (
          <circle
            cx={width}
            cy={centerY}
            r={2.2 + progress * 1.5}
            fill="#8b5cf6"
            style={{ filter: 'drop-shadow(0 0 6px #8b5cf6)' }}
          />
        )}

        {variant === 'right-segment' && (
          <>
            {/* Junction at Knob Right Rim */}
            <circle
              cx="0"
              cy={centerY}
              r={2.2 + progress * 1.5}
              fill="#8b5cf6"
              style={{ filter: 'drop-shadow(0 0 6px #8b5cf6)' }}
            />
            {/* Junction at Speaker Cone Dust Cap */}
            <circle
              cx={width}
              cy={centerY}
              r={3.2 + progress * 2.2}
              fill="#ec4899"
              style={{ filter: 'drop-shadow(0 0 10px #ec4899)' }}
            />
          </>
        )}

        {/* Optional Generic Connection Nodes for Standalone / Full mode */}
        {showConnectionNodes && variant === 'full' && (
          <>
            <circle
              cx="0"
              cy={centerY}
              r={2 + progress * 1.5}
              fill="#00f0ff"
              style={{ filter: 'drop-shadow(0 0 5px #00f0ff)' }}
            />
            <circle
              cx={width}
              cy={centerY}
              r={2 + progress * 1.5}
              fill="#ec4899"
              style={{ filter: 'drop-shadow(0 0 5px #ec4899)' }}
            />
          </>
        )}
      </svg>
    </div>
  );
};
