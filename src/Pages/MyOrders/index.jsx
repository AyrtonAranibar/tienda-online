import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import Layout from '../../Components/Layout';
import { Link } from "react-router-dom";
import OrdersCard from '../../Components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartProvider } from '../../Context'

function MyOrders() {
    const context = useContext(ShoppingCartProvider);
    
    return (
        <Layout>
        <div>
            <div className=" w-80 m-auto" >
                <Link className="flex justify-between" to={'/my-order'}>
                    <IoIosArrowBack className="cursor-pointer"/>
                    <h1>My Orders</h1>
                </Link>
            </div>
                {/* {
                    context.order.map((order)=>{
                        <Link key={order.id} to={`/my-orders/${order.id}`}>
                            <OrdersCard
                                date={order.date}
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts}
                            />  
                        </Link>
                    })
                } */}
        </div>

            
        </Layout>
    )
}

export default MyOrders
