'use client';
import { useTheme } from 'next-themes';

const Background = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        'fixed top-0 left-0  w-screen h-screen z-0 ' +
        "bg-[url('/images/bg.jpg')] bg-cover bg-center grayscale" +
        (theme === 'dark' ? '' : ' opacity-30')
      }
    />
  );
};

export default Background;
