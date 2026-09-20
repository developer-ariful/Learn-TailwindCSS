import React from 'react';

function Table(props) {
    return (
        <div className='overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700'>
            <table className="min-w-[700px] w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Product
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Price
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-4 py-3 text-gray-900 dark:text-white">
                            Headphone
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">$120</td>
                        <td className="px-4 py-3">
                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                Active
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
}

export default Table;