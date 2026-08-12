import { WhatsNewFullLayout } from '../../components/whatsnew/WhatsNewFullLayout';

export function WhatsNewAudion() {
  return (
    <WhatsNewFullLayout 
      productName="AudiOn"
      logoSrc="/audion/audion-logo.png" 
      heroMockupSrc="/audion/audion-app-mockup.png"
      heroBgClass="bg-[#1A1A1A]"
      productId="audion"
      activePlatform="none"
      defaultNotes={[]}
    />
  );
}
