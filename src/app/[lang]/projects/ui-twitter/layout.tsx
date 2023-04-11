'use client';
import './index.css';
import React, { ReactNode } from 'react';

// Components
import SidebarUITwitter from '@/components/pages/projects/ui-twitter/components/SidebarUITwitter';

const layout = (props: { children: ReactNode }) => {
  return (
    <div className="bg-white max-lg:-mx-7">
      <div className="app body font-roboto">
        <div className="layout">
          {/* SidebarUITwitter */}
          <SidebarUITwitter />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default layout;
