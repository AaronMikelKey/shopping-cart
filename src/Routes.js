import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './App';
import ShoppingCart from './components/shoppingcart';
import ShoppingPage from './components/shoppingPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ShoppingPage" component={ ShoppingPage } />
                <Route exact path="/shoppingcart" component={ ShoppingCart } />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;