import { Volume2, Sliders, MessageCircle } from 'lucide-react';

export function Boom3DVolumeBooster() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-[#0b0b0f]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Text */}
        <div className="lg:w-[35%] space-y-6">
          <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight text-white leading-tight">
            Complete Volume<br />Control
          </h2>
          <p className="text-[#a0a0a5] text-[1.05rem] leading-relaxed">
            Safely increase the volume beyond its regular limits, and take granular control over every individual app on your system.
          </p>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-[65%] grid md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: System-Wide Boost */}
          <div className="bg-[#17171d] rounded-[2rem] p-8 border border-white/[0.03]">
            <div className="w-12 h-12 bg-[#232329] rounded-[1rem] flex items-center justify-center mb-8">
              <Volume2 size={20} className="text-[#c0c0c5]" />
            </div>
            
            <h3 className="text-[1.35rem] font-bold mb-4 text-white tracking-wide">System-Wide Boost</h3>
            <p className="text-[#808088] text-[0.95rem] leading-relaxed mb-12">
              Boom 3D acts as a volume booster that safely elevates audio levels to deliver a profoundly louder and clearer experience.
            </p>
            
            <div className="space-y-3 mt-auto">
              <div className="relative h-1.5 w-full bg-[#2a2a30] rounded-full flex items-center">
                <div className="h-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] w-[100%] rounded-full relative" />
                <div className="absolute right-0 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] translate-x-1/2" />
              </div>
              <div className="flex justify-between text-[10px] font-semibold tracking-wider text-[#606068]">
                <span>Standard</span>
                <span>Boom Volume</span>
              </div>
            </div>
          </div>

          {/* Card 2: App Volume Controller */}
          <div className="bg-[#17171d] rounded-[2rem] p-8 border border-white/[0.03] flex flex-col">
            <div className="w-12 h-12 bg-[#232329] rounded-[1rem] flex items-center justify-center mb-8">
              <Sliders size={20} className="text-[#c0c0c5]" />
            </div>
            
            <h3 className="text-[1.35rem] font-bold mb-4 text-white tracking-wide">App Volume Controller</h3>
            
            {/* App Sliders */}
            <div className="space-y-8 mt-6">
              
              {/* Spotify Icon */}
              <div className="flex items-center gap-5">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#1db954]" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.54-1.26.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.42.18.54.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <div className="relative flex-1 h-1 bg-[#2a2a30] rounded-full flex items-center">
                  <div className="h-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] w-[65%] rounded-full" />
                  <div className="absolute left-[65%] -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
                </div>
              </div>
              
              {/* Chrome Icon */}
              <div className="flex items-center gap-5">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#fbbc04"/>
                  <path d="M12 1a11 11 0 0 1 11 11h-6a5 5 0 0 0-8.66-2.5L12 1z" fill="#ea4335"/>
                  <path d="M23 12a11 11 0 0 1-16.5 9.53l3-5.2A5 5 0 0 0 17 12h6z" fill="#34a853"/>
                  <circle cx="12" cy="12" r="4.5" fill="#4285f4" stroke="white" strokeWidth="1.5"/>
                </svg>
                <div className="relative flex-1 h-1 bg-[#2a2a30] rounded-full flex items-center">
                  <div className="h-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] w-[80%] rounded-full" />
                  <div className="absolute left-[80%] -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
                </div>
              </div>
              
              {/* Purple App Icon */}
              <div className="flex items-center gap-5">
                <div className="w-7 h-7 rounded-lg bg-[#5865F2] flex items-center justify-center shadow-lg">
                  <MessageCircle size={14} className="text-white fill-white" />
                </div>
                <div className="relative flex-1 h-1 bg-[#2a2a30] rounded-full flex items-center">
                  <div className="h-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] w-[90%] rounded-full" />
                  <div className="absolute left-[90%] -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
