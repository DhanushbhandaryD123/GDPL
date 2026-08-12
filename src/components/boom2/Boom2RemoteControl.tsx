import { useState } from 'react';
import { Smartphone, Mic, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom2RemoteControl() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const options = [
    {
      id: 'remote',
      icon: Smartphone,
      title: t('boom2.remote_control.remote_title'),
      description: t('boom2.remote_control.remote_desc'),
      imagePath: '/boom2/remote.png'
    },
    {
      id: 'recorder',
      icon: Mic,
      title: t('boom2.remote_control.recorder_title'),
      description: t('boom2.remote_control.recorder_desc'),
      imagePath: '/boom2/audio.png'
    },
    {
      id: 'output',
      icon: Headphones,
      title: t('boom2.remote_control.output_title'),
      description: t('boom2.remote_control.output_desc'),
      imagePath: '/boom2/output.png'
    }
  ];

  return (
    <section className="py-8 md:py-6 px-4 max-w-[1400px] mx-auto bg-[#F8F9FA] rounded-3xl mt-4 mb-12 shadow-sm">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left List */}
        <div className="lg:col-span-5 flex flex-col gap-4 relative z-10">
          {options.map((option, index) => {
            const isActive = activeIndex === index;
            const Icon = option.icon;

            return (
              <div
                key={option.id}
                onClick={() => setActiveIndex(index)}
                className={`flex gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  isActive
                    ? 'border-[#4F46E5] bg-white shadow-lg scale-[1.02]'
                    : 'border-transparent hover:bg-white/60'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors ${
                  isActive ? 'bg-[#4F46E5]/10 text-[#4F46E5]' : 'bg-white border border-gray-200 text-gray-700'
                }`}>
                  <Icon size={26} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <div>
                  <h4 className={`text-[19px] font-bold mb-1.5 transition-colors ${isActive ? 'text-[#4F46E5]' : 'text-[#0a0a0f]'}`}>
                    {option.title}
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Devices Display */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          {/* Audio Wave Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
             <div className="flex items-center gap-1 h-32">
               {[...Array(40)].map((_, i) => (
                 <div key={i} className="w-1.5 bg-[#4F46E5] rounded-full" style={{ height: `${Math.random() * 80 + 10}%` }} />
               ))}
             </div>
          </div>

          <div className="relative z-10 w-full max-w-[800px] h-[300px] md:h-[450px] flex items-center justify-center">
            {/* The image will swap based on active index */}
            <img
              key={options[activeIndex].imagePath}
              src={options[activeIndex].imagePath}
              alt={options[activeIndex].title}
              className="w-full h-full object-contain drop-shadow-2xl transition-opacity duration-500 rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
