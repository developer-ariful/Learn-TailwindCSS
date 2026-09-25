import React, { useState } from 'react';

const Sort = () => {
    const [sort, setSort] = useState("newest");
    return (
        <select value={sort}
            onChange={(e)=>setSort(e.target.value)}
            className='border border-gray-600 px-4 py-3 rounded-xl'
        >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
        </select>
    );
};

export default Sort;