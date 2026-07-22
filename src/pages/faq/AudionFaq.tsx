import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'What is AudiOn?', answer: 'AudiOn is a simple, reliable, and high-quality audio recording app designed for professionals, students, and musicians.' },
  { question: 'Can I export to MP3?', answer: 'Yes, AudiOn supports exporting your recordings to various formats including MP3 and WAV.' }
];

export function AudionFaq() {
  return (
    <FaqTemplate 
      title="AudiOn FAQ"
      logoSrc="/Faq/AudionFaqLogo.png"
      logoAlt="AudiOn Logo"
      faqs={faqs}
    />
  );
}
