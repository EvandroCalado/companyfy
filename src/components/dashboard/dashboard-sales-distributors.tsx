import { BarChart } from 'lucide-react';

import { CustomIcon } from '../shared/custom-icon';
import { DashboardGraphicSubscribers } from './dashboard-graphic-subscribers';

export const DashboardSalesDistributors = () => {
  return (
    <section className='flex flex-col gap-4 p-5'>
      <div className='flex items-center gap-2'>
        <CustomIcon icon={BarChart} />
        <h2 className='text-xl font-semibold'>Distribuidores de vendas</h2>
      </div>

      <DashboardGraphicSubscribers />
    </section>
  );
};
