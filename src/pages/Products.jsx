import React from 'react';
import ProductCard from '../components/products/ProductCard';
import Pagination from '../components/products/Pagination';
import SearchBox from '../components/products/SearchBox';
import Sort from '../components/products/Sort';
import ProductCount from '../components/products/ProductCount';

function Products(props) {
    return (
        <section className="lg:col-span-3">
            <div className=' mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                <SearchBox />
                <Sort />
            </div>
            <ProductCount/>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
            <Pagination />
        </section>
    );
}

export default Products;