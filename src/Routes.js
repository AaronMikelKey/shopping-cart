import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import itemList from './components/itemList'
import Home from './Home';
import ShoppingCart from './components/shoppingcart';
import ShoppingPage from './components/shoppingPage';

function Routes() {
    const [cart, setCart] = useState([]);
    const addItem = (newItem) => {
        const inCart = cart.map((item) => item.name).includes(newItem.name);
        if (inCart) {
            updateQuantity(newItem.name, 1)
        } else {
            setCart([...cart, newItem])
        }
        console.log(cart)
    };

    const deleteItem = (name) => {
        setCart(cart.filter((item) => item.name !== name));
    };

    const updateQuantity = (name, amount) => {
        setCart(
            cart.map((item) => (item.name === name ? {...item, amount: item.amount + amount} : item)
            )
        );
    };

    const startOver = () => {
        setCart([]);
    }


    let cartAmount = 0;
    for (let i=0;i<cart.length;i++) {
        cartAmount += cart[i].amount;
    }
    
    return (
        <BrowserRouter>
            <NavBar cartAmount={ cartAmount }/>
            <Switch>
                <Route exact path="/home" >
                    <Home />
                </Route>
                <Route exact path="/shoppingpage" >
                    <ShoppingPage 
                        items={itemList}
                        addItem={addItem} />
                </Route>
                <Route exact path="/shoppingcart" > 
                    <ShoppingCart 
                        cart={ cart }
                        deleteItem={ deleteItem }
                        updateQuantity={ updateQuantity }
                    />
                </Route>
                <Route exact path='/checkedout'>
                    <h1>Thanks for shopping with us!</h1>
                    <Link to='/home'>
                        <button onClick={startOver}>Start Over</button>
                    </Link>
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}



export default Routes;