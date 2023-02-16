import { getDictionary } from '@/internationalization/get-dictionary';
import { Locale } from '@/internationalization/i18n-config';

interface PropTypes {
  params: { lang: Locale };
}

const Experiences = async ({ params: { lang } }: PropTypes) => {
  const { ['experiences-page']: dictionary } = await getDictionary(lang);
  return (
    <div className="font-medium mb-8">
      {dictionary.companies.map((c) => (
        <>
          <h2 className="pb-8 text-xl">{c.name}</h2>
          {c.activities.map((a) => (
            <p className="pb-8">{a.activity}</p>
          ))}
        </>
      ))}
    </div>
  );
};

export default Experiences;
