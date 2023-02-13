'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

// Components
import ThemeButton from '../Theme/Button';
import LocaleSwitcher from '../Theme/LocationSwitcher/LocationSwitcher';

// Assests
import githubPNG from '@/assets/images/profiles/github.png';
import linkedinPNG from '@/assets/images/profiles/linkedin.png';

export default function Menu({
  dictionary
}: {
  dictionary: {
    home: string;
    experiences: string;
    projects: string;
  };
}) {
  const { theme } = useTheme();
  const currentRoute = usePathname();
  const lang = currentRoute?.split('/')[1];

  const profilesList = [
    { alt: 'github', image: githubPNG },
    { alt: 'linkedin', image: linkedinPNG }
  ];

  const menuList = [
    { href: '', name: dictionary.home },
    { href: '/experiences', name: dictionary.experiences },
    { href: '/projects', name: dictionary.projects }
  ];

  return (
    <div className="flex-col">
      {menuList.map(({ href, name }) => (
        <div key={href} className="font-bold py-4 text-center">
          <Link
            href={lang + href}
            className={'mx-8 text-sm hover:text-blue-500'}
          >
            {name}
          </Link>
        </div>
      ))}

      {/* Languages */}
      <div className="flex items-center justify-center py-6">
        <LocaleSwitcher />
        <ThemeButton />
      </div>

      <div className="flex justify-center mt-auto pt-24">
        <Image alt="leeerob" src={githubPNG} className="h-7 w-7 p-1 m-2" />

        <Image alt="leeerob" src={linkedinPNG} className="h-7 w-7 p-1 m-2" />
      </div>
    </div>
  );
}
