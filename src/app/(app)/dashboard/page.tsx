import { DashboardCards } from '@/components/dashboard/dashboard-cards';
import { DashboardLastCustomers } from '@/components/dashboard/dashboard-last-customers';
import { DashboardSalesDistributors } from '@/components/dashboard/dashboard-sales-distributors';

const DashboardPage = () => {
  return (
    <>
      <DashboardCards />

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <DashboardLastCustomers />
        <DashboardSalesDistributors />
      </div>
    </>
  );
};

export default DashboardPage;
