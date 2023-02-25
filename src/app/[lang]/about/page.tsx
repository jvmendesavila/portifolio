import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

import { BookOpenIcon } from '@heroicons/react/24/solid';

const About = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { ['about-page']: dictionary } = await getDictionary(lang);
  return (
    <div
      className={
        'flex flex-col justify-center ' +
        'font-medium h-[calc(100vh-8rem)] max-w-md'
      }
    >
      <div className="flex items- justify-center pb-4">
        <BookOpenIcon className="h-8" />
        <p className="text-xl text-center pl-2">{dictionary.introduction}</p>
      </div>
      {dictionary.paragraphs.map((p) => (
        <>
          <p className="pb-4 text-sm">{p.paragraph}</p>
          {p.subparagraphs.map((subP) => (
            <p className="pb-4 text-xs">{subP.paragraph}</p>
          ))}
        </>
      ))}
    </div>
  );
};

export default About;
