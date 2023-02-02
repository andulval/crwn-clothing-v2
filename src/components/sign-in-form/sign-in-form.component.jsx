import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils.js";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    // console.log('event handleSubmit A => ', event);
    event.preventDefault(); //we are going to handle everything acc to <form> data

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password); //returns userCredential, and we want only user
      // Signed in
      console.warn("user => ", user);
      // .then((userCredential) => {
      //   // Signed in
      //   const user = userCredential.user;
      // })
      resetFormFields();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode==='auth/user-not-found' || errorCode==='auth/wrong-password') {
        alert("Wrong email or password! Try again");
      } else {
        console.error({ errorCode, errorMessage });
      }
    }

    // try {
    //   //2 auth user - createAuthUserWithEmailAndPassword(email, password);
    //   const { user } = await createAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   console.log("user => ", user);
    //   //3 create user document
    //   const newUser = await createUserDocumentFromAuth(user, { displayName });
    //   console.log("newUserSaved => ", newUser);
    //   resetFormFields();
    // } catch (error) {
    //   if (error.code === "auth/email-already-in-use") {
    //     //this code is from firebase when it checks if user already exists
    //     alert("Cannot create user, email already in use");
    //   } else if (error.code === "auth/weak-password") {
    //     alert("Password should be at least 6 characters");
    //   } else {
    //     console.log("error SignUpForm", error.message);
    //   }
    // }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target; //daje nam wartosci (obiekt) który został wywołany
    setFormFields({ ...formFields, [name]: value }); //[name]: powoduje wpisanie warosic zmiennej do klucza obiektu
    //...formFields means spred vaules unchanged from previous useState, then modify name in this case..
    // console.log(event.target.name)
  };

  return (
    <div className="sign-in-container">
      <h2>I have already an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="buttons-container">
          <Button buttonType="" type="submit">
            Sign in
          </Button>
          <Button buttonType="google" type='button' onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
