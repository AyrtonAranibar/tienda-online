import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    // Cart
    const [count, setCount] = useState(0);
    // Product Detail
    const [productDetail, setProductDetail] = useState(false);
    const openProductDetail = () => setProductDetail(true);
    const closeProductDetail = () => setProductDetail(false);
    const [thisProduct , setThisProduct] = useState(undefined);
    const [cartProducts , setCartProducts] = useState([]);

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
        setCartProducts
      }}>
        {children}
    </ShoppingCartContext.Provider>
    );
};

export { ShoppingCartProvider, ShoppingCartContext };