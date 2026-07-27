import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { Download, PenTool, Code, CloudDownload, Rocket, Smartphone, LayoutGrid, Laptop, Globe, Terminal, Tv, Camera, Apple } from 'lucide-react';

export function VideoTechnology() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: 'SDK Integration',
      description: 'Integrate our SDK into your product/service for ready-to-use video solutions',
      image: '/business/VT/V1.png'
    },
    {
      title: 'Re-Branding White Label',
      description: 'We shall work with you to create a custom, skinned version of vizmato which you may use to promote your own events, products and assets',
      image: '/business/VT/V3.png'
    },
    {
      title: 'Bundling Solutions',
      description: 'Bundling - including our product embedded or bundled into your products/services Vizmato can also be embedded or bundled into existing products /services, complete with a revenue share for subsequent IAP and subscriptions',
      image: '/business/VT/V2.png'
    },
    {
      title: 'Tailor-Made',
      description: "We can integrate custom Themes, custom effects, custom music and native ads to promote your brand, products, services and assets.\n\nVizmato has numerous locations within the app where we can 'drop in' custom Themes, Music & effects to support a time-based promotion for any marketing campaign or any other objective",
      image: '/business/VT/V4.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Navbar />
      <FloatingSocials />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="w-full bg-[#fbfbfe] relative">
          <img
            src="/business/VT/VT-banner.png"
            alt="Video Technology Banner"
            className="w-full h-[250px] md:h-[350px] lg:h-[500px] xl:h-[450px] object-fill object-center"
          />

          {/* Text Overlay on the Hero Banner */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
            <div className="max-w-xl text-left">
              <h1 className="text-3xl md:text-2xl lg:text-6xl text-white mb-4 drop-shadow-lg font-normal">
                Build next Generation video experiences
              </h1>

            </div>
          </div>
        </section>

        {/* Video Technology Tabs Section */}
        <section className="pt-8 pb-4 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#2d3748]">
              <span className="border-b-[1.5px] border-gray-600 pb-1">Video Technology</span>
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
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* How it Works Section */}
        <section className="pt-4 pb-8 bg-[#fbfbfe]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">

              <h2 className="text-3xl md:text-2xl font-bold text-[#2d3748]">Seamless Integration Process</h2>
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
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">Integrate SDK</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Add our SDK to your<br />application in minutes.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-rose-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                  <PenTool className="w-6 h-6 md:w-8 md:h-8 text-rose-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">2</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">Customize</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Configure features and<br />UI to match your needs.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-blue-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">3</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">Build & Test</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Build your app and test<br />with our tools.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-green-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <CloudDownload className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">4</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">Deploy</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Deploy your app and go<br />live with confidence.</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center relative z-10 flex-1 px-2 min-w-[220px] shrink-0 snap-center md:min-w-0 md:shrink">
                <div className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-purple-50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 absolute top-[55px] md:top-[60px]">5</div>
                <h3 className="font-bold text-[#2d3748] text-sm md:text-base mb-1">Scale & Grow</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Scale your video platform<br />and grow your business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compatibility Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-2xl font-bold text-[#2d3748]">Compatibility</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6 max-w-5xl mx-auto">
              {/* iOS */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Apple className="w-8 h-8 text-gray-400 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">iOS</span>
              </div>

              {/* Android */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Smartphone className="w-8 h-8 text-green-500 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">Android</span>
              </div>

              {/* Windows */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <LayoutGrid className="w-8 h-8 text-blue-500 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">Windows</span>
              </div>

              {/* macOS */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Laptop className="w-8 h-8 text-blue-400 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">macOS</span>
              </div>

              {/* Web */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Globe className="w-8 h-8 text-blue-600 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">Web</span>
              </div>

              {/* Linux */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Terminal className="w-8 h-8 text-orange-500 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">Linux</span>
              </div>

              {/* Smart TV */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Tv className="w-8 h-8 text-gray-700 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">Smart TV</span>
              </div>

              {/* Camera & Drone */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-transform">
                <Camera className="w-8 h-8 text-gray-600 mb-3" />
                <span className="font-bold text-[#2d3748] text-[13px]">Camera</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="w-full flex flex-col py-8 md:py-12 bg-[#f4f7f9]">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="relative w-full min-h-[300px] md:min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
              <img
              src="/business/VT/watermarkforcontact.jpg"
              alt="Contact Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Optional slight dark gradient for text readability if the image is bright */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>

            <div className="relative z-20 text-center px-6 py-12 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 drop-shadow-md">
                Global Delight Business is here for you.
              </h2>
              <p className="text-sm md:text-[15px] text-white leading-[1.8] font-medium drop-shadow">
                Find the solutions you need to create engaging products,<br className="hidden md:block" />
                content & entertainment experiences. You may also <a href="#" className="underline decoration-[1.5px] underline-offset-2 hover:text-gray-200 transition-colors">write</a> to us to discuss licensing opportunities.
              </p>
              <div className="mt-8">
                <button className="bg-[#ef5252] hover:bg-[#e04141] text-white text-sm font-semibold tracking-wider py-3 px-10 rounded shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
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
