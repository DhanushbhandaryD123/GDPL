import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Smile, Search, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  logoUrl?: string;
}

export function Navbar({ logoUrl }: NavbarProps) {
  const rightLinks = [
    { name: 'About', href: '/about' },
    { name: 'Business', href: '/business' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: 'https://blog.globaldelight.com/' },
  ];

  const defaultLogo = "https://d3jbf8nvvpx3fh.cloudfront.net/home/_resource/_img/website/2015/GDTPL_logo_.png";

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchProducts = [
    { name: 'Boom 3D Mac', href: 'https://www.globaldelight.com/boom/' },
    { name: 'Boom 3D Windows', href: 'https://www.globaldelight.com/boom/' },
    { name: 'Boom 2', href: 'https://www.globaldelight.com/boom2/' },
    { name: 'Boom for Mobile', href: 'https://www.globaldelight.com/boomformobile/' },
    { name: 'Capto for Mac', href: 'https://www.globaldelight.com/capto/' },
    { name: 'Capto for Windows', href: 'https://www.globaldelight.com/capto/windows' },
    { name: 'AuDimix', href: 'https://www.globaldelight.com/AuDimix/' },
    { name: 'AudiOn', href: 'https://apps.apple.com/us/app/audion-voice-recorder-memos/id1633228083' },
    { name: 'Vizmato IOS and Android', href: 'https://itunes.apple.com/US/app/id496232649?mt=8' },
    { name: 'Camera Plus', href: '#' },
    { name: 'Camera Plus Pro', href: '#' }
  ];

  const filteredProducts = searchProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <nav className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-gray-100">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Section: Logo + Products + Store */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logoUrl || defaultLogo} 
              alt="Global Delight Logo" 
              className={`h-8 md:h-10 w-auto object-contain drop-shadow-sm ${logoUrl ? '' : 'invert opacity-80'}`}
            />
          </a>

          {/* Left Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <Link to="#" className="flex items-center gap-1 text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors py-2">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 group-hover:rotate-180 transition-transform duration-200"><path d="m6 9 6 6 6-6"/></svg>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-3 flex flex-col gap-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  
                  <Link to="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group/item">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-white group-hover/item:shadow-sm transition-all text-gray-600 group-hover/item:text-black">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.895 13.905c-.21.464-.52.923-.883 1.343-1.076 1.185-2.222 1.168-3.327.142-1.096 1.018-2.235 1.055-3.33-.142-.36-.42-.668-.879-.877-1.343-1.01-2.253-1.424-5.064-.997-6.805.344-1.4 1.488-2.316 2.85-2.327.97-.008 1.874.595 2.348.595.474 0 1.543-.728 2.684-.608 1.21.127 2.19.68 2.784 1.62-.055.034-1.637.954-1.622 2.825.016 2.234 1.94 2.97 2.015 3.003-.016.05-1.123 3.322-2.645 4.697zM11.69 5.378c-.02.823-.37 1.634-.952 2.227-.614.628-1.492 1.042-2.345.98-.035-.858.337-1.745.932-2.348.56-.577 1.404-.98 2.21-1.037.042.062.155.178.155.178z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-none mb-1">Mac App</h4>
                      <p className="text-[11px] text-gray-500 leading-none">Apps for macOS</p>
                    </div>
                  </Link>

                  <Link to="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group/item">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-white group-hover/item:shadow-sm transition-all text-gray-600 group-hover/item:text-[#00a4ef]">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-none mb-1">Windows App</h4>
                      <p className="text-[11px] text-gray-500 leading-none">Apps for Windows</p>
                    </div>
                  </Link>

                  <Link to="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group/item">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-white group-hover/item:shadow-sm transition-all text-gray-600 group-hover/item:text-black">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-none mb-1">iOS App</h4>
                      <p className="text-[11px] text-gray-500 leading-none">Apps for iPhone & iPad</p>
                    </div>
                  </Link>

                  <Link to="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group/item">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-white group-hover/item:shadow-sm transition-all text-gray-600 group-hover/item:text-[#3DDC84]">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.5516.4482-.9998.9993-.9998.5511 0 .9993.4482.9993.9998 0 .5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.5516.4482-.9998.9993-.9998.5511 0 .9993.4482.9993.9998 0 .5511-.4482.9997-.9993.9997m11.4045-6.02L19.23 6.973c.1256-.2179.051-.4973-.1673-.623-.2182-.1254-.4973-.0508-.623.1673l-1.3787 2.387c-1.5037-.6906-3.2104-1.0772-5.0267-1.0772-1.8164 0-3.523.3866-5.0267 1.0772l-1.3787-2.387c-.1256-.2181-.4048-.2927-.623-.1673-.2182.1256-.2928.4051-.1672.623l1.3484 2.3484c-3.1593 1.7335-5.3262 5.0116-5.6322 8.8778h19.5312c-.306-3.8662-2.4729-7.1443-5.6322-8.8778"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-none mb-1">Android App</h4>
                      <p className="text-[11px] text-gray-500 leading-none">Apps for Android</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <a href="https://www.globaldelight.com/store/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group">
              <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
              <span className="text-base font-bold text-gray-700 group-hover:text-gray-900 transition-colors">Store</span>
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

        {/* Right Section: Other Links */}
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
                        <a 
                          key={idx} 
                          href={product.href} 
                          target={product.href === '#' ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-[#252b4d] hover:text-white rounded-lg transition-colors"
                        >
                          {product.name}
                        </a>
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
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col py-4 px-6 gap-4">
            
            {/* Products Accordion */}
            <div>
              <button 
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="flex items-center justify-between w-full text-left text-lg font-bold text-gray-800 py-2 border-b border-gray-100"
              >
                Products
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileProductsOpen && (
                <div className="flex flex-col gap-3 py-3 pl-4">
                  <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Mac App</Link>
                  <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Windows App</Link>
                  <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">iOS App</Link>
                  <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Android App</Link>
                </div>
              )}
            </div>

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
