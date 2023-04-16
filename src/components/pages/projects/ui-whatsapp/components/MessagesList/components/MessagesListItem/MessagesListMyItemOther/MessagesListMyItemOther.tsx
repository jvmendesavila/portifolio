import React from 'react';

interface PropsType {
  content: string;
}

const MessagesListMyItemOther = (props: PropsType) => {
  return (
    <div className="flex justify-end mb-[12px] mr-[8px]">
      <div className="w-fit-content w-max-[80%] py-[4px] px-[8px] bg-[#005c4b] rounded-md">
        {props.content}
      </div>
    </div>
  );
};

export default MessagesListMyItemOther;
