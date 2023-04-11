import UITwitterTweet from '@/components/pages/projects/ui-twitter/pages/Tweet';

export async function generateMetadata() {
  return {
    title: 'UI Twitter | Tweet'
  };
}

const TweetPage = async () => {
  return <UITwitterTweet />;
};

export default TweetPage;
