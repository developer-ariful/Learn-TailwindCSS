import { useNavigate } from "react-router";
import CartItem from "../components/cart/CartItem";
import PromoCode from "../components/cart/PromoCode";
import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import Button from "../components/ui/Button";
import OrderSummary from "../components/checkout/OrderSummary";

export default function(){
    const navigate = useNavigate();
    return(
        <Layout>
            <Navbar/>
        <main min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950>
            <div className="mx-auto max-w-7xl mb-5">
                <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                  Shopping Cart  
                </h1>
                <div className=" grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
                    <section className="space-y-4 p-6">
                        <CartItem/>
                    </section>
                    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                       <OrderSummary/>
                       <PromoCode/>
                    </aside>
                </div>
                <Button onClick={()=> navigate("/checkout")}>Proceed to Checkout</Button>
            </div>
        </main>
        </Layout>
    )
}