function Hero() {
    return (
        <section className="bg-gray-50">
            <div className="
                mx-auto
                grid
                max-w-7xl
                grid-cols-1
                items-center
                gap-12
                px-4
                py-20
                sm:px-6
                md:grid-cols-2
                lg:px-8
                lg:py-28
            ">
                <div>
                    <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">New Collection</span>
                    <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">Technology That
                        <span className="text-blue-600">{" "}Makes Life Better</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">Discover high-quality electronics and smart technology products at the best prices</p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <button className="bg-blue-600 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg">Shop Now</button>
                        <button className="border px-6 py-3 rounded-lg border-gray-300 font-semibold text-gray-700 transition hover:bg-gray-200">Explore Products</button>
                    </div>
                </div>
                <div className="aspect-square bg-blue-100 rounded-3xl overflow-hidden">
                    <div className="flex h-full items-center justify-center">
                        <span className="text-8xl">
                            💻
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero