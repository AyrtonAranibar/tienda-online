import "./OrdersCard.css";

import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function OrdersCard (props){
    const { id, date, totalPrice, totalProducts } = props;
    const context = useContext(ShoppingCartContext);
    
    const formatDate = (date) => {
        const formattedDate = new Date(date).toLocaleString();
        return formattedDate;
    }

    const handleDelete = (id)=>{
        context.setCartProducts(context.cartProducts.filter((product)=>product.id !== id))
    }
    return(
        <div className="order-card grid gap-1 grid-cols-2 grid-rows-2 p-4 mx-4 rounded-lg bg-white bg-opacity-50 mb-4">
            <div className="order-details flex items-center justify-center row-span-1"><MdDateRange/><span className="order-date w-full ">{(formatDate(date)).substring(0, (formatDate(date)).lastIndexOf(","))}</span></div>
            <div className="flex items-center justify-end row-span-full col-start-2"><p className="price text-2xl italic">{totalPrice}</p><IoIosArrowForward className="text-2xl"/></div>
            <div className="order-details flex items-center row-span-1 "><FaShoppingCart/><p>{totalProducts}</p></div>
        </div>
    )
}

export default OrdersCard;