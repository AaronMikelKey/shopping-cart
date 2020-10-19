import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Card = ({ name, description, price, url, amount, addItem }) => {
    const [checkout, setCheckout] = useState(false);

    const addThisItem = (e) => {
        e.preventDefault();
        setCheckout(true);
        addItem({name, description, price, url, amount});
    }

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
                        <p className="subtitle is-6">${price}</p>
                    </div>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
            <form name={ name } data-amount={ amount } >
              <button onClick={addThisItem}>Add to cart</button>
            </form> 

            {checkout && (
                <Link to="/shoppingcart">
                    <button>Checkout</button>
                </Link>
            )}
        </div>
    )
};

export default Card;