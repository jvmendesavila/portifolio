'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Transition } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';

// Component
import { Menu } from '../Menu';

// Hooks
import useWindow from './hooks/useWindow';

// Assets
import AvatarImage from '@/assets/images/avatar.png';

// Types
import { dictionaryType } from '@/types/dictionaryType';

const Header = ({ dictionary }: { dictionary: dictionaryType }) => {
  const [width] = useWindow();
  const { theme } = useTheme();
  const [isShowing, setIsShowing] = React.useState(false);
  return (
    <div className="relative z-20">
      {isShowing ? (
        <XMarkIcon
          role="button"
          className="fixed z-10 top-6 right-6 sm:invisible w-7 h-7"
          onClick={() => setIsShowing((isShowing) => !isShowing)}
        />
      ) : (
        <Bars2Icon
          role="button"
          className="fixed z-10 top-6 right-6 sm:invisible w-7 h-7"
          onClick={() => setIsShowing((isShowing) => !isShowing)}
        />
      )}
      <Transition
        show={isShowing || width >= 640}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={
            'fixed w-screen min-w-max px-1 h-screen border-r-2 border-r-indigo-500 sm:static sm:flex-col sm:w-48 ' +
            (theme === 'dark' ? 'bg-black' : 'bg-white')
          }
        >
          <div className="flex-col items-center pt-3">
            <div
              className={
                'bg-repeat w-full h-full text-primary-100 ' +
                (theme === 'dark'
                  ? 'heropattern-signal-gray-900'
                  : 'heropattern-signal-gray-100')
              }
            >
              <div className="flex justify-center">
                <Image
                  src={AvatarImage}
                  placeholder="blur"
                  className="h-24 w-24 mt-2 rounded-full"
                  alt="Victor Mendes Avila"
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
          </div>

          <div className="flex items-center">
            <Menu setIsShowing={setIsShowing} dictionary={dictionary} />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
