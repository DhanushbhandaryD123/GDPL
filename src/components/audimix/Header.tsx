import { useState, useEffect } from 'react';
import { Menu, X, Disc } from 'lucide-react';

export function Header() {
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
    { label: 'Windows Apps', href: '#' },
    { label: 'iOS Apps', href: '#' },
    { label: 'Store', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050507]/90 backdrop-blur-md shadow-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/audimix" className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight">
              <Disc className="text-purple-500" size={28} />
              AuDimix
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-purple-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-purple-900/50"
            >
              Get AuDimix
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f] border-t border-white/10 shadow-2xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-gray-300 font-medium py-2 hover:text-purple-400"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl font-medium text-center mt-2"
          >
            Get AuDimix
          </a>
        </div>
      )}
    </header>
  );
}
