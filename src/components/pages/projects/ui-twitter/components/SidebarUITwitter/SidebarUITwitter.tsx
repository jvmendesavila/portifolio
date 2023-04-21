import './index.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Mocks
import { menus } from './sidebarUITwitterMock';

// Assets
import twitterLogo from '@/assets/images/projects/ui-twitter/logo-twitter.svg';
import { Pencil } from 'phosphor-react';

const SidebarUITwitter = () => {
  const currentRoute = usePathname()?.split('/')[4] || '';
  return (
    <aside className="sidebar">
      <Image alt="Logo" src={twitterLogo} className="logo" />
      <nav className="main-navigation">
        {menus.map(({ id, href, path, name, icon }) => (
          <Link key={id} href={href} className={path.length ? 'active' : ''}>
            {icon}
            <span>{name}</span>
          </Link>
        ))}
      </nav>
      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
};

export default SidebarUITwitter;
