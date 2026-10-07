import { useState } from "react"

export default function () {
    const [payment, setPayment] = useState("card");
    return (
        <div className="space-y-3">
            <label className={`flex items-center gap-3 rounded-xl border p-4 
            ${payment === "card"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }
            `}>
                <input type="radio" name="payment" id="card" value={"card"} checked={payment === "card"} onChange={e => setPayment(e.target.value)} />
                <span className="font-medium">Credit / Debit Card</span>
            </label>
            <label className={`flex items-center gap-3 rounded-xl border p-4 
            ${payment === "cod"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }
            `}>
                <input type="radio" name="payment" id="cod" value={"cod"} checked={payment === "cod"} onChange={e => setPayment(e.target.value)} />
                <span className="font-medium">Cash on Delivery</span>
            </label>
        </div>
    )
}