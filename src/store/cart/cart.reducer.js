import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  cartItems: [],
  toggleCart: false, //false
  //   cartCount: null,
  //   totalPrice: 0,
  cartAnime: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
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
    default:
      return state;
  }
};
