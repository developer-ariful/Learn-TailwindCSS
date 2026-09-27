import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = ({ children }) => {
    return (
        <div className='min-h-screen bg-gray-50 dark:bg-ray-950'>
            <div className='grid min-h-screen lg:grid-cols-[260px_1fr]'>
                <Sidebar/>
                <main className="min-w-0">
                   <DashboardHeader/>
                    <div className='mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;