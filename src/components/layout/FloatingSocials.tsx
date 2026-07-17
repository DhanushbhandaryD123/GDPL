import { useState, useEffect } from 'react';
import { Facebook, Linkedin, Youtube } from 'lucide-react';

export function FloatingSocials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 py-3 px-1.5 bg-gradient-to-b from-[#4285F4] to-[#34A853] rounded-r-xl shadow-lg transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}`} 
      style={{ background: 'linear-gradient(180deg, #3b82f6 0%, #38bdf8 100%)' }}
    >
      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition">
        <Facebook className="w-4 h-4 text-white fill-current" />
      </a>
      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
      </a>
      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition">
        <Linkedin className="w-4 h-4 text-white fill-current" />
      </a>
      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition">
        <Youtube className="w-4 h-4 text-white fill-current" />
      </a>
    </div>
  );
}
