import React from 'react';

function Practice() {
    return (
        <div className='p-5'>
            <button className="bg-blue-500 px-4 py-3 hover:bg-blue-800 text-white transition-colors duration-1000">Buy Now</button>
            <button className="bg-green-500 px-4 py-3 hover:bg-green-800 text-white transition-colors duration-500 hover:scale-105">Buy Now</button>
            <br /><br />
            <button className="transition duration-500 ease-in-out hover:scale-105 border px-4 py-3">Buy Now</button>
            {/* Delay  */} <br /><br />
            <button className="transition bg-red-300 rounded-lg delay-150 duration-500 ease-in-out hover:scale-105 border px-4 py-3">Buy Now</button>
            {/* Transform  */} <br /><br />
            <button className="transition bg-yellow-300  rounded-lg delay-150 duration-500 ease-in-out hover:skew-15 border px-4 py-3">Buy Now</button>
            {/* Scale  */} <br /><br />
            <button className="transition bg-yellow-300 rounded-lg delay-150 duration-500 ease-in-out hover:scale-85 border px-4 py-3">Buy Now</button>
            {/* button animation  */}
            <button className="rounded-lg bg-blue-500 px-5 mx-5 py-3 font-semibold text-white
                transition duration-300 hover:scale-105 hover:bg-blue-800 active:scale-95
            ">Buy Now</button>
            {/* Translate  */}
            <button className="mx-5 transition hover:-translate-x-2 bg-cyan-500 p-4 py-3 text-white">Hello</button>
            <button className="mx-5 opacity-70 hover:opacity-100 transition hover:translate-y-2 bg-cyan-500 p-4 py-3 text-white">Hello</button>
            <br /><br />
            {/* Product Card Lift Effect  */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm 
                transition duration-300
                hover:-translate-y-1 hover:shadow-xl
            ">
                Product Card
            </div>
            {/* Rotate  */} <br /><br />
            <div className="transition duration-300 hover:rotate-3">⭐</div>

            {/* image Zoom  */} <br /><br />
            <div className="group overflow-hidden rounded-xl">
                <img src="https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323.jpg" alt="Product"
                    className='h-64 w-full objet-cover transition duration-500 group-hover:scale-110'
                />
            </div>

            {/* Shadow Transition  */} <br /><br />
            <div className="rounded-xl shadow-sm transition-shadow p-5 duration-300 hover:shadow-xl">Card</div>
            {/* animate-spin  */} <br /><br />
            <div className="h-52 w-52 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <div className="h-52 w-52 animate-pulse rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <br /><br />
            <div className="animate-pulse rounded-xl border p-5">
                <div className="h-48 rounded-lg bg-gray-200"></div>
                <div className="mt-4 h-5 w-3/4 rounded bg-gray-200"></div>
                <div className="mt-3 h-5 w-full rounded bg-gray-200"></div>
                <div className="mt-2 h-4 w-2/3 rounded bg-gray-200"></div>
            </div>

        </div>
    );
}

export default Practice;