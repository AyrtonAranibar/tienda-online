import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    // Cart
    const [count, setCount] = useState(0);
    // Product Detail
    const [productDetail, setProductDetail] = useState(false);
    const openProductDetail = () => {setProductDetail(true);closeMyOrder();}
    const closeProductDetail = () => setProductDetail(false);
    const [thisProduct , setThisProduct] = useState(undefined);
    const [cartProducts , setCartProducts] = useState([]);
    // My Order
    const [myOrder, setMyOrder] = useState(false);
    const toggleMyOrder = () => setMyOrder(!myOrder);
    const openMyOrder = () => {setMyOrder(true);closeProductDetail();}
    const closeMyOrder = () => setMyOrder(false);

    return (
    <ShoppingCartContext.Provider 
      value={{
        count,
        setCount,
        productDetail,
        openProductDetail,
        closeProductDetail,
        thisProduct,
        setThisProduct,
        cartProducts,
        setCartProducts,
        myOrder,
        toggleMyOrder,
        openMyOrder,
        closeMyOrder
      }}>
        {children}
    </ShoppingCartContext.Provider>
    );
};

export { ShoppingCartProvider, ShoppingCartContext };