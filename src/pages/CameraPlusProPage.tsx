import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Header } from '../components/camerapluspro/Header';
import { InteractiveModeSelector } from '../components/camerapluspro/InteractiveModeSelector';
import { Footer } from '../components/layout/Footer';

export function CameraPlusProPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden selection:bg-orange-500 selection:text-white">
      <Helmet>
        <title>Camera Plus Pro | Shoot, Edit, Manage</title>
        <meta name="description" content="Shoot and share beautiful photos & videos from your iPhone or iPod touch with Camera Plus Pro." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Header />
        <InteractiveModeSelector />
      </main>

      <Footer />
    </div>
  );
}
