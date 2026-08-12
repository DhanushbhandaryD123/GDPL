import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AppleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" className={className} fill="currentColor">
    <path d="M0 12.402l35.687-4.86v34.423H0zM39.691 6.467L87.714 0v41.966H39.691zM0 45.968h35.687v34.427L0 75.539zM39.691 45.968H87.714V88L39.691 81.536z" />
  </svg>
);

export function BoomCTA() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-white pb-16 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 md:px-16 py-12 md:py-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.12),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 max-w-[700px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {t('boom.cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/85 font-medium leading-relaxed mb-10">
              {t('boom.cta.subtitle')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/boom3D"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-full text-[15px] hover:bg-gray-100 transition-colors shadow-lg"
              >
                <AppleIcon className="w-[18px] h-[18px]" />
                {t('boom.cta.macos')}
              </Link>
              <Link
                to="/boom3D"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white/10 border border-white/25 text-white font-bold px-6 py-3.5 rounded-full text-[15px] hover:bg-white/20 transition-colors backdrop-blur-md"
              >
                <WindowsIcon className="w-4 h-4" />
                {t('boom.cta.windows')}
              </Link>
              <Link
                to="/boomformobile"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white/10 border border-white/25 text-white font-bold px-6 py-3.5 rounded-full text-[15px] hover:bg-white/20 transition-colors backdrop-blur-md"
              >
                <Download size={16} />
                {t('boom.cta.ios_android')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
