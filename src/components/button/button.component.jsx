import "./button.styles.jsx";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (
  buttonType = BUTTON_TYPE_CLASSES.base //to get autocomplete after write BUTTON_TYPE_CLASSES
) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);
  //return objekt bazujac na wartosciach zwracanych - dla 'google-sign-in' zwróc obiekt Styled Component 'GoogleSignInButton'
  // {base: BaseButton,
  // google: GoogleSignInButton,
  // inverted: InvertedButton}[buttonType]
// different approauch using NEW MAP OBJECT
//const buttonMap = new Map();
// buttonMap.set(BUTTON_TYPE_CLASSES.base, BaseButton);
// buttonMap.set(BUTTON_TYPE_CLASSES.google, GoogleSigninButton);
// buttonMap.set(BUTTON_TYPE_CLASSES.inverted, InvertedButton);

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   buttonMap.get(buttonType);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType); //returns component from button styled components
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;

/* <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button> */
