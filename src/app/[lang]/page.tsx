import Image from 'next/image';
import HandGif from '@/assets/images/hand.gif';
import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { ['home-page']: dictionary } = await getDictionary(lang);
  return (
    <div className={'pb-12  h-[calc(100vh-8rem)] flex flex-col justify-center'}>
      <div className="flex items-center mb-2">
        <span className="font-medium text-4xl">{dictionary.hi}</span>
        <Image alt="hand" src={HandGif} className="h-12 w-12 ml-2" />
      </div>
      <p className="font-medium mb-8 text-4xl">{dictionary.me}</p>
      <span>{dictionary.position}</span>
    </div>
  );
};

export default Home;
