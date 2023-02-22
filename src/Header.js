import React from 'react'
import Logo from './amazon.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const[{basket},dispatch]=useStateValue()
    return (
        <div className='header'>
            <Link to='/'>
            <img className='logo' src={Logo} alt="" />
            </Link>
            <div className="h-search">
                <input className='h-searchinput' type="text" />
                <SearchIcon className='searchIcon' />
            </div>
            <div className="h-nav">
                <div className="h-option">
                    <span className='hp1'>Hello</span>
                    <span className='hp2'>Sign In</span>
                </div>
                <div className="h-option">
                    <span className='hp1'>Returns</span>
                    <span className='hp2'>& Orders</span>
                </div>
                <div className="h-option">
                    <span className='hp1'>Your</span>
                    <span className='hp2'>Prime</span>
                </div>
                <div className='h-basket'>
                    <Link to='/checkout' > 
                    <ShoppingBasketIcon className='basket'/>
                    </Link>
                    <span className='hp2 count'>{basket?.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
