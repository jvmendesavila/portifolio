'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Assets
import IconsIcon from '@/assets/images/projects/ui-whatsapp/icons.svg';
import AssetIcon from '@/assets/images/projects/ui-whatsapp/asset.svg';
import VoiceIcon from '@/assets/images/projects/ui-whatsapp/voice.svg';
import PictureIcon from '@/assets/images/projects/ui-whatsapp/picture.svg';
import FigureIcon from '@/assets/images/projects/ui-whatsapp/figure.svg';
import CameraIcon from '@/assets/images/projects/ui-whatsapp/camera.svg';
import FileIcon from '@/assets/images/projects/ui-whatsapp/file.svg';
import ContactIcon from '@/assets/images/projects/ui-whatsapp/contact.svg';
import SurveyIcon from '@/assets/images/projects/ui-whatsapp/survey.svg';
import MessagesListInputAssets from './components/MessagesListInputAssets';

const assetOptionsButtons = [
  { icon: PictureIcon, label: 'Fotos e vídeos' },
  { icon: FigureIcon, label: 'Figurinha' },
  { icon: FileIcon, label: 'Câmera' },
  { icon: CameraIcon, label: 'Documento' },
  { icon: ContactIcon, label: 'Contato' },
  { icon: SurveyIcon, label: 'Enquete' }
];

const MountAssetIcon = ({ icon, assetOptions, i, label }: any) => {
  return (
    <div
      key={i}
      className={`
      absolute
      opacity-0
      cursor-pointer
      -translate-y-10
      transition
      scale-100
      ease-in-out
      'duration-[250ms]'
      ${`-top-[${i * 70}px]`}
      ${assetOptions ? 'scale-100' : 'scale-75'}
      ${assetOptions ? 'opacity-100' : 'opacity-0'}
      ${assetOptions ? `delay-[${i * 50}ms]` : `delay-[${i * 50}ms]`}
      ${assetOptions ? '-translate-y-[72px]' : '-translate-y-10'}
      `}
    >
      <div className="flex group/asset mr-[-32px]">
        <Image alt="" title="" src={icon} className="w-[53px]" />
        {/* <div className="flex items-center xopacity-0 group-hover/asset:opacity-100 ml-[12px]">
          <div className="py-[6px] px-[12px] bg-white rounded-full">
            <span className="text-[14px] text-black whitespace-pre">
              {label}
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const MessagesListInput = () => {
  const [assetOptions, setAssetOptions] = useState(false);
  return (
    <div className="bg-[#202c33]">
      <div className="h-full px-[12px] py-[10px] grid grid-cols-[40px_53px_1fr_48px]">
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
        <MessagesListInputAssets
          assetOptions={assetOptions}
          setAssetOptions={setAssetOptions}
        />

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
