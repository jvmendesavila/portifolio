import React from 'react';

interface PropsType {
  content: string;
}

const MessagesListItemOther = (props: PropsType) => {
  return (
    <div className="flex justify-start mb-[12px] ml-[8px]">
      <div className="w-fit-content w-max-[80%] py-[4px] px-[8px] bg-[#202c33] rounded-md">
        {props.content}
      </div>
    </div>
  );
};

export default MessagesListItemOther;
