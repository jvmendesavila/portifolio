import { getDictionary } from '@/internationalization/get-dictionary';
import { Locale } from '@/internationalization/i18n-config';
import Image from 'next/image';

// Assets
import ElevarBrandImage from '@/assets/images/brands/elevar.png';
import AmericanasBrandImage from '@/assets/images/brands/americanas.png';
import IpersonalityBrandImage from '@/assets/images/brands/ipersonality.png';

interface PropTypes {
  params: { lang: Locale };
}

export async function generateMetadata() {
  return {
    title: 'Experiences'
  };
}

const Experiences = async ({ params: { lang } }: PropTypes) => {
  const { ['experiences-page']: dictionary } = await getDictionary(lang);
  const experiences = [
    {
      image: AmericanasBrandImage,
      name: 'Americanas S.A',
      jobTitle: 'Front-End Developer / Mid-Level',
      dictionary: dictionary.companies.americanas
    },
    {
      image: IpersonalityBrandImage,
      name: 'Ipersonality',
      jobTitle: 'Front-End Developer / Junior-Level',
      dictionary: dictionary.companies.ipersonality
    },
    {
      image: ElevarBrandImage,
      name: 'Elevar Commerce',
      jobTitle: 'Full Stack Developer / Intern-Level',
      dictionary: dictionary.companies.elevar
    }
  ];

  return (
    <div className="divide-y divide-slate-700">
      {experiences.map((experience) => (
        <div className="py-8 first:pt-0 last:pb-0">
          <div className="flex items-center mb-6">
            <Image
              src={experience.image}
              placeholder="blur"
              className="mr-4 h-14 w-14 rounded-full"
              alt="Victor Mendes Avila"
            />
            <div>
              <p className="text-2xl">{experience.name}</p>
              <p className="text-xs text-white bg-slate-700 mt-1 px-2 py-0.5 rounded-full ">
                {experience.jobTitle}
              </p>
            </div>
          </div>
          <ul>
            {experience.dictionary.activities.map((activity) => (
              <li className="text-sm py-2 first:pt-0 last:pb-0">{activity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
