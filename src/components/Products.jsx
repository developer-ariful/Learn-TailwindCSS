import { products } from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
    return (
        <section id="products" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                        <p className="mt-3 text-gray-600">
                            Our most popular products
                        </p>
                    </div>
                    <a href="#" className="hidden font-semibold text-blue-600 hover:text-blue-700 sm:block">View All</a>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Products;