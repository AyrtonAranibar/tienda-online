import "./CheckoutSideMenu.css"
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../utils";

function CheckoutSideMenu(){
    const context = useContext(ShoppingCartContext);
    let productList = context.cartProducts;
    const handleCheckOut = ()=>{
        const orderToAdd = {
            date:Date.now(),
            products: productList,
            totalProducts: productList.length,
            totalPrice: totalPrice(productList)
        }
        context.setOrder([...context.order,orderToAdd])
        context.setCartProducts([])
    }
    return(
        <aside className={` ${context.myOrder?"flex":"hidden"} product-detail  
        flex-col fixed right-0 border bg-white bg-opacity-70
        rounded-lg w-64 text-gray-800 p-4 pr-0 shadow-xl `}>
            <div className="flex justify-between items-center mb-2">
                <h2 className="detail-title font-bold text-sm">
                    My Order
                </h2>
                <div className="cursor-pointer text-gray-600 hover:text-black" onClick={()=>context.closeMyOrder()}>
                    <IoClose className="w-6 h-6 mr-2"/>
                </div>
            </div>
            <div className="overflow-y-auto flex-1">
                {productList?.map((product)=>{
                    return( 
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.image}
                        canDelete={true}
                    />)
                })}
            </div>
            <div className="flex items-center justify-between pr-4 pt-2">
                <span className="text-sm">Total:</span>
                <span className="priced font-bold text-lg">{context.cartTotalPrice}</span>
            </div>
            <div className="flex items-center justify-center">
                <Link to="my-orders/last">
                    <button className={`${productList.length?"":"hidden"} order-button w-full h-auto rounded py-1 px-2 mr-4`} onClick={()=>handleCheckOut()}>
                        Let's Buy these!
                    </button>
                </Link>
            </div>
        </aside>
    )
}
export default CheckoutSideMenu