import { SlidersHorizontal, Sparkles, Monitor, FileAudio, Smartphone, Headphones, Activity, Sliders, Maximize2 } from 'lucide-react';

export function Boom2FeaturesBanner() {
  const features = [
    { icon: <SlidersHorizontal size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "31 Band\nEqualizer" },
    { icon: <Sparkles size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "Audio\nEffects" },
    { icon: <Monitor size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "System-wide\nControl" },
    { icon: <FileAudio size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "File\nBoost" },
    { icon: <Smartphone size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "Boom\nRemote" },
    { icon: <Headphones size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "Output\ncompatibility" },
    { icon: <Activity size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "Sample Rate\nControl" },
    { icon: <Sliders size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "Audio Balancer\n(L-R)" },
    { icon: <Maximize2 size={32} className="text-gray-400 mb-2" strokeWidth={1.5} />, label: "Stereo\nWidening" },
  ];

  return (
    <div className="relative z-20 max-w-[1400px] mx-auto px-4 -mt-16">
      <div className="bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.5)] py-6 px-6 md:px-12 flex flex-wrap justify-between items-start md:items-center gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center w-1/4 sm:w-1/4 md:flex-1">
            {feature.icon}
            <span className="text-gray-300 font-medium text-xs md:text-sm whitespace-pre-line leading-snug">
              {feature.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
