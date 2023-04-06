import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentFormNote,
  CardElementCustomized,
  ErrorMessage,
  SucceedMessage,
} from "./payment-form.style";
import { useState } from "react"; //for detrermine loading state during payment
import { useDispatch, useSelector } from "react-redux"; // pull of values: total value adn user
import {
  selectCartTotal,
  selectCartItems,
  selectPreviousCartItems,
} from "../../store/cart/cart.selector";
import {
  deleteCart,
  setPreviousCart,
} from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { PaymentButton } from "./payment-form.style";

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d",
      },
    },
    invalid: {
      fontFamily: "Arial, sans-serif",
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe(); //to make request in format that Stripe need
  const elements = useElements(); //have data from submitted form
  const dispatch = useDispatch();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const previousCartItems = useSelector(selectPreviousCartItems);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSucceed, setPaymentSucceed] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      //sure that 2 hooks are loaded
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const client_secret = response.paymentIntent.client_secret;
    // console.log(client_secret);
    // const {paymentIntent: {client_secret}} = response; //same as above
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement), //only one instace of evry element can by inside Elements index.js)
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    setIsProcessingPayment(false);
    // console.log(paymentResult);
    if (paymentResult.error) {
      setPaymentFailed(true);
      setPaymentSucceed(false);
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setPaymentSucceed(true);
        setPaymentFailed(false);
        alert("Payment Successful");
        // console.log("payment a", cartItems);
        dispatch(setPreviousCart(cartItems));
        dispatch(deleteCart());
        // console.log("payment b", cartItems);
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        {paymentFailed ? (
          <ErrorMessage>Payment failed. Try again!</ErrorMessage>
        ) : null}

        {paymentSucceed ? (
          <SucceedMessage>Payment succeed. Thanks for shopping!</SucceedMessage>
        ) : null}
        <h2>Credit card payment</h2>
        <CardElementCustomized options={cardStyle} />
        {cartItems.length ? (
          <PaymentButton
            isLoading={isProcessingPayment}
            buttonType={BUTTON_TYPE_CLASSES.inverted}
          >
            Pay now
          </PaymentButton>
        ) : null}

        <PaymentFormNote>
          <h4>For testing purposes, please use the card number below:</h4>
          <p>
            Card number (Payment succeeds) &#8594; <b>4242 4242 4242 4242</b>
          </p>
          <p>
            Card number (Payment is declined) &#8594; <b>4000 0000 0000 9995</b>
          </p>
          <p>
            These test card numbers work with any CVC, postal code and future
            expiry date.
          </p>
        </PaymentFormNote>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
