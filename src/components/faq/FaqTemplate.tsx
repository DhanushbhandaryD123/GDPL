import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { FloatingSocials } from '../layout/FloatingSocials';
import { ChevronDown, Search } from 'lucide-react';
import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  icon?: React.ReactNode;
  faqs: FaqItem[];
}

interface FaqTemplateProps {
  title: string;
  description?: string;
  keywords?: string;
  logoSrc: string;
  logoAlt: string;
  faqs?: FaqItem[];
  categories?: FaqCategory[];
}

export function FaqTemplate({ title, description, keywords, logoSrc, logoAlt, faqs, categories }: FaqTemplateProps) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Default to the first category if categories exist
  const [activeCategory, setActiveCategory] = useState<string>(categories?.[0]?.id || '');

  // Full FAQ set regardless of the active tab/search, so the structured data
  // always describes everything on the page, not just what's visible right now.
  const allFaqs: FaqItem[] = categories ? categories.flatMap((cat) => cat.faqs) : faqs || [];
  const faqSchema =
    allFaqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": allFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }
      : null;

  // Helper to render a single FAQ item
  const renderFaqItem = (faq: FaqItem, uniqueId: string) => {
    const isOpen = openIndex === uniqueId;
    return (
      <div 
        key={uniqueId}
        className={`border transition-all duration-300 rounded-2xl overflow-hidden bg-white ${
          isOpen ? 'border-rose-500 shadow-[0_4px_20px_rgba(244,63,94,0.15)]' : 'border-gray-200 hover:border-gray-300 shadow-sm'
        }`}
      >
        <button 
          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
          onClick={() => setOpenIndex(isOpen ? null : uniqueId)}
        >
          <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
          <span className={`flex-shrink-0 transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full ${
            isOpen ? 'rotate-180 bg-rose-50 text-rose-600' : 'bg-gray-50 text-gray-400'
          }`}>
            <ChevronDown className="w-5 h-5" />
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
            {faq.answer}
          </div>
        </div>
      </div>
    );
  };

  // Determine which FAQs to show based on search or active tab
  let displayFaqs: { faq: FaqItem, uniqueId: string }[] = [];

  if (searchQuery) {
    // If searching, flatten everything and search across all questions
    const lowerQuery = searchQuery.toLowerCase();
    if (categories) {
      categories.forEach(cat => {
        cat.faqs.forEach((faq, idx) => {
          if (faq.question.toLowerCase().includes(lowerQuery) || faq.answer.toLowerCase().includes(lowerQuery)) {
            displayFaqs.push({ faq, uniqueId: `${cat.id}-${idx}` });
          }
        });
      });
    } else if (faqs) {
      faqs.forEach((faq, idx) => {
        if (faq.question.toLowerCase().includes(lowerQuery) || faq.answer.toLowerCase().includes(lowerQuery)) {
          displayFaqs.push({ faq, uniqueId: `flat-${idx}` });
        }
      });
    }
  } else {
    // If not searching, show either the active tab or the flat list
    if (categories) {
      const activeCat = categories.find(c => c.id === activeCategory);
      if (activeCat) {
        displayFaqs = activeCat.faqs.map((faq, idx) => ({ faq, uniqueId: `${activeCat.id}-${idx}` }));
      }
    } else if (faqs) {
      displayFaqs = faqs.map((faq, idx) => ({ faq, uniqueId: `flat-${idx}` }));
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col relative overflow-x-hidden">
      <Helmet>
        <title>{title} | Global Delight</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.globaldelight.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "FAQ",
                "item": "https://www.globaldelight.com/faq"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": title
              }
            ]
          })}
        </script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>
      
      <Navbar />
      <FloatingSocials />

      <main className="flex-grow pt-12 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Side-by-Side Logo and Search */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 mb-16 pt-8">
            <div className="flex-shrink-0">
              <img src={logoSrc} alt={logoAlt} className="h-20 md:h-28 w-auto object-contain" />
            </div>
            
            <div className="relative w-full max-w-lg group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-rose-500 transition-colors" />
              <input
                type="text"
                placeholder={t('faqTemplate.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-900 pl-14 pr-6 py-4 rounded-full outline-none focus:border-rose-500 transition-all shadow-md placeholder-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Tab Navigation (Only shows if categories are provided and not searching) */}
          {categories && !searchQuery && (
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-start border-b border-gray-100 pb-10 mb-12">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex flex-col items-center gap-3 transition-colors group focus:outline-none ${
                      isActive ? 'text-rose-600' : 'text-gray-500 hover:text-rose-600'
                    }`}
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all shadow-sm ${
                      isActive 
                        ? 'bg-rose-600 text-white shadow-rose-500/30 scale-105' 
                        : 'bg-gray-50 text-gray-400 group-hover:bg-rose-50 group-hover:text-rose-600 group-hover:scale-105'
                    }`}>
                      {cat.icon}
                    </div>
                    <span className="text-[13px] md:text-sm font-semibold max-w-[100px] md:max-w-[120px] text-center leading-tight">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="container mx-auto px-6 max-w-3xl">
          {/* Active Category Title (If tabs are used) */}
          {categories && !searchQuery && (
            <div className="mb-8 flex justify-center">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-rose-100 pb-2 inline-block">
                {categories.find(c => c.id === activeCategory)?.title}
              </h2>
            </div>
          )}

          {/* Search Results Title */}
          {searchQuery && (
            <div className="mb-8 text-center">
              <p className="text-gray-500">
                {t('faqTemplate.found_results_prefix')} {displayFaqs.length} {t('faqTemplate.found_results_suffix')} "{searchQuery}"
              </p>
            </div>
          )}

          {/* FAQ List Rendering */}
          <div className="space-y-4">
            {displayFaqs.length > 0 ? (
              displayFaqs.map(({ faq, uniqueId }) => renderFaqItem(faq, uniqueId))
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-gray-500 font-medium">{t('faqTemplate.no_results')}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
