import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Components
import ThemeButton from '../Theme/Button';
import LocaleSwitcher from '../Theme/LocationSwitcher/LocationSwitcher';

// Types
import { dictionaryType } from '@/types/dictionaryType';

const profiles = [
  {
    href: 'https://github.com/jvmendesavila',
    alt: 'Github',
    imagePath: '/images/profiles/github.png'
  },
  {
    href: 'https://www.linkedin.com/in/jvmendesavila',
    alt: 'Linkedin',
    imagePath: '/images/profiles/linkedin.png'
  }
];

export default function Menu({
  dictionary,
  setIsShowing
}: {
  dictionary: dictionaryType;
  setIsShowing: (showing: boolean) => void;
}) {
  const currentRoute = usePathname();
  const lang = currentRoute?.split('/')[1];

  const menuList = [
    { href: `/${lang}`, name: dictionary['server-component'].home },
    { href: `/${lang}/experiences`, name: dictionary['server-component'].experiences },
    { href: `/${lang}/projects`, name: dictionary['server-component'].projects }
    // { href: '/blog', name: 'Blog' }
  ];

  return (
    <div className="flex flex-col gap-10 w-full dark">
      {/* Tabs */}
      <div className='flex flex-col gap-10 pt-10'>
        {menuList.map(({ href, name }) => (
          <div key={href} className="font-bold">
            <Link
              href={href}
              onClick={() => setIsShowing(false)}
              className={'mx-8 text-lg hover:text-blue-500'}
              >
              {name}
            </Link>
          </div>
        ))}
      </div>

      {/* Languages & Theme(Dark/Light) */}
      <div className="flex items-center justify-center">
        <LocaleSwitcher />
        <ThemeButton />
      </div>

      {/* Profiles */}
      <div className="flex justify-center mt-auto">
        {profiles.map(({ href, alt, imagePath }) => (
          <Link key={alt} href={href} target="_blank">
            <Image
              alt={alt}
              width="28"
              height="28"
              src={imagePath}
              className="contrast-50 p-1 m-2"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
