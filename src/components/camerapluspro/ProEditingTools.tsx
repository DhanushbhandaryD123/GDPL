import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import { useTranslation } from 'react-i18next';

const AdjustScreen = () => {
  const { t } = useTranslation();
  const rows = [
    t('camera_plus_pro.editing_tools.brightness'),
    t('camera_plus_pro.editing_tools.contrast'),
    t('camera_plus_pro.editing_tools.saturation'),
  ];
  return (
    <div className="relative w-full h-full bg-black">
      <img
        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80&auto=format&fit=crop"
        alt="Bridge — adjust preview"
        className="w-full h-full object-cover opacity-90" width={600} height={400} loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-black/85 backdrop-blur-sm px-4 py-4 space-y-3">
        <p className="text-white text-[10px] font-bold tracking-widest mb-2">{t('camera_plus_pro.editing_tools.adjust')}</p>
        {rows.map((label, idx) => (
          <div key={label} className="space-y-1">
            <span className="text-[9px] text-gray-400">{label}</span>
            <div className="h-1 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{ width: `${45 + idx * 20}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EffectsScreen = () => {
  const { t } = useTranslation();
  const filters = ['grayscale', 'sepia', 'contrast-125', 'saturate-150', 'brightness-110', 'hue-rotate-15', 'invert', 'contrast-75', ''];
  return (
    <div className="w-full h-full bg-black flex flex-col">
      <p className="text-white text-[10px] font-bold tracking-widest px-4 pt-4 pb-2">{t('camera_plus_pro.editing_tools.effects')}</p>
      <div className="grid grid-cols-3 gap-0.5 flex-1">
        {filters.map((filter, idx) => (
          <div key={idx} className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200&q=60&auto=format&fit=crop"
              alt=""
              className={`w-full h-full object-cover ${filter}`} width={200} height={133} loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export function ProEditingTools() {
  const { t } = useTranslation();
  const checklist = [
    t('camera_plus_pro.editing_tools.c1'),
    t('camera_plus_pro.editing_tools.c2'),
    t('camera_plus_pro.editing_tools.c3'),
    t('camera_plus_pro.editing_tools.c4'),
  ];
  return (
    <section id="gallery" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {t('camera_plus_pro.editing_tools.title_1')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                {t('camera_plus_pro.editing_tools.title_2')}
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              {t('camera_plus_pro.editing_tools.subtitle')}
            </p>
            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" strokeWidth={2} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — overlapping phone carousel */}
          <div className="flex flex-col items-center">
            <div className="relative w-[220px] sm:w-[240px] h-[460px] sm:h-[500px]">
              <div className="absolute top-6 -left-16 sm:-left-24 w-[180px] sm:w-[200px] opacity-70 -rotate-12 z-0">
                <PhoneFrame>
                  <AdjustScreen />
                </PhoneFrame>
              </div>

              <div className="absolute top-6 -right-16 sm:-right-24 w-[180px] sm:w-[200px] opacity-70 rotate-12 z-0">
                <PhoneFrame>
                  <EffectsScreen />
                </PhoneFrame>
              </div>

              <div className="absolute inset-0 z-10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] rounded-[2.5rem]">
                <PhoneFrame>
                  <img
                    src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80&auto=format&fit=crop"
                    alt="Bridge photo"
                    className="w-full h-full object-cover" width={800} height={533} loading="lazy"
                  />
                </PhoneFrame>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button
                aria-label="Previous"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Next"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
