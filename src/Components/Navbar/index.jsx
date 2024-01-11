import { NavLink } from "react-router-dom";
import "./navbar.css"

import { FaShoppingCart } from "react-icons/fa";

import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

function Navbar(){
    const activeStyle = 'underline underline-offset-4 ';
    const context = useContext(ShoppingCartContext)
    return(
        <nav className="nav-bar flex justify-between fixed z-10 w-full py-5 px-8 text-sm font-normal top-0">
            <ul className="flex items-center gap-3"> 
                <li className="font-semibold text-lg">
                    <NavLink  to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/all'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3 text-gray-900">
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