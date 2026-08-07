import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function CameraPlusFooter() {
  return (
    <footer className="bg-[#111111] pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          
          {/* Left: Brand & Copy */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#002626] rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-[#00B4B4] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#002626] rounded-full" />
                </div>
              </div>
              <span className="text-[22px] font-bold text-white tracking-tight">
                Camera Plus
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Capture more. Perfect more.<br />Do more with every shot.
            </p>
          </div>

          {/* Center: Download Buttons */}
          <div className="w-full md:w-1/3 flex flex-row items-center justify-start md:justify-center gap-4">
            <a href="#" className="transition-transform hover:scale-105 hover:opacity-90">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store" 
                className="h-[40px] w-auto"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-105 hover:opacity-90">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-[40px] w-auto"
              />
            </a>
          </div>

          {/* Right: Social */}
          <div className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-4">
            <span className="text-gray-400 text-sm">Follow Us</span>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#00B4B4] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#00B4B4] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#00B4B4] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#00B4B4] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800/50">
          <p className="text-gray-500 text-xs">
            © 2024 Camera Plus. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
