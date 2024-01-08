import "./card.css";
import producto from "../../assets/products/mouse.png";

import { FaPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
// import { GrTechnology } from "react-icons/gr";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";

function Card(product){
    const context = useContext(ShoppingCartContext);

    const stars = product.product.rating.rate
    const starsFloor = Math.floor(stars);
    const halfStart = stars != starsFloor ? true : false;

    let starsList = []

    const showProduct = ()=>{
        context.setThisProduct(product)
        context.openProductDetail()
    }

    for (let i = 0; i < starsFloor; i++) {
        starsList.push(<FaStar className="star duration-300 text-yellow-300 inline-block" key={i}/>);
    }

    return(
        <div className="card w-52 h-80 relative mt-16 cursor-pointer" onClick={()=>showProduct()}>
            <div className="details-container w-full h-5/6 bottom-0 left-0 rounded-2xl shadow-xl absolute">
                <div className="details-info w-full bottom-0 left-0 absolute p-5 grid ">
                    {/* <GrTechnology className="w-8 h-8 mb-4 text-gray-600" /> */}
                    <p></p>
                    <p className="product-category text-gray-500 uppercase py-2">{product.product.category}</p>
                    
                    <div className="flex justify-between items-end flex-row">
                        <p className="text-gray-600 font-medium text-lg">
                            {product.product.title.length > 30
                            ? `${product.product.title.slice(0, 30)}...`
                            : product.product.title}
                        </p>
                        <div  
                            className="flex items-center justify-center plus-button rounded-[50%] bg-white shadow-xl cursor-pointer"
                            onClick={()=>{context.setCount(context.count + 1)}}>
                            <FaPlus className="text-gray-600 " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="skewd w-7/12 h-4/5 top-0 right-0 rounded-2xl absolute">
            <div className="star-container flex w-fit m-auto pt-3 mt-10 duration-300">
                {starsList}
                {
                    halfStart ? <FaStarHalf className="star text-yellow-300 inline-block"/> : null
                }
                
            </div>
            <div className="rating-count flex flex-row items-center m-auto p-3 w-fit text-gray-500 duration-300">
                <span >{product.product.rating.count}</span>
                <IoPeople  />
            </div>
                <div className="product-price absolute right-3 top-3 text-2xl text-gray-800">{product.product.price}</div>
            </div>
            <figure className="flex justify-center w-full mt-6 p-6 rounded-xl overflow-hidden">
                <img src={product.product.image} alt="product" className="h-full object-fill rounded-2xl z-20 relative"/>
            </figure>
        </div>
    )
}
export default Card