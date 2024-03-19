// import "./ProductDetail.css"
import NotFoundImage from "../../assets/search.svg";

function ProductNotFound(){
    return(
    <div className="w-full flex flex-row justify-center items-center">
        <img src={NotFoundImage} alt="Product not found" className="w-12"></img>
        <p>Product not found</p>
    </div>
    )
}
export default ProductNotFound