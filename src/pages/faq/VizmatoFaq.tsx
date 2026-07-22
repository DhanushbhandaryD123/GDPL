import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'What is Vizmato?', answer: 'Vizmato is a powerful video editing app for iOS and Android that lets you create stunning videos with themes, filters, and FX.' },
  { question: 'How do I add music to my video?', answer: 'You can select music from Viztunes (our royalty-free library) or import your own tracks from your device.' }
];

export function VizmatoFaq() {
  return (
    <FaqTemplate 
      title="Vizmato FAQ"
      logoSrc="/Faq/Vizmato.png"
      logoAlt="Vizmato Logo"
      faqs={faqs}
    />
  );
}
