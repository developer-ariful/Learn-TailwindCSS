function Button({ children, variant = "primary", size="md", className="" }) {

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        outline: "border border-gray-300 hover:bg-gray-100 text-gray-800",
    }

    const sizes ={
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3",
        lg: "px-7 py-4 text-lg",
    }

    return (
        <button className={`${variants[variant]} ${sizes[size]} font-semibold rounded-lg  transition duration-300 ${className}`}>
            {children}
        </button>
    )
}

export default Button;