import React from 'react';
import itemList from './itemList';

const Card = (props) => {
    return itemList.map(item => (
        <div className="card">
            <h3>{ item.name }</h3>
            <img url={item.url} alt={item.name}></img>
            <p>{ item.description }</p>
        </div>
    ));
};

export default Card;