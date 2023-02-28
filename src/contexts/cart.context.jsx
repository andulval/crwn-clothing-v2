import { createContext, useState, useEffect} from "react";


const addCartItem = (cartItems, productToAdd, quantityCartCounter)  => {
    // // //find if cartItems contains productToAdd
    // const itemExistIndex = cartItems1.findIndex(item => {
    //     return item.id === productToAdd.id;
    // })
    // // //if found, icrement quantity
    // if(itemExistIndex!==-1){
    //     cartItems1[itemExistIndex].quantity += 1;
    // }else{
    //     productToAdd.quantity = 1;
    //     cartItems1.push(productToAdd);
    //     //[{...productToAdd, quantity: 1}]
    // }
    // //return new array with modified cartItem / new cart item
    // return [...cartItems1]; //musi być destrukuryzaja aby React uwzglednił zmiane wartosci cartItem i pzreliczył/zrenderował ponownie całość! - gdy dasz return cartItem to nie wykryje zmian - M<USIMY ZMIENIC NIE WARTOSC A CEL PRZYPISANIA (obiekt wskazania)
    // //return [...cartItems, {...productToAdd, quantity: 1}]

    //Z KURSU - inny sposób - bez mutacji!
    //opcja BEZ MUTACJI bazowego argumentu - WRSJA PREFEROWANA
    // find if cartItems contains productToAdd
    const itemExistIndex2 = cartItems.find(item => {
        return item.id === productToAdd.id;
    })
    //if found, icrement quantity
    if(itemExistIndex2){
        return cartItems.map((item) =>
        item.id === productToAdd.id ? {...item, quantity: item.quantity += 1 } : item 
        )}
    //return new array with modified cartItem / new cart item
    return [...cartItems, {...productToAdd, quantity: 1}]
}


//actual value you want to access
export const CartContext = createContext({//we push default value
    cartItems: [],
    toggleCart: null,
    cartCount: null,
    setCartItems: () => null,
    setToggleCart: () => null,
    addItemToCart: () => null
}) 

//Functional component to wrap partion of code with will have access to above variables
export const CartProvider = ({children}) => {//Functional component
    const [cartItems, setCartItems] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    
    useEffect(()=>{
        const newCartCount = cartItems.reduce((accumulator, cartItem)=>{
            return accumulator+cartItem.quantity;
        }, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const value = {cartItems, setCartItems, toggleCart, setToggleCart, addItemToCart, cartCount};
    
    // useEffect(()=>{
    //     setProducts(PRODUCTS);
    // },[]);//is called when parameters in array changes []  - here is empty so it will run only once, when component mounts
    
    return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}




