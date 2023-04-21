'use client';
import './index.css';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Assets
import SmileImage from '@/assets/images/projects/ui-whatsapp/smile.svg';
import ArrowDownIcon from '@/assets/images/projects/ui-whatsapp/arrow-down.png';
import BorderImage from '@/assets/images/projects/ui-whatsapp/border-message.svg';
import BorderMyImage from '@/assets/images/projects/ui-whatsapp/border-my-message.png';
import ReceiveMessageImage from '@/assets/images/projects/ui-whatsapp/receive-message.svg';

// Components
import MenuComponent from './Menu';

const messages = [
  {
    id: 0,
    byUser: false,
    content: 'Tudo bem ?',
    first: true,
    last: false
  },
  {
    id: 1,
    byUser: false,
    content:
      'Como está o andamento do projeto ? Depois me fala se resolveu o fix pendente',
    first: false,
    last: false
  },
  {
    id: 2,
    byUser: false,
    content: 'Está em produção ?',
    first: false,
    last: true
  },
  {
    id: 3,
    byUser: true,
    content: 'Vai bem',
    first: true,
    last: false
  },
  {
    id: 4,
    byUser: true,
    content: 'Estou trabalhando em uma nova feature',
    first: false,
    last: false
  },
  {
    id: 5,
    byUser: true,
    content: 'Acredito que vai te surpreender ! Mas ainda está apenas em hml',
    first: false,
    last: true
  },
  {
    id: 6,
    byUser: false,
    content: 'Tudo bem ?',
    first: true,
    last: false
  },
  {
    id: 7,
    byUser: false,
    content:
      'Como está o andamento do projeto ? Depois me fala se resolveu o fix pendente',
    first: false,
    last: false
  },
  {
    id: 8,
    byUser: false,
    content: 'Está em produção ?',
    first: false,
    last: true
  },
  {
    id: 9,
    byUser: true,
    content: 'Vai bem',
    first: true,
    last: false
  },
  {
    id: 10,
    byUser: true,
    content: 'Estou trabalhando em uma nova feature',
    first: false,
    last: false
  },
  {
    id: 11,
    byUser: true,
    content: 'Acredito que vai te surpreender ! Mas ainda está apenas em hml',
    first: false,
    last: true
  },
  {
    id: 12,
    byUser: false,
    content: 'Tudo bem ?',
    first: true,
    last: false
  },
  {
    id: 13,
    byUser: false,
    content:
      'Como está o andamento do projeto ? Depois me fala se resolveu o fix pendente',
    first: false,
    last: false
  },
  {
    id: 14,
    byUser: false,
    content: 'Está em produção ?',
    first: false,
    last: true
  },
  {
    id: 15,
    byUser: true,
    content: 'Vai bem',
    first: true,
    last: false
  },
  {
    id: 16,
    byUser: true,
    content: 'Estou trabalhando em uma nova feature',
    first: false,
    last: false
  },
  {
    id: 17,
    byUser: true,
    content: 'Acredito que vai te surpreender ! Mas ainda está apenas em hml',
    first: false,
    last: true
  }
];

const options = [
  { label: 'Dados da mensagem' },
  { label: 'Responder' },
  { label: 'Reagir à mensagem' },
  { label: 'Encaminhar mensagem' },
  { label: 'Favoritar mensagem' },
  { label: 'Apagar mensagem' }
];

const gorupMessages = [
  {
    id: 0,
    legend: 'ONTEM',
    messages: messages
  },
  {
    id: 1,
    legend: 'HOJE',
    messages: messages
  }
];

