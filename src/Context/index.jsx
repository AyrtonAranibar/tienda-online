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

    // Hidde Navbar

    const [hiddeNavbar, setHiddeNavbar] = useState(false);

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

    },[titleToSearch,filteredItems]);

    useEffect(()=>{
      let localCategory = localStorage.getItem('category');
      const currentUrl = window.location.pathname;
      const categoryUrl = currentUrl.substring( currentUrl.lastIndexOf("/") + 1)
      if(searchByCategory==null && localCategory && categoryUrl != ""){
        setFilteredItems(searchProductCategoryUrl(items,localCategory));
        setItemsToRender(filteredItems);
      }else{
        if(searchByCategory=='all' || categoryUrl==""){
          setFilteredItems(items);
        }else{
          if(searchByCategory!=null){
          localStorage.setItem('category',searchByCategory);
          }
          setFilteredItems(searchProductCategoryUrl(items,searchByCategory));
        }
        setItemsToRender(filteredItems);
      }
    },[searchByCategory,items]);

    const toggleHiddeNavbar = ()=>{
      setHiddeNavbar(!hiddeNavbar);
    }
    //nota: cambiar el fondo, agregarle un my account con local storage y que cambie el correo, y cambiar el grid , volverlo responsive, paginacion.
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
        searchByCategory,
        toggleHiddeNavbar,
        hiddeNavbar
      }}>
        {children}
    </ShoppingCartContext.Provider>
    );
};


export { ShoppingCartProvider, ShoppingCartContext };