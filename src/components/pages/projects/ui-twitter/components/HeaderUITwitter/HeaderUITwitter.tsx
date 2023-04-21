import './index.css';
import React from 'react';
import { Sparkle } from 'phosphor-react';

const HeaderUITwitter = (props: { title: string }) => {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle />
    </div>
  );
};

export default HeaderUITwitter;
