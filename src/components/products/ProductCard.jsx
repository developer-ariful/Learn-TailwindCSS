export default function(){
    return(
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 darK:bg-gray-900">
            <img src="https://nayontelecom.com.bd/uploads/product/gallery/202603071512037925.png" alt="Wireless headphone" className="aspect-square w-full object-cover" />

            <div className="p-4">
                <p className="text-sm text-gray-500">
                    Electronics
                </p>
                <h3 className="mt-1 font-semibold">
                    Wireless Headphone
                </h3>
                <div className="mt-3 flex items-center justify-between">
                    <span className="mt-3 flex items-center justify-between"> $49</span>
                    <div className="rounded-lg bg-black px-3 py-2 text-sm text-white">Addw</div>
                </div>
            </div>
        </article>
    )
}