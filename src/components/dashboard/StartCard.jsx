import React from 'react';

const StartCard = ({title, value,change}) => {
    return (
        <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900'>
            <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>{title}</p>
            <div className=' mt-3 flex items-center justify-between gap-2'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>{value}</h2>
                <span className='rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700'>{change}</span>
            </div>
        </div>
    );
};

export default StartCard;