import { IoClose } from "react-icons/io5";
import "./OrderCard.css"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function OrderCard (props){
    const { id ,title, imageUrl, price, canDelete } = props;
    const context = useContext(ShoppingCartContext);
    const canDeleteLenght = canDelete ? 4 : 3;
    const largeGrid = {
        gridTemplateColumns: `48px auto auto 24px`,
        backGroundColor: ``,
    };
    const smallGrid = {
        gridTemplateColumns: `48px auto 60px`,
    };

    const gridStyles = canDelete ? largeGrid : smallGrid;

    const handleDelete = (id)=>{
        context.setCartProducts(context.cartProducts.filter((product)=>product.id !== id))
    }


    return(
        <div className={`order-card grid mt-4 gap-2 grid-cols-${canDeleteLenght} ${canDelete==false?'bordered-div':''}`} style={gridStyles}>
            <div className="w-12 h-full flex items-center justify-center">
                <figure className="rounded-lg w-12 h-12 block overflow-hidden">
                    <img className="w-full h-full object-contain " loading="lazy" src={imageUrl} alt="figure"></img>
                </figure>
            </div>
            <div className="flex items-center jutify-center text-xs font-light">
                {title} 
            </div>
            <div className="flex items-center justify-center">
                <p className="order-price text-sm font-medium">{price}</p>
            </div>
            {canDelete &&
            (<div className="w-6 h-full flex items-center justify-center cursor-pointer   ">
                <IoClose onClick={()=>handleDelete(id)} className="w-6 h-6"/>  
            </div>
            )}
        </div>
    )
}

export default OrderCard;