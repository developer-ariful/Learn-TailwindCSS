import ProductCard from "./ProductCard";

export default function(){
    return(
        <div className="grid-cols-1 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}