import Radio from "../forms/Radio";

export default function(){
    return(
        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-bold">
                Payment Method
            </h2>
            <Radio/>
        </div>
    )
}