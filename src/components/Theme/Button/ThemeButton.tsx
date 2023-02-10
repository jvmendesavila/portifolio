'use client';
import React from 'react'
import { useTheme } from 'next-themes';

import {MoonIcon, SunIcon} from '@heroicons/react/24/solid';

export default function ThemeButton() {
  // Const's
  const [mounted, setMounted] = React.useState(false);
  const {systemTheme, theme, setTheme} = useTheme();
  
  // Functions
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <MoonIcon color='white' className="mx-4 p-2 w-8 h-8 bg-slate-700 rounded-full" role="button" onClick={() => setTheme('light')}/>
        )
      } 
      else {
        return (
        <SunIcon color='white' className="mx-4 p-2 w-8 h-8 bg-slate-700 rounded-full" role="button" onClick={() => setTheme('dark')}/>
      )
    }
  }

  return (
    renderThemeChanger()
  )
}