const MessagesListItem = () => {
  // Let's & Const's
  let timeoutID: NodeJS.Timeout | null;
  const scrollRef = useRef<any>(null);
  const [scrolling, setScrolling] = useState(false);
  const [scrollBottom, setScrollBottom] = useState(false);

  // Functions
  const handleOnScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.clientHeight <= e.target.scrollTop;
    if (bottom) setScrollBottom(true);
    else if (scrollBottom) setScrollBottom(false);

    setScrolling(true);
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      setScrolling(false);
    }, 5000);
  };

  const scrollToBottom = () => {
    scrollRef.current?.scroll({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleOnScroll}
      className={`
        relative
        p-[18px]
        max-h-[calc(100vh-8rem-122px)]
        overflow-auto
        text-white text-[14px]
        scroll-message-list
      `}
    >
      {gorupMessages.map((groupM) => (
        <div className="relative mt-[49px]" key={groupM.id}>
          {/* Date legend */}
          <div
            className={`
            flex
            z-10
            top-[32px]
            sticky
            justify-center
            transition
            ease-in-out
            duration-[1000ms]
            opacity-0
            ${scrolling ? 'opacity-100' : 'opacity-0'}
            -translate-y-full
            ${scrolling ? '-translate-y-0' : '-translate-y-full'}
            `}
          >
            <div className="bg-[#111b21] px-[12px] py-[6px] rounded-md cursor-pointer">
              <span className="text-[#8696A0] text-[13px]">
                {groupM.legend}
              </span>
            </div>
          </div>

          <div className="flex justify-center -mt-[66px] mb-[12px]">
            <div className="bg-[#111b21] px-[12px] py-[6px] rounded-md cursor-pointer">
              <span className="text-[#8696A0] text-[13px]">
                {groupM.legend}
              </span>
            </div>
          </div>

          {/* Messages */}
          {groupM.messages.map((m) => (
            <div className=" mr-[64px]" key={m.id}>
              <div
                className={`group/item flex justify-end ${
                  m.first || !m.last ? 'mb-[2px]' : 'mb-[12px]'
                } ${m.first ? '' : m.byUser ? 'mr-[8px]' : 'ml-[8px]'} ${
                  m.byUser ? '' : 'flex-row-reverse'
                }`}
              >
                {/* React Icons */}
                <div className="hidden w-fit h-fit self-center p-1 rounded-full bg-[#000000b3] mx-[8px] cursor-pointer group-hover/item:flex">
                  <Image
                    alt=""
                    src={SmileImage}
                    className="h-[16px] w-[16px]"
                  />
                </div>

                {/* Message */}
                <div
                  className={`flex relative max-w-[80%] py-[4px] px-[8px] rounded-md ${
                    m.first
                      ? m.byUser
                        ? 'rounded-tr-none '
                        : 'rounded-tl-none '
                      : ' '
                  } ${m.byUser ? 'bg-[#005c4b]' : 'bg-[#202c33]'}`}
                >
                  <span style={{ whiteSpace: 'break-spaces' }}>{`${
                    m.content + (m.byUser ? '             ' : '        ')
                  }`}</span>
                  <MenuComponent
                    messageId={`messages-${groupM.id}-${m.id}`}
                    options={options}
                    byUser={m.byUser}
                  >
                    <Image
                      alt=""
                      src={ArrowDownIcon}
                      className={`
                        z-10
                        h-[22px]
                        w-[22px]
                        rounded-full
                        cursor-pointer
                        absolute top-[4px] right-[8px]
                        transition
                        ease-in-out
                        duration-[300ms]
                        opacity-0 group-hover/item:opacity-100
                        translate-x-1 group-hover/item:translate-x-0
                        ${m.byUser ? 'bg-[#005c4b]' : 'bg-[#202c33]'}
                      `}
                    />
                  </MenuComponent>
                  <div className="flex items-center absolute bottom-[4px] right-[9px]">
                    <span className="ml-[8px] text-[10px] text-[#ffffff99]">
                      20:00
                    </span>
                    {m.byUser && (
                      <Image
                        src={ReceiveMessageImage}
                        className="ml-[4px] h-[16px] w-[16px]"
                        alt=""
                      />
                    )}
                  </div>
                </div>
                {m.first && (
                  <Image
                    src={m.byUser ? BorderMyImage : BorderImage}
                    className={'h-[13px] w-[8px]'}
                    alt=""
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Go bottom button */}
      <div
        onClick={scrollToBottom}
        className={`
          flex
          sticky
          bottom-0 right-0
          justify-end
          -mt-[48px]
          transition
          ease-in-out
          duration-[300ms]
          opacity-0
          ${scrollBottom ? 'opacity-0 ' : 'opacity-100 '}
        `}
      >
        <div
          className={`
            p-2
            flex
            items-center
            justify-center
            bg-[#202c33]
            w-[42px] h-[42px]
            rounded-full
            cursor-pointer
            transition
            ease-in-out
            duration-[300ms]
            scale-100
            ${scrollBottom ? 'scale-50 ' : 'scale-100'}
          `}
        >
          <Image alt="" src={ArrowDownIcon} className={'w-[24px]'} />
        </div>
      </div>
    </div>
  );
};

export default MessagesListItem;
