import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EducatorsHero } from '../components/captoeducators/EducatorsHero';
import { EducatorsBenefits } from '../components/captoeducators/EducatorsBenefits';
import { EducatorsShowcase } from '../components/captoeducators/EducatorsShowcase';
import { EducatorsSignup } from '../components/captoeducators/EducatorsSignup';
import { CaptoFooterCTA } from '../components/capto/CaptoFooterCTA';
import { Footer } from '../components/layout/Footer';

export function CaptoEducatorsPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#6554ff] selection:text-white">
      <Helmet>
        <title>Capto for Educators | Tutorial Video Making App for Education</title>
        <meta name="description" content="Capto helps teachers and institutions create engaging tutorials, power easy e-learning, and grade assignments faster — with screen recording and simple arrow, spotlight, and text annotations." />
        <meta name="keywords" content="Capto for educators, tutorial video maker, e-learning screen recorder, education screen capture, annotate video for teaching, Capto education pricing, Global Delight Capto" />
        <meta name="subject" content="Capto for Educators | Global Delight" />
        <meta property="og:title" content="Capto for Educators | Tutorial Video Making App for Education" />
        <meta property="og:description" content="Make teaching and learning easier with Capto — screen recording and annotation built for classrooms and institutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/capto/educators`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/capto/educators`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Capto for Educators",
            "operatingSystem": "Mac",
            "applicationCategory": "MultimediaApplication",
            "description": "Screen recording and video annotation tool for teaching, e-learning, and assignment grading.",
            "image": `${domain}/apps/Capto-mac.jpeg`
          })}
        </script>

        <meta property="og:image" content={`${domain}/apps/Capto-mac.jpeg`} />
        <meta name="thumbnail" content={`${domain}/apps/Capto-mac.jpeg`} />
        <meta name="twitter:title" content="Capto for Educators | Tutorial Video Making App for Education" />
        <meta name="twitter:description" content="Make teaching and learning easier with Capto — screen recording and annotation built for classrooms and institutions." />
        <meta name="twitter:image" content={`${domain}/apps/Capto-mac.jpeg`} />
      </Helmet>

      <Navbar />
      <Breadcrumbs items={[{ name: 'Capto', href: '/capto' }, { name: 'For Educators' }]} />

      <main className="relative">
        <EducatorsHero />
        <EducatorsBenefits />
        <EducatorsShowcase />
        <EducatorsSignup />
        <CaptoFooterCTA />
      </main>

      <Footer />
    </div>
  );
}
