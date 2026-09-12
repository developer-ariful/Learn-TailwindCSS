import { useState } from "react"

export default function LikeButton(){
    const[liked, setLiked] = useState(false);

    return (
        <button
            onClick={()=> setLiked(!liked)}
            className={`rounded-full px-4 py-2 ${liked ? "bg-red-500 text-white": "bg-gray-100 text-gray-700"}`}
        >
            {liked ? "Liked": "Like"}
        </button>
    )
}