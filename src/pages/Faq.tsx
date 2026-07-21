import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Volume2, Camera, Wand2, Mail } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';

export function Faq() {
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.toLowerCase();

  const isMatch = (text: string) => text.toLowerCase().includes(query);

  const showBoom3D = isMatch("Boom 3D Advanced 3D surround sound Mac Windows Mas");
  const showBoom2 = isMatch("Boom 2 Powerful audio enhancer");
  const showBoomIOS = isMatch("Boom for iOS Experience Boom sound iPhone iPad");
  const showAudmike = isMatch("Audmike Professional audio recorder Windows");
  const showAudioApps = showBoom3D || showBoom2 || showBoomIOS || showAudmike;

  const showVizmato = isMatch("Vizmato Create stunning videos");
  const showVideoApp = showVizmato;

  const showCapto = isMatch("Capto Capture, edit and share Mac Windows");
  const showAudioRecorder = isMatch("Audio Recorder Simple, reliable");
  const showUtilityApps = showCapto || showAudioRecorder;

  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans flex flex-col">
      <Helmet>
        <title>FAQ & Support | Global Delight</title>
        <meta name="description" content="Find solutions to common questions and get the help you need." />
      </Helmet>

      <Navbar />
      <FloatingSocials />

      <main className="flex-grow">
        {/* FAQ Hero Banner */}
        <section className="w-full relative">
          {/* Banner Image */}
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px]">
            <img
              src="/Faq/Banner.png"
              alt="FAQ and Support Banner"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            {/* Text Overlay (Left Side) */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10 max-w-3xl">
             
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Got Questions?
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b82f6] mb-6 leading-tight">
                We Have Answers!
              </h2>
              
              {/* Search Bar */}
              <div className="flex items-center bg-[#1d233c] rounded-xl overflow-hidden p-1.5 shadow-lg w-full max-w-lg border border-gray-700/50">
                <div className="pl-4 pr-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow bg-transparent border-none outline-none text-white px-2 py-3 text-sm md:text-base placeholder-gray-500"
                />
                <button className="bg-[#1e88e5] hover:bg-[#1565c0] text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Selector Section */}
        <section className="w-full py-20 bg-[#f8fafc] relative z-20 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Heading */}
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#0f172a] text-center">
                Select From the Following List of Product
              </h2>
            </div>

            {/* Audio Apps */}
            {showAudioApps && (
              <>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Volume2 className="w-6 h-6 text-[#1e293b]" />
                  <h3 className="text-xl font-bold text-[#1e293b]">Audio Apps</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto">
                  {/* Boom 3D */}
                  {showBoom3D && (
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
                      <div className="h-20 mb-4 flex items-center justify-center">
                        <img src="/apps/boom3d-window.png" alt="Boom 3D" className="h-full object-contain" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Boom 3D™</h3>
                      <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-grow leading-relaxed">Advanced 3D surround sound for an immersive audio experience.</p>

                      {/* Dropdown Menu Overlay */}
                      <div className="absolute inset-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white/95 z-30 flex flex-col rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                        <a href="/faq/boom3dmac" className="flex-1 flex items-center justify-center gap-4 hover:bg-gray-100/90 border-b border-gray-200 text-black transition-colors">
                          <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                          <span className="text-[22px] tracking-wide font-normal leading-none mt-1">Mac</span>
                        </a>
                        <a href="/faq/boom3dmas" className="flex-1 flex items-center justify-center gap-4 hover:bg-gray-100/90 border-b border-gray-200 text-black transition-colors">
                          <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                          <span className="text-[22px] tracking-wide font-normal leading-none mt-1">Mas</span>
                        </a>
                        <a href="/faq/boom3dwin" className="flex-1 flex items-center justify-center gap-4 hover:bg-gray-100/90 text-black transition-colors">
                          <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
                          <span className="text-[22px] tracking-wide font-normal leading-none mt-1">Windows</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Boom 2 */}
                  {showBoom2 && (
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-blue-500"></div>
                      <div className="h-20 mb-4 flex items-center justify-center">
                        <img src="/Faq/Boom2LogoFaq.png" alt="Boom 2" className="h-full object-contain" />
                      </div>
                      <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-grow leading-relaxed">Powerful audio enhancer that delivers rich and balanced sound.</p>
                    </div>
                  )}

                  {/* Boom for iOS */}
                  {showBoomIOS && (
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                      <div className="h-20 mb-4 flex items-center justify-center">
                        <img src="/Faq/iBoom.png" alt="Boom for iOS" className="h-full object-contain" />
                      </div>
                      <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-grow leading-relaxed">Experience Boom sound on your iPhone and iPad like never before.</p>
                    </div>
                  )}

                  {/* Audmike */}
                  {showAudmike && (
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-black"></div>
                      <div className="h-20 mb-4 flex items-center justify-center">
                        <img src="/apps/AuDimix-Window.jpeg" alt="Audmike" className="h-full object-contain" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Audmike</h3>
                      <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-grow leading-relaxed">Professional audio recorder and editor for crystal clear recordings.</p>

                      {/* Dropdown Menu Overlay */}
                      <div className="absolute inset-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white/95 z-30 flex flex-col rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                        <a href="/faq/audimixwin" className="flex-1 flex items-center justify-center gap-4 hover:bg-gray-100/90 text-black transition-colors">
                          <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
                          <span className="text-[22px] tracking-wide font-normal leading-none mt-1">Windows</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Video App */}
            {showVideoApp && (
              <>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Camera className="w-6 h-6 text-[#1e293b]" />
                  <h3 className="text-xl font-bold text-[#1e293b]">Video App</h3>
                </div>
                
                <div className="flex justify-center mb-20 max-w-5xl mx-auto">
                  {/* Vizmato */}
                  <div className="w-full max-w-[280px] bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
                    <div className="h-20 mb-4 flex items-center justify-center">
                      <img src="/Faq/Vizmato.png" alt="Vizmato" className="h-full object-contain" />
                    </div>
                    <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-grow leading-relaxed">Create stunning videos with powerful editing tools and effects in minutes.</p>
                  </div>
                </div>
              </>
            )}

            {/* Utility Apps */}
            {showUtilityApps && (
              <>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Wand2 className="w-6 h-6 text-[#1e293b]" />
                  <h3 className="text-xl font-bold text-[#1e293b]">Utility Apps</h3>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
                  {/* Capto */}
                  {showCapto && (
                    <div className="w-full sm:w-[280px] bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
                      <div className="h-20 mb-4 flex items-center justify-center">
                        <img src="/apps/Capto-mac.jpeg" alt="Capto" className="h-full object-contain" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Capto</h3>
                      <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-grow leading-relaxed">Capture, edit and share your ideas with ease and precision.</p>

                      {/* Dropdown Menu Overlay */}
                      <div className="absolute inset-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white/95 z-30 flex flex-col rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                        <a href="/faq/captomac" className="flex-1 flex items-center justify-center gap-3 hover:bg-gray-100/90 border-b border-gray-200 text-black transition-colors">
                          <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                          <span className="text-[20px] tracking-wide font-normal leading-none mt-1">Mac</span>
                        </a>
                        <a href="/faq/captowin" className="flex-1 flex items-center justify-center gap-3 hover:bg-gray-100/90 text-black transition-colors">
                          <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
                          <span className="text-[20px] tracking-wide font-normal leading-none mt-1">Windows</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Audio Recorder */}
                  {showAudioRecorder && (
                    <div className="w-full sm:w-[280px] bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-black"></div>
                      <div className="h-20 mb-4 flex items-center justify-center">
                        <img src="/Faq/AudionFaqLogo.png" alt="Audio Recorder" className="h-full object-contain" />
                      </div>
                      <p className="text-[13px] md:text-sm text-gray-500 mb-6 flex-grow leading-relaxed">Simple, reliable and high quality audio recording app.</p>
                    </div>
                  )}
                </div>
              </>
            )}
            
            {/* Show message if no results */}
            {!showAudioApps && !showVideoApp && !showUtilityApps && (
              <div className="text-center py-10 text-gray-500">
                <p className="text-lg">No products found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-20 relative bg-[#0b1221] overflow-hidden border-t border-gray-800">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 0H0V400H400V0Z" fill="url(#paint0_radial)"/>
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 0) rotate(135) scale(400)">
                  <stop stopColor="#3b82f6" stopOpacity="0.4"/>
                  <stop offset="1" stopColor="#0b1221" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute top-20 right-[5%] opacity-10 rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
              <polyline points="15,9 18,9 18,11"></polyline>
              <path d="M5.5 19C7 19 8.5 17.5 8.5 16C8.5 14.5 7 13 5.5 13"></path>
              <polyline points="2 9 12 15 22 9"></polyline>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              {/* Left text */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:w-[45%] text-center sm:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-900/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="text-blue-500 text-[11px] md:text-xs font-bold tracking-widest mb-2 uppercase">STAY UPDATED</h4>
                  <h2 className="text-3xl md:text-[34px] font-bold text-white mb-4 leading-tight">Be in the know</h2>
                  <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-sm">
                    Join our mailing list to hear about new releases, product updates, feature additions, and special deals before anyone else!
                  </p>
                </div>
              </div>
              
              {/* Right form */}
              <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-end">
                <form className="w-full max-w-lg flex flex-col sm:flex-row gap-0 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] focus-within:ring-2 focus-within:ring-blue-500 transition-all border border-gray-700">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-grow bg-[#1e293b] text-white px-5 md:px-6 py-4 outline-none placeholder-gray-400 text-[15px]"
                    required
                  />
                  <button type="submit" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 md:px-8 py-4 transition-colors whitespace-nowrap text-[15px]">
                    Sign me up
                  </button>
                </form>
                <p className="text-[11px] md:text-xs text-gray-400 mt-4 text-center lg:text-left w-full max-w-lg pl-1 opacity-80">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
