import { getDictionary } from '@/internationalization/get-dictionary';
import { Locale } from '@/internationalization/i18n-config';

const About = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { ['about-page']: dictionary } = await getDictionary(lang);
  return (
    <div className="font-medium mb-8">
      <p className="text-xl pb-12">{dictionary.introduction}</p>
      {dictionary.paragraphs.map((p) => (
        <p className="pb-8">{p.paragraph}</p>
      ))}
    </div>
  );
};

export default About;
