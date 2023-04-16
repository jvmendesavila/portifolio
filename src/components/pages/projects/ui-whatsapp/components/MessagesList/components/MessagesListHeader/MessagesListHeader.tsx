import React from 'react';
import Image from 'next/image';

// Assets
import AvatarImage from '@/assets/images/avatar.png';
import OptionsIcon from '@/assets/images/projects/ui-whatsapp/options.svg';
import SearchIcon from '@/assets/images/projects/ui-whatsapp/search.svg';

// Components
import UIWhatsappMenu from '../../../UIWhatsappMenu';

const options = [
  { label: 'Dados do contato' },
  { label: 'Seleionar mensagens' },
  { label: 'Fechar conversa' },
  { label: 'Silenciar notificações' },
  { label: 'Mensagens temporárias' },
  { label: 'Limpar mensagens' },
  { label: 'Apagar conversa' },
  { label: 'Denunciar' },
  { label: 'Bloquear' }
];

const MessagesListHeader = () => {
  return (
    <div className="bg-[#202c33] py-[10px] px-[16px]">
      <div className="grid grid-cols-[60px_1fr_90px] items-center">
        <Image
          src={AvatarImage}
          placeholder="blur"
          className="h-[40px] w-[40px] rounded-full"
          alt="Victor Mendes Avila"
        />
        <div className="flex flex-col">
          <span>Victor Mendes Ávila</span>
          <span className="text-[12px] text-[#8696A0]">
            visto por último hoje às 17:32
          </span>
        </div>
        <div className="flex gap-[10px] items-center justify-end">
          <div className="p-[8px] cursor-pointer">
            <Image
              src={SearchIcon}
              alt="Pesquisar Chat"
              title="Pesquisar..."
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

export default MessagesListHeader;
