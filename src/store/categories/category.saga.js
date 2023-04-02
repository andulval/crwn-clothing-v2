import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSucess,
  fetchCategoriesFailed,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const fetchCategoriesAsync = () => {
//   const funct = async (dispatch) => {
//     dispatch(fetchCategoriesStart()); //zmiana danych w 'store' Reduxa, wymuszenie przeliczenia
//     try {
//       const categoriesArray = await getCategoriesAndDocuments("categories");
//       dispatch(fetchCategoriesSucess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoriesFailed(error));
//     }
//   };

//   return funct;
// };

export function* fetchCategoriesAsync() {
  //yield call() is almost the same as 'await' -> wait when thisa code is finished and then run code below
  //call() is generator effect, saga is required this type
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSucess(categoriesArray)); //almost the same as -> dispatch(fetchCategoriesSucess(categoriesArray));
  } catch (error) {
    //dispatch(fetchCategoriesFailed(error));
    yield put(fetchCategoriesFailed(error)); //almost the same as -> dispatch(fetchCategoriesSucess(categoriesArray));
  }
}

export function* onFetchCategories() {
  //yield - points with code when JS stopes execution until on this function is called .next() -> run code to next
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, //on which action SAGA is listening - and take the newest in the queue if during this action where more
    fetchCategoriesAsync
  ); //takeLatest -> choose newest action of this type and run
}

export function* categoriesSaga() {
  //all() ->pause for below rows ---> run everything insde and only complete when all of it is done
  yield all([call(onFetchCategories)]);
}
