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
    const [titleToSearch, setTitleToSearch] = useState("");

    // Routing 
    const [searchByCategory, setSearchByCategory] = useState(null);

    // Render
    const [itemsToRender, setItemsToRender] = useState(null);


    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then( result => result.json())
        .then( data => setItems(data))
    },[])


    const searchProductCategoryUrl = ( items,searchByCategory )=>{
      return items?.filter(item=>item.category.toLowerCase() == searchByCategory.toLowerCase());
    }

    const searchProductByName = ( itemsToRender,titleToSearch )=>{
      return itemsToRender?.filter(item=>item.title.toLowerCase().includes(titleToSearch.toLowerCase()));
    }
    
    useEffect(()=>{
      setItemsToRender(searchProductByName(filteredItems,titleToSearch));
      console.log(titleToSearch);

    },[titleToSearch,filteredItems]);

    useEffect(()=>{
      if(searchByCategory=='all'){
        setFilteredItems(items);
      }else{
        console.log(searchByCategory);
        setFilteredItems(searchProductCategoryUrl(items,searchByCategory));
      }
      setItemsToRender(filteredItems);
    },[searchByCategory]);


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
        itemsToRender,
        setSearchByCategory,
        searchByCategory
      }}>
        {children}
    </ShoppingCartContext.Provider>
    );
};


export { ShoppingCartProvider, ShoppingCartContext };