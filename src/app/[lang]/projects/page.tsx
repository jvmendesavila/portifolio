import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

// Assets
import ProjectCards from '@/components/pages/projects/projectCards';
import JSExpert7Image from '@/assets/images/projects/jsexpert7/bg.png';
import DashboardImage from '@/assets/images/projects/dashboard/bg.png';
import ExchangeImage from '@/assets/images/projects/exchange/bg.png';

// Components

interface PropTypes {
  params: { lang: Locale };
}

export async function generateMetadata() {
  return {
    title: 'Projects'
  };
}

const Experiences = async ({ params: { lang } }: PropTypes) => {
  const { ['projects-page']: dictionary } = await getDictionary(lang);
  const projects = [
    {
      live: true,
      internal: false,
      languages: ['pt'],
      image: JSExpert7Image,
      title: 'JS Expert 7.0',
      urlProject:
        'https://jvmendesavila.github.io/semana-javascript-expert07/project/pages/titles/',
      technologys: ['Tensorflow', 'Javascript', 'HTML', 'CSS'],
      dictionary: dictionary.projects.jsexpert7
    },
    {
      live: true,
      internal: true,
      languages: ['pt', 'en'],
      image: DashboardImage,
      title: 'Dashboard de Vendas',
      urlProject: '/projects/dashboard',
      technologys: ['Javascript', 'TailwindCSS', 'HTML'],
      dictionary: dictionary.projects.dashboard
    },
    {
      live: true,
      internal: true,
      languages: ['pt'],
      image: ExchangeImage,
      title: 'Conversor de Moedas & Taxa de Cambio',
      urlProject: '/projects/exchange',
      technologys: [
        'React Chart 2',
        'TailwindCSS',
        'Javascript',
        'HTML',
        'CSS'
      ],
      dictionary: dictionary.projects.exchange
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
