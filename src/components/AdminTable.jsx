import React from 'react';

function AdminTable(props) {
    return (
        <div className='overflow-x-auto rounded-xl border bg-white'>
            <table className='min-w-[800px] w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Customer </th>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Order ID</th>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Total </th>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Status </th>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4 py-4 font-medium'>#ORD-1001 </td>
                        <td className='px-4 py-4 max-w-[200px] truncate px-4 py-4'>Abdul Rahman </td>
                        <td className='px-4 py-4 '>$249</td>
                        <td className='px-4 py-4 '><span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">Paid </span></td>
                        <td className='px-4 py-4 '><button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white">View</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdminTable;