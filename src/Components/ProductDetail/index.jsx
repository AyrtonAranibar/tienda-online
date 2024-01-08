import "./ProductDetail.css"
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function ProductDetail(){
    const context = useContext(ShoppingCartContext);
    console.log(context.thisProduct)
    let product = context.thisProduct ? context.thisProduct.product : undefined;
    return(
        <aside className={` ${context.productDetail?"":"hidden"} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl text-gray-600">
                    Detail
                </h2>
                <div className="cursor-pointer text-gray-600" onClick={()=>context.closeProductDetail()}>
                    <IoClose className="w-6 h-6"/>
                </div>
            </div> 
            <div>
            {product && (
                <>
                <p>{product.title}</p>
                <figure>
                    <img src={product.image} alt={product.title} />
                </figure>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
                </>
            )}
            </div>
        </aside>
    )
}
export default ProductDetail