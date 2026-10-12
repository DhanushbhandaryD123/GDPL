import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MonitorPlay, 
  Scissors, 
  Highlighter, 
  Share2, 
  Check, 
  Sparkles,
  ChevronRight,
  Layers,
  Volume2,
  Lock,
  UploadCloud
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StudioTab {
  id: string;
  title: string;
  tabLabel: string;
  icon: typeof MonitorPlay;
  description: string;
  image: string;
  badge: string;
  bullets: string[];
  hotspots: {
    top: string;
    left: string;
    label: string;
    icon: typeof Sparkles;
  }[];
}

export function Showcase() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('record');

  const tabs: StudioTab[] = [
    {
      id: 'record',
      tabLabel: 'Screen & Webcam',
      title: 'Lossless 4K Screen & Audio Recording',
      icon: MonitorPlay,
      badge: 'DirectX 12 Accelerated',
      description: 'Record your full display, application window, or selected region at a buttery smooth 60 FPS with dual-channel system audio and microphone capture.',
      image: '/capto/windows/hero-app.webp',
      bullets: [
        'Hardware-accelerated 4K 60FPS recording with ultra-low CPU load (<3%)',
        'Simultaneous webcam overlay with customizable shape and position',
        'Individual volume monitoring for system audio and microphone inputs'
      ],
      hotspots: [
        { top: '35%', left: '72%', label: 'Floating HUD & Live VU Meter', icon: Volume2 },
        { top: '22%', left: '86%', label: 'Circular Webcam Overlay', icon: Sparkles }
      ]
    },
    {
      id: 'edit',
      tabLabel: 'Multitrack Editor',
      title: 'Precision Timeline Video Editing Suite',
      icon: Scissors,
      badge: 'Frame-Accurate Cuts',
      description: 'Transform raw screen recordings into professional video tutorials. Cut, splice, trim, and balance multitrack audio directly on the visual timeline without complex external software.',
      image: '/capto/windows/editor-app.webp',
      bullets: [
        'Dedicated multitrack timeline for video footage, speech, and background music',
        'Fast ripple edits, trimming, and frame-by-frame precision cuts',
        'Direct annotation inspector for adding visual callouts during playback'
      ],
      hotspots: [
        { top: '78%', left: '42%', label: 'Scissor Split & Ripple Edit', icon: Scissors },
        { top: '86%', left: '60%', label: 'Dual Audio Waveform Tracks', icon: Layers }
      ]
    },
    {
      id: 'annotate',
      tabLabel: 'Annotation Suite',
      title: 'Turn Screenshots into Clear Visual Guides',
      icon: Highlighter,
      badge: 'Professional Clarity',
      description: 'Make documentation and bug reports effortless. Annotate captures with numbered sequential steps, directional callout arrows, spotlight highlights, and privacy blur tools.',
      image: '/capto/windows/annotate-app.webp',
      bullets: [
        'Numbered step badges (1, 2, 3) to guide users step-by-step through workflows',
        'Smart blur and redaction tools to protect confidential customer data and passwords',
        'Spotlight effect to focus user attention while softly dimming the background'
      ],
      hotspots: [
        { top: '48%', left: '38%', label: 'Numbered Steps (1, 2, 3)', icon: Sparkles },
        { top: '56%', left: '66%', label: 'Callout Note & Privacy Blur', icon: Lock }
      ]
    },
    {
      id: 'export',
      tabLabel: 'Library & Export',
      title: 'Organized Media Hub & 1-Click Cloud Export',
      icon: Share2,
      badge: 'Zero Compression Loss',
      description: 'Find any recording instantly using smart tags and folders. Export your projects to 4K MP4, animated GIFs, or high-res PNG, or upload directly to YouTube, Google Drive, and Dropbox.',
      image: '/capto/windows/export-app.webp',
      bullets: [
        'Smart folders automatically catalog your screen recordings and screenshots',
        'Multiple export formats: 4K MP4, lightweight animated GIF, and PNG screenshots',
        'Direct cloud integrations with YouTube, Dropbox, Google Drive, and custom FTP'
      ],
      hotspots: [
        { top: '42%', left: '48%', label: '4K MP4 & Animated GIF Export', icon: UploadCloud },
        { top: '68%', left: '50%', label: '1-Click YouTube & Drive Sync', icon: Share2 }
      ]
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="interactive-showcase" className="py-14 md:py-24 bg-white relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Studio Tour</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            {t('captoWindows.showcase.title_1')}{' '}
            <span className="text-[#0078D7]">{t('captoWindows.showcase.title_2')}</span>
          </motion.h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('captoWindows.showcase.subtitle')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#0078D7] text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Studio Showcase Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            {/* Left: Detail & Feature Bullets */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                {currentTab.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                {currentTab.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentTab.description}
              </p>

              <div className="space-y-3 pt-2">
                {currentTab.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100/90 hover:border-slate-200 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-blue-600/10 text-[#0078D7] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} strokeWidth={2.8} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0078D7] hover:text-[#005a9e] transition-colors group"
                >
                  <span>Experience this feature in Capto</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Windows 11 App Canvas with Hotspots */}
            <div className="lg:col-span-7 relative">
              {/* Outer Window Container */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/50 overflow-hidden">
                
                {/* Windows 11 Window Header */}
                <div className="bg-slate-100/90 backdrop-blur-md px-4 py-2.5 border-b border-slate-200/80 flex items-center justify-between select-none">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/apps/Capto-window.jpeg"
                      alt="Capto Logo"
                      className="w-4 h-4 rounded-md object-cover"
                    />
                    <span className="text-xs font-semibold text-slate-700 tracking-tight">
                      Capto for Windows — {currentTab.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-3 h-0.5 bg-slate-400 rounded-full" />
                    <div className="w-2.5 h-2.5 border border-slate-400 rounded-[2px]" />
                    <div className="w-3 h-3 flex items-center justify-center">✕</div>
                  </div>
                </div>

                {/* Screenshot Image Container */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden group">
                  <img
                    src={currentTab.image}
                    alt={currentTab.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />

                  {/* Hotspots */}
                  {currentTab.hotspots.map((spot, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
                      style={{ top: spot.top, left: spot.left }}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group/spot"
                    >
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-6 h-6 rounded-full bg-blue-500/40 animate-ping" />
                        <div className="relative w-7 h-7 rounded-full bg-[#0078D7] text-white shadow-lg flex items-center justify-center border-2 border-white cursor-pointer hover:scale-110 transition-transform">
                          <spot.icon className="w-3.5 h-3.5" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-semibold whitespace-nowrap shadow-md opacity-0 group-hover/spot:opacity-100 transition-opacity pointer-events-none">
                          {spot.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

