import React from 'react';
import Card from './Card';

const ShoppingPage = ({ items, addItem }) => {

    
    return (
            <div className="columns is-variable is-3">
                {items.map((item) => <Card key={item.name} id={item.name} {...item} addItem={addItem} />)}
            </div>
    )
}

export default ShoppingPage;