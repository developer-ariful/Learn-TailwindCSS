export default function Input({ label, type="text",placeholder }) {
    return (
        <div className="space-y-3">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">{label}</label>
            <input type={type} placeholder={placeholder} 
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}