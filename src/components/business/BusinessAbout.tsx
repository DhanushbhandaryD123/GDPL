import { useTranslation } from 'react-i18next';

export function BusinessAbout() {
  const { t } = useTranslation();
  return (
    <div className="w-full md:p-0 px-2 pt-1 pb-4">
      <section className="w-full bg-[#111111] md:bg-transparent rounded-3xl md:rounded-none overflow-hidden">
        <div className="flex flex-col md:block md:relative md:min-h-[550px]">
          
          {/* Image block on mobile, absolute background on desktop */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:absolute md:inset-0 md:z-0">
            <img 
              src="/business/business5.png" 
              alt="Business About" 
              className="w-full h-full object-cover object-left md:object-center" 
            />
            {/* Desktop gradient */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent pointer-events-none" />
            {/* Mobile gradient to fade into bottom text area */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent pointer-events-none" />
          </div>

          {/* Text container */}
          <div className="relative z-10 w-full px-6 py-6 pb-8 md:absolute md:inset-0 md:px-12 flex flex-col justify-center md:flex-row md:items-center md:justify-end">
            <div className="w-full md:w-[60%] lg:w-1/2 text-white max-w-xl text-center md:text-left">
              <span className="inline-block text-red-500 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4">
                {t('business.about.badge')}
              </span>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4 md:mb-6">
                {t('business.about.title_1')}<br />
                <span className="text-red-500">{t('business.about.title_2')}</span>
              </h2>

              <p className="text-sm md:text-lg text-white/90 leading-relaxed mb-4 md:mb-6 drop-shadow-sm">
                {t('business.about.p1')}
              </p>

              <p className="text-sm md:text-lg text-white/90 leading-relaxed drop-shadow-sm">
                {t('business.about.p2_prefix')} <a href="mailto:licensing@globaldelight.com" className="text-red-500 font-semibold hover:underline hover:text-red-400 transition-colors">{t('business.about.p2_link')}</a> {t('business.about.p2_suffix')}
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}