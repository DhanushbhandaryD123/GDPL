import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'What is Capto for Windows?', answer: 'Capto for Windows brings our powerful screen recording and annotation tools to the PC platform, perfect for tutorials and vlogs.' },
  { question: 'Is it compatible with Windows 11?', answer: 'Yes, Capto is fully optimized for Windows 10 and Windows 11 environments.' }
];

export function CaptoWinFaq() {
  return (
    <FaqTemplate 
      title="Capto Windows FAQ"
      description="Frequently asked questions about Capto for Windows — screen recording, screenshot capture, video editing, system requirements, and troubleshooting."
      keywords="Capto Windows FAQ, Capto PC help, Windows screen recorder questions, screenshot tool support, Capto video editor help, Capto system requirements"
      logoSrc="/apps/Capto-window.jpeg"
      logoAlt="Capto Windows Logo"
      breadcrumbLabel="Capto for Windows"
      faqs={faqs}
    />
  );
}
