import { DashboardCards } from '@/components/dashboard/dashboard-cards';
import { DashboardLastCustomers } from '@/components/dashboard/dashboard-last-customers';

const DashboardPage = () => {
  return (
    <>
      <DashboardCards />
      <div>
        <DashboardLastCustomers />
      </div>
    </>
  );
};

export default DashboardPage;
