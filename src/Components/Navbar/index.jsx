import { NavLink } from "react-router-dom";
import "./Navbar.css"

import { FaShoppingCart } from "react-icons/fa";

import { ShoppingCartContext } from "../../Context";
import { useContext, useEffect } from "react";

function Navbar(){
    const activeStyle = 'underline underline-offset-4 ';
    const context = useContext(ShoppingCartContext)
    useEffect(()=>{
        context.setCount(context.cartProducts.length)
    },[context.cartProducts]);
    return(
        <nav className="nav-bar flex justify-between fixed z-10 w-full py-5 px-8 text-sm font-normal top-0
                        bg-gradient-to-b from-white">
            <ul className="flex items-center gap-3 z-10"> 
                <li className="font-semibold text-lg">
                    <NavLink  
                    to='/'
                    onClick={()=>context.setSearchByCategory("all")}
                    
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/all'
                    onClick={()=>context.setSearchByCategory("all")}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/mens-clothing'
                    onClick={()=>context.setSearchByCategory("men's clothing")}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/womens-clothing'
                    onClick={()=>context.setSearchByCategory("women's clothing")}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Women's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/jewelery'
                    onClick={()=>context.setSearchByCategory('jewelery')}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={()=>context.setSearchByCategory('electronics')}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>

                {/* <li>
                    <NavLink 
                    to='/others'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li> */}
            </ul>
            <ul className="flex items-center gap-3 text-gray-900  z-10">
                <li className="text-black/60">
                    lorem@gmail.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li 
                    className="flex items-center cursor-pointer"
                    onClick={()=>context.toggleMyOrder()}>
                    <FaShoppingCart/>{context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar