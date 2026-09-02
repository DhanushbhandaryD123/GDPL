import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function WireframeGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="100" cy="100" r="90" />
      <ellipse cx="100" cy="100" rx="90" ry="35" />
      <ellipse cx="100" cy="100" rx="90" ry="60" />
      <ellipse cx="100" cy="100" rx="35" ry="90" />
      <ellipse cx="100" cy="100" rx="60" ry="90" />
      <line x1="10" y1="100" x2="190" y2="100" />
      <line x1="100" y1="10" x2="100" y2="190" />
    </svg>
  );
}

export function CaptoFooterCTA() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'EDUCATION' | 'BUSINESS'>('EDUCATION');
  const [pageIndex, setPageIndex] = useState(0);

  const educationLogos = [
    '/capto/education/AlFaisal.png',
    '/capto/education/Cornell-University.png',
    '/capto/education/DukeUniversity.png',
    '/capto/education/Ecole-Polytechnique.png',
    '/capto/education/Frankfurt.png',
    '/capto/education/Harvard-Business-School.png',
    '/capto/education/Harvard.png',
    '/capto/education/LifeUniversity.png',
    '/capto/education/Massachusetts-Institute-of-Technology.png',
    '/capto/education/Michigan-State-University.png',
    '/capto/education/Monash.png',
    '/capto/education/Moscow-University.png',
    '/capto/education/Oberlins-college-conservatory.png',
    '/capto/education/SAE-Institute.png',
    '/capto/education/StanFord.png',
    '/capto/education/The-University-of-Chicago.png',
    '/capto/education/The-University-of-Utah.png',
    '/capto/education/UOC.png',
    '/capto/education/Universitat-Pompeu-Fabra.png',
    '/capto/education/University-of-California.png',
    '/capto/education/University-of-Denver.png',
    '/capto/education/University-of-Miami.png',
    '/capto/education/University-of-Minnesota.png',
    '/capto/education/University-of-New-Hampshire.png',
    '/capto/education/University-of-Pittsburgh.png',
    '/capto/education/VERITAS.png',
    '/capto/education/Virginia-Military-Institute.png',
    '/capto/education/_Ateneo-de-Manila-University.png'
  ];

  const businessLogos = [
    '/capto/business/AOL.png',
    '/capto/business/Adobe.png',
    '/capto/business/Apple.png',
    '/capto/business/Microsoft.png',
    '/capto/business/SalesForce.png',
    '/capto/business/Verizon.png',
    '/capto/business/Vodafone.png',
    '/capto/business/Zoho.png'
  ];

  const ITEMS_PER_PAGE = 10;
  const currentLogoArray = activeTab === 'EDUCATION' ? educationLogos : businessLogos;
  const totalPages = Math.ceil(currentLogoArray.length / ITEMS_PER_PAGE);

  // Auto-rotate logic
  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Reset page when tab changes
  useEffect(() => {
    setPageIndex(0);
  }, [activeTab]);

  const activeLogos = currentLogoArray.slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-white">
      {/* Background Decor (Faint Wireframe Globes, drawn inline so it never depends on an external host) */}
      <div className="absolute top-[40%] left-0 -translate-y-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <WireframeGlobe className="w-[500px] h-[500px]" />
      </div>
      <div className="absolute top-[40%] right-0 -translate-y-1/2 translate-x-1/2 opacity-10 pointer-events-none">
        <WireframeGlobe className="w-[500px] h-[500px]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
        
        <h2 className="text-2xl md:text-[2.25rem] font-bold text-[#1c2331] mb-6 leading-snug">
          {t('capto.footer_cta.title')}
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-[#f2f2f7] p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('EDUCATION')}
              className={`px-8 py-2 rounded-full text-[13px] md:text-[14px] font-bold transition-all ${
                activeTab === 'EDUCATION'
                  ? 'bg-[#6554ff] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('capto.footer_cta.education')}
            </button>
            <button
              onClick={() => setActiveTab('BUSINESS')}
              className={`px-8 py-2 rounded-full text-[13px] md:text-[14px] font-bold transition-all ${
                activeTab === 'BUSINESS'
                  ? 'bg-[#6554ff] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('capto.footer_cta.business')}
            </button>
          </div>
        </div>

        <p className="text-[15px] md:text-[17px] text-gray-500 mb-14 font-medium">
          {activeTab === 'EDUCATION'
            ? t('capto.footer_cta.education_desc')
            : t('capto.footer_cta.business_desc')
          }
        </p>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 items-center mb-10 max-w-[1100px] mx-auto min-h-[160px]">
           {activeLogos.map((logoPath, i) => (
             <div key={i} className="w-[140px] flex items-center justify-center shrink-0">
               <img 
                 src={logoPath} 
                 alt={`Partner Logo ${i + 1}`} 
                 className="max-h-[60px] max-w-full object-contain transition-opacity duration-500"
                 onError={(e) => {
                   // Fallback for missing images until user uploads them
                   (e.target as HTMLImageElement).src = `https://placehold.co/120x60/f8f9fa/a0aec0?text=Logo+${i+1}`;
                 }} loading="lazy"
               />
             </div>
           ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-16 min-h-[8px]">
          {totalPages > 1 && Array.from({ length: totalPages }).map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setPageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${pageIndex === idx ? 'bg-[#6554ff]' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#"
            className="w-full sm:w-auto px-12 py-3 rounded-full text-[#6554ff] border border-[#6554ff] font-bold text-[14px] hover:bg-indigo-50 transition-colors"
          >
            {t('capto.footer_cta.learn_more')}
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-12 py-3 rounded-full bg-[#6554ff] text-white font-bold text-[14px] hover:bg-[#5746df] transition-colors shadow-lg shadow-indigo-200"
          >
            {t('capto.footer_cta.download_trial')}
          </a>
        </div>

        {/* Localized Footer Sub-bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-left gap-6 border-t border-gray-100 pt-8 mt-8">
          <p className="text-[10px] md:text-[11px] text-gray-500 max-w-[450px] leading-relaxed font-medium">
            {t('capto.footer_cta.localized_note')}
          </p>
          <a href="#" className="shrink-0 hover:opacity-80 transition-opacity">
             <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the Mac App Store" className="h-[36px]" width={135} height={40} loading="lazy" />
          </a>
        </div>

      </div>
    </section>
  );
}
