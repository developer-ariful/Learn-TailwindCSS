import React from 'react';

function ProductCard(props) {
    return (
        <div className='overflow-hidden rounded-2xl border bg-white shadow-sm'>
            <div className='aspect-square overflow-hidden'>
                <img src="https://sonysmart.com.bd/public/uploads/all/wmAR0iWAr5pRubmvbCtS0bXtrzqhpTCD2nUxSaDN.jpg" alt="Wireless Headphone"
                    className='h-full w-full object-cover'
                />
            </div>
            <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Electronics
                </span>
                <h3 className="mt-2 truncate text-xl font-bold">
                    Wireless Noise Cancelling Headphone
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque autem molestias veniam vel quos rerum cupiditate, aut omnis commodi!
                </p>
                <div className="mt-4 flex-items-center gap-3">
                    <span className="text-xl font-bold">$59</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard; 