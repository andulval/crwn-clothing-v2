import './checkout-item.component.scss'
import {Fragment} from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';  
import {ReactComponent as LeftArrow} from '../../assets/reshot-icon-arrow-chevron-left-975UQXVKZF.svg'
import {ReactComponent as RightArrow} from '../../assets/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg'


const CheckoutItem = ({cartItem})=>{
    const {imageUrl, price, quantity, name, id} = cartItem;
    const {addItemToCart, removeOneCartItem, removeItemfromCart} = useContext(CartContext);

    const removeCartItem = ()=>removeOneCartItem(cartItem)
    const addCartItem = ()=>addItemToCart(cartItem)
    const clearCartItem = ()=>removeItemfromCart(cartItem)

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
            <div className="checkout-item-container">
                <div className="image-container">
                <img src={imageUrl} alt={name}/>
                </div> 
                <h4 className='name'>{name}</h4>
                <div className='quantity'>
                    <LeftArrow className='arrow' onClick={removeCartItem}></LeftArrow>
                    {/* <button className='left-arrow-button' onClick={()=>{removeOneCartItem(cartItem)}}>-</button> */}
                    <div className='value'>{quantity}</div>
                    {/* <button className='right-arrow-button' onClick={()=>{addItemToCart(cartItem)}}>+</button> */}
                    <RightArrow className='arrow' onClick={addCartItem}></RightArrow>
                </div>
                <span className='price'>${price}</span>
                {/* <span><button className='remove-cart-item-button' onClick={()=>{removeItemfromCart(cartItem)}}>X</button></span> */}
                <div className='remove-button' onClick={clearCartItem}>&#10005;</div>
            </div>
    )
}   

export default CheckoutItem;