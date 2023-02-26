import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

const CartIcon = () => {
    const {cart, toggleCart, setToggleCart} = useContext(CartContext);

    const handleCartToggler = () => {
        // console.log('toggleCart --> ', toggleCart)
        setToggleCart(!toggleCart);
    }

// console.log('cart', cart)
    return (
        <div className='cart-icon-container' onClick={handleCartToggler}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cart.length}</span>
        </div>
    )
}

export default CartIcon