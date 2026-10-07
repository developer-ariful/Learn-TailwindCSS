import Input from "../forms/Input";
import Button from "../ui/Button";


export default function () {
    return (
        <form action="" className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 " >
            <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Shpping Information</h2>
                <p className="mt-1 text-sm text-gray-500">
                    Enter your delivery details.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
               <Input id={"firstName"} label={"First Name"} required={true} />
                <Input id={"lastName"} label={"Last Name"} required={true}/>
                <Input id={"email"} label={"Email"} type="email" required={true} md={"md:col-span-2"}/>
                <Input id={"address"} label={"Street Address"} type="textarea" required={true} md={"md:col-span-2"}/>
                <Input id={"city"} label={"City"} required={true}/>
                <Input id={"postCode"} label={"Postal Code"} required={true} />
                
            </div>
            <Button type="submit">Continue</Button>
        </form>
    )
}