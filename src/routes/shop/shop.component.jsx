import { useContext } from "react";
import {ProductsContext} from '../../contexts/product.context'
import ProductCard from '../../components/product-card/product-card.component.jsx'
import './shop.styles.scss'
import {CartContext} from '../../contexts/cart.context'

const Shop = ()=> {
    // console.log('shop component', SHOP_DATA)
    const {products} = useContext(ProductsContext);
    // const {cart, setCart} = useContext(CartContext);
    // console.log('products', products)
    
    return (
        <div className="products-container">
            {products.map((product) => {
                {/* console.log('products id', product.id) */}
                return(
                    <ProductCard key={product.id} product={product} />
                )
            })}
        </div>
    )
}

export default Shop;