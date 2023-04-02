import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesAsync } from "./category.action";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
//   isLoading: false,
//   error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload; //mutates code!
      //same as: return {...state, currentUser: payload};
      //but redux toolkit uses inner library to make sure that it immuable and no chaanges orginal object, just replace - and then react się odpala bo wykryje zmiane obiektu
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE, //default values if not provided
//   action = {}
// ) => {
//   //action={} empty object if nothing to call as parameter
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return { ...state, isLoading: true };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categories: payload, isLoading: false };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR:
//       return { ...state, error: payload, isLoading: false };
//     default:
//       return state;
//   }
// };
