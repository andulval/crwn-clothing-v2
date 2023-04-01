import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

// REDUCER:
//const userReducer = (state, action) => { 
    // reducer change object and then it return it (it is called 'state') - react rerender when object has changed (no reference - whole object!)
    //state - poprzednia wersja obiektu ktory w sumie zmieniamy teraz
    //action - what value we want - which way to caluate or change and return new object
    //
// }
export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action; //type as String, payload as anything (but optional)
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        default:
            return state;
    }
}


