'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/internationalization/i18n-config';

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
              width={'28'}
              height={'28'}
              src={`/images/languages/${locale}-flag.png`}
              onClick={() => handleLanguage(locale)}
              className={
                `p-1 hover:grayscale-0 ` +
                (lang === locale ? 'grayscale-0' : 'grayscale')
              }
            />
          </div>
        );
      })}
    </>
  );
}
