import React from 'react';
import logo from '../../images/amazon-logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/manage">Manage Inventory</a>
            </nav> 
        <div className='searchbox'>
           <input className='searcharea' placeholder='Type here to Search'/> 
        </div> 
        </div>
        
        
        
    );
};

export default Header;