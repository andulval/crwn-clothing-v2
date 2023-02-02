
// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth'

// import {
//     auth,
//     signInWithGooglePopup,
//     createUserDocumentFromAuth,
//     signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils.js";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import "./authentication.styles.scss";

const Authentication = () => {
    // useEffect(async ()=>{ //after redirect the functional component'SignIn' is remount and once call this function (empty array as 2nd arg)
    //     const response = await getRedirectResult(auth)
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])




  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
