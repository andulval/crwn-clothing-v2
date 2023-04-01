import { createSelector } from "reselect"; //for memoization

//state object is available as global thru store.js and Providers thanks to Redux
const selectCategoryReducer = (state) => state.categories; //get whole store object and then categories

export const selectCategoriesMemoization = createSelector(
  //memoization -> optymalizacja, nie wykonywanie kodu jeśli parametry się nie zmieniają!
  [selectCategoryReducer], //when this variables changes run below function
  (categoriesSlice) => {
    //this function will run only if above array will change
    return categoriesSlice.categories;
  }
);

export const selectCategories = createSelector(
  [selectCategoriesMemoization], //when this variables changes run below function
  (
    categories //this function will run only if above array will change
  ) =>
    categories.reduce((acc, category) => {
      //we want categories
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.isLoading;
  }
);

// export const selectCategories = createSelector(
//   [selectCategoriesMemoization],
//   (state) =>
//     state.categories.categories.reduce((acc, category) => {
//       //we want categories
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// );
