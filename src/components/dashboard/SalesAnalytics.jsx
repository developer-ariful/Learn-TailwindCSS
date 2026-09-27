import React from 'react';

const SalesAnalytics = () => {
    return (
        <div className='rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-800 dark:bg-gray-900'>
            <div className='mb-5 flex flex-wrap items-center justify-between gap-3'>
                <h2 className='text-lg font-bold text-gray-900 dark:text-white'>Sales Analytics</h2>
            <select name="" id="" className='rounded-lg border px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800'>
                <option value="">Last 7 days</option>
                <option value="">Last 30 days</option>
                <option value="">Last 12 months</option>
            </select>
            </div>
            <div className='flex h-64 items-center justify-center rounded-xl bg-gray-50 text-gray-500 dark:text-gray-800'>
                Chart goes here
            </div>
        </div>
    );
};

export default SalesAnalytics;