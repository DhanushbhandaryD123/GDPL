import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'Is Boom available for iOS?', answer: 'Yes! Boom is available on the App Store with 3D surround sound and custom equalizer presets.' },
  { question: 'Does it work with Apple Music?', answer: 'Due to DRM restrictions, Boom cannot alter audio from streaming services like Apple Music or Spotify on iOS. It works best with local files and supported radios.' }
];

export function BoomIosFaq() {
  return (
    <FaqTemplate 
      title="Boom iOS FAQ"
      description="Frequently asked questions about Boom for iOS — 3D surround sound, equalizer presets, subscriptions, device compatibility, and troubleshooting."
      keywords="Boom iOS FAQ, Boom iPhone help, Boom app questions, iOS equalizer support, Boom subscription help, Boom app troubleshooting"
      logoSrc="/faq/iBoom.png"
      logoAlt="Boom iOS Logo"
      breadcrumbLabel="Boom for iOS"
      faqs={faqs}
    />
  );
}
