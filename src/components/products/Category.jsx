import React, { useState } from 'react';

const Category = () => {
    const [category, setCategory] = useState("all")
    return (
        <div className="mt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white">
                Category
            </h3>

            <div className="mt-3 space-y-3">

                <label className="flex items-center gap-3">
                    <input type="radio" name="category" value="all" checked={category === "all"} onChange={(e)=>setCategory(e.target.value)} />
                    <span className="text-gray-600 dark:text-gray-400">
                        All
                    </span>
                </label>
                <label className="flex items-center gap-3">
                    <input type="radio" name="category" value="electronics" checked={category === "electronics"} onChange={(e)=>setCategory(e.target.value)} />
                    <span className="text-gray-600 dark:text-gray-400">
                        Electronics
                    </span>
                </label>

                <label className="flex items-center gap-3">
                    <input type="radio" name="category" value="clothing" checked={category === "clothing"} onChange={(e)=>setCategory(e.target.value)} />
                    <span className="text-gray-600 dark:text-gray-400">
                        Clothing
                    </span>
                </label>


            </div>
        </div>

    );
};

export default Category;