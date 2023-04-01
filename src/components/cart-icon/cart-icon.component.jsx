import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {
  CartIconContainer,
  ShoppingIconCss,
  ItemCount,
  CartAnime,
} from "./cart-icon.styles.jsx";
// import {useContext} from 'react'
// import {CartContext} from '../../contexts/cart.context'
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectToggleCart,
  selectCartAnime,
} from "../../store/cart/cart.selector";
import { setToggleCart } from "../../store/cart/cart.action";

const CartIcon = () => {
  // const {cartCount, toggleCart, setToggleCart, cartAnime} = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const toggleCart = useSelector(selectToggleCart);
  const cartAnime = useSelector(selectCartAnime);

  const handleCartToggler = () => {
    // setToggleCart(!toggleCart);
    return dispatch(setToggleCart(!toggleCart));
  };



  // const handleCartTogglerHover = () => {
  //     // console.log('toggleCart --> ', toggleCart)
  //     setToggleCart(true);
  // }
  // const handleCartTogglerHoverLeave = () => {
  //     // console.log('toggleCart --> ', toggleCart)
  //     setToggleCart(false);
  // }

  // console.log('cart', cart)
  return (
    <CartIconContainer>
      <CartAnime
        className={`${cartAnime ? "transition" : ""}`}
        onClick={handleCartToggler}
      >
        <ShoppingIconCss />
        <ItemCount>{cartCount}</ItemCount>
      </CartAnime>
    </CartIconContainer>
  );
};

export default CartIcon;

{
  /* <div className={`cart-icon-container cart-anime ${cartAnime ? 'transition' : ''}`} onClick={handleCartToggler}  >
<ShoppingIcon className='shopping-icon' />
<span className='item-count'>{cartCount}</span>
</div> */
}
