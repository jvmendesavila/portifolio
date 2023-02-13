import { getDictionary } from '@/internationalization/get-dictionary';
import { Locale } from '@/internationalization/i18n-config';

async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <h2 className="font-medium mb-8 text-xl">
      {dictionary['server-component']['welcome-message']}
    </h2>
  );
}

export default Home;
