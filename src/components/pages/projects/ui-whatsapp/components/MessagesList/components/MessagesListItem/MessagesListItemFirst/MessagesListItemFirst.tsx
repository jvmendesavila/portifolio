import React from 'react';
import Image from 'next/image';

// Assets
import BorderImage from '@/assets/images/projects/ui-whatsapp/border-message.svg';

interface PropsType {
  content: string;
}

const MessagesListItemFirst = (props: PropsType) => {
  return (
    <div className="flex justify-start mb-[4px]">
      <Image src={BorderImage} className="h-[13px] w-[8px]" alt="" />
      <div className="w-fit-content w-max-[80%] py-[4px] px-[8px] bg-[#202c33] rounded-md rounded-tl-none">
        {props.content}
      </div>
    </div>
  );
};

export default MessagesListItemFirst;
