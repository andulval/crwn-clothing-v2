import {createContext, useState, useEffect} from 'react'

import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

//actual value you want to access
export const UserContext = createContext({//we push default value
    currentUser: null,
    setCurrentUser: () => null,
})

//Functional component to wrap partion of code with will have access to above variables
export const UserProvider = ({children}) =>{//Functional component
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
    //onAuthStateChanged gives us back 'unsubscribe' method
    const unsubscribe = onAuthStateChangedListener((user)=>{
        // console.log('UserProvider useEffect triger', user)
        if(user){
            createUserDocumentFromAuth(user); //if there is a user create Documnet (user instance in our DataBase)
        }
        setCurrentUser(user);
    }) //stop listen when user sigout - if not it will be a memory leak
    //onAuthStateChanged gives us  unsubcribe function (AI stop listening)
    return unsubscribe; //unsubcribe whenever you mount new component - user need to log in when refresh
    }, []); //is called when parameters in array changes []  - here is empty so it will run only once, when component mounts
    

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}






