import "./Home.css"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import ProductNotFound from "../../Components/ProductNotFound";

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
        <div className="p-4">
            <input className="w-72 p-2 py-3 rounded-lg shadow-lg" type="text" placeholder="Search a product by title" value={context.titleToSearch} onChange={(event)=>{
                context.setTitleToSearch(event.target.value);
            }}></input>
        </div>
        <section className="grid gap-4 p-4">
            {
                context.itemsToRender==null && context.items?.map((product)=>{
                    return <Card product={product} key={product.id}/>
                })
            }
            {
                context.itemsToRender?.map((product)=>{
                    return <Card product={product} key={product.id}/>
                })
            }
            
        </section>
        <div className="p-4 ">
            {context.itemsToRender && context.itemsToRender.length === 0 ? (
                <ProductNotFound/>
            ) : null}
        </div>
        <ProductDetail/>
        </Layout>
    )
}

export default Home