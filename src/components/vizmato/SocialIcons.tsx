import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function SocialIcons() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-2 bg-[#111116]/90 backdrop-blur-md rounded-l-2xl shadow-2xl border border-r-0 border-white/10 hidden md:flex">
      <a href="#" className="p-3 text-gray-400 hover:text-blue-500 hover:bg-white/5 rounded-xl transition-colors" aria-label="Facebook">
        <Facebook size={20} />
      </a>
      <a href="#" className="p-3 text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-xl transition-colors" aria-label="Twitter">
        <Twitter size={20} />
      </a>
      <a href="#" className="p-3 text-gray-400 hover:text-pink-500 hover:bg-white/5 rounded-xl transition-colors" aria-label="Instagram">
        <Instagram size={20} />
      </a>
      <a href="#" className="p-3 text-gray-400 hover:text-red-500 hover:bg-white/5 rounded-xl transition-colors" aria-label="YouTube">
        <Youtube size={20} />
      </a>
    </div>
  );
}
