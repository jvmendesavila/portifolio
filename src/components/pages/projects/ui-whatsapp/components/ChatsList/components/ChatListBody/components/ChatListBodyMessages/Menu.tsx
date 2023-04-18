'use client';
import { Menu } from '@headlessui/react';
import { useState } from 'react';

export default function MenuComponent(props: any) {
  const [posY, setPosY] = useState('');
  const [invert, setInvert] = useState(false);

  const handleClick = (y: any) => {
    // Invert
    const needInvert = window.innerHeight - y < 240;
    if (needInvert) setInvert(true);
    else setInvert(false);

    let test = Math.round(y) + 12 - (needInvert ? 24 : 0);
    setPosY(`${test}px`);
  };

  return (
    <div id={`${props.chatId}`} className="flex relative">
      <Menu as="div" className="inline-block text-left">
        <div className="flex items-center">
          <Menu.Button
            onClick={() =>
              handleClick(
                document
                  .getElementById(`${props.chatId}`)
                  ?.getBoundingClientRect().y
              )
            }
          >
            {props.children}
          </Menu.Button>
        </div>
        <Menu.Items
          style={{ top: posY }}
          className={`fixed z-10 mt-2 w-56 rounded-md bg-[#233138] ${
            invert ? '-translate-y-full' : ''
          }`}
        >
          <div className="py-2">
            {props.options.map((op: any, i: number) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <button
                    onClick={() => op.action(props.chatId)}
                    className={`${
                      active ? 'bg-[#182229] text-white' : 'text-[#d1d7db]'
                    } flex w-full h-[40px] px-[24px] text-[14px] items-center`}
                  >
                    {op.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
