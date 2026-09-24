import React from 'react';

function ProductCard() {
    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300">
            <div className="aspect-square overflow-hidden">
                <img className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtxwj9jbOXmzJ992X-0vikZ0ykgvUYUYw1Z4INB8Zcg&s=10" alt="Product" />
            </div>
            <div className="p-5">
                <h3 className="truncate text-lg font-bold text-gray-900 dark:text-white">
                    Premium Wireless Headphone
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    Hight-quality wireless headphone with premium sound and long battery life
                </p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">$120</span>
                    <button className="bg-blue-600 px-4 py-2 rounded-lg font-semibold text-semibold text-white transition hover:bg-blue-700 active:scale-95">Add</button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;