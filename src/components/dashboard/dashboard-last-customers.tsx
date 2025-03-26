import { Users } from 'lucide-react';

import { CustomIcon } from '../shared/custom-icon';
import { DashboardCustomersTable } from './dashboard-customers-table';

export const DashboardLastCustomers = () => {
  return (
    <section className='flex flex-col gap-4 p-5'>
      <div className='flex items-center gap-2'>
        <CustomIcon icon={Users} />
        <h2 className='text-2xl font-semibold'>Últimos clientes</h2>
      </div>

      <DashboardCustomersTable />
    </section>
  );
};
