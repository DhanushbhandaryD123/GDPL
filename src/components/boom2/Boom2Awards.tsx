import { useTranslation } from 'react-i18next';

export function Boom2Awards() {
  const { t } = useTranslation();
  const awards = [
    { src: '/boom2/2011.png', alt: t('boom2.awards.alt_2011') },
    { src: '/boom2/2014.png', alt: t('boom2.awards.alt_2014') },
    { src: '/boom2/2018.png', alt: t('boom2.awards.alt_2018') },
    { src: '/boom2/Macworld.png', alt: t('boom2.awards.alt_macworld') },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#060814] relative z-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 tracking-tight">
          {t('boom2.awards.title')}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-32">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="w-32 md:w-40 lg:w-48 transition-all duration-300 hover:-translate-y-2 hover:scale-105 opacity-70 hover:opacity-100 grayscale hover:grayscale-0"
            >
              <img 
                src={award.src} 
                alt={award.alt} 
                className="w-full h-auto object-contain"
                loading="lazy" width={324} height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
