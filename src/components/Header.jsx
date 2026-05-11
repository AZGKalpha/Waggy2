import logo from '../assets/logo.svg'
import account from '../assets/account.svg'
import heart from '../assets/heart.svg'
import heartAc from '../assets/heart-ac.svg'
import cart from '../assets/cart.svg'
import loupe from '../assets/loupe.svg'
import { NavLink, useLocation } from 'react-router-dom'

function Header({ cartCount, filterText, setFilterText }) {
    const activeLink = 'header__nav-item header__nav-item--active'
    const normalLink = 'header__nav-item'
    const location = useLocation()
    const isWishlistActive = location.pathname === '/wishlist'
    const isCartActive = location.pathname === '/cart'

    return (
        <header className='header'>
            <div className='header__top'>
                <div className='l-side'>
                    <div className='header__logo'><img src={logo} alt="logo" /></div>
                    <div className='header__search'>
                        <input type="text" placeholder='Search for more than 10,000 products' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
                        <img src={loupe} alt="loupe" />
                    </div>
                </div>
                <div className='r-side'>
                    <div className='header__phone'><span>Phone</span><br />+980-34984089</div>
                    <div className='header__email'><span>Email</span><br />waggy@gmail.com</div>
                </div>
            </div>
            <div className='header__bottom'>
                <div className='header__nav'>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
                        Home
                    </NavLink>
                    <a href="#" className='header__nav-item'>Page</a>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? activeLink : normalLink}>
                        Shop
                    </NavLink>
                    <a href="#" className='header__nav-item'>Blog</a>
                    <a href="#" className='header__nav-item'>Contact</a>
                    <a href="#" className='header__nav-item'>Offers</a>
                </div>
                <div className='header__link'>
                    <NavLink to="/account" className='header__link-item'>
                        <img src={account} alt="account" />
                    </NavLink>
                    <NavLink to="/wishlist" className='header__link-item'>
                        <img src={isWishlistActive ? heartAc : heart} alt="heart" />
                    </NavLink>
                    {!isCartActive && (
                        <NavLink to="/cart" className='header__link-item header__cart'>
                            <img src={cart} alt="cart" />
                            <span>{cartCount}</span>
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header