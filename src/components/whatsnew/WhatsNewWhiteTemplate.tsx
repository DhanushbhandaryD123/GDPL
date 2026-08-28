import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface PlatformReleaseNotes {
  version: string;
  date: string;
  features?: string[];
  enhancements?: string[];
  bugFixes?: string[];
}

interface WhatsNewWhiteTemplateProps {
  productName: string;
  logoSrc: string;
  macOSNotes?: PlatformReleaseNotes;
  windowsNotes?: PlatformReleaseNotes;
  downloadUrl?: string;
}

export function WhatsNewWhiteTemplate({ 
  productName, 
  logoSrc,
  macOSNotes, 
  windowsNotes,
  downloadUrl = "#"
}: WhatsNewWhiteTemplateProps) {
  const navigate = useNavigate();
  // Default to macOS if available, otherwise windows
  const [platform, setPlatform] = useState<'macOS' | 'windows'>(macOSNotes ? 'macOS' : 'windows');

  const activeNotes = platform === 'macOS' ? macOSNotes : windowsNotes;

  return (
    <div className="min-h-screen bg-[#ffffff] font-sans flex flex-col">
      <Helmet>
        <title>What's New in {productName}</title>
      </Helmet>
      
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 py-12 md:py-20">
        
        {/* Modal / Card Container */}
        <div className="bg-white w-full max-w-4xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] overflow-hidden relative">
          
          {/* Close Button */}
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8 md:p-12">
            
            {/* Header: Logo and Platform Toggle */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
              
              {/* Left side: Logo, Date, Version */}
              <div className="space-y-6">
                <img src={logoSrc} alt={productName} className="h-10 md:h-12 w-auto object-contain" />
                
                {activeNotes ? (
                  <div className="space-y-2 text-lg">
                    <p className="text-gray-600">
                      Release Date: <span className="font-bold text-gray-900">{activeNotes.date}</span>
                    </p>
                    <p className="text-gray-600">
                      Update Version: <span className="font-bold text-gray-900">{activeNotes.version}</span>
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No release notes available for this platform.</p>
                )}
              </div>

              {/* Right side: Platform Switcher */}
              <div className="space-y-4">
                <h3 className="text-lg text-gray-600">Platform:</h3>
                <div className="flex items-center gap-6">
                  
                  {/* macOS Radio */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${platform === 'macOS' ? 'border-[#00e5ff]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                      {platform === 'macOS' && <div className="w-2.5 h-2.5 rounded-full bg-[#00e5ff]" />}
                    </div>
                    <span className={`text-xl font-bold transition-colors ${platform === 'macOS' ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      macOS
                    </span>
                    <input 
                      type="radio" 
                      name="platform" 
                      value="macOS" 
                      checked={platform === 'macOS'} 
                      onChange={() => setPlatform('macOS')} 
                      className="hidden" 
                      disabled={!macOSNotes}
                    />
                  </label>

                  {/* Windows Radio */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${platform === 'windows' ? 'border-[#00e5ff]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                      {platform === 'windows' && <div className="w-2.5 h-2.5 rounded-full bg-[#00e5ff]" />}
                    </div>
                    <span className={`text-xl font-bold transition-colors ${platform === 'windows' ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      windows
                    </span>
                    <input 
                      type="radio" 
                      name="platform" 
                      value="windows" 
                      checked={platform === 'windows'} 
                      onChange={() => setPlatform('windows')} 
                      className="hidden"
                      disabled={!windowsNotes}
                    />
                  </label>
                  
                </div>
              </div>
            </div>

            {/* Content Area */}
            {activeNotes && (
              <div className="space-y-10 min-h-[250px]">
                
                {/* Features */}
                {activeNotes.features && activeNotes.features.length > 0 && (
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#00d0e6] text-[#00a8ba] text-sm font-semibold mb-5">
                      New Feature
                    </span>
                    <ul className="space-y-3">
                      {activeNotes.features.map((feature, i) => {
                        const colonIndex = feature.indexOf(':');
                        const hasColon = colonIndex !== -1;
                        return (
                          <li key={i} className="flex items-start text-gray-700 leading-relaxed text-base">
                            <span className="text-[#00e5ff] mr-3 mt-1.5 font-bold text-lg leading-none">•</span>
                            <span>
                              {hasColon ? (
                                <>
                                  <strong className="text-gray-900 font-semibold">{feature.substring(0, colonIndex + 1)}</strong>
                                  {feature.substring(colonIndex + 1)}
                                </>
                              ) : (
                                feature
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Enhancements */}
                {activeNotes.enhancements && activeNotes.enhancements.length > 0 && (
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm font-semibold mb-5">
                      Enhancements
                    </span>
                    <ul className="space-y-3">
                      {activeNotes.enhancements.map((enhancement, i) => {
                        const colonIndex = enhancement.indexOf(':');
                        const hasColon = colonIndex !== -1;
                        return (
                          <li key={i} className="flex items-start text-gray-700 leading-relaxed text-base">
                            <span className="text-yellow-400 mr-3 mt-1.5 font-bold text-lg leading-none">•</span>
                            <span>
                              {hasColon ? (
                                <>
                                  <strong className="text-gray-900 font-semibold">{enhancement.substring(0, colonIndex + 1)}</strong>
                                  {enhancement.substring(colonIndex + 1)}
                                </>
                              ) : (
                                enhancement
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Bug Fixes */}
                {activeNotes.bugFixes && activeNotes.bugFixes.length > 0 && (
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-green-500 text-green-600 text-sm font-semibold mb-5">
                      Bug Fixes
                    </span>
                    <ul className="space-y-3">
                      {activeNotes.bugFixes.map((fix, i) => (
                        <li key={i} className="flex items-start text-gray-700 leading-relaxed text-base">
                          <span className="text-green-500 mr-3 mt-1.5 font-bold text-lg leading-none">•</span>
                          <span>{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}

            {/* Footer / Buttons */}
            <div className="mt-16 text-center border-t border-gray-100 pt-10">
              <p className="text-gray-600 mb-8 font-medium">We hope you love the new features! Thank you for your support!</p>
              
              <div className="flex items-center justify-center gap-4">
                <a 
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#00d0e6] to-[#00a8ba] text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Download
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
