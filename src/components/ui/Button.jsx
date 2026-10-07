

export default function ({ children, variant = "primary", ...props }) {
    const base = "rounded-lg px-4 py-2.5 font-medium transition";
    const variants = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        danger: "bg-red-600 text-white hover:bg-red-700"
    }
    return (
        <button className={`${base} ${variants[variant]}`} {...props}>
            {children}
        </button>
    )
}