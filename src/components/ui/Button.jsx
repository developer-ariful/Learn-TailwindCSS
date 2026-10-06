

export default function({children, type="button"}){
    return(
        <button type={type} className="rounded-lg bg-blue-600 px-6 py-3 cursor-pointer text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50">
           {children}
        </button>
    )
}