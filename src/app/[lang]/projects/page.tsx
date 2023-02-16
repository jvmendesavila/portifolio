import { getDictionary } from '@/internationalization/get-dictionary';
import { Locale } from '@/internationalization/i18n-config';

interface PropTypes {
  params: { lang: Locale };
}

const Experiences = async ({ params: { lang } }: PropTypes) => {
  const { ['server-component']: dictionary } = await getDictionary(lang);

  return <h2 className="font-medium mb-8 text-xl">{dictionary.projects}</h2>;
};

export default Experiences;
