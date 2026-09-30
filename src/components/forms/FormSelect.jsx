export default function () {
    return (
        <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium">Category</label>
            <select name="" id="category"
                className="w-full rounded-lg border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-white"
            >
                <option value="" disabled>Select a category</option>
                <option value="electronics" >Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="shoes">Shoes</option>
            </select>
        </div>
    )
}