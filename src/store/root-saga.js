//to escapluate all sagas

import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";

//function* - GENERATOR FUNCTION - ES6
export function* rootSaga() {
    yield all([call(categoriesSaga)]);
}
