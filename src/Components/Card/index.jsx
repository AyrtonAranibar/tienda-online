import "./card.css";
import producto from "../../assets/products/mouse.png";

import { FaPlus } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

function Card(){
    return(
        <div className="card w-52 h-80 relative mt-16">
            <div className="details-container w-full h-5/6 bottom-0 left-0 rounded-2xl shadow-xl absolute">
                <div className="details-info w-full bottom-0 left-0 absolute p-7 grid ">
                    <GrTechnology className="w-8 h-8 mb-4 text-gray-600" />
                    <p className="product-category text-gray-500 uppercase mb-5">technology</p>
                    
                    <div className="flex justify-between items-center flex-row gap-4">
                        <p className="text-gray-600 font-medium text-xl">Grade Equipment</p>
                        <div className="flex items-center justify-center plus-button rounded-[50%] bg-white shadow-xl"><FaPlus className="text-gray-600 " /></div>
                    </div>
                </div>
            </div>
            <div className="skewd w-7/12 h-4/5 top-0 right-0 rounded-2xl absolute">
                <div className="product-price absolute right-5 top-5 text-2xl text-gray-800">771</div>
            </div>
            <figure className="w-full mt-2 p-3">
                <img src={producto} alt="product" className="w-full h-full object-contain z-20 relative"/>
            </figure>
        </div>
    )
}
export default Card