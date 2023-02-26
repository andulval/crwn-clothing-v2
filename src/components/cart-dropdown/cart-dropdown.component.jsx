import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import ProductCard from '../product-card/product-card.component';
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

function CardDropdown({product}) {
    // const {name, price, imageUrl, id} = product;
    const {cart} = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        {cart.map((products)=>{
            return (
                <span key={products.id}>{products.name}</span>
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
