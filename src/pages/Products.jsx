import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import ProductGrid from "../components/products/ProductGrid";

export default function(){
    return(
        <Layout>
            <Navbar/>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
                <aside>
                    Filter
                </aside>
                <section>
                   <ProductGrid/>
                </section>
            </div>
        </Layout>
    )
}