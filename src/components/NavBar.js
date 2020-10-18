import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart)

const NavBar = (props) => {
    return (
        <header className="hero breadcrumb is-warning is-bold">
            <ul>
                    <li><h1 className="navbar-brand title">Shopping Page</h1></li>
                    <li><NavLink 
                        className="navbar-item"
                        to="/home"
                        activeStyle={{
                            color: "rgb(12, 136, 136)"
                        }}
                        >
                        Home
                        </NavLink></li>
                    <li><NavLink 
                        className="navbar-item"
                        to="/shoppingcart"
                        activeStyle={{
                            color: "rgb(12, 136, 136)"
                        }}
                        >
                            <FontAwesomeIcon className="mr-3" icon={faShoppingCart} />
                            Shopping Cart
                    </NavLink></li>
                    <li><NavLink 
                        className="navbar-item"
                        to="/shoppingpage"
                        activeStyle={{
                            color: "rgb(12, 136, 136)"
                        }}
                        >
                        Shopping
                        </NavLink></li>
            </ul>
        </header>
    );
};

export default NavBar;