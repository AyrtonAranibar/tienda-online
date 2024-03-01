import { IoClose } from "react-icons/io5";
import "./OrderCard.css"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function OrderCard (props){
    const { id ,title, imageUrl, price, canDelete } = props;
    const context = useContext(ShoppingCartContext);
    
    

    const handleDelete = (id)=>{
        context.setCartProducts(context.cartProducts.filter((product)=>product.id !== id))
    }
    return(
        <div className="order-card grid gap-1 mt-4">
            <figure className="rounded-lg w-full h-full block overflow-hidden">
                <img className="w-full h-full object-cover " loading="lazy" src={imageUrl} alt="figure"></img>
            </figure>
            <div className="flex items-center text-xs font-light">
                {title} 
            </div>
            <div className="flex items-center">
                <p className="order-price text-sm font-medium">{price}</p>
            </div>
            {canDelete &&
            (<div className="flex items-center justify-center gap-2 cursor-pointer   ">
                <IoClose onClick={()=>handleDelete(id)} className="w-6 h-6"/>  
            </div>
            )}
        </div>
    )
}

export default OrderCard;