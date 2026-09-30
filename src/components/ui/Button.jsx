import { useState } from "react"

export default function(){
    const [isSubmitting, setIsSubmitting] = useState(false)
    return(
        <button type="submit" className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
            {isSubmitting ? "Saving...": "Save Product" }
        </button>
    )
}