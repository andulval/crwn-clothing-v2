import {ProductCardContainer, Footer, Name, Price} from './product-card.styles.jsx'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

const ProductCard = ({product}) => {
    const {name, price, imageUrl, id} = product;
    const {cartItems, setCartItems, addItemToCart, setCartAnime} = useContext(CartContext);
    // console.log('cart is: ', cart)
    // const addToCardHandler = () => {
    //     // console.log('clickedProduct' , clickedProduct);
    //     // console.log('product is', product);
    //     cart.push(product);
    //     setCart(cart);
    // }
    // console.log('ProductCard hit!')

    const buttonClickHandler = () => {
        addItemToCart(product);
        // changeafter1sHandler();
    }
    // const changeafter1sHandler = () => {
    //     setCartAnime(true);
    //     setTimeout(() => {
    //         setCartAnime(false);
    //       }, 500);
    // }

    return (
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={buttonClickHandler} >Add to card</Button>
        {/* <span>{cart.length}</span> */}
    </ProductCardContainer> 
    )
}

export default ProductCard;