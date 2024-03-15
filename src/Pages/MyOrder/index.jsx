import "./MyOrder.css";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function MyOrder() {
    const context = useContext(ShoppingCartContext);
    let productList = context.order;

    const currentUrl = window.location.pathname;
    const orderId = currentUrl.substring( currentUrl.lastIndexOf("/") + 1)
    let ordersList = null;
    if(orderId.length > 0 && orderId != "last"){
        ordersList = productList.filter(order => order.id == orderId)
        productList = null;
    }

    return (
<Layout>
    <div className="max-w-[24rem] m-auto">
        <Link className="title-container flex justify-between mb-6 rounded-lg bg-opacity-70 bg-white p-4 mx-2 relative" to={'/my-orders'}>
                <IoIosArrowBack className="cursor-pointer text-2xl"/>
                <h1 className="order-title font-bold">My Orders</h1>
        </Link>
        <div className="overflow-y-auto flex-1 px-4">
                
            {ordersList == null && productList?.slice(-1)[0].products.map((product)=>{
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

            {productList == null && ordersList[0]?.products.map((product)=>{
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
