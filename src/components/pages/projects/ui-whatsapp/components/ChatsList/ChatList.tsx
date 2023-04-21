import React, { useContext } from 'react';

// Components
import ChatListHeader from './components/ChatListHeader';
import ChatListBody from './components/ChatListBody';
import MainContext from '../../contexts/MainContext';

const ChatList = () => {
  // Contexts
  const { chat } = useContext(MainContext);
  return (
    <div
      className={`grid grid-rows-[60px_1fr] h-[calc(100vh-8rem)] w-full max-[640px]:${
        chat ? 'hidden' : ''
      }`}
    >
      {/* Header */}
      <ChatListHeader />

      {/* Body */}
      <ChatListBody />
    </div>
  );
};

export default ChatList;
