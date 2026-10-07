import { createBrowserRouter } from "react-router";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";

 const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
       
    },
    {
        path: "/cart",
        Component: Cart,
       
    },
    {
        path: "/checkout",
        Component: Checkout,
       
    },
    {
        path: "/products",
        Component: Products
    }
])

export default router