'use client';
import React from 'react';
import Image from 'next/image';

// Assets
import AssetIcon from '@/assets/images/projects/ui-whatsapp/asset.svg';
import PictureIcon from '@/assets/images/projects/ui-whatsapp/picture.svg';
import FigureIcon from '@/assets/images/projects/ui-whatsapp/figure.svg';
import CameraIcon from '@/assets/images/projects/ui-whatsapp/camera.svg';
import FileIcon from '@/assets/images/projects/ui-whatsapp/file.svg';
import ContactIcon from '@/assets/images/projects/ui-whatsapp/contact.svg';
import SurveyIcon from '@/assets/images/projects/ui-whatsapp/survey.svg';

const MessagesListInputAssets = (props: any) => {
  return (
    <div className="flex justify-center items-center relative">
      {/* Assets Options */}
      <>
        <div
          className={`
            absolute
            opacity-0
            cursor-pointer
            -translate-y-10
            transition
            scale-100
            ease-in-out
            'duration-[250ms]'
            ${`-top-[0px]`}
            ${props.assetOptions ? 'scale-100' : 'scale-75'}
            ${props.assetOptions ? 'opacity-100' : 'opacity-0'}
            ${props.assetOptions ? `delay-[0ms]` : `delay-[0ms]`}
            ${props.assetOptions ? '-translate-y-[72px]' : '-translate-y-10'}
          `}
        >
          <div className="flex group/asset w-[180px] mr-[-128px]">
            <Image alt="" title="" src={PictureIcon} className="w-[53px]" />
            <div className="flex items-center opacity-0 group-hover/asset:opacity-100 ml-[12px]">
              <div className="py-[6px] px-[12px] bg-white rounded-full">
                <span className="text-[14px] text-black whitespace-pre">
                  {'Fotos e vídeos'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
            absolute
            opacity-0
            cursor-pointer
            -translate-y-10
            transition
            scale-100
            ease-in-out
            'duration-[250ms]'
            ${`-top-[70px]`}
            ${props.assetOptions ? 'scale-100' : 'scale-75'}
            ${props.assetOptions ? 'opacity-100' : 'opacity-0'}
            ${props.assetOptions ? `delay-[50ms]` : `delay-[50ms]`}
            ${props.assetOptions ? '-translate-y-[72px]' : '-translate-y-10'}
          `}
        >
          <div className="flex group/asset w-[180px] mr-[-128px]">
            <Image alt="" title="" src={FigureIcon} className="w-[53px]" />
            <div className="flex items-center opacity-0 group-hover/asset:opacity-100 ml-[12px]">
              <div className="py-[6px] px-[12px] bg-white rounded-full">
                <span className="text-[14px] text-black whitespace-pre">
                  {'Fotos e vídeos'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
            absolute
            opacity-0
            cursor-pointer
            -translate-y-10
            transition
            scale-100
            ease-in-out
            'duration-[250ms]'
            ${`-top-[140px]`}
            ${props.assetOptions ? 'scale-100' : 'scale-75'}
            ${props.assetOptions ? 'opacity-100' : 'opacity-0'}
            ${props.assetOptions ? `delay-[100ms]` : `delay-[100ms]`}
            ${props.assetOptions ? '-translate-y-[72px]' : '-translate-y-10'}
          `}
        >
          <div className="flex group/asset w-[180px] mr-[-128px]">
            <Image alt="" title="" src={CameraIcon} className="w-[53px]" />
            <div className="flex items-center opacity-0 group-hover/asset:opacity-100 ml-[12px]">
              <div className="py-[6px] px-[12px] bg-white rounded-full">
                <span className="text-[14px] text-black whitespace-pre">
                  {'Fotos e vídeos'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
            absolute
            opacity-0
            cursor-pointer
            -translate-y-10
            transition
            scale-100
            ease-in-out
            'duration-[250ms]'
            ${`-top-[210px]`}
            ${props.assetOptions ? 'scale-100' : 'scale-75'}
            ${props.assetOptions ? 'opacity-100' : 'opacity-0'}
            ${props.assetOptions ? `delay-[150ms]` : `delay-[150ms]`}
            ${props.assetOptions ? '-translate-y-[72px]' : '-translate-y-10'}
          `}
        >
          <div className="flex group/asset w-[180px] mr-[-128px]">
            <Image alt="" title="" src={FileIcon} className="w-[53px]" />
            <div className="flex items-center opacity-0 group-hover/asset:opacity-100 ml-[12px]">
              <div className="py-[6px] px-[12px] bg-white rounded-full">
                <span className="text-[14px] text-black whitespace-pre">
                  {'Fotos e vídeos'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
            absolute
            opacity-0
            cursor-pointer
            -translate-y-10
            transition
            scale-100
            ease-in-out
            'duration-[250ms]'
            ${`-top-[280px]`}
            ${props.assetOptions ? 'scale-100' : 'scale-75'}
            ${props.assetOptions ? 'opacity-100' : 'opacity-0'}
            ${props.assetOptions ? `delay-[200ms]` : `delay-[200ms]`}
            ${props.assetOptions ? '-translate-y-[72px]' : '-translate-y-10'}
          `}
        >
          <div className="flex group/asset w-[180px] mr-[-128px]">
            <Image alt="" title="" src={ContactIcon} className="w-[53px]" />
            <div className="flex items-center opacity-0 group-hover/asset:opacity-100 ml-[12px]">
              <div className="py-[6px] px-[12px] bg-white rounded-full">
                <span className="text-[14px] text-black whitespace-pre">
                  {'Fotos e vídeos'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
            absolute
            opacity-0
            cursor-pointer
            transition
            scale-100
            ease-in-out
            -translate-y-10
            'duration-[250ms]'
            ${`-top-[350px]`}
            ${props.assetOptions ? 'scale-100' : 'scale-75'}
            ${props.assetOptions ? 'opacity-100' : 'opacity-0'}
            ${props.assetOptions ? `delay-[250ms]` : `delay-[250ms]`}
            ${props.assetOptions ? '-translate-y-[72px]' : '-translate-y-10'}
          `}
        >
          <div className="flex group/asset w-[180px] mr-[-128px]">
            <Image alt="" title="" src={SurveyIcon} className="w-[53px]" />
            <div className="flex items-center opacity-0 group-hover/asset:opacity-100 ml-[12px]">
              <div className="py-[6px] px-[12px] bg-white rounded-full">
                <span className="text-[14px] text-black whitespace-pre">
                  {'Fotos e vídeos'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>

      <div
        className="p-[6px] cursor-pointer"
        onClick={() => props.setAssetOptions((oldS: boolean) => !oldS)}
      >
        <Image
          src={AssetIcon}
          alt="Anexar"
          title="Anexar"
          className="h-[24px] w-[24px]"
        />
      </div>
    </div>
  );
};

export default MessagesListInputAssets;
