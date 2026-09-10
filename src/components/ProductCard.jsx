function ProductCard({ product }) {
    return (
        <div className="relative overflow-hidden border border-gray-200 bg-white rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            {/* image */}
            <div className="group relative aspect-square overflow-hidden bg-gray-100">
                <img className="h-full w-full object-cover transition duration-300 group-hover:scale-110" src={product.image} alt={product.name} />
                {/* badge */}
                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">{product.badge}</span>
                <button className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100">❤</button>
            </div>
            {/* content */}
            <div className="p-3">
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                        <span className="ml-2 text-sm text-gray-400 line-through">${product.oldPrice}</span>
                    </div>
                    <button className="bg-blue-600 rounded-lg px-4 py-2 font-semibold text-white transition hover:bg-blue-700">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;