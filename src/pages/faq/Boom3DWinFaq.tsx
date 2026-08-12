import { FaqTemplate, FaqCategory } from '../../components/faq/FaqTemplate';
import { MessageSquare, CircleDot, Settings, Star, ShoppingCart, Download } from 'lucide-react';

const categories: FaqCategory[] = [
  {
    id: 'most-asked',
    title: 'Most Asked Questions',
    icon: <MessageSquare className="w-8 h-8" />,
    faqs: [
      { question: 'How do I install the Audio Engine/Driver?', answer: 'Answer coming soon...' },
      { question: 'The app shows trial version even after purchase', answer: 'Answer coming soon...' },
      { question: 'I\'m not getting any sound and even after quitting Boom 3D, it is shown as the output device.', answer: 'Answer coming soon...' },
      { question: 'When I put my system to sleep or restart it, other output devices are selected instead of the last used device.', answer: 'Answer coming soon...' },
      { question: 'I am unable to launch Boom app.', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'general',
    title: 'General',
    icon: <Settings className="w-8 h-8" />,
    faqs: [
      { question: 'What is Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'How to access the Quick Controls?', answer: 'Answer coming soon...' },
      { question: 'Which OS supports Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'Where to find profile?', answer: 'Answer coming soon...' },
      { question: 'Not able to install Boom 3D Windows.', answer: 'Answer coming soon...' },
      { question: 'Why do I need to create Boom account?', answer: 'Answer coming soon...' },
      { question: 'How many devices can I access with one account?', answer: 'Answer coming soon...' },
      { question: 'I\'ve Boom 3D installed on 2 devices, and cannot install it on a new device. (overdraft issue).', answer: 'Answer coming soon...' },
      { question: 'Where to find my purchase details?', answer: 'Answer coming soon...' },
      { question: 'I\'ve lost my Windows system/ system got crashed/ system got stolen.', answer: 'Answer coming soon...' },
      { question: 'I already have a registration code, But I am unable to register', answer: 'Answer coming soon...' },
      { question: 'No sound when playing through Boom player?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'features',
    title: 'Features',
    icon: <Star className="w-8 h-8" />,
    faqs: [
      { question: 'How can I set-up 3D speakers?', answer: 'Answer coming soon...' },
      { question: 'How can I adjust Bass?', answer: 'Answer coming soon...' },
      { question: 'How to create customized presets?', answer: 'Answer coming soon...' },
      { question: 'How can I get appropriate 3D surround sound effect based on my headphones or speakers?', answer: 'Answer coming soon...' },
      { question: 'How can I control Boom 3D, without opening the app?', answer: 'Answer coming soon...' },
      { question: 'Which all music formats are supported by the Boom audio player?', answer: 'Answer coming soon...' },
      { question: 'I cannot find my favorite radio channels.', answer: 'Answer coming soon...' },
      { question: 'How can I adjust the Intensity of 3D surround sound?', answer: 'Answer coming soon...' },
      { question: 'How can I use the Boom Audio Player?', answer: 'Answer coming soon...' },
      { question: 'How can I add songs to a playlist?', answer: 'Answer coming soon...' },
      { question: 'How can I create a playlist?', answer: 'Answer coming soon...' },
      { question: 'How can I rename a playlist?', answer: 'Answer coming soon...' },
      { question: 'How can I delete a playlist?', answer: 'Answer coming soon...' },
      { question: 'How can I sort playlists?', answer: 'Answer coming soon...' },
      { question: 'How can I shuffle or repeat songs?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'creating-boom-account',
    title: 'Creating Boom Account',
    icon: <CircleDot className="w-8 h-8" />,
    faqs: [
      { question: 'Why do I need to create Boom account?', answer: 'Answer coming soon...' },
      { question: 'How to create Boom account?', answer: 'Answer coming soon...' },
      { question: 'How many devices can I access with one account?', answer: 'Answer coming soon...' },
      { question: 'I\'m having a problem creating Boom account', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'install-uninstall',
    title: 'Install & Uninstall',
    icon: <Download className="w-8 h-8" />,
    faqs: [
      { question: '.NET Installation issue faced when updated the Boom app to version 1.2.6', answer: 'Answer coming soon...' },
      { question: 'How to install Boom 3D Windows?', answer: 'Answer coming soon...' },
      { question: 'How to Uninstall Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'I am unable to open the app.', answer: 'Answer coming soon...' },
      { question: 'App crashes after install', answer: 'Answer coming soon...' },
      { question: 'How do I install the Boom 3D Audio Engine/Driver?', answer: 'Answer coming soon...' },
      { question: 'How do I uninstall the Boom 3D Audio Engine?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'purchase',
    title: 'Purchase',
    icon: <ShoppingCart className="w-8 h-8" />,
    faqs: [
      { question: 'Where can I find my purchase details?', answer: 'Answer coming soon...' },
      { question: 'Buy button not responding.', answer: 'Answer coming soon...' },
      { question: 'I have already purchased Boom but it shows that I am on trial period', answer: 'Answer coming soon...' },
      { question: 'I have already purchased the app and I see trial expired buy now button?', answer: 'Answer coming soon...' },
    ]
  }
];

export function Boom3DWinFaq() {
  return (
    <FaqTemplate 
      title="Boom 3D Windows FAQ"
      description="Common questions about Boom 3D for Windows — installation, 3D surround sound setup, equalizer presets, system requirements, and troubleshooting."
      keywords="Boom 3D Windows FAQ, Boom 3D PC help, Windows surround sound questions, Boom 3D equalizer support, Boom 3D system requirements"
      logoSrc="/faq/Boom3D.png"
      logoAlt="Boom 3D Windows Logo"
      categories={categories}
    />
  );
}
