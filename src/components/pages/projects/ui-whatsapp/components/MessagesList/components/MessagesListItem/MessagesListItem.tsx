import React from 'react';

// Components
import MessagesListItemFirst from './MessagesListItemFirst';
import MessagesListItemOther from './MessagesListItemOther';
import MessagesListMyItemFirst from './MessagesListMyItemFirst';
import MessagesListMyItemOther from './MessagesListMyItemOther';

const messages = [
  {
    byUser: false,
    content: 'Tudo bem ?',
    first: true
  },
  {
    byUser: false,
    content: 'Como está o andamento do projeto ?',
    first: false
  },
  {
    byUser: true,
    content: 'Vai bem',
    first: true
  },
  {
    byUser: true,
    content: 'Estou trabalhando em uma nova feature',
    first: false
  },
  {
    byUser: false,
    content: 'Tudo bem ?',
    first: true
  },
  {
    byUser: false,
    content: 'Como está o andamento do projeto ?',
    first: false
  },
  {
    byUser: true,
    content: 'Vai bem',
    first: true
  },
  {
    byUser: true,
    content: 'Estou trabalhando em uma nova feature',
    first: false
  },
  {
    byUser: false,
    content: 'Tudo bem ?',
    first: true
  },
  {
    byUser: false,
    content: 'Como está o andamento do projeto ?',
    first: false
  },
  {
    byUser: true,
    content: 'Vai bem',
    first: true
  },
  {
    byUser: true,
    content: 'Estou trabalhando em uma nova feature',
    first: false
  },
  {
    byUser: false,
    content: 'Tudo bem ?',
    first: true
  },
  {
    byUser: false,
    content: 'Como está o andamento do projeto ?',
    first: false
  },
  {
    byUser: true,
    content: 'Vai bem',
    first: true
  },
  {
    byUser: true,
    content: 'Estou trabalhando em uma nova feature',
    first: false
  }
];

const MessagesListItem = () => {
  return (
    <div className="p-[18px] max-h-[calc(100vh-8rem-122px)] overflow-auto text-white text-[14px]">
      {messages.map((m) => (
        <>
          {m.byUser ? (
            // My messages
            m.first ? (
              <MessagesListMyItemFirst content={m.content} />
            ) : (
              <MessagesListMyItemOther content={m.content} />
            )
          ) : // Chat Message
          m.first ? (
            <MessagesListItemFirst content={m.content} />
          ) : (
            <MessagesListItemOther content={m.content} />
          )}
        </>
      ))}
    </div>
  );
};

export default MessagesListItem;
