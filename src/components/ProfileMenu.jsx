import { useState } from "react"

export default function ProfiledMenu(){
    const [open, setOpen]= useState(false)
    return(
        <div className="relative">
            <button
                onClick={()=>setOpen(!open)}
            className="rounded-lg border px-4 py-2">
                Profile
            </button>
            {
                open && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl border bg-white p-2 shadow-lg">
                        <button className="block w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
                            Profile
                        </button>
                        <button className="block w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
                            Settings
                        </button>
                        <button className="block w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
                            Logout
                        </button>
                    </div>
                )
            }
        </div>
    )
}