'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Assets
import SearchIcon from '@/assets/images/projects/ui-whatsapp/search.svg';
import FilterIcon from '@/assets/images/projects/ui-whatsapp/filter.svg';
import FilterWhiteIcon from '@/assets/images/projects/ui-whatsapp/filter-white.svg';
import ChatListBodyMessages from './components/ChatListBodyMessages';

const initialChats = [
  {
    id: 1,
    pin: true,
    muted: true,
    lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    unredMessages: {
      active: true,
      quantity: 2
    }
  },
  {
    id: 2,
    pin: true,
    muted: false,
    lastMessage:
      'Placeat sapiente quaerat eaque atque, neque ab aspernatur harum voluptatum facilis.',
    unredMessages: {
      active: false,
      quantity: 0
    }
  },
  {
    id: 3,
    pin: false,
    muted: true,
    lastMessage:
      'Totam iste velit temporibus magnam, earum blanditiis odio rem minima esse.',
    unredMessages: {
      active: false,
      quantity: 0
    }
  },
  {
    id: 4,
    pin: true,
    muted: true,
    lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    unredMessages: {
      active: true,
      quantity: 2
    }
  },
  {
    id: 5,
    pin: true,
    muted: false,
    lastMessage:
      'Placeat sapiente quaerat eaque atque, neque ab aspernatur harum voluptatum facilis.',
    unredMessages: {
      active: false,
      quantity: 0
    }
  },
  {
    id: 6,
    pin: false,
    muted: true,
    lastMessage:
      'Totam iste velit temporibus magnam, earum blanditiis odio rem minima esse.',
    unredMessages: {
      active: false,
      quantity: 0
    }
  },
  {
    id: 7,
    pin: true,
    muted: true,
    lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    unredMessages: {
      active: true,
      quantity: 2
    }
  },
  {
    id: 8,
    pin: true,
    muted: false,
    lastMessage:
      'Placeat sapiente quaerat eaque atque, neque ab aspernatur harum voluptatum facilis.',
    unredMessages: {
      active: false,
      quantity: 0
    }
  },
  {
    id: 9,
    pin: false,
    muted: true,
    lastMessage:
      'Totam iste velit temporibus magnam, earum blanditiis odio rem minima esse.',
    unredMessages: {
      active: false,
      quantity: 0
    }
  }
];

const ChatListBody = () => {
  // Let's & Const's
  const [cacheChats, setCacheChats] = useState(initialChats);
  const [chats, setChats] = useState(initialChats);
  const [unreadChats, setUnreadChats] = useState(false);

  const filterUnreadMessages = () => {
    if (!unreadChats)
      setChats(chats.filter((chat) => chat.unredMessages.active));
    else setChats(cacheChats);
    setUnreadChats((oldS) => !oldS);
  };

  useEffect(() => {
    if (!unreadChats) {
      setCacheChats(chats);
    }
  }, [unreadChats, chats]);

  return (
    <div className="bg-[#111b21] border-r-[1px] border-[#262f34]">
      {/* Filters */}
      <div className="grid grid-cols-[1fr_42px] items-center cursor-initial">
        {/* Search */}
        <div className="">
          <label className="relative block ml-[12px] my-[6px]">
            <span className="absolute inset-y-0 left-0 flex items-center p-2 cursor-pointer">
              <Image
                alt="Pesquisar Chat"
                title="Pesquisar..."
                src={SearchIcon}
                className="h-[20px] w-[20px]"
              />
            </span>
            <input
              type="text"
              placeholder="Pesquisar ou começar uma nova conversa"
              className="
                  w-full
                  text-[12px]
                  block bg-[#202c33]
                  outline-0
                  rounded-md
                  py-2 pl-[64px] pr-3
                "
            />
          </label>
        </div>

        {/* Filter Unread */}
        <div className="flex justify-center">
          <Image
            src={unreadChats ? FilterWhiteIcon : FilterIcon}
            onClick={filterUnreadMessages}
            alt="Filtro de conversas não lidas"
            title="Filtro de conversas não lidas"
            className={
              'h-[24px] w-[24px] mt-1 cursor-pointer rounded-full p-[3px] ' +
              (unreadChats ? 'bg-[#00a884]' : 'bg-none')
            }
          />
        </div>
      </div>
      <ChatListBodyMessages chats={chats} setChats={setChats} />
    </div>
  );
};

export default ChatListBody;
