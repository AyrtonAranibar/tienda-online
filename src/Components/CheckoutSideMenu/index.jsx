import "./CheckoutSideMenu.css"
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function CheckoutSideMenu(){
    const context = useContext(ShoppingCartContext);
    let productList = context.cartProducts;
    return(
        <aside className={` ${context.myOrder?"":"hidden"} product-detail flex flex-col fixed right-0 border bg-white border-black rounded-lg w-64 text-gray-800 p-4 pr-0`}>
            <div className="flex justify-between items-center mb-2">
                <h2 className="detail-title font-bold text-sm">
                    My Order
                </h2>
                <div className="cursor-pointer text-gray-600 hover:text-black" onClick={()=>context.closeMyOrder()}>
                    <IoClose className="w-6 h-6 mr-2"/>
                </div>
            </div>
            <div className="overflow-y-auto">
                {productList?.map((product)=>{
                    return( 
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.image}
                    />)
                })}
            </div>
            <div className="flex items-center justify-between pr-4 pt-2">
            <span className="text-sm">Total:</span>
            <span className="priced font-bold text-lg">{context.cartTotalPrice}</span>
                
            </div>
        </aside>
    )
}
export default CheckoutSideMenu