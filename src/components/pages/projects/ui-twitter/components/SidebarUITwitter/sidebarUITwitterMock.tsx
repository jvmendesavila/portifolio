import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User
} from 'phosphor-react';

export const menus = [
  {
    id: '1',
    path: ['', 'tweet'],
    name: 'Home',
    href: '/projects/ui-twitter',
    icon: <House weight="fill" />
  },
  {
    id: '2',
    path: [],
    name: 'Explore',
    href: '/projects/ui-twitter',
    icon: <Hash weight="fill" />
  },
  {
    id: '3',
    path: [],
    name: 'Notifications',
    href: '/projects/ui-twitter',
    icon: <Bell weight="fill" />
  },
  {
    id: '4',
    path: [],
    name: 'Messages',
    href: '/projects/ui-twitter',
    icon: <Envelope weight="fill" />
  },
  {
    id: '5',
    path: [],
    name: 'Bookmarks',
    href: '/projects/ui-twitter',
    icon: <BookmarkSimple weight="fill" />
  },
  {
    id: '6',
    path: [],
    name: 'Lists',
    href: '/projects/ui-twitter',
    icon: <FileText weight="fill" />
  },
  {
    id: '7',
    path: [],
    name: 'Profile',
    href: '/projects/ui-twitter',
    icon: <User weight="fill" />
  },
  {
    id: '8',
    path: [],
    name: 'More',
    href: '/projects/ui-twitter',
    icon: <DotsThreeCircle weight="fill" />
  }
];
