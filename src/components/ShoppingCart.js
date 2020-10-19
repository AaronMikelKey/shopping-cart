import React from 'react';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ cart, deleteItem, updateQuantity }) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].amount * parseInt(cart[i].price);
    }

    if (cart.length === 0) {
        return (
            <div className='App'>
                <div className="box mx-6 opacity-5">
                    <h1>No items in cart yet.</h1>
                    <Link to='/shoppingpage'>
                        <button>Get to shopping!</button>
                    </Link>
                </div>
            </div>
        )
    } else {

        return (
            <div>
                <h1> Your Total is: ${total.toFixed(2)}</h1>
                <Link to='/checkedout'>
                    <button>Pay Now</button>
                </Link>
                <div className="columns is-variable is-3">
                    {cart.map((item) => <CartCard key={item.name} id={item.name} {...item} />)}
                </div>
            </div>
        );
    };
}

export default ShoppingCart;