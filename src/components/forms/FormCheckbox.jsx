export default function(){
    return(
        <>
        <label htmlFor="" className="flex items-center gap-3">
            <input type="checkbox" name="" id="" className="size-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Publish this product</span>
        </label>
        <div className="space-y-3">
            <p className="text-sm font-medium">Products Status</p>
            <label htmlFor="active" className="flex items-center gap-3">
                <input type="radio" name="status" id="active" />
                <span>Active</span>
            </label>
            <label htmlFor="draft" className="flex items-center gap-3">
                <input type="radio" name="status" id="draft" />
                <span>Draft</span>
            </label>
        </div>
        </>
    )
}