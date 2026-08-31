import { useTranslation } from 'react-i18next';

const AppleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" className={className} fill="currentColor">
    <path d="M0 12.402l35.687-4.86v34.423H0zM39.691 6.467L87.714 0v41.966H39.691zM0 45.968h35.687v34.427L0 75.539zM39.691 45.968H87.714V88L39.691 81.536z"/>
  </svg>
);

export function Boom3DAppDownload() {
  const { t } = useTranslation();
  return (
    <section id="boom3d-download" className="bg-white pt-16 pb-10 flex flex-col items-center justify-center relative z-20">
      <div className="max-w-[1000px] mx-auto px-6 text-center w-full">

        <h2 className="text-3xl md:text-[2.5rem] lg:text-[2.75rem] font-medium tracking-tight text-[#111111] mb-6 leading-tight">
          {t('boom3d.app_download.title')}
        </h2>

        <p className="text-[#6b7280] text-[1rem] md:text-[1.1rem] mb-10 font-normal leading-relaxed max-w-[900px] mx-auto">
          {t('boom3d.app_download.description')}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* macOS Button */}
          <button className="flex items-center justify-center gap-5 bg-[#111111] hover:bg-black text-white px-8 py-3 rounded-[1rem] min-w-[240px] w-full sm:w-auto transition-all">
            <AppleIcon className="w-9 h-9" />
            <div className="text-left flex flex-col">
              <span className="text-[1.35rem] font-bold leading-tight">{t('boom3d.app_download.macos')}</span>
              <span className="text-[11px] font-medium text-gray-400">{t('boom3d.app_download.macos_req')}</span>
            </div>
          </button>

          {/* Windows Button */}
          <button className="flex items-center justify-center gap-5 bg-white hover:bg-gray-50 text-[#111111] px-8 py-3 rounded-[1rem] min-w-[240px] w-full sm:w-auto transition-all border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <WindowsIcon className="w-8 h-8 text-[#0099ff]" />
            <div className="text-left flex flex-col">
              <span className="text-[1.35rem] font-bold leading-tight">{t('boom3d.app_download.windows')}</span>
              <span className="text-[11px] font-medium text-gray-500">{t('boom3d.app_download.windows_req')}</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
