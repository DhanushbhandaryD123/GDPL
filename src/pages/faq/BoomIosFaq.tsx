import { FaqTemplate } from '../../components/faq/FaqTemplate';

const faqs = [
  { question: 'Is Boom available for iOS?', answer: 'Yes! Boom is available on the App Store with 3D surround sound and custom equalizer presets.' },
  { question: 'Does it work with Apple Music?', answer: 'Due to DRM restrictions, Boom cannot alter audio from streaming services like Apple Music or Spotify on iOS. It works best with local files and supported radios.' }
];

export function BoomIosFaq() {
  return (
    <FaqTemplate 
      title="Boom iOS FAQ"
      logoSrc="/Faq/iBoom.png"
      logoAlt="Boom iOS Logo"
      faqs={faqs}
    />
  );
}
