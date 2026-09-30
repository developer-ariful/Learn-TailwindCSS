import React from 'react';
import Input from './forms/FormError';
import InputSuccess from './forms/InputSucess';
import Select from './forms/FormSelect';
import Textarea from './forms/FormTextarea';
import Checkbox from './forms/FormCheckbox';
import Button from './ui/Button';
import MultiStepForm from './forms/FormStepper';

const ProductForm = () => {
    return (
        <div className='mx-auto w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900'>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Add New Product</h1>
            <p className='mt-2 text-sm text-gray-500'>
                Enter the product information below
            </p>
            <form action="" className='mt-8 space-y-8'>
                {/* form section  */}
                <Input/>
                <InputSuccess/>
                <Select/>
                <Textarea/>
                <Checkbox/>
                <MultiStepForm/>
                <Button/>
            </form>
        </div>
    );
};

export default ProductForm;