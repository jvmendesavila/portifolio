import '../globals.css'
import { Locale } from '@/internationalization/i18n-config'
import ThemeProviderComponent from '@/components/Theme/Provider'
import { getDictionary } from '@/internationalization/get-dictionary';
import { Menu } from '@/components/Menu';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html className="dark">
      <head />
        <body>
        <ThemeProviderComponent>
          <>
            {/* Header */}
            <Menu lang={params.lang} dictionary={dictionary}/>
            
            {/* Content */}
            <div className="px-8 pt-8 border-t-2 border-t-indigo-500">
              {children}
            </div>
          </>
        </ThemeProviderComponent>
        </body>
    </html>
  )
}
