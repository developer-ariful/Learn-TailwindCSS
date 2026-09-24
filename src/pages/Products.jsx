import React from 'react';
import ProductCard from '../products/ProductCard';

const Products = () => {
    return (
        <>
            <div className="w-full max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
                <div className="grid gap-8 lg:grid-cols-4">
                    <aside className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                            Filters
                        </h2>
                        {/* Category  */}
                        <div className="mt-6">

                            <h3 className="mt-6 font-semibold text-gray-900 dark:text-white">
                                Category
                            </h3>
                            <div className="mt-3 space-y-3">
                                <label htmlFor="electronic" className="flex items-center gap-3">
                                    <input type="checkbox" name="electronic" id="electronic" />
                                    <span className="text-gray-600 dark:text-gray-400">
                                        Electronics
                                    </span>
                                </label>
                                <label htmlFor="electronic" className="flex items-center gap-3">
                                    <input type="checkbox" name="electronic" id="electronic" />
                                    <span className="text-gray-600 dark:text-gray-400">
                                        Clothing
                                    </span>
                                </label>
                                <label htmlFor="electronic" className="flex items-center gap-3">
                                    <input type="checkbox" name="electronic" id="electronic" />
                                    <span className="text-gray-600 dark:text-gray-400">
                                        Accessories
                                    </span>
                                </label>
                            </div>
                        </div>
                        {/* Price  */}
                        <div className="mt-8">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Price
                            </h3>
                            <div className="mt-3 flex gap-3">
                                <input type="number" name="price" id="price" placeholder="Min" className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
                                <input type="number" name="price" id="price" placeholder="Max" className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
                            </div>
                        </div>
                    </aside>
                    <section className="lg:col-span-3">
                        <button className="rounded-lg border px-4 py-2 lg:hidden">
                            Filter
                        </button>
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className='text-gray-600 dark:text-gray-400'>24 Product Found</p>
                            <select name="" id="" className='rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'>
                                <option value="">Newest</option>
                                <option value="">Price: Low to High</option>
                                <option value="">Price: Hight to Low</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Products;