// import { CART_ACTION_TYPES } from "./cart.types";

import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  cartItems: [],
  toggleCart: false, //false
  //   cartCount: null,
  //   totalPrice: 0,
  cartAnime: false,
};

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

// export const setToggleCart = (toggleCart) => {
//   return createAction(CART_ACTION_TYPES.TOGGLE_CART, toggleCart);
// };

// export const setCartAnime = (cartAnime) => {
//   return createAction(CART_ACTION_TYPES.ANIME_CART, cartAnime);
// };

// export const addItemToCart = (cartItems, productToAdd) => {
//   //     setCartItems(addCartItem(cartItems, productToAdd));
//   return createAction(
//     CART_ACTION_TYPES.SET_CART_ITEMS,
//     addCartItem(cartItems, productToAdd)
//   );
// };

// export const removeOneCartItem = (cartItems, productToRemove) => {
//   return createAction(
//     CART_ACTION_TYPES.SET_CART_ITEMS,
//     removeCartItem(cartItems, productToRemove)
//   );
//   // setCartItems(removeCartItem(cartItems, productToRemove));
// };

// export const removeItemfromCart = (cartItems, productToRemove) => {
//   // setCartItems(removeCartAllQuantities(cartItems, productToRemove));
//   return createAction(
//     CART_ACTION_TYPES.SET_CART_ITEMS,
//     removeCartAllQuantities(cartItems, productToRemove)
//   );
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      // addCartItem(cartItems, productToAdd);
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeOneCartItem(state, action) {
      // addCartItem(cartItems, productToAdd);
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    removeItemfromCart(state, action) {
      // addCartItem(cartItems, productToAdd);
      state.cartItems = removeCartAllQuantities(
        state.cartItems,
        action.payload
      );
    },
    setToggleCart(state, action) {
      // addCartItem(cartItems, productToAdd);
      state.toggleCart = action.payload;
    },
    setCartAnime(state, action) {
      // addCartItem(cartItems, productToAdd);
      state.cartAnime = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeOneCartItem,
  removeItemfromCart,
  setToggleCart,
  setCartAnime,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_ACTION_TYPES.TOGGLE_CART:
//       return {
//         ...state,
//         toggleCart: payload,
//       };
//     case CART_ACTION_TYPES.ANIME_CART:
//       return {
//         ...state,
//         cartAnime: payload,
//       };
//     default:
//       return state;
//   }
// };
