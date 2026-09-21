import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='min-h-screen bg-gray-50 dark:bg-gray-950'>
            <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">

                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;