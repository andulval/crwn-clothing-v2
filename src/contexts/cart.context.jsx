import { createContext, useState, useEffect} from "react";

//actual value you want to access
export const CartContext = createContext({//we push default value
    cart: [],
    toggleCart: null,
    setCart: () => null,
    setToggleCart: () => null,
}) 

//Functional component to wrap partion of code with will have access to above variables
export const CartProvider = ({children}) => {//Functional component
    const [cart, setCart] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);
    const value = {cart, setCart, toggleCart, setToggleCart};
    // useEffect(()=>{
    //     setProducts(PRODUCTS);
    // },[]);//is called when parameters in array changes []  - here is empty so it will run only once, when component mounts
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}




