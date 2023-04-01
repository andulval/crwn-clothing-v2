import { createContext, useState, useEffect, useReducer } from "react";
import {createAction} from '../utils/reducer/reducer.utils'

const addCartItem = (cartItems, productToAdd) => {
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
  const itemExistIndex2 = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });
  //if found, icrement quantity
  if (itemExistIndex2) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: (item.quantity += 1) }
        : item
    );
  }
  //return new array with modified cartItem / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  //Z KURSU - inny sposób - bez mutacji! (czyli bez nadpisywania orginalnych wartosci - react nie wie wtedy ze dana zmienna (tu array) sie zmienila - musi zmienic sie odnośnik)
  //opcja BEZ MUTACJI bazowego argumentu - WRSJA PREFEROWANA

  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToRemove.id;
  });

  //if item quantity is equal 1 -> remove item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== existingCartItem.id);
  }

  //if found, icrement quantity
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: (item.quantity -= 1) }
        : item
    );
  }
  //return new array with modified cartItem / new cart item
  return [...cartItems, { ...productToRemove, quantity: 1 }];
};

const removeCartAllQuantities = (cartItems, productToRemove) => {
  // console.log('cartItems bfr', cartItems)
  // find if cartItems contains productToAdd
  const newItem = cartItems.filter((item) => {
    return item.id !== productToRemove.id; // ? false : true;
  });
  // console.log('cartItems bfr', [...newItem])
  return [...newItem];
  //   //if found, icrement quantity
  //   if (itemExist) {
  //     const newCart = cartItems.map((item) =>{
  //       if(item.id !== productToRemove.id){
  //         return item;
  //       }});
  //       console.log('newCart', newCart)
  //       return [...newCart];
  //   }
  //     //return new array with modified cartItem / new cart item
  //     return [...cartItems];
};

//actual value you want to access - in GLOBAL scope
export const CartContext = createContext({
  //we push default value
  cartItems: [],
  toggleCart: null,
  cartCount: null,
  totalPrice: null,
  cartAnime: null,
  setCartAnime: () => null,
  setCartItems: () => null,
  setToggleCart: () => null,
  addItemToCart: () => null,
});

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART: "TOGGLE_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
  toggleCart: false, //false
  cartCount: null,
  totalPrice: 0,
  cartAnime: false,
};

//Functional component to wrap partion of code with will have access to above variables
export const CartProvider = ({ children }) => {
  //Functional component

  //   const [cartItems, setCartItems] = useState([]);
  //   const [toggleCart, setToggleCart] = useState(false);
  //   const [cartCount, setCartCount] = useState(0);
  //   const [totalPrice, setTotalPrice] = useState(0);
  const [cartAnime, setCartAnime] = useState(false);

  const [{ cartItems, toggleCart, cartCount, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);
  // lub zostawic [state, dispatch] ==> i dać:
  // const {cartItems} = state

  //  const addItemToCart = (productToAdd) => {
  //     setCartItems(addCartItem(cartItems, productToAdd));
  //   };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity;
    }, 0);
    const newTotalPrice = newCartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity * cartItem.price;
    }, 0);
    dispatch(
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItems: newCartItems,
            cartCount: newCartCount,
            totalPrice: newTotalPrice,
        }));
  };

  const addItemToCart = (productToAdd) => {
    //     setCartItems(addCartItem(cartItems, productToAdd));
    updateCartItemsReducer(addCartItem(cartItems, productToAdd));
  };

  const removeOneCartItem = (productToRemove) => {
    updateCartItemsReducer(removeCartItem(cartItems, productToRemove));
    // setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeItemfromCart = (productToRemove) => {
    // setCartItems(removeCartAllQuantities(cartItems, productToRemove));
    updateCartItemsReducer(removeCartAllQuantities(cartItems, productToRemove));
  };

  const setToggleCart = (toggleCart)=>{
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART, {
        toggleCart: toggleCart
    }));
  }
  //   useEffect(() => {
  //     cartSetUpReducer(cartItems);
  //   }, [cartItems]);

  //   useEffect(() => {
  //     const newCartCount = cartItems.reduce((accumulator, cartItem) => {
  //       return accumulator + cartItem.quantity;
  //     }, 0);
  //     // setCartCount(newCartCount);
  //     dispatch({type: CART_ACTION_TYPES.CART_COUNT, payload: {cartItems, productToAdd: newCartCount}})
  //   }, [cartItems]);

  //   useEffect(() => {
  //     const newTotalPrice = cartItems.reduce((accumulator, cartItem) => {
  //       return accumulator + cartItem.quantity * cartItem.price;
  //     }, 0);
  //     setTotalPrice(newTotalPrice);
  //   }, [cartItems]);

  useEffect(() => {
    //anime effect - scale up and down cart icon
    setCartAnime(true);
    setTimeout(() => {
      setCartAnime(false);
    }, 500);
  }, [cartItems]);

  const value = {
    cartItems,
    // setCartItems,
    toggleCart,
    setToggleCart,
    addItemToCart,
    cartCount,
    totalPrice,
    removeOneCartItem,
    removeItemfromCart,
    cartAnime,
    setCartAnime,
  };

  // useEffect(()=>{
  //     setProducts(PRODUCTS);
  // },[]);//is called when parameters in array changes []  - here is empty so it will run only once, when component mounts

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// import { createContext, useState, useEffect } from "react";

