'use client';
import React from 'react';
import Image from 'next/image';

// Assets
import AvatarImage from '@/assets/images/avatar.png';
import ComunityIcon from '@/assets/images/projects/ui-whatsapp/comunity.svg';
import StatusIcon from '@/assets/images/projects/ui-whatsapp/status.svg';
import NewChatIcon from '@/assets/images/projects/ui-whatsapp/newchat.svg';
import OptionsIcon from '@/assets/images/projects/ui-whatsapp/options.svg';

// Components
import UIWhatsappMenu from '../../../UIWhatsappMenu';

const options = [
  { label: 'Novo grupo' },
  { label: 'Nova comunidade' },
  { label: 'Mensagens favoritas' },
  { label: 'Selecionar conversas' },
  { label: 'Configurações' },
  { label: 'Desconectar' }
];

const ChatListHeader = () => {
  return (
    <div
      className="
          bg-[#202c33]
          py-[10px] px-[16px]
          border-r-[1px] border-[#2f3b43]
        "
    >
      <div className="grid grid-cols-[1fr_190px]">
        <Image
          src={AvatarImage}
          placeholder="blur"
          className="h-[40px] w-[40px] rounded-full cursor-pointer"
          alt="João Victor Mendes Avila"
        />
        <div className="flex gap-[10px] items-center">
          <div className="p-[8px] cursor-pointer">
            <Image
              alt="Comunidades"
              title="Comunidades"
              src={ComunityIcon}
              className="h-[24px] w-[24px] "
            />
          </div>
          <div className="p-[8px] cursor-pointer">
            <Image
              alt="Status"
              title="Status"
              src={StatusIcon}
              className="h-[24px] w-[24px] "
            />
          </div>
          <div className="p-[8px] cursor-pointer">
            <Image
              alt="Nova conversa"
              title="Nova conversa"
              src={NewChatIcon}
              className="h-[24px] w-[24px] "
            />
          </div>
          <div className="p-[8px] cursor-pointer">
            <UIWhatsappMenu options={options}>
              <Image
                alt="Mais opções"
                title="Mais opções"
                src={OptionsIcon}
                className="h-[24px] w-[24px]"
              />
            </UIWhatsappMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListHeader;
