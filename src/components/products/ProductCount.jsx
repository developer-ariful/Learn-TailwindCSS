import React from 'react';

const ProductCount = () => {
    return (
        <div className='flex flex-col gap-2 my-2 sm:flex-row sm:items-center sm:justify-between'>
            <h2 className='text-xl font-bold text-gray-900'>Products</h2>
            <p className='text-sm text-gray-500'>120 Product Found</p>
        </div>
    );
};

export default ProductCount;