import {createContext, useEffect, useReducer} from 'react'

import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
import {createAction} from '../utils/reducer/reducer.utils'

//by context we expose values (eg. lijke global variables for whole App)
//actual value you want to access
export const UserContext = createContext({//we push default value
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
// REDUCER:
//const userReducer = (state, action) => { 
    // reducer change object and then it return it (it is called 'state') - react rerender when object has changed (no reference - whole object!)
    //state - poprzednia wersja obiektu ktory w sumie zmieniamy teraz
    //action - ma dwie wartosci pod sobą: type i payload -> type - what value we want, select which way to caluate or change and return new object, payload - obiekt przekazany w funckji wywołującej
    //
// }
const userReducer = (state, action) => {
    const {type, payload} = action; //type as String, payload as anything (but optional)
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}
const INITIAL_STATE = {
    currentUser: null
}

//Functional component to wrap partion of code with will have access to above variables
export const UserProvider = ({children}) =>{//Functional component
    // const [currentUser, setCurrentUser] = useState(null);

    // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    //state - to co return from userReducer - a wiec tu objekt
    //dispatch function - whenever you call it you passes an Action object to 'userReducer'and upadtes state
    
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    // lub zostawic [state, dispatch] ==> i dać:
    // const {currentUser} = state

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


// //NORMAL / Basic React

// import {createContext, useState, useEffect} from 'react'

// import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// //actual value you want to access
// export const UserContext = createContext({//we push default value
//     currentUser: null,
//     setCurrentUser: () => null,
// })

// //Functional component to wrap partion of code with will have access to above variables
// export const UserProvider = ({children}) =>{//Functional component
//     const [currentUser, setCurrentUser] = useState(null);
//     const value = {currentUser, setCurrentUser};

//     useEffect(()=>{
//     //onAuthStateChanged gives us back 'unsubscribe' method
//     const unsubscribe = onAuthStateChangedListener((user)=>{
//         // console.log('UserProvider useEffect triger', user)
//         if(user){
//             createUserDocumentFromAuth(user); //if there is a user create Documnet (user instance in our DataBase)
//         }
//         setCurrentUser(user);
//     }) //stop listen when user sigout - if not it will be a memory leak
//     //onAuthStateChanged gives us  unsubcribe function (AI stop listening)
//     return unsubscribe; //unsubcribe whenever you mount new component - user need to log in when refresh
//     }, []); //is called when parameters in array changes []  - here is empty so it will run only once, when component mounts
    

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }





