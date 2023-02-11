'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import ThemeButton from '../Theme/Button';
import LocaleSwitcher from '../Theme/LocationSwitcher/LocationSwitcher';

export default function Menu({
  dictionary,
}: {
  dictionary: {
    home: string
    about: string
    projects: string
  }
}) {
  const currentRoute = usePathname();
  const lang = currentRoute?.split('/')[1];

  const menuList = [
    { href: '', name: dictionary.home },
    { href: '/about', name: dictionary.about },
    { href: '/projects', name: dictionary.projects },
  ];

  return (
    <>
      <div className="pr-16 font-bold">
        {menuList.map(({ href, name }) => (
          <Link
            key={href}
            href={lang + href}
            className={`mx-8 ` + (currentRoute === ('/'+lang+href) ? 'text-blue-500' : 'active:text-blue-500 hover:text-blue-500')}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Light | Dark Button Theme */}
      <ThemeButton />

      {/* Languages */}
      <LocaleSwitcher />
    </>
  );
}
