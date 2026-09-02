import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'What is AudiOn?', answer: 'AudiOn is a simple, reliable, and high-quality audio recording app designed for professionals, students, and musicians.' },
  { question: 'Can I export to MP3?', answer: 'Yes, AudiOn supports exporting your recordings to various formats including MP3 and WAV.' }
];

export function AudionFaq() {
  return (
    <FaqTemplate 
      title="AudiOn FAQ"
      description="Find answers about AudiOn, the mobile voice recorder and audio editor — recording quality, noise removal, transcription, and export options for iOS and Android."
      keywords="AudiOn FAQ, AudiOn help, voice recorder app questions, audio editor support, noise removal help, AI transcription FAQ"
      logoSrc="/faq/AudionFaqLogo.png"
      logoAlt="AudiOn Logo"
      breadcrumbLabel="AudiOn"
      faqs={faqs}
    />
  );
}
