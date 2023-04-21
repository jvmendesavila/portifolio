import React, { useContext, useRef } from 'react';
import Image from 'next/image';

// Assets
import BgStartImage from '@/assets/images/projects/ui-whatsapp/bg-start.svg';
import PadLockGrayImage from '@/assets/images/projects/ui-whatsapp/padlock-gray.svg';

// Components
import MessagesListInput from './components/MessagesListInput';
import MessagesListHeader from './components/MessagesListHeader';
import MessagesListItem from './components/MessagesListItem';

// Contexts
import MainContext from '../../contexts/MainContext';

const MessagesList = () => {
  // Contexts
  const { chat } = useContext(MainContext);
  return chat ? (
    <div className="grid grid-rows-[60px_1fr] h-[calc(100vh-8rem)] w-full">
      {/* Header */}
      <MessagesListHeader />

      {/* Body */}
      <div className="bg-[url('/images/pages/whatsapp/bg-whatsapp.png')] bg-cover bg-center bg-no-repeat bg-[length:280%]">
        <div className="grid grid-rows-[1fr_62px] h-full w-full">
          {/* Messages List */}
          <MessagesListItem />

          {/* Messages Input */}
          <MessagesListInput />
        </div>
      </div>
    </div>
  ) : (
    <div className="relative flex bg-[#202c33] relative items-center justify-center max-[640px]:hidden">
      <div className="flex flex-col max-w-[520px] text-center">
        <div className="flex h-[204px] justify-center">
          <Image alt="" title="" src={BgStartImage} className="w-full" />
        </div>
        <span className="text-white text-3xl mt-[48px]">WhatsApp Web</span>
        <div className="text-[14px] text-[#8696A0] mt-[16px]">
          <p>
            Envie e receba mensagens sem precisar manter seu celular conectado à
            internet.
          </p>
          <p>
            Use o WhatsApp em até quatro aparelhos conectados e um celular ao
            mesmo tempo.
          </p>
        </div>
        <div className="absolute  w-screen max-w-[520px] bottom-[32px] text-center text-[14px] text-[#8696A0]">
          <div className="flex text-center justify-center">
            <div className="text-[12px]">
              <span className="inline-block -mb-[2px] mr-[6px]">
                <Image
                  alt=""
                  title=""
                  src={PadLockGrayImage}
                  className="w-[13px] rounded-full"
                />
              </span>
              Protegido com a criptografia de ponta a ponta
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full absolute bottom-0 bg-[#005c4b] h-[6px]" />
    </div>
  );
};

export default MessagesList;
