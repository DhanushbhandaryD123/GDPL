

const AppleLogo = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 384 512" 
    className={className}
    fill="currentColor"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

export function Boom2Hero() {
  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 flex items-center min-h-[60vh] overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/boom2/boom2.mp4" type="video/mp4" />
      </video>

      {/* Text Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060814]/90 via-[#060814]/30 to-transparent pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="max-w-xl">

          <div className="flex items-center gap-3 mb-8">
            <img
              src="/boom2/Boom2-icon.png"
              alt="Boom 2 Logo"
              className="w-10 h-10 object-contain drop-shadow-lg"
            />
            <span className="text-white font-semibold text-xl tracking-wide drop-shadow-md">
              Boom <span className="font-light text-gray-300 border border-gray-500 rounded px-1.5 text-sm ml-1 align-middle">2</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
            Your Audio, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Reimagined.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg drop-shadow-md">
            Boom 2 is the ultimate audio enhancement app that brings your music, movies, and games to life with powerful tools and immersive 3D sound.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="flex items-center justify-center gap-2.5 bg-white text-black px-4 py-3 rounded-lg font-bold transition-all hover:bg-[#1390FB] hover:text-white hover:scale-[1.02] w-full sm:w-[210px] text-sm md:text-base tracking-wide shadow-lg group">
              <AppleLogo className="w-5 h-5 mb-0.5" />
              DOWNLOAD TRIAL
            </button>
            
            <button className="flex items-center justify-center gap-2.5 bg-black/40 backdrop-blur-sm border-2 border-white/90 text-white px-4 py-3 rounded-lg font-bold transition-all hover:bg-[#1390FB] hover:border-[#1390FB] w-full sm:w-[210px] text-sm md:text-base tracking-wide shadow-lg group">
              <AppleLogo className="w-5 h-5 mb-0.5" />
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
