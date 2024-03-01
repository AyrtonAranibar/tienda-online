import { IoClose } from "react-icons/io5";
import "./OrdersCard.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function OrdersCard (props){
    const { date, totalPrice, totalProducts } = props;
    const context = useContext(ShoppingCartContext);
    
    

    const handleDelete = (id)=>{
        context.setCartProducts(context.cartProducts.filter((product)=>product.id !== id))
    }
    return(
        <div className="order-card grid gap-1 mt-4">
            <span>{date}</span>
            <p>{totalPrice}</p>
            <p>{totalProducts}</p>
        </div>
    )
}

export default OrdersCard;