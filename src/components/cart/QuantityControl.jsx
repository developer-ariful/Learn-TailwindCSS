import { useState } from "react";

export default function () {
    const [quantity, setQuantity] = useState(1);

    const decrease = () => {
        setQuantity((prev) => Math.max(1, prev - 1))
    }

    const increase = () => {
        setQuantity((prev) =>  prev + 1)
    }



    return (
        <div className="flex items-center rounded-lg border border-gray-300">
            <button
                onClick={decrease}
                disabled={quantity <= 1}
                type="button" aria-label="Decrease quantity" className="px-3 py-2 hover:bg-gray-100 dark:bg-gray-800">
                -
            </button>
            {quantity}
            <button
                onClick={increase}
                type="button" aria-label="Increase quantity" className="px-3 py-2 ">
                +
            </button>
        </div>
    )
}