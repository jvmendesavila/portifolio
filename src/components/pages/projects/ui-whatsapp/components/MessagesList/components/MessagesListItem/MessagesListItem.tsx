import React from 'react';
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

const MessagesListItem = () => {
  return (
    <div className="relative p-[18px] max-h-[calc(100vh-8rem-122px)] overflow-auto text-white text-[14px]">
      {messages.map((m) => (
        <>
          <div
            className={`group flex justify-end mr-[64px] ${
              m.first || !m.last ? 'mb-[2px]' : 'mb-[12px]'
            } ${m.first ? '' : m.byUser ? 'mr-[8px]' : 'ml-[8px]'} ${
              m.byUser ? '' : 'flex-row-reverse'
            }`}
          >
            {/* React Icons */}
            <div className="hidden w-fit h-fit self-center p-1 rounded-full bg-[#000000b3] mx-[8px] cursor-pointer group-hover:flex">
              <Image alt="" src={SmileImage} className="h-[16px] w-[16px]" />
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
              <MenuComponent chatId={m.id} options={options} byUser={m.byUser}>
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
                opacity-0 group-hover:opacity-100
                translate-x-1 group-hover:translate-x-0
                ${m.byUser ? 'bg-[#005c4b]' : 'bg-[#202c33]'}`}
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
        </>
      ))}
      <div className="flex sticky bottom-0 right-0 justify-end">
        <div className=" p-2 bg-[#202c33] w-12 h-12 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default MessagesListItem;
