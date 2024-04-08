'use client';
import Image from 'next/image';

// Icons
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid';

// Types
import { ProjectType } from './types';
import { TechnologyChip } from '@/components/TechnologyChip/TechnologyChip';

interface PropTypes {
  dictionary: any;
  project: ProjectType;
}

const ProjectCards = ({ dictionary, project }: PropTypes) => {
  return (
    <div
      onClick={() => window.open(project.urlProject)}
      className={
        'group w-64 overflow-hidden pb-2 ' +
        'rounded-md border-4 border-gray-700 hover:border-indigo-500 ' +
        'justify-self-center bg-black text-white cursor-pointer'
      }
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        placeholder="blur"
        className="h-52 w-64 transition-transform transform group-hover:scale-110"
      />

      {/* Title & Description */}
      <p
        className="
        text-lg
        relative
        font-bold
        text-indigo-500
        px-2 pt-4 -mt-8
        min-h-[72px]
        bg-gradient-to-t from-black via-black
      "
      >
        {project.title}
      </p>
      <div className="h-24 p-2 ">{project.dictionary.description}</div>
      <div className="flex flex-wrap gap-2 p-2">
        {project.technologys.map((technology) => (
          <TechnologyChip technology={technology}/>
        ))}
      </div>
      <div className="flex p-2 justify-between item-center">
        <div className="flex gap-2">
          {project.languages.map((l) => (
            <Image
              alt=""
              key={l}
              width={'20'}
              height={'20'}
              src={`/images/languages/${l}-flag.png`}
            />
          ))}
        </div>
        {/* Live & Type(Internal | External) */}
        <div className="flex flex-wrap justify-end gap-2">
          <div className="flex items-center">
            <span
              className={`h-2 w-2 rounded-full ${
                project.live ? 'bg-red-700' : 'bg-gray-700'
              }`}
            />
            <span className="px-1 text-xs text-green-500 rounded-full">
              {project.live ? 'Live' : dictionary.projects.cards.footer.code}
            </span>
          </div>
          <div className="flex items-center">
            {project.internal ? (
              <ArrowDownTrayIcon className="w-3 h-3" />
            ) : (
              <ArrowUpTrayIcon className="w-3 h-3" />
            )}

            <span className="px-1 text-xs text-green-500 rounded-full">
              {project.internal
                ? dictionary.projects.cards.footer.intern
                : dictionary.projects.cards.footer.external}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
