import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

const CartIcon = () => {
    const {cartCount, toggleCart, setToggleCart, cartAnime} = useContext(CartContext);

    const handleCartToggler = () => {
        // console.log('toggleCart --> ', toggleCart)
        setToggleCart(!toggleCart);
    }
    const handleCartTogglerHover = () => {
        // console.log('toggleCart --> ', toggleCart)
        setToggleCart(true);
    }
    const handleCartTogglerHoverLeave = () => {
        // console.log('toggleCart --> ', toggleCart)
        setToggleCart(false);
    }

// console.log('cart', cart)
    return (
        <div className={`cart-icon-container cart-anime ${cartAnime ? 'transition' : ''}`} onClick={handleCartToggler}  >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon