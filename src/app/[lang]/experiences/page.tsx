import { getDictionary } from '@/internationalization/get-dictionary';
import { Locale } from '@/internationalization/i18n-config';
import Image from 'next/image';

// Assets
import ElevarBrandImage from '@/assets/images/brands/elevar.png';
import AmericanasBrandImage from '@/assets/images/brands/americanas.png';
import FebracisBrandImage from '@/assets/images/brands/febracis_coaching_logo.jpeg';
import { TechnologyChip } from '@/components/TechnologyChip/TechnologyChip';

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
  const companies = [
    {
      image: AmericanasBrandImage,
      name: 'Americanas S.A',
      jobs: dictionary.companies.americanas.jobs
    },
    {
      image: FebracisBrandImage,
      name: 'Febracis Coaching',
      jobs: dictionary.companies.febracis.jobs
    },
    {
      image: ElevarBrandImage,
      name: 'Elevar Commerce',
      jobs: dictionary.companies.elevar.jobs
    }
  ]

  return (
    <div className="divide-y divide-slate-700">
      {companies.map((company) => (
        <div className="py-8 first:pt-0 last:pb-0">
          {/* Company */}
          <div className="flex items-center mb-6">
            <Image
              src={company.image}
              placeholder="blur"
              className="mr-4 h-14 w-14 rounded-full"
              alt="João Victor Mendes Avila"
            />
            <p className="text-2xl">{company.name}</p>
          </div>

          {/* Experience */}
          <div className='flex flex-col gap-8'>
            {company.jobs.map((job) => (
              <div className='flex flex-col gap-4'>
                {/* Title */}
                <p className="w-fit text-sm text-white bg-slate-700 mt-1 px-4 py-1 rounded-full font-bold">
                  {job.title}
                </p>

                {/* Description */}
                <ul>
                  {job.descriptions.map((description) => (
                    <li className="text-sm py-2 first:pt-0 last:pb-0">
                      {description}
                    </li>
                  ))}
                </ul>

                {/* Techlogys */}
                <div className="flex flex-wrap gap-2 p-2">
                  {job.technologys.map((technology) => (
                  <TechnologyChip technology={technology}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
