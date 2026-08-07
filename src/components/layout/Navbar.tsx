import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Smile } from 'lucide-react';

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
