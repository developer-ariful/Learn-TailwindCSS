import React from 'react';

function ProductCard(props) {
    return (
        <div className='overflow-hidden rounded-2xl  border-9 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800'>

        <div className="aspect-square overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJckicAlIOMpzjkRU_HqumEljcfONDaTbKRbzgAWqxCAwrS6QkZshtPOc&s=10" alt="Product" className="h-full w-full object-cover transition duration-500" />
            </div> 
            <div className="p-5">
                <h3 className="runcate text-lg font-bold text-gray-900 dark:text-white">Premium Watch</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo inventore repellendus nam vitae magni distinctio quos iste quidem vel omnis.</p>                                                                                                                                                                                                                                                                                                                                                      
                
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        $120
                    </span>
                    <div className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
                        Add to Cart
                    </div>
                </div>
                </div>  
        </div>
    );
}

export default ProductCard; 