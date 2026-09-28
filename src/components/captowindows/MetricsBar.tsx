import { motion } from 'motion/react';
import { Camera, Zap, Star, ShieldCheck } from 'lucide-react';

export function MetricsBar() {
  const stats = [
    {
      icon: Camera,
      value: '5M+',
      label: 'Captures & Recordings',
      subtext: 'Created worldwide on Windows',
      bg: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: Zap,
      value: '60 FPS',
      label: 'Native 4K Recording',
      subtext: 'DirectX 12 hardware acceleration',
      bg: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      icon: Star,
      value: '4.8 / 5',
      label: 'User Satisfaction',
      subtext: 'Across educators & content creators',
      bg: 'bg-amber-50',
      textColor: 'text-amber-600'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Clean & Watermark Free',
      subtext: 'No time limits on your captures',
      bg: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    }
  ];

  return (
    <section className="bg-white py-8 border-b border-slate-100 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-xl ${stat.bg} ${stat.textColor} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <stat.icon size={18} strokeWidth={2.2} />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
