import { getDictionary } from '@/internationalization/get-dictionary';
import { Locale } from '@/internationalization/i18n-config';

async function Experiences({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <h2 className="font-medium mb-8 text-xl">
      {dictionary['server-component'].experiences}
    </h2>
  );
}

export default Experiences;
