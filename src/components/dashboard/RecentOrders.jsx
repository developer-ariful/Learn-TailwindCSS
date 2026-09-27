import React from 'react';

const RecentOrders = () => {
    return (
        <div className='overflow-x-auto rounded-2xl border border-gray-200 bg-white dark:border-gray-800'>
            <table className='w-full min-w-[650px] text-left text-sm'>
                <thead className='bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300'>
                    <tr>
                        <th className='px-5 py-4'>Order ID</th>
                        <th className='px-5 py-4'>Customer</th>
                        <th className='px-5 py-4'>Amount</th>
                        <th className='px-5 py-4'>Status</th>
                    </tr>
                </thead>
                <tbody className='divided-y divide-gray-200 dark:divide-gray-800'>
                    <tr className='hover:bg-gray-50 dark:hover:bg-gray-800'>
                        <td className='px-5 py-4'>#ORD-101</td>
                        <td className='px-5 py-4'>Rahim</td>
                        <td className='px-5 py-4'>$120</td>
                        <td className='px-5 py-4'>
                            <span className='rounded-full bg-green-100 px-3 py-1 text-xs text-green-700'>
                                Paid
                            </span>
                        </td>
                    </tr>
                    <tr className='hover:bg-gray-50 dark:hover:bg-gray-800'>
                        <td className='px-5 py-4'>#ORD-102</td>
                        <td className='px-5 py-4'>Ab.Jalil</td>
                        <td className='px-5 py-4'>$100</td>
                        <td className='px-5 py-4'>
                            <span className='rounded-full bg-red-100 px-3 py-1 text-xs text-green-700'>
                                Unpaid
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrders;