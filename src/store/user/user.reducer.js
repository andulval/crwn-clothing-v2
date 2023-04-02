// import { USER_ACTION_TYPES } from "./user.types";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user", //like user/SET_CURRENT_USER
  initialState: INITIAL_STATE,
  reducers: {
    //below row is shortcut of:
    //setCurrentUser: () => {},
    setCurrentUser(state, action) {
      //when setCurrentUser is being dispatched call this function
      state.currentUser = action.payload; //mutates code!
      //same as: return {...state, currentUser: payload};
      //but redux toolkit uses inner library to make sure that it immuable and no chaanges orginal object, just replace - and then react się odpala bo wykryje zmiane obiektu
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

// REDUCER:
//const userReducer = (state, action) => {
// reducer change object and then it return it (it is called 'state') - react rerender when object has changed (no reference - whole object!)
//state - poprzednia wersja obiektu ktory w sumie zmieniamy teraz
//action - what value we want - which way to caluate or change and return new object
//
// }

// export const userReducer = (state = INITIAL_STATE, action) => {
//   //reducers is a function wichich return new store object (modifided acc to type in action)
//   const { type, payload } = action; //type as String, payload as anything (but optional)
//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };

//     default:
//       return state;
//   }
// }
