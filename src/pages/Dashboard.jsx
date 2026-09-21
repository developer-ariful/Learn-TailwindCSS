import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';

function Dashboard(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 778) {
                setSidebarOpen(false);
            }
        };

        // Run on mount to check initial screen size
        handleResize();

        // Listen for screen size changes
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleSidebarOpen =()=>{
        setSidebarOpen(true)
    }
    const handleSidebarClose = ()=>{
        setSidebarOpen(false)
    }
    return (
        <DashboardLayout>
            {/* Sidebar  */}
            <Sidebar handleSidebarClose={handleSidebarClose} sidebarOpen={sidebarOpen}/>
            <main className='p-4 lg:p-8'>
                {/* Header  */}
                <Header handleSidebarOpen={handleSidebarOpen}/>
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-2xl border bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Total Sales
                            </p>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$24,500</h3>
                        </div>
                        <div className="rounded-2xl border bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Order
                            </p>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">1,240</h3>
                        </div>
                        <div className="rounded-2xl border bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Customers
                            </p>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">8,450</h3>
                        </div>
                        <div className="rounded-2xl border bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Products
                            </p>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">540</h3>
                        </div>
                    </div>
                    <div className="mt-6 grid gap-6 xl:grid-cols-3">
                        <div className="rounded-2xl border bg-white p-6 xl:col-span-2 dark:border-gray-700 dark:bg-gray-800">
                            Sales Chart
                        </div>
                        <div className="rounded-2xl border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                            Top Products
                        </div>
                    </div>
                </div>

            </main>
        </DashboardLayout>
    );
}

export default Dashboard;