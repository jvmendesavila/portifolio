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
    <>
      <div className="pr-16 font-bold">
        {menuList.map(({ href, name }) => (
          <Link
            key={href}
            href={lang + href}
            className={
              `mx-8 text-sm ` +
              (currentRoute === '/' + lang + href
                ? 'text-blue-500'
                : 'active:text-blue-500 hover:text-blue-500')
            }
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Light | Dark Button Theme */}
      <ThemeButton />

      {/* Languages */}
      <LocaleSwitcher />

      <Image
        alt="leeerob"
        src={githubPNG}
        className="h-7 w-7 p-1 m-2 rounded-lg bg-slate-700 cursor-pointer"
      />

      <Image
        alt="leeerob"
        src={linkedinPNG}
        className="h-7 w-7 p-1 m-2 rounded-lg bg-slate-700 cursor-pointer"
      />
    </>
  );
}
