export default function(){
    return(
        <button
            disabled
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white disabled:opacity-70"
        >
            <span className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            Processing...
        </button>
    )
}