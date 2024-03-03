import "./MyOrders.css";
import Layout from '../../Components/Layout';
import { Link } from "react-router-dom";
import OrdersCard from '../../Components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
        <div  className="w-96 m-auto">
            <div className="title-container flex justify-between mb-6 rounded-lg bg-opacity-70 bg-white pt-4 pb-4 pl-4 pr-4 relative">
                <h1 className="my-orders font-bold">My Orders</h1>
            </div>

                {
                    context.order.map((order)=>(
                        <Link key={order.id} to={`/my-orders/${order.id}`}>
                            <OrdersCard
                                id = {order.id}
                                date={order.date}
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts}
                            />  
                        </Link>
                    ))
                }
            
        </div>

            
        </Layout>
    )
}

export default MyOrders
