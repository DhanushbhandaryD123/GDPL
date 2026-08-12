import { WhatsNewFullLayout } from '../../components/whatsnew/WhatsNewFullLayout';

export function WhatsNewAudimix() {
  return (
    <WhatsNewFullLayout 
      productName="AuDimix"
      logoSrc="/audimix/audimix-logo.png" 
      heroMockupSrc="/audimix/audimix-app-mockup.png"
      heroBgClass="bg-[#2E0505]"
      productId="audimix"
      activePlatform="none"
      defaultNotes={[]}
    />
  );
}
