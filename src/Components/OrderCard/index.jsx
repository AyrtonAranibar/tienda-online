import { IoClose } from "react-icons/io5";
import "./OrderCard.css"
function OrderCard (props){
    const { title, imageUrl, price } = props;
    return(
        <div className="order-card grid gap-1 mt-4">
            <figure className="rounded-sm w-full h-full block">
                <img className="w-full h-full object-cover " src={imageUrl} alt="figure"></img>
            </figure>
            <div className=" text-xs font-light">
                {title} 
            </div>
            <div className="flex items-center">
                <p className="order-price text-sm font-medium">{price}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <IoClose className="w-6 h-6"/>  
            </div>
        </div>
    )
}

export default OrderCard;