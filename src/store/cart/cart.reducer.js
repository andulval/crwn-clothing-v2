import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  cartItems: [],
  previousCartItems: [],
  toggleCart: false, //false
  //   cartCount: null,
  //   totalPrice: 0,
  cartAnime: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      //   console.log(state, payload);
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        toggleCart: payload,
      };
    case CART_ACTION_TYPES.ANIME_CART:
      return {
        ...state,
        cartAnime: payload,
      };
    case CART_ACTION_TYPES.DELETE_CART:
      return { ...state, cartItems: [] };

    case CART_ACTION_TYPES.REUSE_PREVIOUS_CART:
      return { ...state, previousCartItems: payload };

    case CART_ACTION_TYPES.SET_WHOLE_CART:
      return { ...state, cartItems: payload };

    default:
      return state;
  }
};
