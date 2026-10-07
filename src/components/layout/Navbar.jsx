import { Link, useNavigate } from "react-router";
import Button from "../ui/Button";

export default function () {
    const navigate = useNavigate();
    const handleCardButton = ()=>{
        navigate("/cart")
    }
    return (

        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blue dark:border-gray-800 dark:bg-gray-900/90">
            <div className="mx-auto flex h-16 max-w-7x items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white" >
                    TechStore
                </Link>
                <div className="hidden md:flex md:items-center md:gap-6">
                    <Link to="/products" className="text-sm font-medium">Products</Link>
                    <Link to="/categories" className="text-sm font-medium">Categories</Link>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handleCardButton} className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                        🛒
                    </button>
                    {/* <button className="hidden rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-sm font-semibold text-white sm:block">Login</button> */}
                    <Button  type={"button"} variant="primary">Login</Button>
                </div>
            </div>
        </nav>
    )
}