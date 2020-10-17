import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shoppingcart" component={ShoppingCart} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;