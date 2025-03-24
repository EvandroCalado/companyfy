import { ChartNetwork, ChartNoAxesCombined, Factory } from 'lucide-react';

import { DashboardCards } from '@/components/dashboard/dashboard-cards';
import { SideMenu } from '@/components/shared/side-menu';

const data = [
  {
    id: 1,
    average: 19,
    icon: <Factory />,
    title: 'Companhias criadas',
    tooltipText: 'Companhias criadas',
    total: 10,
  },
  {
    id: 2,
    average: 30,
    icon: <ChartNoAxesCombined />,
    title: 'Total de receita',
    tooltipText: 'Total de receita',
    total: 50,
  },
  {
    id: 3,
    average: 80,
    icon: <ChartNetwork />,
    title: 'Balanço geral',
    tooltipText: 'Balanço geral',
    total: 100,
  },
];

const DashboardPage = () => {
  return (
    <main className='flex h-screen'>
      <SideMenu />

      <div className='w-full'>
        <DashboardCards />
      </div>
    </main>
  );
};

export default DashboardPage;
