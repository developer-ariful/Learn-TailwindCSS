import { Link, useNavigate } from "react-router";

export default function(){

    const naviate = useNavigate();
    const subtotal = 5000;
    const shipping = 100;
    const discount=500;
    const tax = 0;

    const total = subtotal +  shipping - discount + tax;

    return(
        <>
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$120</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$10</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>$135</span>
                </div>
            </div>
        </>
    )
}