import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp); //eventually getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider(); //initialize class, provider can by for github, tweeter etc.

googleProvider.setCustomParameters({
  prompt: "select_account",
});


export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); //init firestore instance of database

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {} //argument not obligatory, initialize with empty object
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid); //create special reference object with document called 'users' - słuyz do sprawdzania czy istnieje user i jakie ma przywileje, omoże zrobic

  const userSnapshot = await getDoc(userDocRef); //sprawdzamy czy istnieje dokument o danym unique path which where generated in doc() method
  //on this object Google provide special methods like 'do that user exist' or we need 'add new one'

  if (!userSnapshot.exists()) {
    //create new date in 'user' document - if no exist already
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, //is set to null on object Auth in the createAuthUserWithEmailAndPassword method return object
        email,
        createdAt,
        ...additionalInformation, //it will overwrite before values if it is the same
      });
    } catch (error) {
      console.log("error creating the user", error.code);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return; //get out if not

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
    email,
    password
  ) => {
    if (!email || !password) return; //get out if not
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
