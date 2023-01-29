import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpiNiMroi2otPNP3NnKd_RDCHDSmGIvzo",
  authDomain: "crwn-clothing-db-ba565.firebaseapp.com",
  projectId: "crwn-clothing-db-ba565",
  storageBucket: "crwn-clothing-db-ba565.appspot.com",
  messagingSenderId: "410816882916",
  appId: "1:410816882916:web:145882e7b465fc07cc64f1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore(); //init firestore instance of database

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid) //create special reference object with document called 'users' - słuyz do sprawdzania czy istnieje user i c omoże zrobic 

    const userSnapshot = await getDoc(userDocRef); //sprawdzamy czy istnieje dokument o danym unique path which where generated in doc() method
    //on this object Google provide special methods like do that user exist or we need add

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })     
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef

}