'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Components
import ThemeButton from '../Theme/Button';
import LocaleSwitcher from '../Theme/LocationSwitcher/LocationSwitcher';

// Assests
import githubPNG from '@/assets/images/profiles/github.png';
import linkedinPNG from '@/assets/images/profiles/linkedin.png';

const profiles = [
  { href: 'https://github.com/jvmendesavila', alt: 'Github', src: githubPNG },
  {
    href: 'https://www.linkedin.com/in/jo%C3%A3o-victor-mendes-%C3%A1vila-699b76158/',
    alt: 'Linkedin',
    src: linkedinPNG
  }
];

export default function Menu({
  dictionary,
  setIsShowing
}: {
  dictionary: {
    home: string;
    experiences: string;
    projects: string;
  };
  setIsShowing: (showing: boolean) => void;
}) {
  const currentRoute = usePathname();
  const lang = currentRoute?.split('/')[1];

  const menuList = [
    { href: '', name: dictionary.home },
    { href: '/experiences', name: dictionary.experiences },
    { href: '/projects', name: dictionary.projects }
  ];

  return (
    <div className="flex-col w-full">
      {/* Tabs */}
      {menuList.map(({ href, name }) => (
        <div key={href} className="font-bold py-4 text-center">
          <Link
            href={lang + href}
            onClick={() => setIsShowing(false)}
            className={'mx-8 text-sm hover:text-blue-500'}
          >
            {name}
          </Link>
        </div>
      ))}

      {/* Languages & Theme(Dark/Light) */}
      <div className="flex items-center justify-center py-6">
        <LocaleSwitcher />
        <ThemeButton />
      </div>

      {/* Profiles */}
      <div className="flex justify-center mt-auto pt-24">
        {profiles.map(({ href, alt, src }) => (
          <Link key={alt} href={href} target="_blank">
            <Image
              alt={alt}
              src={src}
              className="contrast-50 h-7 w-7 p-1 m-2"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
