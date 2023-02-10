'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/internationalization/i18n-config';

// Components 
import ThemeButton from '../Theme/Button';
import LocaleSwitcher from '../Theme/LocationSwitcher/LocationSwitcher';

export default function Menu({lang,dictionary}:{lang:Locale,dictionary:any}) {
  const currentRoute = usePathname();
  const menuList = [
    { href: '', name: dictionary['server-component'].home },
    { href: '/about', name: dictionary['server-component'].about },
    { href: '/projects', name: dictionary['server-component'].projects },
  ];

  return (
    <>
      <div className="flex items-center justify-between h-20 px-8 py-4">
        <div>
          <p>João Victor Mendes Ávila</p>
          <p className='text-xs font-bold'>BCS / Software Engineer / Mid-Level</p>
        </div>

        <div className="flex items-center">
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
          <ThemeButton/>
          
          {/* Languages */}
          <LocaleSwitcher/>
        </div>
      </div>
    </>
  );
}
