import { createSelector } from "reselect"; //to memoize functions - dont rerun if no needed

const selectCartReducer = (state) => state.cart; //from global object thanks to redux and reducers

export const selectCartItems = createSelector(
  [selectCartReducer], //when it changes
  (cart) => cart.cartItems
);
export const selectPreviousCartItems = createSelector(
  [selectCartReducer], //when it changes
  (cart) => cart.previousCartItems
);

export const selectToggleCart = createSelector(
  [selectCartReducer], //when it changes
  (cart) => cart.toggleCart
);

export const selectCartAnime = createSelector(
  [selectCartReducer], //when it changes call below function
  (cart) => cart.cartAnime
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity;
  }, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.price;
  }, 0)
);

// const newCartCount = newCartItems.reduce((accumulator, cartItem) => {
//   return accumulator + cartItem.quantity;
// }, 0);

// const newTotalPrice = newCartItems.reduce((accumulator, cartItem) => {
//   return accumulator + cartItem.quantity * cartItem.price;
// }, 0);
