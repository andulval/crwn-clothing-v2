import { async } from "@firebase/util";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component.jsx'
import './sign-up-form.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
// import {UserContext} from '../../contexts/user.context'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
    // const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }


  const handleSubmit = async (event) => {
    // console.log('event handleSubmit A => ', event);
    event.preventDefault(); //we are going to hanle everything acc to form data
    // console.log("formFields => ", formFields);
    //1 check password and confirmpassword
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    try {
        //2 auth user - createAuthUserWithEmailAndPassword(email, password);
        const {user}= await createAuthUserWithEmailAndPassword(email, password);
        console.log("user => ", user);
        // setCurrentUser(user)

        //3 create user document
        const newUser = await createUserDocumentFromAuth(user, {displayName})
        console.log("newUserSaved => ", newUser);
        resetFormFields();
    } catch (error) {
        if(error.code==='auth/email-already-in-use'){//this code is from firebase when it checks if user already exists
            alert('Cannot create user, email already in use')
        }else if(error.code==='auth/weak-password'){
            alert('Password should be at least 6 characters')
        }else{
            console.log("error SignUpForm", error.message);
        }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target; //daje nam wartosci (obiekt) który został wywołany
    setFormFields({ ...formFields, [name]: value }); //[name]: powoduje wpisanie warosic zmiennej do klucza obiektu
    //...formFields means spred vaules unchanged from previous useState, then modify name in this case..
    // console.log(event.target.name)
  };

  return (
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
