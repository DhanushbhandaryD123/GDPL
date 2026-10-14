import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';

export function Boom2PrecisionControl() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

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

        {/* Right YouTube Video Embed / Facade */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 bg-black group">
          {isPlaying ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/39eI9hmC5UI?autoplay=1"
              title="Boom 2 Precision Audio Control"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group focus:outline-none"
              aria-label="Play Boom 2 Precision Audio Control video"
            >
              <img
                src="/boom2/youtube-thumb.jpg"
                alt="Boom 2 Video Thumbnail"
                loading="lazy"
                width={480}
                height={360}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

