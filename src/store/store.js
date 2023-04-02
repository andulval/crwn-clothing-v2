import { configureStore } from "@reduxjs/toolkit";

// import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { persistStore, persistReducer } from "redux-persist"; //for local storage (sth like cookies, but in redux)
// import storage from "redux-persist/lib/storage"; //default storage memory in Browsers
// import thunk from "redux-thunk";

// //optionally, to generate console.log what is action,
// //what is the state before and after reducer is called
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  //   thunk,
].filter(
  Boolean //"development" or "production" or other
);

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// const persistConfig = {
//   key: "root", //we ewant perisit whole thing
//   storage,
//   whitelist: ["cart"],
//   //blacklist: [] //ktore zmienne z 'store' nie chcemy tam trzymac. Tu nie chcemy user bo i tak jest autheticated przez Firestore, a może pojawic sie problem ze spojnoscia danych
// };

export const store = configureStore({
  reducer: rootReducer,
  //by default has 3 middleware (thunk and some acc to conole.log errors) but when we put here middlewares the default one are rmoved!
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// //root reducer
// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
