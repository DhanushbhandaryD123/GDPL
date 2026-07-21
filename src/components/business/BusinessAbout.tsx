export function BusinessAbout() {
  return (
    <section className="relative w-full py-8 min-h-[550px] lg:min-h-[550px] flex items-center bg-[#020617] overflow-hidden">
      {/* Full screen background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/business/business5.png" 
          alt="Business About" 
          className="w-full h-full object-cover object-left" 
        />
        {/* Lighter Gradient overlay to ensure text is readable without obscuring the image */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex justify-end">
        {/* Text Container aligned to the right */}
        <div className="w-full lg:w-1/2 text-white max-w-xl">
          <span className="inline-block text-red-500 font-bold uppercase tracking-widest text-sm mb-4">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-6">
            Technology That Inspires.<br />
            <span className="text-red-500">Solutions That Deliver.</span>
          </h2>

          <p className="text-base md:text-lg text-white leading-relaxed mb-6 drop-shadow-sm">
            Global Delight has the depth & scale of experience to build outstanding digital products with leading edge solutions for your audio, photo and video needs. Find the solutions you need to create engaging products, content & entertainment experiences.
          </p>

          <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-sm">
            You may also <a href="mailto:licensing@globaldelight.com" className="text-red-500 font-semibold hover:underline hover:text-red-400 transition-colors">write to us</a> to discuss licensing opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}