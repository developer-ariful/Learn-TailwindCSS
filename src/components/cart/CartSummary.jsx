import { Link, useNavigate } from "react-router";

export default function(){

    const naviate = useNavigate();
    const subtotal = 5000;
    const shipping = 100;
    const discount=500;
    const tax = 0;

    const total = subtotal +  shipping - discount + tax;

    return(
        <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Order Summary
            </h2>

            <div className="space-y-3 border-b border-gray-200 pb-4 text-sm dark:border-gray-800">
                <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium">৳5000</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Shipping </span>
                    <span className="font-medium">৳100</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Tax</span>
                    <span className="font-medium">৳0</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Discount</span>
                    <span className="font-medium">-৳500</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                    <span>Total </span>
                    <span>৳{total.toLocaleString("en-US")}</span>
                </div>
                <button onClick={()=> naviate("/checkout")}  type="button" className=" w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-indigo-600">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}