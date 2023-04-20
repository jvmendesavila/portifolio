'use client';
import React from 'react';
import Image from 'next/image';

// Assets
import AvatarImage from '@/assets/images/avatar.png';
import PadlockIcon from '@/assets/images/projects/ui-whatsapp/padlock.svg';
import MuteIcon from '@/assets/images/projects/ui-whatsapp/mute.svg';
import PinIcon from '@/assets/images/projects/ui-whatsapp/pin.svg';
import ArrowDownIcon from '@/assets/images/projects/ui-whatsapp/arrow-down.png';

// Components
import MenuComponent from './Menu';

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
              'group h-[72px] grid grid-cols-[78px_1fr] hover:bg-[#202c33] cursor-pointer'
            }
          >
            {/* Avatar */}
            <div className="h-full flex justify-center items-center">
              <Image
                src={chat.avatar.image}
                placeholder="blur"
                className="h-[50px] w-[50px] rounded-full"
                alt="Victor Mendes Avila"
              />
            </div>

            {/* Last Message */}
            <div className="h-full flex flex-col justify-center">
              <span className="text-[18px]">{chat.avatar.name}</span>
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
                  <MenuComponent
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
                  </MenuComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mx-[14px]">
        <div className={`h-[1px] bg-[#202c33]`} />
        <div className="flex h-[60px] items-center">
          <div className="flex text-center">
            <div className="text-[12px]">
              <span className="inline-block -mb-[2px] mr-[6px]">
                <Image
                  alt=""
                  title=""
                  src={PadlockIcon}
                  className="w-[13px] rounded-full"
                />
              </span>
              Suas menssagens pessoais são protegidas com a{' '}
              <span className="cursor-pointer text-[#53BDEB]">
                criptografia de ponta a ponta
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListBodyMessages;
