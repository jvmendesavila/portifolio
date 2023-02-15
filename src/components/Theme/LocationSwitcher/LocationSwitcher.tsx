'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/internationalization/i18n-config';

// Assests
import ptPNG from '@/assets/images/languageFlags/pt.png';
import enPNG from '@/assets/images/languageFlags/en.png';

const languageFlags = {
  pt: ptPNG,
  en: enPNG
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
          <div
            key={locale}
            className="m-2 rounded-lg bg-slate-700 cursor-pointer"
          >
            <Image
              alt={locale}
              src={languageFlags[locale]}
              onClick={() => handleLanguage(locale)}
              className={
                `h-7 w-7 p-1 hover:grayscale-0 ` +
                (lang === locale ? 'grayscale-0' : 'grayscale')
              }
            />
          </div>
        );
      })}
    </>
  );
}
