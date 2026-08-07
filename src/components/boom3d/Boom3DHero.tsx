export function Boom3DHero() {
  return (
    <section 
      className="relative min-h-[600px] md:min-h-[800px] lg:min-h-[85vh] flex items-center pt-20 pb-16 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/boom3D/boom3d-hero.png")' }}
    >
      {/* Overlay to ensure text readability if needed (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-start">
          
          {/* Text Content - Aligned Left */}
          <div className="w-full lg:w-1/2 text-left space-y-6 mt-16 md:mt-0">
           
            {/* Boom 3D Logo */}
            <div>
              <img src="/boom3D/boomLogo3D.png" alt="Boom 3D Logo" className="h-16 md:h-20 w-auto object-contain" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tighter text-white">
              Experience Audio in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Magical 3D
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-[600px] leading-relaxed font-medium">
              Boom 3D is a system-wide volume booster and equalizer for Mac and Windows that delivers an unbelievably immersive surround sound experience.
            </p>
            
            
            
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
