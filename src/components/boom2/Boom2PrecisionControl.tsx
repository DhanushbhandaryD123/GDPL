import { useTranslation } from 'react-i18next';

export function Boom2PrecisionControl() {
  const { t } = useTranslation();
  return (
    <section className="py-12 md:py-20 px-4 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Content */}
        <div className="max-w-xl pr-4 lg:pr-8">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-[#0a0a0f] tracking-tight leading-tight">
            {t('boom2.precision.title')}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
            {t('boom2.precision.description')}
          </p>
        </div>

        {/* Right YouTube Video Embed */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/39eI9hmC5UI"
            title="Boom 2 Precision Audio Control"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
