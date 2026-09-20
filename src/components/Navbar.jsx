import React from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar(props) {
    return (
        <nav className='border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    TechStore
                </h1>
                <div className="flex items-center gap-6">

                    <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                        Products
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                        Orders
                    </a>
                </div>
                <ThemeToggle/>
            </div>
        </nav>
    );
}

export default Navbar;  