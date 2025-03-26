import { Users } from 'lucide-react';

import { CustomIcon } from '../shared/custom-icon';
import { columns, DashboardCustomersTable } from './dashboard-customers-table';

const data = [
  {
    id: '1',
    amount: 100,
    status: 'pending' as const,
    email: 'm@example.com',
  },
  {
    id: '2',
    amount: 100,
    status: 'pending' as const,
    email: 'm@example.com',
  },
  {
    id: '3',
    amount: 100,
    status: 'pending' as const,
    email: 'm@example.com',
  },
];

export const DashboardLastCustomers = () => {
  return (
    <section className='flex flex-col gap-4 p-5'>
      <div className='flex items-center gap-2'>
        <CustomIcon icon={Users} />
        <h2 className='text-xl font-semibold'>Últimos clientes</h2>
      </div>

      <DashboardCustomersTable data={data} columns={columns} />
    </section>
  );
};
