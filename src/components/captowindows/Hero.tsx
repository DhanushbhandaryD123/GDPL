import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Monitor, CheckCircle2, Mic, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  const [recSeconds, setRecSeconds] = useState(272); // 04:32

  useEffect(() => {
    const timer = setInterval(() => {
      setRecSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const keyBenefits = [
    'No Watermark',
    'No Time Limits',
    '4K 60 FPS Lossless',
    'Dual-Audio Engine',
  ];

  return (
    <section className="relative bg-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-100">
      {/* Delicate background ambient lighting on white standard canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent blur-3xl" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-sky-100/30 rounded-full blur-2xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-violet-100/25 rounded-full blur-2xl" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#0078D7 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Information Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-5 text-center lg:text-left space-y-6"
          >
            

            {/* App Icon + Title */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3.5">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e11d48] via-[#8b5cf6] to-[#0078D7] rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img
                    src="/apps/Capto-window.jpeg"
                    alt="Capto for Windows Logo"
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-md border-2 border-white object-cover"
                    width={64}
                    height={64}
                    loading="eager"
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                    Capto 
                  </h2>                
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                {t('captoWindows.hero.title_1')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D7] via-indigo-600 to-violet-600">
                  {t('captoWindows.hero.title_2')}
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t('captoWindows.hero.subtitle')}
              </p>
            </div>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 max-w-md mx-auto lg:mx-0">
              {keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#"
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                {t('captoWindows.hero.download')}
              </a>

              <a
                href="#interactive-showcase"
                className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs hover:-translate-y-0.5"
              >
                <Monitor size={16} />
                Learn More
              </a>
            </div>

            {/* Guarantee Note */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-[11px] sm:text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                15-Day Free Trial
              </span>
              <span>•</span>
              <span>No credit card required</span>
              <span>•</span>
              <span>Win 11 &amp; 10 (64-bit)</span>
            </div>
          </motion.div>

          {/* Right Column: Windows 11 Fluent Studio Frame & Floating HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            {/* Subtle glow underneath device frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 via-indigo-300/20 to-purple-300/10 rounded-3xl blur-2xl pointer-events-none" />

            {/* Windows 11 Application Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/60 overflow-hidden">
              
              {/* Windows 11 Window Header Bar */}
              <div className="bg-slate-100/90 backdrop-blur-md px-4 py-2.5 border-b border-slate-200/80 flex items-center justify-between select-none">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/apps/Capto-window.jpeg"
                    alt="Capto icon"
                    className="w-4 h-4 rounded-md object-cover"
                  />
                  <span className="text-xs font-semibold text-slate-700 tracking-tight">
                    Capto for Windows — Screen Studio
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                    ● Ready
                  </span>
                </div>

                {/* Windows 11 standard window action buttons */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-slate-400 rounded-full" />
                  <div className="w-2.5 h-2.5 border border-slate-400 rounded-[2px]" />
                  <div className="relative w-3 h-3 flex items-center justify-center text-slate-400 hover:text-rose-600 cursor-pointer">
                    ✕
                  </div>
                </div>
              </div>

              {/* Main Screenshot Canvas */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden group">
                <img
                  src="/capto/windows/hero-app.jpg"
                  alt="Capto for Windows Application Interface"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  width={1920}
                  height={1080}
                  loading="eager"
                />

                {/* Interactive Dynamic Floating HUD Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-xl shadow-slate-950/20 flex flex-col gap-2 max-w-[240px] sm:max-w-[270px] z-20"
                >
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
                      <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                        Recording
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
                      {formatTimer(recSeconds)}
                    </span>
                  </div>

                  {/* Audio Level Graphic Equalizer Bars */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-500">
                      <span className="flex items-center gap-1 font-medium">
                        <Mic className="w-3 h-3 text-blue-600" /> System &amp; Mic Audio
                      </span>
                      <span className="font-mono text-emerald-600 font-semibold">-6 dB</span>
                    </div>
                    <div className="flex gap-0.5 h-2 w-full bg-slate-100 rounded-full p-0.5 overflow-hidden">
                      {[...Array(24)].map((_, i) => (
                        <span
                          key={i}
                          className={`flex-1 rounded-sm transition-all duration-300 ${
                            i < 16 ? 'bg-emerald-500' : i < 20 ? 'bg-amber-400' : 'bg-rose-400'
                          }`}
                          style={{
                            opacity: i < (recSeconds % 12) + 12 ? 1 : 0.25
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
                    <span className="font-semibold text-slate-700">4K UHD @ 60 FPS</span>
                    <span className="text-blue-600 font-semibold">DirectX 12 Active</span>
                  </div>
                </motion.div>

                {/* Floating Feature Chip on Top-Left */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="hidden sm:flex absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl px-3 py-1.5 shadow-md items-center gap-2 z-20"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-bold text-slate-800">Direct Screen &amp; WebCam PiP</span>
                </motion.div>
              </div>
            </div>

            {/* Quick Specs Bar Below Mockup */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2 sm:p-2.5">
                <div className="text-xs sm:text-sm font-bold text-slate-900">DirectX 12</div>
                <div className="text-[10px] sm:text-xs text-slate-500">Hardware Accelerated</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2 sm:p-2.5">
                <div className="text-xs sm:text-sm font-bold text-slate-900">4K 60FPS</div>
                <div className="text-[10px] sm:text-xs text-slate-500">Ultra-HD Clarity</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2 sm:p-2.5">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Zero Watermark</div>
                <div className="text-[10px] sm:text-xs text-slate-500">Full Creative Freedom</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

