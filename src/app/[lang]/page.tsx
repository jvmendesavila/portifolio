import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { ['home-page']: dictionary } = await getDictionary(lang);
  return (
    <>
      <p className="font-medium mb-8 text-xl">{dictionary.hi}</p>
      <p>{dictionary.introduction}</p>
    </>
  );
};

export default Home;
