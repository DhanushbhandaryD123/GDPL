import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  logoUrl?: string;
}

export function Navbar({ logoUrl }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const rightLinks = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.business'), href: '/business' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.blog'), href: 'https://blog.globaldelight.com/' },
  ];

  const defaultLogo = "https://d3jbf8nvvpx3fh.cloudfront.net/home/_resource/_img/website/2015/GDTPL_logo_.png";

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  
  const [isWhatsNewOpen, setIsWhatsNewOpen] = useState(false);
  const whatsNewRef = useRef<HTMLDivElement>(null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const getLanguagePath = (langCode: string) => {
    const supportedLangs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];
    let currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    
    if (pathParts.length > 0 && supportedLangs.includes(pathParts[0])) {
      pathParts.shift();
      currentPath = '/' + pathParts.join('/');
    }

    return langCode === 'en' ? currentPath : `/${langCode}${currentPath === '/' ? '' : currentPath}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (whatsNewRef.current && !whatsNewRef.current.contains(event.target as Node)) {
        setIsWhatsNewOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchProducts = [
    { name: 'Boom 3D Mac', href: '/boom3D' },
    { name: 'Boom 3D Windows', href: '/boom3D' },
    { name: 'Boom 2', href: '/boom2' },
    { name: 'Boom for Mobile', href: '/boomformobile' },
    { name: 'Capto for Mac', href: '/capto' },
    { name: 'Capto for Windows', href: '/capto/windows' },
    { name: 'AuDimix', href: '/audimix' },
    { name: 'AudiOn', href: '/audion' },
    { name: 'Vizmato IOS and Android', href: '/vizmato' },
    { name: 'Camera Plus', href: '/cameraplus' },
    { name: 'Camera Plus Pro', href: '/camerapluspro' }
  ];

  const filteredProducts = searchProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const languages = [
    { code: 'en', name: 'English', flagUrl: 'https://flagcdn.com/gb.svg' },
    { code: 'zh', name: 'Chinese (Simplified)', flagUrl: 'https://flagcdn.com/cn.svg' },
    { code: 'fr', name: 'French', flagUrl: 'https://flagcdn.com/fr.svg' },
    { code: 'de', name: 'German', flagUrl: 'https://flagcdn.com/de.svg' },
    { code: 'it', name: 'Italian', flagUrl: 'https://flagcdn.com/it.svg' },
    { code: 'ja', name: 'Japanese', flagUrl: 'https://flagcdn.com/jp.svg' },
    { code: 'es', name: 'Spanish', flagUrl: 'https://flagcdn.com/es.svg' },
    { code: 'pt', name: 'Portuguese', flagUrl: 'https://flagcdn.com/pt.svg' },
  ];

  const currentLanguage = languages.find(l => i18n.language?.startsWith(l.code)) || languages[0];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-gray-100">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-8 lg:gap-12">
          <a href="/" className="flex items-center">
            <img 
              src={logoUrl || defaultLogo} 
              alt="Global Delight Logo" 
              className={`h-8 md:h-10 w-auto object-contain drop-shadow-sm ${logoUrl ? '' : 'invert opacity-80'}`}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="https://www.globaldelight.com/store/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group">
              <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
              <span className="text-base font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{t('nav.store') || "Store"}</span>
              {/* Badge Icon (Blue spiky with smile) */}
              <div className="relative flex items-center justify-center w-6 h-6 ml-0.5">
                 {/* Spiky star shape via SVG */}
                 <svg viewBox="0 0 24 24" className="w-full h-full text-[#00A3FF] fill-current">
                   <path d="M12 2l2.4 3.6 4.3-1.1 1.1 4.3 3.6 2.4-2.4 3.6 1.1 4.3-4.3 1.1-1.1 4.3-3.6-2.4-3.6 2.4-1.1-4.3-4.3-1.1 1.1-4.3-2.4-3.6 3.6-2.4-1.1-4.3 4.3-1.1 2.4-3.6z" />
                 </svg>
                 <Smile className="w-3.5 h-3.5 text-white absolute" strokeWidth={3} />
              </div>
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {rightLinks.map((link) => (
            link.href.startsWith('http') ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          
          <div className="relative" ref={whatsNewRef}>
            <button 
              onClick={() => setIsWhatsNewOpen(!isWhatsNewOpen)}
              className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              What's New
              <svg className={`w-4 h-4 transition-transform ${isWhatsNewOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isWhatsNewOpen && (
              <div className="absolute right-0 top-full mt-4 w-48 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50">
                <div className="py-2">
                  {[
                    { name: 'Boom 3D', href: '/whatsnew/boom' },
                    { name: 'Capto', href: '/whatsnew/capto' },
                    { name: 'Boom 2', href: '/whatsnew/boom2' },
                    { name: 'AudiOn', href: '/whatsnew/audion' },
                    { name: 'AuDimix', href: '/whatsnew/audimix' }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsWhatsNewOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#003366] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="relative" ref={searchRef}>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors ml-2"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-4 w-72 bg-[#1b1f3b] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden z-50 transform origin-top-right transition-all border border-gray-700">
                <div className="p-2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full bg-[#1b1f3b] text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:bg-[#252b4d] transition-all text-[15px]"
                  />
                </div>
                <div className="max-h-64 overflow-y-auto px-2 pb-2">
                  {searchQuery.trim().length > 0 ? (
                    filteredProducts.length > 0 ? (
                      filteredProducts.map((product, idx) => (
                        <Link
                          key={idx}
                          to={product.href}
                          onClick={() => setIsSearchOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-[#252b4d] hover:text-white rounded-lg transition-colors"
                        >
                          {product.name}
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500 text-center">
                        No products found
                      </div>
                    )
                  ) : null}
                </div>
              </div>
            )}
          </div>
          
          {/* Desktop Language Dropdown */}
          <div className="relative ml-2" ref={languageRef}>
            <button 
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="hover:opacity-80 transition-opacity focus:outline-none flex items-center gap-1.5"
            >
              <img src="/button/LanguageIcon.png" alt="Language" className="w-5 h-5 md:w-6 md:h-6 object-contain brightness-0" />
              <span className="text-[13px] font-semibold text-gray-700 hidden lg:block">{currentLanguage.name}</span>
            </button>
            
            {isLanguageOpen && (
              <div className="absolute right-0 top-full mt-4 w-[600px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-50 border border-gray-200 p-4">
                <div className="grid grid-cols-3 gap-x-6 gap-y-0">
                  {languages.map((lang) => {
                    const isSelected = i18n.language?.startsWith(lang.code);
                    return (
                      <Link
                        key={lang.code}
                        to={getLanguagePath(lang.code)}
                        onClick={() => setIsLanguageOpen(false)}
                        className={`flex items-center gap-3 text-left py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors w-full px-2 rounded-sm ${
                          isSelected ? 'font-bold text-[#003366]' : 'text-gray-700'
                        }`}
                      >
                        <img src={lang.flagUrl} alt={lang.name} className="w-[22px] h-[16px] object-cover rounded-[2px] shadow-sm" />
                        <span className="text-[15px]">{lang.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Section (Right Side) */}
        <div className="md:hidden flex items-center gap-4">
          
          {/* Mobile Language Dropdown */}
          <div className="relative flex items-center" ref={languageRef}>
            <button 
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="hover:opacity-80 transition-opacity focus:outline-none flex items-center gap-1.5"
            >
              <img src="/button/LanguageIcon.png" alt="Language" className="w-6 h-6 object-contain brightness-0" />
              <span className="text-[13px] font-semibold text-gray-700">{currentLanguage.code.toUpperCase()}</span>
            </button>
            
            {isLanguageOpen && (
              <div className="absolute right-[-60px] sm:right-0 top-full mt-4 w-[320px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-50 border border-gray-200 p-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-0">
                  {languages.map((lang) => {
                    const isSelected = i18n.language?.startsWith(lang.code);
                    return (
                      <Link
                        key={lang.code}
                        to={getLanguagePath(lang.code)}
                        onClick={() => setIsLanguageOpen(false)}
                        className={`flex items-center gap-2 text-left py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors w-full px-2 rounded-sm ${
                          isSelected ? 'font-bold text-[#003366]' : 'text-gray-700'
                        }`}
                      >
                        <img src={lang.flagUrl} alt={lang.name} className="w-[20px] h-[14px] object-cover rounded-[2px] shadow-sm" />
                        <span className="text-[14px]">{lang.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col py-4 px-6 gap-4">
            
            {/* Store Link */}
            <a 
              href="https://www.globaldelight.com/store/" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-lg font-bold text-gray-800 py-2 border-b border-gray-100"
            >
              <ShoppingCart className="w-5 h-5" />
              Store
              <div className="relative flex items-center justify-center w-5 h-5 ml-1">
                 <svg viewBox="0 0 24 24" className="w-full h-full text-[#00A3FF] fill-current">
                   <path d="M12 2l2.4 3.6 4.3-1.1 1.1 4.3 3.6 2.4-2.4 3.6 1.1 4.3-4.3 1.1-1.1 4.3-3.6-2.4-3.6 2.4-1.1-4.3-4.3-1.1 1.1-4.3-2.4-3.6 3.6-2.4-1.1-4.3 4.3-1.1 2.4-3.6z" />
                 </svg>
                 <Smile className="w-3 h-3 text-white absolute" strokeWidth={3} />
              </div>
            </a>

            {/* Other Links */}
            <div className="flex flex-col gap-4 py-2">
              {rightLinks.map((link) => (
                link.href.startsWith('http') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-gray-800"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-gray-800"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
