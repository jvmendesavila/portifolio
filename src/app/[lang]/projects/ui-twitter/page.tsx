// Components
import UITwitter from '@/components/pages/projects/ui-twitter';

export async function generateMetadata() {
  return {
    title: 'UI Twitter Home'
  };
}

const UITwitterPage = async () => {
  return <UITwitter />;
};

export default UITwitterPage;
