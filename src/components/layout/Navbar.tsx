import { Link } from 'react-router-dom';
import { ShoppingCart, Smile, Search } from 'lucide-react';

export function Navbar() {
  const rightLinks = [
    { name: 'About', href: '/about' },
    { name: 'Business', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white backdrop-blur-md border-b border-gray-100">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 h-12 flex items-center justify-between">
        
        {/* Left Section: Logo + Products + Store */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="https://d3jbf8nvvpx3fh.cloudfront.net/home/_resource/_img/website/2015/GDTPL_logo_.png" 
              alt="Global Delight Logo" 
              className="h-6 md:h-7 w-auto object-contain drop-shadow-sm invert opacity-80" 
            />
          </a>

          {/* Left Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
              Products
            </Link>
            
            <Link to="#" className="flex items-center gap-1.5 group">
              <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
              <span className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">Store</span>
              {/* Badge Icon (Blue spiky with smile) */}
              <div className="relative flex items-center justify-center w-6 h-6 ml-0.5">
                 {/* Spiky star shape via SVG */}
                 <svg viewBox="0 0 24 24" className="w-full h-full text-[#00A3FF] fill-current">
                   <path d="M12 2l2.4 3.6 4.3-1.1 1.1 4.3 3.6 2.4-2.4 3.6 1.1 4.3-4.3 1.1-1.1 4.3-3.6-2.4-3.6 2.4-1.1-4.3-4.3-1.1 1.1-4.3-2.4-3.6 3.6-2.4-1.1-4.3 4.3-1.1 2.4-3.6z" />
                 </svg>
                 <Smile className="w-3.5 h-3.5 text-white absolute" strokeWidth={3} />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Section: Other Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="text-gray-700 hover:text-gray-900 transition-colors ml-2">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
