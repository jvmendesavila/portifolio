import React from 'react';
import Image from 'next/image';

// Assets
import BorderMyImage from '@/assets/images/projects/ui-whatsapp/border-my-message.svg';

interface PropsType {
  content: string;
}

const MessagesListMyItemFirst = (props: PropsType) => {
  return (
    <div className="flex justify-end mb-[2px]">
      <div className="w-fit-content w-max-[80%] py-[4px] px-[8px] bg-[#005c4b] rounded-md rounded-tr-none ">
        {props.content}
      </div>
      <Image
        src={BorderMyImage}
        className="h-[13px] w-[8px] scale-x-[-1]"
        alt=""
      />
    </div>
  );
};

export default MessagesListMyItemFirst;
