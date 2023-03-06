'use client';
import Image from 'next/image';

// Icons
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid';

// Types
import { ProjectType } from './types';

interface PropTypes {
  dictionary: any;
  project: ProjectType;
}

const ProjectCards = ({ dictionary, project }: PropTypes) => {
  return (
    <div
      onClick={() => window.open(project.urProject)}
      className={
        'w-64 pb-2 rounded-md border-4 border-indigo-500 ' +
        'justify-self-center bg-black text-white cursor-pointer'
      }
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        placeholder="blur"
        className="h-52 w-64"
      />

      {/* Title & Description */}
      <p className="relative font-bold text-lg text-indigo-500 px-2 pt-2 -mt-8 bg-gradient-to-t from-black via-black">
        {project.title}
      </p>
      <div className="h-24 p-2 ">{project.dictionary.description}</div>
      <div className="flex flex-wrap gap-2 p-2">
        {project.technologys.map((technology) => (
          <span
            key={technology}
            className="px-4 text-xs bg-indigo-500 rounded-full"
          >
            {technology}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-end gap-2 px-2 pt-2">
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
  );
};

export default ProjectCards;
