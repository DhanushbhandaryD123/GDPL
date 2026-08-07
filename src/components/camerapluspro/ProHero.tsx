import { Twitter, Facebook, Instagram, Mail, Sparkles, Star, Camera, Aperture, Image as ImageIcon } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';

const AppleLogo = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Mail, href: 'mailto:hello@globaldelight.com' },
];

const orbitThumbs = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80&auto=format&fit=crop', alt: 'Mountain lake', pos: 'top-[4%] -left-8 md:-left-12' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80&auto=format&fit=crop', alt: 'Portrait', pos: 'top-[8%] -right-6 md:-right-10' },
  { src: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=300&q=80&auto=format&fit=crop', alt: 'City skyline black and white', pos: 'bottom-[18%] -left-10 md:-left-16', grayscale: true },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80&auto=format&fit=crop', alt: 'Sunset palm trees', pos: 'bottom-[12%] -right-8 md:-right-12' },
];

export function ProHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0a0e17] text-white"
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e17] via-[#0d1226] to-[#0a0e17]" />
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-1/4 w-[360px] h-[360px] bg-indigo-500/15 rounded-full blur-[110px]" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Floating camera-themed accents */}
      <Camera className="absolute top-[20%] left-[9%] w-9 h-9 text-white/[0.06] -rotate-12 hidden md:block" strokeWidth={1.5} />
      <Aperture className="absolute top-[62%] left-[22%] w-14 h-14 text-white/[0.05] rotate-12 hidden md:block" strokeWidth={1} />
      <ImageIcon className="absolute top-[26%] right-[40%] w-7 h-7 text-white/[0.06] hidden lg:block" strokeWidth={1.5} />
      <Aperture className="absolute bottom-[8%] left-[46%] w-6 h-6 text-white/[0.07] hidden md:block" strokeWidth={1.5} />

      {/* Faint floating photo chips */}
      <div className="hidden lg:block absolute top-[22%] left-[16%] w-20 h-14 rounded-xl overflow-hidden rotate-[-8deg] opacity-[0.12] blur-[1px]">
        <img src="https://images.unsplash.com/photo-1470004914212-05527e49370b?w=200&q=60&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="hidden lg:block absolute bottom-[16%] left-[8%] w-16 h-20 rounded-xl overflow-hidden rotate-[10deg] opacity-[0.1] blur-[1px]">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=60&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10">
        {/* Vertical social sidebar */}
        <div className="hidden lg:flex flex-col gap-4 absolute left-6 top-1/2 -translate-y-1/2 z-20">
          {socialLinks.map(({ icon: Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
            >
              <Icon className="w-4 h-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-10 pb-14 md:pt-14 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="lg:pl-8">
              <h1 className="font-bold leading-[0.95] mb-5">
                <span className="block text-4xl md:text-5xl text-white">Capture.</span>
                <span className="block text-4xl md:text-5xl text-white">Edit.</span>
                <span className="block text-5xl md:text-7xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Create.
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-md leading-relaxed">
                Professional photography tools for iPhone. Faster, smarter and more powerful.
              </p>

              <button className="inline-flex items-center gap-3 bg-black border border-white/15 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-900 hover:border-white/30 transition-all hover:scale-[1.02] shadow-xl">
                <AppleLogo className="w-5 h-5" />
                <span className="text-left leading-tight text-sm">
                  Download on the<br />
                  <span className="text-base">App Store</span>
                </span>
              </button>
            </div>

            {/* Right column — phone mockup */}
            <div className="relative flex justify-center pt-10 lg:pt-0 lg:pr-6">
              <div className="relative w-[180px] sm:w-[210px]">
                {/* Dashed orbit ring */}
                <svg
                  viewBox="0 0 400 400"
                  className="absolute -inset-x-16 -inset-y-10 w-[calc(100%+8rem)] h-[calc(100%+5rem)] pointer-events-none"
                >
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="190"
                    ry="190"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                    strokeDasharray="6 8"
                  />
                </svg>

                <Sparkles className="absolute -top-6 right-6 w-6 h-6 text-purple-300 z-20" strokeWidth={1.5} />
                <Star className="absolute bottom-8 -left-10 w-4 h-4 text-blue-300 z-20 hidden md:block" strokeWidth={1.5} fill="currentColor" />

                <PhoneFrame className="mx-auto z-10 relative shadow-[0_20px_60px_rgba(59,130,246,0.25)]">
                  <img
                    src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80&auto=format&fit=crop"
                    alt="Neon city street"
                    className="w-full h-full object-cover"
                  />
                </PhoneFrame>

                {orbitThumbs.map((thumb, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${thumb.pos} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl z-20`}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      className={`w-full h-full object-cover ${thumb.grayscale ? 'grayscale' : ''}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
