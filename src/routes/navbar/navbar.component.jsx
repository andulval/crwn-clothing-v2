import { Fragment, useContext } from "react"; //Fragment renders to nothing when landing on DOM
//it is because Component must have top level div or sth. Fragment just throw components insde without addidtional padding margin etc.
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
//Outlet - w tym miejscu wstawiane są children of this component, dla route element
//link is like <a> ale poprawnie dynamicznie używa BrowserRouteer który został wybrany w górnym komponencie. nie przeładowuje strony jak <a>!
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  CartIconCss,
} from "./navbar.styles";

// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { selectToggleCart } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navbar = () => {
  //   const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);

  //   const { cartItems, setCartItems, toggleCart, setToggleCart, addItemToCart } =
  //     useContext(CartContext);
  // console.log('toggleCart', toggleCart);
  const toggleCart = useSelector(selectToggleCart);
  const navigate = useNavigate();
  const signOutHandler = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <NavbarContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            //{function(event){ func1(); func2()}}
            <NavLink
              as="span"
              onClick={() => {
                signOutUser();
                signOutHandler();
              }}
            >
              Sign Out, <b>{currentUser.email}</b>
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {toggleCart ? <CartDropdown /> : null}
        {/* {toggleCart && <CardDropdown />} */}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
