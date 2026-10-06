import { createBrowserRouter } from "react-router";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import App from "./App";

 const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
       
    },
    {
        path: "/cart",
        Component: Cart,
       
    },
    {
        path: "/checkout",
        Component: Checkout,
       
    }
])

export default router