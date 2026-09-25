
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";

export default function () {
    return (
        <>
            <div className="mx-auto w-full max-w-7xl py-2 px-4 sm:px-6 lg:px-8">

                <div className="grid gap-8 lg:grid-cols-4">
                    {/* Filter Sidebar */}
                    <Sidebar/>
                    {/* Product Section */}
                    <Products/>
                </div>
            </div>
        </>
    )
}