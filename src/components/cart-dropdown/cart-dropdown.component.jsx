import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../../contexts/cart.context'
import CartItem from '../../components/cart-item/cart-item.component.jsx' 
import {Outlet, Link} from 'react-router-dom'

function CartDropdown() {
    // const {name, price, imageUrl, id} = product;
    const {cartItems, toggleCart, setToggleCart, totalPrice} = useContext(CartContext);
    // console.log('CardDropdown hit!')
    const navigate = useNavigate();

    const goToCheckoutHandler = ()=>{
        navigate('/checkout')
        setToggleCart(!toggleCart);
    };

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
            {/* <Link to="/cart"> */}
            <span className="total-price-dropdown">
            Total: <b>{`$${totalPrice}`}</b>
            </span>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
            {/* </Link> */}
        </div>
    )
}

export default CartDropdown;
