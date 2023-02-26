import { createContext, useState, useEffect} from "react";
import PRODUCTS from '../shop-data.json'

//actual value you want to access
export const ProductsContext = createContext({//we push default value
    products: [],
    // setCurrentProducts: () => null,
}) 

//Functional component to wrap partion of code with will have access to above variables
export const ProductsProvider = ({children}) => {//Functional component
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products, setProducts};
    // useEffect(()=>{
    //     setProducts(PRODUCTS);
    // },[]);//is called when parameters in array changes []  - here is empty so it will run only once, when component mounts
    
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}




