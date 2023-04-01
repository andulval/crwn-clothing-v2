import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext, useEffect } from "react";
// import { CartContext } from "../../contexts/cart.context";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartAnime,
  selectCartItems,
} from "../../store/cart/cart.selector.js";

import { addItemToCart, setCartAnime } from "../../store/cart/cart.action.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const dispatch = useDispatch();
  //You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
  const cartItems = useSelector(selectCartItems);
  const cartAnime = useSelector(selectCartAnime);

  // const {cartItems, setCartItems, addItemToCart, setCartAnime} = useContext(CartContext);
  // console.log('cart is: ', cart)
  // const addToCardHandler = () => {
  //     // console.log('clickedProduct' , clickedProduct);
  //     // console.log('product is', product);
  //     cart.push(product);
  //     setCart(cart);
  // }
  // console.log('ProductCard hit!')

  const buttonClickHandler = () => {
    return dispatch(addItemToCart(cartItems, product)); //save chcanges to redux sotore obejct
    // changeafter1sHandler();
  };

  //   const cartAnimeInit = () => {
  //     return dispatch(setCartAnime(!cartAnime));
  //   };
  //   const cartAnimeAfter = () => {
  //     setTimeout(() => {
  //       return dispatch(setCartAnime(!cartAnime));
  //     }, 500);
  //   };
  // const changeAfter1sCartAnime = () => {
  //   setCartAnime(true);
  //   setTimeout(() => {
  //     setCartAnime(false);
  //   }, 500);
  // };
  useEffect(() => {
    //set cart icon element class, after 500ms remove this class
    //wyzwala się przy kazdym rerun komponentu, jelsi zmienna w [] jako 2nd argument ulegnie zmianie
    dispatch(setCartAnime(true));
    const timer = setTimeout(() => {
      dispatch(setCartAnime(false));
    }, 400);
    return () => clearTimeout(timer);
  }, [cartItems]);
  // return dispatch(setToggleCart(!toggleCart));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={buttonClickHandler}
      >
        Add to card
      </Button>
      {/* <span>{cart.length}</span> */}
    </ProductCardContainer>
  );
};

export default ProductCard;
