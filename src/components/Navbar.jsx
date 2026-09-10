function Navbar(){
    return(
        <nav className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#" className="text-2xl font-bold text-blue-600">TechStore</a>
           
            <div className="hidden items-center gap-8 md:flex">
                <a href="#" className="text-gray-600 transition hover:text-blue-600">
                    Home
                </a>
                <a href="#" className="text-gray-600 transition hover:text-blue-600">
                    Products
                </a>
                <a href="#" className="text-gray-600 transition hover:text-blue-600">
                    Categories
                </a>
                <button
                    className="
                        bg-blue-600
                        text-white
                        px-5 py-2.5
                        rounded-lg
                        font-semibold
                        transition
                        hover:bg-blue-800
                    "
                >Login</button>
            </div>
            <button className="rounded-lg border px-3 py-2 md:hidden">☰</button>
            </div>
        </nav>
    )
}

export default Navbar