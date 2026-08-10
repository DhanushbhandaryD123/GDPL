import { Camera, Wand2, SlidersHorizontal, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProFeatures() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Camera,
      title: t('camera_plus_pro.f1_title'),
      description: t('camera_plus_pro.f1_desc'),
      bg: 'bg-blue-50',
      color: 'text-blue-500',
    },
    {
      icon: Wand2,
      title: t('camera_plus_pro.f2_title'),
      description: t('camera_plus_pro.f2_desc'),
      bg: 'bg-purple-50',
      color: 'text-purple-500',
    },
    {
      icon: SlidersHorizontal,
      title: t('camera_plus_pro.f3_title'),
      description: t('camera_plus_pro.f3_desc'),
      bg: 'bg-teal-50',
      color: 'text-teal-500',
    },
    {
      icon: Share2,
      title: t('camera_plus_pro.f4_title'),
      description: t('camera_plus_pro.f4_desc'),
      bg: 'bg-pink-50',
      color: 'text-pink-500',
    },
  ];

  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('camera_plus_pro.features_title')}
          </h2>
          <p className="text-lg text-gray-500">
            {t('camera_plus_pro.features_desc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description, bg, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.06)] p-8 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full ${bg} flex items-center justify-center mx-auto mb-5`}>
                <Icon className={`w-7 h-7 ${color}`} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
