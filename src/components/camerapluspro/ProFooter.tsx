import { Link } from '@/components/layout/LocalizedLink';

const pressLogos = [
  { name: 'PRESSCO', className: 'font-sans font-black text-xl tracking-tight' },
  { name: 'TechSite', className: 'font-serif italic font-bold text-xl' },
  { name: 'MAGWORLD', className: 'font-sans font-extrabold text-lg tracking-widest' },
  { name: 'DailyByte', className: 'font-serif font-bold text-xl' },
  { name: 'GADGETRY', className: 'font-sans font-bold text-lg tracking-wide' },
];

export function ProFooter() {
  return (
    <footer className="bg-[#0a0e17] text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-400 mb-1">
            FROM THE <span className="text-blue-400">CREATORS</span> OF
          </p>
          <p className="text-lg md:text-xl font-bold text-white">
            CAMERA PLUS AND OTHER APPS
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-16 opacity-50 grayscale">
          {pressLogos.map((logo) => (
            <span key={logo.name} className={logo.className}>
              {logo.name}
            </span>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Global Delight. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.globaldelight.com/privacypolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
