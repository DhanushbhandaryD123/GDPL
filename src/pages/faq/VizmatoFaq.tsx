import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'What is Vizmato?', answer: 'Vizmato is a powerful video editing app for iOS and Android that lets you create stunning videos with themes, filters, and FX.' },
  { question: 'How do I add music to my video?', answer: 'You can select music from Viztunes (our royalty-free library) or import your own tracks from your device.' }
];

export function VizmatoFaq() {
  return (
    <FaqTemplate 
      title="Vizmato FAQ"
      description="Find answers about Vizmato — video editing tools, themes and effects, export options, subscriptions, and troubleshooting for iOS and Android."
      keywords="Vizmato FAQ, Vizmato help, video editor app questions, movie maker support, Vizmato subscription help, Vizmato export options"
      logoSrc="/faq/Vizmato.png"
      logoAlt="Vizmato Logo"
      breadcrumbLabel="Vizmato"
      faqs={faqs}
    />
  );
}
