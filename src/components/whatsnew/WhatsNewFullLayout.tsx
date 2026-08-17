import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from '../layout/LocalizedLink';

export interface ReleaseVersion {
  version: string;
  date: string;
  features?: string[];
  enhancements?: string[];
  bugFixes?: string[];
  downloadUrl?: string;
}

interface WhatsNewFullLayoutProps {
  productName: string;
  logoSrc: string;
  heroMockupSrc?: string;
  heroBgClass?: string;
  heroBgUrl?: string;
  activePlatform?: 'macOS' | 'windows' | 'ios' | 'android' | 'none';
  macOSNotes?: ReleaseVersion[];
  windowsNotes?: ReleaseVersion[];
  defaultNotes?: ReleaseVersion[]; // For products without OS specific notes
  onPlatformChange?: (platform: 'macOS' | 'windows' | 'ios' | 'android') => void;
  productId: 'boom3d' | 'boom2' | 'capto' | 'audion' | 'audimix';
}

export function WhatsNewFullLayout({
  productName,
  logoSrc,
  heroMockupSrc,
  heroBgClass = "bg-[#060814]", // dark blue/black default
  heroBgUrl,
  activePlatform,
  macOSNotes = [],
  windowsNotes = [],
  defaultNotes = [],
  onPlatformChange,
  productId
}: WhatsNewFullLayoutProps) {
  
  const navigate = useNavigate();
  // State to track which accordions are open. By default, open the first one (index 0).
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  let activeNotes: ReleaseVersion[] = defaultNotes;
  if (activePlatform === 'macOS') activeNotes = macOSNotes;
  else if (activePlatform === 'windows') activeNotes = windowsNotes;

  const sidebarProducts = [
    { id: 'boom3d-mac', label: 'Boom 3D Mac', productId: 'boom3d', platform: 'macOS', href: '/whatsnew/boom' },
    { id: 'boom3d-win', label: 'Boom 3D Windows', productId: 'boom3d', platform: 'windows', href: '/whatsnew/boom' },
    { id: 'boom2-mac', label: 'Boom 2 Mac', productId: 'boom2', platform: 'macOS', href: '/whatsnew/boom2' },
    { id: 'capto-mac', label: 'Capto Mac', productId: 'capto', platform: 'macOS', href: '/whatsnew/capto' },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 font-sans flex flex-col">
      <Helmet>
        <title>What's New in {productName}</title>
      </Helmet>
      
      {/* Light Navbar to match main site or keep it dark? We will use standard Navbar */}
      <div className="bg-white">
        <Navbar />
      </div>

      <main className="flex-1 w-full">
        
        {/* HERO SECTION */}
        <div className={`relative w-full h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center ${heroBgClass}`}
             style={{ 
               backgroundImage: heroBgUrl ? `url("${heroBgUrl}")` : 'none',
               backgroundSize: 'cover',
               backgroundPosition: 'center' 
             }}>
          {/* Fallback gradient if image fails */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-[#0a0515]/80 -z-10" />
          
          <div className={`max-w-[1200px] w-full mx-auto px-6 ${heroMockupSrc ? 'grid md:grid-cols-2 gap-8 items-center' : 'flex flex-col items-center justify-center'} relative z-10`}>
            {/* Mockup */}
            {heroMockupSrc && (
              <div className="flex justify-center md:justify-end">
                <img src={heroMockupSrc} alt={`${productName} Mockup`} className="max-h-[250px] md:max-h-[350px] object-contain drop-shadow-2xl" />
              </div>
            )}
            
            {/* Title */}
            <div className={`flex flex-col items-center text-center ${heroMockupSrc ? 'md:items-start md:text-left' : 'max-w-3xl mx-auto'}`}>
              <img src={logoSrc} alt={productName} className="h-12 md:h-16 mb-6 object-contain" />
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-8">
                Here's everything you need to<br className="hidden md:block"/> 
                know about the latest version of<br className="hidden md:block"/>
                {productName}{activePlatform && activePlatform !== 'none' ? ` for ${activePlatform === 'macOS' ? 'macOS' : 'Windows'}` : ''}.
              </h1>
              <a href="#" className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white px-8 py-2.5 rounded-full font-medium transition-all hover:bg-white/5">
                {activePlatform === 'macOS' && <span className="text-xl"></span>}
                {activePlatform === 'windows' && <span className="text-xl">⊞</span>}
                Try Now
              </a>
            </div>
          </div>
        </div>

        {/* SORT BAR */}
        <div className="border-b border-[#222]">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
            <img src={logoSrc} alt={productName} className="h-8 object-contain" />
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-400">Sort by :</span>
              <select className="bg-[#1a1a1a] border border-[#333] text-white rounded-md px-3 py-1.5 outline-none focus:border-blue-500">
                <option>Latest first</option>
                <option>Oldest first</option>
              </select>
            </div>
          </div>
        </div>

        {/* MAIN TWO-COLUMN CONTENT */}
        <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* SIDEBAR */}
          <div className="md:w-[280px] shrink-0">
            <div className="bg-[#0f0f0f] border border-[#222] rounded-2xl p-6">
              <h3 className="text-white font-medium mb-6">Global Delight Products</h3>
              
              <ul className="space-y-4 mb-8">
                {sidebarProducts.map(item => {
                  const isActive = item.productId === productId && item.platform === activePlatform;
                  
                  return (
                    <li key={item.id} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#00d0e6]' : 'bg-transparent'}`} />
                      {isActive ? (
                        <span className="text-[#00d0e6] font-medium cursor-default">{item.label}</span>
                      ) : (
                        <button 
                          onClick={() => {
                            if (item.productId === productId && onPlatformChange && (item.platform === 'macOS' || item.platform === 'windows')) {
                              onPlatformChange(item.platform as 'macOS' | 'windows');
                              setOpenIndex(0); // reset accordion
                            } else {
                              navigate(item.href);
                            }
                          }}
                          className="text-gray-400 hover:text-gray-200 transition-colors"
                        >
                          {item.label}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="space-y-4 pt-6 border-t border-[#222]">
                <Link to="/faq" className="block text-gray-300 hover:text-white">Help</Link>
                <a href="https://www.globaldelight.com/store/" className="block text-gray-300 hover:text-white">Store</a>
                <Link to="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
              </div>
            </div>
          </div>

          {/* RIGHT ACCORDION LIST */}
          <div className="flex-1 space-y-4">
            {activeNotes.length === 0 ? (
              <div className="text-gray-500 py-12 text-center border border-[#222] rounded-xl">
                No release notes found for this platform.
              </div>
            ) : (
              activeNotes.map((note, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div key={note.version} className="border border-[#2a2a2a] rounded-xl overflow-hidden bg-[#0d0d0d]">
                    
                    {/* Header */}
                    <button 
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 hover:bg-[#151515] transition-colors outline-none"
                    >
                      <div className="flex items-center gap-3">
                        {isOpen ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                        <h2 className="text-lg font-medium text-white">Update Version: {note.version}</h2>
                      </div>
                      <span className="text-white font-medium">{note.date}</span>
                    </button>

                    {/* Expanded Content */}
                    {isOpen && (
                      <div className="p-6 pt-2 border-t border-[#222]">
                        {activePlatform && activePlatform !== 'none' && (
                          <div className="flex justify-end mb-6">
                            <span className="text-gray-300">
                              Platform: <strong className="text-white ml-1">{activePlatform === 'macOS' ? 'macOS' : 'Windows'}</strong>
                            </span>
                          </div>
                        )}

                        <div className="space-y-8 pl-4">
                          
                          {/* New Features */}
                          {note.features && note.features.length > 0 && (
                            <div>
                              <span className="inline-block px-3 py-1 rounded-full border border-[#00d0e6] text-[#00d0e6] text-xs font-semibold mb-4">
                                New Features
                              </span>
                              <ul className="space-y-2">
                                {note.features.map((feature, i) => (
                                  <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                    <span className="text-[#00d0e6] mr-2 mt-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Bug Fixes */}
                          {note.bugFixes && note.bugFixes.length > 0 && (
                            <div>
                              <span className="inline-block px-3 py-1 rounded-full border border-green-500 text-green-500 text-xs font-semibold mb-4">
                                Bug Fixes
                              </span>
                              <ul className="space-y-2">
                                {note.bugFixes.map((fix, i) => (
                                  <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                    <span className="text-green-500 mr-2 mt-1">•</span>
                                    <span>{fix}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Enhancements */}
                          {note.enhancements && note.enhancements.length > 0 && (
                            <div>
                              <span className="inline-block px-3 py-1 rounded-full border border-yellow-500 text-yellow-500 text-xs font-semibold mb-4">
                                Enhancements
                              </span>
                              <ul className="space-y-2">
                                {note.enhancements.map((enhancement, i) => (
                                  <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                    <span className="text-yellow-500 mr-2 mt-1">•</span>
                                    <span>{enhancement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                        </div>

                        {/* Footer / Download Button */}
                        <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                          <p className="text-gray-400 text-sm">We hope you love the new features! Thank you for your support!</p>
                          <a 
                            href={note.downloadUrl || "#"}
                            className="inline-block border border-gray-400 hover:border-white text-white px-8 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/5"
                          >
                            Download
                          </a>
                        </div>
                        
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
