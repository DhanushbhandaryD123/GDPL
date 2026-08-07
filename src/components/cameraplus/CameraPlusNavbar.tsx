import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CameraPlusNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Tools', href: '#tools' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#002626] rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-[#00B4B4] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#002626] rounded-full" />
              </div>
            </div>
            <span className="text-[22px] font-bold text-gray-900 tracking-tight">
              Camera Plus
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-[15px] font-medium text-gray-700">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="hover:text-[#00B4B4] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#"
              className="hidden md:inline-flex px-6 py-2.5 bg-[#00B4B4] hover:bg-[#009b9b] text-white text-[15px] font-semibold rounded-lg transition-colors shadow-sm shadow-[#00B4B4]/20"
            >
              Download App
            </a>
            
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-[#00B4B4]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#"
                className="inline-flex px-6 py-3 bg-[#00B4B4] text-white font-semibold rounded-lg text-center justify-center w-full mt-2"
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
