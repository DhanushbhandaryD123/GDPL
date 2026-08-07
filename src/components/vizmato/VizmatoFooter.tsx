import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function VizmatoFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#18181b] py-8 text-center border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
        <p className="text-gray-500 text-xs">
          Copyright &copy; {currentYear} Vizmato. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
