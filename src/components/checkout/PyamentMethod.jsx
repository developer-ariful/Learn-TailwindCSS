export default function(){
    return(
        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-bold">
                Payment Method
            </h2>
            <label htmlFor="" className="flex cursor-pointer items-center gap-3 rounded-xl border border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-950/30">
                <input type="radio" name="payment" value={"card"} defaultChecked className="accent-indigo-600"/>
                <span>Credit / Debit Card</span>
            </label>
            <label htmlFor="" className="flex cursor-pointer items-center gap-3 rounded-xl border border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-950/30">
                <input type="radio" name="payment" value={"cod"} className="accent-indigo-600"/>
                <span>Cash on Delivery</span>
            </label>
            <label htmlFor="" className="flex cursor-pointer items-center gap-3 rounded-xl border border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-950/30">
                <input type="radio" name="payment" value={"mobile"} className="accent-indigo-600" />
                <span>Mobile Payment</span>
            </label>
        </div>
    )
}