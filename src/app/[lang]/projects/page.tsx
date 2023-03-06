import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

// Assets
import ProjectCards from '@/components/pages/projects/projectCards';
import JSExpert7Image from '@/assets/images/projects/jsexpert7/bg.png';

// Components

interface PropTypes {
  params: { lang: Locale };
}

const Experiences = async ({ params: { lang } }: PropTypes) => {
  const { ['projects-page']: dictionary } = await getDictionary(lang);
  const projects = [
    {
      live: false,
      internal: false,
      image: JSExpert7Image,
      title: 'JS Expert 7.0',
      urProject:
        'https://jvmendesavila.github.io/semana-javascript-expert07/project/pages/titles/',
      technologys: ['Tensorflow', 'Javascript', 'HTML', 'CSS'],
      dictionary: dictionary.projects.jsexpert7
    }
  ];
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {projects.map((p) => (
        <ProjectCards project={p} dictionary={dictionary} />
      ))}
    </div>
  );
};

export default Experiences;
