import { useEffect, useState } from 'react';
  import { motion, useTransform, type MotionValue } from 'motion/react';
  import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
  import { useTranslation } from 'react-i18next';

  // Center mark: the real app icon file — a clean 1028x1028 square icon
  // with no baked-in text, unlike every other Boom 3D asset tried here
  // (boomLogo3D.png is a 175x37 wordmark; the hero poster needed a manual
  // crop to isolate just the icon disc). This one just drops in directly.
  // Image only, no label — the icon stands on its own.
  const LOGO_SOURCE = '/apps/Boom3D-mac.jpeg';

  function Boom3DLogoBadge({ size }: { size: number }) {
    return (
      <div
        className="rounded-full overflow-hidden shrink-0 shadow-[0_14px_36px_rgba(79,70,229,0.3)]"
        style={{ width: size, height: size }}
      >
        <img src={LOGO_SOURCE} alt="Boom 3D" className="w-full h-full object-cover" />
      </div>
    );
  }

// =========================================
// SOUND WAVE PULSE
// Light-blue ripples expanding from the logo out to exactly the icon
// ring's radius (so the wave visually "touches" the surrounding app
// icons rather than stopping short in empty space), fading as they grow.
// Purely decorative and continuous, so it's skipped entirely under
// prefers-reduced-motion rather than shown as a static ring.
// =========================================
function SoundWavePulse({ radiusX, radiusY, prefersReducedMotion }: { radiusX: number; radiusY: number; prefersReducedMotion: boolean }) {
  if (prefersReducedMotion) return null;
  const period = 3.6;
  const count = 3;
  return (
    <svg
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{ marginLeft: -radiusX, marginTop: -radiusY }}
      width={radiusX * 2}
      height={radiusY * 2}
      viewBox={`0 0 ${radiusX * 2} ${radiusY * 2}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.ellipse
          key={i}
          cx={radiusX}
          cy={radiusY}
          fill="none"
          stroke="#1d4ed8"
          strokeWidth={2.5}
          initial={{ opacity: 0, rx: radiusX * 0.12, ry: radiusY * 0.12 }}
          animate={{
            rx: [radiusX * 0.12, radiusX],
            ry: [radiusY * 0.12, radiusY],
            opacity: [0, 0.85, 0],
          }}
          transition={{ duration: period, repeat: Infinity, delay: (i * period) / count, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
}

// =========================================
// SCROLL-DRIVEN ORBIT ROTATION
// After the entrance settles, the whole ring of icons slowly rotates as
// the user scrolls through the section — each icon takes a turn passing
// through the "east" (3 o'clock) spot, getting a subtle emphasis there.
// Scrolling back up reverses it automatically, since it's driven directly
// by scroll position rather than a one-shot forward animation.
// =========================================
function OrbitIcon({
  app,
  radiusX,
  radiusY,
  tile,
  scrollAngleDeg,
  delay,
  play,
  prefersReducedMotion,
  skipEntrance,
}: {
  app: AppNode;
  radiusX: number;
  radiusY: number;
  tile: number;
  scrollAngleDeg: MotionValue<number>;
  delay: number;
  play: boolean;
  prefersReducedMotion: boolean;
  skipEntrance: boolean;
}) {
  // Radius stays fixed — only the angle advances with scroll — so this is
  // a true rotation around the shared center, not a radius/shape change.
  const orbitX = useTransform(scrollAngleDeg, (deg) => radiusX * Math.sin(((app.angleDeg + deg) * Math.PI) / 180));
  const orbitY = useTransform(scrollAngleDeg, (deg) => -radiusY * Math.cos(((app.angleDeg + deg) * Math.PI) / 180));
  // Peaks at 1.22x exactly when this icon is passing through "east" (90°),
  // smoothly falling off as it moves away — cos() handles the 0-360 wrap
  // for free, no manual angle-wrapping needed.
  const emphasis = useTransform(scrollAngleDeg, (deg) => {
    const rad = ((app.angleDeg + deg - 90) * Math.PI) / 180;
    return 1 + 0.22 * Math.pow(Math.max(0, Math.cos(rad)), 6);
  });

  // Static (non-scroll-linked) base position, used only to compute the
  // entrance's "fly out from center" starting offset — scroll rotation is
  // ~0 at the moment the section first enters view, so this matches.
  const baseRad = (app.angleDeg * Math.PI) / 180;
  const baseX = radiusX * Math.sin(baseRad);
  const baseY = -radiusY * Math.cos(baseRad);

  return (
    <div className="absolute left-1/2 top-1/2 z-30" style={{ transform: 'translate(-50%, -50%)' }}>
      <motion.div style={{ x: orbitX, y: orbitY, scale: emphasis }}>
        <motion.div
          initial={skipEntrance ? false : { opacity: 0, scale: 0.7, x: -baseX * 0.94, y: -baseY * 0.94, rotate: -12 }}
          animate={
            play
              ? { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }
              : { opacity: 0, scale: 0.7, x: -baseX * 0.94, y: -baseY * 0.94, rotate: -12 }
          }
          transition={{ duration: prefersReducedMotion ? 0.3 : 0.65, delay: skipEntrance ? 0 : delay, ease: EASE_PREMIUM }}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.14, y: -3 }}
        >
          {/* Continuous idle float — its own transform, composes cleanly
              with the entrance/orbit transforms on the parents above
              instead of fighting over one `transform` property. */}
          <div style={play && !prefersReducedMotion ? { animation: `boom3dFloat ${app.floatDuration}s ease-in-out infinite` } : undefined}>
            <div
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_24px_rgba(30,20,60,0.08)] flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(99,102,241,0.22)] hover:border-indigo-200"
              style={{ width: tile, height: tile }}
            >
              <img src={app.iconUrl} alt={app.name} className="object-contain" style={{ width: tile * 0.64, height: tile * 0.64 }} loading="lazy" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Two layout modes, not just scaled-down sizes: desktop/tablet nest the
// heading + paragraph inside a wide icon ellipse (matching the reference),
// while mobile can't fit that without the side icons colliding with the
// text, so it stacks compact text above a small, text-free icon ring
// instead — a genuinely different composition, not a shrunk one.
type Tier = 'mobile' | 'tablet' | 'desktop';

export function useResponsiveTier(): Tier {
  const [tier, setTier] = useState<Tier>('desktop');
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setTier(w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop');
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);
  return tier;
}

// =========================================
// OFFER DESTINATION POSITION
// (naming kept consistent with the rest of the codebase's "computed, not
// hardcoded" layouts) — every offset below is derived from a handful of
// radius/size constants per tier so icons, rings, text and cards can
// never collide, instead of guessed pixel coordinates.
// =========================================
interface OrbitConfig {
  radiusX: number;
  radiusY: number;
  logo: number;
  tile: number;
  textMaxW: number;
  cardW: number;
  cardH: number;
}

// textMaxW is deliberately narrower than it looks like it "should" be:
// the 45°/135° diagonal icons sit at radius*sin(45°) ≈ radius*0.707
// horizontally, so the text column has to stay inside that, not inside
// the full radius, or the diagonal icons collide with the paragraph.
const ORBIT: Record<'tablet' | 'desktop', OrbitConfig> = {
  tablet: { radiusX: 230, radiusY: 260, logo: 72, tile: 52, textMaxW: 280, cardW: 170, cardH: 115 },
  desktop: { radiusX: 320, radiusY: 320, logo: 100, tile: 76, textMaxW: 400, cardW: 250, cardH: 170 },
};

const MOBILE_ORBIT = { radius: 118, logo: 58, tile: 42 };

// Card gap beyond the icon ring's outer edge, and how far below/above
// center the two card rows sit — kept as named constants (not magic
// numbers scattered through JSX) since both derive from ORBIT above.
const CARD_GAP = 80;
const CARD_ROW_OFFSET_Y = 170;

const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

// =========================================
// SURROUNDING APP ICONS (data-driven, no duplicate JSX per icon)
// Clean 45°-compass spacing (0 = top, clockwise) around the shared
// ellipse/circle center — a true radial layout, not a grid.
// =========================================
interface AppNode {
  name: string;
  iconUrl: string;
  angleDeg: number;
  floatDuration: number; // seconds — varied so icons never move in lockstep
}

const APPS: AppNode[] = [
  { name: 'Apple Music', iconUrl: 'https://cdn.simpleicons.org/applemusic', angleDeg: 0, floatDuration: 5.2 },
  { name: 'Netflix', iconUrl: 'https://cdn.simpleicons.org/netflix', angleDeg: 45, floatDuration: 4.6 },
  { name: 'Discord', iconUrl: 'https://cdn.simpleicons.org/discord', angleDeg: 90, floatDuration: 5.6 },
  { name: 'Twitch', iconUrl: 'https://cdn.simpleicons.org/twitch', angleDeg: 135, floatDuration: 4.9 },
  { name: 'Steam', iconUrl: 'https://cdn.simpleicons.org/steam', angleDeg: 180, floatDuration: 5.4 },
  { name: 'VLC', iconUrl: 'https://cdn.simpleicons.org/vlcmediaplayer', angleDeg: 225, floatDuration: 4.7 },
  { name: 'YouTube', iconUrl: 'https://cdn.simpleicons.org/youtube', angleDeg: 270, floatDuration: 5.0 },
  { name: 'Spotify', iconUrl: 'https://cdn.simpleicons.org/spotify', angleDeg: 315, floatDuration: 4.4 },
];

// =========================================
// FOUR VISUAL CARDS
// Real HTML/CSS mockups (equalizer, music player) instead of pasted
// screenshots, plus two atmosphere shots from the existing Boom 3D asset
// library for the movie/game moments — everything animated independently.
// =========================================
function EqualizerCard() {
  const { t } = useTranslation();
  const bars = [40, 70, 55, 90, 60, 80, 45, 65, 75, 50];
  const presets = ['preset_surround', 'preset_bass', 'preset_acoustic', 'preset_night'];
  return (
    <div className="w-full h-full bg-[#14121f] rounded-2xl p-3 md:p-4 flex flex-col">
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <span className="text-white font-bold text-[11px] md:text-sm tracking-tight">
          Boom <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">3D</span>
        </span>
        <span className="text-[8px] md:text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">
          {t('boom3d.app_universe.card_status_on')}
        </span>
      </div>
      <div className="flex-1 flex items-end justify-between gap-[3px] md:gap-1 px-0.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-full bg-gradient-to-t from-indigo-500 via-fuchsia-400 to-sky-300" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1 md:gap-1.5 mt-2 md:mt-3">
        {presets.map((key) => (
          <span key={key} className="text-[7px] md:text-[9px] font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-md text-center py-1">
            {t(`boom3d.app_universe.${key}`)}
          </span>
        ))}
      </div>
    </div>
  );
}

function MusicPlayerCard() {
  const { t } = useTranslation();
  const wave = [30, 55, 40, 80, 60, 45, 90, 65, 50, 35, 70, 45, 60, 40, 55, 30];
  return (
    <div className="w-full h-full bg-[#14121f] rounded-2xl p-3 md:p-4 flex flex-col justify-between">
      <div>
        <p className="text-white font-bold text-[11px] md:text-sm leading-tight">{t('boom3d.app_universe.track_title')}</p>
        <p className="text-[9px] md:text-[11px] text-gray-400 font-medium">{t('boom3d.app_universe.track_subtitle')}</p>
      </div>
      <div className="flex items-center gap-[2px] md:gap-[3px] h-8 md:h-12 my-2">
        {wave.map((h, i) => (
          <div key={i} className="flex-1 rounded-full bg-gradient-to-t from-fuchsia-500 to-sky-400" style={{ height: `${h}%`, opacity: i % 2 === 0 ? 1 : 0.55 }} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <SkipBack size={14} className="text-gray-400" fill="currentColor" />
        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center">
          <Pause size={14} className="text-[#14121f]" fill="currentColor" />
        </div>
        <SkipForward size={14} className="text-gray-400" fill="currentColor" />
      </div>
    </div>
  );
}

function AtmosphereCard({ image, altKey }: { image: string; altKey: string }) {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0c0b14]">
      <img src={image} alt={t(altKey)} className="absolute inset-0 w-full h-full object-cover opacity-70" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <Play size={16} className="text-[#14121f] translate-x-[1px]" fill="currentColor" />
        </div>
      </div>
      <div className="absolute bottom-2 md:bottom-3 left-2 right-2 md:left-3 md:right-3 h-[3px] rounded-full bg-white/20 overflow-hidden">
        <div className="h-full w-2/3 bg-white/80 rounded-full" />
      </div>
    </div>
  );
}

type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const CARDS: { key: string; corner: Corner; rotate: number; render: () => React.ReactNode }[] = [
  { key: 'movie', corner: 'top-left', rotate: -6, render: () => <AtmosphereCard image="/boom3D/s5.png" altKey="boom3d.app_universe.card_movie_alt" /> },
  { key: 'equalizer', corner: 'top-right', rotate: 5, render: () => <EqualizerCard /> },
  { key: 'music', corner: 'bottom-left', rotate: 5, render: () => <MusicPlayerCard /> },
  { key: 'gaming', corner: 'bottom-right', rotate: -5, render: () => <AtmosphereCard image="/boom3D/g3.png" altKey="boom3d.app_universe.card_gaming_alt" /> },
];

const CARD_ENTRY_OFFSET: Record<Corner, { x: number; y: number }> = {
  'top-left': { x: -80, y: -40 },
  'top-right': { x: 80, y: -40 },
  'bottom-left': { x: -80, y: 40 },
  'bottom-right': { x: 80, y: 40 },
};

// Mobile's card grid is `max-w-[380px]`; the ring alone (~318px) is
// narrower than that, so the grid — not the ring — sets the natural width.
const MOBILE_CARD_GRID_MAX_W = 380;
const MOBILE_CARD_GRID_GAP = 12;
const MOBILE_RING_TO_CARDS_GAP = 40; // mt-10

// =========================================
// NATURAL (UNSCALED) FOOTPRINT
// Exported so the scroll-pinned wrapper (Boom3DScrollReveal) can measure
// its own available space and compute a `scale` that actually fits —
// without this, the wrapper had no way to know how big the composition
// wants to be, so it always passed scale=1 and let `overflow-hidden`
// silently clip whatever didn't fit (the top/bottom icons, on anything
// shorter than a tall desktop viewport).
// =========================================
export function getNaturalSize(tier: Tier): { width: number; height: number } {
  if (tier === 'mobile') {
    const ringD = (MOBILE_ORBIT.radius + MOBILE_ORBIT.tile / 2 + 20) * 2;
    const cardW = (MOBILE_CARD_GRID_MAX_W - MOBILE_CARD_GRID_GAP) / 2;
    const cardsGridH = cardW * (2 / 3) * 2 + MOBILE_CARD_GRID_GAP;
    return {
      width: Math.max(ringD, MOBILE_CARD_GRID_MAX_W),
      height: ringD + MOBILE_RING_TO_CARDS_GAP + cardsGridH,
    };
  }
  const cfg = ORBIT[tier];
  const cardCenterOffsetX = cfg.radiusX + cfg.tile / 2 + CARD_GAP + cfg.cardW / 2;
  const stageHalfH = cfg.radiusY + cfg.tile / 2 + 40;
  const outerHalfW = cardCenterOffsetX + cfg.cardW / 2 + 30;
  return { width: outerHalfW * 2, height: stageHalfH * 2 };
}

export function Boom3DAppUniverseVisual({
  scrollAngleDeg,
  prefersReducedMotion,
  scale = 1,
  skipEntrance = false,
}: {
  scrollAngleDeg: MotionValue<number>;
  prefersReducedMotion: boolean;
  scale?: number;
  skipEntrance?: boolean;
}) {
  const tier = useResponsiveTier();
  const { t } = useTranslation();
  // Mounting this component at all *is* the play trigger now (its parent
  // only renders it once the reveal threshold is crossed) — there's no
  // separate inView check to make here anymore.
  const play = true;

  // Staged timeline: logo -> rings -> icons (staggered) -> cards. Skipped
  // entirely on repeat reveals (skipEntrance) so scrolling back and forth
  // across the threshold doesn't replay the whole entrance every time.
  const LOGO_DELAY = 0;
  const RINGS_DELAY = prefersReducedMotion ? 0 : 0.75;
  const ICONS_START = prefersReducedMotion ? 0 : 1.3;
  const ICON_STAGGER = 0.1;
  const CARDS_START = prefersReducedMotion ? 0 : ICONS_START + APPS.length * ICON_STAGGER + 0.35;
  const CARD_STAGGER = 0.15;

  // Natural (unscaled) footprint — given explicitly here (rather than
  // left to shrink-to-fit/`w-full`) because this component is embedded
  // inside a flex-col column (Boom3DScrollReveal) where flex items
  // shrink-to-fit rather than stretch: a `width: 100%` descendant there
  // has nothing determinate to resolve against and collapses to ~0.
  const { width: naturalW, height: naturalH } = getNaturalSize(tier);

  const composition = (
    <div className="relative" style={{ width: naturalW, maxWidth: '100%' }} aria-label={t('boom3d.app_universe.section_aria_label')}>
      {tier === 'mobile' ? (
        // =========================================
        // MOBILE COMPOSITION
        // Compact text stacked above a small, text-free icon ring —
        // a genuinely different layout, not the desktop one shrunk down.
        // =========================================
        <div className="flex flex-col items-center px-4">
          <div className="relative" style={{ width: (MOBILE_ORBIT.radius + MOBILE_ORBIT.tile / 2 + 20) * 2, height: (MOBILE_ORBIT.radius + MOBILE_ORBIT.tile / 2 + 20) * 2 }}>
            <motion.svg
              className="absolute inset-0 pointer-events-none"
              width="100%"
              height="100%"
              viewBox={`0 0 ${(MOBILE_ORBIT.radius + MOBILE_ORBIT.tile / 2 + 20) * 2} ${(MOBILE_ORBIT.radius + MOBILE_ORBIT.tile / 2 + 20) * 2}`}
              initial={skipEntrance ? false : { opacity: 0 }}
              animate={play ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.8, delay: skipEntrance ? 0 : RINGS_DELAY, ease: 'easeOut' }}
            >
              <defs>
                <linearGradient id="boom3d-ring-gradient-m" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <circle cx="50%" cy="50%" r={MOBILE_ORBIT.radius * 0.95} fill="none" stroke="url(#boom3d-ring-gradient-m)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r={MOBILE_ORBIT.radius * 0.6} fill="none" stroke="#94a3b8" strokeOpacity="0.18" strokeWidth="1" />
            </motion.svg>

            <SoundWavePulse radiusX={MOBILE_ORBIT.radius} radiusY={MOBILE_ORBIT.radius} prefersReducedMotion={prefersReducedMotion} />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                initial={skipEntrance ? false : { opacity: 0, scale: 0.65, y: 12, filter: 'blur(6px)' }}
                animate={play ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, scale: 0.65, y: 12, filter: 'blur(6px)' }}
                transition={{ duration: prefersReducedMotion ? 0.3 : 0.85, delay: skipEntrance ? 0 : LOGO_DELAY, ease: EASE_PREMIUM }}
              >
                <Boom3DLogoBadge size={76} />
              </motion.div>
            </div>

            {APPS.map((app, i) => (
              <OrbitIcon
                key={app.name}
                app={app}
                radiusX={MOBILE_ORBIT.radius}
                radiusY={MOBILE_ORBIT.radius}
                tile={MOBILE_ORBIT.tile}
                scrollAngleDeg={scrollAngleDeg}
                delay={ICONS_START + i * ICON_STAGGER}
                play={play}
                prefersReducedMotion={prefersReducedMotion}
                skipEntrance={skipEntrance}
              />
            ))}
          </div>

          {/* =========================================
              FOUR VISUAL CARDS — mobile
              Same staged step (fires at CARDS_START, same stagger) as
              desktop/tablet, just laid out as a flowing 2x2 grid instead
              of floating corners — there's no room to float them clear
              of the icon ring on a narrow viewport.
              ========================================= */}
          <div className="mt-10 w-full max-w-[380px] grid grid-cols-2 gap-3">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.key}
                className="aspect-[3/2] rounded-2xl shadow-[0_14px_30px_rgba(30,20,60,0.14)] overflow-hidden"
                initial={skipEntrance ? false : { opacity: 0, y: 24, scale: 0.92 }}
                animate={play ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.92 }}
                transition={{ duration: prefersReducedMotion ? 0.3 : 0.7, delay: skipEntrance ? 0 : CARDS_START + i * CARD_STAGGER, ease: EASE_PREMIUM }}
              >
                {card.render()}
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        // =========================================
        // TABLET / DESKTOP COMPOSITION
        // Text nested inside the icon ellipse; cards sit clear of the
        // ring by CARD_GAP, computed from the ring's own radius so the
        // two can never overlap regardless of tier.
        // =========================================
        (() => {
          const cfg = ORBIT[tier];
          const cardCenterOffsetX = cfg.radiusX + cfg.tile / 2 + CARD_GAP + cfg.cardW / 2;
          const stageHalfH = cfg.radiusY + cfg.tile / 2 + 40;
          const outerHalfW = cardCenterOffsetX + cfg.cardW / 2 + 30;

          return (
            <div className="relative mx-auto" style={{ width: outerHalfW * 2, maxWidth: '100%', height: stageHalfH * 2 }}>
              {/* =========================================
                  FOUR LARGE VISUAL CARDS
                  ========================================= */}
              {CARDS.map((card, i) => {
                const offset = CARD_ENTRY_OFFSET[card.corner];
                const isLeft = card.corner.endsWith('left');
                const isTop = card.corner.startsWith('top');
                return (
                  <motion.div
                    key={card.key}
                    className="absolute z-0 rounded-2xl shadow-[0_20px_50px_rgba(30,20,60,0.14)] pointer-events-none"
                    style={{
                      width: cfg.cardW,
                      height: cfg.cardH,
                      left: isLeft ? outerHalfW - cardCenterOffsetX - cfg.cardW / 2 : undefined,
                      right: !isLeft ? outerHalfW - cardCenterOffsetX - cfg.cardW / 2 : undefined,
                      top: isTop ? stageHalfH - CARD_ROW_OFFSET_Y - cfg.cardH / 2 : undefined,
                      bottom: !isTop ? stageHalfH - CARD_ROW_OFFSET_Y - cfg.cardH / 2 : undefined,
                    }}
                    initial={skipEntrance ? false : { opacity: 0, x: offset.x, y: offset.y, rotate: 0 }}
                    animate={play ? { opacity: 1, x: 0, y: 0, rotate: card.rotate } : { opacity: 0, x: offset.x, y: offset.y, rotate: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0.3 : 0.9, delay: skipEntrance ? 0 : CARDS_START + i * CARD_STAGGER, ease: EASE_PREMIUM }}
                  >
                    {card.render()}
                  </motion.div>
                );
              })}

              {/* =========================================
                  ORBITAL CIRCLE
                  ========================================= */}
              <motion.svg
                className="absolute left-1/2 top-1/2 pointer-events-none"
                style={{ marginLeft: -(cfg.radiusX * 1.06), marginTop: -(cfg.radiusY * 1.06) }}
                width={cfg.radiusX * 2.12}
                height={cfg.radiusY * 2.12}
                viewBox={`0 0 ${cfg.radiusX * 2.12} ${cfg.radiusY * 2.12}`}
                initial={skipEntrance ? false : { opacity: 0 }}
                animate={play ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.3 : 0.8, delay: skipEntrance ? 0 : RINGS_DELAY, ease: 'easeOut' }}
              >
                <defs>
                  <linearGradient id="boom3d-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
                <ellipse cx="50%" cy="50%" rx={cfg.radiusX} ry={cfg.radiusY} fill="none" stroke="url(#boom3d-ring-gradient)" strokeWidth="1" />
                <ellipse cx="50%" cy="50%" rx={cfg.radiusX * 0.62} ry={cfg.radiusY * 0.62} fill="none" stroke="#94a3b8" strokeOpacity="0.18" strokeWidth="1" />
              </motion.svg>

              <SoundWavePulse radiusX={cfg.radiusX} radiusY={cfg.radiusY} prefersReducedMotion={prefersReducedMotion} />

              {/* =========================================
                  CENTER — BOOM 3D LOGO
                  Centered exactly on the ellipse now that there's no
                  text stacked beneath it needing room below-center.
                  ========================================= */}
              {(() => {
                const logoSize = tier === 'desktop' ? 124 : 92;
                return (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={skipEntrance ? false : { opacity: 0, scale: 0.65, y: 16, filter: 'blur(6px)' }}
                      animate={play ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, scale: 0.65, y: 16, filter: 'blur(6px)' }}
                      transition={{ duration: prefersReducedMotion ? 0.3 : 0.85, delay: skipEntrance ? 0 : LOGO_DELAY, ease: EASE_PREMIUM }}
                    >
                      <Boom3DLogoBadge size={logoSize} />
                    </motion.div>
                  </div>
                );
              })()}

              {/* =========================================
                  SURROUNDING APP ICONS
                  ========================================= */}
              {APPS.map((app, i) => (
                <OrbitIcon
                  key={app.name}
                  app={app}
                  radiusX={cfg.radiusX}
                  radiusY={cfg.radiusY}
                  tile={cfg.tile}
                  scrollAngleDeg={scrollAngleDeg}
                  delay={ICONS_START + i * ICON_STAGGER}
                  play={play}
                  prefersReducedMotion={prefersReducedMotion}
                  skipEntrance={skipEntrance}
                />
              ))}
            </div>
          );
        })()
      )}

      <style>{`
        @keyframes boom3dFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes boom3dFloat { 0%, 100% { transform: translateY(0px); } }
        }
      `}</style>
    </div>
  );

  if (scale === 1) return composition;
  return (
    // `top left` origin, not `top center`: a CSS transform never changes an
    // element's own layout box size (only its paint), so the unscaled
    // child is naturally as wide as `naturalW` regardless of transform —
    // wider than this reserving wrapper's `naturalW * scale`. Scaling from
    // the *child's* center would pivot around a point that doesn't line up
    // with the wrapper's center, visibly shifting the whole composition
    // sideways. Anchoring at the top-left corner instead makes the scaled
    // box exactly fill (0,0)-(naturalW*scale, naturalH*scale) — no
    // mismatch possible.
    <div style={{ width: naturalW * scale, height: naturalH * scale }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: naturalW }}>{composition}</div>
    </div>
  );
}
