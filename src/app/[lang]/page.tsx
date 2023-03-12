import Image from 'next/image';
import HandGif from '@/assets/images/hand.gif';
import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { ['home-page']: dictionary } = await getDictionary(lang);
  return (
    <>
      <>
        <title>Olá! 👋 Esse é meu potifólio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="João Victor Mendes Ávila | Desenvolvedor de Software | Front-end Pleno"
        />
        <link rel="icon" href="/favicon.ico" />
      </>

      <div
        className={'pb-12  h-[calc(100vh-8rem)] flex flex-col justify-center'}
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
