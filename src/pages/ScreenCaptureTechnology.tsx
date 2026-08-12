import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';

const tabsData = [
  {
    id: 'capture',
    title: 'Customised Screen Capture',
    description: 'Easy to use recording and editing suite allows users to record their mac screen with simple key commands. Start, pause, stop, record computer or outside audio or both, or record through the camera, this tech employs the most versatile screen record options available.',
    image: '/business/ST/S2.png'
  },
  {
    id: 'record-edit',
    title: 'Customised Screen Recording & Edit',
    description: 'Post-record edit your Screen Record or Screen capture with the latest image and video editing technology',
    image: '/business/ST/S1.png'
  }
];

export function ScreenCaptureTechnology() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we have scrolled to the very end, jump back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) { // -10 for rounding errors
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise scroll one full item width to the right
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans flex flex-col">
      <Helmet>
        <title>Screen Capture Technology | Global Delight B2B</title>
        <meta name="description" content="Global Delight's customized Screen Capture and Screen Recording engine. High-performance recording and editing solutions for macOS and Windows applications, available for OEM licensing." />
        <meta name="keywords" content="screen capture engine, screen recording SDK, video capture OEM, Global Delight screen recorder, screen recording SDK licensing, white label screen recorder, Capto engine" />
        <meta name="subject" content="Screen Capture Technology | Global Delight B2B" />
        <meta property="og:title" content="Screen Capture Technology | Global Delight B2B" />
        <meta property="og:description" content="Integrate our reliable screen capture and recording technology." />
        <meta name="twitter:title" content="Screen Capture Technology | Global Delight B2B" />
        <meta name="twitter:description" content="Integrate our reliable screen capture and recording technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/technology/screen-capture`} />
        <meta name="twitter:url" content={`${domain}/technology/screen-capture`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/technology/screen-capture`} />
      </Helmet>

      <Navbar />
      <FloatingSocials />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="w-full bg-[#fff] relative px-2 md:px-4 pt-2 md:pt-4 pb-0">
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[500px] xl:h-[450px] rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <img
              src="/business/ST/ST_banner.png"
              alt="Screen Capture Technology Banner"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            {/* Text Overlay (Left Side) */}
            <div className="absolute inset-0 flex items-center justify-start px-4 md:px-8 lg:px-12 z-10">
              <div className="max-w-2xl">
                <h1 className="text-2 xl md:text-5xl lg:text-5xl text-white font-normal drop-shadow-lg leading-tight">
                  Full suite of Screen Capture, Recording & Editing tools
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Text Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[#9e9e9e] text-base md:text-[17px] font-medium leading-relaxed max-w-3xl mx-auto">
              Global Delight has the depth & scale of experience to build outstanding digital products with leading edge solutions for your audio, photo and video needs.
            </p>
          </div>
        </section>

        {/* Screen Capture Technology Tabs Section */}
        <section className="pb-4 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-10 text-[#2d3748]">
              <span className="border-b-[1.5px] border-gray-600 pb-1">Screen Capture Technology</span>
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
                <div className="w-full md:w-1/2 flex items-start justify-center md:justify-start">
                  <p className="text-[#546e7a] text-base md:text-lg leading-relaxed font-medium animate-fadeIn text-center md:text-left whitespace-pre-line">
                    {tabsData[activeTab].description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-center items-start">
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

        {/* Simple Steps Section */}
        <section className="py-16 bg-[#fafbfc]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#1a202c]">
              Simple Steps to Stunning Results
            </h2>

            <div ref={scrollRef} className="flex flex-row overflow-x-auto snap-x snap-mandatory items-start justify-start md:justify-between relative gap-8 md:gap-0 pb-6 md:pb-0 mt-8 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
              {/* Animated Gradient Line (desktop only) */}
              <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gray-100 z-0 overflow-hidden rounded-full shadow-inner">
                <div className="absolute top-0 left-0 h-full w-[25%] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_12px_#3b82f6] animate-[moving-line_3s_linear_infinite]"></div>
              </div>

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10 w-full flex-none px-4 snap-center md:flex-1 md:w-auto md:min-w-0 md:shrink">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                    <path d="M6 2v2"></path><path d="M2 6h2"></path><path d="M6 22v-2"></path><path d="M2 18h2"></path><path d="M22 18h-2"></path><path d="M22 6h-2"></path><path d="M18 2v2"></path><path d="M18 22v-2"></path>
                    <rect x="6" y="6" width="12" height="12"></rect>
                  </svg>
                </div>
                <h4 className="text-red-500 font-semibold text-sm mb-2">Step 1</h4>
                <h3 className="font-bold text-[#2d3748] text-base mb-2">Select Area</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">Choose the area you<br/>want to capture.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 w-full flex-none px-4 snap-center md:flex-1 md:w-auto md:min-w-0 md:shrink">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-red-600 text-white font-bold text-[10px] tracking-wider">
                    <div className="w-2 h-2 bg-white rounded-full"></div> REC
                  </div>
                </div>
                <h4 className="text-red-500 font-semibold text-sm mb-2">Step 2</h4>
                <h3 className="font-bold text-[#2d3748] text-base mb-2">Record</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">Start recording your<br/>screen with audio.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 w-full flex-none px-4 snap-center md:flex-1 md:w-auto md:min-w-0 md:shrink">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                    <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h4 className="text-red-500 font-semibold text-sm mb-2">Step 3</h4>
                <h3 className="font-bold text-[#2d3748] text-base mb-2">Edit</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">Trim, annotate and<br/>enhance your video.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 w-full flex-none px-4 snap-center md:flex-1 md:w-auto md:min-w-0 md:shrink">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <h4 className="text-red-500 font-semibold text-sm mb-2">Step 4</h4>
                <h3 className="font-bold text-[#2d3748] text-base mb-2">Save & Share</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">Export in your preferred<br/>format and share.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden bg-[#111318] rounded-xl max-w-6xl mx-auto shadow-2xl">
              {/* Subtle red swoosh background effect */}
              <div className="absolute inset-0 z-0">
                <svg viewBox="0 0 1440 300" preserveAspectRatio="none" className="w-full h-full opacity-30">
                  <path d="M0,150 C320,300 420,0 740,150 C1060,300 1200,50 1440,100 L1440,300 L0,300 Z" fill="url(#grad1)" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#ef5252', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#8b0000', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative z-10 px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Left Side: Icon + Text */}
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8">
                  {/* Play Icon in Red Circle */}
                  <div className="w-16 h-16 shrink-0 rounded-full border-2 border-red-500/80 flex items-center justify-center bg-black/40 shadow-[0_0_15px_rgba(239,82,82,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1 opacity-90">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                      Global Delight Business is here for you.
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 max-w-2xl">
                      Find the solutions you need to create engaging products,
                      content & entertainment experiences. You may also write to us to discuss licensing opportunities.
                    </p>
                  </div>
                </div>

                {/* Right Side: Button */}
                <div className="shrink-0">
                  <button className="bg-[#ef5252] hover:bg-[#e04141] text-white text-sm md:text-base font-semibold py-3 px-10 rounded shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
                    CONTACT
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
