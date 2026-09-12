import LikeButton from "./components/LikeButton";
import LoginForm from "./components/LoginForm";
import ProfiledMenu from "./components/ProfileMenu";

export default function () {
    return (
        <>
            {/* <LoginForm/> */}
            <button className="rounded-lg bg-blue-600 px-5 py-3 text-white transition duration-300 hover:bg-blue-700 hover:scale-110">
                Buy Now
            </button>
            <br /><br />
            <div className="rounded-xl border p-5 transition hover:-translate-y-1 hover:shadow-xl">
                Product Card
            </div>

            <br /><br />
            <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />

            <br /><br />
            <button className="rounded-lg bg-blue-600 px-5 py-3 text-white transition active:scale-90">
                Submit
            </button>

            <br /><br />
            <button disabled className=" rounded-lg bg-blue-600 px-5 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50">
                Processing...
            </button>
            <br /><br />
            <button className="bg-blue-600 hover:bg-gray-700 focus:ring-red-500 px-5 py-3 text-white focus:ring-2">Submit</button>
            <br /><br />
            <div className="group overflow-hidden rounded-xl">
                <img src="https://images.samsung.com/is/image/samsung/p6pim/bd/ua43f6000frser/gallery/bd-fhd-f6000-ua43f6000frser-548275905?$624_468_PNG$" alt="Product"
                    className="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
                />
            </div>

            <br /><br />
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                        src="https://www.hoco.com.bd/wp-content/uploads/2026/03/Hoco-ESD35-Pro-Max-ANC-Bluetooth-Headphone.webp"
                        alt="Wireless Headphone"
                        className="
                        h-full w-full object-cover transition duration-300 group-hover:scale-110
                    "
                    />
                </div>
                <div className="p-5">
                    <h3 className="text-lg font-bold">Wireless Headphone</h3>
                    <p className="mt-2 text-gray-500">
                        Premium wireless headphone
                    </p>
                </div>
            </div>

            <br /><br />
            <div className="group rounded-2xl border p-5">
                <h3 className="text-gray-800 transition group-hover:text-blue-600">
                    Wireless Headphone
                </h3>
                <p className="mt-2 text-gray-500">
                    Premium headphone
                </p>
            </div>

            <br /><br />
            <div>
                <input type="checkbox" name="" id="" className="peer mr-2" />
                <span className="peer-checked:text-blue-600">Remember me</span>
            </div>
            <br /><br />
            <label htmlFor="" className="flex cursor-pointer items-center gap-3">
                <input type="checkbox" name="" id="" className="peer sr-only" />
                <span className="w-5 h-5 rounded border border-gray-300 peer-checked:border-blue-600 peer-checked:bg-blue-600"></span>
                <span className="text-gray-700">
                    Remember Me
                </span>
            </label>
            <br /><br />
            <ProfiledMenu />
            <br /><br />
            <LikeButton/>
            <br /><br />
        </>
    )
}