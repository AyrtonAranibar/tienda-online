import "./NotFound.css";
import ufoImage from "../../assets/ufo/cartoon_ufo.png"
import Layout from '../../Components/Layout';
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { NavLink } from "react-router-dom";

function NotFound() {
    const context = useContext(ShoppingCartContext);
    context.setTitleToSearch('');
    return (
        <Layout>
            <section className="not-found-content max-w-[24rem] m-auto">
                <div className="relative flex flex-col justify-center items-center w-full">
                    <h1 className="degradado">404</h1>
                    <div className="image-aura">
                        <img src={ufoImage} className="not-found-image absolute top-[-30px] left-[10%] w-52"/>
                    </div>
                    <span className="world w-full h-40 rounded-[50%] absolute bottom-5 left-0"></span>
                    <p className="not-found-subtitle text-2xl font-bold text-gray-700 m-4">We have lost this page!</p>
                    <p className="not-found-parraf text-gray-500 py-2 mx-4">Sorry, the page you're looking for doesn't exist or has been removed.</p>
                    <NavLink 
                    to='/'
                    className="not-found-button w-32 h-auto rounded py-1 px-2 mx-4 text-gray-600 flex justify-center pointer">
                        Back to Home
                    </NavLink>
                </div>
            </section>
        </Layout>
    )
}

export default NotFound
