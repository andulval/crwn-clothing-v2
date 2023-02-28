import './product-card.styles.scss'
import Button from '../button/button.component';
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

const ProductCard = ({product}) => {
    const {name, price, imageUrl, id} = product;
    const {cartItems, setCartItems, addItemToCart} = useContext(CartContext);
    // console.log('cart is: ', cart)
    // const addToCardHandler = () => {
    //     // console.log('clickedProduct' , clickedProduct);
    //     // console.log('product is', product);
    //     cart.push(product);
    //     setCart(cart);
    // }
    // console.log('ProductCard hit!')

    return (
    <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
    <Button buttonType='inverted' onClick={() => addItemToCart(product)} >Add to card</Button>
    {/* <span>{cart.length}</span> */}
    </div> 
    )
}

export default ProductCard;