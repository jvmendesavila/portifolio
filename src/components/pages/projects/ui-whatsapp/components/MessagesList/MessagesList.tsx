import React from 'react';

// Components
import MessagesListInput from './components/MessagesListInput';
import MessagesListHeader from './components/MessagesListHeader';
import MessagesListItem from './components/MessagesListItem';

const MessagesList = () => {
  return (
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
  );
};

export default MessagesList;
