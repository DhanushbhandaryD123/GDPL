import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'What is Capto for Mac?', answer: 'Capto for Mac is a comprehensive screen capture, recording, and video editing suite designed specifically for macOS.' },
  { question: 'How do I record system audio on my Mac?', answer: 'You need to install the provided Audio Component. Once installed, simply check the "Record System Audio" box before starting your capture.' }
];

export function CaptoMacFaq() {
  return (
    <FaqTemplate 
      title="Capto Mac FAQ"
      description="Answers to common questions about Capto for Mac — screen recording, screenshot editing, video export formats, licensing, and troubleshooting."
      keywords="Capto FAQ, Capto Mac help, screen recorder questions, screenshot tool support, Capto video export help, Capto license, Capto troubleshooting"
      logoSrc="/apps/Capto-mac.jpeg"
      logoAlt="Capto Mac Logo"
      breadcrumbLabel="Capto for Mac"
      faqs={faqs}
    />
  );
}
