import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function MyOrder() {
    const context = useContext(ShoppingCartContext);

    let productList = context.order;
    return (
<Layout>
    <div className="w-96 m-auto">
        <Link className="flex justify-between mb-6" to={'/my-orders'}>
                <IoIosArrowBack className="cursor-pointer"/>
                <h1>My Orders</h1>
        </Link>
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
    </div>
</Layout>
    )
}

export default MyOrder
