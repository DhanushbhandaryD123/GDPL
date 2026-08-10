import { motion } from 'motion/react';
import { SlidersHorizontal, Sparkles, Monitor, FileAudio, Smartphone, Headphones, Activity, Sliders, Maximize2 } from 'lucide-react';

export function Boom2FeaturesBanner() {
  const features = [
    { icon: <SlidersHorizontal size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "31 Band\nEqualizer" },
    { icon: <Sparkles size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "Audio\nEffects" },
    { icon: <Monitor size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "System-wide\nControl" },
    { icon: <FileAudio size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "File\nBoost" },
    { icon: <Smartphone size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "Boom\nRemote" },
    { icon: <Headphones size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "Output\ncompatibility" },
    { icon: <Activity size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "Sample Rate\nControl" },
    { icon: <Sliders size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "Audio Balancer\n(L-R)" },
    { icon: <Maximize2 size={32} className="text-gray-700 mb-2" strokeWidth={1.5} />, label: "Stereo\nWidening" },
  ];

  return (
    <div className="relative z-20 max-w-[1400px] mx-auto px-4 -mt-8 md:-mt-16">
      <div className="bg-white/95 backdrop-blur-2xl border border-gray-200/60 rounded-[2.5rem] shadow-xl shadow-gray-200/50 py-6 px-6 md:px-12 flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:flex-wrap justify-start md:justify-between items-start md:items-center gap-8 md:gap-6 snap-x snap-mandatory">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center text-center shrink-0 w-20 md:w-auto md:flex-1 snap-start md:snap-align-none"
          >
            {feature.icon}
            <span className="text-gray-800 font-bold text-[11px] md:text-sm whitespace-pre-line leading-snug">
              {feature.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
