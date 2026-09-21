import React from 'react';

function Sidebar({sidebarOpen, handleSidebarClose}) {
    return (
        <>
           <aside className={`${sidebarOpen ? ' fixed inset-y-0 left-0 z-50 w-72 ' : 'hidden'} md:border-r md:border-gray-200 bg-white lg:block dark:border-gray-800 dark:bg-gray-900`}>
                    <div className="sticky top-0 h-screen p-5">
                        <h1 className='mb-8 text-xl font-bold text-gray-900 dark:text-white flex justify-between'>
                            <span>AdminPanel</span>
                            <span>{sidebarOpen && <button className="rounded-lg p-2" onClick={handleSidebarClose}>❌</button>}</span>
                        </h1>
                        <nav className="space-y-2">
                            <a href="#" className="block rounded-lg bg-blue-50 px-4 py-3 font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                Dashboard
                            </a>
                            <a href="#" className="block rounded-lg hover:bg-gray-100 px-4 py-3 font-medium text-gray-700 dark:hover:bg-gray-800 dark:text-gray-300">
                                Products
                            </a>
                            <a href="#" className="block rounded-lg hover:bg-gray-100 px-4 py-3 font-medium text-gray-700 dark:hover:bg-gray-800 dark:text-gray-300">
                                orders
                            </a>
                            <a href="#" className="block rounded-lg hover:bg-gray-100 px-4 py-3 font-medium text-gray-700 dark:hover:bg-gray-800 dark:text-gray-300">
                                Customers
                            </a>
                        </nav>

                    </div>
                </aside> 
        </>
    );
}

export default Sidebar;