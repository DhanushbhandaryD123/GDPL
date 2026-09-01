import { useState } from 'react';
import { Link } from './LocalizedLink';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PRODUCTS, getVariant } from '@/data/products';

interface FooterProps {
  logoUrl?: string;
}

export function Footer({ logoUrl }: FooterProps = {}) {
  const { t } = useTranslation();
  const defaultLogo = "https://d3jbf8nvvpx3fh.cloudfront.net/home/_resource/_img/website/2015/GDTPL_logo_.png";
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const socialLinks = (
    <div className="flex gap-4">
      <a href="https://www.facebook.com/GlobalDelight" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-500 hover:bg-white flex items-center justify-center transition-colors group">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#111111]"><path d="M9.198 21.5h4V13.441h2.894l.432-3.111h-3.326V8.344c0-.9.25-1.512 1.54-1.512h1.644V4.053A22.25 22.25 0 0014 3.93c-2.368 0-3.99 1.446-3.99 4.1V10.33H7.596v3.111h2.416V21.5z"/></svg>
      </a>
      <a href="https://x.com/GlobalDelight" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-8 h-8 rounded-full bg-gray-500 hover:bg-white flex items-center justify-center transition-colors group">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#111111]"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
      </a>
      <a href="https://www.linkedin.com/company/global-delight/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-gray-500 hover:bg-white flex items-center justify-center transition-colors group">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#111111]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
      </a>
      <a href="https://www.youtube.com/channel/UCLjiPwteYQLEmIzDs4xmyTw" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full bg-gray-500 hover:bg-white flex items-center justify-center transition-colors group">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#111111]"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
      </a>
    </div>
  );

  return (
    <footer className="bg-[#18181b] text-gray-300 font-sans">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 md:py-16 max-w-7xl">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col items-start gap-6 mb-10">
          <img src={logoUrl || defaultLogo} alt="Global Delight Logo" className="h-8 w-auto brightness-0 invert opacity-90" />
          {socialLinks}
          <button className="flex items-center justify-between w-40 border border-gray-600 rounded-lg px-4 py-2 text-[14px] bg-[#18181b] text-gray-300">
            <span>{t('nav.language', 'English')}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_1fr] gap-4 md:gap-16 lg:gap-24">
          
          {/* Column 1 - Products */}
          <div className="border-b border-gray-800 md:border-none">
            <h4 
              className="font-bold text-white text-[15px] mb-0 md:mb-6 flex justify-between items-center cursor-pointer md:cursor-default py-4 md:py-0"
              onClick={() => toggleSection('products')}
            >
              {t('footer.products')}
              <span className="md:hidden text-white font-bold">
                {openSection === 'products' ? <ChevronUp className="w-5 h-5 stroke-[3]" /> : <ChevronDown className="w-5 h-5 stroke-[3]" />}
              </span>
            </h4>
            <ul className={`space-y-4 text-[13px] text-gray-400 pb-6 md:pb-0 ${openSection === 'products' ? 'block' : 'hidden md:block'}`}>
              <li><Link to={getVariant(PRODUCTS.boom3d, 'mac').route} className="hover:text-white transition">{t('footer.boom3d_mac')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.boom3d, 'windows').route} className="hover:text-white transition">{t('footer.boom3d_windows')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.boom2, 'mac').route} className="hover:text-white transition">{t('footer.boom2')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.boomMobile, 'ios').route} className="hover:text-white transition">{t('footer.boom_mobile')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.capto, 'mac').route} className="hover:text-white transition">{t('footer.capto_mac')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.capto, 'windows').route} className="hover:text-white transition">{t('footer.capto_windows')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.audimix, 'windows').route} className="hover:text-white transition">{t('footer.audimix')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.audion, 'ios').route} className="hover:text-white transition">{t('footer.audion')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.vizmato, 'ios').route} className="hover:text-white transition">{t('footer.vizmato')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.cameraplus, 'ios').route} className="hover:text-white transition">{t('footer.cameraplus')}</Link></li>
              <li><Link to={getVariant(PRODUCTS.camerapluspro, 'ios').route} className="hover:text-white transition">{t('footer.camerapluspro')}</Link></li>
            </ul>
          </div>

          {/* Column 2 - About */}
          <div className="border-b border-gray-800 md:border-none">
            <h4 
              className="font-bold text-white text-[15px] mb-0 md:mb-6 flex justify-between items-center cursor-pointer md:cursor-default py-4 md:py-0"
              onClick={() => toggleSection('about')}
            >
              {t('footer.about')}
              <span className="md:hidden text-white font-bold">
                {openSection === 'about' ? <ChevronUp className="w-5 h-5 stroke-[3]" /> : <ChevronDown className="w-5 h-5 stroke-[3]" />}
              </span>
            </h4>
            <ul className={`space-y-4 text-[13px] text-gray-400 pb-6 md:pb-0 ${openSection === 'about' ? 'block' : 'hidden md:block'}`}>
              <li><Link to="/about" className="hover:text-white transition">{t('footer.about_us')}</Link></li>
              <li><a href="https://blog.globaldelight.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{t('footer.blog')}</a></li>
              <li><Link to="/careers" className="hover:text-white transition">{t('footer.careers')}</Link></li>
              <li><Link to="/press-info" className="hover:text-white transition">{t('footer.media')}</Link></li>
              <li><Link to="#" className="hover:text-white transition">{t('footer.become_affiliate')}</Link></li>
            </ul>
          </div>

          {/* Column 3 - Store */}
          <div className="border-b border-gray-800 md:border-none">
            <h4 
              className="font-bold text-white text-[15px] mb-0 md:mb-6 flex justify-between items-center cursor-pointer md:cursor-default py-4 md:py-0"
              onClick={() => toggleSection('store')}
            >
              {t('footer.store')}
              <span className="md:hidden text-white font-bold">
                {openSection === 'store' ? <ChevronUp className="w-5 h-5 stroke-[3]" /> : <ChevronDown className="w-5 h-5 stroke-[3]" />}
              </span>
            </h4>
            <ul className={`space-y-4 text-[13px] text-gray-400 pb-6 md:pb-0 ${openSection === 'store' ? 'block' : 'hidden md:block'}`}>
              <li><a href="https://www.globaldelight.com/store/?product=boom3d&item=boom3d-mac" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Boom 3D</a></li>
              <li><a href="https://www.globaldelight.com/store/?product=boom2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Boom 2</a></li>
              <li><a href="https://www.globaldelight.com/store/?product=capto" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Capto</a></li>
              <li><a href="https://www.globaldelight.com/AuDimix/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">AuDimix</a></li>
            </ul>
          </div>

          {/* Column 4 & 5 - Global Delight & Resources */}
          <div className="flex flex-col sm:flex-row border-l-0 md:border-l border-gray-800 md:pl-8 lg:pl-16">
            <div className="hidden md:block w-full sm:w-1/2 mb-8 sm:mb-0">
              <div className="mb-4 -ml-2">
                <img 
                  src={logoUrl || defaultLogo} 
                  alt="Global Delight Logo" 
                  className="h-10 w-auto brightness-0 invert opacity-100"
                />
              </div>
              <p className="text-[13px] font-bold text-white mb-4">{t('footer.delighting_world')}</p>
              <button className="flex items-center justify-between w-32 border border-gray-600 rounded-lg px-4 py-2 text-[14px] hover:bg-white/5 transition bg-transparent text-gray-300">
                <span>{t('nav.language', 'English')}</span>
                <span className="text-[10px]">▼</span>
              </button>
            </div>

            <div className="w-full sm:w-1/2 border-b border-gray-800 md:border-none">
              <h4
                className="font-bold text-white text-[15px] mb-0 md:mb-6 flex justify-between items-center cursor-pointer md:cursor-default py-4 md:py-0"
                onClick={() => toggleSection('resources')}
              >
                {t('footer.resources')}
                <span className="md:hidden text-white font-bold">
                  {openSection === 'resources' ? <ChevronUp className="w-5 h-5 stroke-[3]" /> : <ChevronDown className="w-5 h-5 stroke-[3]" />}
                </span>
              </h4>
              <ul className={`space-y-4 text-[13px] text-gray-400 pb-6 md:pb-0 ${openSection === 'resources' ? 'block' : 'hidden md:block'}`}>
                <li><Link to="/faq" className="hover:text-white transition">{t('footer.faqs')}</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">{t('footer.contact')}</Link></li>
                <li><Link to="#" className="hover:text-white transition">{t('footer.whats_new')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black py-10 border-t-[0.5px] border-gray-800">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          
          {/* Social Icons (Also shown at bottom on mobile based on reference) */}
          <div className="mb-6">
            {socialLinks}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-[12px] font-bold text-gray-400 mb-6 tracking-wide">
            <a href="https://www.globaldelight.com/privacypolicy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{t('footer.privacy_policy')}</a>
            <span className="text-gray-700">|</span>
            <Link to="/contact" className="hover:text-white transition">{t('footer.contact')}</Link>
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-gray-500 font-medium leading-loose">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
