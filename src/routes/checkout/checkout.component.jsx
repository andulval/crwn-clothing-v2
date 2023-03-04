import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'
import './checkout.component.scss'

const Checkout = ()=>{
    const {cartItems, totalPrice} = useContext(CartContext);
    // const sumCost
    return(
        <div className="table-container">
            {/* <table style={{border: "2px solid black"}}>
                    <thead>
                        <tr>
                            <th >Product</th>
                            <th >Description</th>
                            <th >Quantity</th>
                            <th >Price</th>
                            <th >Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((cartItem)=>{
                        return <CartFinalItem key={cartItem.id} cartItem={cartItem}/>
                    })}
                    </tbody>
            </table>
            <span>{`Sum amount of all products: ${totalPrice}`}</span> */}

            <div className='checkout-container'>
                    <div className="checkout-header">
                        <div className="header-block">
                            <span>Product</span>
                        </div>
                        <div className="header-block">
                            <span>Description</span>
                        </div>
                        <div className="header-block">
                            <span>Quantity</span>
                        </div>
                        <div className="header-block">
                            <span>Price</span>
                        </div>
                        <div className="header-block">
                            <span>Remove</span>
                        </div>
                    </div>

                    {cartItems.map((cartItem)=>{
                        return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    })}
      
                <span className="total">
                {`Total: $${totalPrice}`} 
                </span>  
            </div>
      

        </div>  
    )
}

export default Checkout; 