export function BusinessAbout() {
  return (
    <div className="w-full md:p-0 px-2 pt-1 pb-4">
      <section className="relative w-full py-2 md:py-8 h-auto aspect-[16/9] md:aspect-auto md:min-h-[550px] lg:min-h-[550px] flex items-center bg-[#020617] overflow-hidden rounded-3xl md:rounded-none">
        {/* Full screen background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/business/business5.png" 
            alt="Business About" 
            className="w-full h-full object-cover md:object-cover object-left" 
          />
          {/* Lighter Gradient overlay to ensure text is readable without obscuring the image */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full h-full px-4 md:px-12 flex items-center justify-end">
          {/* Text Container aligned to the right */}
          <div className="w-[55%] md:w-full lg:w-1/2 text-white max-w-xl">
            <span className="inline-block text-red-500 font-bold uppercase tracking-widest text-[5px] md:text-sm mb-1 md:mb-4">
              About Us
            </span>

            <h2 className="text-[12px] md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-1.5 md:mb-6">
              Technology That Inspires.<br />
              <span className="text-red-500">Solutions That Deliver.</span>
            </h2>

            <p className="text-[8px] md:text-lg text-white leading-relaxed mb-1.5 md:mb-6 drop-shadow-sm">
              Global Delight has the depth & scale of experience to build outstanding digital products with leading edge solutions for your audio, photo and video needs. Find the solutions you need to create engaging products, content & entertainment experiences.
            </p>

            <p className="text-[8px] md:text-lg text-white leading-relaxed drop-shadow-sm">
              You may also <a href="mailto:licensing@globaldelight.com" className="text-red-500 font-semibold hover:underline hover:text-red-400 transition-colors">write to us</a> to discuss licensing opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}