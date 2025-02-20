import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist"; //for local storage (sth like cookies, but in redux)
import storage from "redux-persist/lib/storage"; //default storage memory in Browsers
// import thunk from "redux-thunk"; //SAGA or THUNK - only one async library! thunk is smaller and simpler, Saga is complex
import createSagaMiddleware from "redux-saga"; //"@redux-saga/core";

import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

//optionally, to generate console.log what is action,
//what is the state before and after reducer is called
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  //   thunk,
  sagaMiddleware,
].filter(
  Boolean //"development" or "production" or other
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root", //we ewant perisit whole thing
  storage,
  whitelist: ["cart"],
  //blacklist: [] //ktore zmienne z 'store' nie chcemy tam trzymac. Tu nie chcemy user bo i tak jest autheticated przez Firestore, a może pojawic sie problem ze spojnoscia danych
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//root reducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
