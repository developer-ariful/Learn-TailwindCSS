import React from 'react';

function DashboardHeader() {
    return (
        <header className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
            <input type="search" name="" id=""
                placeholder='Search'
                className='w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 sm:max-w-xs dark:border-gray-700 dark:bg-gray-800 dark:text-white'
            />
            <div className="flex items-center justify-between gap-4 sm:justify-end">
                <button type="button" className='rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800' aria-label='Notifications'>
                    🔔
                </button>
                <div className='flex items-center gap-3'>
                    <div className='flex size-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700'>
                        A
                    </div>
                    <div>
                        <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                            Admin
                        </p>
                        <p className='text-xs text-gray-500'>
                            Administrator
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;