import "./Home.css"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
    const context = useContext(ShoppingCartContext);
    // console.log(context.itemsToRender?"lleno":"vacio");
    return (
        <Layout>
        <div className="p-4">
            <input className="p-2 py-3 rounded-lg shadow-lg" type="text" placeholder="Search a product" value={context.titleToSearch} onChange={(event)=>{
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
        <ProductDetail/>
        </Layout>
    )
}

export default Home