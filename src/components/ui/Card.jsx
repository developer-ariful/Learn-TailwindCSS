function Card({children}){
    return(
        <div className="border border-gray-200 bg-white p-5 shadow-sm rounded-2xl">
            {children}
        </div>
    )
}

export default Card;