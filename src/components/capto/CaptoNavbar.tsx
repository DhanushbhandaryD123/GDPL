import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '../layout/LocalizedLink';

export function CaptoNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mac Apps', href: '#' },
    { label: 'iOS Apps', href: '#' },
    { label: 'Store', href: '#' },
    { label: 'Support', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Replace with actual Capto logo if available */}
            <Link to="/capto" className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'} tracking-tight`}>
              Capto
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-sm font-medium hover:text-[#4F46E5] transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#"
              className="bg-[#4F46E5] hover:bg-[#4338ca] text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Download Trial
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-gray-700 font-medium py-2 hover:text-[#4F46E5]"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#"
            className="bg-[#4F46E5] text-white px-4 py-3 rounded-xl font-medium text-center mt-2"
          >
            Download Trial
          </a>
        </div>
      )}
    </header>
  );
}
