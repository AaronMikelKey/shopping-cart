import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './components/shoppingcart';
import ShoppingPage from './components/shoppingPage';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {qArray: []};
    };
    
    handleChange = (e) => {
        this.setState(prevState => ({
            qArray: [...prevState.qArray, {[e.target.name]: e.target.value}]
        }));
        console.log(this.state.qArray);
    };
    

    render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" render={()=> <Home />} />
                <Route exact path="/shoppingpage" render={()=> <ShoppingPage parentState={this.state} /> } />
                <Route exact path="/shoppingcart" render={()=> <ShoppingCart parentState={this.state} /> } />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
}


export default Routes;