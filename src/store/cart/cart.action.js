import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
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
export const setCartAnime = (cartAnime) => {
  return createAction(CART_ACTION_TYPES.ANIME_CART, cartAnime);
};

export const setToggleCart = (toggleCart) => {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART, toggleCart);
};

export const addItemToCart = (cartItems, productToAdd) => {
  //     setCartItems(addCartItem(cartItems, productToAdd));
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    addCartItem(cartItems, productToAdd)
  );
};

export const removeOneCartItem = (cartItems, productToRemove) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    removeCartItem(cartItems, productToRemove)
  );
  // setCartItems(removeCartItem(cartItems, productToRemove));
};

export const removeItemfromCart = (cartItems, productToRemove) => {
  // setCartItems(removeCartAllQuantities(cartItems, productToRemove));
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    removeCartAllQuantities(cartItems, productToRemove)
  );
};

export const deleteCart = () => {
  //   return createAction(CART_ACTION_TYPES.DELETE_CART, []);
};

export const setPreviousCart = (previousCart) => {
  // setCartItems(removeCartAllQuantities(cartItems, productToRemove))REUSE_PREVIOUS_CART
  console.log("previousCart ACTION", previousCart);
  return createAction(CART_ACTION_TYPES.REUSE_PREVIOUS_CART, [...previousCart]);
};

export const setAllCart = (allCart) => {
  return createAction(CART_ACTION_TYPES.SET_WHOLE_CART, [...allCart]);
};
