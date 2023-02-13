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
          <div className="flex items-center justify-between h-20 px-8 py-4">
            <div className="flex items-center">
              <Image
                alt="leeerob"
                src={avatar}
                placeholder="blur"
                className="h-10 w-10 mt-2 mr-4 rounded-full"
              />
              <div>
                <p className="text-sm">João Victor Mendes Ávila</p>
                <p className="text-xs font-bold">
                  BCS / Software Engineer / Mid-Level
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <Menu dictionary={dictionary.counter} />
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pt-8 border-t-2 border-t-indigo-500">
            {children}
          </div>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