// const addCartItem = (cartItems, productToAdd) => {
//   // // //find if cartItems contains productToAdd
//   // const itemExistIndex = cartItems1.findIndex(item => {
//   //     return item.id === productToAdd.id;
//   // })
//   // // //if found, icrement quantity
//   // if(itemExistIndex!==-1){
//   //     cartItems1[itemExistIndex].quantity += 1;
//   // }else{
//   //     productToAdd.quantity = 1;
//   //     cartItems1.push(productToAdd);
//   //     //[{...productToAdd, quantity: 1}]
//   // }
//   // //return new array with modified cartItem / new cart item
//   // return [...cartItems1]; //musi być destrukuryzaja aby React uwzglednił zmiane wartosci cartItem i pzreliczył/zrenderował ponownie całość! - gdy dasz return cartItem to nie wykryje zmian - M<USIMY ZMIENIC NIE WARTOSC A CEL PRZYPISANIA (obiekt wskazania)
//   // //return [...cartItems, {...productToAdd, quantity: 1}]

//   //Z KURSU - inny sposób - bez mutacji!
//   //opcja BEZ MUTACJI bazowego argumentu - WRSJA PREFEROWANA
//   // find if cartItems contains productToAdd
//   const itemExistIndex2 = cartItems.find((item) => {
//     return item.id === productToAdd.id;
//   });
//   //if found, icrement quantity
//   if (itemExistIndex2) {
//     return cartItems.map((item) =>
//       item.id === productToAdd.id
//         ? { ...item, quantity: (item.quantity += 1) }
//         : item
//     );
//   }
//   //return new array with modified cartItem / new cart item
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, productToRemove) => {
//   //Z KURSU - inny sposób - bez mutacji! (czyli bez nadpisywania orginalnych wartosci - react nie wie wtedy ze dana zmienna (tu array) sie zmienila - musi zmienic sie odnośnik)
//   //opcja BEZ MUTACJI bazowego argumentu - WRSJA PREFEROWANA

//   // find if cartItems contains productToAdd
//   const existingCartItem = cartItems.find((item) => {
//     return item.id === productToRemove.id;
//   });

//   //if item quantity is equal 1 -> remove item from cart
//   if(existingCartItem.quantity===1){
//     return cartItems.filter(item => item.id !== existingCartItem.id );
//   }

//   //if found, icrement quantity
//   if (existingCartItem) {
//     return cartItems.map((item) =>
//       item.id === productToRemove.id
//         ? { ...item, quantity: (item.quantity -= 1) }
//         : item
//     );
//   }
//   //return new array with modified cartItem / new cart item
//   return [...cartItems, { ...productToRemove, quantity: 1 }];
// };

// const removeCartAllQuantities = (cartItems, productToRemove) =>{
//     // console.log('cartItems bfr', cartItems)
//     // find if cartItems contains productToAdd
//   const newItem = cartItems.filter((item) => {
//     return item.id !== productToRemove.id;// ? false : true;
//   });
// // console.log('cartItems bfr', [...newItem])
// return [...newItem];
// //   //if found, icrement quantity
// //   if (itemExist) {
// //     const newCart = cartItems.map((item) =>{
// //       if(item.id !== productToRemove.id){
// //         return item;
// //       }});
// //       console.log('newCart', newCart)
// //       return [...newCart];
// //   }
// //     //return new array with modified cartItem / new cart item
// //     return [...cartItems];
// }

// //actual value you want to access
// export const CartContext = createContext({
//   //we push default value
//   cartItems: [],
//   toggleCart: null,
//   cartCount: null,
//   totalPrice: null,
//   cartAnime: null,
//   setCartAnime: () => null,
//   setCartItems: () => null,
//   setToggleCart: () => null,
//   addItemToCart: () => null,
// });

// //Functional component to wrap partion of code with will have access to above variables
// export const CartProvider = ({ children }) => {
//   //Functional component
//   const [cartItems, setCartItems] = useState([]);
//   const [toggleCart, setToggleCart] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [cartAnime, setCartAnime] = useState(false);

//   const addItemToCart = (productToAdd) => {
//     setCartItems(addCartItem(cartItems, productToAdd));
//   };

//   useEffect(() => {
//     const newCartCount = cartItems.reduce((accumulator, cartItem) => {
//       return accumulator + cartItem.quantity;
//     }, 0);
//     setCartCount(newCartCount);
//   }, [cartItems]);

//   useEffect(() => {
//     const newTotalPrice = cartItems.reduce((accumulator, cartItem) => {
//       return accumulator + cartItem.quantity * cartItem.price;
//     }, 0);
//     setTotalPrice(newTotalPrice);
//   }, [cartItems]);

//   useEffect(() => { //anime effect - scale up and down cart icon
//     setCartAnime(true);
//     setTimeout(() => {
//         setCartAnime(false);
//       }, 500);
//   }, [cartItems]);

//   const removeOneCartItem = (productToAdd) => {
//     setCartItems(removeCartItem(cartItems, productToAdd));
//   };

//   const removeItemfromCart = (productToRemove) => {
//     setCartItems(removeCartAllQuantities(cartItems, productToRemove));
//   };

//   const value = {
//     cartItems,
//     setCartItems,
//     toggleCart,
//     setToggleCart,
//     addItemToCart,
//     cartCount,
//     totalPrice,
//     removeOneCartItem,
//     removeItemfromCart,
//     cartAnime,
//     setCartAnime
//   };

//   // useEffect(()=>{
//   //     setProducts(PRODUCTS);
//   // },[]);//is called when parameters in array changes []  - here is empty so it will run only once, when component mounts

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
