function Categories(){
    const categories = [
        {
            icon: "💻",
            name: "Laptops"
        },
        {
            icon: "📱",
            name: "Smartphones"
        },
        {
            icon: "🎧",
            name: "Headphones"
        },
        {
            icon: "⏱️",
            name: "Smart Watch"
        },
    ]
    return(
        <section id="categories" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Shop By Category</h2>
                    <p className="mt-3 text-gray-600">Find the right technology for your needs</p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {
                        categories.map((category)=>(
                            <div key={category.name} className="rounded-2xl border border-gray-200 p-6 text-center transition hover:-transition-y-1 hover:border-blue-300 hover:shadow-lg">
                                <div className="text-5xl">{category.icon}</div>
                                <h3 className="mt-4 font-semibold text-gray-800">{category.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories;