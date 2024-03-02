import Layout from '../../Components/Layout';
import { Link } from "react-router-dom";
import OrdersCard from '../../Components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function MyOrders() {
    const context = useContext(ShoppingCartContext);
    console.log(context.order)
    return (
        <Layout>
        <div  className="w-80 m-auto">
            <div className="">
                <h1>My Orders</h1>
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
