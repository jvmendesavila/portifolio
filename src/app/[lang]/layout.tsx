import '../globals.css'
import ThemeProviderComponent from '@/components/Theme/Provider'
import { Menu } from '@/components/Menu';
import { i18n } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  params: { lang, children },
}: any) {
  const dictionary = await getDictionary(lang)
  return (
    <html lang={lang}>
      <head />
        <body>
        <ThemeProviderComponent>
          {/* Header */}
          <div className="flex items-center justify-between h-20 px-8 py-4">
            <div>
              <p>João Victor Mendes Ávila</p>
              <p className='text-xs font-bold'>BCS / Software Engineer / Mid-Level</p>
            </div>

            <div className="flex items-center">
              <Menu dictionary={dictionary.counter}/>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pt-8 border-t-2 border-t-indigo-500">
            {children}
          </div>
        </ThemeProviderComponent>
        </body>
    </html>
  )
}
