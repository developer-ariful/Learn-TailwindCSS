import React from 'react';
import Category from './products/Category';

function Sidebar(props) {
    return (
        <aside
            className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-5
                    dark:border-gray-700
                    dark:bg-gray-800
                " >
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Filters
            </h2>

            {/* Category */}
           <Category/>
            {/* Price */}
            <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                    Price
                </h3>

                <div className="my-3 flex gap-3">
                    <input
                        type="number"
                        placeholder="Min"
                        className="
                                w-full rounded-lg
                                border border-gray-300
                                px-3 py-2
                                dark:border-gray-600
                                dark:bg-gray-700
                                dark:text-white
                                "/>
                    <input
                        type="number"
                        placeholder="Max"
                        className="
                                w-full rounded-lg
                                border border-gray-300
                                px-3 py-2
                                dark:border-gray-600
                                dark:bg-gray-700
                                dark:text-white
                                "/>
                </div>
               
            </div>

        </aside>
    );
}

export default Sidebar;