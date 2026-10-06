import QuantityControl from "./QuantityControl";

export default function () {
    
    return (
        <div className="flex justify-between space-x-2 items-center">
            <img src="https://www.ryans.com/storage/products/main/wiwu-elite-white-on-ear-bluetooth-headphone-11730117950.webp" alt="Headphone" className="h-24 w-24 rounded-lg object-cover" />

            <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">Smart Wireless Headphone</h3>
                <p className="mt-1 text-lg font-bold text-indigo-600">
                    ৳ ৮২০
                </p>
            </div>
            <div className="flex  items-center justify-between gap-3">
                <QuantityControl/>
                <button type="button" onClick={()=> onpointermove(1)}
                    aria-label={`Remover Headphone`}
                    className="rounded p-2 hover:bg-red-50 dark:hover:bg-red-950 bg-gray-50"
                    >
                    Remove
                </button>
            </div>
        </div>
    )
}