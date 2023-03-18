import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field = 'title' //default value, if no delivered
) => {
  const colletcionRef = collection(db, collectionKey);
  const batch = writeBatch(db); //batch is a transaction - all operatuions must succed to suuces write
  objectsToAdd.forEach((object) => {
    //to which doucment should we write?
    const docRef = doc(colletcionRef, object[field].toLowerCase()); //colletcionRef or db
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Batch DONE");
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef); //gives us a object from given collection
    // console.log('q',q);
    const querySnapshot = await getDocs(q); // fetch documents snapshot
    // When Firestore returns data from a query, it does not provide the raw document data - 
    // instead we are provided a QuerySnapshot containing an array of DocumentSnapshot instances. 
    // Although these classes provide useful functionality, 
    // we sometimes just want the data from the database for convinience.
    // As shown above the useFirestoreQuery hook returns a QuerySnapshot, 
    // which requires developers to iterate over DocumentSnapshot instances and extract the data:
    // console.log('querySnapshot', querySnapshot);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{//we want just raw data
        //querySnapshoot.docs gives us an aaray of documents inside
        // console.log('doc', docSnapshot);
        // console.log('docSnapshot.data', docSnapshot.data())
        //return getDoc(doc);
        const {title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    // console.log(categoryMap)
    return categoryMap;
}


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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; //get out if not

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; //get out if not

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth); //signOut user

//onAuthStateChanged calls 'callback' whenever auth change
//onAuthStateChanged is Open listener - when setted is always listening
//problem with this is that we need stop it when signout because is will cause leak of user data
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
