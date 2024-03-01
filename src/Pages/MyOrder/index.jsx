import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';

function MyOrder() {
    const context = useContext(ShoppingCartContext);
    let productList = context.order;
    console.log(productList);
    return (
        <Layout>
            MyOrder :v
            <div className="overflow-y-auto flex-1">
                {productList.length > 0 && productList?.slice(-1)[0].products.map((product)=>{
                    return( 
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.image}
                        canDelete={false}
                    />)
                })}
            </div>            
        </Layout>
    )
}

export default MyOrder
