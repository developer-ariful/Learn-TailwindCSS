export default function () {
    return (
        <div className="space-y-3">
            <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Promo Code</label>
            <div className="flex gap-2">
                <input type="text" className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none foucus:border-indigo-500/20 dark:border-gray-700 dark:bg-gray-800" />
                <button
                    className="rounded-lg bg-gray-900 px-4 py-1 text-sm font-semibold text-white hover:bg-gray-700 dark:bg-indigo-600 dark:hover-bg-indigo-500 "
                >Apply</button>
            </div>
            <p className="text-sm text-green-600">
                Coupon Applied Successfully
            </p>
        </div>
    )
}