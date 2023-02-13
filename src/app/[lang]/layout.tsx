import '../globals.css';
import Image from 'next/image';

// Components
import { Menu } from '@/components/Menu';
import { i18n } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';
import ThemeProviderComponent from '@/components/Theme/Provider';

// Assets
import avatar from '@/assets/images/avatar.png';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ params: { lang }, children }: any) {
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang}>
      <head />
      <body>
        <ThemeProviderComponent>
          {/* Header */}
          <div className="flex">
            <div className="px-1 min-w-max h-screen flex-col border-r-2 border-r-indigo-500">
              <div className="flex-col items-center pt-3">
                <div className="flex justify-center">
                  <Image
                    alt="leeerob"
                    src={avatar}
                    placeholder="blur"
                    className="h-24 w-24 mt-2 rounded-full"
                  />
                </div>
                <div className="pt-4">
                  <p className="text-sm text-center font-bold">
                    Victor Mendes Ávila
                  </p>
                  <p className="text-xs text-center">Software Engineer</p>
                </div>
                <div className="mt-4 mb-4 mx-4 border-b-2 border-b-indigo-500" />
              </div>

              <div className="flex items-center">
                <Menu dictionary={dictionary.counter} />
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pt-8  h-screen overflow-auto">{children}</div>
          </div>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
