import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Download, PenTool, Code, CloudDownload, Rocket, Smartphone, LayoutGrid, Laptop, Globe, Terminal, Tv, Camera, Apple } from 'lucide-react';

export function VideoTechnology() {
  const { t } = useTranslation();
  const domain = import.meta.env.VITE_SITE_URL || '';
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: t('technology.video.tab1_title'),
      description: t('technology.video.tab1_desc'),
      image: '/business/VT/V1.webp'
    },
    {
      title: t('technology.video.tab2_title'),
      description: t('technology.video.tab2_desc'),
      image: '/business/VT/V3.webp'
    },
    {
      title: t('technology.video.tab3_title'),
      description: t('technology.video.tab3_desc'),
      image: '/business/VT/V2.webp'
    },
    {
      title: t('technology.video.tab4_title'),
      description: t('technology.video.tab4_desc'),
      image: '/business/VT/V4.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans flex flex-col">
      <Helmet>
        <title>Video Technology Engine | Global Delight B2B</title>
        <meta name="description" content="Leverage Global Delight's award-winning video engine. Fast, scalable SDK integration, custom branding, and white-label video editing solutions for businesses and app developers." />
        <meta name="keywords" content="video engine, video SDK, OEM video editor, white label video app, Global Delight B2B, Vizmato engine, video editing SDK licensing, mobile video editor SDK, custom branded video app" />
        <meta name="subject" content="Video Technology Engine | Global Delight B2B" />
        <meta property="og:title" content="Video Technology Engine | Global Delight B2B" />
        <meta property="og:description" content="Empower your app with our robust video editing technology." />
        <meta name="twitter:title" content="Video Technology Engine | Global Delight B2B" />
        <meta name="twitter:description" content="Empower your app with our robust video editing technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/technology/video`} />
        <meta name="twitter:url" content={`${domain}/technology/video`} />
        <link rel="canonical" href={`${domain}/technology/video`} />
      </Helmet>
      <Navbar />
      <FloatingSocials />
      <Breadcrumbs items={[{ name: 'Business', href: '/business' }, { name: 'Video Technology' }]} />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="w-full bg-[#ffffff] relative">
          <img
            src="/business/VT/VT-banner.webp"
            alt="Video Technology Banner"
            className="w-full h-[250px] md:h-[350px] lg:h-[500px] xl:h-[450px] object-fill object-center" width={1718} height={916} loading="lazy"
          />

          {/* Text Overlay on the Hero Banner */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
            <div className="max-w-xl text-left">
              <h1 className="text-3xl md:text-2xl lg:text-6xl text-white mb-4 drop-shadow-lg font-normal">
                {t('technology.video.hero_title')}
              </h1>

            </div>
          </div>
        </section>

        {/* Video Technology Tabs Section */}
        <section className="pt-8 pb-4 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#2d3748]">
              <span className="border-b-[1.5px] border-gray-600 pb-1">{t('technology.video.section_title')}</span>
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
              <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-0 mt-4">
                {/* Description text */}
                <div className="w-full max-w-3xl flex flex-col items-center text-center justify-start z-20">
                  <p className="text-[#546e7a] text-base md:text-lg leading-relaxed font-medium animate-fadeIn text-center whitespace-pre-line">
                    {tabsData[activeTab].description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="w-full max-w-3xl flex justify-center items-center relative z-10 -mt-6 md:-mt-12">
                  <img
                    src={tabsData[activeTab].image}
                    alt={tabsData[activeTab].title}
                    className={`w-full h-auto object-contain transition-opacity duration-500 animate-fadeIn ${
                      activeTab === 2 
                        ? 'max-w-[220px] lg:max-w-[280px] max-h-[220px] lg:max-h-[280px]' 
                        : 'max-w-[350px] lg:max-w-[480px] max-h-[320px] lg:max-h-[420px]'
                    }`} width={1024} height={1536} loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* How it Works Section */}
        <section className="pt-4 pb-8 bg-[#ffffff]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-3xl md:text-2xl font-bold text-[#2d3748]">{t('technology.video.process_title')}</h2>
            </div>

            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory items-start justify-start md:justify-between relative gap-8 md:gap-0 pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
              {/* Animated Gradient Line (desktop only) */}
              <div className="hidden md:block absolute top-[35px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0 overflow-hidden rounded-full shadow-inner">
                <div className="absolute top-0 left-0 h-full w-[25%] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_12px_#3b82f6] animate-[moving-line_3s_linear_infinite]"></div>
              </div>

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-indigo-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  <Download className="w-6 h-6 md:w-8 md:h-8 text-indigo-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">1</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">{t('technology.video.step1_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{t('technology.video.step1_desc')}</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-rose-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                  <PenTool className="w-6 h-6 md:w-8 md:h-8 text-rose-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">2</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">{t('technology.video.step2_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{t('technology.video.step2_desc')}</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-blue-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">3</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">{t('technology.video.step3_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{t('technology.video.step3_desc')}</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-green-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <CloudDownload className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">4</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">{t('technology.video.step4_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{t('technology.video.step4_desc')}</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-purple-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">5</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">{t('technology.video.step5_title')}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{t('technology.video.step5_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compatibility Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-2xl font-bold text-[#2d3748]">{t('technology.video.compatibility_title')}</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6 max-w-5xl mx-auto">
              {/* iOS */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Apple className="w-8 h-8 text-gray-400 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">{t('technology.video.platform_ios')}</span>
              </div>

              {/* Android */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Smartphone className="w-8 h-8 text-green-500 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">{t('technology.video.platform_android')}</span>
              </div>

              {/* Windows */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <LayoutGrid className="w-8 h-8 text-blue-500 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">{t('technology.video.platform_windows')}</span>
              </div>

              {/* macOS */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Laptop className="w-8 h-8 text-blue-400 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">{t('technology.video.platform_macos')}</span>
              </div>

              {/* Web */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Globe className="w-8 h-8 text-blue-600 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">{t('technology.video.platform_web')}</span>
              </div>

              {/* Linux */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Terminal className="w-8 h-8 text-orange-500 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">{t('technology.video.platform_linux')}</span>
              </div>

              {/* Smart TV */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Tv className="w-8 h-8 text-gray-700 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">{t('technology.video.platform_smarttv')}</span>
              </div>

              {/* Camera & Drone */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Camera className="w-8 h-8 text-gray-600 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">{t('technology.video.platform_camera')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="w-full flex flex-col py-8 md:py-12 bg-[#ffffff]">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="relative w-full min-h-[300px] md:min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
              <img
              src="/business/VT/watermarkforcontact.jpg"
              alt="Contact Background"
              className="absolute inset-0 w-full h-full object-cover z-0" width={1922} height={471} loading="lazy"
            />
            {/* Optional slight dark gradient for text readability if the image is bright */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>

            <div className="relative z-20 text-center px-6 py-12 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 drop-shadow-md">
                {t('technology.video.cta_title')}
              </h2>
              <p className="text-sm md:text-[15px] text-white leading-[1.8] font-medium drop-shadow">
                {t('technology.video.cta_text_p1')}<br className="hidden md:block" />
                {t('technology.video.cta_text_p2')} <a href="#" className="underline decoration-[1.5px] underline-offset-2 hover:text-gray-200 transition-colors">{t('technology.video.cta_text_link')}</a> {t('technology.video.cta_text_p3')}
              </p>
              <div className="mt-8">
                <button className="bg-[#ef5252] hover:bg-[#e04141] text-white text-sm font-semibold tracking-wider py-3 px-10 rounded shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                  {t('technology.video.cta_button')}
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
