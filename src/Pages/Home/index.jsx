import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import { useEffect, useState } from "react"


function Home() {
    const [items, setItems] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then( result => result.json())
        .then( data => setItems(data))
    },[])

    return (
        <Layout>
        {
            items?.map((product)=>{
                return <Card product={product} key={product.id}/>
            })
        }
        <ProductDetail/>
        </Layout>
    )
}

export default Home