import React from 'react';
import { menuItems } from '../../data/products';

const Sidebar = () => {
    return (
        <aside className='border-r border-gray-200 bg-white bg:block dark:border-gray-800 dark:bg-gray-900 p-4'>
            <h1 className='mb-8 text-2xl font-bold text-blue-600'>TechStore</h1>

            <nav className="space-y-2">
                {menuItems.map((item)=>(
                    <a key={item} href='#'
                        className={`block rounded-xl px-4 py-2 text-sm font-medium transition ${
                            item === "Dashboard"
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        }`}
                    >
                      {item}  
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;