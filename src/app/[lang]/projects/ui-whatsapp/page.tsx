import UIWhatsapp from '@/components/pages/projects/ui-whatsapp';

export async function generateMetadata() {
  return {
    title: 'UI Whatsapp'
  };
}

const UIWhatsappPage = async () => {
  return <UIWhatsapp />;
};

export default UIWhatsappPage;
