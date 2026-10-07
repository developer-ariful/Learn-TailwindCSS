import { useState } from "react";
import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import Checkbox from "../components/forms/Checkbox";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Radio from "../components/forms/Radio";
import Select from "../components/forms/Select";
import StapeIndeicator from "../components/checkout/StepIndeicator";
import TextArea from "../components/forms/TextArea";

export default function(){
    const [currentStep, setCurrentStep] = useState(2)
    return(
        <Layout>
            <Navbar/>
            <h1>Ecommerce Website</h1>

            <LoadingSpinner/>
            <TextArea/>
            <Select/>
            <Checkbox/>
            <Radio/>
            <StapeIndeicator currentStep={currentStep}/>
        </Layout>
    )
}