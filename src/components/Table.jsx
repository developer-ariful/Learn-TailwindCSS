import React from 'react';

function Table() {
    return (
        <div className='overflow-x-auto rounded-xl border'>
            <table className='min-w-[700px] w-full border-collapse'>
                <thead className="bg-gray-50">
                    <tr>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Product</th>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Price</th>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Status</th>
                        <th className='px-4 py-3 text-left text-sm font-semibold'>Action</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-medium">Wireless Headphone</td>
                        <td className="px-4 py-4">$59</td>
                        <td className="px-4 py-4">In Stock</td>
                        <td className="px-4 py-4">
                            <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-medium">Wireless Headphone</td>
                        <td className="px-4 py-4">$59</td>
                        <td className="px-4 py-4">In Stock</td>
                        <td className="px-4 py-4">
                            <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white">
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
}

export default Table;