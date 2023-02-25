import HandGif from '@/assets/images/hand.gif';
import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';
import Image from 'next/image';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { ['home-page']: dictionary } = await getDictionary(lang);
  return (
    <>
      <div
        className={
          'fixed top-0 left-0  w-screen h-screen z-0 ' +
          "bg-[url('/images/bg.jpg')] bg-cover bg-center " +
          'grayscale'
        }
      />
      <div
        className={
          'text-white ' +
          'pb-12  h-[calc(100vh-8rem)] ' +
          'relative flex flex-col justify-center z-10 '
        }
      >
        <div className="flex items-center mb-2">
          <span className="font-medium text-4xl">{dictionary.hi}</span>
          <Image alt="hand" src={HandGif} className="h-12 w-12 ml-2" />
        </div>
        <p className="font-medium mb-8 text-4xl">{dictionary.me}</p>
        <span>{dictionary.position}</span>
      </div>
    </>
  );
};

export default Home;
