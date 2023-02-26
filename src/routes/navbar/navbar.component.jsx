import {Fragment, useContext} from 'react' //Fragment renders to nothing when landing on DOM
//it is because Component must have top level div or sth. Fragment just throw components insde without addidtional padding margin etc.
import {Outlet, Link} from 'react-router-dom'
//Outlet - w tym miejscu wstawiane są children of this component, dla route element
//link is like <a> ale poprawnie dynamicznie używa BrowserRouteer który został wybrany w górnym komponencie. nie przeładowuje strony jak <a>!
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navbar.styles.scss'

import {UserContext} from '../../contexts/user.context'
import {CartContext} from '../../contexts/cart.context'

import {signOutUser} from '../../utils/firebase/firebase.utils.js'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component'



const Navbar = () => {
    const {currentUser} = useContext(UserContext);
    const {cart, setCart, toggleCart, setToggleCart} = useContext(CartContext);
    // console.log('toggleCart', toggleCart);

    return(
        <Fragment>
            <div className='navbar'>
                <Link className='logo-container' to='/'>
                <CrwnLogo className='logo'/>
                </Link>   
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (<span className='nav-link' onClick={signOutUser}>
                    Sign Out, {currentUser.email}</span>) : (<Link className='nav-link' to='/auth'>
                    Sign in
                    </Link>)}
                    <CartIcon />
                </div>
                {toggleCart ? (<CardDropdown />) : (null)}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navbar