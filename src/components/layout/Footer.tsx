import { Link } from 'react-router-dom';
// No lucide-react imports needed

interface FooterProps {
  logoUrl?: string;
}

export function Footer({ logoUrl }: FooterProps = {}) {
  const defaultLogo = "https://d3jbf8nvvpx3fh.cloudfront.net/home/_resource/_img/website/2015/GDTPL_logo_.png";

  return (
    <footer className="bg-[#111111] text-gray-300 font-sans">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          
          {/* Column 1 - Products */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-6">Products</h4>
            <ul className="space-y-3 text-[13px] text-gray-400">
              <li><a href="https://www.globaldelight.com/boom/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Boom 3D Mac</a></li>
              <li><a href="https://www.globaldelight.com/boom/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Boom 3D Windows</a></li>
              <li><a href="https://www.globaldelight.com/boom2/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Boom 2</a></li>
              <li><a href="https://www.globaldelight.com/boomformobile/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Boom for Mobile</a></li>
              <li><a href="https://www.globaldelight.com/capto/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Capto for Mac</a></li>
              <li><a href="https://www.globaldelight.com/capto/windows" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Capto for Windows</a></li>
              <li><a href="https://www.globaldelight.com/AuDimix/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">AuDimix</a></li>
              <li><a href="https://apps.apple.com/us/app/audion-voice-recorder-memos/id1633228083" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">AudiOn</a></li>
              <li><a href="https://itunes.apple.com/US/app/id496232649?mt=8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Vizmato IOS and Android</a></li>
              <li><a href="#" className="hover:text-white transition">Camera Plus</a></li>
              <li><a href="#" className="hover:text-white transition">Camera Plus Pro</a></li>
            </ul>
          </div>

          {/* Column 2 - About */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-6">About</h4>
            <ul className="space-y-3 text-[13px] text-gray-400">
              <li><Link to="#" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="#" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition">Media</Link></li>
              <li><Link to="#" className="hover:text-white transition">Become An Affiliate</Link></li>
            </ul>
          </div>

          {/* Column 3 - Store */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-6">Store</h4>
            <ul className="space-y-3 text-[13px] text-gray-400">
              <li><a href="https://www.globaldelight.com/store/?product=boom3d&item=boom3d-mac" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Boom 3D</a></li>
              <li><a href="https://www.globaldelight.com/store/?product=boom2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Boom 2</a></li>
              <li><a href="https://www.globaldelight.com/store/?product=capto" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Capto</a></li>
              <li><a href="https://www.globaldelight.com/AuDimix/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">AuDimix</a></li>
            </ul>
          </div>

          {/* Column 4 & 5 - Global Delight & Resources */}
          <div className="md:col-span-2 flex flex-col sm:flex-row border-l-0 md:border-l border-gray-800 md:pl-8">
            <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
              <div className="mb-4">
                <img 
                  src={logoUrl || defaultLogo} 
                  alt="Global Delight Logo" 
                  className="h-6 w-auto brightness-0 invert opacity-100"
                />
              </div>
              <p className="text-[12px] font-bold text-white mb-4">Delighting the world</p>
              <button className="flex items-center justify-between w-32 border border-gray-600 rounded-md px-3 py-1.5 text-[13px] hover:bg-white/5 transition bg-transparent text-gray-300">
                <span>English</span>
                <span className="text-[10px]">▼</span>
              </button>
            </div>
            
            <div className="w-full sm:w-1/2">
              <h4 className="font-bold text-white text-[15px] mb-6">Resources</h4>
              <ul className="space-y-3 text-[13px] text-gray-400">
                <li><Link to="#" className="hover:text-white transition">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link to="#" className="hover:text-white transition">What's New</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          
          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a href="https://www.facebook.com/GlobalDelight" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-400 hover:bg-white flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black"><path d="M9.198 21.5h4V13.441h2.894l.432-3.111h-3.326V8.344c0-.9.25-1.512 1.54-1.512h1.644V4.053A22.25 22.25 0 0014 3.93c-2.368 0-3.99 1.446-3.99 4.1V10.33H7.596v3.111h2.416V21.5z"/></svg>
            </a>
            <a href="https://x.com/GlobalDelight" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-400 hover:bg-white flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/global-delight/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-400 hover:bg-white flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCLjiPwteYQLEmIzDs4xmyTw" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-400 hover:bg-white flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-[13px] text-gray-400 mb-6">
            <a href="https://www.globaldelight.com/privacypolicy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline underline-offset-4">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <Link to="/contact" className="hover:text-white transition underline underline-offset-4">Contact</Link>
          </div>

          {/* Copyright */}
          <p className="text-[12px] text-gray-500">
            © 2008 - 2026 Global Delight Technologies Pvt. Ltd. <span className="mx-2">|</span> All trademarks registered to their respective companies
          </p>
        </div>
      </div>
    </footer>
  );
}
