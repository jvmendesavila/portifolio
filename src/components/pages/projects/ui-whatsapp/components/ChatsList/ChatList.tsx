import React from 'react';

// Components
import ChatListHeader from './components/ChatListHeader';
import ChatListBody from './components/ChatListBody';

const ChatList = () => {
  return (
    <div className="grid grid-rows-[60px_1fr] h-[calc(100vh-8rem)] w-full">
      {/* Header */}
      <ChatListHeader />

      {/* Body */}
      <ChatListBody />
    </div>
  );
};

export default ChatList;
