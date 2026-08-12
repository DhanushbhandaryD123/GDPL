import { WhatsNewFullLayout } from '../../components/whatsnew/WhatsNewFullLayout';

export function WhatsNewBoom2() {
  return (
    <WhatsNewFullLayout 
      productName="Boom 2"
      logoSrc="/boom2/boom2-logo.png" 
      heroMockupSrc="/boom2/boom2-app-mockup.png"
      heroBgClass="bg-[#1A0B2E]"
      productId="boom2"
      activePlatform="macOS" // Boom 2 is Mac only
      macOSNotes={[]}
    />
  );
}
