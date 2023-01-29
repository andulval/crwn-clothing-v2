import {Fragment} from 'react' //Fragment renders to nothing when landing on DOM
//it is because Component must have top level div or sth. Fragment just throw components insde without addidtional padding margin etc.
import {Outlet, Link} from 'react-router-dom'
//Outlet - w tym miejscu wstawiane są children of this component, dla route element
//link is like <a> ale poprawnie dynamicznie używa BrowserRouteer który został wybrany w górnym komponencie. nie przeładowuje strony jak <a>!
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navbar.styles.scss'

const Navbar = () => {
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
                    <Link className='nav-link' to='/sign-in'>
                        Sign in
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navbar