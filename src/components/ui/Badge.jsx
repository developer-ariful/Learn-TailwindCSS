export default function Badge({
    children,
    variant= "default"
}){
    const variants ={
        default: "bg-gray-700 text-gray-100",
        success: "bg-green-100 text-green-700",
        warning: "bg-yellow-100 text-yellow-700",
        danger: "bg-red-100 text-red-700",
        info:"bg-blue-100 text-blue-700"
        
    }
    return(
        <div className={`rounded-full px-3 py-1 text-sm font-medium ${variants[variant]}`}>
            {children}
        </div>
    )
}