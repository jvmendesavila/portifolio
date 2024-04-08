import Image from 'next/image';
import HandGif from '@/assets/images/hand.gif';
import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

export async function generateMetadata() {
  return {
    title: 'Home'
  };
}

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { ['home-page']: dictionary } = await getDictionary(lang);
  return (
    <div className={'px-6 h-[calc(100vh-8rem)] flex flex-col gap-2 pt-12 sm:pt-28'}>
      {/* Hi */}
      <div className="flex items-center">
        <span className="font-medium text-3xl sm:text-4xl">{dictionary.hi}</span>
        <Image alt="hand" src={HandGif} className="h-12 w-12 ml-2" />
      </div>
      
      {/* Title */}
      <p className="font-medium text-3xl sm:text-4xl">{dictionary.me}</p>
      
      {/* Description */}
      <span className="max-w-lg mt-4 sm:text-lg">{dictionary.description}</span>
    </div>
  );
};

export default Home;
