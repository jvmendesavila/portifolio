'use client';
import { Menu } from '@headlessui/react';

export default function UIWhatsappMenu(props: any) {
  return (
    <div className="flex">
      <Menu as="div" className="inline-block text-left">
        {({ open }) => {
          return (
            <>
              <div className="flex items-center">
                <Menu.Button>{props.children}</Menu.Button>
              </div>
              <div className="z-20 relative">
                <Menu.Items
                  className={`${
                    props.fixed ? 'fixed' : 'absolute right-0'
                  } mt-2 w-56 origin-bottom-left rounded-md bg-[#233138]`}
                >
                  <div className="py-2">
                    {props.options.map((op: any, i: number) => (
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <button
                            onClick={() => op.action(props.chatId)}
                            className={`${
                              active
                                ? 'bg-[#182229] text-white'
                                : 'text-[#d1d7db]'
                            } flex w-full h-[40px] px-[24px] text-[14px] items-center`}
                          >
                            {op.label}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </div>
            </>
          );
        }}
      </Menu>
    </div>
  );
}
