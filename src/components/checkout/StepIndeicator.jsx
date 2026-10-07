import { useState } from "react";

export function StepIndeicatorItem({ currentStep, handleStep }) {
    const setps = ["Customer", "Shipping", "Payment"];

    return (
        <div className="mb-8 flex items-center justify-between">
            {
                setps.map((step, index) => {
                    const stepNumber = index + 1;
                    const active = currentStep >= stepNumber;

                    return (
                        <div key={step} className="flex flex-1 items-center">
                            <button onClick={()=>handleStep(stepNumber)} className={`flex size-10 items-center justify-center rounded-full text-sm font-bold ${active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                                }`}>
                                {stepNumber}
                            </button>
                            {
                                index < setps.length - 1 && (
                                    <div
                                        className={`mx-2 h-1 flex-1 ${currentStep > stepNumber ? "bg-blue-600" : "bg-gray-200"}`}
                                    />
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default function StepIndeicator() {
    const [currentStep, setCurrentStep] = useState(2)
    const handleStep = (idx)=>{
        setCurrentStep(idx)
    }
    return (
        <div>
            <StepIndeicatorItem currentStep={currentStep} handleStep={handleStep} />
            {/* <button className="rounded-xl border px-6 py-3 disabled:opacity-50" onClick={() => setCurrentStep(step => step -1)} disabled={currentStep === 1}>Back</button>
            <button className="rounded-xl bg-blue-600 px-6 py-3 text-white" onClick={() => setCurrentStep(step => step + 1)} >Continue</button> */}
        </div>
    )
}