import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import PromoCode from "../components/cart/PromoCode";

export default function(){
    return(
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
                       <CartSummary/>
                       <PromoCode/>
                    </aside>
                </div>
            </div>
           
        </main>
    )
}