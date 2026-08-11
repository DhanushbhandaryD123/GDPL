import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Helmet>
        <title>404 - Page Not Found | Global Delight</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-[#4F46E5] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4338CA] transition-colors shadow-lg"
        >
          Return Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}
