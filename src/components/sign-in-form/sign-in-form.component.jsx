import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component.jsx";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useState} from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils.js";
// import { UserContext } from "../../contexts/user.context";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
//   const {setCurrentUser} = useContext(UserContext);


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    // console.log('event handleSubmit A => ', event);
    event.preventDefault(); //we are going to handle everything acc to <form> data

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password); //returns userCredential, and we want only user
      // Signed in
    //   console.warn("user => ", user);
    //   setCurrentUser(user);
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
  };

  const logGoogleUser = async () => {
    // const { user } = await signInWithGooglePopup();
    // // setCurrentUser(user);
    // const userDocRef = await createUserDocumentFromAuth(user);
    await signInWithGooglePopup();
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
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
            Sign in
          </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
