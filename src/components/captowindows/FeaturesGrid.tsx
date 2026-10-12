import { motion } from 'motion/react';
import {
  Camera,
  Video,
  MonitorPlay,
  Type,
  ImageIcon,
  Scissors,
  Edit3,
  Sliders,
  Share2,
  Mic,
  FileText
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FeaturesGrid() {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-24 bg-white relative border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            {t('captoWindows.features.title_1')}{' '}
            <span className="text-[#0078D7]">{t('captoWindows.features.title_2')}</span>
          </motion.h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            {t('captoWindows.features.subtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Screen & Area Capture (Feature Hero) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0078D7] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Camera size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#0078D7] transition-colors">
                {t('captoWindows.features.f1_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {t('captoWindows.features.f1_desc')}
              </p>
            </div>

            {/* Graphical Object: Region Selection Crosshair */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Region Capture Active
                </span>
                <span className="font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 text-[10px]">
                  1920 × 1080 px
                </span>
              </div>
              <div className="h-14 border border-dashed border-blue-400 bg-blue-50/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="text-[11px] font-medium text-blue-700">
                  Crosshair Selection Tool
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: 4K 60FPS Screen Recording */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Video size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">
                {t('captoWindows.features.f2_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {t('captoWindows.features.f2_desc')}
              </p>
            </div>

            {/* Graphical Object: 60FPS + DirectX indicator */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  60
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">FPS Ultra Smooth</div>
                  <div className="text-[10px] text-slate-500">Hardware Accelerated</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                0% Lag
              </span>
            </div>
          </motion.div>

          {/* Card 3: Webcam Recording PiP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MonitorPlay size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-purple-600 transition-colors">
                {t('captoWindows.features.f3_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {t('captoWindows.features.f3_desc')}
              </p>
            </div>

            {/* Graphical Object: Webcam PiP badge */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-white shadow-xs">
                    <img
                      src="/capto/windows/hero-app.webp"
                      alt="Webcam preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-rose-500 border border-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Picture-in-Picture</div>
                  <div className="text-[10px] text-slate-500">Custom Shapes &amp; Borders</div>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                Overlay
              </span>
            </div>
          </motion.div>

          {/* Card 4: OCR Text Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Type size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-pink-600 transition-colors">
                {t('captoWindows.features.f4_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {t('captoWindows.features.f4_desc')}
              </p>
            </div>

            {/* Graphical Object: OCR Text Extraction Card */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-pink-600 uppercase tracking-wider mb-1">
                <FileText size={12} /> Instant OCR Extractor
              </div>
              <p className="text-[11px] font-mono text-slate-600 bg-white p-2 rounded-lg border border-slate-200 truncate">
                "Copy unselectable text directly..."
              </p>
            </div>
          </motion.div>

          {/* Card 5: Annotation & Image Editing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ImageIcon size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-teal-600 transition-colors">
                {t('captoWindows.features.f5_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {t('captoWindows.features.f5_desc')}
              </p>
            </div>

            {/* Graphical Object: Tool Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-teal-50 text-teal-700 border border-teal-200">
                ➜ Arrows
              </span>
              <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                ❶ Numbered
              </span>
              <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                ⬛ Blur
              </span>
              <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200">
                ★ Spotlight
              </span>
            </div>
          </motion.div>

          {/* Card 6: Video Editing Suite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Scissors size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-orange-600 transition-colors">
                {t('captoWindows.features.f6_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {t('captoWindows.features.f6_desc')}
              </p>
            </div>

            {/* Graphical Object: Timeline waveform preview */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-2">
              <Scissors size={14} className="text-orange-500 shrink-0" />
              <div className="flex-1 flex gap-0.5 h-4 items-center">
                {[4, 8, 12, 16, 10, 6, 14, 18, 12, 8, 15, 7, 11, 16, 9].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}px` }}
                    className="flex-1 bg-orange-400 rounded-sm"
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-slate-500">00:03:15</span>
            </div>
          </motion.div>

          {/* Card 7: Annotations and Highlighting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.36 }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Edit3 size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-red-600 transition-colors">
                {t('captoWindows.features.f7_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {t('captoWindows.features.f7_desc')}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Vector Shapes &amp; Freehand</span>
              <span className="text-red-600 font-bold text-[11px]">Lossless DPI</span>
            </div>
          </motion.div>

          {/* Card 8: Dual Audio Level Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42 }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Sliders size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-cyan-600 transition-colors">
                Dual Audio Control
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Independently adjust and balance system internal sound and external microphone input for flawless voiceovers.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-slate-600">
                <span className="flex items-center gap-1">
                  <Mic size={11} className="text-blue-600" /> Microphone
                </span>
                <span className="font-mono text-emerald-600 font-bold">100%</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[80%]" />
              </div>
            </div>
          </motion.div>

          {/* Card 9: Instant Export & Cloud Sharing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.48 }}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Share2 size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-600 transition-colors">
                {t('captoWindows.features.f9_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {t('captoWindows.features.f9_desc')}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-[10px] font-bold border border-rose-200">
                YouTube
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                Google Drive
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-50 text-cyan-700 text-[10px] font-bold border border-cyan-200">
                Dropbox
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

