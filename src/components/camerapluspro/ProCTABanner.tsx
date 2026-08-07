const AppleLogo = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

export function ProCTABanner() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden">
          {/* Angled lens image bleeding off the right edge */}
          <div className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rotate-12 opacity-90">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80&auto=format&fit=crop"
              alt="Camera lens"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 px-8 py-14 md:py-20">
            <button className="shrink-0 inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gray-900 transition-all hover:scale-[1.02] shadow-xl">
              <AppleLogo className="w-6 h-6" />
              <span className="text-left leading-tight text-sm">
                Download on the<br />
                <span className="text-base">App Store</span>
              </span>
            </button>

            <p className="text-xl md:text-2xl font-medium text-gray-800 max-w-lg leading-snug">
              Camera Plus Pro is a new flow and design. It's faster, smarter and{' '}
              <span className="text-blue-600 font-semibold">an iOS 7 stunner.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
