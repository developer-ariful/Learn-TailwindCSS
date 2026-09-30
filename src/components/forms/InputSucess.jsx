import React from 'react';

function InputSuccess() {
    return (
        <div className='space-y-2'>
            <label htmlFor="emailAddress" className='block text-sm font-medium '>Email Address</label>
            <input type="email" name="emailAddress" id="emailAddress"
                placeholder='Enter Email Address'
                className=' w-full rounded-lg border border-green-500 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500' />
            <p className='text-sm text-green-500'>
                Email Address is Valid
            </p>
        </div>
    );
}

export default InputSuccess;