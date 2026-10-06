import React from 'react';

const FormInput = ({ label, type = "text", id, required = false, md = "" }) => {
    return (
        <div className={md}>
            {
                type === "textarea" ? (
                    <>
                    <label htmlFor={id} className="mb-2 block text-sm font-medium">
                        {label}
                    </label>
                    <textarea
                        rows={3}
                        id={id}
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 ouline-none  cocus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800" />
               
                    </>
                ) : (
                    <>
                        <label htmlFor={id} className="mb-2 block text-sm font-medium">
                            {label}
                        </label>
                        <input type={type}
                            id={id}
                            required={required}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 ouline-none  cocus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800" />

                    </>)
            }
        </div>
    );
};

export default FormInput;