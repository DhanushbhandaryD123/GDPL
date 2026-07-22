import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'What is AuDimix?', answer: 'AuDimix is a powerful vocal isolation and extraction tool that uses advanced AI to separate vocals from background music.' },
  { question: 'What audio formats are supported?', answer: 'AuDimix supports MP3, WAV, FLAC, and other popular audio formats.' },
  { question: 'Can I use it for karaoke?', answer: 'Yes! By extracting and muting the original vocals, you can easily create high-quality instrumental tracks for karaoke.' }
];

export function AuDimixWinFaq() {
  return (
    <FaqTemplate 
      title="AuDimix Windows FAQ"
      logoSrc="/Faq/AudimixFaqLogo.png"
      logoAlt="AuDimix Faq Logo"
      faqs={faqs}
    />
  );
}
