
import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth'

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'


const SignIn = () => {
    // useEffect(async ()=>{ //after redirect the functional component'SignIn' is remount and once call this function (empty array as 2nd arg)
    //     const response = await getRedirectResult(auth)
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Popup</button> */}
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
