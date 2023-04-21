'use client';
import React, { createContext, useState } from 'react';

// Types
export interface MainContextDataType {
  chat: any;
  setChat: any;
}

const MainContext = createContext<MainContextDataType>(
  {} as MainContextDataType
);

export function MainProvider({ children }: { children: JSX.Element }) {
  // States
  const [chat, setChat] = useState(null);

  return (
    <MainContext.Provider value={{ chat, setChat }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
