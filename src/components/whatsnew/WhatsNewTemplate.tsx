import { Helmet } from 'react-helmet-async';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Calendar, ChevronRight, Star, PenTool, Bug } from 'lucide-react';

export interface ReleaseNote {
  version: string;
  date: string;
  features?: string[];
  improvements?: string[];
  fixes?: string[];
}

interface WhatsNewTemplateProps {
  productName: string;
  heroColor?: string;
  releases: ReleaseNote[];
}

export function WhatsNewTemplate({ productName, heroColor = "from-blue-600 to-indigo-700", releases }: WhatsNewTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Helmet>
        <title>What's New in {productName} | Release Notes</title>
        <meta name="description" content={`Discover the latest features, improvements, and bug fixes in ${productName}.`} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 pb-24">
        {/* Hero Section */}
        <div className={`w-full bg-gradient-to-r ${heroColor} text-white py-16 md:py-24`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              What's New in {productName}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Stay up to date with the latest features, enhancements, and bug fixes to help you get the most out of {productName}.
            </p>
          </div>
        </div>

        {/* Content Section - Timeline */}
        <div className="max-w-3xl mx-auto px-6 mt-16">
          {releases.length === 0 ? (
            <div className="text-center text-gray-500 py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-lg">Release notes coming soon.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {releases.map((release, index) => (
                <div key={release.version} className="relative">
                  {/* Timeline connector (hidden on last item) */}
                  {index !== releases.length - 1 && (
                    <div className="absolute left-[1.1875rem] top-14 bottom-[-4rem] w-px bg-gray-200 hidden md:block"></div>
                  )}

                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Version & Date */}
                    <div className="md:w-48 shrink-0 relative">
                      <div className="sticky top-28 flex flex-col items-start">
                        <div className="flex items-center gap-3">
                          {/* Timeline dot */}
                          <div className="w-10 h-10 rounded-full bg-white border-[3px] border-indigo-100 flex items-center justify-center shrink-0 hidden md:flex z-10">
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                            v{release.version}
                          </h2>
                        </div>
                        <div className="flex items-center text-gray-500 mt-2 md:pl-[3.25rem]">
                          <Calendar className="w-4 h-4 mr-2" />
                          <time className="text-sm font-medium">{release.date}</time>
                        </div>
                      </div>
                    </div>

                    {/* Release Details */}
                    <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100">
                      
                      {release.features && release.features.length > 0 && (
                        <div className="mb-8 last:mb-0">
                          <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-2 mb-4">
                            <Star className="w-4 h-4" /> New Features
                          </h3>
                          <ul className="space-y-3">
                            {release.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                                <ChevronRight className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 mr-1" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {release.improvements && release.improvements.length > 0 && (
                        <div className="mb-8 last:mb-0">
                          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider flex items-center gap-2 mb-4">
                            <PenTool className="w-4 h-4" /> Improvements
                          </h3>
                          <ul className="space-y-3">
                            {release.improvements.map((improvement, i) => (
                              <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                                <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 mr-1" />
                                <span>{improvement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {release.fixes && release.fixes.length > 0 && (
                        <div className="mb-8 last:mb-0">
                          <h3 className="text-sm font-bold text-rose-500 uppercase tracking-wider flex items-center gap-2 mb-4">
                            <Bug className="w-4 h-4" /> Bug Fixes
                          </h3>
                          <ul className="space-y-3">
                            {release.fixes.map((fix, i) => (
                              <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                                <ChevronRight className="w-5 h-5 text-rose-400 shrink-0 mt-0.5 mr-1" />
                                <span>{fix}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
