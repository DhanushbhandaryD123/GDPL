import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { Wand2, Zap, Layers } from 'lucide-react';

export function CameraTechnology() {
  const { t } = useTranslation();
  const domain = import.meta.env.VITE_SITE_URL || '';
  const [activeTab, setActiveTab] = useState(0);

  const tabsData: any[] = [
    {
      id: 'airsnap',
      title: t('technology.camera.tab1_title'),
      description: t('technology.camera.tab1_desc'),
      image: '/business/CT/C1.png'
    },
    {
      id: 'live-filters',
      title: t('technology.camera.tab2_title'),
      description: t('technology.camera.tab2_desc'),
      image: '/business/CT/C2.png',
      features: [
        { icon: Wand2, label: t('technology.camera.tab2_feature1') },
        { icon: Zap, label: t('technology.camera.tab2_feature2') },
        { icon: Layers, label: t('technology.camera.tab2_feature3') }
      ]
    },
    {
      id: 'editing',
      title: t('technology.camera.tab3_title'),
      description: t('technology.camera.tab3_desc'),
      image: '/business/CT/C3.png'
    },
    {
      id: 'secure',
      title: t('technology.camera.tab4_title'),
      description: t('technology.camera.tab4_desc'),
      image: '/business/CT/C4.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans flex flex-col">
      <Helmet>
        <title>Camera Technology | Global Delight B2B OEM Solutions</title>
        <meta name="description" content="Discover Global Delight's advanced camera technology. Integrate AirSnap, Live Filters, and One-Touch Image Editing SDKs into your photography apps through OEM licensing." />
        <meta name="keywords" content="camera technology, photography SDK, AirSnap, live filters SDK, image editing SDK, Global Delight OEM, camera app SDK, photo editing SDK licensing, white label camera app" />
        <meta name="subject" content="Camera Technology | Global Delight B2B" />
        <meta property="og:title" content="Camera Technology | Global Delight B2B" />
        <meta property="og:description" content="Elevate your photography app with our cutting-edge camera engine." />
        <meta name="twitter:title" content="Camera Technology | Global Delight B2B" />
        <meta name="twitter:description" content="Elevate your photography app with our cutting-edge camera engine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/technology/camera`} />
        <meta name="twitter:url" content={`${domain}/technology/camera`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/technology/camera`} />
      </Helmet>

      <Navbar />
      <FloatingSocials />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="w-full bg-[#fff] relative px-2 md:px-4 pt-2 md:pt-4 pb-0">
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[500px] xl:h-[450px] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <img
              src="/business/CT/CT-banner.png"
              alt="Camera Technology Banner"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            {/* Text Overlay (Right Side) */}
            <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16 lg:px-24 z-10">
              <div className="max-w-xl text-right">
                <h1 className="text-xl md:text-2xl lg:text-[28px] text-white font-normal drop-shadow-md lg:leading-[1.4] text-right" style={{ whiteSpace: 'pre-line' }}>
                  {t('technology.camera.hero_title')}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Text Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#9e9e9e] text-base md:text-[17px] font-medium leading-relaxed max-w-3xl mx-auto">
              {t('technology.camera.intro')}
            </p>
          </div>
        </section>

        {/* Camera Technology Tabs Section */}
        <section className="pb-4 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-10 text-[#2d3748]">
                <span className="border-b-[1.5px] border-gray-600 pb-1">{t('technology.camera.section_title')}</span>
            </h2>

            <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 w-full">
              {/* Top Horizontal Tabs */}
              <div className="w-full max-w-5xl flex flex-col md:flex-row border border-gray-200 rounded-md overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white">
                {tabsData.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 text-center py-4 px-3 md:px-4 text-sm font-medium transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-200 last:border-b-0 last:border-r-0 ${activeTab === index
                        ? 'bg-[#f0494f] text-white'
                        : 'bg-white text-[#546e7a] hover:bg-gray-50'
                      }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Content Area (Description + Image) */}
              <div className="w-full max-w-5xl flex flex-col md:flex-row items-start justify-center gap-8 md:gap-10 mt-6 md:mt-8">
                {/* Description text */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start">
                  <p className="text-[#546e7a] text-base md:text-lg leading-relaxed font-medium animate-fadeIn text-center md:text-left">
                    {tabsData[activeTab].description}
                  </p>
                  
                  {tabsData[activeTab].features && (
                    <div className="mt-8 flex items-stretch justify-center md:justify-start gap-4 md:gap-6 animate-fadeIn flex-wrap">
                      {tabsData[activeTab].features.map((feat: any, idx: number) => {
                        const Icon = feat.icon;
                        return (
                          <div key={idx} className="flex flex-col items-center text-center bg-white px-4 py-5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 w-[110px] md:w-[130px]">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 bg-fuchsia-50 border border-fuchsia-100 shadow-sm">
                              <Icon className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-600" />
                            </div>
                            <span className="text-gray-800 text-[11px] md:text-[13px] font-bold leading-tight">{feat.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
                  <img
                    src={tabsData[activeTab].image}
                    alt={tabsData[activeTab].title}
                    className="w-full max-w-[280px] lg:max-w-[320px] h-auto max-h-[250px] lg:max-h-[280px] object-contain transition-opacity duration-500 animate-fadeIn"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="w-full flex flex-col py-8 md:py-12 bg-[#ffffff]">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="relative w-full min-h-[300px] md:min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
              <img
              src="/business/CT/CT_C.png"
              alt="Contact Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Optional slight dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>

            <div className="relative z-20 text-center px-6 py-12 max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 drop-shadow-md">
                {t('technology.camera.cta_title')}
              </h2>
              <p className="text-sm md:text-base text-white/95 leading-relaxed font-medium drop-shadow-sm max-w-3xl mx-auto">
                {t('technology.camera.cta_text')}
              </p>
              <div className="mt-8">
                <button className="bg-[#ef5252] hover:bg-[#e04141] text-white text-sm font-semibold tracking-wider py-3 px-12 rounded shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                  {t('technology.camera.cta_button')}
                </button>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
