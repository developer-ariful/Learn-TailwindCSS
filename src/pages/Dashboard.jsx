import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StartCard from '../components/dashboard/StartCard';
import { staticCards } from '../data/products';
import SalesAnalytics from '../components/dashboard/SalesAnalytics';
import RecentOrders from '../components/dashboard/RecentOrders';

const Dashboard = () => {
    return (
        <DashboardLayout>
            {/* Static Cards Section  */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {
                    staticCards.map(item => (
                        <StartCard title={item.title} value={item.value} change={item.charge} />
                    ))
                }
            </div>
            {/* Sales Analytics  */}
           <SalesAnalytics/>
           {/* Recent Orders  */}
           <RecentOrders/>
        </DashboardLayout>
    );
};

export default Dashboard;