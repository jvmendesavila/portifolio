'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/internationalization/i18n-config';

// Assests
import ptPNG from '@/assets/images/languages/pt.png';
import ptActivePNG from '@/assets/images/languages/pt-inactive.png';
import enPNG from '@/assets/images/languages/en.png';
import enInactivePNG from '@/assets/images/languages/en-inactive.png';
import Image from 'next/image';

const getLanguageImg = (locale: string, lang: string | undefined) => {
  switch (locale) {
    case 'pt':
      if (lang === 'pt') {
        return ptPNG;
      } else {
        return ptActivePNG;
      }
    case 'en':
      if (lang === 'en') {
        return enPNG;
      } else {
        return enInactivePNG;
      }

    default:
      return ptPNG;
  }
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const currentRoute = usePathname();
  const lang = currentRoute?.split('/')[1];

  const redirectedPathName = (locale: string) => {
    if (!currentRoute) return '/';
    const segments = currentRoute.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleLanguage = (locale: string) => {
    router.push(redirectedPathName(locale));
  };

  return (
    <>
      {i18n.locales.map((locale) => {
        return (
          <Image
            alt={locale}
            key={locale}
            src={getLanguageImg(locale, lang)}
            onClick={() => handleLanguage(locale)}
            className="h-7 w-7 p-1 m-2 rounded-lg bg-slate-700 cursor-pointer"
          />
          // <Link
          //   key={locale}
          //   href={redirectedPathName(locale)}
          //   className={
          //     `mx-2 p-2 w-8 text-xs font-bold rounded-lg  bg-slate-700 ` +
          //     (currentRoute?.includes(`/${locale}`)
          //       ? 'text-blue-500'
          //       : 'text-white active:text-blue-500 hover:text-blue-500')
          //   }
          // >
          //   {locale.toUpperCase()}
          // </Link>
        );
      })}
    </>
  );
}
