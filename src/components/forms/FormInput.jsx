import React from 'react';

export default function() {
    return (
        <div className='space-y-2'>
            <label htmlFor="productName" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Product Name </label>
            <input type="text" name="" id="productName" 
                placeholder='Enter product name'
                className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-white'
            />
            <p className='text-xs text-gray-500'>
                Enter a descriptive product name.
            </p>
        </div>
    );
}