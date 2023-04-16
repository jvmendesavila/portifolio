import React from 'react';
import Image from 'next/image';

// Assets
import IconsIcon from '@/assets/images/projects/ui-whatsapp/icons.svg';
import AssetIcon from '@/assets/images/projects/ui-whatsapp/asset.svg';
import VoiceIcon from '@/assets/images/projects/ui-whatsapp/voice.svg';

const MessagesListInput = () => {
  return (
    <div className="bg-[#202c33]">
      <div className="h-full px-[12px] py-[10px] grid grid-cols-[40px_40px_1fr_48px]">
        {/* Emojis */}
        <div className="flex justify-center items-center ">
          <div className="p-[6px] cursor-pointer">
            <Image
              src={IconsIcon}
              alt="Emojis"
              title="Emojis"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>

        {/* Anexo */}
        <div className="flex justify-center items-center ">
          <div className="p-[6px] cursor-pointer">
            <Image
              src={AssetIcon}
              alt="Anexar"
              title="Anexar"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>

        {/* Input */}
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Mensagem"
            className="
                  w-full
                  outline-0
                  rounded-md
                  text-[16px]
                  block bg-[#2A3942]
                  py-[9px] px-[12px] pr-3 ml-3
                "
          />
        </div>

        {/* Mensagem de Voz */}
        <div className="flex justify-center items-center ">
          <div className="p-[6px] cursor-pointer">
            <Image
              src={VoiceIcon}
              alt="Gravar mensagem"
              title="Gravar mensagem"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesListInput;
