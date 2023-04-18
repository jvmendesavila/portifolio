import React from 'react';

// Components
import ChatList from './components/ChatsList';
import MessagesList from './components/MessagesList';

const UIWhatsapp = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white w-full max-w-[1600px] h-[calc(100vh-8rem)]">
        <div className="grid sm:grid-cols-1fr md:grid-cols-[minmax(360px,_480px)_minmax(480px,_1fr)]">
          {/* Left Menu */}
          <ChatList />

          {/* Right Menu */}
          <MessagesList />
        </div>
      </div>
    </div>
  );
};

export default UIWhatsapp;
