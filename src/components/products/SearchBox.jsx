import React, { useState } from 'react';

const SearchBox = () => {
    const [search, setSearch] = useState("");
    return (
        <div className='relative w-full md:max-w-md'>
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                🔍
            </div>
            <input type="text" name="search" id="search" placeholder='Search Products...'
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
               className='w-full border border-gray-500 py-3 rounded-xl pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-500'
            />
        </div>
    );
};

export default SearchBox;