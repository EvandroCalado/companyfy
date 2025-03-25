import {
  BadgeHelp,
  Calendar,
  ChartColumn,
  Circle,
  CircleHelp,
  Factory,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

export type Link = {
  id: number;
  title: string;
  href: string;
  icon: React.ReactNode;
};

export type MenuLinks = {
  title: string;
  icon: React.ReactNode;
  links: Link[];
};

export const menuLinks: MenuLinks[] = [
  {
    title: 'Geral',
    icon: <Circle />,
    links: [
      {
        id: 1,
        title: 'Painel',
        href: '/dashboard',
        icon: <LayoutDashboard />,
      },
      {
        id: 2,
        title: 'Companhias',
        href: '/companies',
        icon: <Factory />,
      },
      {
        id: 3,
        title: 'Calendário',
        href: '/schedule',
        icon: <Calendar />,
      },
    ],
  },
  {
    title: 'Ferramentas',
    icon: <Wrench />,
    links: [
      {
        id: 6,
        title: 'Faqs',
        href: '/faqs',
        icon: <CircleHelp />,
      },
      {
        id: 7,
        title: 'Analíticos',
        href: '/analytics',
        icon: <ChartColumn />,
      },
    ],
  },
  {
    title: 'Suporte',
    icon: <BadgeHelp />,
    links: [
      {
        id: 6,
        title: 'Ajustes',
        href: '/settings',
        icon: <Settings />,
      },
      {
        id: 7,
        title: 'Segurança',
        href: '/security',
        icon: <ShieldCheck />,
      },
    ],
  },
];
