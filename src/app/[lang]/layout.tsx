import '../globals.css';

// Internationalization
import { i18n } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

// Components
import Header from '@/components/Header/Header';
import Background from '@/components/Background/Background';
import ThemeProviderComponent from '@/components/Theme/Provider';

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
          <div className="flex">
            {/* Background */}
            <Background />

            {/* Header */}
            <Header dictionary={dictionary} />

            {/* Content */}
            <div className="px-7 py-16 w-screen h-screen overflow-auto z-10">
              {children}
            </div>
          </div>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
