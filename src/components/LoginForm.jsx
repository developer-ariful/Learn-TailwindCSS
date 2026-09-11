import Button from "./ui/Button";
import Input from "./ui/input";

export default function LoginForm(){
    return(
        <div className="mx-auto max-w-md rounded-2xl border bg-white p-6 shadow-lg">
            <h1 className="text-2xl font-bold">Login</h1>
            <form action="" className="mt-6 space-y-5">
                <Input label={"Email"} type="email" placeholder={"Enter Email Address"}/>
                <Input label={"Password"} type="Password" placeholder={"Enter Password "}/>
                <Button className="w-full" variant="secondary" size="lg">Login</Button>
            </form>
        </div>
    )
}