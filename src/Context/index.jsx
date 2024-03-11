import { createContext, useState } from "react";
import { totalPrice } from "../Components/utils";
import { useEffect } from "react";

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
    // Orders
    const [order, setOrder] = useState([])
    // Functions
    const cartTotalPrice = totalPrice(cartProducts);

    // Items
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [titleToSearch, setTitleToSearch] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then( result => result.json())
        .then( data => setItems(data))
    },[])

    const searchProductByName = ( items,titleToSearch )=>{
      return items?.filter(item=>item.title.toLowerCase().includes(titleToSearch.toLowerCase()));
    }
    
    useEffect(()=>{
      setFilteredItems(searchProductByName(items,titleToSearch));
  },[titleToSearch]);

  const itemsToRender = titleToSearch?.length > 0 ? filteredItems : items;

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
        closeMyOrder,
        cartTotalPrice,
        order,
        setOrder,
        items,
        setItems,
        setTitleToSearch,
        itemsToRender
      }}>
        {children}
    </ShoppingCartContext.Provider>
    );
};


export { ShoppingCartProvider, ShoppingCartContext };