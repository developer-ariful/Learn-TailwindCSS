import React from 'react';

 export default function() {
    return (
        <div className='space-y-2'>
            <label htmlFor="productName"  className='block text-sm font-medium '>Product Name </label>
            <input type="text" name="productName" id="productName" 
                placeholder='Enter product name'
                className=' w-full rounded-lg border border-red-500 px-4 py-3 outline-none focus:ring-2 focus'/>
            <p className='text-xs text-gray-500'>
                Enter a descriptive product name.
            </p>
        </div>
    );
}
