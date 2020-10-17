import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './App';
import shoppingcart from './components/shoppingcart';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shoppingcart" component={ shoppingcart } />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;