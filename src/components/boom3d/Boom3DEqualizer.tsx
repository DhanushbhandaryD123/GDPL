import { useState } from 'react';
import { Box, Radio, Music, Speaker, Activity, Mic2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom3DEqualizer() {
  const { t } = useTranslation();
  const presets = [
    { name: t('boom3d.equalizer.preset_bass'), icon: Box, image: '/boom3D/s1.png' },
    { name: t('boom3d.equalizer.preset_acoustic'), icon: Radio, image: '/boom3D/s3.png' },
    { name: t('boom3d.equalizer.preset_pop'), icon: Music, image: '/boom3D/s4.png' },
    { name: t('boom3d.equalizer.preset_electronic'), icon: Speaker, image: '/boom3D/s5.png' },
    { name: t('boom3d.equalizer.preset_classical'), icon: Activity, image: '/boom3D/s6.png' },
    { name: t('boom3d.equalizer.preset_vocals'), icon: Mic2, image: '/boom3D/s7.png' },
  ];
  const [activePreset, setActivePreset] = useState(presets[0]);

  return (
    <section className="relative py-10 lg:py-16 overflow-hidden bg-[#ffffff]">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-[1600px] mx-auto">
        
        {/* Left Side: Full-bleed Image */}
        <div className="w-full lg:w-1/2 relative lg:pr-16 xl:pr-24">
          <div className="relative w-full h-full">
            {/* Invisible reference image to strictly lock the layout size so it never jumps */}
            <img 
              src={presets[0].image} 
              alt="Layout Reference" 
              className="w-full h-auto opacity-0 pointer-events-none block" 
            />
            
            {/* Actual Active Image */}
            <img 
              key={activePreset.name}
              src={activePreset.image}
              alt={`Boom 3D ${activePreset.name} Preset`} 
              className="absolute inset-0 w-full h-full object-cover object-right shadow-2xl lg:shadow-none lg:rounded-r-3xl transition-opacity duration-300"
            />
          </div>
        </div>
        
        {/* Right Side: Text Content & Pills */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12 xl:pr-32 mt-16 lg:mt-0">
          <div className="max-w-[600px]">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
              {t('boom3d.equalizer.title_1')}<br/>
              {t('boom3d.equalizer.title_2')}
            </h2>
            <p className="text-lg md:text-[1.15rem] text-gray-500 leading-relaxed font-medium mb-10">
              {t('boom3d.equalizer.subtitle')}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {presets.map((preset) => {
                const Icon = preset.icon;
                const isActive = activePreset.name === preset.name;
                return (
                  <div 
                    key={preset.name}
                    onClick={() => setActivePreset(preset)}
                    className={`flex items-center gap-3 px-5 py-3.5 rounded-full transition-all cursor-pointer font-semibold shadow-sm ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-blue-500/30 shadow-lg scale-[1.02]' 
                        : 'bg-white border border-gray-100 text-gray-800 hover:shadow-md hover:scale-[1.02]'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-white' : 'text-blue-600'} />
                    <span className="text-[14px]">{preset.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
