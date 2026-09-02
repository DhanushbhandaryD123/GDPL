import { useState, useRef, useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Link } from './LocalizedLink';
import { Search, ShoppingCart, Menu, X, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { rememberLanguage, SUPPORTED_LANGS } from '@/lib/languagePreference';
import { PRODUCTS, getVariant } from '@/data/products';

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
  const mobileLanguageRef = useRef<HTMLDivElement>(null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const getLanguagePath = (langCode: string) => {
    let currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);

    if (pathParts.length > 0 && SUPPORTED_LANGS.includes(pathParts[0])) {
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
      const clickedInsideDesktop = languageRef.current && languageRef.current.contains(event.target as Node);
      const clickedInsideMobile = mobileLanguageRef.current && mobileLanguageRef.current.contains(event.target as Node);
      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchProducts = [
    { name: 'Boom 3D Mac', href: getVariant(PRODUCTS.boom3d, 'mac').route },
    { name: 'Boom 3D Windows', href: getVariant(PRODUCTS.boom3d, 'windows').route },
    { name: 'Boom 2', href: getVariant(PRODUCTS.boom2, 'mac').route },
    { name: 'Boom for Mobile', href: getVariant(PRODUCTS.boomMobile, 'ios').route },
    { name: 'Capto for Mac', href: getVariant(PRODUCTS.capto, 'mac').route },
    { name: 'Capto for Windows', href: getVariant(PRODUCTS.capto, 'windows').route },
    { name: 'AuDimix', href: getVariant(PRODUCTS.audimix, 'windows').route },
    { name: 'AudiOn', href: getVariant(PRODUCTS.audion, 'ios').route },
    { name: 'Vizmato IOS and Android', href: getVariant(PRODUCTS.vizmato, 'ios').route },
    { name: 'Camera Plus', href: getVariant(PRODUCTS.cameraplus, 'ios').route },
    { name: 'Camera Plus Pro', href: getVariant(PRODUCTS.camerapluspro, 'ios').route }
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

  const getWhatsNewLink = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/boom3d') || path.includes('/whatsnew/boom') && !path.includes('boom2')) return '/whatsnew/boom';
    if (path.includes('/boom2')) return '/whatsnew/boom2';
    if (path.includes('/capto')) return '/whatsnew/capto';
    return null;
  };

  const whatsNewLink = getWhatsNewLink();

  return (
    <nav className={`sticky top-0 z-50 w-full transition-colors duration-300 border-b ${isSearchOpen ? 'bg-[#0a0a0f] border-gray-800' : 'bg-white border-gray-100'}`}>
      
      {isSearchOpen ? (
        // Global Search Mode
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 h-20 flex flex-col justify-center">
          <div className="flex items-center gap-4 w-full">
            <Search className="w-6 h-6 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full bg-transparent text-white placeholder-gray-500 text-lg md:text-xl focus:outline-none"
            />
            <button 
              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
              className="p-2 text-gray-400 hover:text-white transition-colors shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Full Width Dropdown Results */}
          <div className="absolute top-full left-0 right-0 bg-[#0a0a0f] border-t border-gray-800 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="max-w-[1200px] mx-auto p-4 md:p-8 max-h-[70vh] overflow-y-auto">
              {searchQuery.trim().length > 0 ? (
                filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((product, idx) => (
                      <Link
                        key={idx}
                        to={product.href}
                        onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                        className="flex items-center px-4 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-200 hover:text-white"
                      >
                        <Search className="w-4 h-4 mr-3 opacity-50" />
                        {product.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-gray-500 text-lg">
                    No results found for "{searchQuery}"
                  </div>
                )
              ) : (
                <div className="py-12 text-center text-gray-600">
                  Start typing to search across the application...
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Normal Navbar Mode
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link to="/" className="flex items-center">
              <img
                src={logoUrl || defaultLogo}
                alt="Global Delight Logo"
                className={`h-8 md:h-10 w-auto object-contain drop-shadow-sm ${logoUrl ? '' : 'invert opacity-80'}`} width={320} height={60} loading="eager"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="https://www.globaldelight.com/store/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group">
                <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
                <span className="text-base font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{t('nav.store') || "Store"}</span>
                <div className="relative flex items-center justify-center w-6 h-6 ml-0.5">
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
            
            {whatsNewLink && (
              <div className="relative">
                <Link 
                  to={whatsNewLink}
                  className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                  What's New
                </Link>
              </div>
            )}
            
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label={t('nav.search')}
              className="text-gray-700 hover:text-gray-900 transition-colors ml-2"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            {/* Desktop Language Dropdown */}
            <div className="relative ml-2" ref={languageRef}>
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="hover:opacity-80 transition-opacity focus:outline-none flex items-center gap-1.5"
              >
                <img src="/button/LanguageIcon.png" alt="Language" className="w-5 h-5 md:w-6 md:h-6 object-contain brightness-0" width={800} height={800} loading="eager" />
                <span className="text-[13px] font-semibold text-gray-700 hidden lg:block">{currentLanguage.name}</span>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-4 w-[600px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-50 border border-gray-200 p-4">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-0">
                    {languages.map((lang) => {
                      const isSelected = i18n.language?.startsWith(lang.code);
                      return (
                        <RouterLink
                          key={lang.code}
                          to={getLanguagePath(lang.code)}
                          onClick={() => { rememberLanguage(lang.code); setIsLanguageOpen(false); }}
                          className={`flex items-center gap-3 text-left py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors w-full px-2 rounded-sm ${
                            isSelected ? 'font-bold text-[#003366]' : 'text-gray-700'
                          }`}
                        >
                          <img src={lang.flagUrl} alt={lang.name} className="w-[22px] h-[16px] object-cover rounded-[2px] shadow-sm" width={1200} height={600} loading="eager" />
                          <span className="text-[15px]">{lang.name}</span>
                        </RouterLink>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Section (Right Side) */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label={t('nav.search')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Language Dropdown */}
            <div className="relative flex items-center" ref={mobileLanguageRef}>
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="hover:opacity-80 transition-opacity focus:outline-none flex items-center gap-1.5"
              >
                <img src="/button/LanguageIcon.png" alt="Language" className="w-6 h-6 object-contain brightness-0" width={800} height={800} loading="eager" />
                <span className="text-[13px] font-semibold text-gray-700">{currentLanguage.code.toUpperCase()}</span>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-[-60px] sm:right-0 top-full mt-4 w-[320px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-50 border border-gray-200 p-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0">
                    {languages.map((lang) => {
                      const isSelected = i18n.language?.startsWith(lang.code);
                      return (
                        <RouterLink
                          key={lang.code}
                          to={getLanguagePath(lang.code)}
                          onClick={() => { rememberLanguage(lang.code); setIsLanguageOpen(false); }}
                          className={`flex items-center gap-2 text-left py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors w-full px-2 rounded-sm ${
                            isSelected ? 'font-bold text-[#003366]' : 'text-gray-700'
                          }`}
                        >
                          <img src={lang.flagUrl} alt={lang.name} className="w-[20px] h-[14px] object-cover rounded-[2px] shadow-sm" width={1200} height={600} loading="eager" />
                          <span className="text-[14px]">{lang.name}</span>
                        </RouterLink>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t('nav.toggle_menu')}
              aria-expanded={isMobileMenuOpen}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {!isSearchOpen && isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col py-4 px-6 gap-4">
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
