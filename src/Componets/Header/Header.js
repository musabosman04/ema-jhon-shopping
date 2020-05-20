import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png';
const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="menu">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;