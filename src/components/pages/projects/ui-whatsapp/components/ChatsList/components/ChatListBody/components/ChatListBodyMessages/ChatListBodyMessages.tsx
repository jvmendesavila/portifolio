'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Assets
import AvatarImage from '@/assets/images/avatar.png';
import MuteIcon from '@/assets/images/projects/ui-whatsapp/mute.svg';
import PinIcon from '@/assets/images/projects/ui-whatsapp/pin.svg';
import ArrowDownIcon from '@/assets/images/projects/ui-whatsapp/arrow-down.png';

// Components
import UIWhatsappMenu from '../../../../../UIWhatsappMenu';

const initialChats = [
  {
    id: 1,
    unredMessages: {
      active: true,
      quantity: 2
    },
    muted: true,
    pin: true
  },
  {
    id: 2,
    unredMessages: {
      active: false,
      quantity: 0
    },
    pin: true,
    muted: false
  },
  {
    id: 3,
    unredMessages: {
      active: false,
      quantity: 0
    },
    pin: false,
    muted: true
  }
];

const ChatListBodyMessages = (props: any) => {
  // Functions
  const handleUnreadChat = (chatId: number, active: boolean) => {
    props.setChats(
      props.chats.map((c: any) =>
        c.id === chatId
          ? { ...c, unredMessages: { active: active, quantity: 0 } }
          : c
      )
    );
  };

  const handleOptions = (chatId: number, option: 'pin' | 'muted') => {
    props.setChats(
      props.chats.map((c: any) =>
        c.id === chatId ? { ...c, [option]: !c[option] } : c
      )
    );
  };

  const options = (chat: any) => [
    // Arquive
    {
      active: true,
      label: 'Arquivar conversa',
      action: (chatId: number) => null
    },

    // Notifications
    {
      active: chat.muted ? false : true,
      label: 'Silenciar notificações',
      action: (chatId: number) => handleOptions(chatId, 'muted')
    },
    {
      active: chat.muted ? true : false,
      label: 'Reativar notificações',
      action: (chatId: number) => handleOptions(chatId, 'muted')
    },

    // Delete
    {
      active: true,
      label: 'Apagar conversa',
      action: (chatId: number) =>
        props.setChats(props.chats.filter((chat: any) => chat.id !== chatId))
    },

    // Pin
    {
      active: chat.pin ? false : true,
      label: 'Fixar conversa',
      action: (chatId: number) => handleOptions(chatId, 'pin')
    },
    {
      active: chat.pin ? true : false,
      label: 'Desfixar conversa',
      action: (chatId: number) => handleOptions(chatId, 'pin')
    },

    // Read | Unread
    {
      active: chat.unredMessages.active ? true : false,
      label: 'Marcar como lida',
      action: (chatId: number) => handleUnreadChat(chatId, false)
    },
    {
      active: chat.unredMessages.active ? false : true,
      label: 'Marcar não lida',
      action: (chatId: number) => handleUnreadChat(chatId, true)
    }
  ];

  return (
    <div className="overflow-y-auto overflow-x-hidden max-h-[calc(100vh-8rem-106px)]">
      {/* Chat List */}
      {props.chats.map((chat: any, i: number) => (
        <div key={i}>
          <div
            className={`${i === 0 ? 'h-0' : 'h-[1px]'} bg-[#202c33] ml-16`}
          />
          <div
            className={
              'relative group h-[72px] grid grid-cols-[78px_1fr] hover:bg-[#202c33] cursor-pointer'
            }
          >
            {/* Avatar */}
            <div className="h-full flex justify-center items-center">
              <Image
                src={AvatarImage}
                placeholder="blur"
                className="h-[50px] w-[50px] rounded-full"
                alt="Victor Mendes Avila"
              />
            </div>

            {/* Last Message */}
            <div className="h-full flex flex-col justify-center">
              <span className="text-[18px]">Victor Mendes Ávila</span>
              <div className="grid grid-cols-[1fr_80px_30px] pr-[8px]">
                <span className="text-[12px] text-[#8696A0] whitespace-nowrap	overflow-hidden text-ellipsis">
                  {chat.lastMessage}
                </span>
                <div
                  className="
                      flex
                      justify-end
                      items-center
                      transition
                      ease-in-out
                      duration-[300ms]
                      translate-x-6 group-hover:translate-x-0
                    "
                >
                  {chat.muted && (
                    <Image
                      alt="Filtro de conversas não lidas"
                      title="Filtro de conversas não lidas"
                      src={MuteIcon}
                      className="h-[14px] w-[14px] rounded-full"
                    />
                  )}
                  {chat.pin && (
                    <Image
                      alt="Filtro de conversas não lidas"
                      title="Filtro de conversas não lidas"
                      src={PinIcon}
                      className="h-[14px] w-[14px] rounded-full ml-2"
                    />
                  )}
                  {chat.unredMessages.active && (
                    <div className="bg-[#00a884] mx-2 py-[2px] px-[8px] rounded-full text-[12px] min-h-[16px]">
                      {chat.unredMessages.quantity > 0
                        ? chat.unredMessages.quantity
                        : ''}
                    </div>
                  )}
                </div>
                <div className="flex items-center">
                  <UIWhatsappMenu
                    fixed={true}
                    chatId={chat.id}
                    options={options(chat).filter((op) => op.active)}
                  >
                    <Image
                      alt=""
                      src={ArrowDownIcon}
                      className="
                          h-[20px]
                          w-[20px]
                          rounded-full
                          transition
                          ease-in-out
                          duration-[300ms]
                          opacity-0
                          group-hover:opacity-100
                        "
                    />
                  </UIWhatsappMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatListBodyMessages;
