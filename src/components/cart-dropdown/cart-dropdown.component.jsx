import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  TotalPriceDropdown,
} from "./cart-dropdown.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../contexts/cart.context";
import CartItem from "../../components/cart-item/cart-item.component.jsx";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  selectToggleCart,
} from "../../store/cart/cart.selector.js";
import { useDispatch } from "react-redux";
import { setToggleCart } from "../../store/cart/cart.action.js";

function CartDropdown() {
  // const {name, price, imageUrl, id} = product;
  // const {cartItems, toggleCart, setToggleCart, totalPrice} = useContext(CartContext);
  // console.log('CardDropdown hit!')
  const cartItems = useSelector(selectCartItems);
  const toggleCart = useSelector(selectToggleCart);
  const navigate = useNavigate();
  const totalPrice = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    return dispatch(setToggleCart(!toggleCart));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>;
          })
        ) : (
          <EmptyMessage>No products yet!</EmptyMessage>
        )}
        {/* //tutaj map przez cart list */}
        {/* <ProductCard product={product} /> */}
      </CartItems>
      {/* <Link to="/cart"> */}
      <TotalPriceDropdown>
        Total: <b>{`$${totalPrice}`}</b>
      </TotalPriceDropdown>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </Button>
      {/* </Link> */}
    </CartDropdownContainer>
  );
}

export default CartDropdown;
