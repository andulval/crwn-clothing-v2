import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'
import CartItem from '../../components/cart-item/cart-item.component.jsx' 

function CardDropdown() {
    // const {name, price, imageUrl, id} = product;
    const {cartItems} = useContext(CartContext);
    // console.log('CardDropdown hit!')
    return (
        <div className='cart-dropdown-container'>
        <div className="cart-items">
            {cartItems.map((cartItem)=>{
                return (
                    <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
                )
            })}
            {/* //tutaj map przez cart list */}
            {/* <ProductCard product={product} /> */}
        </div>
        <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CardDropdown;
