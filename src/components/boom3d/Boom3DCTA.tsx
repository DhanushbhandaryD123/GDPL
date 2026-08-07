import { Apple } from 'lucide-react';

export function Boom3DCTA() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Gradient Banner Card */}
        <div className="w-full rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-r from-[#694435] via-[#5c2b43] to-[#3a2550] shadow-2xl relative overflow-hidden">
          
          {/* Left: Laptop Image */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start relative z-10">
            <img 
              src="/boom3D/u1.png" 
              alt="Boom 3D App on Laptop" 
              className="w-full max-w-[500px] lg:max-w-none object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right: Text and Store Buttons */}
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white mb-10 leading-[1.2] tracking-tight">
              Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c69] to-[#f47499] font-bold">Boom 3D</span> on your favorite store.
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
              
              {/* Mac App Store Button */}
              <button className="flex items-center gap-3 bg-black hover:bg-[#1a1a1a] text-white px-5 py-3 rounded-xl min-w-[200px] transition-colors border border-white/10">
                <Apple size={32} fill="currentColor" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[11px] leading-tight text-gray-300">Download on the</span>
                  <span className="text-[17px] font-semibold leading-tight">Mac App Store</span>
                </div>
              </button>

              {/* Microsoft Store Button */}
              <button className="flex items-center gap-3 bg-black hover:bg-[#1a1a1a] text-white px-5 py-3 rounded-xl min-w-[200px] transition-colors border border-white/10">
                {/* Microsoft Logo SVG */}
                <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#f25022" d="M1 1h10v10H1z"/>
                  <path fill="#7fba00" d="M13 1h10v10H13z"/>
                  <path fill="#00a4ef" d="M1 13h10v10H1z"/>
                  <path fill="#ffb900" d="M13 13h10v10H13z"/>
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[11px] leading-tight text-gray-300">Download from the</span>
                  <span className="text-[17px] font-semibold leading-tight">Microsoft Store</span>
                </div>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
