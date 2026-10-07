import React from 'react';

const Input = ({ label, type = "text", id, required = false, md = "" }) => {
    return (
        <div className={md}>

            <>
                <label htmlFor={id} className="mb-2 block text-sm font-medium">
                    {label}
                </label>
                <input type={type}
                    id={id}
                    required={required}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 ouline-none  cocus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800" />
                {/* <p className='mt-2 text-sm text-red-600'>Please Enter a valide email address</p>
                        <p className='mt-2 text-sm text-green-600'>Email Looks good</p> */}

            </>
        </div>
    );
};

export default Input;