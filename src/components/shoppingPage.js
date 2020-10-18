import React from 'react';
import Card from './Card';
import NavBar from './NavBar';

const ShoppingPage = () => {
    return (
        <div>
            <NavBar />
            <div className="columns is-variable is-3">
                <Card />
            </div>
        </div>
    )
}

export default ShoppingPage;