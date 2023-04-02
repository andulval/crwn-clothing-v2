import {
  CheckoutItemContainer,
  ImageContainer,
  NormalField,
  LeftArrowCss,
  RightArrowCss,
  Quantity,
  Value,
  RemoveX,
} from "./checkout-item.styles";
import { Fragment } from "react";
// import { useContext } from 'react';
// import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as LeftArrow } from "../../assets/reshot-icon-arrow-chevron-left-975UQXVKZF.svg";
import { ReactComponent as RightArrow } from "../../assets/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg";
import { useSelector, useDispatch } from "react-redux";
// import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemfromCart,
  removeOneCartItem,
  addItemToCart,
} from "../../store/cart/cart.reducer";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, price, quantity, name, id } = cartItem;
  //   const { addItemToCart, removeOneCartItem, removeItemfromCart } =
  //     useContext(CartContext);
  const dispatch = useDispatch();
  //You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
//   const cartItems = useSelector(selectCartItems);

  const removeCartItem = () => dispatch(removeOneCartItem(cartItem));
  const addCartItem = () => dispatch(addItemToCart(cartItem));
  const clearCartItem = () => dispatch(removeItemfromCart(cartItem));

  return (
    // <Fragment >
    //     <tr className="cart-final-item-container">
    //         <td><img src={imageUrl} alt={name}/></td>
    //         <td><p>{name}</p></td>
    //             <td>
    //             <div className='quantity-cart-block'>
    //             <LeftArrow onClick={()=>{removeOneCartItem(cartItem)}}></LeftArrow>
    //             <button className='left-arrow-button' onClick={()=>{removeOneCartItem(cartItem)}}>-</button>
    //             <span>{quantity}</span>
    //             <button className='right-arrow-button' onClick={()=>{addItemToCart(cartItem)}}>+</button>
    //             </div>
    //             </td>
    //         <td><p>${price}</p></td>
    //         <td><button className='remove-cart-item-button' onClick={()=>{removeItemfromCart(cartItem)}}>X</button></td>
    //     </tr>
    // </Fragment>
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <NormalField as="h5">{name}</NormalField>
      <Quantity>
        <LeftArrowCss onClick={removeCartItem}></LeftArrowCss>
        {/* <button className='left-arrow-button' onClick={()=>{removeOneCartItem(cartItem)}}>-</button> */}
        <Value>{quantity}</Value>
        {/* <button className='right-arrow-button' onClick={()=>{addItemToCart(cartItem)}}>+</button> */}
        <RightArrowCss className="arrow" onClick={addCartItem}></RightArrowCss>
      </Quantity>
      <NormalField>${price}</NormalField>
      {/* <span><button className='remove-cart-item-button' onClick={()=>{removeItemfromCart(cartItem)}}>X</button></span> */}
      <RemoveX onClick={clearCartItem}>&#10005;</RemoveX>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

// <div className="checkout-item-container">
// <div className="image-container">
// <img src={imageUrl} alt={name}/>
// </div>
// <normalField as='h4'>{name}</normalField>
// <div className='quantity'>
//     <LeftArrow className='arrow' onClick={removeCartItem}></LeftArrow>
//     {/* <button className='left-arrow-button' onClick={()=>{removeOneCartItem(cartItem)}}>-</button> */}
//     <normalField className='value'>{quantity}</normalField>
//     {/* <button className='right-arrow-button' onClick={()=>{addItemToCart(cartItem)}}>+</button> */}
//     <RightArrow className='arrow' onClick={addCartItem}></RightArrow>
// </div>
// <normalField className='price'>${price}</normalField>
// {/* <span><button className='remove-cart-item-button' onClick={()=>{removeItemfromCart(cartItem)}}>X</button></span> */}
// <div className='remove-button' onClick={clearCartItem}>&#10005;</div>
// </div>
