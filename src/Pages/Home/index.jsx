import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
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
        </Layout>
    )
}

export default Home