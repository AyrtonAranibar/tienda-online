import "./CheckoutSideMenu.css"
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function CheckoutSideMenu(){
    const context = useContext(ShoppingCartContext);
    let productList = context.cartProducts;
    return(
        <aside className={` ${context.myOrder?"":"hidden"} product-detail flex flex-col fixed right-0 border bg-white border-black rounded-lg w-64 text-gray-800 p-4 overflow-y-auto`}>
            <div className="flex justify-between items-center">
                <h2 className="detail-title font-bold text-sm">
                    My Order
                </h2>
                <div className="cursor-pointer text-gray-600" onClick={()=>context.closeMyOrder()}>
                    <IoClose className="w-6 h-6"/>
                </div>
            </div>
            <div>
                {productList?.map((product)=>{
                    return( 
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.image}
                    />)
                })}
            </div>
        </aside>
    )
}
export default CheckoutSideMenu