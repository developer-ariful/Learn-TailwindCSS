import PyamentMethod from "../components/checkout/PyamentMethod";
import ShippingForm from "../components/checkout/ShippingForm";

export default function(){
    return(
        <main min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950>
            <div className="mx-auto max-w-7xl mb-5">
                <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                    Choutout Product
                </h1>
                <div className=" grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
                    <section className="space-y-4 p-6">
                        <ShippingForm/>
                    </section>
                    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                       <PyamentMethod/>
                    </aside>
                </div>
            </div>
        </main>
    )
}