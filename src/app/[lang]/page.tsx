
import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '../../internationalization/get-dictionary';


async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);
  return (
    <h2 className="font-medium mb-8 text-xl">
     {dictionary['server-component'].welcome}
    </h2>
  )
}

export default Home;
