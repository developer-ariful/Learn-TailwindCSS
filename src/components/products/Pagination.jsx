import React, { useState } from 'react';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = 5;
    return (
        <div className='py-4'>
            <div className="flex flex-wrap items-center justify-center gap-2 px-4">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
                {
                    [1, 2, 3, 4, 5].map(page => (
                        <button key={page} onClick={() => setCurrentPage(page)} className={`rounded-lg px-4 py-2 ${currentPage === page ? "bg-green-600  text-white" : "border bg-white text-gray-700"}`}>{page}</button>
                    ))
                }
                <button disabled={currentPage === totalPage} onClick={() => setCurrentPage(currentPage + 1)} className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50">Next</button>
            </div>
        </div>
    );
};

export default Pagination;