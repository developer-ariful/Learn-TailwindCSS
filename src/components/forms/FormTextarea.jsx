export default function(){
    return (
        <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">Description</label>
            <textarea name="" id="description" rows={4}
                placeholder="Enter product description"
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
            </textarea>
        </div>
    )
}