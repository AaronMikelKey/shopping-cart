import React from 'react';

const CartCard = ({ name, description, price, url, amount, addItem }) => {

    return (
        <div className="card column is-3">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={url} alt={name} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{price}</p>
                    </div>
                </div>
                <div className="content">
                    Quantity: {amount}
                </div>
            </div>
        </div>
    )
};

export default CartCard;