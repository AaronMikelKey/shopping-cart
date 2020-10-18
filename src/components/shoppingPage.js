import React from 'react';
import Card from './Card';
import NavBar from './NavBar';

const ShoppingPage = (props) => {

    
    return (
        <div>
            <NavBar />
            <div className="columns is-variable is-3">
                <Card {...props}/>
            </div>
        </div>
    )
}

export default ShoppingPage;