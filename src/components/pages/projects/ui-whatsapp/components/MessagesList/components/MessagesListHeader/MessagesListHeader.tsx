import React, { useContext } from 'react';
import Image from 'next/image';

import { ArrowLeft } from 'phosphor-react';
// Assets
import OptionsIcon from '@/assets/images/projects/ui-whatsapp/options.svg';
import SearchIcon from '@/assets/images/projects/ui-whatsapp/search.svg';

// Components
import UIWhatsappMenu from '../../../UIWhatsappMenu';

// Contexts
import MainContext from '../../../../contexts/MainContext';

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
  // Contexts
  const { chat, setChat } = useContext(MainContext);

  return (
    <div className="flex items-center bg-[#202c33] py-[10px] px-[16px]">
      <ArrowLeft
        size={18}
        onClick={() => setChat(null)}
        className="mr-[8px] min-[641px]:hidden"
      />
      <div className="w-full grid grid-cols-[48px_1fr_90px] items-center">
        <Image
          src={chat.avatar.image}
          placeholder="blur"
          className="h-[40px] w-[40px] rounded-full mr-[8px]"
          alt="João Victor Mendes Avila"
        />

        <div className="flex flex-col">
          <span>{chat.avatar.name}</span>
          <span className="max-[360px]:max-w-[100px] text-[12px] text-[#8696A0] whitespace-nowrap	overflow-hidden text-ellipsis">
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
