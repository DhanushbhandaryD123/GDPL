import { useState } from 'react';
import { motion } from 'motion/react';
import { Orbit, SlidersHorizontal, Volume2, SlidersVertical, Disc3, Radio, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeatureCardData {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  badgeKey?: string;
}

const FEATURES: FeatureCardData[] = [
  { icon: Orbit, titleKey: 'boom3d.key_features.surround_title', descKey: 'boom3d.key_features.surround_desc' },
  { icon: SlidersHorizontal, titleKey: 'boom3d.key_features.eq_title', descKey: 'boom3d.key_features.eq_desc' },
  { icon: Volume2, titleKey: 'boom3d.key_features.booster_title', descKey: 'boom3d.key_features.booster_desc', badgeKey: 'boom3d.key_features.booster_badge' },
  { icon: SlidersVertical, titleKey: 'boom3d.key_features.apps_title', descKey: 'boom3d.key_features.apps_desc' },
  { icon: Disc3, titleKey: 'boom3d.key_features.player_title', descKey: 'boom3d.key_features.player_desc' },
  { icon: Radio, titleKey: 'boom3d.key_features.radio_title', descKey: 'boom3d.key_features.radio_desc' },
];

const RING_SIZE = 80;
const RING_RADIUS = RING_SIZE / 2 - 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const DASH_COUNT = 36;
const DASH_LENGTH = 1.4;
const DASH_GAP = RING_CIRCUMFERENCE / DASH_COUNT - DASH_LENGTH;

function DottedRing() {
  return (
    <motion.svg
      width={RING_SIZE}
      height={RING_SIZE}
      viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
    >
      <circle
        cx={RING_SIZE / 2}
        cy={RING_SIZE / 2}
        r={RING_RADIUS}
        fill="none"
        stroke="url(#boom3dFeatureRingGradient)"
        strokeWidth={2}
        strokeDasharray={`${DASH_LENGTH} ${DASH_GAP}`}
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

function FeatureCard({ feature, index }: { feature: FeatureCardData; index: number }) {
  const { t } = useTranslation();
  const Icon = feature.icon;
  const fullText = t(feature.descKey);
  const TRUNCATE_AT = 96;
  const isTruncatable = fullText.length > TRUNCATE_AT;
  const [expanded, setExpanded] = useState(!isTruncatable);

  const truncatedText = isTruncatable ? `${fullText.slice(0, TRUNCATE_AT).trimEnd()}…` : fullText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="relative flex items-center justify-center shrink-0" style={{ width: RING_SIZE, height: RING_SIZE }}>
        <DottedRing />
        <Icon size={26} strokeWidth={1.5} className="relative text-[#d4d4d8]" />
      </div>

      <h3 className="mt-6 text-lg font-bold text-white tracking-tight">{t(feature.titleKey)}</h3>
      {feature.badgeKey && (
        <p className="mt-1 text-xs font-medium text-[#7a7a82]">{t(feature.badgeKey)}</p>
      )}
      <p className="mt-3 text-[0.95rem] leading-relaxed text-[#9a9aa2] max-w-[300px]">
        {expanded ? fullText : truncatedText}
      </p>
      {isTruncatable && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 text-sm font-semibold text-[#ec4899] underline underline-offset-4 decoration-[#ec4899]/50 hover:text-[#f472b6] transition-colors"
        >
          {expanded ? t('boom3d.key_features.read_less') : t('boom3d.key_features.read_more')}
        </button>
      )}
    </motion.div>
  );
}

export function Boom3DKeyFeatures() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0b0b0f]">
      {/* Shared gradient definition for every icon ring */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="boom3dFeatureRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient glow, matching the rest of the Boom 3D page's accent palette */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t('boom3d.key_features.title')}
          </h2>
          <p className="text-base md:text-lg text-[#9a9aa2] max-w-[640px] mx-auto leading-relaxed">
            {t('boom3d.key_features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.titleKey} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
