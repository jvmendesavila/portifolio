'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/internationalization/i18n-config'

export default function LocaleSwitcher() {
  const currentRoute = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!currentRoute) return '/'
    const segments = currentRoute.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <>
      {i18n.locales.map((locale) => {
        return (
          <Link 
            key={locale} 
            href={redirectedPathName(locale)}
            className={`mx-2 p-2 w-8 text-xs font-bold rounded-lg  bg-slate-700 ` + (currentRoute?.includes(`/${locale}`) ? 'text-blue-500' : 'text-white active:text-blue-500 hover:text-blue-500')} 
          >
              {locale.toUpperCase()}
          </Link>
        )
      })}
    </>
  )
}