import "./ProductDetail.css"
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function ProductDetail(){
    const context = useContext(ShoppingCartContext);
    console.log(context.thisProduct)
    let product = context.thisProduct ? context.thisProduct.product : undefined;
    return(
        <aside className={` ${context.productDetail?"":"hidden"} product-detail flex flex-col fixed right-0 border bg-white border-black rounded-lg w-60 text-gray-800 p-6`}>
            <div className="flex justify-between items-center">
                <h2 className="detail-title font-bold text-xl">
                    Detail
                </h2>
                <div className="cursor-pointer text-gray-600" onClick={()=>context.closeProductDetail()}>
                    <IoClose className="w-6 h-6"/>
                </div>
            </div> 
            <div>
            {product && (
                <>
                <figure className="h-fit py-3">
                    <img className="rounded-lg max-h-40 m-auto object-contain" src={product.image} alt={product.title} />
                </figure>
                <p className="product-price-detail font-bold text-2xl py-1">{product.price}</p>
                <p className="product-detail-title font-bold">{product.title}</p>
                {/* <p>{product.category}</p> */}
                <p className="text-xs">{product.description}</p>
                
                </>
            )}
            </div>
        </aside>
    )
}
export default ProductDetail