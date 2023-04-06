import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// import {useContext} from 'react'
// import {CartContext} from '../../contexts/cart.context'
import "./checkout.component.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  selectPreviousCartItems,
} from "../../store/cart/cart.selector";
import { setAllCart } from "../../store/cart/cart.action";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  // const {cartItems, totalPrice} = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const previousCart = useSelector(selectPreviousCartItems);

  const reusePreviousCartHandler = () => {
    // console.log("previousCart", previousCart);
    // dispatch(setPreviousCart(previousCart));
    dispatch(setAllCart(previousCart));
  };

  // const sumCost
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      {totalPrice === 0 ? (
        <span className="previousCartButton" onClick={reusePreviousCartHandler}>Click to add previous purchased items</span>
      ) : null}
      <span className="total">{`Total: $${totalPrice}`}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
